import {useEffect} from 'react';
import LoadingSpinner from '../../../LoadingSpinner/LoadingSpinner';
import { Link } from 'react-router-dom';
import { useGlobalContext } from '../../../../hooks/context';
import './Character.css'
import '../../../LoadingSpinner/LoadingSpinner.css'

function Character(props) {

    const { characters, loading } = props;

    const { renderComp, handleRenderComp,setRenderComp } = useGlobalContext()

    useEffect(() => {
        handleRenderComp()
    }, [])

    return (
        <>
            {
                loading && <LoadingSpinner />
            }

            <div className={`cards-container ${renderComp && 'cards-container-active'}`}>
                {
                    characters.map((character, i) => {

                        const fullName = `${character.firstName} ${character.lastName}`

                        return (
                            <Link to={`/characters/${character.id}`} key={i} onClick={() => setRenderComp(false)}>
                                <div className='character-card'>

                                    <div className='img-container'>
                                        <img src={character.imageUrl} alt={`${character.firstName + character.firstName}`} />
                                    </div>

                                    <div className='info-container'>

                                        <h4 className='character-fullname'> {fullName} </h4>
                                    </div>
                                </div>
                            </Link>
                        )
                    }
                    )
                }
            </div>
        </>
    )

}

export default Character;