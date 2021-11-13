import { Meta, Story } from '@storybook/react'
import Main, { MainProps } from '.'

export default {
  title: 'Main',
  componet: Main,
  argTypes: {
    title: { control: 'text' },
    description: { control: 'text' }
  },
  args: {
    title: 'React Avançado',
    description: 'Typescript, ReactJs, NextJS e Styled Components'
  }
} as Meta

export const Basic: Story<MainProps> = (args) => <Main {...args} />
