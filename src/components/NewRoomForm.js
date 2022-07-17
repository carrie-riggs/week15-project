import React, { useState } from 'react';

export const NewRoomForm = (props) => {
    const [name, setName] = useState('');
    const [area, setArea] = useState(undefined);

    const handleAreaInput = (e) => {
        const int = parseInt(e.target.value, 10);
        setArea(int >= 0 ? int : '');
    }

    const onSubmit = (e) => {
        e.preventDefault();
        if (name && area) {
            props.addNewRoom({name, area});
            setName('');
            setArea('');
        } else {
            console.log('invalid input');
        }
    };

    return (
        <div>
            <h5>Add a New Room</h5>
            <form onSubmit={onSubmit}>
                <input
                    type='text'
                    placeholder='Name'
                    onChange={(e) => setName(e.target.value)}
                    value={name}
                />
                    <input 
                        type='text'
                        placeholder='Room Area'
                        onChange={handleAreaInput}
                        value={area}
                    />
                    <button type='submit' className='add'>Add Room</button>
            </form>
        </div>
    )
};