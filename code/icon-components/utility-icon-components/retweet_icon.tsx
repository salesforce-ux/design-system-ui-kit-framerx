
import * as React from 'react';
import { addPropertyControls, ControlType } from 'framer';

export function retweet_icon(props) {
  return (
    <svg height="52" width="52" viewBox="0 0 52 52" xmlns="http://www.w3.org/2000/svg" {...props}>
	<g fill={props.fill}>
		<path d="m51.6 28.8l-2.1-2.1c-0.6-0.6-1.5-0.6-2.1 0l-2.7 2.7c-0.7 0.7-1.7 0.2-1.7-0.7v-16.7c0-2.2-1.8-4-4-4h-14.5c-0.8 0-1.5 0.7-1.5 1.5v3c0 0.8 0.7 1.5 1.5 1.5h11c0.8 0 1.5 0.7 1.5 1.5v13.2c0 0.9-1.1 1.3-1.8 0.7l-2.6-2.6c-0.6-0.6-1.6-0.6-2.1 0l-2.1 2.2c-0.6 0.6-0.6 1.5 0 2.1l10.5 10.5c0.6 0.6 1.5 0.6 2.1 0l10.6-10.6c0.5-0.6 0.5-1.6 0-2.2z m-24.1 9.2h-11c-0.8 0-1.5-0.7-1.5-1.5v-13.2c0-0.9 1.1-1.3 1.8-0.7l2.6 2.6c0.6 0.6 1.6 0.6 2.1 0l2.1-2.1c0.6-0.6 0.6-1.5 0-2.1l-10.4-10.6c-0.6-0.6-1.5-0.6-2.1 0l-10.7 10.6c-0.6 0.6-0.6 1.5 0 2.1l2.1 2.1c0.6 0.6 1.5 0.6 2.1 0l2.7-2.7c0.6-0.6 1.7-0.2 1.7 0.7v16.8c0 2.2 1.9 4 4.1 4h14.5c0.8 0 1.5-0.7 1.5-1.5v-3c-0.1-0.8-0.8-1.5-1.6-1.5z"/>
	</g>
</svg>
  );
};

addPropertyControls(retweet_icon, {
  fill: {
    type: ControlType.Color,
    title: 'Fill',
    defaultValue: '#ffffff'
  }
});
  
