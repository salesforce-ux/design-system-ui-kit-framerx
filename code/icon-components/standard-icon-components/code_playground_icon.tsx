
import * as React from 'react';
import { addPropertyControls, ControlType } from 'framer';

export function code_playground_icon(props) {
  return (
    <svg height="100" width="100" viewBox="0 0 100 100" xmlns="http://www.w3.org/2000/svg" {...props}>
	<path d="m73.8 20h-47.6c-3.4 0-6.2 2.8-6.2 6.2v47.6c0 3.4 2.8 6.2 6.2 6.2h47.6c3.4 0 6.2-2.8 6.2-6.2v-47.6c0-3.4-2.8-6.2-6.2-6.2z m-45.5 6.2h43.4c1.1 0 2.1 0.9 2.1 2.1v3.9h-47.6v-3.9c0-1.2 0.9-2.1 2.1-2.1z m43.4 47.6h-43.4c-1.1 0-2.1-0.9-2.1-2.1v-33.5h47.6v33.5c0 1.2-0.9 2.1-2.1 2.1z m-25-10.5l-6.6-6.6 6.6-6.6c0.4-0.4 0.4-1 0-1.4l-2.8-2.8c-0.4-0.4-1-0.4-1.4 0l-7.3 7.3-1.5 1.5-1.3 1.3c-0.2 0.2-0.3 0.5-0.3 0.7 0 0.3 0.1 0.5 0.3 0.7l10.2 10.2c0.4 0.4 1 0.4 1.4 0l2.8-2.8c0.3-0.5 0.3-1.1-0.1-1.5z m21-7.4l-1.3-1.3-1.5-1.5-7.3-7.3c-0.4-0.4-1-0.4-1.4 0l-2.8 2.8c-0.4 0.4-0.4 1 0 1.4l6.6 6.6-6.6 6.6c-0.4 0.4-0.4 1 0 1.4l2.8 2.8c0.4 0.4 1 0.4 1.4 0l10.2-10.2c0.2-0.2 0.3-0.5 0.3-0.7-0.1-0.1-0.2-0.4-0.4-0.6z" fill={props.fill}/>
</svg>
  );
};

addPropertyControls(code_playground_icon, {
  fill: {
    type: ControlType.Color,
    title: 'Fill',
    defaultValue: '#ffffff'
  }
});
  
