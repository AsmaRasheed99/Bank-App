
import React, { useState } from 'react';

function CardForm () {
    const [cards, setCards] = useState( []);
    const [id, setId] = useState(1);

    function handleSubmit(event) {
        event.preventDefault();
        const name = event.target.elements.name.value;
        const accountnumber = event.target.elements.accountnumber.value;
        const accountType = event.target.elements.accountType.value;
        const newCard = { id: id, name, accountnumber, accountType };
        setCards([...cards, newCard]);
        setId(id + 1);
    }

    function handleDelete(id) {
        const updatedCards = cards.filter((card) => card.id !== id);
        setCards(updatedCards);
        

    }

    return (
        <div className='container'>
            <form className='form' onSubmit={handleSubmit}>

                <label>
                    Name: <br/>
                    <input type="text" name="name" />
                </label>
                <br />
                <label>
                    Account number:<br/>
                    <input type="number" name="accountnumber" />
                </label>
                <br />
                <label>
                   Account Type:<br/>
                    <input type="text" name="accountType" />
                </label>
                <br />
                <button type="submit" >Submit</button>
            </form>
            <div>
                {cards.map((card) => (
                    <Card key={card.id} card={card} handleDelete={handleDelete} />
                ))}
            </div>
        </div>
    );
}
function Card({ card, handleDelete }) {
    const { id, name, accountnumber, accountType } = card;
    function handleClick() {
        handleDelete(id);
    }
    return (
        <div className='cardContainer'>
        <div>
            <p>{`ID: ${id}`}</p>
            <p>{`name: ${name}`}</p>
            <p>{`Account number: ${accountnumber}`}</p>
            <p>{`Account Type: ${accountType}`}</p>
            <button onClick={handleClick}>x</button>
        </div></div>
    );
}

export default CardForm;
