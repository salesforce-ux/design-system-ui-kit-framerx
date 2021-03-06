
import * as React from 'react';
import { addPropertyControls, ControlType } from 'framer';

export function date_time_icon(props) {
  return (
    <svg height="52" width="52" viewBox="0 0 52 52" xmlns="http://www.w3.org/2000/svg" {...props}>
	<path d="m43.6 6.8h-4v-1.6c0-1.8-1.4-3.2-3.2-3.2-1.8 0-3.2 1.4-3.2 3.2v1.6h-14.4v-1.6c0-1.8-1.4-3.2-3.2-3.2s-3.2 1.4-3.2 3.2v1.6h-4c-2.6 0-4.8 2.2-4.8 4.8v1.6c0 0.9 0.7 1.6 1.6 1.6h41.6c0.9 0 1.6-0.7 1.6-1.6v-1.6c0-2.6-2.2-4.8-4.8-4.8z m3.2 12.8h-41.6c-0.9 0-1.6 0.7-1.6 1.6v24c0 2.6 2.2 4.8 4.8 4.8h35.2c2.6 0 4.8-2.2 4.8-4.8v-24c0-0.9-0.7-1.6-1.6-1.6z m-20.8 27.1c-6.6 0-11.9-5.4-11.9-11.9 0-6.6 5.4-11.9 11.9-11.9s11.9 5.4 11.9 11.9c0 6.6-5.3 11.9-11.9 11.9z m1.2-12.4v-5.1c0-0.4-0.4-0.8-0.8-0.8h-0.8c-0.4 0-0.8 0.4-0.8 0.8v5.6c0 0.3 0.1 0.6 0.4 0.8l3.8 3.8c0.3 0.3 0.8 0.3 1.1 0l0.6-0.6c0.3-0.3 0.3-0.8 0-1.1l-3.5-3.4z" fill={props.fill}/>
</svg>
  );
};

addPropertyControls(date_time_icon, {
  fill: {
    type: ControlType.Color,
    title: 'Fill',
    defaultValue: '#ffffff'
  }
});
  
