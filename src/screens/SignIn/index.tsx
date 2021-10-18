import React, { useState } from 'react';
import { ActivityIndicator, Alert, Platform } from 'react-native';

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
import { useTheme } from 'styled-components';

export default function SignIn(){
   const { signInWithGoogle, signInWithApple } = useAuth();
   const theme = useTheme();

   const [isLoading, setIsLoading] = useState(false);

   async function handleSignInWithGoogle(){
      try{
         setIsLoading(true);

         await signInWithGoogle();
      } catch(err){
         Alert.alert('Não foi possível conectar a conta Google' as string);

         setIsLoading(false);
         console.log(err);
      } finally{
         setIsLoading(false);
      }
   }

   async function handleSignInWithApple(){
      try{
         setIsLoading(true);

         await signInWithApple();
      } catch(err){
         Alert.alert('Não foi possível conectar a conta Apple' as string);

         setIsLoading(false);
         console.log(err);
      } finally{
         setIsLoading(false);
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

               {Platform.OS === 'ios' && 
                  <SignInSocialButton 
                     title="Entrar com Apple" 
                     icon={AppleIcon}
                     onPress={handleSignInWithApple}
                  />
               }
            </FooterWrapper>

            {isLoading && (
               <ActivityIndicator 
                  color={theme.colors.shape} 
                  style={{
                     marginTop: 18,
                  }}
               />
            )}
         </Footer>
      </Container>
   );
}