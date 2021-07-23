import React from 'react';
import { Container, Button, ButtonHome } from './styles';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import TextField from '@material-ui/core/TextField';
import { useHistory } from 'react-router-dom';

//const initialFormState = {
  //  name: "",
  //  email: "",
  //  password: ""
//};



const Cliente = (): JSX.Element => {
    //const [form, setForm] = useState(initialFormState);
    const history = useHistory();


    function handleHome() {
        history.push('/');
    }

    return (
        <Container>
            <Typography variant="h6" gutterBottom>
                Cliente
            </Typography>
            <form>
                <Grid container spacing={3}>
                    <Grid item xs={12} sm={8}>
                        <TextField
                            required
                            id="nome"
                            name="nome"
                            label="Nome"
                            fullWidth
                            autoComplete="dado-nome"
                        />
                    </Grid>
                    <Grid item xs={12} sm={4}>
                        <TextField
                            required
                            id="cpf"
                            name="cpf"
                            label="CPF"
                            fullWidth
                            autoComplete="dado-cpf"
                        />
                    </Grid>
                    <Grid item xs={12} sm={8}>
                        <TextField
                            required
                            id="email"
                            name="email"
                            label="Email"
                            fullWidth
                            autoComplete="dado-email"
                        />
                    </Grid>
                    <Grid item xs={12} sm={4}>
                        <TextField
                            required
                            id="telefone"
                            name="telefone"
                            label="telefone"
                            fullWidth
                            autoComplete="dado-telefone"
                        />
                    </Grid>
                    <Grid item xs={12} sm={10}>
                        <TextField
                            required
                            id="endereco"
                            name="endereco"
                            label="Endereco"
                            fullWidth
                            autoComplete="envio-endereco"
                        />
                    </Grid>
                    <Grid item xs={12} sm={2}>
                        <TextField id="numero" name="numero" label="Numero" fullWidth />
                    </Grid>
                    <Grid item xs={12} sm={4}>
                        <TextField id="estado" name="estado" label="Estado" fullWidth />
                    </Grid>
                    <Grid item xs={12} sm={4}>
                        <TextField
                            required
                            id="cep"
                            name="cep"
                            label="CEP"
                            fullWidth
                            autoComplete="envio cep"
                        />
                    </Grid>
                    <Grid item xs={12} sm={4}>
                        <TextField
                            required
                            id="pais"
                            name="pais"
                            label="País"
                            fullWidth
                            autoComplete="envio pais"
                        />
                    </Grid>

                    <Grid item xs={12} sm={3}>
                        <Button type="submit">
                            Gravar Cliente
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