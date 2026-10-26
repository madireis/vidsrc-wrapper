import { createBrowserRouter, RouterProvider, Outlet, useLocation } from 'react-router-dom';
import Layout from './components/layout/Layout';
import Home from './pages/Home';
import Browse from './pages/Browse';
import MovieDetail from './pages/MovieDetail';
import TvDetail from './pages/TvDetail';
import TvShows from './pages/TvShows';
import Watch from './pages/Watch';
import Search from './pages/Search';
import Collection from './pages/Collection';
import Watchlist from './pages/Watchlist';
import History from './pages/History';
import Stats from './pages/Stats';
import Person from './pages/Person';
import { WatchlistProvider } from './context/WatchlistContext';

/**
 * LayoutWrapper: renders the sidebar/nav Layout.
 * The <Outlet> is keyed by location.key (a unique string per navigation event,
 * not just per path), which forces React to fully unmount + remount the child
 * page component every time the user navigates — even between two /person/:id
 * pages with different IDs. This guarantees useEffect re-runs and fresh data.
 */
function LayoutWrapper() {
  const location = useLocation();
  return (
    <Layout>
      <Outlet key={location.key} />
    </Layout>
  );
}

/**
 * WatchWrapper: same key trick for the Watch (iframe) page, which sits outside
 * the standard Layout. Keying by location.key disposes the iframe on navigation.
 */
function WatchWrapper() {
  const location = useLocation();
  return <Watch key={location.key} />;
}

const router = createBrowserRouter([
  {
    path: '/watch/:type/:id',
    element: <WatchWrapper />,
  },
  {
    element: <LayoutWrapper />,
    children: [
      { path: '/',             element: <Home /> },
      { path: '/browse',       element: <Browse /> },
      { path: '/tv-shows',     element: <TvShows /> },
      { path: '/search',       element: <Search /> },
      { path: '/watchlist',    element: <Watchlist /> },
      { path: '/history',      element: <History /> },
      { path: '/stats',        element: <Stats /> },
      { path: '/movie/:id',    element: <MovieDetail /> },
      { path: '/tv/:id',       element: <TvDetail /> },
      { path: '/person/:id',   element: <Person /> },
      { path: '/collection/:id', element: <Collection /> },
    ],
  },
], {
  basename: import.meta.env.BASE_URL,
});

export default function App() {
  return (
    <WatchlistProvider>
      <RouterProvider router={router} />
    </WatchlistProvider>
  );
}
