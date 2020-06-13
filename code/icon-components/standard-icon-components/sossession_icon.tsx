
import * as React from 'react';
import { addPropertyControls, ControlType } from 'framer';

export function sossession_icon(props) {
  return (
    <svg height="100" width="100" viewBox="0 0 100 100" xmlns="http://www.w3.org/2000/svg" {...props}>
	<path d="m49.6 18c-17.7 0.2-31.8 14.8-31.6 32.4 0.2 17.7 14.8 31.8 32.4 31.6 17.7-0.2 31.8-14.8 31.6-32.4-0.2-17.7-14.8-31.8-32.4-31.6z m0 4.2c4.8-0.1 9.3 1.1 13.2 3.1l-4.3 7.2c-2.6-1.3-5.5-2-8.5-2s-6 0.7-8.5 2l-4.3-7.2c3.7-1.9 7.9-3.1 12.4-3.1z m-17.1 36.3l-7.2 4.3c-1.9-3.7-3.1-8-3.1-12.5-0.1-4.8 1.1-9.3 3.1-13.2l7.2 4.3c-1.3 2.6-2 5.5-2 8.5s0.7 6.1 2 8.6z m17.9 19.3c-4.8 0.1-9.3-1.1-13.2-3.1l4.3-7.2c2.6 1.3 5.5 2 8.5 2s6-0.7 8.5-2l4.3 7.2c-3.7 1.9-7.9 3.1-12.4 3.1z m-0.4-12.5c-8.5 0-15.3-6.9-15.3-15.3 0-8.5 6.9-15.3 15.3-15.3 8.5 0 15.3 6.9 15.3 15.3 0 8.5-6.8 15.3-15.3 15.3z m17.5-6.8c1.3-2.6 2-5.5 2-8.5s-0.7-6-2-8.5l7.2-4.3c1.9 3.7 3.1 8 3.1 12.5 0.1 4.8-1.1 9.3-3.1 13.2l-7.2-4.4z" fill={props.fill}/>
</svg>
  );
};

addPropertyControls(sossession_icon, {
  fill: {
    type: ControlType.Color,
    title: 'Fill',
    defaultValue: '#ffffff'
  }
});
  
