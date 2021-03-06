
import * as React from 'react';
import { addPropertyControls, ControlType } from 'framer';

export function quick_text_icon(props) {
  return (
    <svg height="52" width="52" viewBox="0 0 52 52" xmlns="http://www.w3.org/2000/svg" {...props}>
	<path d="m26.1 3.3c-13.6 0-24.6 10.1-24.6 22.5 0 3.9 1.1 7.6 3 10.9 0.3 0.5 0.4 1.1 0.2 1.7l-3.2 8.7c-0.3 0.8 0.5 1.5 1.3 1.3l8.8-3.4c0.5-0.2 1.1-0.1 1.7 0.2 3.7 2.1 8.1 3.3 12.9 3.3 13.5-0.1 24.5-10.1 24.5-22.6 0-12.5-11-22.6-24.6-22.6z m-11.4 21.7c0-0.5 0.4-1 1-1h15.9c0.5 0 1 0.4 1 1v2c0 0.5-0.4 1-1 1h-16c-0.5 0-1-0.4-1-1v-2z m22.9 9.6c0 0.5-0.4 1-1 1h-21c-0.5 0-1-0.4-1-1v-1.9c0-0.5 0.4-1 1-1h21c0.5 0 1 0.4 1 1v1.9z m0-15.3c0 0.5-0.4 1-1 1h-21c-0.5 0-1-0.4-1-1v-1.9c0-0.5 0.4-1 1-1h21c0.5 0 1 0.4 1 1v1.9z" fill={props.fill}/>
</svg>
  );
};

addPropertyControls(quick_text_icon, {
  fill: {
    type: ControlType.Color,
    title: 'Fill',
    defaultValue: '#ffffff'
  }
});
  
