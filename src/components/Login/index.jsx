import { Container } from './styles';
import Logo from '../../assets/logo.svg';
export function Login() {
    return (
        <Container>
            <leftContainer>
                <img src={Logo} alt="logo-devburger"/>
            </leftContainer>
            <RightContainer>
                <Title>
                    Olá, seja bem vindo ao<span> Pitada do Sabor! </span>  Acesse com seu 
                    <span>Login e Senha.</span>
                </Title>
                <Form>
                    <InputContainer>
                        <label>Email</label>
                        <input type="email" />
                    </InputContainer>

                    <InputContainer>
                        <label>Senha</label>
                        <input type="password" />
                        <Link>Esqueci minha senha.</Link>
                        <Button>Entrar</Button>
                    </InputContainer>
                </Form>
                <Link>Não possoi conta? Clique aqui.</Link>
            </RightContainer>
        </Container>
    );
};