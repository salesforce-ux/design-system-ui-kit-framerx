
import * as React from 'react';
import { addPropertyControls, ControlType } from 'framer';

export function package_org_beta_icon(props) {
  return (
    <svg height="52" width="52" viewBox="0 0 52 52" xmlns="http://www.w3.org/2000/svg" {...props}>
	<path d="m44.4 23h-5.8c-0.4 1.5-1.1 2.8-2.1 4h7.5v6h-36v-6h6v-4h-6.4c-2 0-3.6 1.6-3.6 3.6v19.4c0 1.7 1.3 3 3 3h38c1.7 0 3-1.3 3-3v-19.4c0-2-1.6-3.6-3.6-3.6z m-9.4-13.1c0-3.9-3.4-6.9-7.2-6.9h-8.3c-0.8 0-1.5 0.7-1.5 1.5v21c0 0.8 0.7 1.5 1.5 1.5h8.5c3.9 0 7-3.2 6.9-7.1 0-1.9-0.8-3.6-2.1-4.8 1.4-1.4 2.2-3.2 2.2-5.2z m-13-2.9h6c1.6 0 3 1.3 3 3 0 1.6-1.3 3-3 3h-6v-6z m9 13c0 1.6-1.3 3-3 3h-6v-6h6c1.7 0 3 1.3 3 3z" fill={props.fill}/>
</svg>
  );
};

addPropertyControls(package_org_beta_icon, {
  fill: {
    type: ControlType.Color,
    title: 'Fill',
    defaultValue: '#ffffff'
  }
});
  
