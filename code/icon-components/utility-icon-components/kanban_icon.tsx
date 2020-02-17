
import * as React from 'react';
import { addPropertyControls, ControlType } from 'framer';

export function kanban_icon(props) {
  return (
    <svg height="52" width="52" viewBox="0 0 52 52" xmlns="http://www.w3.org/2000/svg" {...props}>
	<path d="m32 17.5c0-0.8-0.7-1.5-1.5-1.5h-9c-0.8 0-1.5 0.7-1.5 1.5v27c0 0.8 0.7 1.5 1.5 1.5h9c0.8 0 1.5-0.7 1.5-1.5v-27z m-18 0c0-0.8-0.7-1.5-1.5-1.5h-9c-0.8 0-1.5 0.7-1.5 1.5v31c0 0.8 0.7 1.5 1.5 1.5h9c0.8 0 1.5-0.7 1.5-1.5v-31z m36 0c0-0.8-0.7-1.5-1.5-1.5h-9c-0.8 0-1.5 0.7-1.5 1.5v23c0 0.8 0.7 1.5 1.5 1.5h9c0.8 0 1.5-0.7 1.5-1.5v-23z m0-14c0-0.8-0.7-1.5-1.5-1.5h-45c-0.8 0-1.5 0.7-1.5 1.5v5c0 0.8 0.7 1.5 1.5 1.5h45c0.8 0 1.5-0.7 1.5-1.5v-5z" fill={props.fill}/>
</svg>
  );
};

addPropertyControls(kanban_icon, {
  fill: {
    type: ControlType.Color,
    title: 'Fill',
    defaultValue: '#ffffff'
  }
});
  
