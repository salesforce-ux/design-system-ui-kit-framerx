
import * as React from 'react';
import { addPropertyControls, ControlType } from 'framer';

export function custom1_icon(props) {
  return (
    <svg height="100" width="100" viewBox="0 0 100 100" xmlns="http://www.w3.org/2000/svg" {...props}>
	<path d="m54.3 74.1c-2.4 2.5-6.3 2.5-8.7 0-7.2-7.7-21-22.4-21-22.5-6.2-6.5-6.2-17.2 0-23.7 3-3.2 7-4.9 11.3-4.9 4.3 0 8.3 1.7 11.3 4.9l1.2 1.5c0.8 1 2.4 1 3.2 0l1-1.3 0.2-0.2c3.1-3.3 7.1-5 11.3-5 4.3 0 8.3 1.7 11.3 4.9 6.2 6.5 6.2 17.2 0 23.7-0.1 0.2-13.8 14.9-21.1 22.6z" fill={props.fill}/>
</svg>
  );
};

addPropertyControls(custom1_icon, {
  fill: {
    type: ControlType.Color,
    title: 'Fill',
    defaultValue: '#ffffff'
  }
});
  
