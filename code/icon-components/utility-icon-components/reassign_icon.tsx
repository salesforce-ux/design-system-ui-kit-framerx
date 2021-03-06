
import * as React from 'react';
import { addPropertyControls, ControlType } from 'framer';

export function reassign_icon(props) {
  return (
    <svg height="52" width="52" viewBox="0 0 52 52" xmlns="http://www.w3.org/2000/svg" {...props}>
	<path d="m23.2 10.2c-5.1-5.1-13.2-6.7-20.3-4.5-0.3 0-0.7 0.5-0.7 1.3v3.9c0 0.8 0.7 1 1.1 0.9 5.4-2.2 12-1.2 16.3 3.3l1.1 1.1c0.6 0.6 0.1 1.7-0.7 1.7h-7.8c-0.8 0-1.5 0.6-1.5 1.5v3c0 0.8 0.6 1.5 1.5 1.5l19.2 0.2c0.8 0 1.5-0.6 1.5-1.5l0.1-19.1c0-0.8-0.6-1.5-1.5-1.5h-3c-0.8 0-1.6 0.6-1.6 1.4l-0.1 7.9c0 0.8-1.1 1.3-1.7 0.7 0.1 0.1-1.9-1.8-1.9-1.8z m-19.7 17.6h3c0.8 0 1.5 0.7 1.5 1.5v13.2c0 0.8 0.7 1.5 1.5 1.5h33c0.8 0 1.5-0.7 1.5-1.5v-25.6c0-0.8-0.7-1.5-1.5-1.5h-4c-0.8 0-1.5-0.7-1.5-1.5v-3c0-0.8 0.7-1.5 1.5-1.5h7.5c2.2 0 4 1.8 4 4v32.6c0 2.2-1.8 4-4 4h-40c-2.2 0-4-1.8-4-4v-16.7c0-0.8 0.7-1.5 1.5-1.5z" fill={props.fill}/>
</svg>
  );
};

addPropertyControls(reassign_icon, {
  fill: {
    type: ControlType.Color,
    title: 'Fill',
    defaultValue: '#ffffff'
  }
});
  
