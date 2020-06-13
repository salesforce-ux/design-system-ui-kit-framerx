
import * as React from 'react';
import { addPropertyControls, ControlType } from 'framer';

export function move_icon(props) {
  return (
    <svg height="52" width="52" viewBox="0 0 52 52" xmlns="http://www.w3.org/2000/svg" {...props}>
	<path d="m49.7 25.3l-8.3-9c-0.6-0.6-1.4-0.1-1.4 0.9v5.8h-10c-0.6 0-1-0.4-1-1v-10h5.9c1 0 1.5-0.9 0.9-1.4l-9-8.3c-0.4-0.3-1-0.3-1.4 0l-9 8.3c-0.6 0.6-0.1 1.4 0.9 1.4h5.7v10c0 0.6-0.4 1-1 1h-10v-5.9c0-1-0.9-1.5-1.4-0.9l-8.3 9c-0.3 0.4-0.3 1 0 1.4l8.3 9c0.6 0.6 1.4 0.1 1.4-0.9v-5.7h10c0.6 0 1 0.4 1 1v10h-5.9c-1 0-1.5 0.9-0.9 1.4l9 8.3c0.4 0.3 1 0.3 1.4 0l9-8.3c0.6-0.6 0.1-1.4-0.9-1.4h-5.7v-10c0-0.6 0.4-1 1-1h10v5.9c0 1 0.9 1.5 1.4 0.9l8.3-9c0.4-0.5 0.4-1.1 0-1.5z" fill={props.fill}/>
</svg>
  );
};

addPropertyControls(move_icon, {
  fill: {
    type: ControlType.Color,
    title: 'Fill',
    defaultValue: '#ffffff'
  }
});
  
