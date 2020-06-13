
import * as React from 'react';
import { addPropertyControls, ControlType } from 'framer';

export function warning_icon(props) {
  return (
    <svg height="52" width="52" viewBox="0 0 52 52" xmlns="http://www.w3.org/2000/svg" {...props}>
	<path d="m51.4 42.5l-22.9-37c-1.2-2-3.8-2-5 0l-22.9 37c-1.4 2.3 0 5.5 2.5 5.5h45.8c2.5 0 4-3.2 2.5-5.5z m-25.4-2.5c-1.7 0-3-1.3-3-3s1.3-3 3-3 3 1.3 3 3-1.3 3-3 3z m3-9c0 0.6-0.4 1-1 1h-4c-0.6 0-1-0.4-1-1v-13c0-0.6 0.4-1 1-1h4c0.6 0 1 0.4 1 1v13z" fill={props.fill}/>
</svg>
  );
};

addPropertyControls(warning_icon, {
  fill: {
    type: ControlType.Color,
    title: 'Fill',
    defaultValue: '#ffffff'
  }
});
  
