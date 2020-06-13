
import * as React from 'react';
import { addPropertyControls, ControlType } from 'framer';

export function layout_icon(props) {
  return (
    <svg height="52" width="52" viewBox="0 0 52 52" xmlns="http://www.w3.org/2000/svg" {...props}>
	<path d="m48 50h-44c-1.1 0-2-0.9-2-2v-44c0-1.1 0.9-2 2-2h44c1.1 0 2 0.9 2 2v44c0 1.1-0.9 2-2 2z m-42-4h40v-40h-40v40z m33-26h-26c-0.6 0-1-0.4-1-1v-6c0-0.6 0.4-1 1-1h26c0.6 0 1 0.4 1 1v6c0 0.6-0.4 1-1 1z m-20 20h-6c-0.6 0-1-0.4-1-1v-12c0-0.6 0.4-1 1-1h6c0.6 0 1 0.4 1 1v12c0 0.6-0.4 1-1 1z m20 0h-12c-0.6 0-1-0.4-1-1v-12c0-0.6 0.4-1 1-1h12c0.6 0 1 0.4 1 1v12c0 0.6-0.4 1-1 1z" fill={props.fill}/>
</svg>
  );
};

addPropertyControls(layout_icon, {
  fill: {
    type: ControlType.Color,
    title: 'Fill',
    defaultValue: '#ffffff'
  }
});
  
