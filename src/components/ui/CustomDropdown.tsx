'use client';

import { useState, useRef, useEffect } from 'react';
import { ChevronDown } from 'lucide-react';

interface CustomDropdownProps {
  options: { value: string; label: string }[];
  value: string;
  onChange: (value: string) => void;
  placeholder?: string;
  label: string;
  id: string;
  name: string;
  required?: boolean;
}

export default function CustomDropdown({
  options,
  value,
  onChange,
  placeholder = 'Select an option',
  label,
  id,
  name,
  required = false
}: CustomDropdownProps) {
  const [isOpen, setIsOpen] = useState(false);
  const [selectedLabel, setSelectedLabel] = useState('');
  const dropdownRef = useRef<HTMLDivElement>(null);

  // Close dropdown when clicking outside
  useEffect(() => {
    function handleClickOutside(event: MouseEvent) {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target as Node)) {
        setIsOpen(false);
      }
    }

    document.addEventListener('mousedown', handleClickOutside);
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, []);

  // Update the selected label when value changes
  useEffect(() => {
    const selected = options.find(option => option.value === value);
    setSelectedLabel(selected ? selected.label : placeholder);
  }, [value, options, placeholder]);

  const handleSelect = (option: { value: string; label: string }) => {
    onChange(option.value);
    setSelectedLabel(option.label);
    setIsOpen(false);
  };

  return (
    <div className="relative" ref={dropdownRef}>
      <label htmlFor={id} className="mb-1.5 md:mb-2 block text-sm font-medium text-white">
        {label}
      </label>
      <div
        tabIndex={0}
        className="w-full rounded-lg border border-midnight-600 bg-midnight-800/50 p-2.5 md:p-3 text-white placeholder-gray-400 backdrop-blur-sm cursor-pointer focus:border-cyber-yellow-500 focus:outline-none focus:ring-2 focus:ring-cyber-yellow-500/30 relative flex items-center justify-between"
        onClick={() => setIsOpen(!isOpen)}
        onKeyDown={(e) => {
          if (e.key === 'Enter' || e.key === ' ') {
            e.preventDefault();
            setIsOpen(!isOpen);
          }
        }}
      >
        <span className={value ? 'text-white' : 'text-gray-400'}>{selectedLabel}</span>
        <ChevronDown className={`h-5 w-5 text-cyber-yellow-500 transition-transform duration-300 ${isOpen ? 'rotate-180' : ''}`} />
        {/* Hidden actual input for form submission */}
        <input
          type="hidden"
          id={id}
          name={name}
          value={value}
          required={required}
        />
      </div>
      
      {isOpen && (
        <div className="absolute z-10 mt-1 w-full rounded-lg border border-midnight-600 bg-midnight-900/90 backdrop-blur-md shadow-lg overflow-hidden">
          <ul>
            {options.map((option) => (
              <li
                key={option.value}
                className={`p-2.5 md:p-3 cursor-pointer hover:bg-cyber-yellow-500/10 transition-colors ${value === option.value ? 'bg-cyber-yellow-500/20 text-cyber-yellow-500' : 'text-white'}`}
                onClick={() => handleSelect(option)}
                tabIndex={0}
                role="option"
                aria-selected={value === option.value}
              >
                {option.label}
              </li>
            ))}
          </ul>
        </div>
      )}
    </div>
  );
}
