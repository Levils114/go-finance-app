import React, { useState } from 'react';
import { Modal } from 'react-native';

import Button from '../../components/Forms/Button';
import CategorySelectButton from '../../components/Forms/CategorySelectButton';
import Input from '../../components/Forms/Input';
import TransactionTypeButton from '../../components/Forms/TransactionTypeButton';

import CategorySelect from '../CategorySelect';

import {Container,
        Header,
        Title,
        Form,
        Fields,
        TransactionsTypes} from './styles';

export default function Register(){
   const [category, setCategory] = useState({
      key: 'category',
      name: 'Categoria',
   });
   const [trasactionTypeSelected, setTransactionTypeSelected] = useState('');
   const [categoryModalOpen, setCategoryModalOpen] = useState(false);

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

               <CategorySelectButton 
                  activeOpacity={0.7} 
                  onPress={() => setCategoryModalOpen(true)} 
                  category={category.name} 
               />
            </Fields>

            <Button title="Enviar"/>
         </Form>

         <Modal visible={categoryModalOpen} animationType="slide">
            <CategorySelect 
               category={category}
               setCategory={(category) => setCategory(category)}
               closeSelectCategory={() => setCategoryModalOpen(false)}
            />
         </Modal>
      </Container>
   );
}