
import * as React from 'react';
import { addPropertyControls, ControlType } from 'framer';

export function new_icon(props) {
  return (
    <svg height="52" width="52" viewBox="0 0 52 52" xmlns="http://www.w3.org/2000/svg" {...props}>
	<path d="m43 9c-9.4-9.3-24.6-9.3-34 0-9.3 9.4-9.3 24.6 0 34 9.4 9.4 24.6 9.4 33.9 0 9.4-9.4 9.4-24.6 0.1-34z m-1 19c0 0.6-0.4 1-1 1h-11c-0.5 0-1 0.5-1 1v11c0 0.5-0.5 1-1 1h-4c-0.6 0-1-0.4-1-1v-11c0-0.6-0.4-1-1-1h-11c-0.6 0-1-0.4-1-1v-4c0-0.5 0.5-1 1-1h11c0.6 0 1-0.4 1-1v-11c0-0.5 0.5-1 1-1h4c0.5 0 1 0.4 1 1v11c0 0.6 0.4 1 1 1h11c0.5 0 1 0.5 1 1v4z" fill={props.fill}/>
</svg>
  );
};

addPropertyControls(new_icon, {
  fill: {
    type: ControlType.Color,
    title: 'Fill',
    defaultValue: '#ffffff'
  }
});
  
