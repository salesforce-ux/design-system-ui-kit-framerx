
import * as React from 'react';
import { addPropertyControls, ControlType } from 'framer';

export function event_icon(props) {
  return (
    <svg height="100" width="100" viewBox="0 0 100 100" xmlns="http://www.w3.org/2000/svg" {...props}>
	<path d="m76 42h-52c-1.1 0-2 0.9-2 2v30c0 3.3 2.7 6 6 6h44c3.3 0 6-2.7 6-6v-30c0-1.1-0.9-2-2-2z m-36 28c0 1.1-0.9 2-2 2h-4c-1.1 0-2-0.9-2-2v-4c0-1.1 0.9-2 2-2h4c1.1 0 2 0.9 2 2v4z m0-14c0 1.1-0.9 2-2 2h-4c-1.1 0-2-0.9-2-2v-4c0-1.1 0.9-2 2-2h4c1.1 0 2 0.9 2 2v4z m14 14c0 1.1-0.9 2-2 2h-4c-1.1 0-2-0.9-2-2v-4c0-1.1 0.9-2 2-2h4c1.1 0 2 0.9 2 2v4z m0-14c0 1.1-0.9 2-2 2h-4c-1.1 0-2-0.9-2-2v-4c0-1.1 0.9-2 2-2h4c1.1 0 2 0.9 2 2v4z m14 14c0 1.1-0.9 2-2 2h-4c-1.1 0-2-0.9-2-2v-4c0-1.1 0.9-2 2-2h4c1.1 0 2 0.9 2 2v4z m0-14c0 1.1-0.9 2-2 2h-4c-1.1 0-2-0.9-2-2v-4c0-1.1 0.9-2 2-2h4c1.1 0 2 0.9 2 2v4z m4-30h-5v-2c0-2.2-1.8-4-4-4s-4 1.8-4 4v2h-18v-2c0-2.2-1.8-4-4-4s-4 1.8-4 4v2h-5c-3.3 0-6 2.7-6 6v2c0 1.1 0.9 2 2 2h52c1.1 0 2-0.9 2-2v-2c0-3.3-2.7-6-6-6z" fill={props.fill}/>
</svg>
  );
};

addPropertyControls(event_icon, {
  fill: {
    type: ControlType.Color,
    title: 'Fill',
    defaultValue: '#ffffff'
  }
});
  
