
import * as React from 'react';
import { addPropertyControls, ControlType } from 'framer';

export function advanced_function_icon(props) {
  return (
    <svg height="52" width="52" viewBox="0 0 52 52" xmlns="http://www.w3.org/2000/svg" {...props}>
	<path d="m43 6.9v-2.9c0-0.8-0.7-1.5-1.5-1.5h-29.7c-0.8 0-1.5 0.7-1.5 1.5v3.1c0 0.3 0 0.7 0.3 1l14.6 17.9-14.6 17.9c-0.2 0.3-0.3 0.6-0.3 1v3.1c0 0.8 0.7 1.5 1.5 1.5h29.7c0.8 0 1.5-0.7 1.5-1.5v-2.9c0-0.8-0.7-1.5-1.5-1.5h-23.1l13.3-16.3c0.3-0.4 0.4-0.8 0.4-1.4 0-0.5-0.2-1-0.5-1.4l-13.2-16.1h23.1c0.8 0 1.5-0.7 1.5-1.5z" fill={props.fill}/>
</svg>
  );
};

addPropertyControls(advanced_function_icon, {
  fill: {
    type: ControlType.Color,
    title: 'Fill',
    defaultValue: '#ffffff'
  }
});
  
