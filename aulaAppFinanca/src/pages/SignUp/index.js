import React, { useContext } from 'react'
import { Platform, ActivityIndicator } from 'react-native';
import { AuthContext } from '../../contexts/auth';

import {Background, Container, Logo, AreaInput, Input, SubmitButton, SubmitText,Link, LinkText } from '../SignIn/styles'

import { useNavigation } from '@react-navigation/native';



export default function SignUp(){
    const {user} = useContext(AuthContext);
     function chamaFuncao(){
        alert(user.nome)
     }


    const navigation = useNavigation();


    return (
       <Background>
                <Container
                behavior={Platform.OS === 'ios' ? 'padding' : ''}
                enabled
            >
                <AreaInput>
                <Input
                    placeholder="Seu Nome"
                />
                </AreaInput>
                <AreaInput>
                <Input
                    placeholder="Seu Email"
                />
                </AreaInput>

                <AreaInput>
                <Input
                    placeholder="Sua senha"
                />
                </AreaInput>

                <SubmitButton activeOpacity={0.8}  onPress={chamaFuncao}>
                 <SubmitText>Cadastrar</SubmitText>
                </SubmitButton>


            </Container>
       </Background> 
    )
}