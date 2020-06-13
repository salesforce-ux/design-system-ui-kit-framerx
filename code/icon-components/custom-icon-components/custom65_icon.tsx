
import * as React from 'react';
import { addPropertyControls, ControlType } from 'framer';

export function custom65_icon(props) {
  return (
    <svg height="100" width="100" viewBox="0 0 100 100" xmlns="http://www.w3.org/2000/svg" {...props}>
	<g fill={props.fill}>
		<path d="m72.1 67h-50.2c-1 0-1.9 0.9-1.9 1.9v0.1c0 3.3 2.7 6 6 6h42c3.3 0 6-2.7 6-6v-0.1c0-1-0.9-1.9-1.9-1.9z m-2.1-40h-47.9c-1 0-1.8 0.9-1.9 2-0.3 2.7-0.3 7.5 0.1 10.4 1.3 9.3 6.3 17.2 13.2 21.4 0.3 0.2 0.7 0.3 1 0.3h20.9c0.4 0 0.7-0.1 1-0.3 3.9-2.4 7.3-6 9.6-10.4 1.2 0.4 2.5 0.6 3.9 0.6 6.6 0 12-5.4 12-12s-5.3-12-11.9-12z m0 18c-0.5 0-1-0.1-1.5-0.2 1-3.2 1.5-6.6 1.5-10.2v-1.6c3.3 0 6 2.7 6 6s-2.7 6-6 6z"/>
	</g>
</svg>
  );
};

addPropertyControls(custom65_icon, {
  fill: {
    type: ControlType.Color,
    title: 'Fill',
    defaultValue: '#ffffff'
  }
});
  
