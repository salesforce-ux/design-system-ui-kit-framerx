
import * as React from 'react';
import { addPropertyControls, ControlType } from 'framer';

export function screen_icon(props) {
  return (
    <svg height="52" width="52" viewBox="0 0 52 52" xmlns="http://www.w3.org/2000/svg" {...props}>
	<path d="m50 6c0-2.2-1.8-4-4-4h-40c-2.2 0-4 1.8-4 4v27.7c0 2.2 1.8 4 4 4h40c2.2 0 4-1.8 4-4v-27.7z m-6 24.2c0 0.8-0.7 1.5-1.5 1.5h-33c-0.8 0-1.5-0.7-1.5-1.5v-20.7c0-0.8 0.7-1.5 1.5-1.5h33c0.8 0 1.5 0.7 1.5 1.5v20.7z m-25 13.8c-2.2 0-4 1.8-4 4v0.5c0 0.8 0.7 1.5 1.5 1.5h19c0.8 0 1.5-0.7 1.5-1.5v-0.5c0-2.2-1.8-4-4-4h-14z m-1-17.3h-4.1c-0.6 0-1-0.5-1-1v-11.7c0-0.6 0.4-1 1-1h4.1c0.5 0 1 0.4 1 1v11.7c0 0.6-0.5 1-1 1z m20.1 0h-13.3c-0.6 0-1-0.4-1-1v-11.7c0-0.6 0.4-1 1-1h13.3c0.5 0 1 0.4 1 1v11.7c0 0.6-0.5 1-1 1z" fill={props.fill}/>
</svg>
  );
};

addPropertyControls(screen_icon, {
  fill: {
    type: ControlType.Color,
    title: 'Fill',
    defaultValue: '#ffffff'
  }
});
  
