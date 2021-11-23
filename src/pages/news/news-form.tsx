import { FormikProps } from 'formik';

import Button from '../../atoms/button';
import TextInput from '../../atoms/text-input';
import TextArea from '../../atoms/text-area';
import Spinner from '../../atoms/spinner';

import { NewsFormItems, MutationProgressProps } from '../../types';

export default function NewsForm(props: FormikProps<NewsFormItems> & MutationProgressProps) {
  const { values, errors, handleSubmit, handleChange, mutationLoading, mutationhasError } = props;
  console.log(values);

  return (
    <form className='flex flex-col items-center p-2' onSubmit={handleSubmit}>
      <div className='w-full max-w-[400px] mb-5'>
        <TextInput
          className='w-full'
          label='Title'
          type='text'
          onChange={handleChange}
          name='title'
          value={values.title}
        />
        {
          !!errors.title && (
            <span className='text-sm text-alert mt-1'>{errors.title}</span>
          )
        }
      </div>
      <div className='w-full max-w-[400px] mb-5'>
        <TextInput
          className='w-full'
          label='Image URL'
          type='text'
          onChange={handleChange}
          name='imageURL'
          value={values.imageURL}
        />
        {
          !!errors.imageURL && (
            <span className='text-sm text-alert mt-1'>{errors.imageURL}</span>
          )
        }
      </div>
      <div className='w-full max-w-[400px] mb-10'>
        <TextArea
          className='w-full'
          placeholder='Description'
          onChange={handleChange}
          name='description'
          value={values.description}
          rows={5}
        />
        {
          !!errors.description && (
            <span className='text-sm text-alert mt-1'>{errors.description}</span>
          )
        }
      </div>
      {
        mutationLoading ? (
          <div className='flex items-center justify-center p-2'>
            <Spinner/>
          </div>
        ) : (
          <div className='w-full max-w-[400px]'>
            <Button
              className='secondary-button w-full'
              label='Submit'
              type='submit'
            />
            {
              mutationhasError && (
                <small className='text-alert text-center text-sm'>
                  Submission Failed. Please try again.
                </small>
              )
            }
          </div>
        )
      }
    </form>
  );
}
