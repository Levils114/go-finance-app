import React from "react";
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
        Title} from "./styles";

export default function Dashboard(){
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

                    <LogOutButton>
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

                <TransactionCard />
            </Transactions>
        </Container>
    );
}