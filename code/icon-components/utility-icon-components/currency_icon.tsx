
import * as React from 'react';
import { addPropertyControls, ControlType } from 'framer';

export function currency_icon(props) {
  return (
    <svg height="52" width="52" viewBox="0 0 52 52" xmlns="http://www.w3.org/2000/svg" {...props}>
	<g fill={props.fill}>
		<path d="m45.1 10.9h-38.2c-2.4 0-4.4 2-4.4 4.4v21.3c0 2.4 2 4.4 4.4 4.4h38.2c2.4 0 4.4-2 4.4-4.4v-21.2c0-2.5-2-4.5-4.4-4.5z m-33.1 25.7c0-2.9-2.3-5.1-5.1-5.1v-11c2.9 0 5.1-2.3 5.1-5.1h28c0 2.9 2.3 5.1 5.1 5.1v11c-2.9 0-5.1 2.3-5.1 5.1h-28z"/>
		<circle cx="26" cy="25.6" r="7.3"/>
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
  
