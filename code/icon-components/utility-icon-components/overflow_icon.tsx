
import * as React from 'react';
import { addPropertyControls, ControlType } from 'framer';

export function overflow_icon(props) {
  return (
    <svg height="52" width="52" viewBox="0 0 52 52" xmlns="http://www.w3.org/2000/svg" {...props}>
	<path d="m37.3 9.9h-21.5c-2.1 0-3.7 1.7-3.7 3.7v0.6c0 0.3 0.3 0.6 0.6 0.6h19.6c2.1 0 3.7 1.7 3.7 3.7v22.1c0 0.3 0.3 0.6 0.6 0.6h0.6c2.1 0 3.7-1.7 3.7-3.7v-23.9c0.1-2-1.6-3.7-3.6-3.7z m8-7.9h-21.5c-2.1 0-3.7 1.7-3.7 3.7v0.6c0 0.3 0.3 0.6 0.6 0.6h19.6c2.1 0 3.7 1.7 3.7 3.7v22.1c0 0.3 0.3 0.6 0.6 0.6h0.6c2.1 0 3.7-1.7 3.7-3.7v-23.9c0.1-2-1.6-3.7-3.6-3.7z m-12.7 19.8c0-2-1.7-3.7-3.7-3.7h-22.2c-2.1 0-3.7 1.7-3.7 3.7v24.5c0 2 1.7 3.7 3.7 3.7h22.2c2.1 0 3.7-1.7 3.7-3.7v-24.5z" fill={props.fill}/>
</svg>
  );
};

addPropertyControls(overflow_icon, {
  fill: {
    type: ControlType.Color,
    title: 'Fill',
    defaultValue: '#ffffff'
  }
});
  
