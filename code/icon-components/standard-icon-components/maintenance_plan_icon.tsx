
import * as React from 'react';
import { addPropertyControls, ControlType } from 'framer';

export function maintenance_plan_icon(props) {
  return (
    <svg height="100" width="100" viewBox="0 0 100 100" xmlns="http://www.w3.org/2000/svg" {...props}>
	<title/>
	<path d="m65.7 34h7.9c0.9 0 1.7-0.8 1.7-1.7 0-0.4-0.2-0.9-0.5-1.2l-11.3-11.1c-0.3-0.3-0.7-0.5-1.1-0.5-0.9 0-1.7 0.8-1.7 1.7v7.9c0.2 2.7 2.3 4.8 5 4.9z m7 7h-12.2c-4 0-7.2-3.2-7.3-7.2v-12c0.1-1.2-0.8-2.2-2-2.3h-19.6c-4 0-7.2 3.2-7.3 7.2v45.7c0 4 3.3 7.2 7.3 7.2h36.2c4 0 7.2-3.2 7.3-7.2v-28.9c0.1-1.3-1-2.5-2.4-2.5z m-6.9 30.8c-0.8 0.8-1.8 1.2-3 1.2-1.1 0-2.2-0.4-3-1.2l-13.8-13.8c-0.9 0.4-1.8 0.6-2.8 0.7-5.8 0.7-11-3.5-11.7-9.3-0.2-1.5 0-3 0.4-4.4 0.1-0.4 0.6-0.5 1-0.2l6 6c0.4 0.5 1.2 0.5 1.6 0.1 0 0 0.1 0 0.1-0.1l4.2-4.2c0.5-0.4 0.5-1.2 0.1-1.6 0 0 0-0.1-0.1-0.1l-6-6c-0.2-0.2-0.2-0.6 0-0.9 0.1-0.1 0.1-0.1 0.2-0.1 1-0.2 2.1-0.4 3.1-0.4 5.9 0 10.6 4.7 10.7 10.6 0 0.4 0 0.8-0.1 1.2-0.1 1-0.4 1.9-0.7 2.8l13.8 13.9c1.6 1.6 1.6 4.2 0 5.8z" fill={props.fill}/>
</svg>
  );
};

addPropertyControls(maintenance_plan_icon, {
  fill: {
    type: ControlType.Color,
    title: 'Fill',
    defaultValue: '#ffffff'
  }
});
  
