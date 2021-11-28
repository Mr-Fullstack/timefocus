import styled, { css } from 'styled-components/native';
import { FontAwesome5 } from '@expo/vector-icons';
import { RFValue } from 'react-native-responsive-fontsize';

interface Swipper {
  swipper?: boolean
}

interface CountType extends Swipper {
  finished?: boolean | null,
  paused?: boolean
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
  ${({ paused }) => paused && css`
    background-color: ${({ theme }) => theme.colors.text_1};
  `}
`;
export const Header = styled.View`
 width: 100%;
 align-items: center;
 min-height: ${RFValue(15)}px;
 padding-top: 25px;
`;
export const HeaderText = styled.Text`
  font-family: ${({ theme }) => theme.fontFamily.bold};
  font-size: ${({ theme }) => theme.fontSize._34}px;
  color: ${({ theme }) => theme.colors.text_1};
`;
export const SoundEffect = styled.TouchableOpacity`
  position:absolute;
  right: 16px;
  top: 35px ;
`;

export const SoundEffectIcon = styled(FontAwesome5)`
  font-size: ${RFValue(30)}px;
  color: ${({ theme }) => theme.colors.text_1};
  opacity: .3;
`;
export const WrapperMain = styled.View`
  margin-top: 41px;
  flex: 1;
  align-items: center;
  justify-content: space-between;
  width: 100%;
`;
export const WrapperMainSwippper = styled.TouchableOpacity<Swipper>`
  width: 100%;
  text-align: center;
  align-items: center;
  ${({ swipper }) => swipper && css`
      flex:1;
      justify-content: flex-end;
  `}
`;


export const WrapperMainSwippperIcon = styled(FontAwesome5)`
   color: ${({ theme }) => theme.colors.text_1};
   opacity: .6;
   margin-bottom: ${RFValue(32)}px;
   width: 100%;
   text-align: center;
`;

export const WrapperMainCurrent = styled.View<Swipper>`
  align-items: center;
  width: 100%;
  ${({ swipper }) => swipper && css`
      flex:1;
      justify-content: flex-end;
  `}
`;

export const CountCurrent = styled.Text<CountType>`
  font-family: ${({ theme }) => theme.fontFamily.regular};
  font-size: ${({ theme }) => theme.fontSize._44}px;
  color: ${({ theme }) => theme.colors.text_1};
  ${({ paused }) => paused && css`
    color: ${({ theme }) => theme.colors.text_2};
  `}
  ${({ swipper }) => swipper && css`
    font-size: ${({ theme }) => theme.fontSize._88}px;
  `}
`;
export const DescriptionCurrent = styled.Text<CountType>`
  font-family: ${({ theme }) => theme.fontFamily.regular};
  font-size: ${({ theme }) => theme.fontSize._18}px;
  color: ${({ theme }) => theme.colors.text_1};
  margin-top: 32px;
  padding: 16px;
  width: 100%;
  text-align: center;
  ${({ paused }) => paused && css`
    color: ${({ theme }) => theme.colors.text_2};
  `}
  ${({ swipper }) => swipper && css`
    font-size: ${({ theme }) => theme.fontSize._24}px;
  `}
`;


export const WrapperMainEdit = styled(WrapperMainCurrent)`
  padding:0px 16px;
  align-items: center;
  justify-content: center;
  width: 100%;
`;
export const CountEdit = styled.TextInput`
  font-family: ${({ theme }) => theme.fontFamily.regular};
  font-size: ${({ theme }) => theme.fontSize._44}px;
  color: ${({ theme }) => theme.colors.text_2};
  background-color: ${({ theme }) => theme.colors.text_1};
  border-radius: 8px;
  text-align: center;
  width:100%;
`;
export const DescriptionEdit = styled.TextInput`
  font-family: ${({ theme }) => theme.fontFamily.regular};
  font-size: ${({ theme }) => theme.fontSize._18}px;
  color: ${({ theme }) => theme.colors.text_2};
  background-color: ${({ theme }) => theme.colors.text_1};
  border-radius: 8px;
  text-align: center;
  width: 100%;
  height:${RFValue(120)}px;
  margin-top: 32px;
  padding: 16px;
`;

export const Actions = styled.View<Swipper>`
  width: 100%;
  height: 140px;
  justify-content:flex-end;
  align-items: center;
  margin-bottom: ${RFValue(64)}px;
  ${({ swipper }) => swipper && css`
      display:none; 
  `}
`;
export const Footer = styled.View<Swipper>`
  flex-direction: row;
  height:50px;
  padding:0px 16px;
  width: 100%;
  align-items: center;
  justify-content: flex-end;
  margin-bottom: ${RFValue(34)}px;
  ${({ swipper }) => swipper && css`
      display:none; 
  `}
`;
