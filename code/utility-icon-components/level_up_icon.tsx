
import * as React from 'react';
import { addPropertyControls, ControlType } from 'framer';

export function level_up_icon(props) {
  return (
    <svg height="52" width="52" viewBox="0 0 52 52" xmlns="http://www.w3.org/2000/svg" {...props}>
	<path d="m3.5 44c-0.7 0-1.5 0.7-1.5 1.5v3c0 0.8 0.8 1.5 1.5 1.5h23.9c0.8 0 1.6-0.8 1.6-1.5v-33.2c0-0.9 1-1.3 1.7-0.7l5.6 5.6c0.6 0.6 1.5 0.6 2.1 0l2.1-2.1c0.6-0.6 0.6-1.5 0-2.1l-13.5-13.6c-0.6-0.6-1.5-0.6-2.1 0l-13.5 13.5c-0.6 0.6-0.6 1.5 0 2.1l2.1 2.1c0.6 0.6 1.5 0.6 2.1 0l5.6-5.6c0.6-0.6 1.8-0.2 1.8 0.7v27.3c0 1.6-1.6 1.5-1.6 1.5h-17.9z" fill={props.fill}/>
</svg>
  );
};

addPropertyControls(level_up_icon, {
  fill: {
    type: ControlType.Color,
    title: 'Fill',
    defaultValue: '#ffffff'
  }
});
  
