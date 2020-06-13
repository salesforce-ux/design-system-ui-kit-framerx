
import * as React from 'react';
import { addPropertyControls, ControlType } from 'framer';

export function waits_icon(props) {
  return (
    <svg height="52" width="52" viewBox="0 0 52 52" xmlns="http://www.w3.org/2000/svg" {...props}>
	<path d="m50 18.4c0-0.8-0.7-1.5-1.5-1.5h-21c-0.8 0-1.5 0.7-1.5 1.5v3c0 0.8 0.7 1.5 1.5 1.5h14.3l-15.5 18.9v0.1c-0.2 0.2-0.3 0.5-0.3 0.8v3c0 0.8 0.7 1.5 1.5 1.5h21c0.8 0 1.5-0.7 1.5-1.5v-3c0-0.8-0.7-1.5-1.5-1.5h-14l15.2-18.6c0.2-0.3 0.3-0.7 0.3-1v-3.2z m-24-12.1c0-0.8-0.7-1.5-1.5-1.5h-21c-0.8 0-1.5 0.7-1.5 1.5v3c0 0.8 0.7 1.5 1.5 1.5h14.3l-15.5 18.9v0.1c-0.2 0.2-0.3 0.5-0.3 0.8v3c0 0.8 0.7 1.5 1.5 1.5h21c0.8 0 1.5-0.7 1.5-1.5v-3c0-0.8-0.7-1.5-1.5-1.5h-14l15.2-18.6c0.2-0.3 0.3-0.7 0.3-1v-3.2z" fill={props.fill}/>
</svg>
  );
};

addPropertyControls(waits_icon, {
  fill: {
    type: ControlType.Color,
    title: 'Fill',
    defaultValue: '#ffffff'
  }
});
  
