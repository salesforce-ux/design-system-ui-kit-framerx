
import * as React from 'react';
import { addPropertyControls, ControlType } from 'framer';

export function adduser_icon(props) {
  return (
    <svg height="52" width="52" viewBox="0 0 52 52" xmlns="http://www.w3.org/2000/svg" {...props}>
	<g fill={props.fill}>
		<path d="m21.9 37c0-2.7 0.9-5.8 2.3-8.2 1.7-3 3.6-4.2 5.1-6.4 2.5-3.7 3-9 1.4-13-1.6-4.1-5.4-6.5-9.8-6.4s-8 2.8-9.4 6.9c-1.6 4.5-0.9 9.9 2.7 13.3 1.5 1.4 2.9 3.6 2.1 5.7-0.7 2-3.1 2.9-4.8 3.7-3.9 1.7-8.6 4.1-9.4 8.7-0.8 3.8 1.8 7.7 5.9 7.7h17c0.8 0 1.3-1 0.8-1.6-2.5-2.9-3.9-6.6-3.9-10.4z m16-12c-6.6 0-12 5.4-12 12s5.4 12 12 12 12-5.4 12-12-5.4-12-12-12z m6.1 13c0 0.6-0.5 1-1.1 1h-2.9v3c0 0.6-0.5 1-1.1 1h-2c-0.6 0-0.9-0.4-0.9-1v-3h-3.1c-0.6 0-0.9-0.4-0.9-1v-2c0-0.6 0.3-1 0.9-1h3.1v-3c0-0.6 0.3-1 0.9-1h2c0.6 0 1.1 0.4 1.1 1v3h2.9c0.6 0 1.1 0.4 1.1 1v2z"/>
	</g>
</svg>
  );
};

addPropertyControls(adduser_icon, {
  fill: {
    type: ControlType.Color,
    title: 'Fill',
    defaultValue: '#ffffff'
  }
});
  
