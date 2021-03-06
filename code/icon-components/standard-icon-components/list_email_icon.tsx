
import * as React from 'react';
import { addPropertyControls, ControlType } from 'framer';

export function list_email_icon(props) {
  return (
    <svg height="100" width="100" viewBox="0 0 100 100" xmlns="http://www.w3.org/2000/svg" {...props}>
	<path d="m64.9 34.9h-34.6c-2.7 0-4.8 2.2-4.8 4.8v0.8c0 0.4 0.4 0.8 0.8 0.8h32.1c2.7 0 4.8 2.2 4.8 4.8v23c0 0.4 0.4 0.8 0.8 0.8h0.8c2.7 0 4.8-2.2 4.8-4.8v-25.4c0.1-2.6-2.1-4.8-4.7-4.8z m10.4-10.3h-34.6c-2.7 0-4.8 2.2-4.8 4.8v0.8c0 0.4 0.4 0.8 0.8 0.8h32.1c2.7 0 4.8 2.2 4.8 4.8v23c0 0.4 0.4 0.8 0.8 0.8h0.8c2.7 0 4.8-2.2 4.8-4.8v-25.4c0.1-2.6-2.1-4.8-4.7-4.8z m-36.8 39.6c0.5 0.5 1.2 0.5 1.7 0l18.3-17c0.3-0.6 0.2-1.7-1.1-1.7l-36.1 0.1c-1 0-1.8 0.9-1.1 1.7l18.3 16.9z m20.3-10.4c0-0.8-1-1.3-1.6-0.7l-14.3 13.2c-1 0.9-2.2 1.4-3.5 1.4-1.3 0-2.5-0.5-3.5-1.3l-14.2-13.3c-0.6-0.6-1.6-0.2-1.6 0.7-0.1-0.2-0.1 18.4-0.1 18.4 0 1.8 1.5 3.2 3.2 3.2h32.3c1.8 0 3.2-1.5 3.2-3.2v-18.4z" fill={props.fill}/>
</svg>
  );
};

addPropertyControls(list_email_icon, {
  fill: {
    type: ControlType.Color,
    title: 'Fill',
    defaultValue: '#ffffff'
  }
});
  
