
import * as React from 'react';
import { addPropertyControls, ControlType } from 'framer';

export function bookmark_icon(props) {
  return (
    <svg height="52" width="52" viewBox="0 0 52 52" xmlns="http://www.w3.org/2000/svg" {...props}>
	<path d="m37.3 49.6l-9.9-9.9c-0.6-0.6-1.5-0.6-2.1 0l-10.6 10c-0.7 0.6-1.7 0.2-1.7-0.7v-43c0-2.2 1.8-4 4-4h18c2.2 0 4 1.8 4 4v42.9c0 0.9-1.1 1.4-1.7 0.7z" fill={props.fill}/>
</svg>
  );
};

addPropertyControls(bookmark_icon, {
  fill: {
    type: ControlType.Color,
    title: 'Fill',
    defaultValue: '#ffffff'
  }
});
  
