
import * as React from 'react';
import { addPropertyControls, ControlType } from 'framer';

export function new_custom68_icon(props) {
  return (
    <svg height="52" width="52" viewBox="0 0 52 52" xmlns="http://www.w3.org/2000/svg" {...props}>
	<path d="m26 2c-13.2 0-24 10.8-24 24s10.8 24 24 24 24-10.8 24-24-10.8-24-24-24z m19 21.6h-6.3c-0.2-5.7-1.5-10.6-3.4-14.4 5.3 3 8.9 8.2 9.7 14.4z m-21.4-15.8v15.8h-5.5c0.4-7.5 2.8-13.4 5.5-15.8z m0 20.6v15.8c-2.7-2.3-5.1-8.2-5.5-15.8h5.5z m4.8 15.8v-15.8h5.5c-0.4 7.5-2.8 13.4-5.5 15.8z m0-20.6v-15.8c2.7 2.3 5.1 8.2 5.5 15.8h-5.5z m-11.7-14.4c-1.9 3.8-3.1 8.7-3.4 14.4h-6.3c0.8-6.2 4.4-11.4 9.7-14.4z m-9.7 19.2h6.3c0.2 5.7 1.5 10.6 3.4 14.4-5.3-3-8.9-8.2-9.7-14.4z m28.3 14.4c1.9-3.8 3.1-8.7 3.4-14.4h6.3c-0.8 6.2-4.4 11.4-9.7 14.4z" fill={props.fill}/>
</svg>
  );
};

addPropertyControls(new_custom68_icon, {
  fill: {
    type: ControlType.Color,
    title: 'Fill',
    defaultValue: '#ffffff'
  }
});
  
