
import * as React from 'react';
import { addPropertyControls, ControlType } from 'framer';

export function snippet_icon(props) {
  return (
    <svg height="100" width="100" viewBox="0 0 100 100" xmlns="http://www.w3.org/2000/svg" {...props}>
	<title/>
	<path d="m74.1 23.9c-12.1 0-21.3 9.4-21.3 21.4v28.8c0 1.1 0.9 2 2 2h22.8c1.1 0 2-0.9 2-2v-22.8c0-1.1-0.9-2-2-2h-16.8v-4c0-6.7 6.6-13.4 13.3-13.4h3.5c1.1 0 2-0.9 2-2v-4c0-1.1-0.9-2-2-2h-3.5z m-33.3 0c-12.1 0-21.3 9.4-21.3 21.4v28.8c0 1.1 0.9 2 2 2h22.8c1.1 0 2-0.9 2-2v-22.8c0-1.1-0.9-2-2-2h-16.7v-4c0-6.7 6.6-13.4 13.3-13.4h3.5c1.1 0 2-0.9 2-2v-4c0-1.1-0.9-2-2-2h-3.6z" fill={props.fill}/>
</svg>
  );
};

addPropertyControls(snippet_icon, {
  fill: {
    type: ControlType.Color,
    title: 'Fill',
    defaultValue: '#ffffff'
  }
});
  
