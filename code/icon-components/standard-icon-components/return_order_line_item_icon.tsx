
import * as React from 'react';
import { addPropertyControls, ControlType } from 'framer';

export function return_order_line_item_icon(props) {
  return (
    <svg height="100" width="100" viewBox="0 0 100 100" xmlns="http://www.w3.org/2000/svg" {...props}>
	<title/>
	<path d="m22.2 23.1h37c1.2 0 2.3 1 2.3 2.2v4.7c0 1.2-1 2.3-2.2 2.3h-37c-1.2 0-2.3-1-2.3-2.2v-4.7c-0.1-1.2 0.9-2.3 2.2-2.3z m50.9 0h4.6c1.2 0 2.3 1 2.3 2.2v4.7c0 1.2-1 2.3-2.2 2.3h-4.7c-1.2 0-2.3-1-2.3-2.2v-4.7c-0.1-1.2 0.8-2.2 2-2.3h0.3z m2.5 28.9c-6.8 11.7-22.9 17-33.6 11.8l-2.9-1.3c-1-0.5-2 0.6-1.7 1.6l2.8 9.4c0.3 1-0.3 2-1.2 2.4l-3.4 1.3c-0.8 0.4-1.7 0-2.1-0.8 0-0.1-0.1-0.2-0.1-0.3l-6.8-22.7c-0.3-1 0.2-2.1 1.2-2.4l22-8.6c0.8-0.4 1.7 0 2.1 0.8 0 0.1 0.1 0.2 0.1 0.3l1.1 3.5c0.3 1-0.2 2.1-1.2 2.4l-9 3.6c-0.7 0.2-1 0.9-0.8 1.6 0.1 0.3 0.3 0.6 0.6 0.7l1.7 0.8c8.3 4.1 21-0.1 26-8.4 0.5-0.8 2.3-1 3.2-0.6l1.7 1.6c0.9 0.4 0.8 2.4 0.3 3.3z" fill={props.fill}/>
</svg>
  );
};

addPropertyControls(return_order_line_item_icon, {
  fill: {
    type: ControlType.Color,
    title: 'Fill',
    defaultValue: '#ffffff'
  }
});
  
