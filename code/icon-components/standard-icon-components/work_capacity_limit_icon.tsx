
import * as React from 'react';
import { addPropertyControls, ControlType } from 'framer';

export function work_capacity_limit_icon(props) {
  return (
    <svg height="100" width="100" viewBox="0 0 100 100" xmlns="http://www.w3.org/2000/svg" {...props}>
	<g fill={props.fill}>
		<path d="m75.9 29.3l-9-8.9c-0.3-0.3-0.6-0.4-0.9-0.4-0.8 0-1.4 0.6-1.4 1.4v6.4c0.1 2.1 1.8 3.8 3.9 3.8h6.4c0.7 0 1.3-0.6 1.3-1.3 0-0.4-0.1-0.7-0.3-1z m-46.3 33.3v-31c-3.2 0-5.8 2.6-5.8 5.8v36.7c0 3.2 2.6 5.8 5.8 5.9h29.2c3.2 0 5.7-2.5 5.8-5.7h-23.3c-6.4 0-11.7 0-11.7-11.7z m21.9-18.3v9h8.5s0.5-3.2-2.4-6.2c-2.9-2.9-6.1-2.8-6.1-2.8z m22.7-6.9h-9.8c-3.2 0.1-5.8-2.5-5.9-5.7v-9.8c0.1-1-0.7-1.8-1.7-1.9h-15.6c-3.2-0.1-5.8 2.5-5.9 5.7v36.8c0 3.2 2.6 5.8 5.8 5.8h29.2c3.2 0.1 5.8-2.5 5.9-5.7v-23.2c0-1.1-0.8-2-2-2z m-10.7 15.6c-0.1 6.5-5.4 11.8-11.9 11.7s-11.8-5.4-11.7-11.9c0.1-6.5 5.4-11.8 11.9-11.7 6.5 0 11.7 5.4 11.7 11.9z"/>
	</g>
</svg>
  );
};

addPropertyControls(work_capacity_limit_icon, {
  fill: {
    type: ControlType.Color,
    title: 'Fill',
    defaultValue: '#ffffff'
  }
});
  
