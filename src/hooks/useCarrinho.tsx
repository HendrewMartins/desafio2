import { createContext, ReactNode, useContext, useState } from 'react';
import { toast } from 'react-toastify';
import { api } from '../services/api';
import { Produto, Estoque } from '../types';

interface CarrinhoProviderProps {
  children: ReactNode;
}

interface UpdateProdutoSaldo {
  produtoId: number;
  saldo: number;
}

interface CarrinhoContextData {
  carrinho: Produto[];
  addProduto: (produtoId: number) => Promise<void>;
  removeProduto: (produtoId: number) => void;
  updateProdutoSaldo: ({ produtoId, saldo }: UpdateProdutoSaldo) => void;
  clearProduto:() => void;
}

const CarrinhoContext = createContext<CarrinhoContextData>({} as CarrinhoContextData);

export function CarrinhoProvider({ children }: CarrinhoProviderProps): JSX.Element {
  const [carrinho, setCarrinho] = useState<Produto[]>(() => {
    const storagedCarrinho = localStorage.getItem('@Desafio:carrinho');

    if (storagedCarrinho) {
      return JSON.parse(storagedCarrinho);
    }

    return [];
  });

  const clearProduto = async () => {
    const clearCarrinho: Produto[] = [];
    setCarrinho(clearCarrinho);
  }

  const addProduto = async (produtoId: number) => {
    try {
      const produtoInCarrinho = carrinho.findIndex(produto => produto.id === produtoId);
      let newCarrinho = [...carrinho];

      if (produtoInCarrinho !== -1) {
        const { data: estoque } = await api.get<Estoque>(`estoque/${produtoId}`);

        if (carrinho[produtoInCarrinho].saldo >= estoque.saldo) {
          toast.error('Quantidade maior que o saldo de estoque');
          return;
        }

        newCarrinho[produtoInCarrinho].saldo += 1;
        setCarrinho(newCarrinho);
      } else {
        const { data: produto } = await api.get(`produtos/${produtoId}`);
        newCarrinho = [...carrinho, { ...produto, saldo: 1 }]
        setCarrinho(newCarrinho);
      }

      localStorage.setItem('@Desafio:carrinho', JSON.stringify(newCarrinho));
      toast.success('Produto adicionado ao Carrinho');
    } catch {
      toast.error('Erro na adição do produto');
    }
  };


  const removeProduto = (produtoId: number) => {
    try {
      const produtoInCarrinho = carrinho.findIndex(produto => produto.id === produtoId);

      if (produtoInCarrinho === -1) {
        toast.error('Erro na remoção do produto');
        return;
      }

      const updatedCarrinho = carrinho.filter(produto => produto.id !== produtoId);
      setCarrinho(updatedCarrinho);
      localStorage.setItem('@Desafio:carrinho', JSON.stringify(updatedCarrinho));
    } catch {
      toast.error('Erro na remoção do produto');
    }
  };

  const updateProdutoSaldo = async ({
    produtoId,
    saldo,
  }: UpdateProdutoSaldo) => {
    try {
      if (saldo <= 0) return;
      const produtoInCarrinho = carrinho.findIndex(produto => produto.id === produtoId);

      if (produtoInCarrinho === -1) {
        toast.error('Erro na alteração de quantidade do produto');
        return;
      }

      const { data: estoque } = await api.get<Estoque>(`estoque/${produtoId}`);
      const produtoUnavaliable = saldo > estoque.saldo;

      if (produtoUnavaliable) {
        toast.error('Quantidade insuficiente no estoque');
        return;
      }

      const updatedCarrinho = [...carrinho];
      updatedCarrinho[produtoInCarrinho].saldo = saldo;

      setCarrinho(updatedCarrinho);
      localStorage.setItem('@Desafio:carrinho', JSON.stringify(updatedCarrinho));
    } catch {
      toast.error('Erro na alteração de quantidade do produto');
    }
  };

  return (
    <CarrinhoContext.Provider
      value={{ carrinho, addProduto, removeProduto, updateProdutoSaldo, clearProduto }}
    >
      {children}
    </CarrinhoContext.Provider>
  );
}

export function useCarrinho(): CarrinhoContextData {
  const context = useContext(CarrinhoContext);

  return context;
}
