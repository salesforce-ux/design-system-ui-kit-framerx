
import * as React from 'react';
import { addPropertyControls, ControlType } from 'framer';

export function new_custom27_icon(props) {
  return (
    <svg height="52" width="52" viewBox="0 0 52 52" xmlns="http://www.w3.org/2000/svg" {...props}>
	<g fill={props.fill}>
		<path d="m6.5 35.6h39c0.8 0 1.5-0.7 1.5-1.5v-23.7c0-2.4-2-4.4-4.5-4.4h-33c-2.5 0-4.5 2-4.5 4.4v23.7c0 0.9 0.7 1.5 1.5 1.5z m3-23.7c0-0.8 0.7-1.5 1.5-1.5h30c0.8 0 1.5 0.7 1.5 1.5v17.8c0 0.8-0.7 1.5-1.5 1.5h-30c-0.8 0-1.5-0.7-1.5-1.5v-17.8z m39 28.2h-16.5c-0.8 0-1.5 0.7-1.5 1.5s-0.7 1.5-1.5 1.5h-6c-0.8 0-1.5-0.7-1.5-1.5s-0.7-1.5-1.5-1.5h-16.5c-0.8 0-1.5 0.7-1.5 1.5 0 2.4 2 4.4 4.5 4.4h39c2.5 0 4.5-2 4.5-4.4 0-0.9-0.7-1.5-1.5-1.5z"/>
	</g>
</svg>
  );
};

addPropertyControls(new_custom27_icon, {
  fill: {
    type: ControlType.Color,
    title: 'Fill',
    defaultValue: '#ffffff'
  }
});
  
