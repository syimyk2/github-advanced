import React from 'react';
import { IRepo } from './models/models';
import { useActions } from '../hooks/action';


function RepoCard({ repo }: { repo: IRepo }) {
  const { addFavorite } = useActions();

  const addToFavoriteHandler = (event: React.MouseEvent<HTMLButtonElement>) => {
    event.preventDefault();
    addFavorite(repo.html_url);
  };

  const removeFavoriteHandler = (
    event: React.MouseEvent<HTMLButtonElement>
  ) => {};
  return (
    <div className='border py-3 px-5 rounded mb-2 hover: shadow-md hover:bg-gray-100 transition-all'>
      <a href={repo.html_url} target='_blank'>
        <h2 className='text-lg font-bold'>{repo.full_name}</h2>
        <p className='text-sm'>
          Forks: <span className='font-bold'>{repo?.forks}</span>
          Watchers: <span className='font-bold'>{repo?.watchers}</span>
        </p>
        <p className='text-sm font-thin'>{repo?.description}</p>
      </a>

      <button
        className='py-2 px-4 bg-yellow-400 rounded hover:shadow-md mr-3 transition-all'
        onClick={addToFavoriteHandler}
      >
        add fav
      </button>
      <button
        className='py-2 px-4 bg-red-400 rounded hover:shadow-md transition-all'
        onClick={removeFavoriteHandler}
      >
        remove fav
      </button>
    </div>
  );
}

export default RepoCard;
