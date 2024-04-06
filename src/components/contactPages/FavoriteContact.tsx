import { FC } from 'react';
import { ContactProps } from '../../types/ContactProps'
import { Contact } from './Contact';

type Props = {
    contacts: ContactProps[];
}

export const FavoriteContact: FC<Props> = ({ contacts }) => {
    return (
        <div>
            {contacts.map((contact) => {
                return <Contact contact={contact} />
            })}
        </div>
    );
}
