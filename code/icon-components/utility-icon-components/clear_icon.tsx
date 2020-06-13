
import * as React from 'react';
import { addPropertyControls, ControlType } from 'framer';

export function clear_icon(props) {
  return (
    <svg height="52" width="52" viewBox="0 0 52 52" xmlns="http://www.w3.org/2000/svg" {...props}>
	<path d="m26 2c-13.3 0-24 10.7-24 24s10.7 24 24 24 24-10.7 24-24-10.7-24-24-24z m4.9 24.8l7.8 7.8c0.4 0.4 0.4 1 0 1.4l-2.8 2.8c-0.4 0.4-1 0.4-1.4 0l-7.8-7.8c-0.4-0.4-1-0.4-1.4 0l-7.8 7.8c-0.4 0.4-1 0.4-1.4 0l-2.8-2.8c-0.4-0.4-0.4-1 0-1.4l7.8-7.8c0.4-0.4 0.4-1 0-1.4l-7.9-7.9c-0.4-0.4-0.4-1 0-1.4l2.8-2.8c0.4-0.4 1-0.4 1.4 0l7.9 7.9c0.4 0.4 1 0.4 1.4 0l7.8-7.8c0.4-0.4 1-0.4 1.4 0l2.8 2.8c0.4 0.4 0.4 1 0 1.4l-7.8 7.8c-0.3 0.4-0.3 1 0 1.4z" fill={props.fill}/>
</svg>
  );
};

addPropertyControls(clear_icon, {
  fill: {
    type: ControlType.Color,
    title: 'Fill',
    defaultValue: '#ffffff'
  }
});
  
