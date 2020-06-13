
import * as React from 'react';
import { addPropertyControls, ControlType } from 'framer';

export function clock_icon(props) {
  return (
    <svg height="52" width="52" viewBox="0 0 52 52" xmlns="http://www.w3.org/2000/svg" {...props}>
	<g fill={props.fill}>
		<path d="m26 2c-13.2 0-24 10.8-24 24s10.8 24 24 24 24-10.8 24-24-10.8-24-24-24z m0 42c-9.9 0-18-8.1-18-18s8.1-18 18-18 18 8.1 18 18-8.1 18-18 18z m3.4-17.8c-0.3-0.3-0.4-0.7-0.4-1.1v-9.6c0-0.8-0.7-1.5-1.5-1.5h-3c-0.8 0-1.5 0.7-1.5 1.5v12.1c0 0.4 0.2 0.8 0.4 1.1l7.4 7.4c0.6 0.6 1.5 0.6 2.1 0l2.1-2.1c0.6-0.6 0.6-1.5 0-2.1l-5.6-5.7z"/>
	</g>
</svg>
  );
};

addPropertyControls(clock_icon, {
  fill: {
    type: ControlType.Color,
    title: 'Fill',
    defaultValue: '#ffffff'
  }
});
  
