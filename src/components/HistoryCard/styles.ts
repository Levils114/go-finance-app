import { RFValue } from "react-native-responsive-fontsize";
import styled from "styled-components/native";

interface Props{
   color: string;
}

export const Container = styled.View<Props>`
   width: 100%;
   flex-direction: row;
   align-items: center;
   justify-content: space-between;

   margin: 0 auto;

   background-color: ${props => props.theme.colors.shape};

   padding: 13px 24px;

   border-radius: 5px;
   border-left-width: 4px;
   border-left-color: ${props => props.color};

   margin-bottom: 8px;
`;

export const Title = styled.Text`
   font-family: ${props => props.theme.fonts.regular};
   font-size: ${RFValue(15)}px;
`;

export const Amount = styled.Text`
   font-family: ${props => props.theme.fonts.bold};
   font-size: ${RFValue(15)}px;
`;