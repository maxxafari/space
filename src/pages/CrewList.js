import react, { useState, useEffect } from 'react';

function CrewList() {
    const [error, setError] = useState(null);
    const [isLoaded, setIsLoaded] = useState(false);
    const [crew, setCrew] = useState([]);
  
    // Note: the empty deps array [] means
    // this useEffect will run once
    // similar to componentDidMount()
    useEffect(() => {
      try{
        fetch("/api/static-crew")
          .then(res => res.json())
          .then(
            (result) => {
              setIsLoaded(true);
              setCrew(result);
              console.log("CREW",crew)
            },
            // Note: it's important to handle errors here
            // instead of a catch() block so that we don't swallow
            // exceptions from actual bugs in components.
            (error) => {
              setIsLoaded(true);
              setError(error);
            }
          )
      } catch(error){
        setIsLoaded(true);
        setError(error);
      }
    }, [crew])
  
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
                  <img src={member.image} alt={`${member.name}`} /> 
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