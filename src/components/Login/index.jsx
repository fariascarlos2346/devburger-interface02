import { yupResolver } from '@hookform/resolvers/yup';
import { useForm } from 'react-hook-form';
import * as yup from 'yup';

import Full from '../../assets/full.svg';
import { Button } from '../../containers/Button';
import { api } from '../../services/api';

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
        email: yup
        .string()
        .email('Digite um e-mail válido')
        .required('O e-mail é obrigatório'),
        password: yup.string().min(6,'A senha deve ter pelo menos 6 caractere').required('Digite uma senha'),
    })
    .required();

    const {
        register,
        handleSubmit,
        formState: { errors },
    } = useForm({
      resolver: yupResolver(schema),
    });

    console.log(errors);

    const onSubmit = async (data) => {
        const response = await api.post('/session', {
            email: data.email,
            password: data.password,
        });

        console.log(response);
    };

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
                        <p>{errors?.email?.message}</p>
                    </InputContainer>

                    <InputContainer>
                        <label>Senha</label>
                        <input type="password" {...register('password')}/>
                        <p>{errors?.password?.message}</p>
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