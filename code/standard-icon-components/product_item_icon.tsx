
import * as React from 'react';
import { addPropertyControls, ControlType } from 'framer';

export function product_item_icon(props) {
  return (
    <svg height="100" width="100" viewBox="0 0 100 100" xmlns="http://www.w3.org/2000/svg" {...props}>
	<rect height="16" width="60" fill={props.fill} rx="4" ry="4" x="19" y="18.92"/>
	<rect height="16" width="27" fill={props.fill} rx="4" ry="4" x="19" y="40.92"/>
	<rect height="16" width="27" fill={props.fill} rx="4" ry="4" x="19" y="62.92"/>
	<rect height="16" width="27" fill={props.fill} rx="4" ry="4" x="52" y="40.92"/>
	<rect height="16" width="27" fill={props.fill} rx="4" ry="4" x="52" y="62.92"/>
</svg>
  );
};

addPropertyControls(product_item_icon, {
  fill: {
    type: ControlType.Color,
    title: 'Fill',
    defaultValue: '#ffffff'
  }
});
  
