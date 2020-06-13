
import * as React from 'react';
import { addPropertyControls, ControlType } from 'framer';

export function new_custom97_icon(props) {
  return (
    <svg height="52" width="52" viewBox="0 0 52 52" xmlns="http://www.w3.org/2000/svg" {...props}>
	<path d="m34.2 29.3v-19c0-4.7-3.6-8.3-8.2-8.3h-0.1c-4.6 0-8.2 3.7-8.2 8.3v19c-2.4 2.3-3.7 5.4-3.7 8.7 0 6.6 5.4 12 12 12s12-5.4 12-12c0-3.4-1.3-6.4-3.8-8.7z m-1.9 8.7h-12.6c-0.7 0-1.2-0.7-1.1-1.4 0.3-1.8 1.3-3.4 2.7-4.5 0.5-0.5 0.9-1.1 0.9-1.8v-20c0-2.2 1.6-3.8 3.7-3.8h0.1c2.1 0 3.7 1.7 3.7 3.8v0.7h-2.2c-1.3 0-2.2 1-2.2 2.2s1 2.2 2.2 2.2h2.2v3h-2.2c-1.3 0-2.2 1-2.2 2.2s1 2.2 2.2 2.2h2.2v3h-2.2c-1.3 0-2.2 1-2.2 2.2s1 2.2 2.2 2.2h2.2c0.1 0.7 0.4 1.2 0.9 1.7 1.4 1.1 2.4 2.8 2.7 4.5 0.2 0.9-0.3 1.6-1 1.6z" fill={props.fill}/>
</svg>
  );
};

addPropertyControls(new_custom97_icon, {
  fill: {
    type: ControlType.Color,
    title: 'Fill',
    defaultValue: '#ffffff'
  }
});
  
