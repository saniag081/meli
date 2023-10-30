import './Button.scss';

function Button({ label, type = 'button' }) {
 return (
  <button
    className='button__primary'
    type={type}
  >
    { label }
  </button>
 )
}

export default Button;
