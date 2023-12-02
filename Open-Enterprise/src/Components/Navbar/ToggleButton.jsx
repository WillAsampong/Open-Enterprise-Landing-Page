import PropTypes from 'prop-types'

const ToggleButton = ({ setOpen, open }) => {
  return (
    <div>
     <button onClick={() => setOpen(prev => !prev)}>
            {open ? (<svg
            xmlns="http://www.w3.org/2000/svg"
            fill="#000000"
            height="24"
            viewBox="0 0 24 24"
            width="24"
          >
            <path d="M0 0h24v24H0z" fill="none" />
            <path
              d="M18 6L6 18M6 6l12 12"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>) : (
            <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="#000000"
            height="24"
            viewBox="0 0 24 24"
            width="24"
          >
            <path d="M0 0h24v24H0z" fill="none" />
            <path
              d="M3 18h18v-2H3v2zm0-5h18v-2H3v2zm0-7v2h18V6H3z"
              fill="currentColor"
            />
          </svg>          
        )}  
        </button>
    </div>
  )
}

ToggleButton.propTypes = {
    setOpen: PropTypes.func,
    open: PropTypes.bool,
}



export default ToggleButton
