import {createSlice, PayloadAction} from "@reduxjs/toolkit";

interface  GithubState {
    favorites: string[]
}

const initialState : GithubState = {
    favorites: JSON.parse(localStorage.getItem('fav')?? '[]')
}

export  const githubSlice = createSlice({
    name: 'github',
     initialState: initialState,
    reducers: {
        addFavorite: (state, action:PayloadAction<string>) => {
       state.favorites.push(action.payload)
            localStorage.setItem('fav', JSON.stringify(state.favorites))
        },
        removeFavorite: (state, action:PayloadAction<string>) => {
        state.favorites = state.favorites.filter((el)=>el !== action.payload)
            localStorage.setItem('fav', JSON.stringify(state.favorites))

        }
    }
})

export const githubActions = githubSlice.actions
export const githubReducer = githubSlice.reducer