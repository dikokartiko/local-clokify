import React from 'react'

function forms() {
  return (
    <div className="custom-attendance-live">
        <div className="attendance-live-head">
            <p className='font-semibold'>05:58 AM</p>
            <small className='font-medium'>Tue, 11 Jul 2023</small>
        </div>
        <div className="attendance-live-body">
            <small className='font-medium'>Schedule, 11 Jul 2023</small>
            <p className='font-semibold'>SH1</p>
            <p className='font-semibold'>09.00 AM - 17.00 PM</p>
            <div className='custom-input'>
                <textarea placeholder='Notes'></textarea>
                <div className='card-item-custom mt-4'>
                    <button class="text-sm buttonClockIn">
                        Clock In
                    </button>
                    <button class="text-sm buttonClockOut">
                        Clock Out
                    </button>
                </div>
            </div>
        </div>
    </div>
  )
}

export default forms