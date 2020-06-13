
import * as React from 'react';
import { addPropertyControls, ControlType } from 'framer';

export function custom26_icon(props) {
  return (
    <svg height="100" width="100" viewBox="0 0 100 100" xmlns="http://www.w3.org/2000/svg" {...props}>
	<g fill={props.fill}>
		<path d="m26 20c-3.3 0-6 2.7-6 6 0 1.8 0.8 3.4 2 4.5v45.5c0 2.2 1.8 4 4 4s4-1.8 4-4v-45.5c1.2-1.1 2-2.7 2-4.5 0-3.3-2.7-6-6-6z m52.5 10.8c-15.7 8.2-26.4-5.9-41.2-0.5-0.8 0.3-1.3 1-1.3 1.9v25.8c0 1.3 1.3 2.3 2.6 1.9 14.2-4.3 24.9 9.1 40.4 0.6 0.6-0.3 1-1 1-1.7v-27.1c0-0.8-0.8-1.3-1.5-0.9z"/>
	</g>
</svg>
  );
};

addPropertyControls(custom26_icon, {
  fill: {
    type: ControlType.Color,
    title: 'Fill',
    defaultValue: '#ffffff'
  }
});
  
