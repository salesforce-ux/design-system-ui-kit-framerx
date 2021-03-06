
import * as React from 'react';
import { addPropertyControls, ControlType } from 'framer';

export function multi_picklist_icon(props) {
  return (
    <svg height="100" width="100" viewBox="0 0 100 100" xmlns="http://www.w3.org/2000/svg" {...props}>
	<path d="m73 20h-32c-3.3 0-6 2.7-6 6v1c0 0.6 0.4 1 1 1h29c3.3 0 6 2.7 6 6v31c0 0.6 0.4 1 1 1h1c3.3 0 6-2.7 6-6v-34c0-3.3-2.7-6-6-6z m-14 14h-32c-3.3 0-6 2.7-6 6v34c0 3.3 2.7 6 6 6h32c3.3 0 6-2.7 6-6v-34c0-3.3-2.7-6-6-6z m-24 36c0 1.1-0.9 2-2 2h-2c-1.1 0-2-0.9-2-2v-2c0-1.1 0.9-2 2-2h2c1.1 0 2 0.9 2 2v2z m0-12c0 1.1-0.9 2-2 2h-2c-1.1 0-2-0.9-2-2v-2c0-1.1 0.9-2 2-2h2c1.1 0 2 0.9 2 2v2z m0-12c0 1.1-0.9 2-2 2h-2c-1.1 0-2-0.9-2-2v-2c0-1.1 0.9-2 2-2h2c1.1 0 2 0.9 2 2v2z m22 24c0 1.1-0.9 2-2 2h-13.8c-1.1 0-2-0.9-2-2v-2c0-1.1 0.9-2 2-2h13.8c1.1 0 2 0.9 2 2v2z m0-12c0 1.1-0.9 2-2 2h-13.8c-1.1 0-2-0.9-2-2v-2c0-1.1 0.9-2 2-2h13.8c1.1 0 2 0.9 2 2v2z m0-12c0 1.1-0.9 2-2 2h-13.8c-1.1 0-2-0.9-2-2v-2c0-1.1 0.9-2 2-2h13.8c1.1 0 2 0.9 2 2v2z" fill={props.fill}/>
</svg>
  );
};

addPropertyControls(multi_picklist_icon, {
  fill: {
    type: ControlType.Color,
    title: 'Fill',
    defaultValue: '#ffffff'
  }
});
  
