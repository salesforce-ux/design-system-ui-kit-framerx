
import * as React from 'react';
import { addPropertyControls, ControlType } from 'framer';

export function new_custom45_icon(props) {
  return (
    <svg height="52" width="52" viewBox="0 0 52 52" xmlns="http://www.w3.org/2000/svg" {...props}>
	<g fill={props.fill}>
		<path d="m13.2 20.8h25.5v10.5h-25.5z m36.8-1.3v-4c0-2.5-2-4.5-4.5-4.5h-39c-2.5 0-4.5 2-4.5 4.5v4c0 0.5 0.3 1.1 0.8 1.3 1.8 1.1 3 3 3 5.2s-1.2 4.1-3 5.2c-0.5 0.2-0.8 0.7-0.8 1.2v4.1c0 2.5 2 4.5 4.5 4.5h39c2.5 0 4.5-2 4.5-4.5v-4c0-0.5-0.3-1.1-0.8-1.3-1.8-1.1-3-3-3-5.2s1.2-4.1 3-5.2c0.5-0.3 0.8-0.7 0.8-1.3z m-8.2 16.3h-31.6c-0.8 0-1.5-0.7-1.5-1.5v-16.5c0-0.8 0.7-1.5 1.5-1.5h31.5c0.8 0 1.5 0.7 1.5 1.5v16.5c0 0.8-0.6 1.5-1.4 1.5z"/>
	</g>
</svg>
  );
};

addPropertyControls(new_custom45_icon, {
  fill: {
    type: ControlType.Color,
    title: 'Fill',
    defaultValue: '#ffffff'
  }
});
  
