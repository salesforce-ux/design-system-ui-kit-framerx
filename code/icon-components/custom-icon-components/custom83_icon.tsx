
import * as React from 'react';
import { addPropertyControls, ControlType } from 'framer';

export function custom83_icon(props) {
  return (
    <svg height="100" width="100" viewBox="0 0 100 100" xmlns="http://www.w3.org/2000/svg" {...props}>
	<g fill={props.fill}>
		<path d="m74.6 39.3c0.4 0.4 1 0.4 1.4 0l1.4-1.4c3.4-3.4 3.5-8.6 0.2-11.9 0 0-4.3-4.4-4.4-4.4-3.4-2.8-8.1-1.5-10.8 1.2l-1.4 1.4c-0.4 0.4-0.4 1 0 1.4l13.6 13.7z m-18-9.5c-0.4-0.4-1-0.4-1.4 0l-27.5 27.3c-1.5 1.5-2.6 3.3-3.3 5.4l-4.2 13.5c-0.3 0.8-0.2 1.8 0.2 2.5 0.6 1 1.6 1.5 2.6 1.5 0.3 0 0.6 0 0.9-0.1 0 0 9.2-2.9 13.7-4.3 2-0.6 3.8-1.7 5.3-3.2l27.4-27.4c0.4-0.4 0.4-1 0-1.4l-13.7-13.8z m-20.8 40.1c-2.1 0.7-5.4 1.7-8.2 2.6l2.6-8.2c0.3-1.1 0.9-2 1.7-2.8l6.7 6.7c-0.8 0.8-1.8 1.4-2.8 1.7z"/>
	</g>
</svg>
  );
};

addPropertyControls(custom83_icon, {
  fill: {
    type: ControlType.Color,
    title: 'Fill',
    defaultValue: '#ffffff'
  }
});
  
