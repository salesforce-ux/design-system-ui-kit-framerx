
import * as React from 'react';
import { addPropertyControls, ControlType } from 'framer';

export function filter_icon(props) {
  return (
    <svg height="52" width="52" viewBox="0 0 52 52" xmlns="http://www.w3.org/2000/svg" {...props}>
	<g fill={props.fill}>
		<path d="m24.4 31.8c-0.6-0.6-1.5-0.6-2.1 0l-3.6 3.6c-0.6 0.6-1.7 0.2-1.7-0.7v-13.2c0-0.8-0.7-1.5-1.5-1.5h-3c-0.8 0-1.5 0.7-1.5 1.5v13.2c0 0.9-1.1 1.3-1.7 0.7l-3.6-3.6c-0.6-0.6-1.5-0.6-2.1 0l-2.2 2.2c-0.6 0.6-0.6 1.5 0 2.1l11.5 11.5c0.6 0.6 1.5 0.6 2.1 0l11.6-11.6c0.6-0.6 0.6-1.5 0-2.1l-2.2-2.1z m26.6-22.3c0-0.8-0.7-1.5-1.5-1.5h-37c-0.8 0-1.5 0.7-1.5 1.5v3c0 0.8 0.7 1.5 1.5 1.5h37c0.8 0 1.5-0.7 1.5-1.5v-3z m0 12c0-0.8-0.7-1.5-1.5-1.5h-27c-0.8 0-1.5 0.7-1.5 1.5v3c0 0.8 0.7 1.5 1.5 1.5h27c0.8 0 1.5-0.7 1.5-1.5v-3z m0 12c0-0.8-0.7-1.5-1.5-1.5h-17c-0.8 0-1.5 0.7-1.5 1.5v3c0 0.8 0.7 1.5 1.5 1.5h17c0.8 0 1.5-0.7 1.5-1.5v-3z"/>
	</g>
</svg>
  );
};

addPropertyControls(filter_icon, {
  fill: {
    type: ControlType.Color,
    title: 'Fill',
    defaultValue: '#ffffff'
  }
});
  
