import React from 'react'
import AdminTable from '../../../components/admin-table/AdminTable'
import DashboardCounters from '../../../components/dashboard-counters/DashboardCounters'
import './dashboard.css'

export default function Dashboard() {
  const employees = [
    {
      id: 0,
      image: "/images/emp1.jpg",
      nom: "Mohamed Benali",
      
      ville: "Tanger"
    },
    {
      id: 1,
      image: "/images/emp2.jpg",
      nom: "Fatima Zohra El Amrani",
      
      ville: "Casablanca"
    },
    {
      id: 2,
      image: "/images/emp3.jpg",
      nom: "Karim El Fakir",
 
      ville: "Rabat"
    },
    {
      id: 3,
      image: "/images/emp4.jpg",
      nom: "Sanaa Zaidi",

      ville: "Fès"
    },
    {
      id: 4,
      image: "/images/avatar.jpg",
      nom: "Youssef Chraibi",

      ville: "Marrakech"
    }
  ];

  const clients = [
    {
      cin: 'LIC12345',
      nom: 'Youssef Benali',
      email: 'youssef.benali@example.com',
      tel: '0612345678'
    },
    {
      cin: 'LIC23456',
      nom: 'Sara Amiri',
      email: 'sara.amiri@example.com',
      tel: '0612345679'
    },
    {
      cin: 'LIC34567',
      nom: 'Ahmed Tazi',
      email: 'ahmed.tazi@example.com',
      tel: '0612345680'
    },
    {
      cin: 'LIC45678',
      nom: 'Fatima Bennis',
      email: 'fatima.bennis@example.com',
      tel: '0612345681'
    },
    {
      cin: 'LIC56789',
      nom: 'Karim El Haddad',
      email: 'karim.elhaddad@example.com',
      tel: '0612345682'
    }
  ];

  const empTableInfo = {
    tableType: 'overview',
    upperTitle: 'Employées',
    hasImgColumn: true,
    button: {
        text: "see more",
        type: "link",
        href: "/admin/employees"
    }
  }

  const cltTableInfo = {
    tableType: 'overview',
    upperTitle: 'Clients recents',
    hasImgColumn: true,
    button: {
        text: "see more",
        type: "link",
        href: "/admin/projets"
    }
  }

  return (
    <div className='admin-dashboard'>
        <DashboardCounters/>
        <div className="admin-dashboard-recent">
          <div className="admin-dashboard-recent-left">
            <AdminTable data={clients} info={cltTableInfo}/>
          </div>
          <div className="admin-dashboard-recent-right">
            <AdminTable data={employees} info={empTableInfo}/>
          </div>
        </div>
    </div>
  )
}
