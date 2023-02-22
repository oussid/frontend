import React from 'react'
import AdminTable from '../../../components/admin-table/AdminTable'

export default function Employees() {
  const employees = [
    {
      id: 0,
      nom: "Mohamed Benali",
      email: "mohamed.benali@example.com",
      age: 26,
      ville: "Tanger"
    },
    {
      id: 1,
      nom: "Fatima Zohra El Amrani",
      email: "fatimazohra.elamrani@example.com",
      age: 28,
      ville: "Casablanca"
    },
    {
      id: 2,
      nom: "Karim El Fakir",
      email: "karim.elfakir@example.com",
      age: 32,
      ville: "Rabat"
    },
    {
      id: 3,
      nom: "Sanaa Zaidi",
      email: "sanaa.zaidi@example.com",
      age: 24,
      ville: "Fès"
    },
    {
      id: 4,
      nom: "Youssef Chraibi",
      email: "youssef.chraibi@example.com",
      age: 29,
      ville: "Marrakech"
    },
    {
      id: 5,
      nom: "Nadia Mounir",
      email: "nadia.mounir@example.com",
      age: 30,
      ville: "Agadir"
    },
    {
      id: 6,
      nom: "Adil Bourkia",
      email: "adil.bourkia@example.com",
      age: 27,
      ville: "Tétouan"
    },
    {
      id: 7,
      nom: "Samira El Khattabi",
      email: "samira.elkhattabi@example.com",
      age: 35,
      ville: "Meknès"
    },
    {
      id: 8,
      nom: "Saidi Rida",
      email: "saidi.rida@example.com",
      age: 34,
      ville: "Taza"
    },
    {
      id: 9,
      nom: "Noureddine El Boukhari",
      email: "noureddine.elboukhari@example.com",
      age: 25,
      ville: "Oujda"
    },
    {
      id: 10,
      nom: "Rabiaa Ait Ali",
      email: "rabiaa.aitali@example.com",
      age: 36,
      ville: "Béni Mellal"
    },
    {
      id: 11,
      nom: "Naima Aouadi",
      email: "naima.aouadi@example.com",
      age: 31,
      ville: "Moulay Yacoub"
    },
    {
      id: 12,
      nom: "Amine Belkadi",
      email: "amine.belkadi@example.com",
      age: 33,
      ville: "Safi"
    },
    {
      id: 13,
      nom: "Kamal Laaroussi",
      email: "kamal.laaroussi@example.com",
      age: 37,
      ville: "Essaouira"
    },
    {
      id: 14,
      nom: "Ibtissam Benkiran",
      email: "ibtissam.benkiran@example.com",
      age: 26,
      ville: "Ouarzazate"
    }
  ];

  const tableInfo = {
    tableType: 'detailed',
    upperTitle: '',
    hasImgColumn: false,
    button: {
        text: "Ajouter",
        type: "btn",
        href: ""
    }
  }
  
  return (
    <div className='admin-employees'>
      <AdminTable data={employees} info={tableInfo}/>
    </div>
  )
}
