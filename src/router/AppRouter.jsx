import { createBrowserRouter } from 'react-router-dom';
import { RootLayout } from '../layout/RootLayout';
import { AddUserPage } from '../pages/AddUserPage';
import { EditUserPage } from '../pages/EditUserPage';
import { HomePage } from '../pages/HomePage';

export const router = createBrowserRouter([
  {
    path: "/",
    element: <RootLayout />,
    children: [
      {
        path: "/",
        element: <HomePage />,
      },
      {
        path: "/user/add",
        element: <AddUserPage />,
      },
      {
        path: "/user/edit/:id",
        element: <EditUserPage />,
      },
    ],
  },
]);
