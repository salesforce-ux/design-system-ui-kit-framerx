
import * as React from 'react';
import { addPropertyControls, ControlType } from 'framer';

export function like_icon(props) {
  return (
    <svg height="52" width="52" viewBox="0 0 52 52" xmlns="http://www.w3.org/2000/svg" {...props}>
	<g fill={props.fill}>
		<path d="m10.5 21h-5c-0.8 0-1.5 0.7-1.5 1.5v23c0 0.8 0.7 1.5 1.5 1.5h2.5c2.2 0 4-1.8 4-4v-20.5c0-0.8-0.7-1.5-1.5-1.5z m33.5 1h-6c-2.2 0-4-1.8-4-4v-10c0-2.2-1.8-4-4-4h-2.5c-0.8 0-1.5 0.7-1.5 1.5v6c0 5.3-3.7 10.5-8.5 10.5-0.8 0-1.5 0.7-1.5 1.5v20c0 0.8 0.6 1.5 1.4 1.5 6.8 0.3 9.1 3 16.2 3 7.5 0 14.4-0.8 14.4-9.5v-12.5c0-2.2-1.8-4-4-4z"/>
	</g>
</svg>
  );
};

addPropertyControls(like_icon, {
  fill: {
    type: ControlType.Color,
    title: 'Fill',
    defaultValue: '#ffffff'
  }
});
  
