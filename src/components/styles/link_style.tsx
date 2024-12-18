import React from 'react'

type Props = {
    //href: string;
    children: React.ReactNode;
  };

export function LinkStyle({children }: Props) {
  return (
    <span className='transition-all font-semibold cursor-pointer text-white text-md hover:text-third'>{children}</span>
  )
}

export function SmallLinkStyle({children}: Props) {
  return (
    <span className='transition-all p-1.5 text-white text-sm hover:text-third cursor-pointer'>{children}</span>
  )
}
