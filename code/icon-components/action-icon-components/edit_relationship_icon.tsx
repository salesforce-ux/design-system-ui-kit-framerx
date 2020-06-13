
import * as React from 'react';
import { addPropertyControls, ControlType } from 'framer';

export function edit_relationship_icon(props) {
  return (
    <svg height="52" width="52" viewBox="0 0 52 52" xmlns="http://www.w3.org/2000/svg" {...props}>
	<path d="m43 42h-3v-6h3c0.6 0 1-0.4 1-1v-26c0-0.6-0.4-1-1-1h-26c-0.6 0-1 0.4-1 1v3h-6v-3c0-3.9 3.1-7 7-7h26c3.9 0 7 3.1 7 7v26c0 3.9-3.1 7-7 7z m-11-26h-26c-2.2 0-4 1.8-4 4v26c0 2.2 1.8 4 4 4h26c2.2 0 4-1.8 4-4v-26c0-2.2-1.8-4-4-4z m-17.2 25.5c-0.2 0.2-0.3 0.2-0.5 0.3l-4.5 1.1c-0.4 0.1-0.8-0.3-0.7-0.7l1.1-4.5c0-0.1 0.1-0.2 0.2-0.4l0.1-0.1c0.1-0.1 0.4-0.1 0.5 0l3.7 3.7c0.2 0.3 0.2 0.6 0.1 0.6z m10.9-11l-9.2 9.3c-0.2 0.2-0.4 0.2-0.6 0l-3.7-3.7c-0.2-0.1-0.2-0.4 0-0.5l9.3-9.3c0.2-0.2 0.4-0.2 0.6 0l3.7 3.7c0 0.1 0 0.3-0.1 0.5z m2.8-2.8l-1 1c-0.2 0.2-0.4 0.2-0.6 0l-3.7-3.7c-0.2-0.2-0.2-0.4 0-0.6l1-1c0.7-0.7 1.7-0.7 2.4 0l2 2c0.6 0.7 0.6 1.7-0.1 2.3z" fill={props.fill}/>
</svg>
  );
};

addPropertyControls(edit_relationship_icon, {
  fill: {
    type: ControlType.Color,
    title: 'Fill',
    defaultValue: '#ffffff'
  }
});
  
