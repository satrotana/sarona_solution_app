import React from 'react';

interface InputProps {
  id: string;
  onChange: any;
  value: string;
  label: string;
  type?: string;
}

const Input: React.FC<InputProps> = ({ id, onChange, value, label, type }) => {
  return (
    <div className="relative">
      <input
        required
        id={id}
        onChange={onChange}
        type={type}
        value={value}
        className="block border-2 border-emerald-700 rounded-md w-full text-md text-emerald-900 appearance-none focus:outline-none pt-3 pb-1 px-4 focus:ring-0 peer "
      />
      <label
        className="absolute uppercase bg-white text-md text-gray-400 px-1 duration-200 transform -translate-y-1 scale-90 top-4 z-10 origin-[0] left-6 peer-focus:scale-110 peer-focus:-translate-y-7 peer-focus:text-emerald-700 peer-valid:-translate-y-7 peer-valid:scale-110 peer-valid:text-emerald-700"
        htmlFor={id}
      >
        {label}
      </label>
    </div>
  );
};

export default Input;
