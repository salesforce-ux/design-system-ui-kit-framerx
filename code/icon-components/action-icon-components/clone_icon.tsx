
import * as React from 'react';
import { addPropertyControls, ControlType } from 'framer';

export function clone_icon(props) {
  return (
    <svg height="52" width="52" viewBox="0 0 52 52" xmlns="http://www.w3.org/2000/svg" {...props}>
	<g fill={props.fill}>
		<path d="m46 2h-28c-2.2 0-4 1.8-4 4v2.5c0 0.8 0.7 1.5 1.5 1.5h18.5c4.4 0 8 3.6 8 8v18.5c0 0.8 0.7 1.5 1.5 1.5h2.5c2.2 0 4-1.8 4-4v-28c0-2.2-1.8-4-4-4z m-12 12h-28c-2.2 0-4 1.8-4 4v28c0 2.2 1.8 4 4 4h28c2.2 0 4-1.8 4-4v-28c0-2.2-1.8-4-4-4z m-4 27c0 0.6-0.4 1-1 1h-18c-0.6 0-1-0.4-1-1v-2c0-0.6 0.4-1 1-1h18c0.6 0 1 0.4 1 1v2z m0-8c0 0.6-0.4 1-1 1h-18c-0.6 0-1-0.4-1-1v-2c0-0.6 0.4-1 1-1h18c0.6 0 1 0.4 1 1v2z m0-8c0 0.6-0.4 1-1 1h-18c-0.6 0-1-0.4-1-1v-2c0-0.6 0.4-1 1-1h18c0.6 0 1 0.4 1 1v2z"/>
	</g>
</svg>
  );
};

addPropertyControls(clone_icon, {
  fill: {
    type: ControlType.Color,
    title: 'Fill',
    defaultValue: '#ffffff'
  }
});
  
