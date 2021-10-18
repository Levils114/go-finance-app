import React, { useState } from 'react';

import { useForm } from 'react-hook-form';
import { useNavigation } from '@react-navigation/core';

import { Alert, Keyboard, Modal, TouchableWithoutFeedback } from 'react-native';

import Button from '../../components/Forms/Button';
import CategorySelectButton from '../../components/Forms/CategorySelectButton';
import InputForm from '../../components/Forms/InputForm';
import TransactionTypeButton from '../../components/Forms/TransactionTypeButton';

import CategorySelect from '../CategorySelect';

import * as Yup from 'yup';
import { yupResolver } from '@hookform/resolvers/yup';

import {Container,
        Header,
        Title,
        Form,
        Fields,
        TransactionsTypes,
        Error} from './styles';

import AsyncStorage from '@react-native-async-storage/async-storage';
import uuid from 'react-native-uuid';
import { useAuth } from '../../hooks/auth';

interface FormData{
   name: string;
   amount: string;
}

interface Category{
   name: string;
   key: string;
}

const schema = Yup.object().shape({
   name: Yup.string().required('Digite o nome!'),
   amount: Yup.number().typeError('Digite um preço válido!').positive("O valor do preço deve ser positivo!").required('Digite um preço válido!'),
});

export default function Register(){
   const navigation = useNavigation();
   const { user } = useAuth();

   const { control, handleSubmit, reset, formState: { errors } } = useForm({
      resolver: yupResolver(schema),
   });

   const [category, setCategory] = useState({} as Category);
   const [trasactionTypeSelected, setTransactionTypeSelected] = useState('');
   const [categoryModalOpen, setCategoryModalOpen] = useState(false);

   async function handleRegister(form: FormData){
      if(!trasactionTypeSelected){
         return Alert.alert("Selecione um tipo de transação!")
      }

      else if(!category.name){
         return Alert.alert("Selecione uma categoria!")
      }

      const data = {
         id: uuid.v4().toString(),
         ...form,
         type: trasactionTypeSelected,
         category: category.key,
         date: new Date(),
      }

      try{
         const transactions = await AsyncStorage.getItem(`@GoFinance:transactions_user:${user.id}`);
         const formatTransactions = transactions ? JSON.parse(transactions) : [];

         await AsyncStorage.setItem('@GoFinance:transactions', JSON.stringify([...formatTransactions, data]));

         reset();
         setTransactionTypeSelected('');
         setCategory({
            key: 'category',
            name: 'Categoria',
         });

         navigation.navigate('Listagem' as never);
      } catch(err){
         console.log(err);
         Alert.alert('Não foi possível salvar');
      }
   }

   return(
      <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
      <Container>
         <Header>
            <Title>Cadastro</Title>
         </Header>

         <Form>
            <Fields>
               <InputForm 
                  error={errors.name && errors.name.message}
                  name="name"
                  control={control}
                  placeholder="Nome"
                  autoCapitalize="sentences"
                  autoCorrect={false}
               />
               <InputForm
                  error={errors.amount && errors.amount.message}
                  name="amount"
                  control={control}
                  placeholder="Preço"
                  keyboardType="numeric"
               />

               {errors.trasactionTypeSelected && <Error>{errors.trasactionTypeSelected.message}</Error>}
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

               {errors.category && <Error>{errors.category.message}</Error>}
               <CategorySelectButton 
                  activeOpacity={0.7} 
                  onPress={() => setCategoryModalOpen(true)} 
                  category={category.name ? category.name : "Categoria"} 
               />
            </Fields>

            <Button title="Enviar" onPress={handleSubmit(handleRegister)}/>
         </Form>

         <Modal visible={categoryModalOpen} animationType="slide">
            <CategorySelect 
               category={category}
               setCategory={(category) => setCategory(category)}
               closeSelectCategory={() => setCategoryModalOpen(false)}
            />
         </Modal>
      </Container>
      </TouchableWithoutFeedback>
   );
}