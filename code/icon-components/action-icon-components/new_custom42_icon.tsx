
import * as React from 'react';
import { addPropertyControls, ControlType } from 'framer';

export function new_custom42_icon(props) {
  return (
    <svg height="52" width="52" viewBox="0 0 52 52" xmlns="http://www.w3.org/2000/svg" {...props}>
	<g fill={props.fill}>
		<path d="m45.2 4h-38.4c-2.6 0-4.8 2.1-4.8 4.7v4.7c0 0.9 0.7 1.6 1.6 1.6h44.8c0.9 0 1.6-0.7 1.6-1.6v-4.7c0-2.6-2.2-4.7-4.8-4.7z m0 15.7h-38.4c-0.9 0-1.6 0.7-1.6 1.6v22c0 2.6 2.2 4.7 4.8 4.7h32c2.6 0 4.8-2.1 4.8-4.7v-22c0-0.9-0.7-1.6-1.6-1.6z m-10.4 7.1c0 1.3-1 2.4-2.4 2.4h-12.8c-1.3 0-2.4-1-2.4-2.4 0-1.3 1-2.4 2.4-2.4h12.8c1.4 0 2.4 1 2.4 2.4z"/>
	</g>
</svg>
  );
};

addPropertyControls(new_custom42_icon, {
  fill: {
    type: ControlType.Color,
    title: 'Fill',
    defaultValue: '#ffffff'
  }
});
  
