import React from 'react';

import AppleIcon from './../../assets/apple.svg';
import GoogleIcon from './../../assets/google.svg';
import LogoIcon from './../../assets/logo.svg';

import {Container,
        Header,
        TitleWrapper,
        Title,
        SignInTitle,
        Footer,
        FooterWrapper} from './styles';

import { RFValue } from 'react-native-responsive-fontsize';
import SignInSocialButton from '../../components/SignInSocialButton';
import { useAuth } from '../../hooks/auth';
import { Alert } from 'react-native';

export default function SignIn(){
   const { signInWithGoogle, signInWithApple } = useAuth();

   async function handleSignInWithGoogle(){
      try{
         await signInWithGoogle();
      } catch(err){
         Alert.alert('Não foi possível conectar a conta Google' as string);
         console.log(err);
      }
   }

   async function handleSignInWithApple(){
      try{
         await signInWithApple();
      } catch(err){
         Alert.alert('Não foi possível conectar a conta Apple' as string);
         console.log(err);
      }
   }
   
   return(
      <Container>
         <Header>
            <TitleWrapper>
               <LogoIcon 
                  width={RFValue(120)} 
                  height={RFValue(68)}
               />

               <Title>Controle suas {'\n'} finanças de forma {'\n'} muito simples</Title>
            </TitleWrapper>

            <SignInTitle>Faça seu login com {'\n'} uma das contas abaixo</SignInTitle>
         </Header>
         
         <Footer>
            <FooterWrapper>
               <SignInSocialButton 
                  title="Entrar com Google" 
                  icon={GoogleIcon}
                  onPress={handleSignInWithGoogle}
               />

               <SignInSocialButton 
                  title="Entrar com Apple" 
                  icon={AppleIcon}
                  onPress={handleSignInWithApple}
               />
            </FooterWrapper>
         </Footer>
      </Container>
   );
}