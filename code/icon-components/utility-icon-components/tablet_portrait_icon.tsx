
import * as React from 'react';
import { addPropertyControls, ControlType } from 'framer';

export function tablet_portrait_icon(props) {
  return (
    <svg height="52" width="52" viewBox="0 0 52 52" xmlns="http://www.w3.org/2000/svg" {...props}>
	<path d="m46 6c0-2.2-1.8-4-4-4h-32c-2.2 0-4 1.8-4 4v40c0 2.2 1.8 4 4 4h32c2.2 0 4-1.8 4-4v-40z m-20.1 42c-1.7 0-3-1.3-3-3s1.3-3 3-3 3 1.3 3 3-1.4 3-3 3z m14.1-9.5c0 0.8-0.7 1.5-1.5 1.5h-25c-0.8 0-1.5-0.7-1.5-1.5v-29c0-0.8 0.7-1.5 1.5-1.5h25c0.8 0 1.5 0.7 1.5 1.5v29z" fill={props.fill}/>
</svg>
  );
};

addPropertyControls(tablet_portrait_icon, {
  fill: {
    type: ControlType.Color,
    title: 'Fill',
    defaultValue: '#ffffff'
  }
});
  
