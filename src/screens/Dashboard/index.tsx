import React from "react";
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
    const data: TranscationCardProps[] = [{
        id: 1,
        title: "teste",
        amount: "R$ 12,50",
        category: {
            icon: 'dollar-sign',
            name: 'Vendas'
        },
        date: "12/12/2021",
        type: 'positive'
    },
    {
        id: 2,
        title: "teste2",
        amount: "R$ 12,50",
        category: {
            icon: 'coffee',
            name: 'Alimentação'
        },
        date: "12/12/2021",
        type: 'negative'
    },
    {
        id: 3,
        title: "teste3",
        amount: "R$ 12,50",
        category: {
            icon: 'dollar-sign',
            name: 'Vendas'
        },
        date: "12/12/2021",
        type: 'negative'
    },
    {
        id: 4,
        title: "teste4",
        amount: "R$ 12,50",
        category: {
            icon: 'dollar-sign',
            name: 'Vendas'
        },
        date: "12/12/2021",
        type: 'positive'
    }]

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
                    data={data}
                    keyExtractor={(item) => item.id.toString()}
                    renderItem={({ item }) => (
                        <TransactionCard data={item}/>
                    )}
                />
            </Transactions>
        </Container>
    );
}