
import * as React from 'react';
import { addPropertyControls, ControlType } from 'framer';

export function unmuted_icon(props) {
  return (
    <svg height="52" width="52" viewBox="0 0 52 52" xmlns="http://www.w3.org/2000/svg" {...props}>
	<g fill={props.fill}>
		<path d="m41.5 18c-1.4 0-2.5 1-2.5 2.4v4c0 7-5.9 12.8-13.1 12.8s-13.1-5.8-13.1-12.8v-4c0-1.4-1.1-2.4-2.5-2.4s-2.3 1-2.3 2.4v4c0 8.9 6.8 16.2 15.5 17.4v3.4h-4.1c-1.4 0-2.5 1-2.5 2.4s1.1 2.4 2.5 2.4h13.1c1.4 0 2.5-1 2.5-2.4s-1.1-2.4-2.5-2.4h-4.1v-3.4c8.8-1.2 15.6-8.5 15.6-17.4v-4c0-1.4-1.1-2.4-2.5-2.4z m-15.5 14.4c4.4 0 8-3.6 8-8v-14.5c0-4.4-3.5-7.9-7.9-7.9h-0.2c-4.4 0-7.9 3.5-7.9 7.9v14.5c0 4.4 3.6 8 8 8z"/>
	</g>
</svg>
  );
};

addPropertyControls(unmuted_icon, {
  fill: {
    type: ControlType.Color,
    title: 'Fill',
    defaultValue: '#ffffff'
  }
});
  
