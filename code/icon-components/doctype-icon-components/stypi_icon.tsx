
import * as React from 'react';
import { addPropertyControls, ControlType } from 'framer';

export function stypi_icon(props) {
  return (
    <svg height="64" width="56" viewBox="0 0 56 64" xmlns="http://www.w3.org/2000/svg" {...props}>
	<g fillRule="evenodd">
		<path d="m5.1 0c-2.8 0-5.1 2.3-5.1 5.1v53.8c0 2.8 2.3 5.1 5.1 5.1h45.7c2.8 0 5.1-2.3 5.1-5.1v-38.6l-18.9-20.3h-31.9z" fill="#DDD965"/>
		<path d="m56 20.4v1h-12.8s-6.3-1.3-6.2-6.8c0 0 0.3 5.8 6.1 5.8h12.9z" fill="#C1BC45"/>
		<path d="m37.1 0v14.6c0 1.6 1.1 5.8 6.1 5.8h12.8l-18.9-20.4z" fill={props.fill} opacity=".5"/>
		<path d="m29.4 34.8h-17.6c-0.9 0-1.6 0.7-1.6 1.6v16c0 0.8 0.7 1.5 1.6 1.5h13.1l6.1-6v-11.5c0-0.9-0.7-1.6-1.6-1.6z" fill={props.fill}/>
		<path d="m13.7 43.6h13.7v1.6h-13.7z m0-3.6h13.7v1.6h-13.7z m0 7.1h8.9v1.7h-8.9z" fill="#DBD75D"/>
	</g>
</svg>
  );
};

addPropertyControls(stypi_icon, {
  fill: {
    type: ControlType.Color,
    title: 'Fill',
    defaultValue: '#ffffff'
  }
});
  
