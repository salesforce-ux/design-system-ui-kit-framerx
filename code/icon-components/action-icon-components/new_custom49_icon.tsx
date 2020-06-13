
import * as React from 'react';
import { addPropertyControls, ControlType } from 'framer';

export function new_custom49_icon(props) {
  return (
    <svg height="52" width="52" viewBox="0 0 52 52" xmlns="http://www.w3.org/2000/svg" {...props}>
	<g fill={props.fill}>
		<path d="m26 18.8c-4 0-7.2 3.2-7.2 7.2s3.2 7.2 7.2 7.2 7.2-3.2 7.2-7.2-3.2-7.2-7.2-7.2z m0 11.2c-2.2 0-4-1.8-4-4s1.8-4 4-4 4 1.8 4 4-1.8 4-4 4z m0-28c-13.3 0-24 10.7-24 24s10.7 24 24 24 24-10.7 24-24-10.7-24-24-24z m0 42.3c0 1-0.8 1.7-1.8 1.6-9.6-0.8-17.3-8.5-18.2-18.2 0-0.9 0.7-1.7 1.7-1.7h1.6c0.8 0 1.5 0.6 1.6 1.4 0.7 7.2 6.5 13 13.7 13.7 0.8 0.1 1.4 0.8 1.4 1.6v1.6z m0-6.3c-6.6 0-12-5.4-12-12s5.4-12 12-12 12 5.4 12 12-5.4 12-12 12z m18.3-12h-1.6c-0.8 0-1.5-0.6-1.6-1.4-0.7-7.2-6.5-13-13.7-13.7-0.8-0.1-1.4-0.8-1.4-1.6v-1.6c0-1 0.8-1.7 1.8-1.6 9.7 0.8 17.4 8.6 18.2 18.2 0 0.9-0.7 1.7-1.7 1.7z"/>
	</g>
</svg>
  );
};

addPropertyControls(new_custom49_icon, {
  fill: {
    type: ControlType.Color,
    title: 'Fill',
    defaultValue: '#ffffff'
  }
});
  
