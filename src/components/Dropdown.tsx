import React, { useState } from 'react'
import { NavLink } from 'react-router-dom'

interface DropdownProps {
  options: { label: string; value: string }[]
}

const Dropdown: React.FC<DropdownProps> = ({ options }) => {
  const [isOpen, setIsOpen] = useState<boolean>(false)
  const [selectedOption, setSelectedOption] = useState<string>('')

  const handleSelect = (value: string) => {
    setSelectedOption(value)
    setIsOpen(false)
  }

  return (
    <div className="dropdown-container">
      <button className="dropdown-button" onClick={() => setIsOpen(!isOpen)}>
        <span>{selectedOption ? selectedOption : 'Serviços'}</span>
        <span className={`arrow ${isOpen ? 'up' : 'down'}`} />
      </button>
      {isOpen && (
        <ul className="dropdown-options">
          {options.map(option => (
            <NavLink to={option.link}>
              <li
                className="dropdown-option"
                key={option.value}
                onClick={() => handleSelect(option.value)}
              >
                {option.label}
              </li>
            </NavLink>
          ))}
        </ul>
      )}
    </div>
  )
}

export default Dropdown
