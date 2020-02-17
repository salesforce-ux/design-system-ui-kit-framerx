
import * as React from 'react';
import { addPropertyControls, ControlType } from 'framer';

export function html_icon(props) {
  return (
    <svg height="64" width="56" viewBox="0 0 56 64" xmlns="http://www.w3.org/2000/svg" {...props}>
	<path d="m5.1 0c-2.8 0-5 2.3-5 5.1v53.8c0 2.8 2.2 5.1 5 5.1h45.8c2.8 0 5.1-2.3 5.1-5.1v-38.6l-18.9-20.3h-32z" fill="#F7622C" fillRule="evenodd"/>
	<path d="m18.9 50.8c-0.1 0-0.2 0-0.3 0l-7.6-3.4c-0.5-0.2-0.8-0.7-0.8-1.3 0-0.5 0.3-1 0.8-1.2l7.6-3.4c0.1 0 0.2-0.1 0.3-0.1 0.5 0 0.9 0.4 0.9 0.9 0 0.4-0.2 0.7-0.5 0.9l-7 3 7 2.9c0.3 0.2 0.5 0.5 0.5 0.9 0 0.5-0.4 0.8-0.9 0.8z m8.5-11l-4.4 13.3c-0.2 0.4-0.5 0.6-0.9 0.6-0.6 0-1-0.4-1-0.9 0-0.1 0.1-0.2 0.1-0.3l4.4-13.2c0.2-0.4 0.5-0.7 0.9-0.7 0.6 0 0.9 0.4 0.9 0.9l0 0.3z m10.2 7.6l-7.6 3.4c-0.1 0-0.2 0-0.3 0-0.5 0-0.9-0.3-0.9-0.8 0-0.4 0.2-0.7 0.5-0.9l7.1-2.9-7.1-3c-0.3-0.2-0.5-0.5-0.5-0.9 0-0.5 0.4-0.9 0.9-0.9 0.1 0 0.2 0.1 0.3 0.1l7.6 3.4c0.5 0.2 0.8 0.7 0.8 1.2 0 0.6-0.3 1.1-0.8 1.3z" fill={props.fill}/>
	<g fillRule="evenodd">
		<path d="m56 20.4v1h-12.8s-6.3-1.3-6.2-6.8c0 0 0.3 5.8 6.1 5.8h12.9z" fill="#F54921"/>
		<path d="m37.1 0v14.6c0 1.6 1.1 5.8 6.1 5.8h12.8l-18.9-20.4z" fill={props.fill} opacity=".5"/>
	</g>
</svg>
  );
};

addPropertyControls(html_icon, {
  fill: {
    type: ControlType.Color,
    title: 'Fill',
    defaultValue: '#ffffff'
  }
});
  