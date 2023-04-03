import {useState, useEffect} from 'react';
import {useLazyGetUserReposQuery, useSearchUsersQuery} from "../store/github/githubApi";
import {useDebounce} from "../hooks/debounce";
import RepoCard from "../components/RepoCard";

function HomePage() {
    const [search, setSearch] = useState('')
    const [dropdown, setDropDown] = useState(false)
    const debounce = useDebounce(search)
    const {data: users, isLoading, isError} = useSearchUsersQuery(debounce,{
        skip: debounce.length<3,
        refetchOnFocus: true,
    })
    const [fetchRepos, {data:repos, isLoading:areReposLoading}] =  useLazyGetUserReposQuery()
const showUserDetail =(username:string)=>{
    fetchRepos(username)
    setDropDown(false)
}
    useEffect(() => {
      setDropDown(debounce.length>3 && users?.length! > 0)
    }, [debounce]);

    return (
        <div className='flex justify-center pt-10 mx-auto h-screen w-screen'>
            {isError&& <p className='text-center text-red-600'>Something went wrong!</p>}

            <div className='relative w-[560px]'>
                <input type='text' onChange={(e)=>setSearch(e.target.value)} className='border py-2 px-4 w-full h-[42px] mb-2' placeholder='search GitHub users...'/>

                {dropdown &&<ul className=' list-none absolute top-[42px] left-0 right-0 max-h-[200px] overflow-y-scroll shadow-md bg-white'>
                    {isLoading && <p className='text-center'>Loading...</p>}
                    {users?.map((user)=>(
                        <li onClick={()=>showUserDetail(user?.login)} className='py-2 px-4 hover:bg-gray-500 hover:text-white transition-colors cursor-pointer' key={user.id}>
                            {user.login}
                        </li>
                    ))}
                </ul> }
                <div className ='container' >
                    {areReposLoading && <p className='text-center'>Repos are loading...</p>}
                    {repos?.map((repo)=>(
                        <RepoCard key={repo.id} repo={repo} />
                    ))}
                </div>
            </div>




        </div>
    );
}

export default HomePage;