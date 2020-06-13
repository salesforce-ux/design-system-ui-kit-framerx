
import * as React from 'react';
import { addPropertyControls, ControlType } from 'framer';

export function empty_icon(props) {
  return (
    <svg height="100" width="100" viewBox="0 0 100 100" xmlns="http://www.w3.org/2000/svg" {...props}>
	<path d="m72 78h-44c-3.3 0-6-2.7-6-6v-44c0-3.3 2.7-6 6-6h44c3.3 0 6 2.7 6 6v44c0 3.3-2.7 6-6 6z m-44-48v40c0 1.1 0.9 2 2 2h40c1.1 0 2-0.9 2-2v-40c0-1.1-0.9-2-2-2h-40c-1.1 0-2 0.9-2 2z" fill={props.fill} opacity=".5"/>
</svg>
  );
};

addPropertyControls(empty_icon, {
  fill: {
    type: ControlType.Color,
    title: 'Fill',
    defaultValue: '#ffffff'
  }
});
  
