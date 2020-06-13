
import * as React from 'react';
import { addPropertyControls, ControlType } from 'framer';

export function phone_portrait_icon(props) {
  return (
    <svg height="52" width="52" viewBox="0 0 52 52" xmlns="http://www.w3.org/2000/svg" {...props}>
	<path d="m43 4c0-2.2-1.8-4-4-4h-26c-2.2 0-4 1.8-4 4v44c0 2.2 1.8 4 4 4h26c2.2 0 4-1.8 4-4v-44z m-17 46c-1.7 0-3-1.3-3-3s1.3-3 3-3 3 1.3 3 3-1.3 3-3 3z m11-9.5c0 0.8-0.7 1.5-1.5 1.5h-19c-0.8 0-1.5-0.7-1.5-1.5v-31c0-0.8 0.7-1.5 1.5-1.5h19c0.8 0 1.5 0.7 1.5 1.5v31z" fill={props.fill}/>
</svg>
  );
};

addPropertyControls(phone_portrait_icon, {
  fill: {
    type: ControlType.Color,
    title: 'Fill',
    defaultValue: '#ffffff'
  }
});
  
