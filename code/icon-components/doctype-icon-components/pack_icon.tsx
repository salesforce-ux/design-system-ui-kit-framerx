
import * as React from 'react';
import { addPropertyControls, ControlType } from 'framer';

export function pack_icon(props) {
  return (
    <svg height="64" width="56" viewBox="0 0 56 64" xmlns="http://www.w3.org/2000/svg" {...props}>
	<path d="m5.2 0c-2.8 0-5.1 2.3-5.1 5.1v53.8c0 2.8 2.3 5.1 5.1 5.1h45.7c2.8 0 5.1-2.3 5.1-5.1v-38.6l-18.9-20.3h-31.9z" fill="#4E74B7" fillRule="evenodd"/>
	<path d="m29.2 40.9v11.9c0 0.6-0.5 1.2-1.2 1.2h-16.7c-0.6 0-1.2-0.6-1.2-1.2v-11.9c0-0.2 0-0.3 0.1-0.4l1.6-4.8c0.1-0.5 0.6-0.8 1.1-0.8h13.5c0.5 0 1 0.3 1.1 0.8l1.6 4.8c0.1 0.1 0.1 0.2 0.1 0.4z m-2.5 0l-1.2-3.6h-11.7l-1.2 3.6h14.1z" fill={props.fill}/>
	<g fillRule="evenodd">
		<path d="m56 20.4v1h-12.8s-6.3-1.3-6.2-6.8c0 0 0.3 5.8 6.1 5.8h12.9z" fill="#3A57A5"/>
		<path d="m37.1 0v14.6c0 1.6 1.1 5.8 6.1 5.8h12.8l-18.9-20.4z" fill={props.fill} opacity=".5"/>
	</g>
</svg>
  );
};

addPropertyControls(pack_icon, {
  fill: {
    type: ControlType.Color,
    title: 'Fill',
    defaultValue: '#ffffff'
  }
});
  
