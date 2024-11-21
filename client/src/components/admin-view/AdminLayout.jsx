import React from 'react'
import { Outlet } from 'react-router-dom'
import AdminSidebar from './AdminSidebar'
import AdminHeader from './AdminHeader'

const AdminLayout = () => {
  return (
    <div className='flex min-h-screen w-full'>
        {/* Sidebar */}
        <AdminSidebar />
        <div className='flex flex-1 flex-col'>
            {/* Header */}
            <AdminHeader />
            <main className='flex-1 flex bg-muted/40 p-4 md:p-6'>
                <Outlet/>
            </main>
        </div>
      
    </div>
  )
}

export default AdminLayout
