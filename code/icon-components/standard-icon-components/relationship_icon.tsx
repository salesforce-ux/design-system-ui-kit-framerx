
import * as React from 'react';
import { addPropertyControls, ControlType } from 'framer';

export function relationship_icon(props) {
  return (
    <svg height="100" width="100" viewBox="0 0 100 100" xmlns="http://www.w3.org/2000/svg" {...props}>
	<g fill={props.fill}>
		<path d="m71.3 70h-3.8v-7.5h3.8c0.7 0 1.2-0.5 1.2-1.2v-32.5c0-0.8-0.5-1.3-1.2-1.3h-32.5c-0.8 0-1.3 0.5-1.3 1.3v3.7h-7.5v-3.7c0-4.9 3.9-8.8 8.8-8.8h32.5c4.8 0 8.7 3.9 8.7 8.8v32.5c0 4.8-3.9 8.7-8.7 8.7z m-13.8-32.5h-32.5c-2.7 0-5 2.3-5 5v32.5c0 2.8 2.3 5 5 5h32.5c2.8 0 5-2.2 5-5v-32.5c0-2.7-2.2-5-5-5z"/>
	</g>
</svg>
  );
};

addPropertyControls(relationship_icon, {
  fill: {
    type: ControlType.Color,
    title: 'Fill',
    defaultValue: '#ffffff'
  }
});
  
