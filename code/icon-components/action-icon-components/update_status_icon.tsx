
import * as React from 'react';
import { addPropertyControls, ControlType } from 'framer';

export function update_status_icon(props) {
  return (
    <svg height="52" width="52" viewBox="0 0 52 52" xmlns="http://www.w3.org/2000/svg" {...props}>
	<g fill={props.fill}>
		<path d="m29.8 30.6l1.6 1.6c0.4 0.4 1 0.4 1.4 0l4.6-4.7c0.4-0.4 0.6-0.9 0.6-1.4v-18.1c0-1.7-1.3-3-3-3h-30c-1.7 0-3 1.3-3 3v22c0 1.7 1.3 3 3 3h13.7c0.5 0 1-0.2 1.4-0.6l1.7-1.7c0.8-0.8 1.8-1.4 2.9-1.6 1.8-0.4 3.7 0.2 5.1 1.5z m-19.8-16.6c0-0.6 0.4-1 1-1h18c0.6 0 1 0.4 1 1v2c0 0.6-0.4 1-1 1h-18c-0.6 0-1-0.4-1-1v-2z m1 11c-0.6 0-1-0.4-1-1v-2c0-0.6 0.4-1 1-1h14c0.6 0 1 0.4 1 1v2c0 0.6-0.4 1-1 1h-14z m38.5 2.7l-2.2-2.2c-0.6-0.6-1.6-0.6-2.2 0l-12.3 12.4c-0.4 0.4-1.1 0.4-1.5 0l-4.4-4.5c-0.6-0.6-1.6-0.6-2.2 0l-2.2 2.2c-0.6 0.6-0.6 1.6 0 2.2l8.5 8.6c0.6 0.6 1.6 0.6 2.2 0l16.3-16.4c0.7-0.7 0.7-1.7 0-2.3z"/>
	</g>
	<path d="m19.5 33" fill={props.fill}/>
</svg>
  );
};

addPropertyControls(update_status_icon, {
  fill: {
    type: ControlType.Color,
    title: 'Fill',
    defaultValue: '#ffffff'
  }
});
  
