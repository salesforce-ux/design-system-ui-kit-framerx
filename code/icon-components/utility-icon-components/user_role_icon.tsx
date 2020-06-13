
import * as React from 'react';
import { addPropertyControls, ControlType } from 'framer';

export function user_role_icon(props) {
  return (
    <svg height="52" width="52" viewBox="0 0 52 52" xmlns="http://www.w3.org/2000/svg" {...props}>
	<path d="m22 36c0-2.7 0.9-5.8 2.3-8.2 1.7-3 3.6-4.2 5.1-6.4 2.5-3.7 3-9 1.4-13-1.6-4.1-5.4-6.5-9.8-6.4s-8 2.8-9.4 6.9c-1.6 4.5-0.9 9.9 2.7 13.3 1.5 1.4 2.9 3.6 2.1 5.7-0.7 2-3.1 2.9-4.8 3.7-3.9 1.7-8.6 4.1-9.4 8.7-0.8 3.8 1.8 7.7 5.9 7.7h17c0.8 0 1.3-1 0.8-1.6-2.5-2.9-3.9-6.6-3.9-10.4z m16-12c-6.6 0-12 5.4-12 12s5.4 12 12 12 12-5.4 12-12-5.4-12-12-12z m2.1 13.1c-0.3 0-0.7-0.1-1-0.2l-4.6 4.6c-0.3 0.3-0.7 0.4-1 0.4-0.4 0-0.7-0.1-1-0.4-0.5-0.5-0.5-1.4 0-2l4.6-4.6c-0.1-0.3-0.2-0.6-0.2-1-0.2-2.1 1.5-4 3.6-4 0.3 0 0.7 0.1 1 0.2 0.2 0 0.2 0.2 0.1 0.3l-2 2.1c-0.2 0.1-0.2 0.4 0 0.5l1.4 1.4c0.2 0.2 0.4 0.2 0.6 0l2-2c0.1-0.1 0.3-0.1 0.3 0.1 0.1 0.3 0.2 0.7 0.2 1 0 2.1-1.8 3.8-4 3.6z" fill={props.fill}/>
</svg>
  );
};

addPropertyControls(user_role_icon, {
  fill: {
    type: ControlType.Color,
    title: 'Fill',
    defaultValue: '#ffffff'
  }
});
  
