
import * as React from 'react';
import { addPropertyControls, ControlType } from 'framer';

export function all_icon(props) {
  return (
    <svg height="52" width="52" viewBox="0 0 52 52" xmlns="http://www.w3.org/2000/svg" {...props}>
	<path d="m31.6 21.6c-1.2 0-2.2-1-2.2-2.2v-13.9c0-1.2 1-2.2 2.2-2.2h14.2c1.2 0 2.2 1 2.2 2.2v13.9c0 1.2-1 2.2-2.2 2.2h-14.2z m6.1 8.2l-8.2 8.9c-0.5 0.5-0.5 1.3 0 1.9l8.2 8.9c0.5 0.6 1.5 0.6 2 0l8.2-8.9c0.5-0.5 0.5-1.3 0-1.9l-8.2-8.9c-0.5-0.6-1.4-0.6-2 0z" fill={props.fill}/>
	<path d="m4.8 6.5l7.2-4.1c0.7-0.4 1.5-0.4 2.1 0l7.1 4.1c0.7 0.4 1.1 1.1 1.1 1.9v8.2c0 0.8-0.4 1.5-1.1 1.9l-7.1 4.1c-0.7 0.4-1.5 0.4-2.1 0l-7.2-4.1c-0.7-0.4-1.1-1.1-1.1-1.9v-8.2c0-0.8 0.4-1.5 1.1-1.9z" fill={props.fill}/>
	<circle cx="13" cy="39.4" fill={props.fill} r="9.3"/>
</svg>
  );
};

addPropertyControls(all_icon, {
  fill: {
    type: ControlType.Color,
    title: 'Fill',
    defaultValue: '#ffffff'
  }
});
  
