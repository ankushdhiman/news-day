import { FormikErrors } from 'formik';
import { NewsFormItems } from '../../types';

export default function NewsFormValidations(values: NewsFormItems) {
  const errors: FormikErrors<NewsFormItems> = {};
  if (!values.title) {
    errors.title = 'Title Required';
  }
  if (!values.description) {
    errors.description = 'Description Required';
  }
  if (!values.imageURL) {
    errors.imageURL = 'Image URL Required';
  }

  return errors;
}
