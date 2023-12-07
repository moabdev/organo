import './Dropdown.css';

const Dropdown = ({ handleState,label, items, isRequired, value }) => {

  const handleSelect = ev => {
    handleState(ev.target.value);
  }

  return (
    <div className='dropdown'>
        <label>{ label }</label>
        
        <select required={isRequired} onChange={handleSelect}  value={value}>
            <option>{""}</option>
            {items.map( (item, index) => <option key={index}>{item}</option> )}
        </select>
    </div>
  )
}

export default Dropdown