import react, { useState, useEffect } from 'react';

function CrewList() {

  const error = null;
  const isLoaded = true;
  const crew = [
    {
      name: "Max berkenstam",
      picture: "https://cdn.business2community.com/wp-content/uploads/2017/08/blank-profile-picture-973460_640.png",
      agency: "Onelab",

    }
  ]
  
    if (error) {
      return <pre style={{color: 'red'}}>Error: {error.message}</pre>;
    } else if (!isLoaded) {
      return <div>Loading...</div>;
    } else {
      return (
        <div>
            <ul className="crew">
            {crew && crew.map(member => (
                <li key={member.id}>
                  {member.name} 
                  <img src={member.picture} alt={`${member.name}`} /> 
                  <b>Agency:</b> {member.agency} <br />
                  <b>Next launch date:</b> {member.launch} <br />
                  <b>Previus flights:</b> ...
                </li>
            ))}
            </ul>
        </div>
      );
    }
  }

  export default CrewList;