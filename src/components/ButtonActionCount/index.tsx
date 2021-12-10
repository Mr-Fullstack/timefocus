import React from "react";
import { TouchableOpacityProps } from "react-native";

import {
  Container,
  Icon
} from './styles'

type ButtonProps = TouchableOpacityProps & {
  trigger: 'accept' | 'cancel' | 'edit'
}

export default function ({ style, trigger, ...props }: ButtonProps) {

  return (

    <Container trigger={trigger} style={[{ elevation: 5 }, style]} {...props}>
      {trigger === "accept" && <Icon name="check" />}
      {trigger === "edit" && <Icon name="plus" />}
      {trigger === "cancel" && <Icon name="times" />}
    </Container>
  )
}