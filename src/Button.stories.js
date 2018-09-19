import React from 'react';
import {storiesOf} from '@storybook/react';
import {withInfo} from '@storybook/addon-info';
import {Button} from './Button';

import {color} from '@storybook/addon-knobs/react';


storiesOf('Button', module).addWithJSX('with background',withInfo('component description') (() => {
   return <Button bg="palegoldenrod">Hello World</Button>
})).addWithJSX('with background 2', () => {
    return <Button bg={color('bg','fuchsia', 'group1')}>Bye World</Button>
});