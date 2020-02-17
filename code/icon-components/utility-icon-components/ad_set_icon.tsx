
import * as React from 'react';
import { addPropertyControls, ControlType } from 'framer';

export function ad_set_icon(props) {
  return (
    <svg height="52" width="52" viewBox="0 0 52 52" xmlns="http://www.w3.org/2000/svg" {...props}>
	<g fill={props.fill}>
		<path d="m22.5 5.1h-17c-0.8 0-1.5 0.7-1.5 1.5v15.9c0 0.8 0.7 1.5 1.5 1.5h17c0.8 0 1.5-0.7 1.5-1.5v-15.9c0-0.8-0.7-1.5-1.5-1.5z m-2.6 8.2h-11.8v-4.1h11.8v4.1z m26.6-8.2h-17c-0.8 0-1.5 0.7-1.5 1.5v15.9c0 0.8 0.7 1.5 1.5 1.5h17c0.8 0 1.5-0.7 1.5-1.5v-15.9c0-0.8-0.7-1.5-1.5-1.5z m-2.6 8.2h-11.8v-4.1h11.8v4.1z"/>
	</g>
	<g fill={props.fill}>
		<path d="m22.5 28h-17c-0.8 0-1.5 0.7-1.5 1.5v15.9c0 0.8 0.7 1.5 1.5 1.5h17c0.8 0 1.5-0.7 1.5-1.5v-15.9c0-0.8-0.7-1.5-1.5-1.5z m-2.6 8.2h-11.8v-4.1h11.8v4.1z m26.6-8.2h-17c-0.8 0-1.5 0.7-1.5 1.5v15.9c0 0.8 0.7 1.5 1.5 1.5h17c0.8 0 1.5-0.7 1.5-1.5v-15.9c0-0.8-0.7-1.5-1.5-1.5z m-2.6 8.2h-11.8v-4.1h11.8v4.1z"/>
	</g>
</svg>
  );
};

addPropertyControls(ad_set_icon, {
  fill: {
    type: ControlType.Color,
    title: 'Fill',
    defaultValue: '#ffffff'
  }
});
  
