
import * as React from 'react';
import { addPropertyControls, ControlType } from 'framer';

export function new_custom79_icon(props) {
  return (
    <svg height="52" width="52" viewBox="0 0 52 52" xmlns="http://www.w3.org/2000/svg" {...props}>
	<g fill={props.fill}>
		<path d="m17.8 19.3c-2.9 0-5.2 2.3-5.2 5.2s2.3 5.2 5.2 5.2 5.2-2.3 5.2-5.2-2.3-5.2-5.2-5.2z m30 16.3h-14.3v-5.9h1.5c0.8 0 1.5-0.7 1.5-1.5v-4.4c0-0.8-0.7-1.5-1.5-1.5h-1.7c-1.2-7.4-7.5-13.1-15.3-13.3-8.9-0.1-16.1 7-16 15.7 0.2 8.6 7.4 15.3 16.1 15.3h27.4v1.5c0 0.8 0.7 1.5 1.5 1.5h1.5c0.8 0 1.5-0.7 1.5-1.5v-3.7c0-1.2-1-2.2-2.2-2.2z m-30-1.5c-5.4 0-9.7-4.3-9.7-9.6s4.3-9.6 9.7-9.6 9.7 4.3 9.7 9.6-4.3 9.6-9.7 9.6z"/>
	</g>
</svg>
  );
};

addPropertyControls(new_custom79_icon, {
  fill: {
    type: ControlType.Color,
    title: 'Fill',
    defaultValue: '#ffffff'
  }
});
  
