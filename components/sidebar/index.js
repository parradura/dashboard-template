import { HomeIcon, UsersIcon, ChartBarIcon, UserIcon, CogIcon } from '@heroicons/react/outline'
import Link from 'next/link'
import { useEffect, useState } from 'react'
import { useRouter } from 'next/router'


function SidebarItem({path, Icon, label}) {

  const [isCurrentPath, setIsCurrentPath] = useState(false)
  const router = useRouter()

  useEffect(() => {
    setIsCurrentPath(router.pathname === path)
  },[router.pathname, path])

  return (
    <Link href={path}>
      <li className={`flex mb-8 p-1 hover:cursor-pointer hover:bg-slate-200 rounded-lg hover:shadow-md ${isCurrentPath ? 'bg-primary-500 text-white shadow-2xl' : 'bg-transparent'}`}>
        <div className='bg-white shadow-sm p-2 rounded-lg mr-3'>
          <Icon className='h-5 w-5 text-primary-500'/>
        </div>
        <span className='self-center'>{label}</span>
      </li>
    </Link>
  )
}

export default function Sidebar() {
  return (
    <div className='p-6 border-r w-64 h-screen border-gray-200 hidden md:block'>
      <h6 className='font-bold mb-4'>Quick actions</h6>
      <ul>
        <SidebarItem path="/" Icon={HomeIcon} label="Home"/>
        <SidebarItem path="/users" Icon={UsersIcon} label="Users"/>
        <SidebarItem path="/sales" Icon={ChartBarIcon} label="Sales"/>
      </ul>
      <h6 className='font-bold mb-4'>Configuration</h6>
      <ul>
        <SidebarItem path="/profile" Icon={UserIcon} label="Profile"/>
        <SidebarItem path="/settings" Icon={CogIcon} label="Settings"/>
      </ul>
    </div>
  )
}