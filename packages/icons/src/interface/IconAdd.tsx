import React from 'react';
import withIcon, { Props } from '../withIcon';

function IconAdd(props: Props) {
  return (
    <svg viewBox="0 0 24 24" {...props}>
      <path d="M18 13h-5v5c0 .55-.45 1-1 1s-1-.45-1-1v-5H6c-.55 0-1-.45-1-1s.45-1 1-1h5V6c0-.55.45-1 1-1s1 .45 1 1v5h5c.55 0 1 .45 1 1s-.45 1-1 1z" />
    </svg>
  );
}

export default withIcon('IconAdd')(IconAdd);
