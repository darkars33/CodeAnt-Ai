import { useState, useEffect } from 'react';
import { Routes, Route, Navigate } from 'react-router-dom';
import Home from './pages/Home';
import Saas from './pages/Saas';
import SelfHosted from './pages/SelfHosted';
import Error from './pages/Error';
import { useUser } from '@clerk/clerk-react';
import Navbar from './Component/Navbar';

function App() {
  const { user, isSignedIn, isLoaded } = useUser();
  const [isAuthenticated, setIsAuthenticated] = useState(false);

  useEffect(() => {
    if (isLoaded) {
      setIsAuthenticated(isSignedIn);
    }
  }, [isSignedIn, isLoaded]);

  if (!isLoaded) {
    
    return <div>Loading...</div>;
  }

  return (
    <div className="flex">
      {isAuthenticated && <Navbar />}
      <Routes>
        <Route
          path="/"
          element={isAuthenticated ? <Home /> : <Navigate to="/saas" />}
        />
        <Route
          path="/saas"
          element={!isAuthenticated ? <Saas /> : <Navigate to="/" />}
        />
        <Route
          path="/self-hosted"
          element={!isAuthenticated ? <SelfHosted /> : <Navigate to="/" />}
        />
        <Route path="*" element={<Error />} />
      </Routes>
    </div>
  );
}

export default App;
