
import * as React from 'react';
import { addPropertyControls, ControlType } from 'framer';

export function chevronright_icon(props) {
  return (
    <svg height="52" width="52" viewBox="0 0 52 52" xmlns="http://www.w3.org/2000/svg" {...props}>
	<path d="m17.9 4.4l20.7 20.5c0.6 0.6 0.6 1.6 0 2.2l-20.7 20.5c-0.6 0.6-1.6 0.6-2.2 0l-2.2-2.2c-0.6-0.6-0.6-1.6 0-2.2l16.3-16.1c0.6-0.6 0.6-1.6 0-2.2l-16.2-16.1c-0.6-0.6-0.6-1.6 0-2.2l2.2-2.2c0.6-0.5 1.5-0.5 2.1 0z" fill={props.fill}/>
</svg>
  );
};

addPropertyControls(chevronright_icon, {
  fill: {
    type: ControlType.Color,
    title: 'Fill',
    defaultValue: '#ffffff'
  }
});
  
