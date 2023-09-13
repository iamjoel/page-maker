import type { Config } from "@measured/puck";
import ButtonConfig, { ButtonProps } from "./block/base/button";
import ButtonGroupConfig, { ButtonGroupProps } from "./block/base/button-group";
import Input, { InputProps } from "./block/form/input";
// https://github.com/measuredco/puck/blob/main/apps/demo/app/configs/antd/root.tsx
type Props = {
  ButtonGroup: ButtonGroupProps,
  Button: ButtonProps;
  Input: InputProps;
};

export const config: Config<Props> = {
  components: {
    Button: ButtonConfig,
    ButtonGroup: ButtonGroupConfig,
    Input: Input,
  },
};

export default config;
