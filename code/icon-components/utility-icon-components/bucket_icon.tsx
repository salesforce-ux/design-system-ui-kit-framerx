
import * as React from 'react';
import { addPropertyControls, ControlType } from 'framer';

export function bucket_icon(props) {
  return (
    <svg height="52" width="52" viewBox="0 0 52 52" xmlns="http://www.w3.org/2000/svg" {...props}>
	<path d="m49 11c0-6.2-9.8-9-19-9s-19 2.8-19 9v0.4c-8.6 2.6-10 8.1-10 11.2 0 3 1.5 6.1 4.1 8.3 2.3 1.9 5.1 3 7.9 3.1h0.8c6.5-0.2 12.9-2.3 14.7-5.9-0.9-0.7-1.5-1.9-1.5-3.1 0-2.2 1.8-4 4-4s4 1.8 4 4c0 1.7-1 3.1-2.5 3.7-2 5.6-10 9.3-19.5 9.3v6c0 3.3 7.6 6 17 6s17-2.7 17-6v-28.7c1.3-1.2 2-2.6 2-4.3z m-19-3c6.6 0 10.8 1.5 12.4 2.6 0.3 0.2 0.3 0.6 0 0.8-1.6 1.1-5.8 2.6-12.4 2.6s-10.8-1.5-12.4-2.6c-0.3-0.2-0.3-0.6 0-0.8 1.6-1.1 5.8-2.6 12.4-2.6z m-22.3 19.8c-1.7-1.4-2.7-3.3-2.7-5.2 0-4.5 4.1-6.6 7.7-7.5l0.3 0.3v14.6c-1.9-0.1-3.8-0.9-5.3-2.2z" fill={props.fill}/>
</svg>
  );
};

addPropertyControls(bucket_icon, {
  fill: {
    type: ControlType.Color,
    title: 'Fill',
    defaultValue: '#ffffff'
  }
});
  
