import { StrictMode, Suspense, lazy } from 'react';
import { createRoot } from 'react-dom/client';
import './index.css';
import {
  createBrowserRouter,
  RouterProvider,
} from 'react-router-dom';

import AuthProvider from './Contexts/AuthProvider.jsx';
import Spinner from './Components/Spinner/spinner.jsx';

// Lazy-loaded components
const Root = lazy(() => import('./Layouts/Root.jsx'));
const Home = lazy(() => import('./Components/Home/Home.jsx'));
const Login = lazy(() => import('./Components/Login/Login.jsx'));
const Register = lazy(() => import('./Components/Register/Register.jsx'));
const Whyus = lazy(() => import('./Components/Whyus/Whyus.jsx'));
const Category = lazy(() => import('./Components/Category/Category.jsx'));
const Packages = lazy(() => import('./Components/Packages/Packages.jsx'));
const SubsBox = lazy(() => import('./Pages/SubsBox.jsx'));
const Error = lazy(() => import('./Components/ErrorPage/Error.jsx'));
const SubsDetails = lazy(() => import('./Components/SubsDetails/SubsDetails.jsx'));
const Profile = lazy(() => import('./Pages/Profile.jsx'));
const ForgotPassword = lazy(() => import('./Components/ForgetPassword/forgetpassword.jsx'));

const router = createBrowserRouter([
  {
    path: '/',
    element: (
      <Suspense fallback={<Spinner />}>
        <Root />
      </Suspense>
    ),
    children: [
      {
        index: true,
        element: (
          <Suspense fallback={<Spinner />}>
            <Home />
          </Suspense>
        ),
      },
      {
        path: 'login',
        element: (
          <Suspense fallback={<Spinner />}>
            <Login />
          </Suspense>
        ),
      },
      {
        path: 'register',
        element: (
          <Suspense fallback={<Spinner />}>
            <Register />
          </Suspense>
        ),
      },
      {
        path: 'category',
        element: (
          <Suspense fallback={<Spinner />}>
            <Category />
          </Suspense>
        ),
      },
      {
        path: 'packages',
        element: (
          <Suspense fallback={<Spinner />}>
            <Packages />
          </Suspense>
        ),
      },
      {
        path: 'why-us',
        element: (
          <Suspense fallback={<Spinner />}>
            <Whyus />
          </Suspense>
        ),
      },
      {
        path: 'subscription-packages',
        element: (
          <Suspense fallback={<Spinner />}>
            <SubsBox />
          </Suspense>
        ),
      },
      {
        path: 'profile',
        element: (
          <Suspense fallback={<Spinner />}>
            <Profile />
          </Suspense>
        ),
      },
      {
        path: 'forget-password',
        element: (
          <Suspense fallback={<Spinner />}>
            <ForgotPassword />
          </Suspense>
        ),
      },
      {
        path: '*',
        element: (
          <Suspense fallback={<Spinner />}>
            <Error />
          </Suspense>
        ),
      },
      {
        path: 'packages/:id',
        element: (
          <Suspense fallback={<Spinner />}>
            <SubsDetails />
          </Suspense>
        ),
        loader: () => fetch('../public/faqs.JSON'),
      },
    ],
  },
]);

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <Suspense fallback={<Spinner />}>
      <AuthProvider>
        <RouterProvider router={router} />
      </AuthProvider>
    </Suspense>
  </StrictMode>
);
