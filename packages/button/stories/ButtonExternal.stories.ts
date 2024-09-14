import type { Meta, StoryObj } from '@storybook/react';
import type { ButtonProps } from '../src/Button';

import { Button } from '../src/Button';

const meta: Meta<ButtonProps> = {
  title: 'Button',
  component: Button,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
  argTypes: {
    backgroundColor: { control: 'color' },
  },
} satisfies Meta<typeof Button>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Basic: Story = {
  args: {
    label: "Sebastian",
    primary: true,
  }
};