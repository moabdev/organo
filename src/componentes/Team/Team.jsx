import './Team.css';
import Member from '../Member/Member';

const Team = ({ title, primaryColor, secondaryColor, members }) => {

  const background = {backgroundColor: secondaryColor};
  const borderBottom = {borderBottomColor: primaryColor};

  return (
    (members.length > 0) ? (
      <section className='team'
      style={background}
      > 
        <h3 style={borderBottom}>{title}</h3>
        <div className='members'>
        {members.map( member => 
          < Member
            backgroundColor={primaryColor}
            key={member.name}
            name={member.name} 
            role={member.role} 
            image={member.image}
          />)}
        </div>
      </section>
    ) : ""
  )
}

export default Team