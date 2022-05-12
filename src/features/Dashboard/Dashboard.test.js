import { render, screen } from '@testing-library/react';
import Dashboard from './Dashboard';
import {Provider} from 'react-redux';
import configureStore from 'redux-mock-store';

it("Should be display text Halaman Dashboard", () => {

    // Testing dashboard page dengan redux menggunakan provider
    const initialState = {dataLogin : null};
    const mockConfigStore = configureStore();
    const mockStore = mockConfigStore(initialState);

   render(
   <Provider store={mockStore}>
       <Dashboard />
   </Provider>
   );
   const titlePage = screen.getByText("Halaman Dashboard");
   expect(titlePage).toBeInTheDocument();
});