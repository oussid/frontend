import React from 'react'
import AdminTable from '../../components/admin-table/AdminTable'

export default function Employees() {
  const employees = [
    {
      id: 0,
      name: "John",
      email: "john@gmail.com",
      age: 30,
      city: "New York"
    },
    {
      id: 1,
      name: "Emily",
      email: "emily@gmail.com",
      age: 25,
      city: "Los Angeles"
    },
    {
      id: 2,
      name: "Michael",
      email: "michael@gmail.com",
      age: 35,
      city: "Chicago"
    },
    {
      id: 3,
      name: "Sarah",
      email: "sarah@gmail.com",
      age: 28,
      city: "Houston"
    },
    {
      id: 4,
      name: "David",
      email: "david@gmail.com",
      age: 32,
      city: "Philadelphia"
    },
    {
      id: 5,
      name: "Jessica",
      email: "jessica@gmail.com",
      age: 27,
      city: "San Francisco"
    },
    {
      id: 6,
      name: "Christopher",
      email: "christopher@gmail.com",
      age: 31,
      city: "Seattle"
    },
    {
      id: 7,
      name: "Amanda",
      email: "amanda@gmail.com",
      age: 29,
      city: "Boston"
    },
    {
      id: 8,
      name: "Matthew",
      email: "matthew@gmail.com",
      age: 34,
      city: "Dallas"
    },
    {
      id: 9,
      name: "Katherine",
      email: "katherine@gmail.com",
      age: 26,
      city: "Denver"
    },
    {
      id: 10,
      name: "Robert",
      email: "robert@gmail.com",
      age: 33,
      city: "Miami"
    },
    {
      id: 11,
      name: "Stephanie",
      email: "stephanie@gmail.com",
      age: 30,
      city: "Atlanta"
    },
    {
      id: 12,
      name: "Daniel",
      email: "daniel@gmail.com",
      age: 28,
      city: "Austin"
    },
    {
      id: 13,
      name: "Elizabeth",
      email: "elizabeth@gmail.com",
      age: 31,
      city: "Phoenix"
    },
    {
      id: 14,
      name: "William",
      email: "william@gmail.com",
      age: 29,
      city: "Portland"
    }
  ];
  return (
    <div className='admin-employees'>
      <AdminTable data={employees}/>
    </div>
  )
}
