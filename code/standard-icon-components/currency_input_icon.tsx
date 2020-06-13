
import * as React from 'react';
import { addPropertyControls, ControlType } from 'framer';

export function currency_input_icon(props) {
  return (
    <svg height="100" width="100" viewBox="0 0 100 100" xmlns="http://www.w3.org/2000/svg" {...props}>
	<path d="m62.7 64.8c3.5-5.7 2.8-13.3-2.2-18.2-5.8-5.8-15.2-5.8-21 0-4.9 4.9-5.7 12.5-2.2 18.2h25.4z m17.3-38.8v48c0 3.3-2.7 6-6 6h-48c-3.3 0-6-2.7-6-6v-48c0-3.3 2.7-6 6-6h48c3.3 0 6 2.7 6 6z m-50 45.9h40c1.1 0 2-0.9 2-2v-39.9c0-1.1-0.9-2-2-2h-40c-1.1 0-2 0.9-2 2v39.9c0 1.1 0.9 2 2 2z" fill={props.fill}/>
</svg>
  );
};

addPropertyControls(currency_input_icon, {
  fill: {
    type: ControlType.Color,
    title: 'Fill',
    defaultValue: '#ffffff'
  }
});
  
