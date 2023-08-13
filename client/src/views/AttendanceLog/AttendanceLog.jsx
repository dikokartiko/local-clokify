import React from 'react'
import dataCards from './getData/CardsData'
import Table from './components/Table'
import Cards from './components/Cards'
import Filter from './components/Filter'

function AttendanceLog() {
    return (
        <div className='p-4 attendance'>
            <div className="mb-4 mt-4 attendanceFilter">
                <Filter></Filter>
            </div>
            <div className='attendanceCards mb-4'>
                {dataCards.map((item, key) => {
                    return (
                        <Cards
                            key={key}
                            labelCard={item?.labelCard}
                            dataCardItem={item?.data}
                        ></Cards>
                    );
                })}
            </div>
            <div className='attendanceTable mt-4'>
                <Table></Table>
            </div>
        </div>
    )
}

export default AttendanceLog