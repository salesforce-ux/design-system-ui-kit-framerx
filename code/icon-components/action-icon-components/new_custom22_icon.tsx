
import * as React from 'react';
import { addPropertyControls, ControlType } from 'framer';

export function new_custom22_icon(props) {
  return (
    <svg height="52" width="52" viewBox="0 0 52 52" xmlns="http://www.w3.org/2000/svg" {...props}>
	<path d="m48.1 37.1l-5-4c-1.7-1.4-4.1-1.4-5.8-0.2l-4.7 3.4c-0.6 0.5-1.5 0.4-2.1-0.2l-7.8-7-7.1-7.8c-0.6-0.6-0.6-1.4-0.2-2.1l3.4-4.7c1.3-1.8 1.2-4.2-0.2-5.8l-4-5c-1.6-2.2-4.9-2.4-6.9-0.4l-4.3 4.4c-1 1-1.4 2.3-1.4 3.6 0.6 10.2 5.2 19.9 12 26.7s16.4 11.4 26.6 12c1.4 0.1 2.6-0.5 3.6-1.4l4.3-4.3c2.1-2.1 1.9-5.4-0.4-7.2z" fill={props.fill}/>
</svg>
  );
};

addPropertyControls(new_custom22_icon, {
  fill: {
    type: ControlType.Color,
    title: 'Fill',
    defaultValue: '#ffffff'
  }
});
  
