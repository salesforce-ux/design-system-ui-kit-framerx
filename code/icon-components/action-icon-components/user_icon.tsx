
import * as React from 'react';
import { addPropertyControls, ControlType } from 'framer';

export function user_icon(props) {
  return (
    <svg height="52" width="52" viewBox="0 0 52 52" xmlns="http://www.w3.org/2000/svg" {...props}>
	<path d="m50 43v2.2c0 2.6-2.2 4.8-4.8 4.8h-38.4c-2.6 0-4.8-2.2-4.8-4.8v-2.2c0-5.8 6.8-9.4 13.2-12.2l0.6-0.3c0.5-0.2 1-0.2 1.5 0.1 2.6 1.7 5.5 2.6 8.6 2.6s6.1-1 8.6-2.6c0.5-0.3 1-0.3 1.5-0.1l0.6 0.3c6.6 2.8 13.4 6.3 13.4 12.2z m-24-41c6.6 0 11.9 5.9 11.9 13.2s-5.3 13.2-11.9 13.2-11.9-5.9-11.9-13.2 5.3-13.2 11.9-13.2z" fill={props.fill}/>
</svg>
  );
};

addPropertyControls(user_icon, {
  fill: {
    type: ControlType.Color,
    title: 'Fill',
    defaultValue: '#ffffff'
  }
});
  
