
import * as React from 'react';
import { addPropertyControls, ControlType } from 'framer';

export function video_icon(props) {
  return (
    <svg height="52" width="52" viewBox="0 0 52 52" xmlns="http://www.w3.org/2000/svg" {...props}>
	<path d="m46.9 13.1l-11 7.9v-5.6c0-1.5-1.2-2.7-2.7-2.7h-28.5c-1.5 0-2.7 1.2-2.7 2.7v21.3c0 1.5 1.2 2.7 2.7 2.7h28.6c1.5 0 2.7-1.2 2.7-2.7v-5.5l10.9 7.8c0.7 0.7 1.9 0.2 1.9-0.8v-24.3c0-1-1.2-1.5-1.9-0.8z" fill={props.fill}/>
</svg>
  );
};

addPropertyControls(video_icon, {
  fill: {
    type: ControlType.Color,
    title: 'Fill',
    defaultValue: '#ffffff'
  }
});
  
