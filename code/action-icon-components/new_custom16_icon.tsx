
import * as React from 'react';
import { addPropertyControls, ControlType } from 'framer';

export function new_custom16_icon(props) {
  return (
    <svg height="52" width="52" viewBox="0 0 52 52" xmlns="http://www.w3.org/2000/svg" {...props}>
	<g fill={props.fill}>
		<path d="m43.3 42h-0.8v-17.6c0-0.9-0.7-1.6-1.6-1.6h-1.6c-0.9 0-1.6 0.7-1.6 1.6v17.6h-4.7v-17.6c0-0.9-0.7-1.6-1.6-1.6h-1.6c-0.9 0-1.6 0.7-1.6 1.6v17.6h-4.7v-17.6c0-0.9-0.7-1.6-1.6-1.6h-1.6c-0.9 0-1.6 0.7-1.6 1.6v17.6h-4.7v-17.6c0-0.9-0.7-1.6-1.6-1.6h-1.6c-0.9 0-1.6 0.7-1.6 1.6v17.6h-0.5c-2.6 0-4.7 2.2-4.7 4.8v1.6c0 0.9 0.7 1.6 1.6 1.6h40.9c0.9 0 1.6-0.7 1.6-1.6v-1.6c-0.1-2.6-2.2-4.8-4.8-4.8z m3.9-28.5l-19.4-10.9c-0.5-0.4-1.2-0.6-1.8-0.6-0.6 0-1.3 0.2-1.8 0.6l-19.4 10.9c-0.5 0.3-0.8 0.8-0.8 1.4v1.5c0 0.9 0.7 1.6 1.6 1.6h40.9c0.9 0 1.6-0.7 1.6-1.6v-1.4c-0.1-0.6-0.4-1.2-0.9-1.5z m-21.2 1.3c-2.2 0-3.9-1.8-3.9-4s1.7-4 3.9-4 3.9 1.8 3.9 4-1.7 4-3.9 4z"/>
	</g>
</svg>
  );
};

addPropertyControls(new_custom16_icon, {
  fill: {
    type: ControlType.Color,
    title: 'Fill',
    defaultValue: '#ffffff'
  }
});
  
