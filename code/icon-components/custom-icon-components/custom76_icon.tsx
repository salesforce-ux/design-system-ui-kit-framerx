
import * as React from 'react';
import { addPropertyControls, ControlType } from 'framer';

export function custom76_icon(props) {
  return (
    <svg height="100" width="100" viewBox="0 0 100 100" xmlns="http://www.w3.org/2000/svg" {...props}>
	<g fill={props.fill}>
		<path d="m52.9 55.3c-0.3-0.8-1.1-1.4-2-1.3h-0.9c-11 0-20-9-20-20v-0.5c0-1-1.3-1.4-1.8-0.6-0.7 1-1.2 2.2-1.6 3.5-1.7 5.7 0.5 11.9 5.3 15.4 2.2 1.6 4.5 2.3 6.9 2.6l0.7 1.9c0.1 0.3 0.3 0.5 0.5 0.6l3 1.3c0.5 0.2 0.7 0.8 0.5 1.3l-1 2.9c-0.2 0.5 0.1 1 0.5 1.2l1.6 0.7c0.5 0.2 0.7 0.8 0.5 1.3l-0.9 3.1c-0.1 0.5 0.1 1 0.5 1.2l2.3 1c0.5 0.2 0.7 0.8 0.5 1.3l-0.8 3.1c-0.1 0.5 0.1 1 0.6 1.2l6.8 3.1c0.5 0.2 1.1 0 1.3-0.5l3-6.7c0.2-0.5 0.2-1 0.1-1.5l-5.6-15.6z m26.5-1l-15.9-16.6c0.7-2.5 0.7-5.2-0.3-8.1-1.9-5.3-6.8-9.2-12.5-9.5-8.6-0.4-15.6 6.9-14.7 15.6 0.7 6 5.2 10.9 11.1 12.1 2.6 0.5 5.1 0.3 7.4-0.5l1.4 1.5c0.2 0.2 0.4 0.3 0.7 0.3h3.4c0.6 0 1 0.4 1 1l0.3 3.1c0 0.5 0.5 0.9 1 0.9h1.7c0.6 0 1 0.4 1 1l0.5 3.2c0.1 0.5 0.5 0.8 1 0.8h2.5c0.6 0 1 0.4 1 1l0.5 3.2c0.1 0.5 0.5 0.8 1 0.8h7.5c0.6 0 1-0.4 1-1v-7.3c0-0.7-0.2-1.2-0.6-1.5z m-31.4-17.3c-2.8 0-5-2.2-5-5s2.2-5 5-5 5 2.2 5 5c0 2.7-2.2 5-5 5z"/>
	</g>
</svg>
  );
};

addPropertyControls(custom76_icon, {
  fill: {
    type: ControlType.Color,
    title: 'Fill',
    defaultValue: '#ffffff'
  }
});
  
