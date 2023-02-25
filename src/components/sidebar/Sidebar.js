import React from 'react'
import logo from '../../assets/images/logo.png'
export default function Sidebar() {
  return (
    <div className="dashboard_sidebar">
          <div className="dashboard_sidebar--wrapper">
            <div className="logo">
                <a href="">
                <span className="logo--icon"><img src={logo} alt='logo'/></span>
                <span className="logo--text">Dashboard Kit</span>
            </a></div>

            <div className="overview">
                <a href="">
                <span className="overview--icon"><i className="fa-sharp fa-solid fa-list"></i></span>
                <span className="overview--text">Dashboard Kit</span>
            </a></div>


            <div className="ticket">
                <a href="">
                <span className="ticket--icon"><i className="fas fa-ticket-alt"></i></span>
                <span className="ticket--text">Ticket</span>
            </a></div>
            <div className="ticket">
                <a href="">
                <span className="ticket--icon"><i className="fa-solid fa-lightbulb"></i></span>
                <span className="ticket--text">Ideas</span>
            </a></div>

            <div className="ticket">
                <a href="">
                <span className="ticket--icon"><i className="fa-solid fa-address-book"></i></span>
                <span className="ticket--text">Contacts</span>
            </a></div>
            <div className="ticket">
                <a href="">
                <span className="ticket--icon"><i className="fa-sharp fa-solid fa-person"></i></span>
                <span className="ticket--text">Agents</span>
            </a></div>
            <hr className="divider"/>
            <div className="ticket">
                <a href="">
                <span className="ticket--icon"><i className="fa-solid fa-gear"></i></span>
                <span className="ticket--text">Setting</span>
            </a></div>

            <div className="ticket">
                <a href="">
                <span className="ticket--icon"><i className="fa-solid fa-credit-card"></i></span>
                <span className="ticket--text">Subscription</span>
            </a></div>
          </div>
      </div>
  )
}
