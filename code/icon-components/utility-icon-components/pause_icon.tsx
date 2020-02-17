
import * as React from 'react';
import { addPropertyControls, ControlType } from 'framer';

export function pause_icon(props) {
  return (
    <svg height="52" width="52" viewBox="0 0 52 52" xmlns="http://www.w3.org/2000/svg" {...props}>
	<path d="m30 43c0 1 0.9 2 2 2h4c1.1 0 2-1.1 2-2v-34c0-1-0.9-2-2-2h-4c-1.1 0-2 1.1-2 2v34z m-16 0c0 1 0.9 2 2 2h4c1.1 0 2-1.1 2-2v-34c0-1-0.9-2-2-2h-4c-1.1 0-2 1.1-2 2v34z" fill={props.fill}/>
</svg>
  );
};

addPropertyControls(pause_icon, {
  fill: {
    type: ControlType.Color,
    title: 'Fill',
    defaultValue: '#ffffff'
  }
});
  
