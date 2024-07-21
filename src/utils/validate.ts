import { User } from "../types/User";

type Error = {
  [key: string]: string; 
}

export const validate = (data: User) => {

  const errors:Error = {};

  if (!data.name) {
    errors.name = 'Name is required';
  }

  if (!data.email) {
    errors.email = 'Email is required';
  }

  if (!data.agree) {
    errors.agree = 'You need to agree with terms';
  }

  return errors;
}
