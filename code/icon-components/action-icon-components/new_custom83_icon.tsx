
import * as React from 'react';
import { addPropertyControls, ControlType } from 'framer';

export function new_custom83_icon(props) {
  return (
    <svg height="52" width="52" viewBox="0 0 52 52" xmlns="http://www.w3.org/2000/svg" {...props}>
	<g fill={props.fill}>
		<path d="m45.7 17.4c0.3 0.3 0.8 0.3 1.1 0l1.1-1.1c2.7-2.7 2.8-6.9 0.2-9.5 0 0-3.4-3.5-3.5-3.5-2.7-2.2-6.5-1.2-8.6 1l-1.1 1.1c-0.3 0.3-0.3 0.8 0 1.1l10.8 10.9z m-14.4-7.6c-0.3-0.3-0.8-0.3-1.1 0l-22 21.9c-1.2 1.2-2.1 2.6-2.6 4.3l-3.5 10.8c-0.2 0.6-0.2 1.4 0.2 2 0.5 0.8 1.3 1.2 2.1 1.2 0.2 0 0.5 0 0.7-0.1 0 0 7.4-2.3 11-3.4 1.6-0.5 3-1.4 4.2-2.6l21.9-21.9c0.3-0.3 0.3-0.8 0-1.1l-10.9-11.1z m-16.7 32.1c-1.7 0.6-4.3 1.4-6.6 2.1l2.1-6.6c0.2-0.9 0.7-1.6 1.4-2.2l5.4 5.4c-0.7 0.6-1.5 1.1-2.3 1.3z"/>
	</g>
</svg>
  );
};

addPropertyControls(new_custom83_icon, {
  fill: {
    type: ControlType.Color,
    title: 'Fill',
    defaultValue: '#ffffff'
  }
});
  
