
import * as React from 'react';
import { addPropertyControls, ControlType } from 'framer';

export function custom88_icon(props) {
  return (
    <svg height="100" width="100" viewBox="0 0 100 100" xmlns="http://www.w3.org/2000/svg" {...props}>
	<g fill={props.fill}>
		<path d="m78.1 70h-56.2c-1 0-1.9 0.8-1.9 1.8v0.1c0 4.5 5.6 8.1 10 8.1h40c4.4 0 10-3.6 10-8.1v-0.1c0-1-0.9-1.8-1.9-1.8z m-55.1-6h18c1.1 0 2-1.1 2-2.2v-34.4c0-0.5-0.7-0.7-0.9-0.2l-20 35.2c-0.3 0.7 0.1 1.6 0.9 1.6z m28 0h25c1.2 0 2.1-1.1 2-2.3-0.9-7.2-2.1-29.6-27.6-41.6-0.6-0.3-1.4 0.1-1.4 0.9v40.8c0 1.1 0.9 2.2 2 2.2z"/>
	</g>
</svg>
  );
};

addPropertyControls(custom88_icon, {
  fill: {
    type: ControlType.Color,
    title: 'Fill',
    defaultValue: '#ffffff'
  }
});
  
