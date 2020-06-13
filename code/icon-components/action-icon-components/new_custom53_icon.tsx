
import * as React from 'react';
import { addPropertyControls, ControlType } from 'framer';

export function new_custom53_icon(props) {
  return (
    <svg height="52" width="52" viewBox="0 0 52 52" xmlns="http://www.w3.org/2000/svg" {...props}>
	<g fill={props.fill}>
		<path d="m45.4 31.6h-0.5c-1.8 0-3.2-1.4-3.2-3.3v-10.6c0-9.3-8.2-16.7-17.5-15.6-8 0.9-13.9 8-13.9 16.3v9.5c0 2-1.7 3.7-3.6 3.7h-0.1c-1.4 0-2.6 1.2-2.6 2.6v1.9c0 1.4 1.2 2.6 2.6 2.6h38.8c1.4 0 2.6-1.2 2.6-2.6v-1.9c0-1.4-1.2-2.6-2.6-2.6z m-14.2 12h-10.4c-0.6 0-1.2 0.5-1 1.1 0.6 3 3.1 5.3 6.3 5.3s5.7-2.2 6.3-5.3c0-0.6-0.5-1.1-1.2-1.1z"/>
	</g>
</svg>
  );
};

addPropertyControls(new_custom53_icon, {
  fill: {
    type: ControlType.Color,
    title: 'Fill',
    defaultValue: '#ffffff'
  }
});
  
