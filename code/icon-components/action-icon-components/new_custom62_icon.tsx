
import * as React from 'react';
import { addPropertyControls, ControlType } from 'framer';

export function new_custom62_icon(props) {
  return (
    <svg height="52" width="52" viewBox="0 0 52 52" xmlns="http://www.w3.org/2000/svg" {...props}>
	<g fill={props.fill}>
		<path d="m47.6 41.2h-43.2c-1.3 0-2.4 1-2.4 2.4 0 1.3 1 2.4 2.4 2.4h43.2c1.3 0 2.4-1 2.4-2.4s-1-2.4-2.4-2.4z m-42.4-4.8h27.2v-3.2c0-0.9 0.7-1.6 1.6-1.6h8c0.9 0 1.6 0.7 1.6 1.6v3.2h3.2c0.9 0 1.6-0.7 1.6-1.6v-27.2c0-0.9-0.7-1.6-1.6-1.6h-41.6c-0.9 0-1.6 0.7-1.6 1.6v27.2c0 0.9 0.7 1.6 1.6 1.6z m7.2-20.8c0-0.9 0.7-1.6 1.6-1.6h23.2c0.9 0 1.6 0.7 1.6 1.6v1.6c0 0.9-0.7 1.6-1.6 1.6h-23.2c-0.9 0-1.6-0.7-1.6-1.6v-1.6z m0 9.6c0-0.9 0.7-1.6 1.6-1.6h15.2c0.9 0 1.6 0.7 1.6 1.6v1.6c0 0.9-0.7 1.6-1.6 1.6h-15.2c-0.9 0-1.6-0.7-1.6-1.6v-1.6z"/>
	</g>
</svg>
  );
};

addPropertyControls(new_custom62_icon, {
  fill: {
    type: ControlType.Color,
    title: 'Fill',
    defaultValue: '#ffffff'
  }
});
  
