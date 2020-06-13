
import * as React from 'react';
import { addPropertyControls, ControlType } from 'framer';

export function messaging_conversation_icon(props) {
  return (
    <svg height="100" width="100" viewBox="0 0 100 100" xmlns="http://www.w3.org/2000/svg" {...props}>
	<path d="m54.7 71.3c10.6-3.9 16.8-10.4 18.7-19.7 4.5 2.3 7.6 6.7 7.6 11.9 0 2.2-0.6 4.2-1.5 6.1l1.6 5.4c0.4 1.2-0.8 2.4-2 2l-5.3-1.9c-2.1 1.2-4.6 1.9-7.3 1.9-4.9 0-9.2-2.2-11.8-5.7z m-10.6-49.3c13.3 0 24.1 10 24.2 22.5 0 12.5-10.8 22.5-24.1 22.5-4.7 0-9-1.2-12.7-3.4-0.4-0.2-0.9-0.3-1.4-0.1l-7 2.5c-1.3 0.4-2.5-0.8-2.1-2.1l2.2-7.1c0.2-0.4 0.1-0.9-0.1-1.3-2-3.3-3.1-7-3.1-11 0-12.5 10.8-22.5 24.1-22.5z m-12.1 15c-1.1 0-2 0.9-2 2v2c0 1.1 0.9 2 2 2h26c1.1 0 2-0.9 2-2v-2c0-1.1-0.9-2-2-2h-26z m0 11c-1.1 0-2 0.9-2 2v2c0 1.1 0.9 2 2 2h14c1.1 0 2-0.9 2-2v-2c0-1.1-0.9-2-2-2h-14z" fill={props.fill}/>
</svg>
  );
};

addPropertyControls(messaging_conversation_icon, {
  fill: {
    type: ControlType.Color,
    title: 'Fill',
    defaultValue: '#ffffff'
  }
});
  
