import Full from '../../assets/full.svg';
import { Button } from '../../containers/Button';

import {
    Container,
    Form,
    InputContainer,
    LeftContainer,
    RightContainer,
    Title
} from './styles';

export function Login() {
    return (
        <Container>
            <LeftContainer>
                <img src={Full} alt="logo-devburger" />
            </LeftContainer>
            <RightContainer>
                <Title>
                    Olá, seja bem vindo ao <span> Pitada do Sabor! 
                        <br />
                    </span>  Acesse com seu <span> Login e Senha.</span>
                    
                </Title>
                <Form>
                    <InputContainer>
                        <label>Email</label>
                        <input type="email" />
                    </InputContainer>

                    <InputContainer>
                        <label>Senha</label>
                        <input type="password" />
                    </InputContainer>
                    <Button>Entrar</Button>
                </Form>
                <p>
                    Não possui conta? <a>Clique aqui.</a>
                </p>
            </RightContainer>
        </Container>
    );
};