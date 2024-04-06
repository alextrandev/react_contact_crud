import Header from '../layout/Header'
import Footer from '../layout/Footer'
import { AddContact } from './AddContact'
import { AddRandomContact } from './AddRandomContact'
import { RemoveContact } from './RemoveContact'
import { FavoriteContact } from './FavoriteContact'
import { GeneralContact } from './GeneralContact'

export const ContactIndex = () => {
  return (
    <div className='flex flex-col min-h-screen'>
        <Header title='React Contact' />
        <div className='grid grid-cols-2 py-3'>
            <AddRandomContact />
            <RemoveContact />
        </div>
        <div className='grid grid-cols-1 gap-3'>
            <AddContact />
            <FavoriteContact />
            <GeneralContact />
        </div>

        <Footer />
    </div>
  )
}
