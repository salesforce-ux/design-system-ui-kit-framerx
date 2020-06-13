
import * as React from 'react';
import { addPropertyControls, ControlType } from 'framer';

export function custom51_icon(props) {
  return (
    <svg height="100" width="100" viewBox="0 0 100 100" xmlns="http://www.w3.org/2000/svg" {...props}>
	<g fill={props.fill}>
		<path d="m40.5 25.6c2.5 1.7 5 5.8 6 8.9 0.2 0.7 0.8 1.2 1.5 1.3 0.7 0.2 1.3 0.2 2 0.2 1.1 0 2 0 2.9-0.4 2.6-0.9 4.8-2 6.7-3.9 3.1-3.1 4.2-7.5 3-11.2-3.7-1.1-8.1-0.1-11.2 3-0.9 0.9-1.6 1.9-2.2 3-1.6-2.5-3.5-4.7-5.7-6.1-1.5-0.9-3.4-0.4-4.3 1.1-0.6 1.5 0 3.2 1.3 4.1z m30.7 14.6c-10.3-5.8-12.5 2-21.2 2s-10.9-7.8-21.2-2c-10 5.7-7.1 24.1-3.1 31 3.6 6.1 10.1 12.4 23.4 6.4 0.5-0.2 1.2-0.2 1.7 0 13.3 6 19.9-0.3 23.4-6.4 4.1-6.9 7-25.4-3-31z"/>
	</g>
</svg>
  );
};

addPropertyControls(custom51_icon, {
  fill: {
    type: ControlType.Color,
    title: 'Fill',
    defaultValue: '#ffffff'
  }
});
  
