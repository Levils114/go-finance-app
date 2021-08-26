import React from "react";
import {Container,
        Header,
        UserWrapper,
        UserInfo,
        UserAvatar,
        User,
        UserGreeting,
        UserName} from "./styles";

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
                </UserWrapper>
            </Header>
        </Container>
    );
}