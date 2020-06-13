
import * as React from 'react';
import { addPropertyControls, ControlType } from 'framer';

export function new_custom40_icon(props) {
  return (
    <svg height="52" width="52" viewBox="0 0 52 52" xmlns="http://www.w3.org/2000/svg" {...props}>
	<g fill={props.fill}>
		<path d="m45.2 8h-38.4c-2.6 0-4.8 2.1-4.8 4.7v26.6c0 2.6 2.2 4.7 4.8 4.7h38.4c2.6 0 4.8-2.1 4.8-4.7v-26.6c0-2.6-2.2-4.7-4.8-4.7z m0 4.7v4.7h-38.4v-4.7h38.4z m-38.4 26.6v-14.1h38.4v14.1h-38.4z m13.7-10.2c-1.1 0-2.1 0.5-2.6 1.4-0.1 0.2-0.3 0.2-0.4 0-0.6-0.9-1.5-1.4-2.6-1.4-1.8 0-3.2 1.4-3.2 3.1 0 1.7 1.4 3.1 3.2 3.1 1.1 0 2.1-0.5 2.6-1.4 0.1-0.2 0.3-0.2 0.4 0 0.6 0.9 1.5 1.4 2.6 1.4h0.1c1.7 0 3.1-1.3 3.1-3.1v-0.2c-0.1-1.5-1.5-2.9-3.2-2.9z m18.3 0.8h-9.6c-0.9 0-1.6 0.7-1.6 1.6v1.5c0 0.9 0.7 1.6 1.6 1.6h9.6c0.9 0 1.6-0.7 1.6-1.6v-1.6c0-0.8-0.7-1.5-1.6-1.5z"/>
	</g>
</svg>
  );
};

addPropertyControls(new_custom40_icon, {
  fill: {
    type: ControlType.Color,
    title: 'Fill',
    defaultValue: '#ffffff'
  }
});
  
