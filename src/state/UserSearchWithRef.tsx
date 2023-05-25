import { useState, useRef, useEffect } from 'react';

const users = [
    { name: 'Sarah', age: 20 },
    { name: 'Alex', age: 20 },
    { name: 'Michael', age: 20 },
]

const UserSearchWithRef: React.FC = () => {
    const inputRef = useRef<HTMLInputElement | null>(null); //element for the #input element
    const [name, setName] = useState('');
    const [user, setUser] = useState<{ name: string, age: number } | undefined>(); //Generic all-allowed-types

    useEffect(() => { //called only once
        inputRef.current?.focus()
    }, []);
    const onClick = () => {
        const foundUser = users.find((user) => {
            return user.name === name;
        });

        console.log(foundUser);
        setUser(foundUser);
    }

    return <div>
        <>
            User Search With Ref
            <input ref={inputRef} value={name} onChange={(e) => setName(e.target.value)} />
            <button onClick={onClick}>Search</button>
            Found User: {user?.name} {user?.age}
        </>
    </div>
};

export default UserSearchWithRef;