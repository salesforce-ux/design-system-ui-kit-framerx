
import * as React from 'react';
import { addPropertyControls, ControlType } from 'framer';

export function new_custom98_icon(props) {
  return (
    <svg height="52" width="52" viewBox="0 0 52 52" xmlns="http://www.w3.org/2000/svg" {...props}>
	<g fill={props.fill}>
		<path d="m49.6 22.1l-5.9-5.9c-0.3-0.3-0.7-0.5-1-0.5h-6.1c-0.8 0-1.5 0.7-1.5 1.5v12.1c0 0.5 0.5 0.9 1.1 0.7 1-0.5 2.2-0.7 3.4-0.7 3.4 0 6.3 1.9 7.9 4.7 0.2 0.4 0.8 0.5 1.1 0.2 0.9-0.8 1.5-2 1.5-3.4v-7.7c-0.1-0.3-0.2-0.7-0.5-1z"/>
		<path d="m29 9h-25.5c-0.8 0-1.5 0.7-1.5 1.5v20.4c0 1.4 0.6 2.6 1.5 3.4 0.4 0.3 0.9 0.2 1.1-0.2 1.5-2.8 4.5-4.7 7.9-4.7 3.8 0 6.9 2.3 8.3 5.6 0.1 0.3 0.4 0.5 0.7 0.5h4.5c2.5 0 4.5-2 4.5-4.5v-20.5c0-0.8-0.7-1.5-1.5-1.5z"/>
		<ellipse cx="39.5" cy="38.5" rx="4.5" ry="4.5"/>
		<ellipse cx="12.5" cy="38.5" rx="4.5" ry="4.5"/>
	</g>
</svg>
  );
};

addPropertyControls(new_custom98_icon, {
  fill: {
    type: ControlType.Color,
    title: 'Fill',
    defaultValue: '#ffffff'
  }
});
  
