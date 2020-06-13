
import * as React from 'react';
import { addPropertyControls, ControlType } from 'framer';

export function listen_icon(props) {
  return (
    <svg height="52" width="52" viewBox="0 0 52 52" xmlns="http://www.w3.org/2000/svg" {...props}>
	<path d="m50.6 30.2c0-14.4-10.9-26.2-24.4-26.2s-24.5 11.8-24.5 26.2c0 3.4 0.6 6.8 1.8 10 1.4 3.9 4.9 6.7 9.1 6.8 1.2 0 2.2-1 2.2-2.2v-12.5c0-1.2-1-2.2-2.2-2.2-2.2 0-4.3 0.8-5.9 2-0.1-0.7-0.1-1.3-0.1-2 0-11.8 8.8-21.3 19.6-21.3s19.6 9.6 19.6 21.3c0 0.7 0 1.4-0.1 2-1.6-1.3-3.6-2.1-5.9-2.1-1.2 0-2.2 1-2.2 2.2v12.4c0 1.2 1 2.2 2.2 2.2 2.4 0 4.9-0.9 6.5-2.7 1.7-1.8 2.5-3.8 3.2-6.2 0.7-2.4 1.1-5 1.1-7.7z" fill={props.fill}/>
</svg>
  );
};

addPropertyControls(listen_icon, {
  fill: {
    type: ControlType.Color,
    title: 'Fill',
    defaultValue: '#ffffff'
  }
});
  
