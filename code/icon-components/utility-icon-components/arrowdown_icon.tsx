
import * as React from 'react';
import { addPropertyControls, ControlType } from 'framer';

export function arrowdown_icon(props) {
  return (
    <svg height="52" width="52" viewBox="0 0 52 52" xmlns="http://www.w3.org/2000/svg" {...props}>
	<path d="m9.6 31c-0.8 0.8-0.8 1.9 0 2.7l15 14.7c0.8 0.8 2 0.8 2.8 0l15.1-14.7c0.8-0.8 0.8-1.9 0-2.7l-2.8-2.7c-0.8-0.8-2-0.8-2.8 0l-4.7 4.6c-0.8 0.8-2.2 0.3-2.2-0.9v-27c0-1-0.9-2-2-2h-4c-1.1 0-2 1.1-2 2v27c0 1.2-1.4 1.7-2.2 0.9l-4.7-4.6c-0.8-0.8-2-0.8-2.8 0l-2.7 2.7z" fill={props.fill}/>
</svg>
  );
};

addPropertyControls(arrowdown_icon, {
  fill: {
    type: ControlType.Color,
    title: 'Fill',
    defaultValue: '#ffffff'
  }
});
  
