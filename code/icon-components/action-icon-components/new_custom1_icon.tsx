
import * as React from 'react';
import { addPropertyControls, ControlType } from 'framer';

export function new_custom1_icon(props) {
  return (
    <svg height="52" width="52" viewBox="0 0 52 52" xmlns="http://www.w3.org/2000/svg" {...props}>
	<path d="m29.4 45.5c-1.9 2-5 2-6.9 0-5.8-6.1-16.8-17.7-16.8-17.8-5-5.1-5-13.6 0-18.8 2.4-2.5 5.6-3.9 9-3.9s6.6 1.3 9 3.9l1 1.2c0.6 0.8 1.9 0.8 2.6 0l0.8-1 0.1-0.1c2.5-2.6 5.7-4 9-4 3.4 0 6.6 1.3 9 3.9 5 5.1 5 13.6 0 18.8 0 0.1-10.9 11.7-16.8 17.8z" fill={props.fill}/>
</svg>
  );
};

addPropertyControls(new_custom1_icon, {
  fill: {
    type: ControlType.Color,
    title: 'Fill',
    defaultValue: '#ffffff'
  }
});
  
