
import * as React from 'react';
import { addPropertyControls, ControlType } from 'framer';

export function return_order_icon(props) {
  return (
    <svg height="100" width="100" viewBox="0 0 100 100" xmlns="http://www.w3.org/2000/svg" {...props}>
	<title/>
	<path d="m22 22.3h36.9c1.2 0 2.3 1 2.3 2.2v4.7c0 1.2-1 2.3-2.2 2.3h-37c-1.2 0-2.3-1-2.3-2.2v-4.7c-0.1-1.2 0.9-2.3 2.3-2.3-0.1 0-0.1 0 0 0z m50.8 0h4.6c1.2 0 2.3 1 2.3 2.2v4.7c0 1.2-1 2.3-2.2 2.3h-4.7c-1.2 0-2.3-1-2.3-2.2v-4.7c-0.1-1.2 0.9-2.2 2.1-2.3h0.2z m-27.2 20.5c1.2 0 2.3 1 2.3 2.2v4.7c0 1.2-1 2.3-2.2 2.3h-23.7c-1.2 0-2.3-1-2.3-2.2v-4.7c0-1.2 1-2.3 2.2-2.3h23.7z m-8.8 20.5c1.2 0 2.3 1 2.3 2.2v4.7c0 1.2-1 2.3-2.2 2.3h-14.9c-1.2 0-2.3-1-2.3-2.2v-4.7c0-1.2 1-2.3 2.2-2.3h14.9z m41.8-21.1c1.2 10.7-7.2 21.8-17.2 23.7l-2.7 0.6c-0.5 0.1-0.9 0.6-0.8 1.2 0 0.3 0.2 0.5 0.4 0.6l6.7 4.5c0.7 0.5 0.8 1.4 0.3 2v0.1l-1.7 2.5c-0.4 0.7-1.4 0.9-2 0.4h-0.1l-16.1-10.9c-0.7-0.4-0.9-1.4-0.4-2v-0.1l11-16.2c0.4-0.7 1.4-0.9 2-0.4h0.1l2.5 1.7c0.7 0.4 0.9 1.4 0.4 2v0.1l-4.4 6.7c-0.3 0.4-0.3 1.1 0.2 1.4 0.2 0.2 0.5 0.3 0.8 0.2l1.6-0.3c7.8-1.5 14.4-10.3 13.7-17.9 0-0.7 1.1-1.7 1.9-1.9h1.9c0.9-0.1 1.9 1.1 1.9 2z" fill={props.fill}/>
</svg>
  );
};

addPropertyControls(return_order_icon, {
  fill: {
    type: ControlType.Color,
    title: 'Fill',
    defaultValue: '#ffffff'
  }
});
  
