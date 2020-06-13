
import * as React from 'react';
import { addPropertyControls, ControlType } from 'framer';

export function description_icon(props) {
  return (
    <svg height="52" width="52" viewBox="0 0 52 52" xmlns="http://www.w3.org/2000/svg" {...props}>
	<path d="m44 4h-36c-2.2 0-4 1.8-4 4v36c0 2.2 1.8 4 4 4h36c2.2 0 4-1.8 4-4v-36c0-2.2-1.8-4-4-4z m-32 10c0-0.6 0.4-1 1-1h10c0.6 0 1 0.4 1 1v10c0 0.6-0.4 1-1 1h-10c-0.6 0-1-0.4-1-1v-10z m24 26c0 0.6-0.4 1-1 1h-22c-0.6 0-1-0.4-1-1v-2c0-0.6 0.4-1 1-1h22c0.6 0 1 0.4 1 1v2z m4-8c0 0.6-0.4 1-1 1h-26c-0.6 0-1-0.4-1-1v-2c0-0.6 0.4-1 1-1h26c0.6 0 1 0.4 1 1v2z m0-8c0 0.6-0.4 1-1 1h-10c-0.6 0-1-0.4-1-1v-2c0-0.6 0.4-1 1-1h10c0.6 0 1 0.4 1 1v2z m0-8c0 0.6-0.4 1-1 1h-10c-0.6 0-1-0.4-1-1v-2c0-0.6 0.4-1 1-1h10c0.6 0 1 0.4 1 1v2z" fill={props.fill}/>
</svg>
  );
};

addPropertyControls(description_icon, {
  fill: {
    type: ControlType.Color,
    title: 'Fill',
    defaultValue: '#ffffff'
  }
});
  
