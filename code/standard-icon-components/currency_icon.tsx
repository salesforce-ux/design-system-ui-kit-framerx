
import * as React from 'react';
import { addPropertyControls, ControlType } from 'framer';

export function currency_icon(props) {
  return (
    <svg height="100" width="100" viewBox="0 0 100 100" xmlns="http://www.w3.org/2000/svg" {...props}>
	<g fill={props.fill}>
		<path d="m74.4 30.8h-48.8c-3.1 0-5.6 2.5-5.6 5.6v27.2c0 3.1 2.5 5.6 5.6 5.6h48.8c3.1 0 5.6-2.5 5.6-5.6v-27.2c0-3.1-2.5-5.6-5.6-5.6z m-42.2 32.8c0-3.7-2.9-6.6-6.6-6.6v-14c3.7 0 6.6-2.9 6.6-6.6h35.6c0 3.7 2.9 6.6 6.6 6.6v14c-3.7 0-6.6 2.9-6.6 6.6h-35.6z"/>
		<circle cx="50" cy="49.5" r="9.4"/>
	</g>
</svg>
  );
};

addPropertyControls(currency_icon, {
  fill: {
    type: ControlType.Color,
    title: 'Fill',
    defaultValue: '#ffffff'
  }
});
  
