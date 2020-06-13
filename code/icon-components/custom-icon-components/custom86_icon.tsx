
import * as React from 'react';
import { addPropertyControls, ControlType } from 'framer';

export function custom86_icon(props) {
  return (
    <svg height="100" width="100" viewBox="0 0 100 100" xmlns="http://www.w3.org/2000/svg" {...props}>
	<g fill={props.fill}>
		<path d="m38 30h4c0.6 0 1-0.4 1-1v-3h14v3c0 0.6 0.4 1 1 1h4c0.6 0 1-0.4 1-1v-3c0-3.3-2.7-6-6-6h-14c-3.3 0-6 2.7-6 6v3c0 0.6 0.4 1 1 1z m36 6h-48c-3.3 0-6 2.7-6 6v32c0 3.3 2.7 6 6 6h48c3.3 0 6-2.7 6-6v-32c0-3.3-2.7-6-6-6z m-24 36c-7.7 0-14-6.3-14-14s6.3-14 14-14 14 6.3 14 14-6.3 14-14 14z m6-17h-3v-3c0-1.1-0.9-2-2-2h-2c-1.1 0-2 0.9-2 2v3h-3c-1.1 0-2 0.9-2 2v2c0 1.1 0.9 2 2 2h3v3c0 1.1 0.9 2 2 2h2c1.1 0 2-0.9 2-2v-3h3c1.1 0 2-0.9 2-2v-2c0-1.1-0.9-2-2-2z"/>
	</g>
</svg>
  );
};

addPropertyControls(custom86_icon, {
  fill: {
    type: ControlType.Color,
    title: 'Fill',
    defaultValue: '#ffffff'
  }
});
  
