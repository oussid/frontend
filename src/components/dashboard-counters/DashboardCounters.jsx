import React from 'react'
import './dashboard-counter.css'
import {FiMap} from 'react-icons/fi'
import {TbMan} from 'react-icons/tb'
import {HiOutlineOfficeBuilding} from 'react-icons/hi'
import {BsPeople} from 'react-icons/bs'

export default function DashboardCounters() {
    const data = [
        {
            id: 0,
            name: 'Clients',
            number: 128,
            icon: <TbMan size={'2.5rem'}/>
        },
        {
            id: 1,
            name: 'Appartements',
            number: 524,
            icon: <HiOutlineOfficeBuilding size={'2.5rem'}/>
        },
        {
            id: 2,
            name: 'Employées',
            number: 455,
            icon: <BsPeople size={'2.5rem'}/>
        },
        {
            id: 3,
            name: 'Projets',
            number: 63,
            icon: <FiMap size={'2.5rem'}/>
        },
    ]
  return (
    <div className='admin-dashboard-squares'>
        {
            data.map(item=>{
              return <div key={item.id} className="admin-dashboard-square">
                        <div className="dashboard-square-left">
                            <div className="dashboard-square-left-number">
                                {item.number}
                            </div>
                            <div className="dashboard-square-left-name">
                                {item.name}
                            </div>
                        </div>

                        <div className="dashboard-square-right">
                            {item.icon}
                        </div>
                    </div>

            })
        }
    </div>
  )
}
