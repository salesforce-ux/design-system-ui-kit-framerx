
import * as React from 'react';
import { addPropertyControls, ControlType } from 'framer';

export function archive_icon(props) {
  return (
    <svg height="52" width="52" viewBox="0 0 52 52" xmlns="http://www.w3.org/2000/svg" {...props}>
	<path d="m45.2 2.3h-38.4c-2.6 0-4.8 2.2-4.8 4.8v4.8c0 0.9 0.7 1.6 1.6 1.6h44.8c0.9 0 1.6-0.7 1.6-1.6v-4.8c0-2.6-2.2-4.8-4.8-4.8z m1.4 15.2h-41.1c-0.9 0-1.6 0.7-1.6 1.6v26.4c0 2.6 2.2 4.8 4.8 4.8h34.8c2.6 0 4.8-2.2 4.8-4.8v-26.4c-0.1-0.9-0.8-1.6-1.7-1.6z m-13.8 8h-13.6c-1.1 0-2-0.9-2-2s0.9-2 2-2h13.6c1.1 0 2 0.9 2 2s-0.9 2-2 2z" fill={props.fill}/>
</svg>
  );
};

addPropertyControls(archive_icon, {
  fill: {
    type: ControlType.Color,
    title: 'Fill',
    defaultValue: '#ffffff'
  }
});
  
