
import * as React from 'react';
import { addPropertyControls, ControlType } from 'framer';

export function audio_icon(props) {
  return (
    <svg height="64" width="56" viewBox="0 0 56 64" xmlns="http://www.w3.org/2000/svg" {...props}>
	<g fillRule="evenodd">
		<path d="m5.2 0c-2.8 0-5.1 2.3-5.1 5.1v53.8c0 2.8 2.3 5.1 5.1 5.1h45.7c2.8 0 5.1-2.3 5.1-5.1v-38.6l-18.9-20.3h-31.9z" fill="#379FD3"/>
		<path d="m56 20.4v1h-12.8s-6.3-1.3-6.1-6.8c0 0 0.2 5.8 6 5.8h12.9z" fill="#2987C8"/>
		<path d="m37.1 0v14.6c0 1.6 1.1 5.8 6.1 5.8h12.8l-18.9-20.4z" fill={props.fill} opacity=".5"/>
		<path d="m29.8 34l-14.2 1.9v13.4c-0.7-0.2-1.6-0.3-2.5-0.1-2 0.4-3.3 1.7-2.9 2.9 0.4 1.3 2.3 1.9 4.3 1.5 1.8-0.3 3-1.4 3-2.5h0v-10.7l10.4-1.3v8.3c-0.7-0.2-1.6-0.2-2.5 0-2.1 0.4-3.4 1.7-3 2.9 0.4 1.2 2.3 1.9 4.4 1.5 1.8-0.4 3.1-1.5 3-2.6v-15.2z" fill={props.fill}/>
	</g>
</svg>
  );
};

addPropertyControls(audio_icon, {
  fill: {
    type: ControlType.Color,
    title: 'Fill',
    defaultValue: '#ffffff'
  }
});
  
