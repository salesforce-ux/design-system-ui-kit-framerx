
import * as React from 'react';
import { addPropertyControls, ControlType } from 'framer';

export function prompt_edit_icon(props) {
  return (
    <svg height="52" width="52" viewBox="0 0 52 52" xmlns="http://www.w3.org/2000/svg" {...props}>
	<path d="m47 4.5h-42c-1.7 0-3 1.3-3 3v30.6c0 1.7 1.3 3 3 3h14.5l3.6 5.2c1 1.4 2.8 1.7 4.2 0.7l0.6-0.6 4.2-5.3h14.9c1.7 0 3-1.3 3-3v-30.6c0-1.7-1.3-3-3-3z m-25.7 27.5c-0.2 0.2-0.3 0.3-0.5 0.3l-5 1.2c-0.5 0.1-0.9-0.3-0.8-0.8l1.2-5c0-0.1 0.1-0.3 0.2-0.4l0.1-0.1c0.1-0.1 0.4-0.1 0.6 0l4.2 4.2c0.1 0.2 0.1 0.5 0 0.6z m12.1-12.3l-10.3 10.3c-0.2 0.2-0.5 0.2-0.6 0l-4.1-4.1c-0.2-0.1-0.2-0.4 0-0.6l10.2-10.3c0.2-0.2 0.5-0.2 0.6 0l4.1 4.1c0.2 0.2 0.2 0.4 0.1 0.6z m3.1-3l-1.2 1.2c-0.2 0.2-0.5 0.2-0.6 0l-4.1-4.1c-0.2-0.2-0.2-0.5 0-0.6l1.1-1.2c0.7-0.7 1.9-0.7 2.6 0l2.2 2.2c0.7 0.7 0.7 1.8 0 2.5z" fill={props.fill} fillRule="evenodd"/>
</svg>
  );
};

addPropertyControls(prompt_edit_icon, {
  fill: {
    type: ControlType.Color,
    title: 'Fill',
    defaultValue: '#ffffff'
  }
});
  
