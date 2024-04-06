import { FC } from 'react';

type InputType = {
    label: string;
    id: string; 
    placeholder: string;
}

const InputField: FC<InputType> = ({label, id, placeholder}) => {
    return (
        <form>
            <label className='block text-gray-500 text-xs font-bold mb-2' htmlFor={id}>{label}</label>
            <input className='border rounded text-gray-700 py-1 px-3 mb-5 shadow appearance-none w-full' type="text" id={id} placeholder={placeholder} />
        </form>
    )
}

export const AddContact: FC = () => {
    return (
        <div className='bg-gray-200 shadow-md rounded p-8 mx-4'>
            <InputField label='Name' id='name' placeholder='John Doe'/>
            <InputField label='Email' id='email' placeholder='johndoe@example.com'/>
            <InputField label='Phone' id='phone' placeholder='0123456789'/>
            <button className='bg-blue-500 hover:bg-blue-700 text-white py-2 px-20 rounded font-bold mb-4'>Create</button>
        </div>
    );
}
