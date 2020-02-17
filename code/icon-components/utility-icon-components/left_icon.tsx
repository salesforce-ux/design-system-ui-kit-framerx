
import * as React from 'react';
import { addPropertyControls, ControlType } from 'framer';

export function left_icon(props) {
  return (
    <svg height="52" width="52" viewBox="0 0 52 52" xmlns="http://www.w3.org/2000/svg" {...props}>
	<path d="m38 8.3v35.4c0 1-1.3 1.7-2.2 0.9l-21.2-17.3c-0.8-0.6-0.8-1.9 0-2.5l21.2-17.5c0.9-0.7 2.2-0.1 2.2 1z" fill={props.fill}/>
</svg>
  );
};

addPropertyControls(left_icon, {
  fill: {
    type: ControlType.Color,
    title: 'Fill',
    defaultValue: '#ffffff'
  }
});
  
