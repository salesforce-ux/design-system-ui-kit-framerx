
import * as React from 'react';
import { addPropertyControls, ControlType } from 'framer';

export function cancel_transfer_icon(props) {
  return (
    <svg height="52" width="52" viewBox="0 0 52 52" xmlns="http://www.w3.org/2000/svg" {...props}>
	<path d="m25.1 12.3v-3c4 0 7.2 3.2 7.2 7.2h-3l4.6 5.7c0.3 0.3 0.7 0.3 0.9 0l4.6-5.7h-3c0-6.3-5.2-11.4-11.4-11.4v-3l-5.7 4.6c-0.3 0.3-0.2 0.7 0.1 0.9l5.7 4.7z m1.2 21.3c-1.2-1.6-3.5-2.7-5.8-3.8-2.4-1-2.7-2-2.7-3s0.6-2.1 1.4-2.8c1.3-1.3 2.1-3.2 2.1-5.3 0-4-2.4-7.5-6.5-7.5h-0.4c-4.1 0-6.5 3.5-6.5 7.5 0 2.2 0.7 4 2.1 5.3 0.8 0.7 1.4 1.7 1.4 2.8 0 1-0.3 2-2.7 3-3.4 1.5-6.6 3.1-6.7 6.3 0.3 2.3 1.8 3.9 3.8 3.9h17.9c0.3 0 0.7-0.1 1-0.2 0.1-2.2 0.6-4.3 1.6-6.2z m5.5 1l6 6-6 6c-0.6 0.6-0.6 1.6 0 2.1l0.7 0.7c0.6 0.6 1.6 0.6 2.1 0l6-6 6 6c0.6 0.6 1.6 0.6 2.1 0l0.7-0.7c0.6-0.6 0.6-1.6 0-2.1l-6-6 6-6c0.6-0.6 0.6-1.6 0-2.1l-0.7-0.7c-0.6-0.6-1.6-0.6-2.1 0l-6 6-6-6c-0.6-0.6-1.6-0.6-2.1 0l-0.7 0.7c-0.6 0.5-0.6 1.5 0 2.1z" fill={props.fill}/>
</svg>
  );
};

addPropertyControls(cancel_transfer_icon, {
  fill: {
    type: ControlType.Color,
    title: 'Fill',
    defaultValue: '#ffffff'
  }
});
  
