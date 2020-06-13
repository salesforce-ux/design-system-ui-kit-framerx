
import * as React from 'react';
import { addPropertyControls, ControlType } from 'framer';

export function custom35_icon(props) {
  return (
    <svg height="100" width="100" viewBox="0 0 100 100" xmlns="http://www.w3.org/2000/svg" {...props}>
	<g fill={props.fill}>
		<path d="m69 40c-1.7 0-3 1.3-3 3v5c0 8.8-7.2 16-16 16s-16-7.2-16-16v-5c0-1.7-1.3-3-3-3s-3 1.3-3 3v5c0 11.1 8.3 20.3 19 21.8v4.2h-5c-1.7 0-3 1.3-3 3s1.3 3 3 3h16c1.7 0 3-1.3 3-3s-1.3-3-3-3h-5v-4.2c10.7-1.5 19-10.7 19-21.8v-5c0-1.7-1.3-3-3-3z m-19 18c5.5 0 10-4.5 10-10v-18.1c0-5.5-4.4-9.9-9.9-9.9h-0.2c-5.5 0-9.9 4.4-9.9 9.9v18.1c0 5.5 4.5 10 10 10z"/>
	</g>
</svg>
  );
};

addPropertyControls(custom35_icon, {
  fill: {
    type: ControlType.Color,
    title: 'Fill',
    defaultValue: '#ffffff'
  }
});
  
