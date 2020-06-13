
import * as React from 'react';
import { addPropertyControls, ControlType } from 'framer';

export function document_icon(props) {
  return (
    <svg height="100" width="100" viewBox="0 0 100 100" xmlns="http://www.w3.org/2000/svg" {...props}>
	<path d="m73 42h-14c-3.3 0-6-2.7-6-6v-14c0-1.1-0.9-2-2-2h-20c-3.3 0-6 2.7-6 6v48c0 3.3 2.7 6 6 6h38c3.3 0 6-2.7 6-6v-30c0-1.1-0.9-2-2-2z m1.6-8.4l-13.2-13.2c-0.3-0.3-0.6-0.4-1-0.4-0.8 0-1.4 0.6-1.4 1.4v10.6c0 2.2 1.8 4 4 4h10.6c0.8 0 1.4-0.6 1.4-1.4 0-0.4-0.1-0.7-0.4-1z" fill={props.fill}/>
</svg>
  );
};

addPropertyControls(document_icon, {
  fill: {
    type: ControlType.Color,
    title: 'Fill',
    defaultValue: '#ffffff'
  }
});
  
