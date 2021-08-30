import React from 'react';
import {Container,
        Title,
        Amount,
        Footer,
        Category,
        Icon,
        CategoryName,
        Date} from './styles';

export default function TransactionCard(){
   return(
      <Container>
         <Title>Desenvolvimento de site</Title>

         <Amount>R$ 12.5</Amount>

         <Footer>
            <Category>
               <Icon name="dollar-sign"/>
               <CategoryName>Vendas</CategoryName>
            </Category>

            <Date>12/12/2021</Date>
         </Footer>
      </Container>
   );
};