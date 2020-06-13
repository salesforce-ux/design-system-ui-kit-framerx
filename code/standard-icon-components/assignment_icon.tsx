
import * as React from 'react';
import { addPropertyControls, ControlType } from 'framer';

export function assignment_icon(props) {
  return (
    <svg height="100" width="100" viewBox="0 0 100 100" xmlns="http://www.w3.org/2000/svg" {...props}>
	<path d="m22 54.9h56c1.1 0 2 0.9 2 2v4c0 1.1-0.9 2-2 2h-56c-1.1 0-2-0.9-2-2v-4c0-1.1 0.9-2 2-2z m0-17.8h56c1.1 0 2 0.9 2 2v4c0 1.1-0.9 2-2 2h-56c-1.1 0-2-0.9-2-2v-4c0-1.1 0.9-2 2-2z" fill={props.fill}/>
</svg>
  );
};

addPropertyControls(assignment_icon, {
  fill: {
    type: ControlType.Color,
    title: 'Fill',
    defaultValue: '#ffffff'
  }
});
  
