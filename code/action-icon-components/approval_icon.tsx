
import * as React from 'react';
import { addPropertyControls, ControlType } from 'framer';

export function approval_icon(props) {
  return (
    <svg height="52" width="52" viewBox="0 0 52 52" xmlns="http://www.w3.org/2000/svg" {...props}>
	<path d="m19 43.6l-16.5-16.6c-0.6-0.6-0.6-1.6 0-2.2l2.2-2.2c0.6-0.6 1.6-0.6 2.2 0l12.4 12.5c0.4 0.4 1.1 0.4 1.5 0l24.3-24.5c0.6-0.6 1.6-0.6 2.2 0l2.2 2.2c0.6 0.6 0.6 1.6 0 2.2l-28.3 28.6c-0.6 0.7-1.6 0.7-2.2 0z" fill={props.fill}/>
</svg>
  );
};

addPropertyControls(approval_icon, {
  fill: {
    type: ControlType.Color,
    title: 'Fill',
    defaultValue: '#ffffff'
  }
});
  
