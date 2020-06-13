
import * as React from 'react';
import { addPropertyControls, ControlType } from 'framer';

export function new_custom99_icon(props) {
  return (
    <svg height="52" width="52" viewBox="0 0 52 52" xmlns="http://www.w3.org/2000/svg" {...props}>
	<path d="m45.2 16.6h-13.4c-0.4-0.9-1-1.7-1.7-2.4l5-6.4c0.8-1 0.6-2.5-0.4-3.3-1-0.8-2.6-0.6-3.4 0.4l-5.5 7.1c-0.5 0-0.9-0.1-1.4-0.1-0.5 0-0.9 0.1-1.3 0.1l-5.6-7.1c-0.8-1-2.3-1.2-3.4-0.4s-1.1 2.3-0.3 3.3l5 6.4c-0.7 0.7-1.3 1.5-1.7 2.4h-10.3c-2.6 0-4.8 2.1-4.8 4.7v22c0 2.6 2.2 4.7 4.8 4.7h38.4c2.6 0 4.8-2.1 4.8-4.7v-22c0-2.6-2.2-4.7-4.8-4.7z m-6.4 25.1c0 0.9-0.7 1.6-1.6 1.6h-28.8c-0.9 0-1.6-0.7-1.6-1.6v-18.8c0-0.9 0.7-1.6 1.6-1.6h28.8c0.9 0 1.6 0.7 1.6 1.6v18.8z m5.6-7.8c-1.4 0-2.4-1-2.4-2.4s1-2.4 2.4-2.4 2.4 1 2.4 2.4-1 2.4-2.4 2.4z m0-7.9c-1.4 0-2.4-1-2.4-2.3 0-1.3 1-2.4 2.4-2.4s2.4 1 2.4 2.4c0 1.3-1 2.3-2.4 2.3z" fill={props.fill}/>
</svg>
  );
};

addPropertyControls(new_custom99_icon, {
  fill: {
    type: ControlType.Color,
    title: 'Fill',
    defaultValue: '#ffffff'
  }
});
  
