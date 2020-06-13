
import * as React from 'react';
import { addPropertyControls, ControlType } from 'framer';

export function google_news_icon(props) {
  return (
    <svg height="52" width="52" viewBox="0 0 52 52" xmlns="http://www.w3.org/2000/svg" {...props}>
	<path d="m50.3 5.3l-3.6 3.6c-0.4 0.4-1 0.4-1.4 0l-4.6-4.6c-0.4-0.4-1-0.4-1.4 0l-3.6 3.6c-0.4 0.4-1 0.4-1.4 0l-3.6-3.6c-0.4-0.4-1-0.4-1.4 0l-3.6 3.6c-0.4 0.4-1 0.4-1.4 0l-3.6-3.6c-0.4-0.4-1-0.4-1.4 0l-3.6 3.6c-0.4 0.4-1 0.4-1.4 0l-3.6-3.6c-0.4-0.4-1-0.4-1.4 0l-3.6 3.6c-0.4 0.4-1 0.4-1.4 0l-2.6-2.6c-0.6-0.6-1.7-0.2-1.7 0.7v38c0 2.2 1.8 4 4 4h44c2.2 0 4-1.8 4-4v-38c0-0.9-1.1-1.3-1.7-0.7z m-29.3 35.7c0 0.6-0.4 1-1 1h-12c-0.6 0-1-0.4-1-1v-18c0-0.6 0.4-1 1-1h12c0.6 0 1 0.4 1 1v18z m24 0c0 0.6-0.4 1-1 1h-18c-0.6 0-1-0.4-1-1v-2c0-0.6 0.4-1 1-1h18c0.6 0 1 0.4 1 1v2z m0-7h-20v-4h20v4z m0-9c0 0.6-0.4 1-1 1h-18c-0.6 0-1-0.4-1-1v-2c0-0.6 0.4-1 1-1h18c0.6 0 1 0.4 1 1v2z m0-8c0 0.6-0.4 1-1 1h-36c-0.6 0-1-0.4-1-1v-2c0-0.6 0.4-1 1-1h36c0.6 0 1 0.4 1 1v2z" fill={props.fill}/>
</svg>
  );
};

addPropertyControls(google_news_icon, {
  fill: {
    type: ControlType.Color,
    title: 'Fill',
    defaultValue: '#ffffff'
  }
});
  
