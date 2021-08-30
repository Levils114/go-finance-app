import React from 'react';
import { TranscationCardProps } from '../../@types/transactionCardProps';
import {Container,
        Title,
        Amount,
        Footer,
        Category,
        Icon,
        CategoryName,
        Date} from './styles';

interface Props{
   data: TranscationCardProps;
}

export default function TransactionCard(props: Props){
   return(
      <Container>
         <Title>{props.data.title}</Title>

         <Amount type={props.data.type}>
            {props.data.type === 'positive' ? props.data.amount : '- ' + props.data.amount}
         </Amount>

         <Footer>
            <Category>
               <Icon name={props.data.category.icon}/>
               <CategoryName>{props.data.category.name}</CategoryName>
            </Category>

            <Date>{props.data.date}</Date>
         </Footer>
      </Container>
   );
};