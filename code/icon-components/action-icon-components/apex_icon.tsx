
import * as React from 'react';
import { addPropertyControls, ControlType } from 'framer';

export function apex_icon(props) {
  return (
    <svg height="52" width="52" viewBox="0 0 52 52" xmlns="http://www.w3.org/2000/svg" {...props}>
	<g fill={props.fill}>
		<path d="m48.5 40h-27c-0.8 0-1.5 0.7-1.5 1.5v3c0 0.8 0.7 1.5 1.5 1.5h27c0.8 0 1.5-0.7 1.5-1.5v-3c0-0.8-0.7-1.5-1.5-1.5z m-23.1-18.2l-19.4-15.5c-0.6-0.5-1.5-0.4-2 0.3l-1.7 2.4c-0.5 0.7-0.3 1.6 0.3 2.1l13.8 11c0.5 0.4 0.5 1.2 0 1.6l-13.8 11c-0.6 0.5-0.8 1.5-0.3 2.1l1.7 2.6c0.5 0.7 1.4 0.8 2 0.3l19.4-15.5c0.8-0.6 0.8-1.8 0-2.4z"/>
	</g>
</svg>
  );
};

addPropertyControls(apex_icon, {
  fill: {
    type: ControlType.Color,
    title: 'Fill',
    defaultValue: '#ffffff'
  }
});
  
