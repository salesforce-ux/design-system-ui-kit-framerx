
import * as React from 'react';
import { addPropertyControls, ControlType } from 'framer';

export function announcement_icon(props) {
  return (
    <svg height="52" width="52" viewBox="0 0 52 52" xmlns="http://www.w3.org/2000/svg" {...props}>
	<g fill={props.fill}>
		<path d="m22.7 45.4l-1.3-1c-1.4-1-1.4-3-1.4-4v-2.9c0-0.8-0.7-1.5-1.5-1.5h-6c-0.8 0-1.5 0.7-1.5 1.5v7.7c0 2.7 1.6 4.8 4.1 4.8h4.9c2.9 0 3.1-2 3.1-2s0.5-1.8-0.4-2.6z m22.3-27.4v-13.7c0-2.4-3-3.1-4.6-1.5l-8.9 8.4c-1.4 1.2-3.2 1.7-5 1.7h-15.2c-5.2 0.1-9.3 4.6-9.3 9.8v0.2c0 5.2 4.1 9.1 9.3 9.1h15.2c1.9 0 3.7 0.8 5.1 2l8.8 8.6c1.6 1.6 4.6 1 4.6-1.4v-13.6c3 0 4.8-2.1 4.8-4.8 0-2.7-1.8-4.8-4.8-4.8z"/>
	</g>
</svg>
  );
};

addPropertyControls(announcement_icon, {
  fill: {
    type: ControlType.Color,
    title: 'Fill',
    defaultValue: '#ffffff'
  }
});
  
