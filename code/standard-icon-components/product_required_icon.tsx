
import * as React from 'react';
import { addPropertyControls, ControlType } from 'framer';

export function product_required_icon(props) {
  return (
    <svg height="100" width="100" viewBox="0 0 100 100" xmlns="http://www.w3.org/2000/svg" {...props}>
	<title/>
	<rect height="7.99" width="36.07" fill={props.fill} rx="2" ry="2" x="43.93" y="68.27"/>
	<rect height="7.99" width="36.07" fill={props.fill} rx="2" ry="2" x="43.93" y="50.42"/>
	<rect height="7.99" width="30.08" fill={props.fill} rx="2" ry="2" x="49.92" y="32.57"/>
	<path d="m33.8 76.3h-4a2 2 0 0 1-2-2v-4a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2v4a1.9 1.9 0 0 1-2 2z m0-17.9h-4a2 2 0 0 1-2-2v-4a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2v4a1.9 1.9 0 0 1-2 2z" fill={props.fill} fillRule="evenodd"/>
	<path d="m47.5 26.3l-2.1-2.1a1.4 1.4 0 0 0-2.1 0l-13.2 13.1-5.4-5.2a1.4 1.4 0 0 0-2.1 0l-2.1 2.1a1.4 1.4 0 0 0 0 2.1l7.3 7.4a3 3 0 0 0 4.3 0l15.4-15.2a1.7 1.7 0 0 0 0-2.2z" fill={props.fill} fillRule="evenodd"/>
</svg>
  );
};

addPropertyControls(product_required_icon, {
  fill: {
    type: ControlType.Color,
    title: 'Fill',
    defaultValue: '#ffffff'
  }
});
  
