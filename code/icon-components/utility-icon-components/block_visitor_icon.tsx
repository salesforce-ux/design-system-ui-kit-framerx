
import * as React from 'react';
import { addPropertyControls, ControlType } from 'framer';

export function block_visitor_icon(props) {
  return (
    <svg height="52" width="52" viewBox="0 0 52 52" xmlns="http://www.w3.org/2000/svg" {...props}>
	<path d="m64.7 19.1v0.4-0.4z"/>
	<path d="m22 37c0-2.7 0.9-5.8 2.3-8.2 1.7-3 3.6-4.2 5.1-6.4 2.5-3.7 3-9 1.4-13-1.6-4.1-5.4-6.5-9.8-6.4s-8 2.8-9.4 6.9c-1.6 4.5-0.9 9.9 2.7 13.3 1.5 1.4 2.9 3.6 2.1 5.7-0.7 2-3.1 2.9-4.8 3.7-3.9 1.7-8.6 4.1-9.4 8.7-0.8 3.8 1.8 7.7 5.9 7.7h17c0.8 0 1.3-1 0.8-1.6-2.5-2.9-3.9-6.6-3.9-10.4z m24.5-8.5c-4.7-4.7-12.3-4.7-17 0s-4.7 12.3 0 17 12.3 4.7 17 0 4.7-12.3 0-17z m-14.2 2.8c2.7-2.7 6.7-3.1 9.8-1.2l-11 11c-1.9-3.1-1.5-7.1 1.2-9.8z m11.4 11.4c-2.7 2.6-6.7 3-9.8 1.3l11-11c1.8 3 1.4 7-1.2 9.7z" fill={props.fill}/>
</svg>
  );
};

addPropertyControls(block_visitor_icon, {
  fill: {
    type: ControlType.Color,
    title: 'Fill',
    defaultValue: '#ffffff'
  }
});
  
