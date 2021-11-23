import { useParams } from 'react-router-dom';

import MainTemplate from '../../templates/main';
import NewsCard from '../../components/cards/news';
import { useFetchBoardNewsQuery } from '../../redux/reducers/board';
import { BoardNews, News } from '../../types';

export default function BoardsOverviewPage() {
  const { boardId } = useParams<{ boardId: string; }>();
  const { data: boardsNews = {} as BoardNews, isError } = useFetchBoardNewsQuery(boardId);
  const { drafts, published, archives } = boardsNews;

  return (
    <MainTemplate>
      {
        !!drafts && !!drafts.length
        && (
          <>
            <h2 className='text-4xl font-bold text-center'>
              Drafts:
            </h2>
            <div className='p-2 flex items-center'>
              {
                drafts.map((news: News) => (
                  <NewsCard key={news.id} className='mr-2 mb-2' {...news}/>
                ))
              }
            </div>
          </>
        )
      }
      {
        !!published && !!published.length
        && (
          <>
            <h2 className='text-4xl font-bold text-center'>
              Published:
            </h2>
            <div className='p-2 flex items-center'>
              {
                published.map((news: News) => (
                  <NewsCard key={news.id} className='mr-2 mb-2' {...news}/>
                ))
              }
            </div>
          </>
        )
      }
      {
        !!archives && !!archives.length
        && (
          <>
            <h2 className='text-4xl font-bold text-center'>
              Archives:
            </h2>
            <div className='p-2 flex items-center'>
              {
                archives.map((news: News) => (
                  <NewsCard key={news.id} className='mr-2 mb-2' {...news}/>
                ))
              }
            </div>
          </>
        )
      }
      {
        !(drafts && drafts.length)
          && !(!!published && !!published.length)
          && !(!!archives && !!archives.length)
          && !isError
          && <h2 className='text-4xl font-bold text-center'>No News Are Available for this board.</h2>
      }
      {
        isError
          && <h2 className='text-4xl font-bold text-center text-alert'>This Board is currently unavailable please try again later.</h2>
      }
    </MainTemplate>
  );
}
