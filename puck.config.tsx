import type { Config } from "@measured/puck";
import { Button, ButtonGroup } from '@chakra-ui/react'

// https://github.com/measuredco/puck/blob/main/apps/demo/app/configs/antd/root.tsx
type ButtonType = {
  text: string
  size: 'xs' | 'sm' | 'md' | 'lg'
}

type Props = {
  ButtonGroup: {
    items: ButtonType[]
  },
  Button: ButtonType;
  HeadingBlock: { title: string };
};

const buttonField = {
  text: { type: "text" },
  size: { type: "select", options: [
    {
      label: "Extra Small",
      value: "xs",
    },
    {
      label: "Small",
      value: "sm",
    },
    {
      label: "Medium",
      value: "md",
    },
    {
      label: "Large",
      value: "lg",
    },
  ] },
}

export const config: Config<Props> = {
  components: {
    ButtonGroup: {
      fields: {
        items: {
          type: "array",
          label: 'Button',
          arrayFields: buttonField as any
        },
      },
      defaultProps: {
        items: [
          {
            text: "Button",
            size: "md",
          },
        ],
      },
      render: ({ items }) => (
        <ButtonGroup spacing='6'>
          {items.map((item,index) => (
            <Button 
              key={index}
              size={item.size}
              colorScheme='blue'
            >
              {item.text}
            </Button>
          ))}
        </ButtonGroup>
      )
    },
    Button: {
      fields: buttonField as any,
      defaultProps: {
        text: "Button",
        size: "md",
      },
      render: ({ text, size }) => (
        <Button 
          size={size}
          colorScheme='blue'
        >
          {text}
        </Button>
      )
    },
    HeadingBlock: {
      fields: {
        title: { type: "text" },
      },
      defaultProps: {
        title: "Heading",
      },
      render: ({ title }) => (
        <div style={{ padding: 64 }}>
          <h1>{title}</h1>
        </div>
      ),
    },
  },
};

export default config;
