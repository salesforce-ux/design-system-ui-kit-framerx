
import * as React from 'react';
import { addPropertyControls, ControlType } from 'framer';

export function strategy_icon(props) {
  return (
    <svg height="100" width="100" viewBox="0 0 100 100" xmlns="http://www.w3.org/2000/svg" {...props}>
	<title/>
	<path d="m76.1 40.8h-10.1c-2.2 0-4 1.8-4 4v2.5h-9.4v-19.7c0-0.6-0.6-1.3-1.3-1.3h-13.3v-2.4c0-2.2-1.8-4-4-4h-10.1c-2.2 0-4 1.8-4 4v10.1c0 2.2 1.8 4 4 4h10.1c2.2 0 4-1.8 4-4v-2.4h9.3v15.7h-9.3v-2.3c0-2.2-1.8-4-4-4h-10.1c-2.2 0-4 1.8-4 4v10c0 2.2 1.8 4 4 4h10.1c2.2 0 4-1.8 4-4v-2.4h9.3v15.7h-9.3v-2.3c0-2.2-1.8-4-4-4h-10.1c-2.2 0-4 1.8-4 4v10.1c0 2.2 1.8 4 4 4h10.1c2.2 0 4-1.8 4-4v-2.4h13.3c0.7 0 1.3-0.7 1.3-1.3v-19.7h9.4v2.2c0 2.2 1.8 4 4 4h10.1c2.2 0 4-1.8 4-4v-10.1c0-2.2-1.8-4-4-4z m-42.1-6.8h-10.1v-10.1h10.1v10.1z m0 2v-2 2z m0 19h-10.1v-10h10.1v10z m0 2v-2 2z m0 19.1h-10.1v-10.1h10.1v10.1z m0 2v-2 2z m42.1-23.2h-10.1v-10.1h10.1v10.1z m0 2v-2 2z" fill={props.fill}/>
</svg>
  );
};

addPropertyControls(strategy_icon, {
  fill: {
    type: ControlType.Color,
    title: 'Fill',
    defaultValue: '#ffffff'
  }
});
  
