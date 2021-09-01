import React from 'react';
import { Container, Category, Icon } from './styles';

interface CategorySelectProps{
   category: string;
}

export default function CategorySelect(props: CategorySelectProps){
   return(
      <Container>
         <Category>{ props.category }</Category>

         <Icon name="chevron-down"/>
      </Container>
   );
}