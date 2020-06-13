
import * as React from 'react';
import { addPropertyControls, ControlType } from 'framer';

export function insert_tag_field_icon(props) {
  return (
    <svg height="52" width="52" viewBox="0 0 52 52" xmlns="http://www.w3.org/2000/svg" {...props}>
	<path d="m16.3 12.2l-2.3-1.9c-0.7-0.5-1.5-0.4-2.1 0.2l-11.6 14.6c-0.4 0.5-0.4 1.3 0 1.9l11.7 14.5c0.5 0.6 1.4 0.8 2.1 0.2l2.3-1.9c0.7-0.5 0.8-1.5 0.2-2.1l-9.4-11.7 9.5-11.7c0.4-0.6 0.3-1.5-0.4-2.1z m35.4 12.9l-11.7-14.5c-0.5-0.6-1.4-0.8-2.1-0.2l-2.3 1.9c-0.7 0.5-0.8 1.5-0.2 2.1l9.5 11.7-9.5 11.7c-0.5 0.6-0.4 1.6 0.2 2.1l2.3 1.9c0.7 0.5 1.5 0.4 2.1-0.2l11.7-14.6c0.4-0.7 0.4-1.4 0-1.9z m-20.1-14.3l-3-0.7c-0.8-0.2-1.7 0.3-1.9 1.1l-7.4 28.4c-0.2 0.8 0.3 1.6 1.1 1.8l3 0.7c0.8 0.2 1.7-0.3 1.9-1.1l7.4-28.4c0.2-0.9-0.3-1.6-1.1-1.8z" fill={props.fill}/>
</svg>
  );
};

addPropertyControls(insert_tag_field_icon, {
  fill: {
    type: ControlType.Color,
    title: 'Fill',
    defaultValue: '#ffffff'
  }
});
  
