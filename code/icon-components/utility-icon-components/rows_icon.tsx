
import * as React from 'react';
import { addPropertyControls, ControlType } from 'framer';

export function rows_icon(props) {
  return (
    <svg height="52" width="52" viewBox="0 0 52 52" xmlns="http://www.w3.org/2000/svg" {...props}>
	<path d="m46.5 14h-41c-0.8 0-1.5-0.7-1.5-1.5v-3c0-0.8 0.7-1.5 1.5-1.5h41c0.8 0 1.5 0.7 1.5 1.5v3c0 0.8-0.7 1.5-1.5 1.5z m0 14.9h-41c-0.8 0-1.5-0.7-1.5-1.5v-3c0-0.7 0.7-1.4 1.5-1.4h41c0.8 0 1.5 0.7 1.5 1.5v3c0 0.7-0.7 1.4-1.5 1.4z m0 15.1h-41c-0.8 0-1.5-0.7-1.5-1.5v-3c0-0.8 0.7-1.5 1.5-1.5h41c0.8 0 1.5 0.7 1.5 1.5v3c0 0.8-0.7 1.5-1.5 1.5z" fill={props.fill}/>
</svg>
  );
};

addPropertyControls(rows_icon, {
  fill: {
    type: ControlType.Color,
    title: 'Fill',
    defaultValue: '#ffffff'
  }
});
  
