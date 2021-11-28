import styled, { css } from 'styled-components/native';
import { FontAwesome5 } from '@expo/vector-icons';
import { RFPercentage, RFValue } from 'react-native-responsive-fontsize';

interface CountType {
  finished: boolean
}

export const Container = styled.View<CountType>`
  flex: 1;
`;
export const ContainerSwippper = styled.TouchableOpacity``;

export const SwippperIcon = styled(FontAwesome5)`
   color: ${({ theme }) => theme.colors.text_1};
   opacity: .6;
`;
export const CountCurrent = styled.Text`
  font-family: ${({ theme }) => theme.fontFamily.regular};
  font-size: ${({ theme }) => theme.fontSize._44}px;
  color: ${({ theme }) => theme.colors.text_1};
`;
export const DescriptionCurrent = styled.Text`
  font-family: ${({ theme }) => theme.fontFamily.regular};
  font-size: ${({ theme }) => theme.fontSize._18}px;
  color: ${({ theme }) => theme.colors.text_1};
  margin-top: 32px;
`;

export const Actions = styled.View`
  height: 140px;
`;
