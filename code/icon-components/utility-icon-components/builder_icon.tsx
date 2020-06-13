
import * as React from 'react';
import { addPropertyControls, ControlType } from 'framer';

export function builder_icon(props) {
  return (
    <svg height="52" width="52" viewBox="0 0 52 52" xmlns="http://www.w3.org/2000/svg" {...props}>
	<g fill={props.fill}>
		<path d="m11.5 17h-8c-0.8 0-1.5 0.7-1.5 1.5v25.5c0 2.2 1.8 4 4 4h5.5c0.8 0 1.5-0.7 1.5-1.5v-28c0-0.8-0.7-1.5-1.5-1.5z m37 0h-30c-0.8 0-1.5 0.7-1.5 1.5v28c0 0.8 0.7 1.5 1.5 1.5h27.5c2.2 0 4-1.8 4-4v-25.5c0-0.8-0.7-1.5-1.5-1.5z m-2.5-13h-40c-2.2 0-4 1.8-4 4v3.5c0 0.8 0.7 1.5 1.5 1.5h45c0.8 0 1.5-0.7 1.5-1.5v-3.5c0-2.2-1.8-4-4-4z"/>
	</g>
</svg>
  );
};

addPropertyControls(builder_icon, {
  fill: {
    type: ControlType.Color,
    title: 'Fill',
    defaultValue: '#ffffff'
  }
});
  
