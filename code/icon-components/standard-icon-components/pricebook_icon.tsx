
import * as React from 'react';
import { addPropertyControls, ControlType } from 'framer';

export function pricebook_icon(props) {
  return (
    <svg height="100" width="100" viewBox="0 0 100 100" xmlns="http://www.w3.org/2000/svg" {...props}>
	<path d="m71.7 20h-37.6c-3.3 0-6.1 2.8-6.1 5.8v2.2h-2c-2.2 0-4 1.8-4 4s1.8 4 4 4h2v10h-2c-2.2 0-4 1.8-4 4s1.8 4 4 4h2v10h-2c-2.2 0-4 1.8-4 4s1.8 4 4 4h2v1.8c0 3 2.8 6.2 6.1 6.2h37.6c3.3 0 6.3-3.3 6.3-6.6v-48c0-3.3-3-5.4-6.3-5.4z m-28.7 41c0 0.6-0.4 1-1 1h-4c-0.6 0-1-0.4-1-1v-22c0-0.6 0.4-1 1-1h4c0.6 0 1 0.4 1 1v22z m8 0c0 0.6-0.4 1-1 1h-2c-0.6 0-1-0.4-1-1v-22c0-0.6 0.4-1 1-1h2c0.6 0 1 0.4 1 1v22z m10 0c0 0.6-0.4 1-1 1h-4c-0.6 0-1-0.4-1-1v-22c0-0.6 0.4-1 1-1h4c0.6 0 1 0.4 1 1v22z m8 0c0 0.6-0.4 1-1 1h-2c-0.6 0-1-0.4-1-1v-22c0-0.6 0.4-1 1-1h2c0.6 0 1 0.4 1 1v22z" fill={props.fill}/>
</svg>
  );
};

addPropertyControls(pricebook_icon, {
  fill: {
    type: ControlType.Color,
    title: 'Fill',
    defaultValue: '#ffffff'
  }
});
  
