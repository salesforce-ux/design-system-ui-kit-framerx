
import * as React from 'react';
import { addPropertyControls, ControlType } from 'framer';

export function quote_icon(props) {
  return (
    <svg height="52" width="52" viewBox="0 0 52 52" xmlns="http://www.w3.org/2000/svg" {...props}>
	<path d="m45.2 2.1h-17.5c-1.1-0.1-2.1 0.5-2.9 1.3l-21.4 21.5c-1.8 1.8-1.8 4.9 0 6.8l17 17c1.8 1.8 4.9 1.8 6.8 0l21.7-21.8c0.8-0.8 1.3-2.1 1.2-3.2v-16.8c-0.1-2.6-2.3-4.8-4.9-4.8z m-17.3 35.2l-1.1 1.1c-0.6 0.6-1.6 0.6-2.2 0l-10.9-10.8c-0.6-0.6-0.6-1.6 0-2.2l1.1-1.1c0.6-0.6 1.6-0.6 2.2 0l10.9 10.9c0.7 0.5 0.7 1.5 0 2.1z m6.4-6.4l-1.1 1.1c-0.6 0.6-1.6 0.6-2.2 0l-10.9-10.8c-0.6-0.6-0.6-1.6 0-2.2l1.1-1.1c0.6-0.6 1.6-0.6 2.2 0l10.9 10.9c0.7 0.5 0.7 1.5 0 2.1z m4.5-13.6c-2.2 0-4-1.8-4-4s1.8-4 4-4 4 1.8 4 4-1.8 4-4 4z" fill={props.fill}/>
</svg>
  );
};

addPropertyControls(quote_icon, {
  fill: {
    type: ControlType.Color,
    title: 'Fill',
    defaultValue: '#ffffff'
  }
});
  
