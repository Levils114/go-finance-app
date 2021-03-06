import styled from "styled-components/native";
import { Feather } from '@expo/vector-icons';
import { RFValue } from "react-native-responsive-fontsize";
import { RectButton } from "react-native-gesture-handler";

export const Container = styled(RectButton)`
   width: 100%;
   background-color: ${props => props.theme.colors.shape};
   flex-direction: row;
   justify-content: space-between;
   align-items: center;
   border-radius: 5px;
   padding: 18px 16px;
`;

export const Category = styled.Text`
   color: ${props => props.theme.colors.text};
   font-family: ${props => props.theme.fonts.regular};
   font-size: ${RFValue(14)}px;
`;

export const Icon = styled(Feather)`
   color: ${props => props.theme.colors.text};
   font-size: ${RFValue(20)}px;
`;