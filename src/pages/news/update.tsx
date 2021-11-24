import { useParams, Redirect } from 'react-router-dom';
import { useFormik } from 'formik';
import MainTemplate from '../../templates/main';
import NewsForm from './news-form';
import Spinner from '../../atoms/spinner';

import NewsValidations from './news-validations';
import { NewsFormItems, News } from '../../types';
// import { useAppSelector } from '../../redux/hooks';
import { useFetchNewsQuery, useUpdateNewsMutation } from '../../redux/reducers/news';

interface NewsUpdateProps {
  news: News;
}

function NewsUpdate({ news }: NewsUpdateProps) {
  const [updateNews, { isError, isLoading, isSuccess }] = useUpdateNewsMutation();

  const formik = useFormik<NewsFormItems>({
    enableReinitialize: true,
    initialValues: {
      description: news.description,
      title: news.title,
      imageURL: news.imageURL,
    },
    validate: NewsValidations,
    onSubmit: (formItems: NewsFormItems) => {
      updateNews({ ...news, ...formItems });
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
          && <Redirect to={`/board/${news.boardId}`}/>
      }
    </MainTemplate>
  );
}

interface NewsUpdatePageParams {
  newsId: string;
  boardId: string;
}

export default function NewsUpdatePage() {
  const { newsId } = useParams<NewsUpdatePageParams>();
  const { data: news = {} as News, isFetching } = useFetchNewsQuery(newsId);

  return (
    isFetching ? (
      <div className='flex justify-center p-5'>
        <Spinner/>
      </div>
    ) : (
      <NewsUpdate news={news}/>
    )
  );
}
