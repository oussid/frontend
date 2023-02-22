import React from 'react'
import AdminTable from '../../../components/admin-table/AdminTable'

export default function Apartments() {
  const apartements = [
    {
    id: 0,
    adresse: "Rabat rue 14",
    superficie: 75,
    prix: 25000,
    status: "vendue",
    type: "sur plan"
  },
  {
    id: 1,
    adresse: "Casablanca avenue Hassan II",
    superficie: 120,
    prix: 50000,
    status: "en vente",
    type: "construite"
  },
  {
    id: 2,
    adresse: "Tanger rue de la plage",
    superficie: 100,
    prix: 40000,
    status: "en vente",
    type: "construite"
  },
  {
    id: 3,
    adresse: "Marrakech rue du souk",
    superficie: 85,
    prix: 35000,
    status: "en vente",
    type: "construite"
  },
  {
    id: 4,
    adresse: "Fès rue des oliviers",
    superficie: 90,
    prix: 38000,
    status: "vendue",
    type: "construite"
  },
  {
    id: 5,
    adresse: "Agadir avenue du port",
    superficie: 110,
    prix: 42000,
    status: "en vente",
    type: "construite"
  },
  {
    id: 6,
    adresse: "Oujda rue des roses",
    superficie: 95,
    prix: 36000,
    status: "en vente",
    type: "construite"
  },
  {
    id: 7,
    adresse: "El Jadida boulevard Moulay Ismaïl",
    superficie: 80,
    prix: 30000,
    status: "vendue",
    type: "sur plan"
  },
  {
    id: 8,
    adresse: "Kenitra avenue Mohamed VI",
    superficie: 130,
    prix: 55000,
    status: "en vente",
    type: "construite"
  },
  {
    id: 9,
    adresse: "Essaouira avenue du 11 janvier",
    superficie: 150,
    prix: 45000,
    status: "en vente",
    type: "sur plan"
  },
  {
    id: 10,
    adresse: "Tétouan avenue de l'Unité Africaine",
    superficie: 70,
    prix: 28000,
    status: "vendue",
    type: "construite"
  },
  {
    id: 11,
    adresse: "Meknès avenue My Ismail",
    superficie: 125,
    prix: 52000,
    status: "en vente",
    type: "construite"
  },
  {
    id: 12,
    adresse: "Beni Mellal avenue du 17 janvier",
    superficie: 80,
    prix: 32000,
    status: "vendue",
    type: "sur plan"
  },
  {
    id: 13,
    adresse: "Khouribga avenue Mohamed V",
    superficie: 110,
    prix: 40000,
    status: "en vente",
    type: "construite"
  },
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
    <div className='admin-apartments'>
      <AdminTable data={apartements} info={tableInfo}/>
    </div>
  )
}
