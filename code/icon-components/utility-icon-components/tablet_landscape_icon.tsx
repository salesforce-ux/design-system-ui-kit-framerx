
import * as React from 'react';
import { addPropertyControls, ControlType } from 'framer';

export function tablet_landscape_icon(props) {
  return (
    <svg height="52" width="52" viewBox="0 0 52 52" xmlns="http://www.w3.org/2000/svg" {...props}>
	<path d="m50 10c0-2.2-1.8-4-4-4h-40c-2.2 0-4 1.8-4 4v32c0 2.2 1.8 4 4 4h40c2.2 0 4-1.8 4-4v-32z m-43.1 19c-1.7 0-3-1.3-3-3s1.3-3 3-3 3 1.3 3 3-1.4 3-3 3z m37.1 9.5c0 0.8-0.7 1.5-1.5 1.5h-29c-0.8 0-1.5-0.7-1.5-1.5v-25c0-0.8 0.7-1.5 1.5-1.5h29c0.8 0 1.5 0.7 1.5 1.5v25z" fill={props.fill}/>
</svg>
  );
};

addPropertyControls(tablet_landscape_icon, {
  fill: {
    type: ControlType.Color,
    title: 'Fill',
    defaultValue: '#ffffff'
  }
});
  
