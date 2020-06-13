
import * as React from 'react';
import { addPropertyControls, ControlType } from 'framer';

export function new_window_icon(props) {
  return (
    <svg height="52" width="52" viewBox="0 0 52 52" xmlns="http://www.w3.org/2000/svg" {...props}>
	<g fill={props.fill}>
		<path d="m48.7 2h-19.1c-0.8 0-1.6 0.5-1.6 1.3v3c0 0.8 0.7 1.7 1.6 1.7h7.9c0.9 0 1.4 1 0.7 1.6l-17 17c-0.6 0.6-0.6 1.5 0 2.1l2.1 2.1c0.6 0.6 1.5 0.6 2.1 0l17-17c0.6-0.6 1.6-0.2 1.6 0.7v7.9c0 0.8 0.8 1.7 1.6 1.7h2.9c0.8 0 1.5-0.9 1.5-1.7v-19c0-0.9-0.5-1.4-1.3-1.4z m-12.4 23.5l-3.4 3.5c-0.6 0.6-0.9 1.3-0.9 2.1v11.4c0 0.8-0.7 1.5-1.5 1.5h-21c-0.8 0-1.5-0.7-1.5-1.5v-21c0-0.8 0.7-1.5 1.5-1.5h11.5c0.8 0 1.6-0.3 2.1-0.9l3.4-3.4c0.6-0.6 0.2-1.7-0.7-1.7h-19.8c-2.2 0-4 1.8-4 4v28c0 2.2 1.8 4 4 4h28c2.2 0 4-1.8 4-4v-19.8c0-0.9-1.1-1.3-1.7-0.7z"/>
	</g>
</svg>
  );
};

addPropertyControls(new_window_icon, {
  fill: {
    type: ControlType.Color,
    title: 'Fill',
    defaultValue: '#ffffff'
  }
});
  
