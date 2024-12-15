import { Routes, Route } from 'react-router-dom';
import HomePage from './pages/home';
import SelectPage from './pages/select';
import NotFoundPage from './pages/notFound';
// import NavBar from './component/NavBar';

function App() {
  return (
    <>
      {/* <NavBar /> */}
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/select" element={<SelectPage />} />
        <Route path="*" element={<NotFoundPage />} />
      </Routes>
    </>
  );
}

export default App;