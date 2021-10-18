import React, { createContext, useContext, useState, useEffect } from "react";

import * as AuthSession from 'expo-auth-session';
import * as AppleAuthentication from 'expo-apple-authentication';
import AsyncStorage from "@react-native-async-storage/async-storage";

interface User{
   name: string;
   id: string;
   email: string;
   picture?: string;
}

interface AuthContextProps{
   user: User;
   loadingUserData: boolean;
   signInWithGoogle(): Promise<void>;
   signInWithApple(): Promise<void>;
   signOut(): Promise<void>;
}

interface AuthorizationResponse{
   params: {
      access_token: string;
   };
   type: string;
}

const { CLIENT_ID } = process.env;
const { REDIRECT_URI } = process.env;

const AuthContext = createContext({} as AuthContextProps);

export const AuthProvider: React.FC = ({ children }) => {
   const [user, setUser] = useState({} as User);
   const [loadingUserData, setLoadingUserData] = useState(true);

   useEffect(() => {
      async function loadUserData(){
         try{
            const userData = await AsyncStorage.getItem('@GoFinance:User');

            if(userData){
               const userDataParsed = JSON.parse(userData);

               setUser(userDataParsed);
            }
         } catch(err){
            console.log(err);
         } finally{
            setLoadingUserData(false);
         }
      }

      loadUserData();
   }, []);

   async function signInWithGoogle(): Promise<void>{
      try{
         const RESPONSE_TYPE = 'token';
         const SCOPE = encodeURI('profile email');

         const authUrl = `https://accounts.google.com/o/oauth2/v2/auth?client_id=${CLIENT_ID}&redirect_uri=${REDIRECT_URI}&response_type=${RESPONSE_TYPE}&scope=${SCOPE}`;

         const { type, params } = await AuthSession.startAsync({ authUrl }) as AuthorizationResponse;

         if(type === 'success'){
            const response = await fetch(`https://www.googleapis.com/oauth2/v1/userinfo?alt=json&access_token=${params.access_token}`);
            const userInfo = await response.json();

            setUser(userInfo);
            await AsyncStorage.setItem('@GoFinance:User', JSON.stringify(userInfo));
         }
      } catch(err){
         throw new Error(err as string);
      }
   }

   async function signInWithApple(): Promise<void>{
      try{
         const credential = await AppleAuthentication.signInAsync({
            requestedScopes: [AppleAuthentication.AppleAuthenticationScope.FULL_NAME, AppleAuthentication.AppleAuthenticationScope.EMAIL]
         });

         if(credential){
            const user = {
               name: credential.fullName?.givenName!,
               email: credential.email!,
               id: credential.user,
               picture: `https://ui-avatars.com/api/?name=${credential.fullName?.givenName!}&length=1`,
            }

            setUser(user);
            await AsyncStorage.setItem('@GoFinance:User', JSON.stringify(user));
         }
      } catch(err){
         throw new Error(err as string);
      }
   }

   async function signOut(): Promise<void>{
      try{
         setUser({} as User);
         await AsyncStorage.removeItem('@GoFinance:User');
      } catch(err){
         throw new Error(err as never);
      }
   }

   return(
      <AuthContext.Provider value={{ user, loadingUserData, signInWithGoogle, signInWithApple, signOut }}>
         {children}
      </AuthContext.Provider>
   );
};

export function useAuth(){
   return useContext(AuthContext);
}