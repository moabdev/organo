import { useState } from 'react';
import Input from '../Input/InputText'
import Dropdown from '../Dropdown/Dropdown'
import Button from '../Button/Button';
import teams from '../../constrants/index.js';
import './Form.css'

const Form = ({ registeredMember, teams }) => {
  const [name, setName] = useState('');
  const [role, setRole] = useState('');
  const [image, setImage] = useState('');
  const [team, setTeam] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault()
    registeredMember({
      name,
      role,
      image,
      team
    });     
    setName(''); 
    setRole('');
    setImage('');
    setTeam('');
  }

  return (
    <section className='formulario'>
        <form onSubmit={handleSubmit}>
            <h2>Preencha os dados para criar um card de colaborador</h2>
            <Input
              label="Nome" 
              placeholder='Digite seu Nome' 
              isRequired={true}
              value={name}
              handleState={ value => setName(value) } 
            />
            <Input
              label="Cargo" 
              placeholder='Digite seu Cargo' 
              isRequired={true}
              value={role}
              handleState={ value => setRole(value)}
            />
            <Input
              label="Imagem" 
              placeholder='Digite o endereço da imagem' 
              isRequired= {false}
              value={image}
              handleState={value => setImage(value)} 
            />
            <Dropdown 
              label='Time' 
              items={teams} 
              isRequired={true}
              value={team}
              handleState={value => setTeam(value)}
            />
            <Button>Criar Card</Button>
        </form>
    </section>
  )
}

export default Form;
