
import * as React from 'react';
import { addPropertyControls, ControlType } from 'framer';

export function rtf_icon(props) {
  return (
    <svg height="64" width="56" viewBox="0 0 56 64" xmlns="http://www.w3.org/2000/svg" {...props}>
	<path d="m5.1 0c-2.8 0-5.1 2.3-5.1 5.1v53.8c0 2.8 2.3 5.1 5.1 5.1h45.8c2.8 0 5.1-2.3 5.1-5.1v-38.6l-18.9-20.3h-32z" fill="#00A1EE" fillRule="evenodd"/>
	<path d="m15.6 48.8l2.6 3.9c0.1 0.2 0.1 0.3 0.1 0.4 0 0.4-0.3 0.7-0.7 0.7-0.3 0-0.5-0.1-0.6-0.3l-3-4.5h-2.4v4.1c0 0.4-0.3 0.7-0.7 0.7-0.4 0-0.8-0.3-0.8-0.7v-10.3c0-0.6 0.5-1.1 1.1-1.1h3.8c2.2 0 3.7 1.4 3.7 3.6 0 2.2-1.4 3.4-3.1 3.5z m-4-5.8v4.6h3.2c1.4 0 2.4-0.9 2.4-2.3 0-1.3-1-2.3-2.4-2.3h-3.2z m17.5 0h-3.3v10.1c0 0.4-0.3 0.7-0.7 0.7-0.5 0-0.8-0.3-0.8-0.7v-10.1h-3.2c-0.4 0-0.7-0.2-0.7-0.6 0-0.4 0.3-0.7 0.7-0.7h8c0.4 0 0.6 0.3 0.6 0.7 0 0.4-0.2 0.6-0.6 0.6z m10.3 0h-5.8v3.9h5.7c0.3 0 0.6 0.3 0.6 0.7 0 0.4-0.3 0.7-0.6 0.7h-5.7v4.8c0 0.4-0.4 0.7-0.8 0.7-0.4 0-0.7-0.3-0.7-0.7v-10.3c0-0.6 0.4-1.1 1-1.1h6.3c0.4 0 0.6 0.3 0.6 0.7 0 0.4-0.2 0.6-0.6 0.6z" fill={props.fill}/>
	<g fillRule="evenodd">
		<path d="m56 20.4v1h-12.8s-6.3-1.3-6.2-6.8c0 0 0.3 5.8 6.1 5.8h12.9z" fill="#0089E9"/>
		<path d="m37.1 0v14.6c0 1.6 1.1 5.8 6.1 5.8h12.8l-18.9-20.4z" fill={props.fill} opacity=".5"/>
	</g>
</svg>
  );
};

addPropertyControls(rtf_icon, {
  fill: {
    type: ControlType.Color,
    title: 'Fill',
    defaultValue: '#ffffff'
  }
});
  
