
import * as React from 'react';
import { addPropertyControls, ControlType } from 'framer';

export function signpost_icon(props) {
  return (
    <svg height="52" width="52" viewBox="0 0 52 52" xmlns="http://www.w3.org/2000/svg" {...props}>
	<g fill={props.fill}>
		<path d="m49.5 9l-4.2-3.1c-0.6-0.4-1.2-0.6-1.9-0.6h-14.2v-1.7c0-0.9-0.7-1.6-1.6-1.6h-3.2c-0.9 0-1.6 0.7-1.6 1.6v1.6h-16c-0.9 0-1.6 0.7-1.6 1.6v6.4c0 0.9 0.7 1.6 1.6 1.6h36.6c0.7 0 1.4-0.2 1.9-0.6l4.2-3.1c0.7-0.6 0.7-1.6 0-2.1z m-4.3 13.8h-16v-2.4c0-0.5-0.3-0.8-0.8-0.8h-4.8c-0.5 0-0.8 0.3-0.8 0.8v2.4h-14.2c-0.7 0-1.4 0.2-1.9 0.6l-4.2 3.1c-0.7 0.5-0.7 1.5 0 2.1l4.2 3.1c0.6 0.4 1.2 0.6 1.9 0.6h36.6c0.9 0 1.6-0.7 1.6-1.6v-6.4c0-0.8-0.7-1.5-1.6-1.5z m-16 20.5v-5.3c0-0.5-0.3-0.8-0.8-0.8h-4.8c-0.5 0-0.8 0.3-0.8 0.8v5.3c-3.2 0.9-5 2.8-5.5 5.2-0.2 0.7 0.4 1.5 1.2 1.5h15.1c0.8 0 1.4-0.7 1.2-1.5-0.6-2.4-2.4-4.3-5.6-5.2z"/>
	</g>
</svg>
  );
};

addPropertyControls(signpost_icon, {
  fill: {
    type: ControlType.Color,
    title: 'Fill',
    defaultValue: '#ffffff'
  }
});
  
