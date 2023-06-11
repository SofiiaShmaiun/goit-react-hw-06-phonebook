import { combineReducers, createSlice, nanoid } from '@reduxjs/toolkit';

const contactsInitialState = [];
const filterInitialState = '';

const contactsSlice = createSlice({
  name: 'contacts',
  initialState: contactsInitialState,
  reducers: {
    addContact: {
      reducer(state, action) {
        state.push(action.payload);
      },
      prepare(name, number) {
        return {
          payload: {
            name,
            number,
            id: nanoid(),
          },
        };
      },
    },
    deleteContact(state, action) {
      const index = state.filter(contact => contact.id !== action.payload);
      state.splice(index, 1);
    },
  },
});

const filterSlice = createSlice({
  name: 'filter',
  initialState: filterInitialState,
  reducers: {
    updateFilter(state, action) {
      return (state = action.payload);
    },
  },
});

export const { addContact, deleteContact } = contactsSlice.actions;
export const { updateFilter } = filterSlice.actions;

export const contactsReducer = contactsSlice.reducer;
export const filterReducer = filterSlice.reducer;

export const reducer = combineReducers({
  contacts: contactsReducer,
  filter: filterReducer,
});
