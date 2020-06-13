
import * as React from 'react';
import { addPropertyControls, ControlType } from 'framer';

export function filter_icon(props) {
  return (
    <svg height="100" width="100" viewBox="0 0 100 100" xmlns="http://www.w3.org/2000/svg" {...props}>
	<path d="m77 20h-56c-1.9 0-2.8 2.1-1.6 3.5l24.2 28.6c0.8 0.9 1.1 2.1 1.1 3.3v22.7c0 1 1 1.9 2 1.9h4.4c1 0 1.8-0.9 1.8-1.9v-22.6c0-1.3 0.5-2.4 1.4-3.3l24.3-28.6c1.2-1.4 0.3-3.6-1.6-3.6z" fill={props.fill}/>
</svg>
  );
};

addPropertyControls(filter_icon, {
  fill: {
    type: ControlType.Color,
    title: 'Fill',
    defaultValue: '#ffffff'
  }
});
  
