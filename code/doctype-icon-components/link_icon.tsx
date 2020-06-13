
import * as React from 'react';
import { addPropertyControls, ControlType } from 'framer';

export function link_icon(props) {
  return (
    <svg height="64" width="56" viewBox="0 0 56 64" xmlns="http://www.w3.org/2000/svg" {...props}>
	<path d="m5.2 0c-2.8 0-5.1 2.3-5.1 5.1v53.8c0 2.8 2.2 5.1 5.1 5.1h45.7c2.8 0 5.1-2.3 5.1-5.1v-38.6l-18.9-20.3h-31.9z" fill="#0C8FE8" fillRule="evenodd"/>
	<path d="m28.3 35.6c-2.1-2.1-5.5-2.1-7.6 0l-3.1 3.1c-2 2-2 5.4 0 7.5 0.5 0.5 1.3 0.5 1.8 0 0.5-0.5 0.5-1.2 0-1.7-1.1-1.2-1.1-3 0-4.1l3.1-3.1c1.1-1.1 2.9-1.1 4 0 1.1 1.2 1.1 3 0 4.1l-1.4 1.5c0.3 1 0.5 2 0.4 3l2.7-2.7c2.1-2.1 2.1-5.5 0.1-7.6z m-7.8 6c-0.4 0.4-0.4 1.2 0 1.7 1.2 1.1 1.2 3 0 4.1l-3 3c-1.1 1.1-2.9 1.1-4.1 0-1.1-1.1-1.1-2.9 0-4l1.5-1.5c-0.4-1-0.5-2-0.4-3.1l-2.8 2.8c-2.1 2.1-2.1 5.5 0 7.6 2.1 2.1 5.5 2.1 7.5 0l3.1-3.1c2.1-2.1 2.1-5.4 0-7.5-0.5-0.5-1.3-0.5-1.8 0z" fill={props.fill}/>
	<g fillRule="evenodd">
		<path d="m56 20.4v1h-12.8s-6.3-1.3-6.2-6.8c0 0 0.3 5.8 6.1 5.8h12.9z" fill="#0973E2"/>
		<path d="m37.1 0v14.6c0 1.6 1.1 5.8 6.1 5.8h12.8l-18.9-20.4z" fill={props.fill} opacity=".5"/>
	</g>
</svg>
  );
};

addPropertyControls(link_icon, {
  fill: {
    type: ControlType.Color,
    title: 'Fill',
    defaultValue: '#ffffff'
  }
});
  
