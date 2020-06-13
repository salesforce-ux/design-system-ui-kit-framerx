
import * as React from 'react';
import { addPropertyControls, ControlType } from 'framer';

export function prompt_icon(props) {
  return (
    <svg height="52" width="52" viewBox="0 0 52 52" xmlns="http://www.w3.org/2000/svg" {...props}>
	<path d="m47 4.5h-42c-1.7 0-3 1.3-3 3v30.6c0 1.7 1.3 3 3 3h14.5l3.6 5.2c1 1.4 2.8 1.7 4.2 0.7l0.6-0.6 4.2-5.3h14.9c1.7 0 3-1.3 3-3v-30.6c0-1.7-1.3-3-3-3z" fill={props.fill} fillRule="evenodd"/>
</svg>
  );
};

addPropertyControls(prompt_icon, {
  fill: {
    type: ControlType.Color,
    title: 'Fill',
    defaultValue: '#ffffff'
  }
});
  
