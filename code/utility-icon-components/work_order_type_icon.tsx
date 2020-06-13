
import * as React from 'react';
import { addPropertyControls, ControlType } from 'framer';

export function work_order_type_icon(props) {
  return (
    <svg height="52" width="52" viewBox="0 0 52 52" xmlns="http://www.w3.org/2000/svg" {...props}>
	<path d="m39.3 26.9c0 1-0.9 1.9-1.9 1.9h-22.8c-1 0-1.9-0.9-1.9-1.9v-1.9c0-1 0.9-1.9 1.9-1.9h22.9c1 0 1.9 0.9 1.9 1.9v1.9h-0.1z m-3.8 11.4c0 1-0.9 1.9-1.9 1.9h-19c-1 0-1.9-0.9-1.9-1.9v-1.9c0-1 0.9-1.9 1.9-1.9h19.1c1 0 1.9 0.9 1.9 1.9v1.9h-0.1z m-22.8-24.8c0-1 0.9-1.9 1.9-1.9h19.1c1 0 1.9 0.9 1.9 1.9v1.9c0 1-0.9 1.9-1.9 1.9h-19.1c-1 0-1.9-0.9-1.9-1.9v-1.9z m28.5-9.5h-30.4c-3.2 0-5.8 2.6-5.8 5.7v32.4c0 3.1 2.6 5.7 5.7 5.7h30.5c3.1 0 5.7-2.6 5.7-5.7v-32.4c0.1-3.1-2.5-5.7-5.7-5.7z" fill={props.fill}/>
</svg>
  );
};

addPropertyControls(work_order_type_icon, {
  fill: {
    type: ControlType.Color,
    title: 'Fill',
    defaultValue: '#ffffff'
  }
});
  
