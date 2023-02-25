import React from 'react'
import DashboardIndex from '../components/dashboardcontent/DashboardIndex'
import Sidebar from '../components/sidebar/Sidebar'

export default function Home() {
  return (
    <div className='dashboard'>
    <Sidebar></Sidebar>
    <DashboardIndex></DashboardIndex>
   </div>
  )
}
