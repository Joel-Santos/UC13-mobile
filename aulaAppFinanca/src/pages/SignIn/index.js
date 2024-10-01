import React from  'react'
import {Background, Container, Logo, AreaInput, Input, SubmitButton, SubmitText, Link, LinkText } from './styles'
import logoImg from "../../../assets/Logo.png";

export default function SingnIn(){

    return (
        <Background>
            <Container>
                <Logo 
                    source={require('../../../assets/Logo.png')}
                />

            </Container>
        </Background>
       
    )

}