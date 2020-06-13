
import * as React from 'react';
import { addPropertyControls, ControlType } from 'framer';

export function waits_icon(props) {
  return (
    <svg height="100" width="100" viewBox="0 0 100 100" xmlns="http://www.w3.org/2000/svg" {...props}>
	<path d="m80 40.5c0-1-0.9-1.9-1.9-1.9h-26.2c-1 0-1.9 0.9-1.9 1.9v3.7c0 1 0.9 1.9 1.9 1.9h17.8l-19.3 23.7s0 0.1-0.1 0.1c-0.2 0.3-0.4 0.7-0.4 1.1v3.7c0 1 0.9 1.9 1.9 1.9h26.3c1 0 1.9-0.9 1.9-1.9v-3.7c0-1-0.9-1.9-1.9-1.9h-17.5l19-23.3c0.3-0.4 0.4-0.8 0.3-1.3v-4z m-30-15.2c0-1-0.9-1.9-1.9-1.9h-26.2c-1 0-1.9 0.9-1.9 1.9v3.7c0 1 0.9 1.9 1.9 1.9h17.8l-19.3 23.7s0 0.1-0.1 0.1c-0.2 0.3-0.3 0.6-0.3 1v3.7c0 1 0.9 1.9 1.9 1.9h26.3c1 0 1.9-0.9 1.9-1.9v-3.7c0-1-0.9-1.9-1.9-1.9h-17.6l19-23.3c0.3-0.4 0.4-0.8 0.3-1.3v-3.9z" fill={props.fill}/>
</svg>
  );
};

addPropertyControls(waits_icon, {
  fill: {
    type: ControlType.Color,
    title: 'Fill',
    defaultValue: '#ffffff'
  }
});
  
