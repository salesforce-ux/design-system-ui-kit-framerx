
import * as React from 'react';
import { addPropertyControls, ControlType } from 'framer';

export function knowledge_icon(props) {
  return (
    <svg height="100" width="100" viewBox="0 0 100 100" xmlns="http://www.w3.org/2000/svg" {...props}>
	<path d="m32 59h13c1.1 0 2-0.9 2-2v-30c0-2.2-2-4-4-4h-10.7c-1.3 0-2.3 1-2.3 2.3v31.7c0 1.1 0.9 2 2 2z m44-30v32c0 2.2-1.8 4-4 4h-44c-2.2 0-4-1.8-4-4v-32c-3.3 0-6 2.7-6 6v30c0 3.3 2.7 6 6 6h19c1.1 0 2 0.9 2 2s0.9 2 2 2h6c1.1 0 2-0.9 2-2s0.9-2 2-2h19c3.3 0 6-2.7 6-6v-30c0-3.3-2.7-6-6-6z m-21 30h12.7c1.3 0 2.3-1 2.3-2.3v-31.7c0-1.1-0.9-2-2-2h-11c-2 0-4 1.8-4 4v30c0 1.1 0.9 2 2 2z" fill={props.fill}/>
</svg>
  );
};

addPropertyControls(knowledge_icon, {
  fill: {
    type: ControlType.Color,
    title: 'Fill',
    defaultValue: '#ffffff'
  }
});
  
