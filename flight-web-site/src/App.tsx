import { Route, Routes } from 'react-router-dom';
import PublicLayout from './layouts/PublicLayout';
import CarHire from './pages/CarHire';
import Flight from './features/fligths/pages/Flight';
import Home from './pages/Home';
import NotFound from './pages/NotFound';

function App() {

  return (
    <>
      <Routes>
        <Route path="/" element={<PublicLayout /> }>
          <Route index element={<Home />} />
          <Route path='/flights' element={<Flight />} />
          <Route path='/carhire' element={<CarHire />} />
          <Route path="*" element={<NotFound />} />
        </Route>
      </Routes>
    </>
  )
}

export default App;
