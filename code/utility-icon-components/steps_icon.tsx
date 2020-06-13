
import * as React from 'react';
import { addPropertyControls, ControlType } from 'framer';

export function steps_icon(props) {
  return (
    <svg height="52" width="52" viewBox="0 0 52 52" xmlns="http://www.w3.org/2000/svg" {...props}>
	<path d="m44.4 50.2h-7v-4.8h7v4.8z m0-2.3z m-14.1 2.3h-7v-4.8h7v4.8z m-14 0h-7v-4.8h7v4.8z m-9.4-5.9h-4.8v-7h4.8v7z m43-1.7h-4.8v-7h4.8v7z m-43-12.3h-4.8v-7h4.8v7z m43-1.7h-4.8v-7h4.8v7z m-43-12.3h-4.8v-7h4.8v7z m43-1.6h-4.8v-7h4.8v7z m-7.3-8.1h-7v-4.8h7v4.8z m-14 0h-7v-4.8h7v4.8z m-13.9 0h-7v-4.8h7v4.8z" fill={props.fill}/>
</svg>
  );
};

addPropertyControls(steps_icon, {
  fill: {
    type: ControlType.Color,
    title: 'Fill',
    defaultValue: '#ffffff'
  }
});
  
