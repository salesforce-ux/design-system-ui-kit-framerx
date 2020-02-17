
import * as React from 'react';
import { addPropertyControls, ControlType } from 'framer';

export function survey_icon(props) {
  return (
    <svg height="100" width="100" viewBox="0 0 100 100" xmlns="http://www.w3.org/2000/svg" {...props}>
	<g fill={props.fill}>
		<path d="m24 23h44c2.2 0 4 1.8 4 4v4c0 2.2-1.8 4-4 4h-44c-2.2 0-4-1.8-4-4v-4c0-2.2 1.8-4 4-4z m0 18h25c2.2 0 4 1.8 4 4v4c0 2.2-1.8 4-4 4h-25c-2.2 0-4-1.8-4-4v-4c0-2.2 1.8-4 4-4z m41.9 11c7.7 0 14 6.3 14 14s-6.3 14-14 14-14-6.3-14-14 6.3-14 14-14z m7.9 10.9c0.3-0.3 0.3-1 0-1.3l-1.4-1.3c-0.4-0.4-1-0.4-1.4 0l-7.5 8.4-3.4-3.4c-0.4-0.4-1-0.4-1.4 0l-1.4 1.3c-0.4 0.3-0.4 0.9 0 1.3l4.8 4.7c0.4 0.4 0.9 0.6 1.4 0.6 0.6 0 1-0.2 1.4-0.6l8.9-9.7z m-49.8-3.9h23.2c-0.8 2.3-1.2 4.3-1.2 6-0.1 2.1 0.1 4.1 0.6 6h-22.6c-2.2 0-4-1.8-4-4v-4c0-2.2 1.8-4 4-4z"/>
	</g>
</svg>
  );
};

addPropertyControls(survey_icon, {
  fill: {
    type: ControlType.Color,
    title: 'Fill',
    defaultValue: '#ffffff'
  }
});
  
