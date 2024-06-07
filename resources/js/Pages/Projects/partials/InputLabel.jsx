function InputLabel({value, htmlFor}) {
    return (
        <label htmlFor={htmlFor} className='block text-sm font-medium text-gray-700'>{ value }</label>
    )
}

export default InputLabel