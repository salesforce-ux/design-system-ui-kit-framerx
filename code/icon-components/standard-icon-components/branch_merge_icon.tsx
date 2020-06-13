
import * as React from 'react';
import { addPropertyControls, ControlType } from 'framer';

export function branch_merge_icon(props) {
  return (
    <svg height="100" width="100" viewBox="0 0 100 100" xmlns="http://www.w3.org/2000/svg" {...props}>
	<path d="m26.5 70.5c3.4-7 9.4-12 16.3-14.5 2.6-1 5.3-1.6 7.9-1.9h4.4v13.6c0 1.1 1.2 1.7 2.2 1l21.2-17.7c0.8-0.6 0.8-2 0-2.5l-21.2-17.3c-0.8-0.6-2.2 0-2.2 1v13.7h-4.4c-2.7-0.3-5.5-1-7.9-1.9-6.8-2.6-12.9-7.5-16.3-14.5-0.4-1-1.6-1.4-2.6-1l-3.8 1.6c-1.1 0.5-1.4 1.6-0.8 2.7 3.6 7.6 9.4 13.5 16.2 17.2-6.9 3.7-12.6 9.6-16.2 17.3-0.5 1.1-0.4 2.2 0.8 2.7l3.8 1.6c1 0.4 2.2-0.1 2.6-1.1z" fill={props.fill}/>
</svg>
  );
};

addPropertyControls(branch_merge_icon, {
  fill: {
    type: ControlType.Color,
    title: 'Fill',
    defaultValue: '#ffffff'
  }
});
  
