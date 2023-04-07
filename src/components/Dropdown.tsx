import React, { useState } from 'react';

interface DropdownProps {
  options: { label: string; value: string }[];
}

const Dropdown: React.FC<DropdownProps> = ({ options }) => {
  const [isOpen, setIsOpen] = useState<boolean>(false);
  const [selectedOption, setSelectedOption] = useState<string>('');

  const handleSelect = (value: string) => {
    setSelectedOption(value);
    setIsOpen(false);
  }

  return (
    <div className="dropdown">
      <button onClick={() => setIsOpen(!isOpen)}>
        <span>{selectedOption ? selectedOption : 'Serviços'}</span>
        <span className={`arrow ${isOpen ? 'up' : 'down'}`} />
      </button>
      {isOpen && (
        <ul className="dropdown-options">
          {options.map(option => (
            <li key={option.value} onClick={() => handleSelect(option.value)}>
              {option.label}
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}

export default Dropdown;
