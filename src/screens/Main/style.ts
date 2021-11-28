import styled, { css } from 'styled-components/native';

interface CountType {
  finished: boolean
}

export const Container = styled.View<CountType>`
  flex: 1;
  background-color: ${({ theme }) => theme.colors.primary};
  align-items: center;
  justify-content: flex-start; 

  ${({ finished }) => finished && css`
    background-color: ${({ theme }) => theme.colors.primary};
  `}
  ${({ finished }) => !finished && css`
    background-color: ${({ theme }) => theme.colors.attetion};
  `}
`;
