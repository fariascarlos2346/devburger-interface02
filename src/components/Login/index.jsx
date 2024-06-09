import { yupResolver } from '@hookform/resolvers/yup';
import { useForm } from 'react-hook-form';
import * as yup from 'yup';

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
    const schema = yup
    .object({
        email: yup.string().email().required(),
        password: yup.string().min(6).required(),
    })
    .required();

    const {
        register,
        handleSubmit,
        formState: { error },
    } = useForm({
      resolver: yupResolver(schema),
    });
    const onSubmit = (data) => console.log(data);

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
                <Form onSubmit={handleSubmit(onSubmit)}>
                    <InputContainer>
                        <label>Email</label>
                        <input type="email" {...register('email')}/>
                    </InputContainer>

                    <InputContainer>
                        <label>Senha</label>
                        <input type="password" {...register('password')}/>
                    </InputContainer>
                    <Button type="submit">Entrar</Button>
                </Form>
                <p>
                    Não possui conta? <a>Clique aqui.</a>
                </p>
            </RightContainer>
        </Container>
    );
};