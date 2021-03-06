
import * as React from 'react';
import { addPropertyControls, ControlType } from 'framer';

export function locker_service_console_icon(props) {
  return (
    <svg height="52" width="52" viewBox="0 0 52 52" xmlns="http://www.w3.org/2000/svg" {...props}>
	<path d="m47.7 9.1c-0.9-2.2-2-4.2-3.3-6.1-0.6-0.8-1.7-0.9-2.3-0.2-1.9 1.8-4.6 2.8-7.4 2.8-3 0-5.7-1.2-7.7-3.2-0.6-0.6-1.6-0.6-2.2 0-2 2-4.7 3.2-7.7 3.2-2.8 0-5.4-1-7.4-2.8-0.7-0.6-1.8-0.5-2.3 0.2-1.3 1.8-2.4 3.9-3.3 6.1 0 0-2.4 4.9-2 13v0.8c0 0.4 0.1 0.8 0.1 1.2v0.1c1.4 13.4 11.3 24.1 23.8 25.8 12.6-1.8 22.4-12.5 23.8-25.9v-0.3c0-0.2 0-0.5 0.1-0.8 0.7-8.6-2.2-13.9-2.2-13.9z m-6.8 10.3l-16.6 16.9c-0.4 0.4-0.9 0.4-1.3 0l-9.7-9.8c-0.4-0.4-0.4-0.9 0-1.3l1.3-1.3c0.4-0.4 0.9-0.4 1.3 0l7.3 7.4c0.2 0.2 0.6 0.2 0.9 0l14.3-14.4c0.4-0.4 0.9-0.4 1.3 0l1.3 1.3c0.3 0.3 0.3 0.9-0.1 1.2z" fill={props.fill}/>
</svg>
  );
};

addPropertyControls(locker_service_console_icon, {
  fill: {
    type: ControlType.Color,
    title: 'Fill',
    defaultValue: '#ffffff'
  }
});
  
