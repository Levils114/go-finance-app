import styled from "styled-components/native";

import { RFValue } from "react-native-responsive-fontsize";

import { Feather } from '@expo/vector-icons';
import { BorderlessButton } from "react-native-gesture-handler";

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
   font-size: ${RFValue(16)}px;
`;

export const Content = styled.ScrollView``;

export const MonthSelect = styled.View`
   width: 100%;

   flex-direction: row;
   align-items: center;
   justify-content: space-between;

   margin-top: 24px;
`;

export const MonthSelectButton = styled(BorderlessButton)`
`;

export const SelectIcon = styled(Feather)`
   font-size: ${RFValue(20)}px;
`;

export const Month = styled.Text`
   font-family: ${props => props.theme.fonts.regular};
   font-size: ${RFValue(16)}px;
`;

export const LoadingContainer = styled.View`
   flex: 1;
   align-items: center;
   justify-content: center;
`;

export const ChartContainer = styled.View`
   width: 100%;
   align-items: center;
`;