
import * as React from 'react';
import { addPropertyControls, ControlType } from 'framer';

export function add_photo_video_icon(props) {
  return (
    <svg height="52" width="52" viewBox="0 0 52 52" xmlns="http://www.w3.org/2000/svg" {...props}>
	<path d="m26 20c-4.4 0-8 3.6-8 8s3.6 8 8 8 8-3.6 8-8-3.6-8-8-8z m20-6h-5.2c-1.4 0-2.6-0.7-3.4-1.8l-2.3-3.5c-0.7-1.7-2.4-2.7-4.2-2.7h-9.8c-1.8 0-3.5 1-4.3 2.7l-2.3 3.5c-0.7 1.1-2 1.8-3.4 1.8h-5.1c-2.2 0-4 1.8-4 4v24c0 2.2 1.8 4 4 4h40c2.2 0 4-1.8 4-4v-24c0-2.2-1.8-4-4-4z m-20 26c-6.6 0-12-5.4-12-12s5.4-12 12-12 12 5.4 12 12-5.4 12-12 12z" fill={props.fill}/>
</svg>
  );
};

addPropertyControls(add_photo_video_icon, {
  fill: {
    type: ControlType.Color,
    title: 'Fill',
    defaultValue: '#ffffff'
  }
});
  
