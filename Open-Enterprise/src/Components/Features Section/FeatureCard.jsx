
import PropTypes from 'prop-types'


const FeatureCard = ({ icon, title, description }) => {
  return (  
    <div className='w-2/3 p-6 flex flex-col gap-y-4 justify-center basis-1/2'>
        <div className="icon">
            <img src={icon} alt="" />
        </div>
        <div className="title">
            <h3 className='font-bold text-xl'>{title}</h3> 
        </div>
        <div className="description">
            <p>{description}</p>
        </div>
    </div>
  )
};


FeatureCard.propTypes = {
    icon: PropTypes.string,
    title: PropTypes.string,
    description: PropTypes.string,
}

export default FeatureCard
