
import * as React from 'react';
import { addPropertyControls, ControlType } from 'framer';

export function home_icon(props) {
  return (
    <svg height="52" width="52" viewBox="0 0 52 52" xmlns="http://www.w3.org/2000/svg" {...props}>
	<path d="m49 27h-5v22c0 0.6-0.4 1-1 1h-10c-0.6 0-1-0.4-1-1v-17h-12v17c0 0.6-0.4 1-1 1h-10c-0.6 0-1-0.4-1-1v-22h-5c-0.4 0-0.8-0.2-0.9-0.6-0.2-0.4-0.1-0.8 0.2-1.1l23-23c0.4-0.4 1.1-0.4 1.4 0l23 23c0.3 0.3 0.3 0.7 0.2 1.1s-0.5 0.6-0.9 0.6z" fill={props.fill}/>
</svg>
  );
};

addPropertyControls(home_icon, {
  fill: {
    type: ControlType.Color,
    title: 'Fill',
    defaultValue: '#ffffff'
  }
});
  
