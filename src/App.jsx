import { useState } from 'react';
import Banner from './componentes/Banner/Banner';
import Form from './componentes/Form/Form';
import Team from './componentes/Team/Team';
import teams from './constrants';
import Footer from './componentes/Footer/Footer';

const App = () => {
  const [members, setMembers] = useState([]);

  const addMember = (member) => {
    debugger
    setMembers([...members, member])
  }

  return (
    <div className='App'>
        <Banner />
        <Form teams={teams.map( (team) => team.name)} registeredMember ={ (member) => addMember(member)} />

        {teams.map( 
          team => 
            <Team title={team.name} 
            key={team.name} 
            primaryColor={team.primaryColor} 
            secondaryColor={team.secondaryColor}
            members={ members.filter( member => member.team === team.name)}
        />)}

        <Footer />

    </div>
  )
}

export default App;