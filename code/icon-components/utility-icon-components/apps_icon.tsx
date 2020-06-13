
import * as React from 'react';
import { addPropertyControls, ControlType } from 'framer';

export function apps_icon(props) {
  return (
    <svg height="52" width="52" viewBox="0 0 52 52" xmlns="http://www.w3.org/2000/svg" {...props}>
	<path d="m13 4h-6c-1.7 0-3 1.3-3 3v6c0 1.7 1.3 3 3 3h6c1.7 0 3-1.3 3-3v-6c0-1.7-1.3-3-3-3z m0 32h-6c-1.7 0-3 1.3-3 3v6c0 1.7 1.3 3 3 3h6c1.7 0 3-1.3 3-3v-6c0-1.7-1.3-3-3-3z m0-16h-6c-1.7 0-3 1.3-3 3v6c0 1.7 1.3 3 3 3h6c1.7 0 3-1.3 3-3v-6c0-1.7-1.3-3-3-3z m16-16h-6c-1.7 0-3 1.3-3 3v6c0 1.7 1.3 3 3 3h6c1.7 0 3-1.3 3-3v-6c0-1.7-1.3-3-3-3z m0 32h-6c-1.7 0-3 1.3-3 3v6c0 1.7 1.3 3 3 3h6c1.7 0 3-1.3 3-3v-6c0-1.7-1.3-3-3-3z m0-16h-6c-1.7 0-3 1.3-3 3v6c0 1.7 1.3 3 3 3h6c1.7 0 3-1.3 3-3v-6c0-1.7-1.3-3-3-3z m16-16h-6c-1.7 0-3 1.3-3 3v6c0 1.7 1.3 3 3 3h6c1.7 0 3-1.3 3-3v-6c0-1.7-1.3-3-3-3z m0 32h-6c-1.7 0-3 1.3-3 3v6c0 1.7 1.3 3 3 3h6c1.7 0 3-1.3 3-3v-6c0-1.7-1.3-3-3-3z m0-16h-6c-1.7 0-3 1.3-3 3v6c0 1.7 1.3 3 3 3h6c1.7 0 3-1.3 3-3v-6c0-1.7-1.3-3-3-3z" fill={props.fill}/>
</svg>
  );
};

addPropertyControls(apps_icon, {
  fill: {
    type: ControlType.Color,
    title: 'Fill',
    defaultValue: '#ffffff'
  }
});
  
