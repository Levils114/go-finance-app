import React, { useState } from 'react';
import Button from '../../components/Forms/Button';
import CategorySelect from '../../components/Forms/CategorySelect';
import Input from '../../components/Forms/Input';
import TransactionTypeButton from '../../components/Forms/TransactionTypeButton';

import {Container,
        Header,
        Title,
        Form,
        Fields,
        TransactionsTypes} from './styles';

export default function Register(){
   const [trasactionTypeSelected, setTransactionTypeSelected] = useState('');

   return(
      <Container>
         <Header>
            <Title>Cadastro</Title>
         </Header>

         <Form>
            <Fields>
               <Input 
                  placeholder="Nome"
               />
               <Input 
                  placeholder="Preço"
               />

               <TransactionsTypes>
                  <TransactionTypeButton 
                     type="up"
                     title="Entrada"
                     isActive={trasactionTypeSelected === 'up'}
                     onPress={() => setTransactionTypeSelected('up')}
                  />
                  <TransactionTypeButton 
                     type="down"
                     title="Saída"
                     isActive={trasactionTypeSelected === 'down'}
                     onPress={() => setTransactionTypeSelected('down')}
                  />
               </TransactionsTypes>

               <CategorySelect category="Categoria"/>
            </Fields>

            <Button title="Enviar"/>
         </Form>
      </Container>
   );
}