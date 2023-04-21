/* eslint-disable import/no-extraneous-dependencies */
import ReactDOM from 'react-dom/client'
import './index.css'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import { Provider } from 'react-redux'
import { QueryClient, QueryClientProvider } from '@tanstack/react-query'
import App from './App'
import { Main } from './components/Pages/Main/Main'
import { SignIn } from './components/Pages/SignIn/SignIn'
import { SignUp } from './components/Pages/SignUp/SignUp'
import { Bars } from './components/Pages/Bars/Bars'
import { About } from './components/Pages/About/About'
import { News } from './components/Pages/News/News'
import { Merch } from './components/Pages/Merch/Merch'
import { User } from './components/Pages/User/User'
import { store } from './redux/store'
import { DetailPageBar } from './components/Pages/DetailPageBar/DetailPageBar'
import { Cart } from './components/Pages/Cart/Cart'
import { DetailPageMerch } from './components/Pages/DetailPageMerch/DetailPageMerch'
import { Сheckout } from './components/Pages/Cart/Сheckout/Сheckout'

const router = createBrowserRouter(
  [
    {
      path: '/',
      element: <App />,
      children: [
        {
          index: true,
          element: <Main />,
        },
        {
          path: 'signin',
          element: <SignIn />,
        },
        {
          path: 'signup',
          element: <SignUp />,
        },
        {
          path: 'bars',
          element: <Bars />,
        },
        {
          path: 'bars/:barId',
          element: <DetailPageBar />,
        },
        {
          path: 'about',
          element: <About />,
        },
        {
          path: 'news',
          element: <News />,
        },
        {
          path: 'user',
          element: <User />,
        },
        {
          path: 'merch',
          element: <Merch />,
        },
        {
          path: 'merch/:merchId',
          element: <DetailPageMerch />,
        },
        {
          path: 'cart',
          element: <Cart />,
        },
        {
          path: '/cart/:merchId',
          element: <DetailPageMerch />,
        },
        {
          path: 'checkout',
          element: <Сheckout />,
        },
      ],
    },
  ],
  { basename: '/brewery/' },
)

const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      refetchOnWindowFocus: false,
    },
  },
})

const root = ReactDOM.createRoot(document.getElementById('root'))
root.render(
  // <React.StrictMode>
  <QueryClientProvider client={queryClient}>
    <Provider store={store}>
      <RouterProvider router={router} />
    </Provider>
  </QueryClientProvider>,
  // </React.StrictMode>,
)
