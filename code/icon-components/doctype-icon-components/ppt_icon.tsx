
import * as React from 'react';
import { addPropertyControls, ControlType } from 'framer';

export function ppt_icon(props) {
  return (
    <svg height="64" width="56" viewBox="0 0 56 64" xmlns="http://www.w3.org/2000/svg" {...props}>
	<path d="m5.1 0c-2.8 0-5.1 2.3-5.1 5.1v53.8c0 2.8 2.3 5.1 5.1 5.1h45.8c2.8 0 5.1-2.3 5.1-5.1v-38.6l-18.9-20.3h-32z" fill="#E34221" fillRule="evenodd"/>
	<path d="m15 49h-3.4v4.2c0 0.4-0.3 0.7-0.7 0.7-0.4 0-0.8-0.3-0.8-0.7v-10.3c0-0.6 0.5-1.1 1.1-1.1h3.8c2.4 0 3.7 1.6 3.7 3.6 0 2-1.4 3.6-3.7 3.6z m-0.2-5.9h-3.2v4.6h3.2c1.4 0 2.4-1 2.4-2.3 0-1.4-1-2.3-2.4-2.3z m11.2 5.9h-3.4v4.2c0 0.4-0.3 0.7-0.7 0.7-0.4 0-0.7-0.3-0.7-0.7v-10.3c0-0.6 0.4-1.1 1-1.1h3.8c2.4 0 3.7 1.6 3.7 3.6 0 2-1.3 3.6-3.7 3.6z m-0.2-5.9h-3.1v4.6h3.1c1.4 0 2.4-1 2.4-2.3 0-1.4-1-2.3-2.4-2.3z m14.1 0h-3.3v10.1c0 0.4-0.3 0.7-0.7 0.7-0.4 0-0.8-0.3-0.8-0.7v-10.1h-3.2c-0.4 0-0.7-0.3-0.7-0.7 0-0.3 0.3-0.6 0.7-0.6h8c0.4 0 0.7 0.3 0.7 0.7 0 0.3-0.3 0.6-0.7 0.6z" fill={props.fill}/>
	<g fillRule="evenodd">
		<path d="m56 20.4v1h-12.8s-6.3-1.3-6.2-6.8c0 0 0.3 5.8 6.1 5.8h12.9z" fill="#DC3119"/>
		<path d="m37.1 0v14.6c0 1.6 1.1 5.8 6.1 5.8h12.8l-18.9-20.4z" fill={props.fill} opacity=".5"/>
	</g>
</svg>
  );
};

addPropertyControls(ppt_icon, {
  fill: {
    type: ControlType.Color,
    title: 'Fill',
    defaultValue: '#ffffff'
  }
});
  
