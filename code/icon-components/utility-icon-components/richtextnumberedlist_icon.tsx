
import * as React from 'react';
import { addPropertyControls, ControlType } from 'framer';

export function richtextnumberedlist_icon(props) {
  return (
    <svg height="52" width="52" viewBox="0 0 52 52" xmlns="http://www.w3.org/2000/svg" {...props}>
	<path d="m50 6.5v3c0 0.8-0.7 1.5-1.5 1.5h-27c-0.8 0-1.5-0.7-1.5-1.5v-3c0-0.8 0.7-1.5 1.5-1.5h27c0.8 0 1.5 0.7 1.5 1.5z m-28.5 14.5h18c0.8 0 1.5-0.7 1.5-1.5v-3c0-0.8-0.7-1.5-1.5-1.5h-18c-0.8 0-1.5 0.7-1.5 1.5v3c0 0.8 0.7 1.5 1.5 1.5z m27 9h-27c-0.8 0-1.5 0.7-1.5 1.5v3c0 0.8 0.7 1.5 1.5 1.5h27c0.8 0 1.5-0.7 1.5-1.5v-3c0-0.8-0.7-1.5-1.5-1.5z m-9 10h-18c-0.8 0-1.5 0.7-1.5 1.5v3c0 0.8 0.7 1.5 1.5 1.5h18c0.8 0 1.5-0.7 1.5-1.5v-3c0-0.8-0.7-1.5-1.5-1.5z m-36-32h2.5v12.5c0 0.8 0.7 1.5 1.5 1.5h1c0.8 0 1.5-0.7 1.5-1.5v-14.5c0-1.1-0.9-2-2-2h-4.5c-0.8 0-1.5 0.7-1.5 1.5v1c0 0.8 0.7 1.5 1.5 1.5z m8.5 20h-8.5c-0.8 0-1.5 0.7-1.5 1.5v1c0 0.8 0.7 1.5 1.5 1.5h6.5v4h-6c-1.1 0-2 0.9-2 2v8c0 1.1 0.9 2 2 2h8.5c0.8 0 1.5-0.7 1.5-1.5v-1c0-0.8-0.7-1.5-1.5-1.5h-6.5v-4h6c1.1 0 2-0.9 2-2v-8c0-1.1-0.9-2-2-2z" fill={props.fill}/>
</svg>
  );
};

addPropertyControls(richtextnumberedlist_icon, {
  fill: {
    type: ControlType.Color,
    title: 'Fill',
    defaultValue: '#ffffff'
  }
});
  
