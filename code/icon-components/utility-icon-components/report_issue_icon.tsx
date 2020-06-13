
import * as React from 'react';
import { addPropertyControls, ControlType } from 'framer';

export function report_issue_icon(props) {
  return (
    <svg height="52" width="52" viewBox="0 0 52 52" xmlns="http://www.w3.org/2000/svg" {...props}>
	<g fill={props.fill}>
		<path d="m22.8 45.7v1c0 1.2-0.9 2.1-2.1 2.1h-16.6c-1.2 0-2.1-0.9-2.1-2.1v-1c0-2.5 3-4.1 5.7-5.3 0.1 0 0.2-0.1 0.3-0.2 0.2-0.1 0.5-0.1 0.7 0 1.1 0.7 2.4 1.1 3.8 1.1 1.3 0 2.6-0.4 3.8-1.1 0.2-0.1 0.4-0.1 0.6 0 0.1 0 0.2 0.1 0.3 0.2 2.7 1.3 5.6 2.8 5.6 5.3z"/>
		<path d="m34.8 3.2c-8.5 0-15.3 6.5-15.3 14.5 0 2.5 0.7 5 2 7.2 0.1 0.2 0.2 0.5 0.2 0.8l-1.7 4.6c-0.2 0.6 0.2 1.1 0.7 1.3 0.2 0.1 0.4 0.1 0.6 0l4.5-1.6c0.3-0.1 0.6-0.1 0.8 0.1 2.4 1.4 5.2 2.2 8 2.2 8.5 0 15.3-6.6 15.3-14.6 0.1-8-6.8-14.5-15.1-14.5z m-1.1 5.7h3v7l-0.3 4.6h-2.4l-0.2-4.6v-7z m1.5 17.3c-1.4 0-1.8-0.8-1.8-1.8s0.4-1.8 1.8-1.8 1.8 0.8 1.8 1.8c0.1 1-0.4 1.8-1.8 1.8z"/>
		<ellipse cx="12.4" cy="33.7" rx="5.2" ry="5.7"/>
	</g>
</svg>
  );
};

addPropertyControls(report_issue_icon, {
  fill: {
    type: ControlType.Color,
    title: 'Fill',
    defaultValue: '#ffffff'
  }
});
  
