
import * as React from 'react';
import { addPropertyControls, ControlType } from 'framer';

export function shortcuts_icon(props) {
  return (
    <svg height="52" width="52" viewBox="0 0 52 52" xmlns="http://www.w3.org/2000/svg" {...props}>
	<title/>
	<path d="m12.1 2.7h26.5c0.9 0 1.6 0.7 1.6 1.6 0 0.5-0.2 0.9-0.5 1.2l-7.2 7.2c4.4 3.9 16.7 17.5 2.3 34.9l-0.2 0.2c0 0.1-0.1 0.1-0.2 0.2-0.3 0.4-0.8 0.7-1.4 0.7-0.9 0-1.6-0.7-1.6-1.6v-0.3c0-0.1 0-0.2 0.1-0.2 0.5-2.2 3.6-17.2-9.6-23.4l-8.7 8.7c-0.3 0.3-0.7 0.5-1.1 0.5-0.9 0-1.6-0.7-1.6-1.6v-26.4c-0.1-0.9 0.7-1.7 1.6-1.7z" fill={props.fill}/>
</svg>
  );
};

addPropertyControls(shortcuts_icon, {
  fill: {
    type: ControlType.Color,
    title: 'Fill',
    defaultValue: '#ffffff'
  }
});
  
