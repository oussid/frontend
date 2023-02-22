import React from 'react'
import AdminTable from '../../../components/admin-table/AdminTable';

export default function Projects() {
  const projets = [
    {
      id: 0,
      nom: "Agdal",
      employee: "Nawal Amrani",
      appartements: 85
    },
    {
      id: 1,
      nom: "Rabat ville",
      employee: "Mounir El Moudni",
      appartements: 50
    },
    {
      id: 2,
      nom: "Hay Riad",
      employee: "Sanaa Berrada",
      appartements: 70
    },
    {
      id: 3,
      nom: "Hassan",
      employee: "Karim Belmokhtar",
      appartements: 90
    },
    {
      id: 4,
      nom: "Sidi Maarouf",
      employee: "Nadia Amine",
      appartements: 80
    },
    {
      id: 5,
      nom: "Gauthier",
      employee: "Ali Boudaoud",
      appartements: 60
    },
    {
      id: 6,
      nom: "Bourgogne",
      employee: "Meryem El Harchi",
      appartements: 45
    },
    {
      id: 7,
      nom: "Maarif",
      employee: "Omar Alami",
      appartements: 100
    },
    {
      id: 8,
      nom: "Sidi Bernoussi",
      employee: "Latifa Benhima",
      appartements: 55
    },
    {
      id: 9,
      nom: "Casa-Anfa",
      employee: "Hassan Ezzaki",
      appartements: 95
    },
    {
      id: 10,
      nom: "Val Fleuri",
      employee: "Moussa Mansouri",
      appartements: 75
    },
    {
      id: 11,
      nom: "Anfa",
      employee: "Khadija Bouzoubaa",
      appartements: 65
    },
    {
      id: 12,
      nom: "Ain Diab",
      employee: "Mohammed Bensaid",
      appartements: 110
    },
    {
      id: 13,
      nom: "Racine",
      employee: "Nadia Kettani",
      appartements: 50
    },
    {
      id: 14,
      nom: "Beauséjour",
      employee: "Hicham El Kaddouri",
      appartements: 40
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
    <div className='admin-projects' >
    <AdminTable data={projets} info={tableInfo}/>
  </div>
  )
}
