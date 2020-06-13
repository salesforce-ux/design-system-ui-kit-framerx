
import * as React from 'react';
import { addPropertyControls, ControlType } from 'framer';

export function custom79_icon(props) {
  return (
    <svg height="100" width="100" viewBox="0 0 100 100" xmlns="http://www.w3.org/2000/svg" {...props}>
	<g fill={props.fill}>
		<path d="m39 41c-3.9 0-7 3.1-7 7s3.1 7 7 7 7-3.1 7-7-3.1-7-7-7z m40 22h-19v-8h2c1.1 0 2-0.9 2-2v-6c0-1.1-0.9-2-2-2h-2.3c-1.6-10-10-17.8-20.4-18-11.8-0.2-21.5 9.5-21.3 21.3 0.2 11.6 9.9 20.7 21.5 20.7h36.5v2c0 1.1 0.9 2 2 2h2c1.1 0 2-0.9 2-2v-5c0-1.7-1.3-3-3-3z m-40-2c-7.2 0-13-5.8-13-13s5.8-13 13-13 13 5.8 13 13-5.8 13-13 13z"/>
	</g>
</svg>
  );
};

addPropertyControls(custom79_icon, {
  fill: {
    type: ControlType.Color,
    title: 'Fill',
    defaultValue: '#ffffff'
  }
});
  
