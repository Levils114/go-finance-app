import styled, { css } from "styled-components/native";
import { Feather } from '@expo/vector-icons';
import { RFValue } from "react-native-responsive-fontsize";

interface Props{
   type: 'up' | 'down';
   isActive?: boolean;
}

export const Container = styled.TouchableOpacity<Props>`
   flex-direction: row;
   align-items: center;
   justify-content: center;
   width: 48%;

   border: ${props => props.isActive ? '0px' : `1.5px solid ${props.theme.colors.text}`};
   border-radius: 5px;
   padding: 16px 0;

   ${props => {
      if(props.isActive && props.type === 'up'){
         return css`
            background-color: ${props.theme.colors.success_light};
         `;
      } else if(props.isActive && props.type === 'down'){
         return css`
            background-color: ${props.theme.colors.attention_light};
         `;
      }
   }};
`;

export const Icon = styled(Feather)<Props>`
   font-size: ${RFValue(24)}px;
   color: ${props => props.type === 'up' ? props.theme.colors.success : props.theme.colors.attention};
   margin-right: 12px;
`;

export const Title = styled.Text`
   font-size: ${RFValue(14)}px;
   font-family: ${props => props.theme.fonts.regular};
`;