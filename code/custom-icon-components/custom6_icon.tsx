
import * as React from 'react';
import { addPropertyControls, ControlType } from 'framer';

export function custom6_icon(props) {
  return (
    <svg height="100" width="100" viewBox="0 0 100 100" xmlns="http://www.w3.org/2000/svg" {...props}>
	<path d="m50 76h-26c-3.1 0-5-3.4-3.4-6l26-44c1.5-2.6 5.3-2.6 6.9 0l26 44c1.6 2.7-0.4 6-3.4 6h-26.1z" fill={props.fill}/>
</svg>
  );
};

addPropertyControls(custom6_icon, {
  fill: {
    type: ControlType.Color,
    title: 'Fill',
    defaultValue: '#ffffff'
  }
});
  
