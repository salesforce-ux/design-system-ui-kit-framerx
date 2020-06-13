
import * as React from 'react';
import { addPropertyControls, ControlType } from 'framer';

export function custom84_icon(props) {
  return (
    <svg height="100" width="100" viewBox="0 0 100 100" xmlns="http://www.w3.org/2000/svg" {...props}>
	<g fill={props.fill}>
		<path d="m75 64h-50c-1.7 0-3 1.3-3 3s1.3 3 3 3h4l1.7 8.5c0.2 0.9 1 1.5 1.9 1.5h32.9c0.9 0 1.7-0.6 1.9-1.5l1.6-8.5h6c1.7 0 3-1.3 3-3s-1.3-3-3-3z m-42-6h14v-5.6c-1.2-0.7-2-2-2-3.4 0-2.2 1.8-4 4-4s4 1.8 4 4c0 1.5-0.8 2.8-2 3.4v5.6h14c1.1 0 2-0.9 2-2v-3c0-6.1-5.8-8.2-10.4-10.1-3.1-1.3-3.6-2.5-3.6-3.7 0-1.3 0.9-2.5 1.9-3.4 1.8-1.6 2.9-3.9 2.9-6.6 0-4.9-3.2-9.2-8.8-9.2-5.6 0-8.8 4.3-8.8 9.2 0 2.7 1 4.9 2.9 6.6 1 0.9 1.9 2.1 1.9 3.4 0 1.3-0.5 2.4-3.6 3.7-4.6 1.9-10.4 4.3-10.4 10.1v3c0 1.1 0.9 2 2 2z"/>
	</g>
</svg>
  );
};

addPropertyControls(custom84_icon, {
  fill: {
    type: ControlType.Color,
    title: 'Fill',
    defaultValue: '#ffffff'
  }
});
  
