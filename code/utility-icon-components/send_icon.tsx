
import * as React from 'react';
import { addPropertyControls, ControlType } from 'framer';

export function send_icon(props) {
  return (
    <svg height="52" width="52" viewBox="0 0 52 52" xmlns="http://www.w3.org/2000/svg" {...props}>
	<path d="m2.1 44.5l4.4-16.3h18.6c0.5 0 1-0.5 1-1v-2c0-0.5-0.5-1-1-1h-18.6l-4.3-16c-0.1-0.2-0.2-0.5-0.2-0.8 0-0.7 0.7-1.4 1.5-1.3 0.2 0 0.3 0.1 0.5 0.1l45 18.5c0.6 0.2 1 0.8 1 1.4s-0.4 1.1-0.9 1.3l-45.1 19c-0.2 0.1-0.4 0.1-0.6 0.1-0.8-0.1-1.4-0.7-1.4-1.5 0-0.2 0-0.3 0.1-0.5z" fill={props.fill}/>
</svg>
  );
};

addPropertyControls(send_icon, {
  fill: {
    type: ControlType.Color,
    title: 'Fill',
    defaultValue: '#ffffff'
  }
});
  
