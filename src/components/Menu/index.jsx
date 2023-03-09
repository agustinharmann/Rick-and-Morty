// import { useEffect, useState } from 'react';
import { useContext } from 'react';
import { UserContext } from '../../utils/useContext';
import './styles.css';

const Menu = () => {

  const { specie, status, gender, setStatus, setSpecie, setGenre } = useContext(UserContext);

  const species = ["Human", "Alien", "Humanoid", "Poopybutthole", "Mythological", "Unknown", "Animal", "Disease", "Robot", "Cronenberg", "Planet"];

  // const [ width, setWidth ] = useState(0);

  // useEffect(()=>{
  //   setWidth(window.innerWidth)
  // }, [])
  // console.log(width);

  // const find = species.find(element => element === 'Alien')
  // console.log(find);

  return (
    <div className='menu'>
      <ul className='list_search--dropdown'>
        <li className='element_search--dropdown'>
          <p className='title--dropdown'>Filters</p>
        </li>
        {/* optimizar con el doble andpersent */}
        <div className='element_search--dropdown'>
          Status
          <div className="dropdown">
            <p className='element--dropdown' value={'p'} onClick={() => setStatus('alive')}>Alive</p>
            <p className='element--dropdown' value={'p'} onClick={() => setStatus('dead')}>Dead</p>
            <p className='element--dropdown' value={'p'} onClick={() => setStatus('unknown')}>Unknown</p>
          </div>
        </div>
        <div className='element_search--dropdown'>
          Species
          <div className="dropdown">
            {
              species.map((s, i) => <p key={i} className='element--dropdown' onClick={() => setSpecie(`${s}`)}> {s} </p>)
            }
          </div>
        </div>
        <div className='element_search--dropdown'>
          Gender
          <div className="dropdown">
            <p className='element--dropdown' onClick={() => setGenre('female')}>Female</p>
            <p className='element--dropdown' onClick={() => setGenre('male')}>Male</p>
            <p className='element--dropdown' onClick={() => setGenre('genderless')}>Genderless</p>
            <p className='element--dropdown' onClick={() => setGenre('unknown')}>Unknown</p>
          </div>
        </div>
        {/* <NavLink
          className={ ({isActive}) => `element_search--dropdown ${isActive ? 'active' : ''}` }
          to='location'>
          location
        </NavLink> */}
      </ul>
      {/* {(specie.length >= 1 || status.length >= 1 || gender.length >= 1) &&
        } */}
      <div className='content_filters--filters'>
        <button onClick={() => setStatus('')}>{ status }</button>
        <button onClick={() => setSpecie('')}>{ specie }</button>
        <button onClick={() => setGenre('')}>{ gender }</button>
      </div>
    </div>
  );
};

export { Menu };
