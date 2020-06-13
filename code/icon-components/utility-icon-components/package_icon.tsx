
import * as React from 'react';
import { addPropertyControls, ControlType } from 'framer';

export function package_icon(props) {
  return (
    <svg height="52" width="52" viewBox="0 0 52 52" xmlns="http://www.w3.org/2000/svg" {...props}>
	<path d="m44.4 24h-7.9l-3.3 4h10.8v6h-36v-6h10.7l-3.3-4h-7.8c-2 0-3.6 1.6-3.6 3.6v19.4c0 1.7 1.3 3 3 3h38c1.7 0 3-1.3 3-3v-19.4c0-2-1.6-3.6-3.6-3.6z m-21.4-20.5v12.5h-6.9c-1 0-1.5 0.9-0.9 1.4l10 12.3c0.4 0.3 1 0.3 1.4 0l10-12.3c0.6-0.6 0.1-1.4-0.9-1.4h-6.7v-12.5c0-0.8-0.7-1.5-1.5-1.5h-3c-0.8 0-1.5 0.7-1.5 1.5z" fill={props.fill}/>
</svg>
  );
};

addPropertyControls(package_icon, {
  fill: {
    type: ControlType.Color,
    title: 'Fill',
    defaultValue: '#ffffff'
  }
});
  
