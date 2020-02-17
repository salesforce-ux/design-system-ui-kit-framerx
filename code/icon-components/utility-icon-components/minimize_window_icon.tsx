
import * as React from 'react';
import { addPropertyControls, ControlType } from 'framer';

export function minimize_window_icon(props) {
  return (
    <svg height="52" width="52" viewBox="0 0 52 52" xmlns="http://www.w3.org/2000/svg" {...props}>
	<path d="m50 48.5c0 0.8-0.7 1.5-1.5 1.5h-45c-0.8 0-1.5-0.7-1.5-1.5v-3c0-0.8 0.7-1.5 1.5-1.5h45c0.8 0 1.5 0.7 1.5 1.5v3z" fill={props.fill}/>
</svg>
  );
};

addPropertyControls(minimize_window_icon, {
  fill: {
    type: ControlType.Color,
    title: 'Fill',
    defaultValue: '#ffffff'
  }
});
  
