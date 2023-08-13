import React from 'react'
import FormAttendance from './components/forms'
import { Link } from "react-router-dom";

function index() {
  return (
    <div className='attendanceLive'>
        <FormAttendance></FormAttendance>
        <div>
          <p className='font-semibold'>Attendance Log</p>
          <div className='card-item-custom'>
            <div className='card-item-custom'>
              <div>
                <p className='font-semibold'>05:58 AM</p>
                <small className='font-medium'>11 Jul</small>
              </div>
              <div>
                <p className='font-semibold'>Clock In</p>
              </div>
            </div>
            <div className='details-log'>
              <Link to="/attandance-log">Details</Link>
            </div>
          </div>
        </div>
    </div>
  )
}

export default index