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
                    </div>
                );
            })}
        </div>
    );
}

export default CharacterCard;