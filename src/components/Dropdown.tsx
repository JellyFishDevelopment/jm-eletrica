import React, { useState } from 'react';
import { NavLink, useLocation } from 'react-router-dom';

interface DropdownProps {
  options: { label: string; link: string }[];
}

const Dropdown: React.FC<DropdownProps> = ({ options }: any) => {
  const [isOpen, setIsOpen] = useState<boolean>(false);
  const [selectedOption, setSelectedOption] = useState<string>('');
  const location = useLocation();

  const handleSelect = (value: string) => {
    setSelectedOption(value);
    setIsOpen(false);
  };

  const handleMouseEnter = () => {
    setIsOpen(true);
  };

  const handleMouseLeave = () => {
    setIsOpen(false);
  };

  let buttonClassName = 'dropdown-button';
  if (isOpen) {
    buttonClassName += ' open';
  }

  let activeStyle = {
    textDecoration: 'underline',
    textDecorationColor: '#FAD40F'
  };

  return (
    <div className="dropdown-container">
      <button
        className={buttonClassName}
        onClick={() => setIsOpen(!isOpen)}
        onMouseEnter={handleMouseEnter}
        onMouseLeave={handleMouseLeave}
        style={{ backgroundColor: '#fff' }}
      >
        <span style={isOpen ? activeStyle : {}}>
          
          <span style={location.pathname === '/services' ? activeStyle : {}}>
            {selectedOption ? selectedOption : 'SERVIÇOS'}
          </span>

        </span>
        <span className={`arrow ${isOpen ? 'up' : 'down'}`} />
      </button>
      {isOpen && (
        <ul
          className="dropdown-options"
          onMouseEnter={handleMouseEnter}
          onMouseLeave={handleMouseLeave}
        >
          {options.map((option: any, index: any) => (
            <NavLink to={option.link} key={index}>
              <li
                className="dropdown-option"
                onClick={() => handleSelect(option.value)}
              >
                {option.label}
              </li>
            </NavLink>
          ))}
        </ul>
      )}
    </div>
  );
};

export default Dropdown;
