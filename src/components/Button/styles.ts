import { RFValue } from 'react-native-responsive-fontsize';
import styled, { css } from 'styled-components/native';

interface ButtonType {
  trigger: 'start' | 'pause' | 'continue' | 'repeat' | 'delete'
}

export const Container = styled.TouchableOpacity<ButtonType>`
  min-width: 180px;
  padding: 9px;
  min-height: 54px;
  justify-content: center;
  border-radius: 8px;

  ${({ trigger }) => trigger === 'start' && css`
    background-color: ${({ theme }) => theme.colors.secondary};
  `}
  ${({ trigger }) => trigger === 'pause' && css`
    background-color: ${({ theme }) => theme.colors.attetion};
  `}
  ${({ trigger }) => trigger === 'continue' && css`
    background-color: ${({ theme }) => theme.colors.tertiary};
  `}
  ${({ trigger }) => trigger === 'repeat' && css`
    background-color: ${({ theme }) => theme.colors.text_1};
  `}
  ${({ trigger }) => trigger === 'delete' && css`
    background-color: ${({ theme }) => theme.colors.attetion};
  `}

`;
export const Title = styled.Text<ButtonType>`
  text-align: center;
  font-size: ${RFValue(20)}px;
  font-family:${({ theme }) => theme.fontFamily.bold} ;
  letter-spacing: 1.2px;
  text-shadow: 0px 1px 1px #000;
  color: ${({ theme }) => theme.colors.text_1};
  ${({ trigger }) => trigger === 'repeat' && css`
    color: ${({ theme }) => theme.colors.text_2};
    text-shadow: 0px 1px 1px #fff;
  `}
`;