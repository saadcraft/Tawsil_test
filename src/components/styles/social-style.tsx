import React from 'react'

type PropsClick = {
    children: React.ReactNode;
  };

export function SocialStyle({children}: PropsClick) {
    return (
      <div className='hidden sm:block'>{children}</div>
    )
  }
