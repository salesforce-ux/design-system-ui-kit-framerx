
import * as React from 'react';
import { addPropertyControls, ControlType } from 'framer';

export function ban_icon(props) {
  return (
    <svg height="52" width="52" viewBox="0 0 52 52" xmlns="http://www.w3.org/2000/svg" {...props}>
	<path d="m26 2c-13.2 0-24 10.8-24 24s10.8 24 24 24 24-10.8 24-24-10.8-24-24-24z m11.9 25.7c-0.1 0.7-0.7 1.3-1.5 1.3h-20.8c-0.8 0-1.4-0.5-1.5-1.3-0.1-1.2-0.1-2.3 0-3.4 0.1-0.7 0.7-1.3 1.5-1.3h20.8c0.8 0 1.4 0.6 1.5 1.3 0.1 1.2 0.1 2.3 0 3.4z" fill={props.fill}/>
</svg>
  );
};

addPropertyControls(ban_icon, {
  fill: {
    type: ControlType.Color,
    title: 'Fill',
    defaultValue: '#ffffff'
  }
});
  
