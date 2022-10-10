import type { Meta, StoryObj } from '@storybook/react'
import { Heading, HeadingProps } from '@ignite-ui/react'

export default {
  title: 'Typography/Heading',
  component: Heading,

  args: {
    children: 'Lorem ipsum!',
  },
} as Meta<HeadingProps>

export const Primary: StoryObj<HeadingProps> = {}
export const CustomTag: StoryObj<HeadingProps> = {
  args: {
    children: 'H1 Heading',
    as: 'h1',
    size: '4xl',
  },
  parameters: {
    docs: {
      description: {
        story:
          'Por padrão o heading sempre será um `h2` porem podemos alterar através da propriedade `as` ',
      },
    },
  },
}
