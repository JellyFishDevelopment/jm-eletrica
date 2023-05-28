import React, { useState } from 'react'
import { NavLink, To } from 'react-router-dom'

interface DropdownProps {
  options: { label: string; link: string }[]
}

const Dropdown: React.FC<DropdownProps> = ({ options }: any) => {
  const [isOpen, setIsOpen] = useState<boolean>(false)
  const [selectedOption, setSelectedOption] = useState<string>('')

  const handleSelect = (value: string) => {
    setSelectedOption(value)
    setIsOpen(false)
  }

  return (
    <div className="dropdown-container">
      <button className="dropdown-button" onClick={() => setIsOpen(!isOpen)}>
        <span>{selectedOption ? selectedOption : 'SERVIÇOS'}</span>
        <span className={`arrow ${isOpen ? 'up' : 'down'}`} />
      </button>
      {isOpen && (
        <ul className="dropdown-options">
          {options.map((option: any, index: any) => (
            <NavLink to={option.link}>
              <li
                className="dropdown-option"
                key={index}
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
