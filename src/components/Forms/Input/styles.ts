import { TextInput } from "react-native";
import { RFValue } from "react-native-responsive-fontsize";
import styled, { css } from "styled-components/native";

interface Props{
   active?: boolean;
}

export const Container = styled(TextInput)<Props>`
   width: 100%;
   padding: 18px 16px;
   font-size: ${RFValue(14)}px;
   font-family: ${props => props.theme.fonts.regular};
   color: ${props => props.theme.colors.text_dark};
   background-color: ${props => props.theme.colors.shape};
   border-radius: 5px;
   margin-bottom: 8px;

   ${props => props.active && css`
      border-width: 1px;
      border-color: ${props.theme.colors.attention};
   `};
`;