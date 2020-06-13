
import * as React from 'react';
import { addPropertyControls, ControlType } from 'framer';

export function switch_icon(props) {
  return (
    <svg height="52" width="52" viewBox="0 0 52 52" xmlns="http://www.w3.org/2000/svg" {...props}>
	<path d="m47.6 17.8l-20.5 20.7c-0.6 0.6-1.6 0.6-2.2 0l-20.5-20.7c-0.6-0.6-0.6-1.6 0-2.2l2.2-2.2c0.6-0.6 1.6-0.6 2.2 0l16.1 16.3c0.6 0.6 1.6 0.6 2.2 0l16.1-16.3c0.6-0.6 1.6-0.6 2.2 0l2.2 2.2c0.5 0.7 0.5 1.6 0 2.2z" fill={props.fill}/>
</svg>
  );
};

addPropertyControls(switch_icon, {
  fill: {
    type: ControlType.Color,
    title: 'Fill',
    defaultValue: '#ffffff'
  }
});
  
