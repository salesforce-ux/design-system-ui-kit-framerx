
import * as React from 'react';
import { addPropertyControls, ControlType } from 'framer';

export function share_poll_icon(props) {
  return (
    <svg height="52" width="52" viewBox="0 0 52 52" xmlns="http://www.w3.org/2000/svg" {...props}>
	<path d="m46.8 2h-41.6c-1.8 0-3.2 1.4-3.2 3.2v6.4c0 1.8 1.4 3.2 3.2 3.2h41.6c1.8 0 3.2-1.4 3.2-3.2v-6.4c0-1.8-1.4-3.2-3.2-3.2z m-20 9.6v-6.4h20v6.4h-20z m20 8h-41.6c-1.8 0-3.2 1.4-3.2 3.2v6.4c0 1.8 1.4 3.2 3.2 3.2h41.6c1.8 0 3.2-1.4 3.2-3.2v-6.4c0-1.8-1.4-3.2-3.2-3.2z m-27.2 9.6v-6.4h27.2v6.4h-27.2z m27.2 8h-41.6c-1.8 0-3.2 1.4-3.2 3.2v6.4c0 1.8 1.4 3.2 3.2 3.2h41.6c1.8 0 3.2-1.4 3.2-3.2v-6.4c0-1.8-1.4-3.2-3.2-3.2z m-12.8 9.6v-6.4h12.8v6.4h-12.8z" fill={props.fill}/>
</svg>
  );
};

addPropertyControls(share_poll_icon, {
  fill: {
    type: ControlType.Color,
    title: 'Fill',
    defaultValue: '#ffffff'
  }
});
  
