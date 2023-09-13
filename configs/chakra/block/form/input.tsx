'use client'
import React from 'react'
import { ComponentConfig } from "@measured/puck"
import { Input } from '@chakra-ui/react'

export type InputProps = {
}

const InputConfig: ComponentConfig<InputProps> = {
  fields: {
    text: { type: "text" },
  },
  defaultProps: {
  },
  render: () => (
    <Input value='Input' placeholder='Input ...' size='md' />
  )
}

export default InputConfig
