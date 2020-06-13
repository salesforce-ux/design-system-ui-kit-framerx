
import * as React from 'react';
import { addPropertyControls, ControlType } from 'framer';

export function new_case_icon(props) {
  return (
    <svg height="52" width="52" viewBox="0 0 52 52" xmlns="http://www.w3.org/2000/svg" {...props}>
	<g fill={props.fill}>
		<path d="m15 13h4c0.6 0 1-0.4 1-1v-2h12v2c0 0.6 0.4 1 1 1h4c0.6 0 1-0.4 1-1v-2.5c0-3-2.5-5.5-5.5-5.5h-13.1c-3 0-5.4 2.4-5.4 5.4v2.6c0 0.6 0.4 1 1 1z m31 4h-40c-2.2 0-4 1.8-4 4v23c0 2.2 1.8 4 4 4h40c2.2 0 4-1.8 4-4v-23c0-2.2-1.8-4-4-4z"/>
	</g>
</svg>
  );
};

addPropertyControls(new_case_icon, {
  fill: {
    type: ControlType.Color,
    title: 'Fill',
    defaultValue: '#ffffff'
  }
});
  
