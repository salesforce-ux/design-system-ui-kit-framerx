
import * as React from 'react';
import { addPropertyControls, ControlType } from 'framer';

export function product_item_transaction_icon(props) {
  return (
    <svg height="100" width="100" viewBox="0 0 100 100" xmlns="http://www.w3.org/2000/svg" {...props}>
	<rect height="16" width="60" fill={props.fill} rx="4" ry="4" x="19" y="18.92"/>
	<rect height="16" width="27" fill={props.fill} rx="4" ry="4" x="19" y="40.92"/>
	<rect height="16" width="27" fill={props.fill} rx="4" ry="4" x="19" y="62.92"/>
	<path d="m65 72.5a1.4 1.4 0 0 0 2 0l11.5-11.4a1.4 1.4 0 0 0 0-2.1l-11.5-11.5a1.4 1.4 0 0 0-2.1 0l-2.1 2.1a1.4 1.4 0 0 0 0 2.1l3.6 3.6a1 1 0 0 1-0.7 1.7h-12.1a1.6 1.6 0 0 0-1.6 1.5v3a1.7 1.7 0 0 0 1.6 1.5h12.2a1 1 0 0 1 0.7 1.7l-3.6 3.6a1.4 1.4 0 0 0 0 2.1z" fill={props.fill}/>
</svg>
  );
};

addPropertyControls(product_item_transaction_icon, {
  fill: {
    type: ControlType.Color,
    title: 'Fill',
    defaultValue: '#ffffff'
  }
});
  
