
import * as React from 'react';
import { addPropertyControls, ControlType } from 'framer';

export function custom27_icon(props) {
  return (
    <svg height="100" width="100" viewBox="0 0 100 100" xmlns="http://www.w3.org/2000/svg" {...props}>
	<g fill={props.fill}>
		<path d="m24 63h52c1.1 0 2-0.9 2-2v-32c0-3.3-2.7-6-6-6h-44c-3.3 0-6 2.7-6 6v32c0 1.1 0.9 2 2 2z m4-32c0-1.1 0.9-2 2-2h40c1.1 0 2 0.9 2 2v24c0 1.1-0.9 2-2 2h-40c-1.1 0-2-0.9-2-2v-24z m52 38h-22c-1.1 0-2 0.9-2 2s-0.9 2-2 2h-8c-1.1 0-2-0.9-2-2s-0.9-2-2-2h-22c-1.1 0-2 0.9-2 2 0 3.3 2.7 6 6 6h52c3.3 0 6-2.7 6-6 0-1.1-0.9-2-2-2z"/>
	</g>
</svg>
  );
};

addPropertyControls(custom27_icon, {
  fill: {
    type: ControlType.Color,
    title: 'Fill',
    defaultValue: '#ffffff'
  }
});
  
