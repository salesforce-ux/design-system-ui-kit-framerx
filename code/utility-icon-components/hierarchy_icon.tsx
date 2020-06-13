
import * as React from 'react';
import { addPropertyControls, ControlType } from 'framer';

export function hierarchy_icon(props) {
  return (
    <svg height="52" width="52" viewBox="0 0 52 52" xmlns="http://www.w3.org/2000/svg" {...props}>
	<title/>
	<path d="m23.1 23h-12.3c-0.7 0-1.4 0.6-1.4 1.3v10.5h-4.1c-0.7 0-1.4 0.7-1.4 1.4v10c0 0.7 0.7 1.4 1.4 1.4h13.7c0.7 0 1.4-0.7 1.4-1.4v-10c0-0.7-0.7-1.4-1.4-1.4h-4.1v-6.4h21.9v6.4h-4.1c-0.7 0-1.4 0.7-1.4 1.4v10c0 0.7 0.7 1.4 1.4 1.4h13.7c0.7 0 1.3-0.7 1.3-1.4v-10c0-0.7-0.6-1.4-1.3-1.4h-4.2v-10.5c0-0.7-0.7-1.3-1.4-1.3h-12.2v-6.4h4.1c0.7 0 1.3-0.7 1.3-1.4v-10c0-0.7-0.6-1.4-1.3-1.4h-13.7c-0.7 0-1.4 0.7-1.4 1.4v10c0 0.7 0.7 1.4 1.4 1.4h4.2v6.4z" fill={props.fill}/>
</svg>
  );
};

addPropertyControls(hierarchy_icon, {
  fill: {
    type: ControlType.Color,
    title: 'Fill',
    defaultValue: '#ffffff'
  }
});
  
