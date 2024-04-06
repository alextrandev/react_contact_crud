import Header from '../layout/Header'
import Footer from '../layout/Footer'
import { AddContact } from './AddContact'
import { AddRandomContact } from './AddRandomContact'
import { RemoveContact } from './RemoveContact'
import { FavoriteContact } from './FavoriteContact'
import { GeneralContact } from './GeneralContact'
import { FC, useState } from 'react'
import { ContactProps } from '../../types/ContactProps'

export const ContactIndex: FC = () => {
    const [contactList, setContactList] = useState<ContactProps[]> ([
        {
            id: 1,
            name: 'Alex',
            phone: '0123456789',
            email: 'alex@example.com',
            isFavorite: true
        },
        {
            id: 2,
            name: 'Adel',
            phone: '0987654321',
            email: 'adel@example.com',
            isFavorite: false
        },
        {
            id: 3,
            name: 'Dana',
            phone: '0987654321',
            email: 'Dana@example.com',
            isFavorite: false
        }
    ]);


  return (
    <div className='flex flex-col min-h-screen'>
        <Header title='React Contact' />

        <div className='grid grid-cols-2 py-3'>
            <AddRandomContact />
            <RemoveContact />
        </div>

        <div className='grid grid-cols-1 gap-3'>
            <AddContact />
            <FavoriteContact contacts={contactList.filter((contact) => contact.isFavorite)}/>
            <GeneralContact />
        </div>

        <Footer />
    </div>
  )
}
