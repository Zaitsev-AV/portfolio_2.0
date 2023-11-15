import type {Meta, StoryObj} from '@storybook/react'

import {EFontSize, EFontWeight, Typography} from './'

const meta = {
  title: 'Components/Typography',
  component: Typography,
  tags: ['autodocs'],
  decorators: [
    Story => (
      <div style={{margin: '3em', display: 'flex', justifyContent: 'center'}}>
        <Story/>
      </div>
    ),
  ],
  argTypes: {
    fontSize: {
      options: [EFontSize.ExtraSmall, EFontSize.Small, EFontSize.Medium, EFontSize.Regular, EFontSize.Large, EFontSize.ExtraLarge, EFontSize.XXXL, EFontSize.XXXL, EFontSize.Huge, EFontSize.Giant, EFontSize.Inherit,],
      control: {type: 'radio'}
    },
    fontWeight: {
      options: [EFontWeight.UltraThin, EFontWeight.ExtraLight, EFontWeight.Light, EFontWeight.Regular, EFontWeight.Medium, EFontWeight.SemiBold, EFontWeight.Bold, EFontWeight.ExtraBold, EFontWeight.UltraBold, EFontWeight.Inherit],
      control: {type: 'radio'}
    },
    color: {control: 'color'}
  }
} satisfies Meta<typeof Typography>

export default meta
type Story = StoryObj<typeof meta>
const content =
  'Lorem ipsum dolor sit amet, ' +
  'consectetur adipiscing elit, ' +
  'sed do eiusmod tempor incididunt ' +
  'ut labore et dolore magna aliqua. ' +
  'Ut enim ad minim veniamdsa Lorem ' +
  'ipsum dolor sit amet, consectetur ' +
  'adipiscing elit, sed do eiusmod .'
export const ExtraSmall: Story = {
  args: {
    color: 'black',
    fontSize: EFontSize.ExtraSmall,
    children: content
  },
}

export const Small: Story = {
  args: {
    color: 'black',
    fontSize: EFontSize.Small,
    children: content
  },
}

export const Medium: Story = {
  args: {
    color: 'black',
    fontSize: EFontSize.Medium,
    children: content
  },
}


export const Regular: Story = {
  args: {
    color: 'black',
    fontSize: EFontSize.Regular,
    children: content
  },
}

export const Large: Story = {
  args: {
    color: 'black',
    fontSize: EFontSize.Large,
    children: content
  },
}

export const ExtraLarge: Story = {
  args: {
    color: 'black',
    fontSize: EFontSize.ExtraLarge,
    children: content
  },
}

export const XXL: Story = {
  args: {
    color: 'black',
    fontSize: EFontSize.XXL,
    children: content
  },
}

export const XXXL: Story = {
  args: {
    color: 'black',
    fontSize: EFontSize.XXXL,
    children: content
  },
}

export const Huge: Story = {
  args: {
    color: 'black',
    fontSize: EFontSize.Huge,
    children: content
  },
}

export const Giant: Story = {
  args: {
    color: 'black',
    fontSize: EFontSize.Giant,
    children: content
  },
}

export const Inherit: Story = {
  args: {
    color: 'black',
    fontSize: EFontSize.Inherit,
    children: content
  },
}