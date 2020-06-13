
import * as React from 'react';
import { addPropertyControls, ControlType } from 'framer';

export function undeprecate_icon(props) {
  return (
    <svg height="52" width="52" viewBox="0 0 52 52" xmlns="http://www.w3.org/2000/svg" {...props}>
	<path d="m48 7h-44c-1.1 0-2 0.9-2 2v26c0 1.1 0.9 2 2 2h16.2c1 5.7 5.9 10 11.8 10s10.9-4.3 11.8-10h4.2c1.1 0 2-0.9 2-2v-26c0-1.1-0.9-2-2-2z m-17.5 34.3l-5.9-5.9 2.8-2.8 3.1 3.1 7.1-7.1 2.8 2.8-9.9 9.9z m15.5-8.3h-2.2c-1-5.7-5.9-10-11.8-10s-10.9 4.3-11.8 10h-14.2v-22h40v22z" fill={props.fill}/>
</svg>
  );
};

addPropertyControls(undeprecate_icon, {
  fill: {
    type: ControlType.Color,
    title: 'Fill',
    defaultValue: '#ffffff'
  }
});
  
