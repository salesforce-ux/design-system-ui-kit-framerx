
import * as React from 'react';
import { addPropertyControls, ControlType } from 'framer';

export function forward_icon(props) {
  return (
    <svg height="52" width="52" viewBox="0 0 52 52" xmlns="http://www.w3.org/2000/svg" {...props}>
	<path d="m3.4 29h33.2c0.9 0 1.3 1.1 0.7 1.7l-9.6 9.6c-0.6 0.6-0.6 1.5 0 2.1l2.2 2.2c0.6 0.6 1.5 0.6 2.1 0l17.5-17.6c0.6-0.6 0.6-1.5 0-2.1l-17.5-17.5c-0.6-0.6-1.5-0.6-2.1 0l-2.1 2.1c-0.6 0.6-0.6 1.5 0 2.1l9.6 9.6c0.6 0.7 0.2 1.8-0.7 1.8h-33.2c-0.8 0-1.5 0.6-1.5 1.4v3c0 0.8 0.6 1.6 1.4 1.6z" fill={props.fill}/>
</svg>
  );
};

addPropertyControls(forward_icon, {
  fill: {
    type: ControlType.Color,
    title: 'Fill',
    defaultValue: '#ffffff'
  }
});
  
