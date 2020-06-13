
import * as React from 'react';
import { addPropertyControls, ControlType } from 'framer';

export function custom40_icon(props) {
  return (
    <svg height="100" width="100" viewBox="0 0 100 100" xmlns="http://www.w3.org/2000/svg" {...props}>
	<g fill={props.fill}>
		<path d="m74 28h-48c-3.3 0-6 2.7-6 6v34c0 3.3 2.7 6 6 6h48c3.3 0 6-2.7 6-6v-34c0-3.3-2.7-6-6-6z m0 6v6h-48v-6h48z m-48 34v-18h48v18h-48z m17.1-13c-1.4 0-2.6 0.7-3.3 1.8-0.1 0.2-0.4 0.2-0.5 0-0.7-1.1-1.9-1.8-3.3-1.8-2.2 0-4 1.8-4 4s1.8 4 4 4c1.4 0 2.6-0.7 3.3-1.8 0.1-0.2 0.4-0.2 0.5 0 0.7 1.1 1.9 1.8 3.3 1.8h0.1c2.1 0 3.9-1.7 3.9-3.9v-0.2c-0.1-2.2-1.8-3.9-4-3.9z m22.9 1h-12c-1.1 0-2 0.9-2 2v2c0 1.1 0.9 2 2 2h12c1.1 0 2-0.9 2-2v-2c0-1.1-0.9-2-2-2z"/>
	</g>
</svg>
  );
};

addPropertyControls(custom40_icon, {
  fill: {
    type: ControlType.Color,
    title: 'Fill',
    defaultValue: '#ffffff'
  }
});
  
