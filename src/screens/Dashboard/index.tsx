import AsyncStorage from "@react-native-async-storage/async-storage";
import React, { useState, useEffect } from "react";
import { TranscationCardProps } from "../../@types/transactionCardProps";
import HighLightCard from "../../components/HighlightCard";
import TransactionCard from "../../components/TransactionCard";

import {Container,
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
    const [transactions, setTransactions] = useState<TranscationCardProps[]>([]);

    async function loadTransactions(){
        const transactions = await AsyncStorage.getItem('@GoFinance:transactions');
        const currentTransactions = transactions ? JSON.parse(transactions) : [];

        setTransactions(currentTransactions);
    }

    useEffect(() => {
        loadTransactions();
    }, []);

    return(
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
                    amount="R$ 17.400,00"
                    lastTransaction="Última entrada dia 6 de março"
                    type="up"
                />
                <HighLightCard 
                    title="Saídas"
                    amount="R$ 1.259,00"
                    lastTransaction="Última saída dia 6 de março"
                    type="down"
                />
                <HighLightCard 
                    title="Total"
                    amount="R$ 16.141,00"
                    lastTransaction="01 à 16 de Abril"
                    type="total"
                />
            </HighLightCards>
        
            <Transactions>
                <Title>Listagem</Title>

                <TransactionsList 
                    data={transactions}
                    keyExtractor={(item) => item.id.toString()}
                    renderItem={({ item }) => (
                        <TransactionCard data={item}/>
                    )}
                />
            </Transactions>
        </Container>
    );
}