import { useState } from 'react';

const GuestList: React.FC = () => {
    const [name, setName] = useState<string>(''); //TS infers this to be of type string.
    const [guests, setGuests] = useState<string[]>([]); //TS cannot infer without <string>

    const onClick = () => {
        setGuests([...guests, name]);
        setName('');
    }

    return <div>
        <h3>Guest List</h3>
        <ul>
            {guests.map((guest) => (
                <li key={guest}>{guest}</li>
            ))}
        </ul>
        <input value={name} onChange={(e) => setName(e.target.value)} />
        <button onClick={onClick}>Add Guest</button>
    </div>
};

export default GuestList