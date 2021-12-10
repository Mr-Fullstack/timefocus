import { RFValue } from 'react-native-responsive-fontsize';
import styled, { css } from 'styled-components/native';
import { FontAwesome5 } from '@expo/vector-icons';

interface ButtonType {
  trigger: 'accept' | 'cancel' | 'edit'
}

export const Container = styled.TouchableOpacity<ButtonType>`

  margin-left: ${RFValue(28)}px;
  width: ${RFValue(50)}px;
  min-height: ${RFValue(50)}px;

  align-items: center;
  justify-content: center;
  padding: 9px;
  justify-content: center;
  border-radius: 8px;
  background-color: ${({ theme }) => theme.colors.tertiary};
  box-shadow: 2px 2px 25px #000;
  ${({ trigger }) => trigger === 'cancel' && css`
    background-color: ${({ theme }) => theme.colors.attetion};
  `}

`;
export const Icon = styled(FontAwesome5)`
  font-size: ${RFValue(25)}px;
  color: ${({ theme }) => theme.colors.text_1};
  text-shadow: 0px 0px 2px #000;
`;
