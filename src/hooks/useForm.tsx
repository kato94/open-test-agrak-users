import React from 'react'
import { User } from '../interfaces/User';
import { useState } from 'react';

const emailRegex = /^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+\.[a-zA-Z0-9-.]+$/

export const useForm = () => {
  const [error, setError] = useState<string | null>(null);

  const submit = (e: React.FormEvent<HTMLFormElement>): User | undefined => {
    const formData = new FormData(e.target as HTMLFormElement);
    const data = Object.fromEntries(formData);
    const requiredAll = Object.values(data).some((value: FormDataEntryValue) => !value);

    if (requiredAll) {
      setError('Please fill all fields');
    } else if (!emailRegex.test(data.email as string)) {
      setError('Please enter a valid email');
    } else {
      setError(null);

      const user: User = {
        first_name: data.first_name as string,
        second_name: data.second_name as string,
        email: data.email as string,
        avatar: data.avatar as string,
      }
      return user;
    }
  }

  return {
    error,

    submit,
  }
}
