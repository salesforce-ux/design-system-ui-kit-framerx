
import * as React from 'react';
import { addPropertyControls, ControlType } from 'framer';

export function justify_text_icon(props) {
  return (
    <svg height="52" width="52" viewBox="0 0 52 52" xmlns="http://www.w3.org/2000/svg" {...props}>
	<path d="m48 6.5c0-0.8-0.7-1.5-1.5-1.5h-41c-0.8 0-1.5 0.7-1.5 1.5v3c0 0.8 0.7 1.5 1.5 1.5h41c0.8 0 1.5-0.7 1.5-1.5v-3z m0 12c0-0.8-0.7-1.5-1.5-1.5h-41c-0.8 0-1.5 0.7-1.5 1.5v3c0 0.8 0.7 1.5 1.5 1.5h41c0.8 0 1.5-0.7 1.5-1.5v-3z m0 24c0-0.8-0.7-1.5-1.5-1.5h-41c-0.8 0-1.5 0.7-1.5 1.5v3c0 0.8 0.7 1.5 1.5 1.5h41c0.8 0 1.5-0.7 1.5-1.5v-3z m0-12c0-0.8-0.7-1.5-1.5-1.5h-41c-0.8 0-1.5 0.7-1.5 1.5v3c0 0.8 0.7 1.5 1.5 1.5h41c0.8 0 1.5-0.7 1.5-1.5v-3z" fill={props.fill}/>
</svg>
  );
};

addPropertyControls(justify_text_icon, {
  fill: {
    type: ControlType.Color,
    title: 'Fill',
    defaultValue: '#ffffff'
  }
});
  
