
import * as React from 'react';
import { addPropertyControls, ControlType } from 'framer';

export function custom49_icon(props) {
  return (
    <svg height="100" width="100" viewBox="0 0 100 100" xmlns="http://www.w3.org/2000/svg" {...props}>
	<g fill={props.fill}>
		<path d="m50 41c-5 0-9 4-9 9s4 9 9 9 9-4 9-9-4-9-9-9z m0 14c-2.8 0-5-2.2-5-5s2.2-5 5-5 5 2.2 5 5-2.2 5-5 5z m0-35c-16.6 0-30 13.4-30 30s13.4 30 30 30 30-13.4 30-30-13.4-30-30-30z m0 52.9c0 1.2-1 2.1-2.2 2-12.1-1-21.7-10.7-22.8-22.8 0-1.1 0.9-2.1 2.1-2.1h2c1 0 1.9 0.8 2 1.8 0.9 9 8.1 16.2 17.1 17.1 1 0.1 1.8 1 1.8 2v2z m0-7.9c-8.3 0-15-6.7-15-15s6.7-15 15-15 15 6.7 15 15-6.7 15-15 15z m22.9-15h-2c-1 0-1.9-0.8-2-1.8-0.9-9-8.1-16.2-17.1-17.1-1-0.1-1.8-1-1.8-2v-2c0-1.2 1-2.1 2.2-2 12.1 1 21.7 10.7 22.8 22.8 0 1.1-0.9 2.1-2.1 2.1z"/>
	</g>
</svg>
  );
};

addPropertyControls(custom49_icon, {
  fill: {
    type: ControlType.Color,
    title: 'Fill',
    defaultValue: '#ffffff'
  }
});
  
