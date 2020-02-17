
import * as React from 'react';
import { addPropertyControls, ControlType } from 'framer';

export function custom111_icon(props) {
  return (
    <svg height="100" width="100" viewBox="0 0 100 100" xmlns="http://www.w3.org/2000/svg" {...props}>
	<g fill={props.fill}>
		<path d="m53.4 45.1c-0.1 0-0.1 0-0.1-0.1-2.4-1-5.7-3.7-10.8-4.6 1.3-1.3 2.3-3.5 3.3-6.1 0.6-1.4 0.5-2.7 0.5-4.5 0-1.3 0.2-3.4-0.1-4.6-1.1-4-3.9-5.1-7.2-5.1-3.3 0-6.2 1.1-7.3 5.1-0.3 1.2 0 3.3 0 4.6 0 1.8-0.1 3.1 0.5 4.6 1 2.5 2 4.7 3.2 6.1-5 0.9-8.4 3.5-10.7 4.5-4.7 2.1-4.7 4.4-4.7 4.4v7.6h23.7c1.5-5.1 5-9.4 9.7-11.9z"/>
		<path d="m62.8 70.5c-4.3 0-7.7-3.5-7.7-7.8 0-4.3 3.4-7.8 7.7-7.8 4.3 0 7.8 3.5 7.8 7.8 0 2-0.8 4-2.3 5.5-1.4 1.4-3.4 2.3-5.5 2.3z m17.2-6v-3.8l-0.5-0.2-4.2-1.3-1.1-2.7 2.1-4.5-2.8-2.8-0.5 0.3-3.9 2-2.7-1.1-1.6-4.8h-4l-0.1 0.5-1.4 4.2-2.7 1.1-4.6-2.1-2.7 2.7 0.2 0.6 2 3.9-1.1 2.6-4.7 1.7v3.9l0.6 0.2 4.1 1.4 1.1 2.7-2.2 4.6 2.8 2.7 0.5-0.3 3.9-2 2.7 1.2 1.7 4.7h3.9l0.2-0.6 1.3-4.1 2.7-1.2 4.5 2.2 2.8-2.8-0.3-0.5-2-3.9 1.1-2.7 4.9-1.8z"/>
	</g>
</svg>
  );
};

addPropertyControls(custom111_icon, {
  fill: {
    type: ControlType.Color,
    title: 'Fill',
    defaultValue: '#ffffff'
  }
});
  