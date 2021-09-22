import AsyncStorage from "@react-native-async-storage/async-storage";
import { useFocusEffect } from "@react-navigation/native";
import React, { useState, useEffect } from "react";
import { Alert, ActivityIndicator } from "react-native";
import { useTheme } from "styled-components";
import { TranscationCardProps } from "../../@types/transactionCardProps";
import HighLightCard from "../../components/HighlightCard";
import TransactionCard from "../../components/TransactionCard";

import {Container,
        LoadingContainer,
        Header,
        UserWrapper,
        UserInfo,
        LogOutButton,
        LogOutIcon,
        UserAvatar,
        User,
        UserGreeting,
        UserName,
        HighLightCards,
        Transactions,
        Title,
        TransactionsList} from "./styles";

export default function Dashboard(){
    const { colors } = useTheme();

    const [isLoadingTransactions, setIsLoadingTransactions] = useState(true);
    const [transactions, setTransactions] = useState<TranscationCardProps[]>([]);

    const [highlightCardsHeight, setHighlightCardsHeight] = useState(0);

    const entriesSum = React.useMemo(() => {
        const getEntries = transactions.filter(transaction => transaction.type === 'up');
        const getAmounts = getEntries.map(entry => entry.amount);
        
        if(getAmounts.length > 0){
            const sumEntries = getAmounts.length >= 1 ? getAmounts.reduce((a, b) => a + b) : getAmounts[0]; 
        
            return {
                amount: sumEntries,
                firstTransactionDate: new Date(getEntries[0].date).toLocaleDateString('pt-BR', { dateStyle: 'medium' }),
                lastTransactionDate: new Date(getEntries[getEntries.length - 1].date).toLocaleDateString('pt-BR', { dateStyle: 'medium' }),
            };
        } else{
            return {
                amount: 0,
                firstTransactionDate: '',
                lastTransactionDate: '',
            };
        }
    }, [transactions]);

    const exitsSum = React.useMemo(() => {
        const getExits = transactions.filter(transaction => transaction.type === 'down');
        const getAmounts = getExits.map(entry => entry.amount);
        
        if(getAmounts.length > 0){
            const sumExits = getAmounts.length >= 1 ? getAmounts.reduce((a, b) => a + b) : getAmounts[0];

            return {
                amount: sumExits,
                firstTransactionDate: new Date(getExits[0].date).toLocaleDateString('pt-BR', { dateStyle: 'medium' }),
                lastTransactionDate: new Date(getExits[getExits.length - 1].date).toLocaleDateString('pt-BR', { dateStyle: 'medium' }),
            };
        } else{
            return {
                amount: 0,
                firstTransactionDate: '',
                lastTransactionDate: '',
            };
        }
    }, [transactions]);
    
    async function loadTransactions(){
        try{
            const transactions = await AsyncStorage.getItem('@GoFinance:transactions');
            const currentTransactions = transactions ? JSON.parse(transactions) : [];

            setTransactions(currentTransactions);
        } catch(err){
            console.log(err);
            Alert.alert(String(err));
        } finally{
            setIsLoadingTransactions(false);
        }
    };

    useFocusEffect(React.useCallback(() => {
        loadTransactions();
    }, []));

    function getHighlightCardsHeight(height: number){
        setHighlightCardsHeight(height);
    }

    return(
        isLoadingTransactions ? (
            <LoadingContainer>
                <ActivityIndicator size="large" color={colors.primary}/>
            </LoadingContainer>
        ) : (
        <Container>
            <Header>
                <UserWrapper>
                    <UserInfo>
                        <UserAvatar source={{ uri: 'https://avatars.githubusercontent.com/u/31908348?v=4' }}/>

                        <User>
                            <UserGreeting>Olá,</UserGreeting>
                            <UserName>Levi Siebra</UserName>
                        </User>
                    </UserInfo>

                    <LogOutButton onPress={() => {}}>
                        <LogOutIcon name="power"/>
                    </LogOutButton>
                </UserWrapper>
            </Header>
        
            <HighLightCards>
                <HighLightCard 
                    title="Entradas"
                    amount={entriesSum.amount.toLocaleString('pt-BR', { style: 'currency', currency: 'BRL' })}
                    lastTransaction={entriesSum.lastTransactionDate ? `Última entrada dia ${entriesSum.lastTransactionDate}` : ''}
                    type="up"
                    getHighlightCardHeight={getHighlightCardsHeight}
                />
                <HighLightCard 
                    title="Saídas"
                    amount={exitsSum.amount.toLocaleString('pt-BR', { style: 'currency', currency: 'BRL' })}
                    lastTransaction={exitsSum.lastTransactionDate ? `Última saída dia ${exitsSum.lastTransactionDate}` : ''}
                    type="down"
                />
                <HighLightCard 
                    title="Total"
                    amount={(entriesSum.amount - exitsSum.amount).toLocaleString('pt-BR', { style: 'currency', currency: 'BRL' })}
                    lastTransaction={entriesSum.firstTransactionDate && exitsSum.lastTransactionDate ? `${entriesSum.firstTransactionDate} à ${exitsSum.lastTransactionDate}` : ""}
                    type="total"
                />
            </HighLightCards>
        
            <Transactions highlightCardsHeight={highlightCardsHeight}>
                <Title>Listagem</Title>

                <TransactionsList 
                    data={transactions}
                    keyExtractor={(item) => item.id.toString()}
                    renderItem={({ item }) => (
                        <TransactionCard data={item}/>
                    )}
                />
            </Transactions>
        </Container>)
    );
}