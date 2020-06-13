
import * as React from 'react';
import { addPropertyControls, ControlType } from 'framer';

export function page_icon(props) {
  return (
    <svg height="52" width="52" viewBox="0 0 52 52" xmlns="http://www.w3.org/2000/svg" {...props}>
	<path d="m44.4 19h-11.2c-2.6 0-4.2-1.6-4.2-4.2v-11.2c0-0.9-0.7-1.6-1.6-1.6h-16.6c-2.6 0-4.8 2.2-4.8 4.8v38.4c0 2.6 2.2 4.8 4.8 4.8h30.4c2.6 0 4.8-2.2 4.8-4.8v-24.6c0-0.9-0.7-1.6-1.6-1.6z m1.3-6.1l-10.6-10.6c-0.2-0.2-0.6-0.3-0.9-0.3-0.6 0-1.2 0.5-1.2 1.1v8.5c0 1.8 1.6 3.4 3.4 3.4h8.5c0.6 0 1.1-0.6 1.1-1.2 0-0.3-0.1-0.7-0.3-0.9z" fill={props.fill}/>
</svg>
  );
};

addPropertyControls(page_icon, {
  fill: {
    type: ControlType.Color,
    title: 'Fill',
    defaultValue: '#ffffff'
  }
});
  
