
import * as React from 'react';
import { addPropertyControls, ControlType } from 'framer';

export function advertising_icon(props) {
  return (
    <svg height="52" width="52" viewBox="0 0 52 52" xmlns="http://www.w3.org/2000/svg" {...props}>
	<g fill={props.fill}>
		<path d="m23 27.2h0.4c0.2-2.7 1.2-5.1 2.7-7-0.8-0.8-1.8-1.3-3.1-1.3-2.4 0-4.2 1.8-4.2 4.2 0 2.3 1.8 4.1 4.2 4.1z m1.2 8c0.5 0 1-0.1 1.2-0.1-0.8-1.3-1.4-2.7-1.7-4h-0.7c-4.5 0-8.4-3.6-8.4-8.4 0-4.5 3.6-8.4 8.4-8.4 2.5 0 4.9 1.1 6.4 2.9 1.2-0.7 2.5-1.1 3.9-1.3-2.3-3.3-6.1-5.4-10.4-5.4-7.2 0-12.6 5.7-12.6 12.6s5.7 12.6 12.9 12.3c0.4-0.1 0.7-0.1 1-0.2z m25.7 10.3v1.4c0 1.6-1.4 3-3 3h-24.1c-1.6 0-3-1.4-3-3v-1.4c0-3.6 4.3-5.9 8.3-7.7l0.4-0.2c0.3-0.1 0.6-0.1 0.9 0.1 1.6 1.1 3.5 1.6 5.4 1.6 1.9 0 3.8-0.6 5.4-1.6 0.3-0.2 0.6-0.2 0.9-0.1l0.4 0.2c4.2 1.8 8.4 4 8.4 7.7z m-15.1-25.7c4.2 0 7.5 3.7 7.5 8.3s-3.3 8.3-7.5 8.3-7.5-3.7-7.5-8.3 3.4-8.3 7.5-8.3z m-16.3 19.4c-6.9-2-12.2-8.5-12.2-16.1 0-9.3 7.5-16.8 16.8-16.8 6.9 0 13.1 4.1 15.6 10.2 2 0.8 3.8 2.1 5.1 3.8-1.5-10.5-10.2-18.2-20.8-18.2-11.7 0-20.9 9.2-20.9 20.9 0 9.2 5.8 17 14.2 19.7 0.4-1.4 1.2-2.5 2.2-3.5z"/>
	</g>
</svg>
  );
};

addPropertyControls(advertising_icon, {
  fill: {
    type: ControlType.Color,
    title: 'Fill',
    defaultValue: '#ffffff'
  }
});
  
