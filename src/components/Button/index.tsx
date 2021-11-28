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

export default function ({ title, trigger, ...props }: ButtonProps) {

  return (

    <Container trigger={trigger} {...props}>
      <Title trigger={trigger}>{title}</Title>
    </Container>
  )
}