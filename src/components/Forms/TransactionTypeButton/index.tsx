import React from 'react';
import { RectButtonProps } from 'react-native-gesture-handler';
import {Container,
        Button,
        Icon,
        Title} from './styles';

interface TransactionTypeButtonProps extends RectButtonProps{
   title: string;
   type: 'up' | 'down';
   isActive: boolean;
}

const icons = {
   up: 'arrow-up-circle',
   down: 'arrow-down-circle'
}

export default function TransactionTypeButton({ title, type, isActive, ...rest }: TransactionTypeButtonProps){
   return(

      <Container type={type} isActive={isActive}>
         <Button {...rest}>
            <Icon name={icons[type]} type={type}/>
            <Title>{title}</Title>
         </Button>
      </Container>
   );
}