import React from 'react';

import { Container, Title, Amount } from './styles';

interface HistoryCardProps{
   amount: string;
   title: string;
   color: string;
}

export default function HistoryCard(props: HistoryCardProps){
   return(
      <Container color={props.color}>
         <Title>{props.title}</Title>
         <Amount>{props.amount}</Amount>
      </Container>
   );
}