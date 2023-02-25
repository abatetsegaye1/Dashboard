import React from 'react'
import Activity from './Activity'
import Chart from './Chart'
import Profile from './Profile'
import Ticketstatus from './Ticketstatus'
export default function DashboardIndex() {
  return (
    <div className='dashboard_content'>
        <Profile></Profile>
        <Activity></Activity>
        <Chart></Chart>
        <Ticketstatus></Ticketstatus>
    </div>
  )
}
