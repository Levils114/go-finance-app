import { RectButton } from "react-native-gesture-handler";
import { RFValue } from "react-native-responsive-fontsize";
import styled from "styled-components/native";

export const Container = styled(RectButton)`
   width: 100%;
   background-color: ${props => props.theme.colors.secondary};
   padding: 18px;
   align-items: center;
   border-radius: 5px;
`;

export const Title = styled.Text`
   font-family: ${props => props.theme.fonts.medium};
   font-size: ${RFValue(14)}px;
   color: ${props => props.theme.colors.shape};
`;