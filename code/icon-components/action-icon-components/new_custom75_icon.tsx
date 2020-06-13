
import * as React from 'react';
import { addPropertyControls, ControlType } from 'framer';

export function new_custom75_icon(props) {
  return (
    <svg height="52" width="52" viewBox="0 0 52 52" xmlns="http://www.w3.org/2000/svg" {...props}>
	<g fill={props.fill}>
		<path d="m26 2c-1.4 0-2.4 1-2.4 2.4v43.2c0 1.4 1 2.4 2.4 2.4 13.2 0 24-10.8 24-24s-10.8-24-24-24z m19 21.6h-6.3c-0.2-5.7-1.5-10.6-3.4-14.4 5.3 3 8.9 8.2 9.7 14.4z m-16.6 20.6v-15.8h5.5c-0.4 7.5-2.8 13.4-5.5 15.8z m0-20.6v-15.8c2.7 2.3 5.1 8.2 5.5 15.8h-5.5z m6.9 19.2c1.9-3.8 3.1-8.7 3.4-14.4h6.3c-0.8 6.2-4.4 11.4-9.7 14.4z m-22.5-24.9c0.6 0.5 1.6 0.4 2.2-0.2l4.4-5c0.6-0.6 0.6-1.6-0.1-2.2l-4.4-4.4c-0.6-0.6-1.4-0.6-2-0.2l-0.9 0.6c-6 4.3-10 11.4-10 19.5s4 15.2 10 19.5l0.9 0.6c0.6 0.4 1.4 0.3 2-0.2l4.4-4.4c0.6-0.6 0.6-1.6 0.1-2.2l-4.4-5c-0.6-0.6-1.5-0.7-2.2-0.2l-1.7 1.3c-1.8-2.7-2.7-5.9-2.7-9.4s1-6.6 2.7-9.4l1.7 1.3z"/>
	</g>
</svg>
  );
};

addPropertyControls(new_custom75_icon, {
  fill: {
    type: ControlType.Color,
    title: 'Fill',
    defaultValue: '#ffffff'
  }
});
  
