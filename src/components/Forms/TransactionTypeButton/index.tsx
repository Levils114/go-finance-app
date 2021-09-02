import React from 'react';
import { TouchableOpacityProps } from 'react-native';
import {Container,
        Icon,
        Title} from './styles';

interface TransactionTypeButtonProps extends TouchableOpacityProps{
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
      <Container type={type} isActive={isActive} {...rest}>
         <Icon name={icons[type]} type={type}/>
         <Title>{title}</Title>
      </Container>
   );
}