
import * as React from 'react';
import { addPropertyControls, ControlType } from 'framer';

export function custom24_icon(props) {
  return (
    <svg height="100" width="100" viewBox="0 0 100 100" xmlns="http://www.w3.org/2000/svg" {...props}>
	<g fill={props.fill}>
		<path d="m68.1 20h-36.2c-3.3 0-5.9 2.7-5.9 5.9v0.1c0 1.1 0.9 2 2 2h44c1.1 0 2-0.9 2-2v-0.1c0-3.2-2.7-5.9-5.9-5.9z m-0.1 14h-36c-1.1 0-2 0.9-2 2v42c0 1.1 0.9 2 2 2h11.1c1.1 0 1.9-0.9 1.9-2v-8c0-1.1 1-2 2.1-2h5.8c1.1 0 2.1 0.9 2.1 2v8c0 1.1 0.8 2 1.9 2h11.1c1.1 0 2-0.9 2-2v-42c0-1.1-0.9-2-2-2z m-21 27c0 1.1-0.9 2-2 2h-4c-1.1 0-2-0.9-2-2v-4c0-1.1 0.9-2 2-2h4c1.1 0 2 0.9 2 2v4z m0-14c0 1.1-0.9 2-2 2h-4c-1.1 0-2-0.9-2-2v-4c0-1.1 0.9-2 2-2h4c1.1 0 2 0.9 2 2v4z m14 14c0 1.1-0.9 2-2 2h-4c-1.1 0-2-0.9-2-2v-4c0-1.1 0.9-2 2-2h4c1.1 0 2 0.9 2 2v4z m0-14c0 1.1-0.9 2-2 2h-4c-1.1 0-2-0.9-2-2v-4c0-1.1 0.9-2 2-2h4c1.1 0 2 0.9 2 2v4z"/>
	</g>
</svg>
  );
};

addPropertyControls(custom24_icon, {
  fill: {
    type: ControlType.Color,
    title: 'Fill',
    defaultValue: '#ffffff'
  }
});
  