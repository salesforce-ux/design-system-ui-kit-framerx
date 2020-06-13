
import * as React from 'react';
import { addPropertyControls, ControlType } from 'framer';

export function merge_icon(props) {
  return (
    <svg height="52" width="52" viewBox="0 0 52 52" xmlns="http://www.w3.org/2000/svg" {...props}>
	<path d="m42.3 44c-5.6-2.7-9.6-7.5-11.6-13-0.8-2-1.3-4.3-1.5-6.3v-3.5h10.8c0.8 0 1.4-0.9 0.8-1.8l-14.2-17c-0.5-0.6-1.6-0.6-2 0l-13.8 17c-0.5 0.6 0 1.8 0.8 1.8h10.9v3.5c-0.3 2.1-0.8 4.4-1.5 6.3-2 5.5-6 10.3-11.6 13-0.8 0.3-1.1 1.3-0.8 2l1.3 3.1c0.4 0.8 1.3 1.1 2.1 0.6 6-2.9 10.8-7.5 13.7-13 3 5.5 7.7 10.1 13.8 13 0.8 0.4 1.8 0.3 2.1-0.6l1.3-3.1c0.6-0.7 0.2-1.6-0.6-2z" fill={props.fill}/>
</svg>
  );
};

addPropertyControls(merge_icon, {
  fill: {
    type: ControlType.Color,
    title: 'Fill',
    defaultValue: '#ffffff'
  }
});
  
