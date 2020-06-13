
import * as React from 'react';
import { addPropertyControls, ControlType } from 'framer';

export function new_custom3_icon(props) {
  return (
    <svg height="52" width="52" viewBox="0 0 52 52" xmlns="http://www.w3.org/2000/svg" {...props}>
	<g fill={props.fill}>
		<path d="m26 16.4c-5.3 0-9.6 4.3-9.6 9.6s4.3 9.6 9.6 9.6 9.6-4.3 9.6-9.6-4.3-9.6-9.6-9.6z m24 9.6c0-2.8-6.7-4.2-7.8-6.7-1-2.6 2.7-8.3 0.8-10.3s-7.7 1.8-10.2 0.7c-2.6-1-4-7.7-6.8-7.7s-4.2 6.7-6.7 7.8c-2.6 1-8.3-2.7-10.3-0.8s1.8 7.7 0.7 10.2c-1 2.6-7.7 4-7.7 6.8s6.7 4.2 7.8 6.7c1 2.6-2.7 8.3-0.8 10.3 1.9 1.9 7.7-1.8 10.2-0.7 2.5 1 3.9 7.8 6.7 7.8s4.2-6.7 6.7-7.8c2.6-1 8.3 2.6 10.2 0.7 1.9-1.9-1.8-7.7-0.7-10.2 1.2-2.6 7.9-4 7.9-6.8z m-24 14.4c-7.9 0-14.4-6.5-14.4-14.4s6.5-14.4 14.4-14.4 14.4 6.5 14.4 14.4-6.5 14.4-14.4 14.4z"/>
	</g>
</svg>
  );
};

addPropertyControls(new_custom3_icon, {
  fill: {
    type: ControlType.Color,
    title: 'Fill',
    defaultValue: '#ffffff'
  }
});
  
