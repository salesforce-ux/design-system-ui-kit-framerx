
import * as React from 'react';
import { addPropertyControls, ControlType } from 'framer';

export function internal_share_icon(props) {
  return (
    <svg height="52" width="52" viewBox="0 0 52 52" xmlns="http://www.w3.org/2000/svg" {...props}>
	<path d="m2.3 37.9v0.2c0 0.8 0.6 1.4 1.4 1.4 0.4 0 0.7-0.1 1-0.4 0 0 10.1-10.9 22.5-7.6v11c0 0.8 0.6 1.4 1.4 1.4 0.3 0 0.5-0.1 0.7-0.2l20.1-17.1c0.3-0.3 0.5-0.7 0.5-1.1 0-0.4-0.2-0.8-0.4-1l-20.1-16.3c-0.2-0.1-0.5-0.2-0.8-0.2-0.8 0-1.4 0.6-1.4 1.4v10.3c-0.1 0-19.9-3-24.9 18.2z" fill={props.fill} fillRule="evenodd"/>
</svg>
  );
};

addPropertyControls(internal_share_icon, {
  fill: {
    type: ControlType.Color,
    title: 'Fill',
    defaultValue: '#ffffff'
  }
});
  
