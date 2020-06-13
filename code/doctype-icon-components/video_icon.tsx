
import * as React from 'react';
import { addPropertyControls, ControlType } from 'framer';

export function video_icon(props) {
  return (
    <svg height="64" width="56" viewBox="0 0 56 64" xmlns="http://www.w3.org/2000/svg" {...props}>
	<path d="m5.2 0c-2.8 0-5.1 2.3-5.1 5.1v53.8c0 2.8 2.3 5.1 5.1 5.1h45.7c2.8 0 5.1-2.3 5.1-5.1v-38.6l-18.9-20.3h-31.9z" fill="#8E4C9E" fillRule="evenodd"/>
	<path d="m24.5 45.5c0 0.4-0.1 0.8-0.4 1-0.2 0.2-5.3 4.4-11.9 7.1-0.1 0.1-0.3 0.1-0.5 0.1-0.2 0-0.4-0.1-0.6-0.2-0.4-0.2-0.6-0.5-0.7-1 0-0.1-0.3-3.4-0.3-7s0.3-6.8 0.3-7c0.1-0.4 0.3-0.7 0.7-1 0.2-0.1 0.4-0.2 0.6-0.2 0.2 0 0.4 0.1 0.5 0.2 6.6 2.6 11.7 6.9 11.9 7.1 0.3 0.2 0.4 0.6 0.4 0.9z" fill={props.fill}/>
	<g fillRule="evenodd">
		<path d="m56 20.4v1h-12.8s-6.3-1.3-6.2-6.8c0 0 0.3 5.8 6.1 5.8h12.9z" fill="#713985"/>
		<path d="m37.1 0v14.6c0 1.6 1.1 5.8 6.1 5.8h12.8l-18.9-20.4z" fill={props.fill} opacity=".5"/>
	</g>
</svg>
  );
};

addPropertyControls(video_icon, {
  fill: {
    type: ControlType.Color,
    title: 'Fill',
    defaultValue: '#ffffff'
  }
});
  
