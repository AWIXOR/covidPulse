import React from 'react'
import { Wrapper, Label } from './styles'

import { InputFieldProps } from 'ui/interfaces'

const InputField = ({ label, children, error, relative }: InputFieldProps) => (
  <Wrapper error={error} relative={relative}>
    {label && <Label>{label}</Label>}
    {children}
  </Wrapper>
)

export default InputField
