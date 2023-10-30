import './input.scss'

function Input({ id, placeholder, eventEmit }) {
	function handleInput(e) {
		eventEmit(e.target.value)
	}

	return (
		<>
			<label
				className='input'
				htmlFor={ id }
			>
				<div className='input__container'>
					<input
						type="text"
						className='input__element'
						name={ id }
						placeholder={ placeholder }
						onInput={handleInput}
					/>
				</div>
				<button />
			</label>
		</>
	)
}

export default Input;