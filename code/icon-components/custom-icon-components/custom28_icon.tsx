
import * as React from 'react';
import { addPropertyControls, ControlType } from 'framer';

export function custom28_icon(props) {
  return (
    <svg height="100" width="100" viewBox="0 0 100 100" xmlns="http://www.w3.org/2000/svg" {...props}>
	<path d="m64 20h-28c-3.3 0-6 2.7-6 6v48c0 3.3 2.7 6 6 6h28c3.3 0 6-2.7 6-6v-48c0-3.3-2.7-6-6-6z m-14 58c-1.7 0-3-1.3-3-3s1.3-3 3-3 3 1.3 3 3-1.3 3-3 3z m14-10c0 1.1-0.9 2-2 2h-24c-1.1 0-2-0.9-2-2v-38c0-1.1 0.9-2 2-2h24c1.1 0 2 0.9 2 2v38z" fill={props.fill}/>
</svg>
  );
};

addPropertyControls(custom28_icon, {
  fill: {
    type: ControlType.Color,
    title: 'Fill',
    defaultValue: '#ffffff'
  }
});
  
