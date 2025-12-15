import './Input.css'

const Input = ({
  type = 'text',
  placeholder = '',
  value,
  onChange,
  label = '',
  error = '',
  required = false,
  className = '',
  ...props
}) => {
  const inputId = `input-${Math.random().toString(36).substr(2, 9)}`

  return (
    <div className={`input-wrapper ${className}`}>
      {label && (
        <label htmlFor={inputId} className="input-label">
          {label}
          {required && <span className="required">*</span>}
        </label>
      )}
      <input
        id={inputId}
        type={type}
        className={`input ${error ? 'input-error' : ''}`}
        placeholder={placeholder}
        value={value}
        onChange={onChange}
        required={required}
        {...props}
      />
      {error && <span className="input-error-message">{error}</span>}
    </div>
  )
}

export default Input

