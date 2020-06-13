
import * as React from 'react';
import { addPropertyControls, ControlType } from 'framer';

export function answer_icon(props) {
  return (
    <svg height="52" width="52" viewBox="0 0 52 52" xmlns="http://www.w3.org/2000/svg" {...props}>
	<path d="m26 4c-13.3 0-24 9.8-24 22 0 3.9 1.1 7.5 3 10.8 0.2 0.4 0.3 0.9 0.2 1.3l-2.2 6.9c-0.4 1.3 0.8 2.4 2.1 2l7-2.4c0.5-0.2 1-0.1 1.4 0.2 3.7 2.1 8 3.3 12.6 3.3 13.3 0 24-9.8 24-22-0.2-12.3-10.9-22.1-24.1-22.1z m11.5 17.1l-12.2 12c-0.5 0.5-1 0.7-1.7 0.7-0.6 0-1.2-0.2-1.7-0.7l-5.9-5.8c-0.5-0.5-0.5-1.2 0-1.6l1.7-1.6c0.5-0.5 1.2-0.5 1.7 0l4.2 4.2 10.5-10.4c0.5-0.5 1.2-0.5 1.7 0l1.7 1.6c0.4 0.4 0.4 1.2 0 1.6z" fill={props.fill}/>
</svg>
  );
};

addPropertyControls(answer_icon, {
  fill: {
    type: ControlType.Color,
    title: 'Fill',
    defaultValue: '#ffffff'
  }
});
  
