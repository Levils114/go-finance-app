import React, { useMemo } from "react";
import { Container,
         Header,
         Title,
         Icon,
         Footer,
         Amount,
         LastTransaction} from "./styles";

interface HighLightCardProps{
   title: string;
   amount: string;
   lastTransaction: string;
   type: 'up' | 'down' | 'total';
   getHighlightCardHeight?: (height: number) => void;
}

export default function HighLightCard(props: HighLightCardProps){
   const icon = useMemo(() => {
      return {
         up: 'arrow-up-circle',
         down: 'arrow-down-circle',
         total: 'dollar-sign',
      }
   }, [props.type]);

   return(
      <Container type={props.type} onLayout={onLayoutProps => {
         if(props.getHighlightCardHeight){
            props.getHighlightCardHeight(onLayoutProps.nativeEvent.layout.height);
         }
      }}>
         <Header>
            <Title type={props.type}>{props.title}</Title>

            <Icon name={icon[props.type]} type={props.type}/>
         </Header>

         <Footer>
            <Amount type={props.type}>{props.amount}</Amount>
            <LastTransaction type={props.type}>{props.lastTransaction}</LastTransaction>
         </Footer>
      </Container>
   );
}