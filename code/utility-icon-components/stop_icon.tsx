
import * as React from 'react';
import { addPropertyControls, ControlType } from 'framer';

export function stop_icon(props) {
  return (
    <svg height="52" width="52" viewBox="0 0 52 52" xmlns="http://www.w3.org/2000/svg" {...props}>
	<path d="m8 8h36v36h-36v-36z" fill={props.fill}/>
</svg>
  );
};

addPropertyControls(stop_icon, {
  fill: {
    type: ControlType.Color,
    title: 'Fill',
    defaultValue: '#ffffff'
  }
});
  
