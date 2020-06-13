
import * as React from 'react';
import { addPropertyControls, ControlType } from 'framer';

export function poll_icon(props) {
  return (
    <svg height="100" width="100" viewBox="0 0 100 100" xmlns="http://www.w3.org/2000/svg" {...props}>
	<path d="m76 20h-52c-2.2 0-4 1.8-4 4v8c0 2.2 1.8 4 4 4h52c2.2 0 4-1.8 4-4v-8c0-2.2-1.8-4-4-4z m-25 12v-8h25v8h-25z m25 10h-52c-2.2 0-4 1.8-4 4v8c0 2.2 1.8 4 4 4h52c2.2 0 4-1.8 4-4v-8c0-2.2-1.8-4-4-4z m-34 12v-8h34v8h-34z m34 10h-52c-2.2 0-4 1.8-4 4v8c0 2.2 1.8 4 4 4h52c2.2 0 4-1.8 4-4v-8c0-2.2-1.8-4-4-4z m-16 12v-8h16v8h-16z" fill={props.fill}/>
</svg>
  );
};

addPropertyControls(poll_icon, {
  fill: {
    type: ControlType.Color,
    title: 'Fill',
    defaultValue: '#ffffff'
  }
});
  
