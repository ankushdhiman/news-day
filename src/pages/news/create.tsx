import { useParams, Redirect } from 'react-router-dom';
import { useFormik } from 'formik';
import MainTemplate from '../../templates/main';
import NewsForm from './news-form';

import NewsValidations from './news-validations';
import { NewsFormItems, News } from '../../types';
import { useAppSelector } from '../../redux/hooks';
import { useAddNewsMutation } from '../../redux/reducers/news';

export default function NewsCreate() {
  const { boardId } = useParams<{ boardId: string; }>();
  const user = useAppSelector(state => state.user);
  const [addNews, { isError, isLoading, isSuccess }] = useAddNewsMutation();

  const formik = useFormik<NewsFormItems>({
    initialValues: {
      title: '',
      description: '',
      imageURL: '',
    },
    validate: NewsValidations,
    onSubmit: (values: NewsFormItems) => {
      const news: News = {
        id: `${user.email}-${Date.now()}`,
        createdAt: new Date().toISOString(),
        author: user.email,
        status: 'draft',
        boardId,
        ...values,
      };
      addNews(news);
    },
  });

  return (
    <MainTemplate>
      <NewsForm
        mutationLoading={isLoading}
        mutationhasError={isError}
        {...formik}
      />
      {
        isSuccess
          && <Redirect to={`/board/${boardId}`}/>
      }
    </MainTemplate>
  );
}
