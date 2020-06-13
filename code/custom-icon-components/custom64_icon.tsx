
import * as React from 'react';
import { addPropertyControls, ControlType } from 'framer';

export function custom64_icon(props) {
  return (
    <svg height="100" width="100" viewBox="0 0 100 100" xmlns="http://www.w3.org/2000/svg" {...props}>
	<g fill={props.fill}>
		<path d="m50 20c-16.5 0-30 13.5-30 30s13.5 30 30 30 30-13.5 30-30-13.5-30-30-30z m0 52c-12.1 0-22-9.9-22-22s9.9-22 22-22 22 9.9 22 22-9.9 22-22 22z m11.6-34.9l-16.6 6c-0.9 0.3-1.6 1-1.9 1.9l-6 16.6c-0.3 0.8 0.5 1.6 1.3 1.3l16.6-6c0.9-0.3 1.6-1 1.9-1.9l6-16.6c0.3-0.8-0.5-1.6-1.3-1.3z m-11.6 16.9c-2.2 0-4-1.8-4-4s1.8-4 4-4 4 1.8 4 4-1.8 4-4 4z"/>
	</g>
</svg>
  );
};

addPropertyControls(custom64_icon, {
  fill: {
    type: ControlType.Color,
    title: 'Fill',
    defaultValue: '#ffffff'
  }
});
  
