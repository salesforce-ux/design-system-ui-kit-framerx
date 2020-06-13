
import * as React from 'react';
import { addPropertyControls, ControlType } from 'framer';

export function print_icon(props) {
  return (
    <svg height="52" width="52" viewBox="0 0 52 52" xmlns="http://www.w3.org/2000/svg" {...props}>
	<g fill={props.fill}>
		<path d="m46.5 17.4h-41c-2.2 0-4 1.8-4 4v14c0 2.2 1.8 4 4 4h5.9v5.8c0 2.2 1.8 4 4 4h21.3c2.2 0 4-1.8 4-4v-5.8h5.9c2.2 0 4-1.8 4-4v-14c-0.1-2.2-1.9-4-4.1-4z m-38.2 10.3c-1.7 0-3-1.3-3-3s1.3-3 3-3 3 1.3 3 3-1.3 3-3 3z m27.6 15.4c0 0.8-0.7 1.5-1.5 1.5h-17c-0.8 0-1.5-0.7-1.5-1.5v-9.8c0-0.8 0.7-1.5 1.5-1.5h17c0.8 0 1.5 0.7 1.5 1.5v9.8z m4.6-32c0 0.8-0.7 1.5-1.5 1.5h-26.2c-0.8 0-1.5-0.7-1.5-1.5v-6.8c0-0.8 0.7-1.5 1.5-1.5h26.2c0.8 0 1.5 0.7 1.5 1.5v6.8z"/>
	</g>
</svg>
  );
};

addPropertyControls(print_icon, {
  fill: {
    type: ControlType.Color,
    title: 'Fill',
    defaultValue: '#ffffff'
  }
});
  
