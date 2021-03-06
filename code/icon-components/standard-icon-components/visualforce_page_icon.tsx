
import * as React from 'react';
import { addPropertyControls, ControlType } from 'framer';

export function visualforce_page_icon(props) {
  return (
    <svg height="100" width="100" viewBox="0 0 100 100" xmlns="http://www.w3.org/2000/svg" {...props}>
	<g fill={props.fill}>
		<path d="m55.4 53.6c-0.6 0-1.2-0.5-1.2-1.2v-7.3c0-0.6 0.5-1.2 1.2-1.2h7.5c0.6 0 1.2 0.5 1.2 1.2v7.3c0 0.6-0.5 1.2-1.2 1.2h-7.5z m3.2 4.3l-4.3 4.7c-0.3 0.3-0.3 0.7 0 1l4.3 4.7c0.3 0.3 0.8 0.3 1.1 0l4.3-4.7c0.3-0.3 0.3-0.7 0-1l-4.3-4.7c-0.3-0.3-0.8-0.3-1.1 0z"/>
		<path d="m36.4 45.6l3.8-2.2c0.3-0.2 0.8-0.2 1.1 0l3.8 2.2c0.3 0.2 0.6 0.6 0.6 1v4.3c0 0.4-0.2 0.8-0.6 1l-3.8 2.2c-0.3 0.2-0.8 0.2-1.1 0l-3.8-2.2c-0.3-0.2-0.6-0.6-0.6-1v-4.3c0-0.4 0.2-0.8 0.6-1z m37.4-25.6h-47.6c-3.4 0-6.2 2.8-6.2 6.2v47.6c0 3.4 2.8 6.2 6.2 6.2h47.6c3.4 0 6.2-2.8 6.2-6.2v-47.6c0-3.4-2.8-6.2-6.2-6.2z m0 51.7c0 1.2-0.9 2.1-2.1 2.1h-43.4c-1.1 0-2.1-0.9-2.1-2.1v-33.5h47.6v33.5z m0-39.5h-47.6v-3.9c0-1.2 0.9-2.1 2.1-2.1h43.4c1.1 0 2.1 0.9 2.1 2.1v3.9z"/>
		<circle cx="40.7" cy="63" r="4.9"/>
	</g>
</svg>
  );
};

addPropertyControls(visualforce_page_icon, {
  fill: {
    type: ControlType.Color,
    title: 'Fill',
    defaultValue: '#ffffff'
  }
});
  
