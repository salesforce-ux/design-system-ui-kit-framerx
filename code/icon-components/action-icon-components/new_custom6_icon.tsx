
import * as React from 'react';
import { addPropertyControls, ControlType } from 'framer';

export function new_custom6_icon(props) {
  return (
    <svg height="52" width="52" viewBox="0 0 52 52" xmlns="http://www.w3.org/2000/svg" {...props}>
	<path d="m26 47h-20.8c-2.5 0-4-2.7-2.7-4.9l20.7-35.5c1.2-2.1 4.2-2.1 5.5 0l20.8 35.6c1.3 2.2-0.3 4.9-2.7 4.9h-20.8z" fill={props.fill}/>
</svg>
  );
};

addPropertyControls(new_custom6_icon, {
  fill: {
    type: ControlType.Color,
    title: 'Fill',
    defaultValue: '#ffffff'
  }
});
  
