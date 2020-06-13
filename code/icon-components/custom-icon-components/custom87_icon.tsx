
import * as React from 'react';
import { addPropertyControls, ControlType } from 'framer';

export function custom87_icon(props) {
  return (
    <svg height="100" width="100" viewBox="0 0 100 100" xmlns="http://www.w3.org/2000/svg" {...props}>
	<g fill={props.fill}>
		<path d="m75 20h-50c-1.7 0-3 1.3-3 3v48c0 1.7 1.3 3 3 3h1v3c0 1.7 1.3 3 3 3h2c1.7 0 3-1.3 3-3v-3h32v3c0 1.7 1.3 3 3 3h2c1.7 0 3-1.3 3-3v-3h1c1.7 0 3-1.3 3-3v-48c0-1.7-1.3-3-3-3z m-44 48c-1.7 0-3-1.3-3-3v-36c0-1.7 1.3-3 3-3h38c1.7 0 3 1.3 3 3v36c0 1.7-1.3 3-3 3h-38z m33-36h-28c-1.1 0-2 0.9-2 2v26c0 1.1 0.9 2 2 2h28c1.1 0 2-0.9 2-2v-26c0-1.1-0.9-2-2-2z m-4.7 18h-8.3c-1.1 2-3.4 4-6.2 4-3.8 0-6.8-3.2-6.8-7s3-7 6.8-7c2.8 0 5.2 2 6.2 4h8.2c1.5 0 2.7 1.5 2.7 3s-1.1 3-2.6 3z"/>
	</g>
</svg>
  );
};

addPropertyControls(custom87_icon, {
  fill: {
    type: ControlType.Color,
    title: 'Fill',
    defaultValue: '#ffffff'
  }
});
  
