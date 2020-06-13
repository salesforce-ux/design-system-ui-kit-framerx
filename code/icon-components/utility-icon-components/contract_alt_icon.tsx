
import * as React from 'react';
import { addPropertyControls, ControlType } from 'framer';

export function contract_alt_icon(props) {
  return (
    <svg height="52" width="52" viewBox="0 0 52 52" xmlns="http://www.w3.org/2000/svg" {...props}>
	<path d="m29.6 23.9h15.4c1 0 1.3-1.1 0.5-1.9l-4.9-5 9-9.1c0.5-0.5 0.5-1.4 0-1.9l-3.7-3.7c-0.5-0.4-1.3-0.4-1.9 0.1l-9 9-5.1-4.9c-0.8-0.8-1.9-0.5-1.9 0.5v15.4c0 0.7 0.9 1.5 1.6 1.5z m-7.2 4.1h-15.4c-1 0-1.3 1.1-0.5 1.9l4.9 5-9 9.1c-0.5 0.5-0.5 1.4 0 1.9l3.7 3.7c0.5 0.5 1.3 0.5 1.9 0l9.1-9.1 5.1 4.9c0.7 0.9 1.8 0.6 1.8-0.4v-15.3c0-0.7-0.9-1.7-1.6-1.7z" fill={props.fill}/>
</svg>
  );
};

addPropertyControls(contract_alt_icon, {
  fill: {
    type: ControlType.Color,
    title: 'Fill',
    defaultValue: '#ffffff'
  }
});
  
