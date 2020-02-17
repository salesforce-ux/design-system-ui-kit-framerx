
import * as React from 'react';
import { addPropertyControls, ControlType } from 'framer';

export function skill_icon(props) {
  return (
    <svg height="100" width="100" viewBox="0 0 100 100" xmlns="http://www.w3.org/2000/svg" {...props}>
	<title/>
	<path d="m43.8 46.8a5.3 5.3 0 1 1 5.5-5.4 5.4 5.4 0 0 1-5.5 5.4z m33.5 8.9l-7.2-10.8v-0.9a24 24 0 0 0-23.9-24 22 22 0 0 0-5.7 0.7 23.9 23.9 0 0 0-18.2 23.3 21.9 21.9 0 0 0 3.6 12.7c4.2 6 7 10.8 5.3 17.3a4.6 4.6 0 0 0 0.9 4.2 4.4 4.4 0 0 0 3.6 1.8h19.6a4.7 4.7 0 0 0 4.7-3.8 5 5 0 0 0 0.2-1.2 2.4 2.4 0 0 1 2.4-2h1.4a4.7 4.7 0 0 0 4.7-3.4 41.3 41.3 0 0 0 1.5-9.6h5.1a2.8 2.8 0 0 0 2.2-1.6 2.9 2.9 0 0 0-0.2-2.7z m-19.8-8.4l-1 1.6a2.2 2.2 0 0 1-1.8 0.9 2.4 2.4 0 0 1-0.7-0.1l-2.6-1a11.6 11.6 0 0 1-3.9 2.2l-0.5 2.9a2 2 0 0 1-2 1.6h-2a2 2 0 0 1-2-1.6l-0.4-2.9a10 10 0 0 1-3.7-2l-2.8 1a2.4 2.4 0 0 1-0.8 0.1 2.1 2.1 0 0 1-1.7-1l-1-1.6a1.9 1.9 0 0 1 0.5-2.5l2.3-1.9a10.1 10.1 0 0 1-0.3-2.1 9.4 9.4 0 0 1 0.3-2l-2.3-2a1.9 1.9 0 0 1-0.5-2.5l1-1.7a2 2 0 0 1 1.8-1 2.4 2.4 0 0 1 0.7 0.2l2.8 1a11.5 11.5 0 0 1 3.7-2.1l0.4-2.8a1.9 1.9 0 0 1 2-1.6h2a1.9 1.9 0 0 1 2 1.5l0.5 2.9a11.3 11.3 0 0 1 3.7 2l2.8-1a2.4 2.4 0 0 1 0.7-0.2 2.1 2.1 0 0 1 1.8 1l1 1.6a2 2 0 0 1-0.5 2.6l-2.3 1.9a9.6 9.6 0 0 1 0.2 2.1 9.4 9.4 0 0 1-0.2 2l2.3 1.9a2 2 0 0 1 0.5 2.6z" fill={props.fill} fillRule="evenodd"/>
</svg>
  );
};

addPropertyControls(skill_icon, {
  fill: {
    type: ControlType.Color,
    title: 'Fill',
    defaultValue: '#ffffff'
  }
});
  