
import * as React from 'react';
import { addPropertyControls, ControlType } from 'framer';

export function planogram_icon(props) {
  return (
    <svg height="100" width="100" viewBox="0 0 100 100" xmlns="http://www.w3.org/2000/svg" {...props}>
	<title/>
	<g fill={props.fill}>
		<path d="m77.4 71.5h-3.3v-17.9c0-0.9-0.8-1.7-1.7-1.7h-18.7c-0.9 0-1.7 0.8-1.7 1.7v17.8h-5v-17.8c0-0.9-0.8-1.7-1.7-1.7h-18.7c-0.9 0-1.7 0.8-1.7 1.7v17.8h-3.3c-1.1 0-2 0.9-2 2v4c0 1.1 0.9 2 2 2h55.7c1.1 0 2-0.9 2-2v-4c0.1-1.1-0.8-1.9-1.9-1.9z m-20.9-15h13v4.5h-13v-4.5z m-27.1 0h13v4.5h-13v-4.5z m48-17.5h-3.3v-17.9c0-0.9-0.8-1.7-1.7-1.7h-18.7c-0.9 0-1.7 0.8-1.7 1.7v17.9h-5v-17.9c0-0.9-0.8-1.7-1.7-1.7h-18.7c-0.9 0-1.7 0.8-1.7 1.7v17.9h-3.3c-1.1 0-2 1-2 2v4c0 1.1 0.9 2 2 2h55.7c1.1 0 2-0.9 2-2v-4c0.1-1.2-0.8-2-1.9-2z m-20.9-15h13v4.5h-13v-4.5z m-27.1 0h13v4.5h-13v-4.5z"/>
	</g>
</svg>
  );
};

addPropertyControls(planogram_icon, {
  fill: {
    type: ControlType.Color,
    title: 'Fill',
    defaultValue: '#ffffff'
  }
});
  
