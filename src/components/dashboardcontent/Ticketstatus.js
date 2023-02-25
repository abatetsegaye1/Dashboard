import React from 'react'

export default function Ticketstatus() {
  return (
    <div className="ticket_task">
    <div className="ticket_task--wrapper">
        <div className="unresolved_task">
                <div className="task_para">
                    <p className="task_para--ticket">Unresolved tickets</p> 
                    <div className="task_para--group">
                        <small className="group-sm">Group:</small>
                        <p>Support</p>
                    </div>
                </div>
                <span className="detail"><a href="">View detail</a></span> 
        </div>
        <div className="ticket_task--item">
           <p className="item--para">Waiting Feature Request</p>
           <span className="item-small">4433</span>
        </div>
        <div className="ticket_task--item">
            <p className="item--para">Waiting Feature Request</p>
            <span className="item-small">4433</span>
        </div>
        <div className="ticket_task--item">
            <p className="item--para">Waiting Customer Response</p>
            <span className="item-small">4433</span> 
        </div>
        <div className="ticket_task--item">
            <p className="item--para">Awaiting Developer Fix</p>
            <span className="item-small">4433</span>
        </div>
        <div className="ticket_task--item">
            <p className="item--para">Pending</p>
            <span className="item-small">4433</span>
        </div>
    </div>
    <div className="ticket_task--wrapper tasktwo">
        <div className="unresolved_task">
                <div className="task_para">
                    <p className="task_para--ticket">Tasks</p> 
                    <div className="task_para--group">
                        <small className="group-sm">Today</small>
                        
                    </div>
                </div>
                <span className="detail"><a href="">View detail</a></span> 
        </div>
        <div className="ticket_task--item center">
           <input type="text" placeholder="Create task here..." className="task_add"/>
           <button><span className="task_add--icon"><i className="fas fa-plus"></i></span></button>
        </div>
        <div className="ticket_task--item center">
            <div className="check-input">
            <input name="input_update" type="checkbox"/>
            <span className="input_para">Finish Ticket Update</span>
        </div>
            <button className="urgent_button"><span className="urgent_button--text">URGENT</span></button>
        </div>
        <div className="ticket_task--item center">
            <div className="check-input">
                <input name="input_finish" type="checkbox"/>
                <span className="input_para">Finish Ticket Update</span>
            </div>
            <button className="new_button"><span className="new_button--text">NEW</span></button>
        </div>
        <div className="ticket_task--item">
            <div className="check-input">
                <input name="input_default" type="checkbox" />
                <span className="input_para">Finish Ticket Update</span>
            </div>
            <button className="default_button"><span className="default_button--text">DEFAULT</span></button>
        </div>
      
    </div>
   </div>
  )
}
