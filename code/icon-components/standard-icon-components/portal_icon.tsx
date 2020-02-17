
import * as React from 'react';
import { addPropertyControls, ControlType } from 'framer';

export function portal_icon(props) {
  return (
    <svg height="100" width="100" viewBox="0 0 100 100" xmlns="http://www.w3.org/2000/svg" {...props}>
	<path d="m72 22h-44c-3.3 0-6 2.7-6 6v44c0 3.3 2.7 6 6 6h44c3.3 0 6-2.7 6-6v-44c0-3.3-2.7-6-6-6z m-13 40.6c0.3 1.2-0.7 2.4-1.9 2.4h-14.1c-1.3 0-2.2-1.2-1.9-2.4l3.2-11c-3.1-2.2-4.9-6.1-4.1-10.4 0.8-4 3.9-7.2 7.9-7.9 6.3-1.3 11.9 3.6 11.9 9.9 0 3.5-1.7 6.5-4.3 8.3l3.3 11.1z" fill={props.fill}/>
</svg>
  );
};

addPropertyControls(portal_icon, {
  fill: {
    type: ControlType.Color,
    title: 'Fill',
    defaultValue: '#ffffff'
  }
});
  