
import * as React from 'react';
import { addPropertyControls, ControlType } from 'framer';

export function skip_icon(props) {
  return (
    <svg height="52" width="52" viewBox="0 0 52 52" xmlns="http://www.w3.org/2000/svg" {...props}>
	<path d="m39.5 32.3v0.7c0 1 0.7 1 1.3 0.4l4.9-4.9c0.5-0.6 1.5-0.6 2.1 0l2.1 2.1c0.6 0.5 0.6 1.5 0 2.1l-12.9 12.9c-0.5 0.5-1.3 0.5-1.8 0l-13-13c-0.5-0.6-0.5-1.3 0.1-1.9l2.2-2.2c0.6-0.6 1.5-0.7 2.1-0.1l4.9 4.9c0.7 0.7 1.3 0.9 1.7 0.1 0.1-0.3 0.1-1.1 0.1-1.1v-7.3c0-7.1-5.7-12.8-12.8-12.8s-12.8 5.6-12.8 12.7v13.3c0 0.8-0.7 1.4-1.5 1.4h-3.2c-0.8 0-1.4-0.5-1.4-1.3v-13.4c0-10.4 8.4-18.9 18.9-18.9s18.9 8.5 18.9 18.9l0.1 7.4z" fill={props.fill}/>
</svg>
  );
};

addPropertyControls(skip_icon, {
  fill: {
    type: ControlType.Color,
    title: 'Fill',
    defaultValue: '#ffffff'
  }
});
  
