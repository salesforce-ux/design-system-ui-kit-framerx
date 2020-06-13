
import * as React from 'react';
import { addPropertyControls, ControlType } from 'framer';

export function new_event_icon(props) {
  return (
    <svg height="52" width="52" viewBox="0 0 52 52" xmlns="http://www.w3.org/2000/svg" {...props}>
	<g fill={props.fill}>
		<path d="m46.5 20h-41c-0.8 0-1.5 0.7-1.5 1.5v24.5c0 2.2 1.8 4 4 4h36c2.2 0 4-1.8 4-4v-24.5c0-0.8-0.7-1.5-1.5-1.5z m-27.5 22c0 0.6-0.4 1-1 1h-4c-0.6 0-1-0.4-1-1v-4c0-0.6 0.4-1 1-1h4c0.6 0 1 0.4 1 1v4z m0-10c0 0.6-0.4 1-1 1h-4c-0.6 0-1-0.4-1-1v-4c0-0.6 0.4-1 1-1h4c0.6 0 1 0.4 1 1v4z m10 10c0 0.6-0.4 1-1 1h-4c-0.6 0-1-0.4-1-1v-4c0-0.6 0.4-1 1-1h4c0.6 0 1 0.4 1 1v4z m0-10c0 0.6-0.4 1-1 1h-4c-0.6 0-1-0.4-1-1v-4c0-0.6 0.4-1 1-1h4c0.6 0 1 0.4 1 1v4z m10 10c0 0.6-0.4 1-1 1h-4c-0.6 0-1-0.4-1-1v-4c0-0.6 0.4-1 1-1h4c0.6 0 1 0.4 1 1v4z m0-10c0 0.6-0.4 1-1 1h-4c-0.6 0-1-0.4-1-1v-4c0-0.6 0.4-1 1-1h4c0.6 0 1 0.4 1 1v4z m5-25h-5v-2c0-1.6-1.3-3-3-3-1.6 0-3 1.3-3 3v2h-14v-2c0-1.6-1.3-3-3-3-1.6 0-3 1.3-3 3v2h-5c-2.2 0-4 1.8-4 4v2.5c0 0.8 0.7 1.5 1.5 1.5h41c0.8 0 1.5-0.7 1.5-1.5v-2.5c0-2.2-1.8-4-4-4z"/>
	</g>
</svg>
  );
};

addPropertyControls(new_event_icon, {
  fill: {
    type: ControlType.Color,
    title: 'Fill',
    defaultValue: '#ffffff'
  }
});
  
