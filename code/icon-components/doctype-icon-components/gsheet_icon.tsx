
import * as React from 'react';
import { addPropertyControls, ControlType } from 'framer';

export function gsheet_icon(props) {
  return (
    <svg height="64" width="56" viewBox="0 0 56 64" xmlns="http://www.w3.org/2000/svg" {...props}>
	<path d="m5.1 0c-2.8 0-5 2.3-5 5.1v53.8c0 2.8 2.2 5.1 5 5.1h45.8c2.8 0 5.1-2.3 5.1-5.1v-38.6l-18.9-20.3h-32z" fill="#20A971" fillRule="evenodd"/>
	<path d="m10.1 37.5v16.4h21.5v-16.4h-21.5z m6.5 15h-5v-3.5h5v3.5z m0-5h-5v-3.5h5v3.5z m0-5h-5v-3.6h5v3.6z m13.6 10h-12.2v-3.5h12.2v3.5z m0-5h-12.2v-3.5h12.2v3.5z m0-5h-12.2v-3.6h12.2v3.6z" fill={props.fill}/>
	<g fillRule="evenodd">
		<path d="m56 20.3v1h-12.8s-6.3-1.2-6.1-6.7c0 0 0.2 5.7 6 5.7h12.9z" fill="#189355"/>
		<path d="m37.1 0v14.5c0 1.7 1.1 5.8 6.1 5.8h12.8l-18.9-20.3z" fill={props.fill} opacity=".5"/>
	</g>
</svg>
  );
};

addPropertyControls(gsheet_icon, {
  fill: {
    type: ControlType.Color,
    title: 'Fill',
    defaultValue: '#ffffff'
  }
});
  
