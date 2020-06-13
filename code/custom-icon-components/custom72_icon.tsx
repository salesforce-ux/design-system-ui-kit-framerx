
import * as React from 'react';
import { addPropertyControls, ControlType } from 'framer';

export function custom72_icon(props) {
  return (
    <svg height="100" width="100" viewBox="0 0 100 100" xmlns="http://www.w3.org/2000/svg" {...props}>
	<g fill={props.fill}>
		<path d="m77 20h-54c-1.7 0-3 1.3-3 3s1.3 3 3 3h24v6.2c-10.8 1.4-19 10.6-19 21.7v6.9c0 7.3 5.8 13.2 13.2 13.2h17.7c7.3 0 13.1-5.9 13.1-13.3v-6.9c0-11.1-8.2-20.3-19-21.7v-6.1h24c1.7 0 3-1.3 3-3s-1.3-3-3-3z m-13 33.8c0 0.1 0 0 0 0 0 2.9-2.3 5.2-5.2 5.2h-17.6c-2.9 0-5.1-2.3-5.2-5.2v0.1-0.1 0.1c0.1-7.7 6.2-13.9 13.8-13.9h0.4c7.6 0 13.7 6.2 13.8 13.8z"/>
		<circle cx="26" cy="76" r="4"/>
		<circle cx="74" cy="76" r="4"/>
	</g>
</svg>
  );
};

addPropertyControls(custom72_icon, {
  fill: {
    type: ControlType.Color,
    title: 'Fill',
    defaultValue: '#ffffff'
  }
});
  
