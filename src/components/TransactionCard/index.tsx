import React, { useMemo } from 'react';
import { TranscationCardProps } from '../../@types/transactionCardProps';
import { categories } from '../../utils/categories';
import {Container,
        Title,
        Amount,
        Footer,
        Category,
        Icon,
        CategoryName,
        DateText} from './styles';

interface Props{
   data: TranscationCardProps;
}

export default function TransactionCard(props: Props){
   const amount = useMemo(() => {
      return Number(props.data.amount).toLocaleString('pt-BR', {style: 'currency', currency: 'BRL'});
   }, []);

   const date = useMemo(() => {
      return new Date(props.data.date).toLocaleDateString('pt-BR', {
         day: '2-digit',
         month: '2-digit',
         year: '2-digit'
      });
   }, []);

   const category = useMemo(() => {
      return categories.find(category => category.key === props.data.category);
   }, []);

   return(
      <Container>
         <Title>{props.data.name}</Title>

         <Amount type={props.data.type}>
            {props.data.type === 'up' ? amount : '- ' + amount}
         </Amount>

         <Footer>
            <Category>
               <Icon name={category!.icon}/>
               <CategoryName>{category!.name}</CategoryName>
            </Category>

            <DateText>{date}</DateText>
         </Footer>
      </Container>
   );
};