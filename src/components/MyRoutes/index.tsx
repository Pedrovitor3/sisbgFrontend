import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Sistema from '../../pages/sistema';
import Portaria from '../../pages/portaria';
import { AuthProvider } from '../../contexts/auth/AuthProvider';

const MyRoutes = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route
          path="/"
          element={
            <AuthProvider>
              <Sistema />
            </AuthProvider>
          }
        />
        <Route path={`/portaria/:id`} element={<Portaria />} />

        {/*<Route path='' element={<Navigate to='/' replace />} />*/}
      </Routes>
    </BrowserRouter>
  );
};

export default MyRoutes;
