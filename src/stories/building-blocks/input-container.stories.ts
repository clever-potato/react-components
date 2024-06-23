import type { Meta, StoryObj } from "@storybook/react";

import { InputContainer } from "../../building-blocks/input-container";

const meta = {
  title: "Building Blocks/InputContainer",
  component: InputContainer,
  tags: ["autodocs"],
  parameters: {
    layout: "fullscreen",
  },
} satisfies Meta<typeof InputContainer>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Empty: Story = {
  args: {
    as: "div",
  },
};
