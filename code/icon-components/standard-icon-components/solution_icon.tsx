
import * as React from 'react';
import { addPropertyControls, ControlType } from 'framer';

export function solution_icon(props) {
  return (
    <svg height="100" width="100" viewBox="0 0 100 100" xmlns="http://www.w3.org/2000/svg" {...props}>
	<path d="m47.6 20.1c-9.8 1.1-17.7 8.8-18.5 18.4-0.6 7 2.5 13.4 7.5 17.5 1.5 1.2 2.4 3 2.4 4.9v0.1c0 2.8 2.3 5.1 5.2 5.1h11.6c2.9 0 5.2-2.3 5.2-5.1v-0.1c0-1.9 0.9-3.7 2.4-4.9 4.6-3.8 7.6-9.4 7.6-15.7 0-12-10.7-21.5-23.4-20.2z m11.4 51.9h-18c-1.1 0-2 0.9-2 2 0 3.3 2.7 6 6 6h10c3.3 0 6-2.7 6-6 0-1.1-0.9-2-2-2z" fill={props.fill}/>
</svg>
  );
};

addPropertyControls(solution_icon, {
  fill: {
    type: ControlType.Color,
    title: 'Fill',
    defaultValue: '#ffffff'
  }
});
  
