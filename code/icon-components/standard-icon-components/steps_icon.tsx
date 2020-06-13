
import * as React from 'react';
import { addPropertyControls, ControlType } from 'framer';

export function steps_icon(props) {
  return (
    <svg height="100" width="100" viewBox="0 0 100 100" xmlns="http://www.w3.org/2000/svg" {...props}>
	<path d="m73 80.3h-8.8v-6h8.8v6z m0-2.9v-0.1 0.1z m-17.6 2.9h-8.8v-6h8.8v6z m-17.5 0h-8.8v-6h8.8v6z m-11.8-7.4h-6v-8.8h6v8.8z m53.8-2.1h-6v-8.8h6v8.8z m-53.8-15.4h-6v-8.8h6v8.8z m53.8-2.1h-6v-8.8h6v8.8z m-53.8-15.4h-6v-8.8h6v8.8z m53.8-2.1h-6v-8.8h6v8.8z m-9.1-10.1h-8.8v-6h8.8v6z m-17.5 0h-8.8v-6h8.8v6z m-17.5 0h-8.7v-6h8.8v6z" fill={props.fill}/>
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
  
