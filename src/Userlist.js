import React, { useState, useEffect } from 'react';
import axios from 'axios';

const UserList = () => {
  const [listOfUser, setListOfUser] = useState([]);
  //hooks poour stocker les donnés recuperer de l'api


  //! useEffect hook pour traiter des appels d'api ( des side effects) appres le premier rendu du composant
  useEffect(() => {
    axios.get('https://jsonplaceholder.typicode.com/users')
      .then(response => {
        setListOfUser(response.data); //si on recout des donner on modifie avec le setteur
      })
      .catch(error => {// au cas ou ya une errer on pourra le voir sur la consoloe
        console.error('UNE erreur s\'est produite', error);
      });
  }, []);

  return (
    <div className="table-wrapper">
    <table className='fl-table'>
    <thead>
      <tr>
        <th>ID</th>
        <th>Nom</th>
        <th>Email</th>
      </tr>
    </thead>
    <tbody>
      {listOfUser.map(user => (
        <tr key={user.id}>
          <td>{user.id}</td>
          <td>{user.name}</td>
          <td>{user.email}</td>
        </tr>
      ))}
    </tbody>
  </table>
  </div>
  );
};

export default UserList;
