import styled from "styled-components/native";
import { RFPercentage, RFValue } from 'react-native-responsive-fontsize';
import { Feather } from '@expo/vector-icons';
import { getBottomSpace, getStatusBarHeight } from 'react-native-iphone-x-helper';
import { FlatList } from "react-native";
import { TranscationCardProps } from "../../@types/transactionCardProps";
import { BorderlessButton } from "react-native-gesture-handler";

export const Container = styled.View`
    flex: 1;
    background-color: ${({ theme }) => theme.colors.background};
`;

export const Header = styled.View`
    width: 100%;
    height: ${RFPercentage(42)}px;
    background: ${({ theme }) => theme.colors.primary};

    flex-direction: row;
    align-items: flex-start;
    justify-content: center;
`;

export const UserWrapper = styled.View`
    width: 100%;
    flex-direction: row;
    align-items: center;
    justify-content: space-between;

    padding: 0 24px;

    margin-top: ${getStatusBarHeight() + RFValue(28)}px; 
`;

export const UserInfo = styled.View`
    flex-direction: row;
    align-items: center;
`;

export const LogOutButton = styled(BorderlessButton)``;

export const LogOutIcon = styled(Feather)`
    font-size: ${RFValue(24)}px;

    color: ${({ theme }) => theme.colors.secondary};
`;

export const UserAvatar = styled.Image`
    width: ${RFValue(48)}px;
    height: ${RFValue(48)}px;
    border-radius: 10px;
`;

export const User = styled.View`
    margin-left: 16px;
`;

export const UserGreeting = styled.Text`
    color: ${({ theme }) => theme.colors.shape};

    font-size: ${RFValue(16)}px;
    font-family: ${({ theme }) => theme.fonts.regular};
`;

export const UserName = styled.Text`
    color: ${({ theme }) => theme.colors.shape};
    font-size: ${RFValue(16)}px;
    font-family: ${({ theme }) => theme.fonts.bold};
`;

export const HighLightCards = styled.ScrollView.attrs({
    horizontal: true,
    showsHorizontalScrollIndicator: false,
    contentContainerStyle: {
        paddingLeft: 24,
    }
})`
    width: 100%;

    position: absolute;
    margin-top: ${RFPercentage(20)}px;
`;

export const Transactions = styled.View`
    flex: 1;
    padding: 0 24px;
    margin-top: ${RFPercentage(12)}px;
`;

export const Title = styled.Text`
    font-size: ${RFValue(18)}px;
    font-family: ${props => props.theme.fonts.regular};

    margin-bottom: 16px;
`;

export const TransactionsList = styled(FlatList as new () => FlatList<TranscationCardProps>).attrs({
    showsVerticalScrollIndicator: false,
    contentContainerStyle: {
        paddingBottom: getBottomSpace()
    }
})`
`;