
import * as React from 'react';
import { addPropertyControls, ControlType } from 'framer';

export function note_icon(props) {
  return (
    <svg height="100" width="100" viewBox="0 0 100 100" xmlns="http://www.w3.org/2000/svg" {...props}>
	<g fill={props.fill}>
		<path d="m71.3 67l-1.1 1.1c-1.2 1.2-2.9 1.9-4.6 1.9h-3.3c-3 0-6.3-2.3-6.3-6.5v-3.1c0-2.5 1.1-4 1.8-4.8l13.5-13.6c0.4-0.4 0.7-1.2 0.7-1.7v-10.3c0-3.3-2.7-6-6-6h-32c-3.3 0-6 3-6 6h-2c-2.2 0-4 1.8-4 4s1.8 4 4 4h2v8h-2c-2.2 0-4 1.8-4 4s1.8 4 4 4h2v8h-2c-2.2 0-4 1.8-4 4s1.8 4 4 4h2c0 4 2.7 6 6 6h32c3.3 0 6-2.7 6-6v-2.7c0-0.6-0.3-0.7-0.7-0.3z m-10.3-28c0 1.1-0.9 2-2 2h-20c-1.1 0-2-0.9-2-2v-2c0-1.1 0.9-2 2-2h20c1.1 0 2 0.9 2 2v2z m-9 24c0 1.1-0.9 2-2 2h-11c-1.1 0-2-0.9-2-2v-2c0-1.1 0.9-2 2-2h11c1.1 0 2 0.9 2 2v2z m3-12c0 1.1-0.9 2-2 2h-14c-1.1 0-2-0.9-2-2v-2c0-1.1 0.9-2 2-2h14c1.1 0 2 0.9 2 2v2z m26.4-5.4l-1.2-1.2c-0.8-0.8-2-0.8-2.8 0l-15.3 15.5c-0.1 0-0.1 0.2-0.1 0.3v3.3c0 0.3 0 0.5 0.3 0.5h3.3c0.1 0 0.3-0.1 0.4-0.1l15.4-15.4c0.8-0.9 0.8-2.1 0-2.9z"/>
	</g>
</svg>
  );
};

addPropertyControls(note_icon, {
  fill: {
    type: ControlType.Color,
    title: 'Fill',
    defaultValue: '#ffffff'
  }
});
  
