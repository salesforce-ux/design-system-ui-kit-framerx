
import * as React from 'react';
import { addPropertyControls, ControlType } from 'framer';

export function knowledge_base_icon(props) {
  return (
    <svg height="52" width="52" viewBox="0 0 52 52" xmlns="http://www.w3.org/2000/svg" {...props}>
	<g fill={props.fill}>
		<path d="m9.5 35h13c0.8 0 1.5-0.7 1.5-1.5v-23.5c0-1.7-1.8-3-3.2-3h-11.3c-0.8 0-1.5 0.7-1.5 1.5v25c0 0.8 0.7 1.5 1.5 1.5z m39.7-23.4c-0.6-0.2-1.2 0.3-1.2 1v24.9c0 0.8-0.7 1.5-1.5 1.5h-41c-0.8 0-1.5-0.7-1.5-1.5v-24.8c0-0.7-0.8-1.2-1.4-0.9-1.5 0.7-2.6 2.3-2.6 4.2v23c0 2.2 1.8 4 4 4h16.5c0.8 0 1.5 0.7 1.5 1.5s0.7 1.5 1.5 1.5h5c0.8 0 1.5-0.7 1.5-1.5s0.7-1.5 1.5-1.5h16.5c2.2 0 4-1.8 4-4v-23c0-2.1-0.7-3.9-2.8-4.4z m-19.7 23.4h13c0.8 0 1.5-0.7 1.5-1.5v-25c0-0.8-0.7-1.5-1.5-1.5h-11.3c-1.5 0-3.2 1.3-3.2 3v23.5c0 0.8 0.7 1.5 1.5 1.5z"/>
	</g>
</svg>
  );
};

addPropertyControls(knowledge_base_icon, {
  fill: {
    type: ControlType.Color,
    title: 'Fill',
    defaultValue: '#ffffff'
  }
});
  
