
import * as React from 'react';
import { addPropertyControls, ControlType } from 'framer';

export function undelete_icon(props) {
  return (
    <svg height="52" width="52" viewBox="0 0 52 52" xmlns="http://www.w3.org/2000/svg" {...props}>
	<g fill={props.fill}>
		<path d="m41.5 20h-31c-0.8 0-1.5 0.7-1.5 1.5v23.5c0 2.8 2.2 5 5 5h24c2.8 0 5-2.2 5-5v-23.5c0-0.8-0.7-1.5-1.5-1.5z m-15.5 26v-4c3.3 0 6-2.7 6-6s-2.7-6-6-6c-1.6 0-3.1 0.7-4.2 1.8l2.4 2.4c0.3 0.3 0.1 0.9-0.4 0.9h-7.3c-0.3 0-0.5-0.2-0.5-0.5v-7.3c0-0.4 0.5-0.7 0.9-0.4l2.1 2.1c1.9-1.8 4.4-2.9 7.1-2.9 5.5 0 10 4.5 10 10s-4.6 9.9-10.1 9.9z m19.5-36h-12.5v-4c0-2.2-1.8-4-4-4h-6c-2.2 0-4 1.8-4 4v4h-12.5c-0.8 0-1.5 0.7-1.5 1.5v3c0 0.8 0.7 1.5 1.5 1.5h39c0.8 0 1.5-0.7 1.5-1.5v-3c0-0.8-0.7-1.5-1.5-1.5z m-16.5 0h-6v-3c0-0.6 0.4-1 1-1h4c0.6 0 1 0.4 1 1v3z"/>
	</g>
</svg>
  );
};

addPropertyControls(undelete_icon, {
  fill: {
    type: ControlType.Color,
    title: 'Fill',
    defaultValue: '#ffffff'
  }
});
  
