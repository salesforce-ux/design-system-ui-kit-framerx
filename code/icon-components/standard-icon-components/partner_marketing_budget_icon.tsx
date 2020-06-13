
import * as React from 'react';
import { addPropertyControls, ControlType } from 'framer';

export function partner_marketing_budget_icon(props) {
  return (
    <svg height="100" width="100" viewBox="0 0 100 100" xmlns="http://www.w3.org/2000/svg" {...props}>
	<path d="m73.8 37.8c-18.2 5.6-32.5-11.6-52.5-3.5-1.5 0.6-2.3 2-2.3 3.7v20.7c0 2.7 2.3 4.5 4.8 3.7 19.7-6 34.1 11.2 52.6 3.5 1.4-0.6 2.5-1.9 2.5-3.7v-20.7c0.1-2.5-2.6-4.5-5.1-3.7z m-24.2 19.4c-4.3 0-7.7-3.5-7.7-7.7s3.5-7.7 7.7-7.7 7.7 3.5 7.7 7.7-3.5 7.7-7.7 7.7z" fill={props.fill}/>
</svg>
  );
};

addPropertyControls(partner_marketing_budget_icon, {
  fill: {
    type: ControlType.Color,
    title: 'Fill',
    defaultValue: '#ffffff'
  }
});
  
