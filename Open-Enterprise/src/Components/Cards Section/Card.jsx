import PropTypes from 'prop-types'


const Card = ({ icon, title, description }) => {
  return (
    <div className='w-1/3 p-8 rounded-md shadow-sm'>
      <div className="icon flex justify-center">
       <img src={icon} alt="" />
      </div>
      <div className="flex flex-col gap-y-4 justify-center items-center">
        <div className="card-heading text-center font-bold text-xl">
            <h1>{title}</h1>
        </div>
        <div className="card-text text-center text-sm">
            {description}
        </div>
      </div>
    </div>
  )
}

Card.propTypes = {
    icon: PropTypes.string,
    title: PropTypes.string,
    description: PropTypes.string,
}

export default Card
