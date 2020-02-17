
import * as React from 'react';
import { addPropertyControls, ControlType } from 'framer';

export function overlay_icon(props) {
  return (
    <svg height="64" width="56" viewBox="0 0 56 64" xmlns="http://www.w3.org/2000/svg" {...props}>
	<path d="m5.2 0c-2.8 0-5.1 2.3-5.1 5.1v53.8c0 2.8 2.2 5.1 5.1 5.1h45.7c2.8 0 5.1-2.3 5.1-5.1v-38.6l-18.9-20.3h-31.9z" fill="#A382D8" fillRule="evenodd"/>
	<path d="m10.1 34.5v14.1h14.7v-14.1h-14.7z m5.4 5.4v14h14.7v-14h-14.7z" fill={props.fill}/>
	<path d="m15.5 39.9h9.3v8.7h-9.3z" fill="#CBBBEF"/>
	<g fillRule="evenodd">
		<path d="m56 20.4v1h-12.8s-6.3-1.3-6.2-6.8c0 0 0.3 5.8 6.1 5.8h12.9z" fill="#8C62CE"/>
		<path d="m37.1 0v14.6c0 1.6 1.1 5.8 6.1 5.8h12.8l-18.9-20.4z" fill={props.fill} opacity=".5"/>
	</g>
</svg>
  );
};

addPropertyControls(overlay_icon, {
  fill: {
    type: ControlType.Color,
    title: 'Fill',
    defaultValue: '#ffffff'
  }
});
  
