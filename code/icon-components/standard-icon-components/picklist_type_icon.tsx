
import * as React from 'react';
import { addPropertyControls, ControlType } from 'framer';

export function picklist_type_icon(props) {
  return (
    <svg height="100" width="100" viewBox="0 0 100 100" xmlns="http://www.w3.org/2000/svg" {...props}>
	<path d="m78 36h-40c-1.1 0-2-0.9-2-2v-4c0-1.1 0.9-2 2-2h40c1.1 0 2 0.9 2 2v4c0 1.1-0.9 2-2 2z m0 18h-40c-1.1 0-2-0.9-2-2v-4c0-1.1 0.9-2 2-2h40c1.1 0 2 0.9 2 2v4c0 1.1-0.9 2-2 2z m-52 0h-4c-1.1 0-2-0.9-2-2v-4c0-1.1 0.9-2 2-2h4c1.1 0 2 0.9 2 2v4c0 1.1-0.9 2-2 2z m0-18h-4c-1.1 0-2-0.9-2-2v-4c0-1.1 0.9-2 2-2h4c1.1 0 2 0.9 2 2v4c0 1.1-0.9 2-2 2z m0 36h-4c-1.1 0-2-0.9-2-2v-4c0-1.1 0.9-2 2-2h4c1.1 0 2 0.9 2 2v4c0 1.1-0.9 2-2 2z m52 0h-40c-1.1 0-2-0.9-2-2v-4c0-1.1 0.9-2 2-2h40c1.1 0 2 0.9 2 2v4c0 1.1-0.9 2-2 2z" fill={props.fill}/>
</svg>
  );
};

addPropertyControls(picklist_type_icon, {
  fill: {
    type: ControlType.Color,
    title: 'Fill',
    defaultValue: '#ffffff'
  }
});
  
