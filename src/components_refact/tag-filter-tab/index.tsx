import { FC } from 'react';

const TagFilterTab : FC<{ tag: string }> = ({ tag }) => (
  tag
    ? (
      <li className='nav-item'>
        <a href='' className='nav-link active'>
          <i className='ion-pound' />
          {' '}
          {tag}
        </a>
      </li>
    )
    : null
);

export default TagFilterTab;
