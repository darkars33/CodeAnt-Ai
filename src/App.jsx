import { useEffect } from 'react';
import { Routes, Route, Navigate, useNavigate, useLocation } from 'react-router-dom';
import { useUser } from '@clerk/clerk-react';
import Home from './pages/Home';
import Saas from './pages/Saas';
import SelfHosted from './pages/SelfHosted';
import Error from './pages/Error';
import Navbar from './Component/Navbar';

function App() {
  const { user, isSignedIn, isLoaded } = useUser();
  const navigate = useNavigate();
  const location = useLocation();


  useEffect(() => {
    if (isLoaded && location.search.includes('__clerk')) {
      navigate('/', { replace: true });
    }
  }, [isLoaded, location, navigate,isSignedIn]);

  if (!isLoaded) {
    return <div>Loading...</div>;
  }

  return (
    <div className="flex">
      {isSignedIn && <Navbar />}
      <Routes>
        <Route
          path="/"
          element={isSignedIn ? <Home /> : <Navigate to="/saas" />}
        />
        <Route
          path="/saas"
          element={!isSignedIn ? <Saas /> : <Navigate to="/" />}
        />
        <Route
          path="/self-hosted"
          element={!isSignedIn ? <SelfHosted /> : <Navigate to="/" />}
        />
        <Route path="*" element={<Error />} />
      </Routes>
    </div>
  );
}

export default App;
