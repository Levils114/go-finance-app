import AsyncStorage from '@react-native-async-storage/async-storage';
import React from 'react';
import HistoryCard from '../../components/HistoryCard';
import {Container,
        Header,
        Title,
        Content,
        MonthSelect,
        MonthSelectButton,
        SelectIcon,
        Month,
        ChartContainer,
        LoadingContainer} from './styles';
import { ActivityIndicator, Alert } from 'react-native';

import { TranscationCardProps } from './../../@types/transactionCardProps';
import { categories } from '../../utils/categories';

import { VictoryPie } from 'victory-native';
import { useFocusEffect } from '@react-navigation/core';

import { RFValue } from 'react-native-responsive-fontsize';
import { useTheme } from 'styled-components';
import { useBottomTabBarHeight } from '@react-navigation/bottom-tabs';

import { addMonths, subMonths, format } from 'date-fns';
import { ptBR } from 'date-fns/locale';

interface TotalByCategory{
   name: string;
   key: string;
   icon: string;
   color: string;
   total: string;
   totalToGraphic: number;
   percent: string;
}

export default function Resume(){
   const { colors } = useTheme();

   const [loadingTransactions, setLoadingTransactions] = React.useState(true);
   const [selectedDate, setSelectedDate] = React.useState(new Date());
   const [totalByCategories, setTotalByCategories] = React.useState<TotalByCategory[]>([]);

   function handleChangeDate(action: 'next' | 'prev'){
      setLoadingTransactions(true);

      if(action === 'next'){
         const newDate = addMonths(selectedDate, 1);

         setSelectedDate(newDate);
      } else{
         const newDate = subMonths(selectedDate, 1);

         setSelectedDate(newDate);
      }
   } 

   async function loadData(){
      try{
         const transactions = await AsyncStorage.getItem('@GoFinance:transactions');
         const currentTransactions = transactions ? JSON.parse(transactions) : [];

         const expensives: TranscationCardProps[] = currentTransactions
         .filter((transaction: TranscationCardProps) => 
         transaction.type === 'down' &&
         new Date(transaction.date).getMonth() === selectedDate.getMonth() &&
         new Date(transaction.date).getFullYear() === selectedDate.getFullYear());

         const expensiveTotal = expensives.reduce((a, b) => a + b.amount, 0);

         const totalByCategory: TotalByCategory[] = [];

         categories.forEach(category => {
            let categorySum = 0;

            expensives.forEach(expensive => {
               if(expensive.category === category.key){
                  categorySum += Number(expensive.amount);
               }
            });

            if(categorySum > 0){
               const total = categorySum.toLocaleString('pt-BR', { style: 'currency', currency: 'BRL' });

               const percent = `${((categorySum/expensiveTotal)*100).toFixed(2)}%`;

               totalByCategory.push({
                  ...category,
                  total,
                  totalToGraphic: categorySum,
                  percent,
               });
            }
         });

         setTotalByCategories(totalByCategory);
     } catch(err){
         console.log(err);
         Alert.alert(String(err));
      } finally{
         setLoadingTransactions(false);
      }
   }

   useFocusEffect(React.useCallback(() => {
      loadData();
   }, [selectedDate]));

   return(
      <Container>
         <Header>
            <Title>Resumo por Categoria</Title>
         </Header>

         <Content
            contentContainerStyle={{
               flex: loadingTransactions ? 1 : 0,
               paddingHorizontal: 24,
               paddingBottom: useBottomTabBarHeight(),
            }}
            showsVerticalScrollIndicator={false}
         >
            <MonthSelect>
               <MonthSelectButton onPress={() => handleChangeDate('prev')}>
                  <SelectIcon name="chevron-left"/>
               </MonthSelectButton>

               <Month>{format(selectedDate, 'MMMM, yyyy', { locale: ptBR })}</Month>

               <MonthSelectButton onPress={() => handleChangeDate('next')}>
                  <SelectIcon name="chevron-right"/>
               </MonthSelectButton>
            </MonthSelect>

            {loadingTransactions ? (
               <LoadingContainer>
                  <ActivityIndicator color={colors.primary} size="large"/>
               </LoadingContainer>
            ) : (
               <>
               <ChartContainer>
                  <VictoryPie 
                     data={totalByCategories}
                     x="percent"
                     y="totalToGraphic"
                     colorScale={totalByCategories.map(category => category.color)}
                     style={{
                        labels: {
                           fontSize: RFValue(14),
                           fontWeight: 'bold',
                           fill: colors.shape,
                        }
                     }}
                     labelRadius={100}
                  />
               </ChartContainer>

               {totalByCategories.map(item => (
                  <HistoryCard key={item.key} color={item.color} amount={item.total} title={item.name}/>
               ))}
               </>
            )}
         </Content>
      </Container>
   );
}