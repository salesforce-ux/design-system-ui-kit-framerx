
import * as React from 'react';
import { addPropertyControls, ControlType } from 'framer';

export function quick_text_icon(props) {
  return (
    <svg height="100" width="100" viewBox="0 0 100 100" xmlns="http://www.w3.org/2000/svg" {...props}>
	<title/>
	<path d="m49.5 21.5c-16.7 0-29.9 12.3-29.9 27.4 0 4.8 1.4 9.3 3.6 13.3 0.4 0.6 0.5 1.4 0.3 2.1l-3.9 10.7c-0.4 1 0.6 1.9 1.6 1.6l10.8-4.1c0.6-0.3 1.4-0.1 2.1 0.3 4.5 2.5 9.9 4 15.7 4 16.4-0.1 29.8-12.3 29.8-27.6-0.1-15.4-13.5-27.7-30.1-27.7z m-13.9 26.5c0-0.6 0.5-1.2 1.2-1.2h19.4c0.6 0 1.2 0.5 1.2 1.2v2.3c0 0.6-0.5 1.2-1.2 1.2h-19.5c-0.6 0-1.2-0.5-1.2-1.2v-2.3z m27.9 11.6c0 0.6-0.5 1.2-1.2 1.2h-25.6c-0.6 0-1.2-0.5-1.2-1.2v-2.3c0-0.6 0.5-1.2 1.2-1.2h25.6c0.6 0 1.2 0.5 1.2 1.2v2.3z m0-18.6c0 0.6-0.5 1.2-1.2 1.2h-25.6c-0.6 0-1.2-0.5-1.2-1.2v-2.3c0-0.6 0.5-1.2 1.2-1.2h25.6c0.6 0 1.2 0.5 1.2 1.2v2.3z" fill={props.fill}/>
</svg>
  );
};

addPropertyControls(quick_text_icon, {
  fill: {
    type: ControlType.Color,
    title: 'Fill',
    defaultValue: '#ffffff'
  }
});
  
