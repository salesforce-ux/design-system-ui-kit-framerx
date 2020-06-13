
import * as React from 'react';
import { addPropertyControls, ControlType } from 'framer';

export function new_custom11_icon(props) {
  return (
    <svg height="52" width="52" viewBox="0 0 52 52" xmlns="http://www.w3.org/2000/svg" {...props}>
	<path d="m27.8 3.1l6.4 13.5 14.2 2.2c1.6 0.2 2.2 2.3 1 3.4l-10.3 10.6 2.4 14.8c0.2 1.7-1.4 3-2.8 2.2l-12.7-7-12.7 7c-1.4 0.8-3.1-0.5-2.8-2.2l2.4-14.8-10.3-10.6c-1.1-1.2-0.5-3.2 1-3.4l14.2-2.2 6.4-13.5c0.8-1.5 2.9-1.5 3.6 0z" fill={props.fill}/>
</svg>
  );
};

addPropertyControls(new_custom11_icon, {
  fill: {
    type: ControlType.Color,
    title: 'Fill',
    defaultValue: '#ffffff'
  }
});
  
