import { RFValue } from "react-native-responsive-fontsize";
import styled, { css } from "styled-components/native";

export const Container = styled.View`
   width: 100%;
`;

export const Error = styled.Text`
   color: ${props => props.theme.colors.attention};
   font-family: ${props => props.theme.fonts.regular};
   font-size: ${RFValue(12)}px;

   margin: 7px;
`;