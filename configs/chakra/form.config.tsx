import type { Config } from "@measured/puck";
import { WithLabelInputConfig, WithLabelInputProps } from "./block/form/input";
import { ButtonGroup, Button } from '@chakra-ui/react'

// https://github.com/measuredco/puck/blob/main/apps/demo/app/configs/antd/root.tsx
type Props = {
  Input: WithLabelInputProps;
};

export const config: Config<Props> = {
  root: {
    fields: {
      title: {
        type: "text",
      },
      other: {
        type: "text",
      },
    },
    render: ({ children, title, other }) => (
      <div className="p-2">
        <h1 className="mb-2 text-lg font-bold">{title}</h1>
        <div>{children}</div>
        <ButtonGroup variant='outline' spacing='4'>
          <Button colorScheme='blue'>提交</Button>
          <Button>取消</Button>
        </ButtonGroup>
      </div>
    )
  },
  components: {
    Input: WithLabelInputConfig,
  },
};

export default config;
