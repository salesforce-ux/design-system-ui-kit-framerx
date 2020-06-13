
import * as React from 'react';
import { addPropertyControls, ControlType } from 'framer';

export function product_icon(props) {
  return (
    <svg height="100" width="100" viewBox="0 0 100 100" xmlns="http://www.w3.org/2000/svg" {...props}>
	<path d="m22 66h5c1.1 0 2-0.9 2-2v-31c0-1.1-0.9-2-2-2h-5c-1.1 0-2 0.9-2 2v31c0 1.1 0.9 2 2 2z m56-35h-5c-1.1 0-2 0.9-2 2v31c0 1.1 0.9 2 2 2h5c1.1 0 2-0.9 2-2v-31c0-1.1-0.9-2-2-2z m-25 35c1.1 0 2-0.9 2-2v-31c0-1.1-0.9-2-2-2h-6c-1.1 0-2 0.9-2 2v31c0 1.1 0.9 2 2 2h6z m12 0c1.1 0 2-0.9 2-2v-31c0-1.1-0.9-2-2-2h-2c-1.1 0-2 0.9-2 2v31c0 1.1 0.9 2 2 2h2z m-26 0c1.1 0 2-0.9 2-2v-31c0-1.1-0.9-2-2-2h-2c-1.1 0-2 0.9-2 2v31c0 1.1 0.9 2 2 2h2z m39 6h-56c-1.1 0-2 0.9-2 2v2c0 1.1 0.9 2 2 2h56c1.1 0 2-0.9 2-2v-2c0-1.1-0.9-2-2-2z m0-52h-56c-1.1 0-2 0.9-2 2v2c0 1.1 0.9 2 2 2h56c1.1 0 2-0.9 2-2v-2c0-1.1-0.9-2-2-2z" fill={props.fill}/>
</svg>
  );
};

addPropertyControls(product_icon, {
  fill: {
    type: ControlType.Color,
    title: 'Fill',
    defaultValue: '#ffffff'
  }
});
  
