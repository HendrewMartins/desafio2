import React, { useState } from 'react';
import { Container, Button, ButtonHome } from './styles';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import Input from '@material-ui/core/Input'
import { useHistory } from 'react-router-dom';
import { toast } from 'react-toastify';
import { useCarrinho } from '../../hooks/useCarrinho';

const Cliente = (): JSX.Element => {
    const history = useHistory();
    const [nome, setNome] = useState('');
    const [cpf, setCpf] = useState('');
    const [email, setEmail] = useState('');
    const [telefone, setTelefone] = useState('');
    const [endereco, setEndereco] = useState('');
    const [numero, setNumero] = useState('');
    const [estado, setEstado] = useState('');
    const [cep, setCep] = useState('');
    const [pais, setPais] = useState('');
    const { clearProduto } = useCarrinho();

    

    function handleHome() {
        history.push('/');
    }

    function addCliente() {
        if (nome === '') {
            toast.error('Nome deve ser Preenchido!');
            return;
        }

        if (cpf === '') {
            toast.error('CPF deve ser Preenchido!');
            return;
        }

        if (email === '') {
            toast.error('Email deve ser Preenchido!');
            return;
        }

        if (telefone === '') {
            toast.error('Telefone deve ser Preenchido!');
            return;
        }

        if (endereco === '') {
            toast.error('Endereço deve ser Preenchido!');
            return;
        }

        if (numero === '') {
            toast.error('Numero deve ser Preenchido!');
            return;
        }

        if (estado === '') {
            toast.error('Estado deve ser Preenchido!');
            return;
        }

        if (cep === '') {
            toast.error('CEP deve ser Preenchido!');
            return;
        }

        if (pais === '') {
            toast.error('País deve ser Preenchido!');
            return;
        }


        localStorage.setItem('@Desafio:Cliente-nome', nome);
        localStorage.setItem('@Desafio:Cliente-cpf', cpf);
        localStorage.setItem('@Desafio:Cliente-email', email);
        localStorage.setItem('@Desafio:Cliente-telefone', telefone);
        localStorage.setItem('@Desafio:Cliente-endereco', endereco);
        localStorage.setItem('@Desafio:Cliente-numero', numero);
        localStorage.setItem('@Desafio:Cliente-estado', estado);
        localStorage.setItem('@Desafio:Cliente-cep', cep);
        localStorage.setItem('@Desafio:Cliente-pais', pais);

        localStorage.removeItem('@Desafio:carrinho');
        clearProduto();
        history.push('/');
        toast.success('Venda Finalizada com Sucesso !!!!');
    }

    return (
        <Container>
            <Typography variant="h6" gutterBottom>
                Cliente
            </Typography>
            <form>
                <Grid container spacing={3}>
                    <Grid item xs={12} sm={8}>
                        <Input 
                            value={nome} 
                            onChange={e => setNome(e.target.value)}
                            required
                            id="nome"
                            name="nome"
                            placeholder="Nome"
                            fullWidth
                            autoComplete="dado-nome"
                        />
                    </Grid>
                    <Grid item xs={12} sm={4}>
                        <Input
                            value={cpf} 
                            onChange={e => setCpf(e.target.value)}
                            required
                            id="cpf"
                            name="cpf"
                            placeholder="CPF"
                            fullWidth
                            autoComplete="dado-cpf"
                        />
                    </Grid>
                    <Grid item xs={12} sm={8}>
                        <Input
                            value={email} 
                            onChange={e => setEmail(e.target.value)}
                            required
                            type="email"
                            id="email"
                            name="email"
                            placeholder="Email"
                            fullWidth
                            autoComplete="dado-email"
                        />
                    </Grid>
                    <Grid item xs={12} sm={4}>
                        <Input
                            value={telefone} 
                            onChange={e => setTelefone(e.target.value)}
                            required
                            id="telefone"
                            name="telefone"
                            placeholder="Telefone"
                            fullWidth
                            autoComplete="dado-telefone"
                        />
                    </Grid>
                    <Grid item xs={12} sm={10}>
                        <Input
                            value={endereco} 
                            onChange={e => setEndereco(e.target.value)}
                            required
                            id="endereco"
                            name="endereco"
                            placeholder="Endereço"
                            fullWidth
                            autoComplete="envio-endereco"
                        />
                    </Grid>
                    <Grid item xs={12} sm={2}>
                        <Input 
                            value={numero} 
                            onChange={e => setNumero(e.target.value)}
                            required
                            id="numero" 
                            name="numero" 
                            placeholder="Numero" 
                            fullWidth 
                        />
                    </Grid>
                    <Grid item xs={12} sm={4}>
                        <Input 
                            value={estado} 
                            onChange={e => setEstado(e.target.value)}
                            required
                            id="estado" 
                            name="estado" 
                            placeholder="Estado" 
                            fullWidth 
                        />
                    </Grid>
                    <Grid item xs={12} sm={4}>
                        <Input
                            value={cep} 
                            onChange={e => setCep(e.target.value)}
                            required
                            id="cep"
                            name="cep"
                            placeholder="CEP"
                            fullWidth
                            autoComplete="envio cep"
                        />
                    </Grid>
                    <Grid item xs={12} sm={4}>
                        <Input
                            value={pais} 
                            onChange={e => setPais(e.target.value)}
                            required
                            id="pais"
                            name="pais"
                            placeholder="País"
                            fullWidth
                            autoComplete="envio pais"
                        />
                    </Grid>

                    <Grid item xs={12} sm={3}>
                        <Button onClick={addCliente} type="submit">
                            Finalizar Venda
                        </Button>

                    </Grid>

                    <Grid item xs={12} sm={3}>
                        <ButtonHome onClick={handleHome}>
                            Continuar Compra
                        </ButtonHome>
                    </Grid>

                </Grid>
            </form>
        </Container>
    );
};

export default Cliente;