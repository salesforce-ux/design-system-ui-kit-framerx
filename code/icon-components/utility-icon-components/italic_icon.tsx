
import * as React from 'react';
import { addPropertyControls, ControlType } from 'framer';

export function italic_icon(props) {
  return (
    <svg height="52" width="52" viewBox="0 0 52 52" xmlns="http://www.w3.org/2000/svg" {...props}>
	<path d="m38 12.3v-1.3c0-1.1-0.9-2-2-2h-14c-1.1 0-2 0.9-2 2v2c0 1.1 0.9 2 2 2 1.7 0 3 1.6 2.6 3.2l-3.6 17.6c-0.3 1.3-1.4 2.2-2.6 2.2h-2.4c-1.1 0-2 0.9-2 2v2c0 1.1 0.9 2 2 2h14c1.1 0 2-0.9 2-2v-2c0-1.1-0.9-2-2-2-1.7 0-3-1.6-2.6-3.2l3.6-17.6c0.3-1.3 1.4-2.2 2.6-2.2h1.7c1.5 0 2.7-1.2 2.7-2.7z" fill={props.fill}/>
</svg>
  );
};

addPropertyControls(italic_icon, {
  fill: {
    type: ControlType.Color,
    title: 'Fill',
    defaultValue: '#ffffff'
  }
});
  