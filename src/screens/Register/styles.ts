import styled from "styled-components/native";

import { RFValue } from "react-native-responsive-fontsize";

export const Container = styled.View`
   background-color: ${props => props.theme.colors.background};

   flex: 1;
`;

export const Header = styled.View`
   background-color: ${props => props.theme.colors.primary};
   width: 100%;
   height: ${RFValue(113)}px;

   align-items: center;
   justify-content: flex-end;

   padding-bottom: 19px;
`;

export const Title = styled.Text`
   color: ${props => props.theme.colors.shape};

   font-family: ${props => props.theme.fonts.regular};
   font-size: ${RFValue(18)}px;
`;

export const Form = styled.View`
   flex: 1;
   width: 100%;
   padding: 24px;
   justify-content: space-between;
`;

export const Fields = styled.View``;

export const TransactionsTypes = styled.View`
   flex-direction: row;
   align-items: center;
   justify-content: space-between;

   margin: 8px 0 16px;
`;

export const Error = styled.Text`
   color: ${props => props.theme.colors.attention};
   font-family: ${props => props.theme.fonts.regular};
   font-size: ${RFValue(12)}px;

   margin: 7px;
`;