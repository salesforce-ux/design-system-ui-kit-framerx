
import * as React from 'react';
import { addPropertyControls, ControlType } from 'framer';

export function jump_to_top_icon(props) {
  return (
    <svg height="52" width="52" viewBox="0 0 52 52" xmlns="http://www.w3.org/2000/svg" {...props}>
	<g fill={props.fill}>
		<path d="m11.4 21.6l13.5-13.7c0.6-0.6 1.6-0.6 2.2 0l13.5 13.7c0.6 0.6 0.6 1.6 0 2.2l-2.2 2.2c-0.6 0.6-1.6 0.6-2.2 0l-9.1-9.4c-0.6-0.6-1.6-0.6-2.2 0l-9.1 9.3c-0.6 0.6-1.6 0.6-2.2 0l-2.2-2.2c-0.5-0.6-0.5-1.5 0-2.1z m0 18.1l13.5-13.7c0.6-0.6 1.6-0.6 2.2 0l13.5 13.7c0.6 0.6 0.6 1.6 0 2.2l-2.2 2.2c-0.6 0.6-1.6 0.6-2.2 0l-9.1-9.4c-0.6-0.6-1.6-0.6-2.2 0l-9.1 9.3c-0.6 0.6-1.6 0.6-2.2 0l-2.2-2.2c-0.5-0.6-0.5-1.6 0-2.1z"/>
	</g>
</svg>
  );
};

addPropertyControls(jump_to_top_icon, {
  fill: {
    type: ControlType.Color,
    title: 'Fill',
    defaultValue: '#ffffff'
  }
});
  
