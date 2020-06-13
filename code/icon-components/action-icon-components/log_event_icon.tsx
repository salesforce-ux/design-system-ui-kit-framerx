
import * as React from 'react';
import { addPropertyControls, ControlType } from 'framer';

export function log_event_icon(props) {
  return (
    <svg height="52" width="52" viewBox="0 0 52 52" xmlns="http://www.w3.org/2000/svg" {...props}>
	<g fill={props.fill}>
		<path d="m38.7 40.2l-4.8 1.6c-0.4 0.1-0.9 0.2-1.3 0.2-1.4 0-2.8-0.7-3.7-1.8-0.9-1.1-1.1-2.7-0.8-4.1l1.6-5.7 7.5-7.5c0.3-0.3 0.1-0.9-0.4-0.9h-31.3c-0.8 0-1.5 0.7-1.5 1.5v18.5c0 2.2 1.8 4 4 4h28c2.2 0 4-1.8 4-4v-0.8c0-0.7-0.7-1.2-1.3-1z m-33.2-22.2h33c0.8 0 1.5-0.7 1.5-1.5v-2.5c0-2.2-1.8-4-4-4h-3v-1c0-1.6-1.3-3-3-3-1.6 0-3 1.3-3 3v1h-10v-1c0-1.6-1.3-3-3-3-1.6 0-3 1.3-3 3v1h-3c-2.2 0-4 1.8-4 4v2.5c0 0.8 0.7 1.5 1.5 1.5z m38 5.1c-0.2-0.2-0.5-0.2-0.7 0l-9.4 9.4-1.4 4.7c-0.1 0.5 0.3 0.9 0.8 0.8l4.7-1.4 9.4-9.4c0.2-0.2 0.2-0.5 0-0.7l-3.4-3.4z m8-2.9l-1.8-1.8c-0.6-0.6-1.7-0.6-2.4 0 0 0-1.1 1.1-1.6 1.7-0.2 0.2-0.2 0.5 0 0.7l3.4 3.4c0.2 0.2 0.5 0.2 0.7 0 0.6-0.6 1.7-1.6 1.7-1.6 0.7-0.6 0.7-1.7 0-2.4z"/>
	</g>
</svg>
  );
};

addPropertyControls(log_event_icon, {
  fill: {
    type: ControlType.Color,
    title: 'Fill',
    defaultValue: '#ffffff'
  }
});
  
