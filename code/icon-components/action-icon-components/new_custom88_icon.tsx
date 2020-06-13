
import * as React from 'react';
import { addPropertyControls, ControlType } from 'framer';

export function new_custom88_icon(props) {
  return (
    <svg height="52" width="52" viewBox="0 0 52 52" xmlns="http://www.w3.org/2000/svg" {...props}>
	<g fill={props.fill}>
		<path d="m48.5 42h-45c-0.8 0-1.5 0.6-1.5 1.4v0.1c0 3.6 4.5 6.5 8 6.5h32c3.5 0 8-2.9 8-6.5v-0.1c0-0.8-0.7-1.4-1.5-1.4z m-44.1-4.8h14.4c0.9 0 1.6-0.9 1.6-1.8v-27.5c0-0.4-0.6-0.6-0.7-0.2l-16 28.2c-0.3 0.6 0.1 1.3 0.7 1.3z m22.4 0h20c1 0 1.7-0.9 1.6-1.8-0.7-5.8-1.7-23.7-22.1-33.3-0.5-0.2-1.1 0.1-1.1 0.7v32.6c0 0.9 0.7 1.8 1.6 1.8z"/>
	</g>
</svg>
  );
};

addPropertyControls(new_custom88_icon, {
  fill: {
    type: ControlType.Color,
    title: 'Fill',
    defaultValue: '#ffffff'
  }
});
  
