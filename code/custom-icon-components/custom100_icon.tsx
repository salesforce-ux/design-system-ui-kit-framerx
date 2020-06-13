
import * as React from 'react';
import { addPropertyControls, ControlType } from 'framer';

export function custom100_icon(props) {
  return (
    <svg height="100" width="100" viewBox="0 0 100 100" xmlns="http://www.w3.org/2000/svg" {...props}>
	<g fill={props.fill}>
		<path d="m61.9 72h-23.8c-0.7 0-1.1 0.6-1 1.3 1 3.8 6.4 6.7 12.8 6.7 6.5 0 11.9-2.9 12.8-6.7 0.3-0.7-0.2-1.3-0.8-1.3z m12.1-46h-48c-3.3 0-6 2.7-6 6v28c0 3.3 2.7 6 6 6h48c3.3 0 6-2.7 6-6v-28c0-3.3-2.7-6-6-6z m0 32c0 1.1-0.9 2-2 2h-44c-1.1 0-2-0.9-2-2v-24c0-1.1 0.9-2 2-2h44c1.1 0 2 0.9 2 2v24z"/>
	</g>
</svg>
  );
};

addPropertyControls(custom100_icon, {
  fill: {
    type: ControlType.Color,
    title: 'Fill',
    defaultValue: '#ffffff'
  }
});
  
