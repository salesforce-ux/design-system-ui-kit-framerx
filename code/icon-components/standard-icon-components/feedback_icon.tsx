
import * as React from 'react';
import { addPropertyControls, ControlType } from 'framer';

export function feedback_icon(props) {
  return (
    <svg height="100" width="100" viewBox="0 0 100 100" xmlns="http://www.w3.org/2000/svg" {...props}>
	<path d="m79.1 56.5c-0.1-0.4-0.1-0.9 0.2-1.2 1.7-3.1 2.7-6.6 2.7-10.3 0-11.6-9.9-21-22-21-5.2 0-10 1.8-13.8 4.7 12.5 2.7 21.8 13.5 21.8 26.3 0 3.6-0.7 7.1-2.1 10.2 2-0.5 3.9-1.3 5.7-2.4 0.4-0.2 0.8-0.3 1.2-0.1l6.4 2.3c1.1 0.4 2.2-0.7 1.9-1.9l-2-6.6z m-39.1-22.5c-12.1 0-22 9.4-22 21 0 3.7 1 7.2 2.8 10.3 0.2 0.4 0.3 0.8 0.2 1.2l-2.1 6.7c-0.4 1.2 0.7 2.3 1.9 1.9l6.4-2.3c0.4-0.1 0.9-0.1 1.2 0.1 3.4 2 7.3 3.1 11.6 3.1 12.1 0 22-9.4 22-21s-9.9-21-22-21z m-12 25c-2.2 0-4-1.8-4-4s1.8-4 4-4 4 1.8 4 4-1.8 4-4 4z m12 0c-2.2 0-4-1.8-4-4s1.8-4 4-4 4 1.8 4 4-1.8 4-4 4z m12 0c-2.2 0-4-1.8-4-4s1.8-4 4-4 4 1.8 4 4-1.8 4-4 4z" fill={props.fill}/>
</svg>
  );
};

addPropertyControls(feedback_icon, {
  fill: {
    type: ControlType.Color,
    title: 'Fill',
    defaultValue: '#ffffff'
  }
});
  
