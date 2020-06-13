
import * as React from 'react';
import { addPropertyControls, ControlType } from 'framer';

export function first_non_empty_icon(props) {
  return (
    <svg height="100" width="100" viewBox="0 0 100 100" xmlns="http://www.w3.org/2000/svg" {...props}>
	<path d="m55.9 49.3l22.7-22.8c0.8-0.8 0.8-2 0-2.9l-2.7-2.9c-0.8-0.8-2-0.8-2.9 0l-22.9 22.9c-0.5 0.5-1.4 0.5-1.9 0l-22.8-23c-0.8-0.8-2-0.8-2.9 0l-2.9 2.9c-0.8 0.8-0.8 2 0 2.9l22.8 22.8c0.5 0.5 0.5 1.4 0 1.9l-22.8 22.9c-0.8 0.8-0.8 2 0 2.9l2.9 2.9c0.8 0.8 2 0.8 2.9 0l22.8-22.8c0.5-0.5 1.4-0.5 1.9 0l22.6 22.6c0.8 0.8 2 0.8 2.9 0l2.9-2.9c0.8-0.8 0.8-2 0-2.9l-22.6-22.6c-0.6-0.6-0.6-1.4 0-1.9z" fill={props.fill}/>
</svg>
  );
};

addPropertyControls(first_non_empty_icon, {
  fill: {
    type: ControlType.Color,
    title: 'Fill',
    defaultValue: '#ffffff'
  }
});
  
