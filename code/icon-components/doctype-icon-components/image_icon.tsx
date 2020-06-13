
import * as React from 'react';
import { addPropertyControls, ControlType } from 'framer';

export function image_icon(props) {
  return (
    <svg height="64" width="56" viewBox="0 0 56 64" xmlns="http://www.w3.org/2000/svg" {...props}>
	<g fillRule="evenodd">
		<path d="m5.1 0c-2.8 0-5 2.3-5 5.1v53.9c0 2.8 2.2 5 5 5h45.8c2.8 0 5.1-2.2 5.1-5v-38.6l-18.9-20.4h-32z" fill="#49C9A7"/>
		<path d="m56 20.4v1h-12.8s-6.3-1.3-6.2-6.8c0 0 0.3 5.8 6.1 5.8h12.9z" fill="#37BB91"/>
		<path d="m37.1 0v14.6c0 1.6 1.1 5.8 6.1 5.8h12.8l-18.9-20.4z" fill={props.fill} opacity=".5"/>
	</g>
	<path d="m10.1 53.7v-20.9h20.9v20.9h-20.9z m18.8-18.8h-16.7v12.6h16.7v-12.6z m-9.6 8.4l3.9-5.3 1.3 2.1 1.3-0.4 1 5.6h-13.1l3.5-3.3 2.1 1.3z m-3.8-3.7c-0.9 0-1.7-0.6-1.7-1.5 0-0.8 0.8-1.5 1.7-1.5 0.9 0 1.6 0.7 1.6 1.5 0 0.9-0.7 1.5-1.6 1.5z" fill={props.fill} fillRule="evenodd"/>
</svg>
  );
};

addPropertyControls(image_icon, {
  fill: {
    type: ControlType.Color,
    title: 'Fill',
    defaultValue: '#ffffff'
  }
});
  
