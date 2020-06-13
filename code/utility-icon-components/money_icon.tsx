
import * as React from 'react';
import { addPropertyControls, ControlType } from 'framer';

export function money_icon(props) {
  return (
    <svg height="52" width="52" viewBox="0 0 52 52" xmlns="http://www.w3.org/2000/svg" {...props}>
	<path d="m30.1 26.1c0-2.3 1.4-4.3 3.3-5.3-0.3-3.9-3.5-6.9-7.5-6.9-4.1 0-7.5 3.4-7.5 7.5s3.4 7.5 7.5 7.5c1.5 0 3-0.5 4.1-1.3v-1.5z m0 10.3v-1.9c0-0.7 0.1-1.3 0.3-1.9h-17.6c0-2.9-2.3-5.3-5.3-5.3v-11.2c2.9 0 5.3-2.3 5.3-5.3h26.3c0 2.9 2.3 5.3 5.3 5.3v4h3.8c0.7 0 1.3 0.1 1.9 0.3v-10.7c0-2.5-2-4.5-4.5-4.5h-39.1c-2.5 0-4.5 2-4.5 4.5v24.2c0 2.5 2 4.5 4.5 4.5h24c-0.2-0.6-0.4-1.3-0.4-2z m19.9 8.5c0 1-1 1.9-2 1.9h-12c-1 0-1.9-0.9-1.9-1.9v-1.9c0-1 0.9-1.9 1.9-1.9h12.1c1 0 1.9 0.9 1.9 1.9v1.9z m0-8.4c0 1-1 1.9-2 1.9h-12c-1 0-1.9-0.9-1.9-1.9v-1.9c0-1 0.9-1.9 1.9-1.9h12.1c1 0 1.9 0.9 1.9 1.9v1.9z m0-8.5c0 1-1 1.9-2 1.9h-12c-1 0-1.9-0.9-1.9-1.9v-1.9c0-1 0.9-1.9 1.9-1.9h12.1c1 0 1.9 0.9 1.9 1.9v1.9z" fill={props.fill}/>
</svg>
  );
};

addPropertyControls(money_icon, {
  fill: {
    type: ControlType.Color,
    title: 'Fill',
    defaultValue: '#ffffff'
  }
});
  
