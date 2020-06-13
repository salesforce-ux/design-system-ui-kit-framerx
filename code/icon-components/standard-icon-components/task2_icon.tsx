
import * as React from 'react';
import { addPropertyControls, ControlType } from 'framer';

export function task2_icon(props) {
  return (
    <svg height="100" width="100" viewBox="0 0 100 100" xmlns="http://www.w3.org/2000/svg" {...props}>
	<path d="m42.6 71c-1.2 0-2.4-0.5-3.3-1.4l-18.7-18.7c-0.8-0.8-0.8-2 0-2.8l3.7-3.7c0.8-0.8 2-0.8 2.8 0l15.5 15.4 30.3-30.3c0.8-0.8 2-0.8 2.8 0l3.7 3.7c0.8 0.8 0.8 2 0 2.8l-33.6 33.6c-0.9 0.9-2 1.4-3.2 1.4z" fill={props.fill}/>
</svg>
  );
};

addPropertyControls(task2_icon, {
  fill: {
    type: ControlType.Color,
    title: 'Fill',
    defaultValue: '#ffffff'
  }
});
  
