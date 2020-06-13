
import * as React from 'react';
import { addPropertyControls, ControlType } from 'framer';

export function resource_absence_icon(props) {
  return (
    <svg height="52" width="52" viewBox="0 0 52 52" xmlns="http://www.w3.org/2000/svg" {...props}>
	<path d="m21.9 37c0-2.7 0.9-5.8 2.3-8.2 1.7-3 3.6-4.2 5.1-6.4 2.5-3.7 3-9 1.4-13-1.6-4.1-5.4-6.5-9.8-6.4s-8 2.8-9.4 6.9c-1.6 4.5-0.9 9.9 2.7 13.3 1.5 1.4 2.9 3.6 2.1 5.7-0.7 2-3.1 2.9-4.8 3.7-3.9 1.7-8.6 4.1-9.4 8.7-0.8 3.8 1.8 7.7 5.9 7.7h17c0.8 0 1.3-1 0.8-1.6-2.5-2.9-3.9-6.6-3.9-10.4z m24.5-8.5c-4.7-4.7-12.3-4.7-17 0-4.7 4.7-4.7 12.3 0 17 4.7 4.7 12.3 4.7 17 0 4.7-4.7 4.7-12.3 0-17z m-3.5 10.6c0.4 0.4 0.4 1.1-0.1 1.5l-1.4 1.4c-0.4 0.4-0.9 0.4-1.3-0.1l-2.1-2.1-2.2 2.2c-0.4 0.4-0.9 0.4-1.3-0.1l-1.5-1.4c-0.4-0.4-0.5-0.9-0.1-1.3l2.2-2.2-2.1-2.2c-0.4-0.4-0.5-0.9-0.1-1.3l1.4-1.4c0.4-0.4 1.1-0.5 1.5-0.1l2.1 2.1 2.1-2.1c0.4-0.4 1.1-0.5 1.5-0.1l1.4 1.4c0.4 0.4 0.4 1.1-0.1 1.5l-2.1 2.1 2.2 2.2z" fill={props.fill}/>
</svg>
  );
};

addPropertyControls(resource_absence_icon, {
  fill: {
    type: ControlType.Color,
    title: 'Fill',
    defaultValue: '#ffffff'
  }
});
  
