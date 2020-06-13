
import * as React from 'react';
import { addPropertyControls, ControlType } from 'framer';

export function hide_mobile_icon(props) {
  return (
    <svg height="52" width="52" viewBox="0 0 52 52" xmlns="http://www.w3.org/2000/svg" {...props}>
	<g fill={props.fill}>
		<path d="m36.1 25.3v14.1c0 0.7-0.6 1.4-1.4 1.4h-14.1l-8.6 8.6c0.6 0.4 1.3 0.6 2 0.6h24c2 0 3.7-1.7 3.7-3.7v-26.6l-5.6 5.6z m-10.1 22.8c-1.6 0-2.8-1.2-2.8-2.8s1.2-2.8 2.8-2.8 2.8 1.2 2.8 2.8-1.2 2.8-2.8 2.8z m-15.7-2.5l5.7-5.7v-0.1l20.2-20.2v0.1l5.5-5.5v-0.1l7-7c0.7-0.6 0.8-1.7 0.3-2.2l-2-1.9c-0.6-0.6-1.6-0.5-2.2 0.3l-3.1 3.1v-0.7c0-2-1.7-3.7-3.7-3.7h-24c-2 0-3.7 1.7-3.7 3.7v32.1l-7.1 7.1c-0.6 0.6-0.7 1.6-0.2 2.1l1.9 2c0.6 0.6 1.6 0.5 2.2-0.3l3.2-3.1z m5.5-34.8c0-0.7 0.6-1.4 1.4-1.4h17.5c0.7 0 1.4 0.6 1.4 1.4v1.2l-20.3 20.2v-21.4z"/>
	</g>
</svg>
  );
};

addPropertyControls(hide_mobile_icon, {
  fill: {
    type: ControlType.Color,
    title: 'Fill',
    defaultValue: '#ffffff'
  }
});
  
