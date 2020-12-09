import React from 'react';
// also exported from '@storybook/react' if you can deal with breaking changes in 6.1
import { Story, Meta } from '@storybook/react/types-6-0';
import HW12 from "./HW12";
import {ReduxStoreProviderDecorator} from "./ReduxStoreProviderDecorator";


export default {
    title: 'Homeworks/HW12',
    component: HW12,
    decorators: [ReduxStoreProviderDecorator]
} as Meta;

const Template: Story = (args) => <HW12 {...args} />;

export const Primary = Template.bind({});
Primary.args = {

};