import { useParams } from 'react-router-dom';

import MainTemplate from '../../templates/main';
import List from '../../components/list';
import LinkButton from '../../atoms/link-button';
import NewsCard from '../../components/cards/news';

import { useFetchBoardNewsQuery } from '../../redux/reducers/news';
import { BoardNews, News } from '../../types';

export default function BoardsOverviewPage() {
  const { boardId } = useParams<{ boardId: string; }>();
  const { data: boardsNews = {} as BoardNews, isError } = useFetchBoardNewsQuery(boardId);
  const { drafts, published, archives } = boardsNews;
  const draftsExists = !!drafts && !!drafts.length;
  const publishedExists = !!published && !!published.length;
  const archivesExists = !!archives && !!archives.length;
  const isAnyNewsAvailable = draftsExists || publishedExists || archivesExists;

  return (
    <MainTemplate>
      {
        draftsExists
          && (
            <h2 className='text-4xl font-bold text-center'>
              Drafts:
            </h2>
          )
      }
      <List
        className='p-2 flex items-center flex-wrap'
        key='drafts'
        listItems={drafts}
        item={NewsCard}
        itemProps={{ className: 'mr-2 mb-2' }}
        keyExpression={(news: News) => news.id}
      />
      {
        publishedExists
          && (
            <h2 className='text-4xl font-bold text-center'>
              Published:
            </h2>
          )
      }
      <List
        className='p-2 flex items-center flex-wrap'
        key='published'
        listItems={published}
        item={NewsCard}
        itemProps={{ className: 'mr-2 mb-2' }}
        keyExpression={(news: News) => news.id}
      />
      {
        archivesExists
          && (
            <h2 className='text-4xl font-bold text-center'>
              Archives:
            </h2>
          )
      }
      <List
        className='p-2 flex items-center flex-wrap'
        key='archives'
        listItems={archives}
        item={NewsCard}
        itemProps={{ className: 'mr-2 mb-2' }}
        keyExpression={(news: News) => news.id}
      />
      {
        !isAnyNewsAvailable && !isError
          && (
            <h2 className='text-4xl font-bold text-center mb-10'>
              No News Are Available for this board.
            </h2>
          )
      }
      {
        isError
          && (
            <h2 className='text-4xl font-bold text-center text-alert mb-10'>
              This Board is currently unavailable please try again later.
            </h2>
          )
      }
      {
        !isError
          && (
            <div className='flex justify-center'>
              <LinkButton
                className='primary-button'
                label='Add News +'
                url={`/board/${boardId}/create-news`}
              />
            </div>
          )
      }
    </MainTemplate>
  );
}
