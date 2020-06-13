
import * as React from 'react';
import { addPropertyControls, ControlType } from 'framer';

export function news_icon(props) {
  return (
    <svg height="52" width="52" viewBox="0 0 52 52" xmlns="http://www.w3.org/2000/svg" {...props}>
	<path d="m50.5 6h-41c-0.8 0-1.5 0.7-1.5 1.5v30.5c0 1.2-1.1 2.2-2.3 2-1-0.2-1.7-1.1-1.7-2.1v-21.9c0-0.6-0.4-1-1-1h-1.5c-0.8 0-1.5 0.7-1.5 1.5v25.5c0 2.2 1.8 4 4 4h44c2.2 0 4-1.8 4-4v-34.5c0-0.8-0.7-1.5-1.5-1.5z m-22.5 29c0 0.6-0.4 1-1 1h-12c-0.6 0-1-0.4-1-1v-2c0-0.6 0.4-1 1-1h12c0.6 0 1 0.4 1 1v2z m0-8c0 0.6-0.4 1-1 1h-12c-0.6 0-1-0.4-1-1v-2c0-0.6 0.4-1 1-1h12c0.6 0 1 0.4 1 1v2z m18 8c0 0.6-0.4 1-1 1h-12c-0.6 0-1-0.4-1-1v-2c0-0.6 0.4-1 1-1h12c0.6 0 1 0.4 1 1v2z m0-8c0 0.6-0.4 1-1 1h-12c-0.6 0-1-0.4-1-1v-2c0-0.6 0.4-1 1-1h12c0.6 0 1 0.4 1 1v2z m0-8c0 0.6-0.4 1-1 1h-30c-0.6 0-1-0.4-1-1v-6c0-0.6 0.4-1 1-1h30c0.6 0 1 0.4 1 1v6z" fill={props.fill}/>
</svg>
  );
};

addPropertyControls(news_icon, {
  fill: {
    type: ControlType.Color,
    title: 'Fill',
    defaultValue: '#ffffff'
  }
});
  
