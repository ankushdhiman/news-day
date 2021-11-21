import { FormikProps } from 'formik';

import Button from '../../atoms/button';
import TextInput from '../../atoms/text-input';

import { LoginFormItems } from '../../types';

export default function LoginForm(props: FormikProps<LoginFormItems>) {
  const { values, errors, handleSubmit, handleChange } = props;

  return (
    <form className='flex flex-col items-center p-2' onSubmit={handleSubmit}>
      <div className='w-full max-w-[400px] mb-5'>
        <TextInput
          className='w-full'
          label='Username'
          type='text'
          onChange={handleChange}
          name='username'
          value={values.username}
        />
        {
          !!errors.username && (
            <span className='text-sm text-alert mt-1'>{errors.username}</span>
          )
        }
      </div>
      <div className='w-full max-w-[400px] mb-5'>
        <TextInput
          className='w-full'
          label='Email'
          type='text'
          onChange={handleChange}
          name='email'
          value={values.email}
        />
        {
          !!errors.email && (
            <span className='text-sm text-alert mt-1'>{errors.email}</span>
          )
        }
      </div>
      <div className='w-full max-w-[400px] mb-10'>
        <TextInput
          className='w-full'
          label='Password'
          type='password'
          onChange={handleChange}
          name='password'
          value={values.password}
        />
        {
          !!errors.password && (
            <span className='text-sm text-alert mt-1'>{errors.password}</span>
          )
        }
      </div>
      <div className='w-full max-w-[400px]'>
        <Button
          className='secondary-button w-full'
          label='Submit'
          type='submit'
        />
      </div>
    </form>
  );
}
