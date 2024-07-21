import { useState, FormEvent } from 'react';
import { User } from '../types/User';

const Form = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [agree, setAgree] = useState(false);
  const [errors, setErrors] = useState<User | null>(null);

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    console.log('sent!');
  };

  return (
    <form className="flex flex-col gap-3" onSubmit={handleSubmit}>
      <div className="flex flex-col">
        <label className="text-sm" htmlFor="name">
          Name
        </label>
        <input
          type="text"
          placeholder="Insert your name"
          className="rounded-lg py-2 px-2 text-sm placeholder:text-sm placeholder:text-stone-400"
        />
      </div>
      <div className="flex flex-col">
        <label className="text-sm" htmlFor="email">
          E-mail
        </label>
        <input
          type="email"
          placeholder="Insert your best e-mail"
          className="rounded-lg py-2 px-2 text-sm placeholder:text-sm placeholder:text-stone-400"
        />
      </div>
      <div className="flex flex-col">
        <a href="#" className="text-xs underline mb-2">
          Read the terms
        </a>
        <div className="flex gap-1 items-center">
          <input id="agree" type="checkbox" />
          <label htmlFor="agree" className="text-sm">
            Agree with terms
          </label>
        </div>
      </div>
      <button
        type="submit"
        className="bg-slate-600 hover:bg-slate-700 font-medium text-sm py-2 px-4 rounded-lg text-white"
      >
        Register
      </button>
    </form>
  );
};

export default Form;
