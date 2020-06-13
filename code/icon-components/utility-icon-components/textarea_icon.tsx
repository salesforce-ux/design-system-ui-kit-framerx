
import * as React from 'react';
import { addPropertyControls, ControlType } from 'framer';

export function textarea_icon(props) {
  return (
    <svg height="52" width="52" viewBox="0 0 52 52" xmlns="http://www.w3.org/2000/svg" {...props}>
	<path d="m44.8 49.5h-37.6c-2.6 0-4.7-2.1-4.7-4.7v-37.6c0-2.6 2.1-4.7 4.7-4.7h37.6c2.6 0 4.7 2.1 4.7 4.7v37.6c0 2.6-2.1 4.7-4.7 4.7z m-36-39.2v31.3c0 0.9 0.7 1.6 1.6 1.6h31.3c0.9 0 1.6-0.7 1.6-1.6v-31.3c0-0.9-0.7-1.6-1.6-1.6h-31.3c-0.9 0.1-1.6 0.8-1.6 1.6z m26.5 16.7c0.8 0 1.6 0.7 1.6 1.6v6.8c0 0.9-0.7 1.6-1.6 1.6h-7.2c-0.9 0-1.5-0.7-1.6-1.6 0-0.6 0.3-1 0.6-1.4l1.5-1.5c1-1 2.1-1.9 3.1-2.8 0.7-0.7 1.4-1.3 2.2-2 0.2-0.2 0.4-0.4 0.6-0.5 0.4-0.2 0.6-0.2 0.8-0.2z" fill={props.fill}/>
</svg>
  );
};

addPropertyControls(textarea_icon, {
  fill: {
    type: ControlType.Color,
    title: 'Fill',
    defaultValue: '#ffffff'
  }
});
  
