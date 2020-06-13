
import * as React from 'react';
import { addPropertyControls, ControlType } from 'framer';

export function new_custom30_icon(props) {
  return (
    <svg height="52" width="52" viewBox="0 0 52 52" xmlns="http://www.w3.org/2000/svg" {...props}>
	<g fill={props.fill}>
		<path d="m43.2 8.8c-4.4-4.4-10.3-6.8-16.4-6.8-1.4 0-2.4 1-2.4 2.4s1 2.4 2.4 2.4c4.9 0 9.5 1.9 13.1 5.4 3.4 3.5 5.4 8.2 5.4 13.1 0 1.4 1 2.4 2.4 2.4s2.4-1 2.4-2.4c-0.1-6.2-2.5-12.1-6.9-16.5z m-16.4 2.8c-1.4 0-2.4 1-2.4 2.4s1 2.4 2.4 2.4c2.3 0 4.6 0.9 6.3 2.6 1.7 1.7 2.6 3.8 2.6 6.3 0 1.4 1 2.4 2.4 2.4s2.4-1 2.4-2.4c0-3.6-1.4-7.1-4-9.6-2.7-2.6-6.1-4.1-9.7-4.1z m-3.5 23l2.1-5.6c1.4 0.6 3 0.2 4.2-0.9 1.6-1.6 1.6-4.1 0-5.7-1.6-1.6-4.1-1.6-5.7 0-1.2 1.2-1.4 3-0.8 4.5l-5.2 2.3-9.4-9.4c-0.6-0.6-1.8-0.6-2.3 0.1-6 7.2-5.6 18 1.2 24.7 6.7 6.7 17.5 7.1 24.7 1.2 0.7-0.6 0.7-1.7 0.1-2.3l-8.9-8.9z"/>
	</g>
</svg>
  );
};

addPropertyControls(new_custom30_icon, {
  fill: {
    type: ControlType.Color,
    title: 'Fill',
    defaultValue: '#ffffff'
  }
});
  
