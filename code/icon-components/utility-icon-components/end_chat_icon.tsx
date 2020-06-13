
import * as React from 'react';
import { addPropertyControls, ControlType } from 'framer';

export function end_chat_icon(props) {
  return (
    <svg height="52" width="52" viewBox="0 0 52 52" xmlns="http://www.w3.org/2000/svg" {...props}>
	<path d="m24.6 40.6c0-8.8 7.2-16 16-16 1.5 0 2.9 0.2 4.2 0.6 0.2-1.1 0.3-2.1 0.3-3.2-0.1-11-9.7-19.8-21.5-19.8-11.9 0-21.4 8.8-21.4 19.6 0 3.4 1 6.6 2.6 9.5 0.3 0.4 0.4 1 0.2 1.5l-2.8 7.6c-0.3 0.7 0.4 1.3 1.2 1.2l7.7-3c0.4-0.2 1-0.1 1.5 0.2 3.2 1.8 7.1 2.9 11.2 2.9h0.8v-1.1z m9.8-22.3c2 0 3.6 1.6 3.6 3.6s-1.6 3.6-3.6 3.6-3.6-1.6-3.6-3.6 1.6-3.6 3.6-3.6z m-21.5 7.1c-2 0-3.6-1.6-3.6-3.6s1.6-3.6 3.6-3.6 3.6 1.6 3.6 3.6-1.7 3.6-3.6 3.6z m10.7 0c-2 0-3.6-1.6-3.6-3.6s1.6-3.6 3.6-3.6 3.6 1.6 3.6 3.6-1.6 3.6-3.6 3.6z m8.1 9.2l6 6-6 6c-0.6 0.6-0.6 1.6 0 2.1l0.7 0.7c0.6 0.6 1.6 0.6 2.1 0l6-6 6 6c0.6 0.6 1.6 0.6 2.1 0l0.7-0.7c0.6-0.6 0.6-1.6 0-2.1l-6-6 6-6c0.6-0.6 0.6-1.6 0-2.1l-0.7-0.7c-0.6-0.6-1.6-0.6-2.1 0l-6 6-6-6c-0.6-0.6-1.6-0.6-2.1 0l-0.7 0.7c-0.5 0.5-0.5 1.5 0 2.1z" fill={props.fill}/>
</svg>
  );
};

addPropertyControls(end_chat_icon, {
  fill: {
    type: ControlType.Color,
    title: 'Fill',
    defaultValue: '#ffffff'
  }
});
  
