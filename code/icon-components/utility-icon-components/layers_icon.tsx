
import * as React from 'react';
import { addPropertyControls, ControlType } from 'framer';

export function layers_icon(props) {
  return (
    <svg height="52" width="52" viewBox="0 0 52 52" xmlns="http://www.w3.org/2000/svg" {...props}>
	<path d="m36 20c0-2.2-1.8-4-4-4h-26c-2.2 0-4 1.8-4 4v26c0 2.2 1.8 4 4 4h26c2.2 0 4-1.8 4-4v-26z m7-18h-26c-3.9 0-7 3.1-7 7v3h26c2.2 0 4 1.8 4 4v26h3c3.9 0 7-3.1 7-7v-26c0-3.9-3.1-7-7-7z" fill={props.fill}/>
</svg>
  );
};

addPropertyControls(layers_icon, {
  fill: {
    type: ControlType.Color,
    title: 'Fill',
    defaultValue: '#ffffff'
  }
});
  
