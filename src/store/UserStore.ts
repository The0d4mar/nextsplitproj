import { UserProps, UserStoreProps } from "@/interfaces/interfaces"
import { createSlice, PayloadAction } from '@reduxjs/toolkit'

const initialState: UserStoreProps = {
    activeUser: {
        id: 1,
        name: 'Владимир',
        secondName: 'Горный',
        registerData: '5 мая 2025 года',
    },
    listOfUser: [],
};

const UserStore = createSlice({
    name: 'userstore',
    initialState,
    reducers: {
        addUser: (store, action: PayloadAction<{user: UserProps}>) =>{
            store.listOfUser.push(action.payload.user)
        },
        setActiveUser: (store, action: PayloadAction<{id: number}>) =>{
            store.activeUser = {
                id: 0,
                name: '',
                secondName: '',
                registerData: '',
            };
            store.activeUser = store.listOfUser.find(user=> user.id === action.payload.id)!

        },
        updateUserName: (store, action: PayloadAction<{id: number, newName: string}>) =>{

            store.listOfUser.map(user =>{
                if(user.id == action.payload.id) user.name = action.payload.newName
            })
            if(store.activeUser.id == action.payload.id){
                store.activeUser = store.listOfUser.find(user=> user.id === action.payload.id)!
            }

        }

    }

})

export const {addUser, setActiveUser, updateUserName}  = UserStore.actions;
export default UserStore.reducer;