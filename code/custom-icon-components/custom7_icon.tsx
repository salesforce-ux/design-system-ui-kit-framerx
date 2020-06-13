
import * as React from 'react';
import { addPropertyControls, ControlType } from 'framer';

export function custom7_icon(props) {
  return (
    <svg height="100" width="100" viewBox="0 0 100 100" xmlns="http://www.w3.org/2000/svg" {...props}>
	<path d="m28 78c-3.3 0-6-2.7-6-6v-44c0-3.3 2.7-6 6-6h44c3.3 0 6 2.7 6 6v44c0 3.3-2.7 6-6 6h-44z" fill={props.fill}/>
</svg>
  );
};

addPropertyControls(custom7_icon, {
  fill: {
    type: ControlType.Color,
    title: 'Fill',
    defaultValue: '#ffffff'
  }
});
  
