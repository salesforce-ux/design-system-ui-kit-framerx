
import * as React from 'react';
import { addPropertyControls, ControlType } from 'framer';

export function quotation_marks_icon(props) {
  return (
    <svg height="52" width="52" viewBox="0 0 52 52" xmlns="http://www.w3.org/2000/svg" {...props}>
	<g fill={props.fill}>
		<path d="m44.3 6.5c-9 0-15.9 7-15.9 16v21.5c0 0.8 0.7 1.5 1.5 1.5h17c0.8 0 1.5-0.7 1.5-1.5v-17c0-0.8-0.7-1.5-1.5-1.5h-12.5v-3c0-5 4.9-10 9.9-10h2.6c0.8 0 1.5-0.7 1.5-1.5v-3c0-0.8-0.7-1.5-1.5-1.5h-2.6z m-24.8 0c-9 0-15.9 7-15.9 16v21.5c0 0.8 0.7 1.5 1.5 1.5h17c0.8 0 1.5-0.7 1.5-1.5v-17c0-0.8-0.7-1.5-1.5-1.5h-12.5v-3c0-5 4.9-10 9.9-10h2.6c0.8 0 1.5-0.7 1.5-1.5v-3c0-0.8-0.7-1.5-1.5-1.5h-2.6z"/>
	</g>
	<path d="m30.5 8"/>
</svg>
  );
};

addPropertyControls(quotation_marks_icon, {
  fill: {
    type: ControlType.Color,
    title: 'Fill',
    defaultValue: '#ffffff'
  }
});
  
