
import * as React from 'react';
import { addPropertyControls, ControlType } from 'framer';

export function custom41_icon(props) {
  return (
    <svg height="100" width="100" viewBox="0 0 100 100" xmlns="http://www.w3.org/2000/svg" {...props}>
	<g fill={props.fill}>
		<path d="m76 29h-52c-3.3 0-6 2.7-6 6v29c0 3.3 2.7 6 6 6h52c3.3 0 6-2.7 6-6v-29c0-3.3-2.7-6-6-6z m-45 35c0-3.9-3.1-7-7-7v-15c3.9 0 7-3.1 7-7h38c0 3.9 3.1 7 7 7v15c-3.9 0-7 3.1-7 7h-38z"/>
		<circle cx="50" cy="49" r="10"/>
	</g>
</svg>
  );
};

addPropertyControls(custom41_icon, {
  fill: {
    type: ControlType.Color,
    title: 'Fill',
    defaultValue: '#ffffff'
  }
});
  
