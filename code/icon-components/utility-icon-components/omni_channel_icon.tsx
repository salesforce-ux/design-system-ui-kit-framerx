
import * as React from 'react';
import { addPropertyControls, ControlType } from 'framer';

export function omni_channel_icon(props) {
  return (
    <svg height="52" width="52" viewBox="0 0 52 52" xmlns="http://www.w3.org/2000/svg" {...props}>
	<path d="m47.2 2.7h-12.6c-0.8 0-1.1 0.7-0.4 1.4l4 4 0.5 0.5-7.5 7.4c-0.6 0.6-0.6 1.6-0.1 2.2 0 0 5.1 5.2 4.6 11.1 0 8.4-6.1 15.1-14.5 15.1-6.2 0.6-11.1-5.1-11.1-5.1-0.6-0.6-1.5-0.6-2.1 0l-3.7 3.7c-0.6 0.6-0.6 1.5 0 2.1l1.2 1.2c0.6 0.6 1.5 0.6 2.1 0l1.4-1.3c3.4 2.7 7.7 4.2 12.3 4.2 11 0 19.9-8.9 19.9-19.9 0-4.6-1.6-8.9-4.2-12.3l5.1-5.1 0.7 0.7 4 4c0.6 0.7 1.4 0.4 1.4-0.4v-12.6c-0.1-0.5-0.5-0.9-1-0.9z" fill={props.fill}/>
	<circle cx="21.1" cy="29.5" fill={props.fill} r="9.9"/>
</svg>
  );
};

addPropertyControls(omni_channel_icon, {
  fill: {
    type: ControlType.Color,
    title: 'Fill',
    defaultValue: '#ffffff'
  }
});
  
