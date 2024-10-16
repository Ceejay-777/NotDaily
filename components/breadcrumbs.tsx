'use client'
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import React from 'react'

interface BreadcrumbItem {
  href: string;
  label: string;
  isCurrent: boolean;
}

const Breadcrumbs = () => {
  const pathname = usePathname() || ""
  const paths : string[] = pathname.split('/').filter((path) => path && path !== "home");

  const breadcrumbs: BreadcrumbItem[] = paths.map((path, index) => {
    const href = `/${paths.slice(0, index + 1).join('/')}`;
    console.log(href)
    return {
      href,
      label: path.charAt(0).toUpperCase() + path.slice(1),
      isCurrent: index === paths.length - 1
    };
  });

  return (
    <div className='breadcrumbs'>
      <ul>
        <li>
          <Link href="/">Home</Link>
        </li>
        {breadcrumbs.map((breadcrumb) => {
          return (
            <li key={breadcrumb.href}>
              <Link href={breadcrumb.href}>{breadcrumb.label}</Link>
            </li>
          )
        })}
      </ul>
    </div>
  )
}

export default Breadcrumbs