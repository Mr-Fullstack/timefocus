import React from "react";
import { TouchableOpacityProps } from "react-native";

type ButtonProps = TouchableOpacityProps & {
  title: string,
  trigger: 'start' | 'pause' | 'continue' | 'repeat' | 'delete'
}

import {
  Container,
  Title
} from './styles'

export default function ({ style, title, trigger, ...props }: ButtonProps) {

  return (

    <Container trigger={trigger} style={[{ elevation: 1 }, style]} {...props}>
      <Title trigger={trigger}>{title}</Title>
    </Container>
  )
}