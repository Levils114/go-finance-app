import React from "react";

import { RectButtonProps } from "react-native-gesture-handler";
import { SvgProps } from "react-native-svg";

import { Button, IconContainer, Title } from "./styles";

interface SignInSocialButtonProps extends RectButtonProps{
   title: string;
   icon: React.FC<SvgProps>;
}

export default function SignInSocialButton({ title, icon: Icon, ...rest }: SignInSocialButtonProps){
   return(
      <Button {...rest}>
         <IconContainer>
            <Icon />
         </IconContainer>

         <Title>{title}</Title>
      </Button>
   );
}