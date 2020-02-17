
import * as React from 'react';
import { addPropertyControls, ControlType } from 'framer';

export function phone_landscape_icon(props) {
  return (
    <svg height="52" width="52" viewBox="0 0 52 52" xmlns="http://www.w3.org/2000/svg" {...props}>
	<path d="m52 13c0-2.2-1.8-4-4-4h-44c-2.2 0-4 1.8-4 4v26c0 2.2 1.8 4 4 4h44c2.2 0 4-1.8 4-4v-26z m-47 16c-1.7 0-3-1.3-3-3s1.3-3 3-3 3 1.3 3 3-1.3 3-3 3z m39 6.5c0 0.8-0.7 1.5-1.5 1.5h-31c-0.8 0-1.5-0.7-1.5-1.5v-19c0-0.8 0.7-1.5 1.5-1.5h31c0.8 0 1.5 0.7 1.5 1.5v19z" fill={props.fill}/>
</svg>
  );
};

addPropertyControls(phone_landscape_icon, {
  fill: {
    type: ControlType.Color,
    title: 'Fill',
    defaultValue: '#ffffff'
  }
});
  
