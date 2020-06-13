
import * as React from 'react';
import { addPropertyControls, ControlType } from 'framer';

export function text_template_icon(props) {
  return (
    <svg height="52" width="52" viewBox="0 0 52 52" xmlns="http://www.w3.org/2000/svg" {...props}>
	<path d="m20.1 37.2v-0.2c0.2-2.7 2.4-4.9 5.2-4.9h6.7c-1.1-1.9-0.9-4.4 0.7-6.2l0.2-0.2 1.6-1.5c0.9-1 2.2-1.5 3.4-1.6v-16.5c0-2.2-1.8-4-4-4h-27.8c-2.2 0-4 1.8-4 4v27.9c0 2.2 1.8 4 4 4h13.9v-0.8z m-12-28.9c0-0.6 0.4-1 1-1h6c0.6 0 1 0.4 1 1v2.8c0 0.6-0.4 1-1 1h-6c-0.6 0-1-0.4-1-1v-2.8z m0 8.7c0-0.6 0.4-1 1-1h21.9c0.6 0 1 0.4 1 1v2.8c0 0.6-0.4 1-1 1h-21.8c-0.6 0-1-0.4-1-1l-0.1-2.8z m0 11.6v-2.8c0-0.6 0.4-1 1-1h18c0.6 0 1 0.4 1 1v2.8c0 0.6-0.4 1-1 1h-17.9c-0.7 0-1.1-0.4-1.1-1z m31.1-1.6c-0.6-0.5-1.3-0.5-1.7 0l-1.7 1.6c-0.4 0.5-0.4 1.2 0 1.6l4.4 4.4c0.2 0.2 0.2 0.3 0.2 0.6 0 0.5-0.3 0.8-0.8 0.8h-14.3c-0.6 0-1.1 0.5-1.2 1.1v2.4c0.1 0.6 0.6 1.1 1.2 1.3h14.3c0.2 0 0.3 0.1 0.4 0.2 0.3 0.2 0.4 0.8 0.2 1.1l-4.4 4.4c-0.4 0.5-0.4 1.2 0 1.6l1.6 1.7c0.5 0.4 1.2 0.4 1.6 0l10.6-10.6c0.4-0.5 0.4-1.2 0-1.6l-10.4-10.6z" fill={props.fill}/>
</svg>
  );
};

addPropertyControls(text_template_icon, {
  fill: {
    type: ControlType.Color,
    title: 'Fill',
    defaultValue: '#ffffff'
  }
});
  
