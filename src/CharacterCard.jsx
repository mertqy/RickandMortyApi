// eslint-disable-next-line react/prop-types
function CharacterCard({characterInfos}) {

    return (
        <div className='card'>
            {/* eslint-disable-next-line react/prop-types */}
            {characterInfos.map((character) => {
                return (
                    <div key={character.id} className='childCard'>
                        <h1>{character.name}</h1>
                        <img src={character.image} alt={character.name}/>
                        {character.status === 'Alive' ? (
                            <p className='has-text-success mt-3'>{character.status}</p>
                        ) : character.status === 'Dead' ? (
                            <p className='has-text-danger mt-3'>{character.status}</p>
                        ) : (
                            <p className='has-text-warning mt-3'>{character.status}</p>
                        )}
                    </div>
                );
            })}
        </div>
    );
}

export default CharacterCard;