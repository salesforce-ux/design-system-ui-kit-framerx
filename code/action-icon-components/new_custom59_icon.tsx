
import * as React from 'react';
import { addPropertyControls, ControlType } from 'framer';

export function new_custom59_icon(props) {
  return (
    <svg height="52" width="52" viewBox="0 0 52 52" xmlns="http://www.w3.org/2000/svg" {...props}>
	<g fill={props.fill}>
		<path d="m39.7 10.8c0.8 0 1.3-0.6 1.3-1.4 0-0.6-0.3-1.1-0.9-1.4-1-0.6-2.6-3.3-3.2-5-0.2-0.6-0.8-1-1.4-1h-19.2c-0.6 0-1.3 0.4-1.4 1-0.5 1.6-2.1 4.4-3.1 5-0.5 0.3-0.8 0.8-0.8 1.4 0 0.8 0.6 1.4 1.3 1.4h27.4z m-28.7 34.3c0 2.7 2.1 4.9 4.7 4.9h20.5c2.6 0 4.7-2.2 4.7-4.8v-0.1c0-0.9-0.7-1.5-1.5-1.5h-27c-0.7 0-1.4 0.7-1.4 1.5z m30-7.9v-20c0-0.9-0.7-1.6-1.6-1.6h-26.8c-0.9 0-1.6 0.7-1.6 1.6v20c0 0.9 0.7 1.6 1.6 1.6h26.8c0.9 0 1.6-0.7 1.6-1.6z"/>
	</g>
</svg>
  );
};

addPropertyControls(new_custom59_icon, {
  fill: {
    type: ControlType.Color,
    title: 'Fill',
    defaultValue: '#ffffff'
  }
});
  
