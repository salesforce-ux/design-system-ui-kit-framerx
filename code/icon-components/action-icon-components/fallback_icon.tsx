
import * as React from 'react';
import { addPropertyControls, ControlType } from 'framer';

export function fallback_icon(props) {
  return (
    <svg height="52" width="52" viewBox="0 0 52 52" xmlns="http://www.w3.org/2000/svg" {...props}>
	<path d="m28 3.5l-3 14.6c0 0.6 0.4 0.9 0.9 0.9h15.6c1.1 0 1.8 1.3 1.3 2.3l-17 27.9c-0.7 1.4-2.8 0.9-2.8-0.7l3-17.2c0-0.6-0.5-0.4-1.1-0.4h-16.4c-1.1 0-1.9-1.6-1.3-2.6l18-25.5c0.7-1.3 2.8-0.9 2.8 0.7z" fill={props.fill}/>
</svg>
  );
};

addPropertyControls(fallback_icon, {
  fill: {
    type: ControlType.Color,
    title: 'Fill',
    defaultValue: '#ffffff'
  }
});
  
