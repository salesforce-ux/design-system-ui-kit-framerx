
import * as React from 'react';
import { addPropertyControls, ControlType } from 'framer';

export function investment_account_icon(props) {
  return (
    <svg height="100" width="100" viewBox="0 0 100 100" xmlns="http://www.w3.org/2000/svg" {...props}>
	<path d="m74 27h-48c-3.3 0-6 2.7-6 6v34c0 3.3 2.7 6 6 6h48c3.3 0 6-2.7 6-6v-34c0-3.3-2.7-6-6-6z m-5 27c0 0.9-1 1.3-1.7 0.7l-4.6-4.6-10.6 9.1c-1.2 1.2-3.1 1.2-4.2 0l-6.4-7.3-11.4 10c-0.4 0.4-1 0.4-1.4 0l-0.5-0.5c-0.4-0.4-0.4-1 0-1.4l11.2-15.3c1.2-1.2 3.1-1.2 4.2 0l6.4 6.4 6.5-7.5-4.2-3.8c-0.6-0.6-0.2-1.8 0.7-1.8h14c1.1 0 1.9 1 1.9 2.1v13.9z" fill={props.fill}/>
</svg>
  );
};

addPropertyControls(investment_account_icon, {
  fill: {
    type: ControlType.Color,
    title: 'Fill',
    defaultValue: '#ffffff'
  }
});
  
