
import * as React from 'react';
import { addPropertyControls, ControlType } from 'framer';

export function food_and_drink_icon(props) {
  return (
    <svg height="52" width="52" viewBox="0 0 52 52" xmlns="http://www.w3.org/2000/svg" {...props}>
	<path d="m40.9 24c-1 7.9-7.4 13-12.9 13h-12c-6 0-13-6-13-15v-14c0-1.1 0.9-2 2-2h39c3.3 0 6 2.7 6 6v6c0 3.3-2.7 6-6 6h-3.1z m-1.9-18z m1.6 34c0.7 0 1.4 0.7 1.4 1.4v0.1c0 2.5-2 4.5-4.4 4.5h-31.2c-2.4 0-4.4-2-4.4-4.5v-0.1c0-0.7 0.7-1.4 1.4-1.4h37.2z m0.4-29v8h2c1.1 0 2-0.9 2-2v-4c0-1.1-0.9-2-2-2h-2z" fill={props.fill}/>
</svg>
  );
};

addPropertyControls(food_and_drink_icon, {
  fill: {
    type: ControlType.Color,
    title: 'Fill',
    defaultValue: '#ffffff'
  }
});
  
