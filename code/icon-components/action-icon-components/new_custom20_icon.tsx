
import * as React from 'react';
import { addPropertyControls, ControlType } from 'framer';

export function new_custom20_icon(props) {
  return (
    <svg height="52" width="52" viewBox="0 0 52 52" xmlns="http://www.w3.org/2000/svg" {...props}>
	<g fill={props.fill}>
		<path d="m16.4 24.2c0-0.6-0.8-1-1.3-0.6l-11.2 8.5c-1.2 0.9-1.9 2.4-1.9 3.9v3.3c0 0.6 0.6 1 1 0.7l12.3-4.6c0.6-0.2 1-0.8 1-1.5 0.1-0.1 0.1-9.7 0.1-9.7z m17.7 22.3l-3.3-2.2v-36.2c0-2.2-2.3-4.6-3.8-5.8-0.6-0.5-1.4-0.5-2 0-1.4 1.2-3.8 3.6-3.8 5.8v36.3l-3.7 2.4c-0.6 0.5-1.1 1.2-1.1 2v0.5c0 0.4 0.3 0.7 0.7 0.7h17.7c0.4 0 0.9-0.3 0.9-0.7-0.1-1.2-0.7-2.1-1.6-2.8z m14-14.4l-11.2-8.6c-0.6-0.4-1.3 0-1.3 0.6v9.8c0 0.6 0.4 1.3 1 1.5l12.4 4.7c0.6 0.2 1-0.2 1-0.7v-3.3c0-1.6-0.7-3.1-1.9-4z"/>
	</g>
</svg>
  );
};

addPropertyControls(new_custom20_icon, {
  fill: {
    type: ControlType.Color,
    title: 'Fill',
    defaultValue: '#ffffff'
  }
});
  
