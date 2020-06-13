
import * as React from 'react';
import { addPropertyControls, ControlType } from 'framer';

export function full_width_view_icon(props) {
  return (
    <svg height="52" width="52" viewBox="0 0 52 52" xmlns="http://www.w3.org/2000/svg" {...props}>
	<g fill={props.fill}>
		<path d="m48.5 4h-45c-0.8 0-1.5 0.7-1.5 1.5v5c0 0.8 0.7 1.5 1.5 1.5h45c0.8 0 1.5-0.7 1.5-1.5v-5c-0.1-0.8-0.7-1.5-1.5-1.5z m-37.8 12h-7c-0.8 0-1.5 0.7-1.5 1.5v29.8c0 0.8 0.7 1.5 1.5 1.5h7c0.8 0 1.5-0.7 1.5-1.5v-29.8c0-0.8-0.7-1.5-1.5-1.5z m37.8 0h-7c-0.8 0-1.5 0.7-1.5 1.5v29.8c0 0.8 0.7 1.5 1.5 1.5h7c0.8 0 1.5-0.7 1.5-1.5v-29.8c0-0.8-0.7-1.5-1.5-1.5z m-14 0h-16.8c-0.8 0-1.5 0.7-1.5 1.5v29.8c0 0.8 0.7 1.5 1.5 1.5h16.8c0.8 0 1.5-0.7 1.5-1.5v-29.8c0-0.8-0.7-1.5-1.5-1.5z"/>
	</g>
</svg>
  );
};

addPropertyControls(full_width_view_icon, {
  fill: {
    type: ControlType.Color,
    title: 'Fill',
    defaultValue: '#ffffff'
  }
});
  
