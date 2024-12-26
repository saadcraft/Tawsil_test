import React from 'react';
import Link from 'next/link';

type PropsClick = {
    click: React.MouseEventHandler<HTMLAnchorElement>;
    href: string;
    children: React.ReactNode;
  };

  type Props = {
    href: string;
    children: React.ReactNode;
  };

export function LinkStyleClick({children, href, click }: PropsClick) {
  return (
    <Link onClick={click} href={href} className='transition-all font-semibold cursor-pointer text-white text-md hover:text-third'>{children}</Link>
  )
}

export function LinkStyle({children, href}: Props) {
    return (
      <Link href={href} className='transition-all font-semibold cursor-pointer text-white text-md hover:text-third'>{children}</Link>
    )
  }

export function SmallLinkStyle({children, href}: Props) {
  return (
    <Link href={href} className='transition-all p-1.5 text-white text-sm hover:text-third cursor-pointer'>{children}</Link>
  )
}