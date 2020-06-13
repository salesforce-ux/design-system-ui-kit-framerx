
import * as React from 'react';
import { addPropertyControls, ControlType } from 'framer';

export function priority_icon(props) {
  return (
    <svg height="52" width="52" viewBox="0 0 52 52" xmlns="http://www.w3.org/2000/svg" {...props}>
	<g fill={props.fill}>
		<path d="m9 3.5c0-0.8-0.7-1.5-1.5-1.5h-3c-0.8 0-1.5 0.7-1.5 1.5v45c0 0.8 0.7 1.5 1.5 1.5h3c0.8 0 1.5-0.7 1.5-1.5v-45z m38.5 4.2c-16 8.4-14.2-8.8-33.5-2.1-0.6 0.2-1 0.8-1 1.4v23.3c0 0.7 0.7 1.2 1.3 0.9 19.2-6.4 17.2 11.2 33.9 1.8 0.5-0.3 0.8-0.8 0.8-1.3v-23.2c0-0.7-0.8-1.2-1.5-0.8z"/>
	</g>
</svg>
  );
};

addPropertyControls(priority_icon, {
  fill: {
    type: ControlType.Color,
    title: 'Fill',
    defaultValue: '#ffffff'
  }
});
  
