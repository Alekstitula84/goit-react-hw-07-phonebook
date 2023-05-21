import { configureStore } from '@reduxjs/toolkit';
import { filterReduser } from './filterSlice';
import { contactsApi } from './contactsApi';
import { setupListeners } from '@reduxjs/toolkit/query';

export const store = configureStore({
    reducer: {
        filter: filterReduser,
        [contactsApi.reducerPath]: contactsApi.reducer,
    },
    middleware: getDefaultMiddleware => [
        ...getDefaultMiddleware(),
        contactsApi.middleware,
    ],
});

setupListeners(store.dispatch);