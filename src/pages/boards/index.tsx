import MainTemplate from '../../templates/main';
import BoardCard from '../../components/cards/board';
import Spinner from '../../atoms/spinner';

import { useFetchBoardsQuery } from '../../redux/reducers/board';
import { Board } from '../../types';

export default function BoardsPage() {
  const { data: boards = [] as Board[], isFetching, isError } = useFetchBoardsQuery();
  return (
    <MainTemplate>
      {
        isError ? (
          <h2 className='text-4xl font-bold text-center text-alert'>
            Boards are currently not unavailable please try again later.
          </h2>
        ) : (
          <h1 className='text-5xl font-bold text-center'>
            Welcome to Newsday Boards.
          </h1>
        )
      }
      {
        isFetching
          && (
            <div className='flex justify-center items-center p-2'>
              <Spinner/>
            </div>
          )
      }
      {
        !!boards && !!boards.length
        && (
          <div className='p-2 flex items-center justify-center mt-10'>
            {
              boards.map(({ id, name }: Board) => (
                <BoardCard key={id} className='m-2 w-[200px] text-center' id={id} name={name}/>
              ))
            }
          </div>
        )
      }
    </MainTemplate>
  );
}
