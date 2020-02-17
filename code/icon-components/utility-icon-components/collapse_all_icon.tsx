
import * as React from 'react';
import { addPropertyControls, ControlType } from 'framer';

export function collapse_all_icon(props) {
  return (
    <svg height="52" width="52" viewBox="0 0 52 52" xmlns="http://www.w3.org/2000/svg" {...props}>
	<path d="m48 9.5c0-0.8-0.7-1.5-1.5-1.5h-41c-0.8 0-1.5 0.7-1.5 1.5v3c0 0.8 0.7 1.5 1.5 1.5h41c0.8 0 1.5-0.7 1.5-1.5v-3z m0 30c0-0.8-0.7-1.5-1.5-1.5h-41c-0.8 0-1.5 0.7-1.5 1.5v3c0 0.8 0.7 1.5 1.5 1.5h41c0.8 0 1.5-0.7 1.5-1.5v-3z m-13.5-10.5c0.8 0 1.5-0.7 1.5-1.5v-3c0-0.8-0.7-1.5-1.5-1.5h-17c-0.8 0-1.5 0.7-1.5 1.5v3c0 0.8 0.7 1.5 1.5 1.5h17z" fill={props.fill}/>
</svg>
  );
};

addPropertyControls(collapse_all_icon, {
  fill: {
    type: ControlType.Color,
    title: 'Fill',
    defaultValue: '#ffffff'
  }
});
  
