import PropTypes from 'prop-types'


const Task = ({ title, description, bounty, deadline  }) => {
  return (
    <div className="task flex flex-col gap-y-4 p-4 shadow-md w-1/3 rounded-xl">
        <div className="title">
            <h4 className='font-bold text-sm'>{title}</h4>
        </div>
        <div className="description">
            <p className='text-sm'>{description}</p>
        </div>
        <div className="bounty-deadline flex justify-between">
            <div className="bounty px-4 bg-Green rounded-2xl">
                <p className='text-White'>{bounty}</p>
            </div>
            <div className="deadline">
                <p className='text-sm'>{deadline}</p>
            </div>
        </div>
    </div>
  )
}

Task.propTypes = {
    title: PropTypes.string,
    description: PropTypes.string,
    bounty: PropTypes.string,
    deadline: PropTypes.string,
}

export default Task
