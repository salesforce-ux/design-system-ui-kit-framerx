
import * as React from 'react';
import { addPropertyControls, ControlType } from 'framer';

export function custom18_icon(props) {
  return (
    <svg height="100" width="100" viewBox="0 0 100 100" xmlns="http://www.w3.org/2000/svg" {...props}>
	<g fill={props.fill}>
		<path d="m60 36h10.6c0.8 0 1.4-0.6 1.4-1.4 0-0.4-0.1-0.7-0.4-1l-13.2-13.2c-0.3-0.3-0.6-0.4-1-0.4-0.8 0-1.4 0.6-1.4 1.4v10.6c0 2.2 1.8 4 4 4z m23.4 13.6l-1.2-1.2c-0.8-0.8-2-0.8-2.8 0l-15.4 15.5c-0.1 0.1 0 0.2 0 0.4v3.3c0 0.3 0 0.5 0.3 0.5h3.3c0.1 0 0.3-0.1 0.4-0.1l15.4-15.4c0.8-1 0.8-2.2 0-3z m-12.5 24.4h-9.1c-2.1 0-3.8-1.7-3.8-3.8v-7c0-1.1 0.3-2.1 1.1-2.8l12.3-12.4c0.4-0.4 0.6-0.9 0.6-1.4v-2.6c0-1.1-0.9-2-2-2h-14c-3.3 0-6-2.7-6-6v-14c0-1.1-0.9-2-2-2h-20c-3.3 0-6 2.7-6 6v48c0 3.3 2.7 6 6 6h38c2.9 0 5.4-2.1 5.9-4.8 0.1-0.6-0.4-1.2-1-1.2z m-40.9-36c0-1.1 0.9-2 2-2h8c1.1 0 2 0.9 2 2v2c0 1.1-0.9 2-2 2h-8c-1.1 0-2-0.9-2-2v-2z m20 26c0 1.1-0.9 2-2 2h-16c-1.1 0-2-0.9-2-2v-2c0-1.1 0.9-2 2-2h16c1.1 0 2 0.9 2 2v2z m4-12c0 1.1-0.9 2-2 2h-20c-1.1 0-2-0.9-2-2v-2c0-1.1 0.9-2 2-2h20c1.1 0 2 0.9 2 2v2z"/>
	</g>
</svg>
  );
};

addPropertyControls(custom18_icon, {
  fill: {
    type: ControlType.Color,
    title: 'Fill',
    defaultValue: '#ffffff'
  }
});
  
