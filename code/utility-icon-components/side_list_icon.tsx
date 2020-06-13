
import * as React from 'react';
import { addPropertyControls, ControlType } from 'framer';

export function side_list_icon(props) {
  return (
    <svg height="52" width="52" viewBox="0 0 52 52" xmlns="http://www.w3.org/2000/svg" {...props}>
	<path d="m48.5 4h-27c-0.8 0-1.5 0.7-1.5 1.5v41c0 0.8 0.7 1.5 1.5 1.5h27c0.8 0 1.5-0.7 1.5-1.5v-41c0-0.8-0.7-1.5-1.5-1.5z m-34 0h-11c-0.8 0-1.5 0.7-1.5 1.5v5c0 0.8 0.7 1.5 1.5 1.5h11c0.8 0 1.5-0.7 1.5-1.5v-5c0-0.8-0.7-1.5-1.5-1.5z m0 12h-11c-0.8 0-1.5 0.7-1.5 1.5v5c0 0.8 0.7 1.5 1.5 1.5h11c0.8 0 1.5-0.7 1.5-1.5v-5c0-0.8-0.7-1.5-1.5-1.5z m0 12h-11c-0.8 0-1.5 0.7-1.5 1.5v5c0 0.8 0.7 1.5 1.5 1.5h11c0.8 0 1.5-0.7 1.5-1.5v-5c0-0.8-0.7-1.5-1.5-1.5z m0 12h-11c-0.8 0-1.5 0.7-1.5 1.5v5c0 0.8 0.7 1.5 1.5 1.5h11c0.8 0 1.5-0.7 1.5-1.5v-5c0-0.8-0.7-1.5-1.5-1.5z" fill={props.fill}/>
</svg>
  );
};

addPropertyControls(side_list_icon, {
  fill: {
    type: ControlType.Color,
    title: 'Fill',
    defaultValue: '#ffffff'
  }
});
  
