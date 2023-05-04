import { Route, Routes } from 'react-router-dom';
import PublicLayout from './components/layouts/PublicLayout';
import Home from './pages/Home';
import NotFound from './pages/NotFound';

function App() {

  return (
    <>
      <Routes>
        <Route path="/" element={<PublicLayout /> }>
          <Route index element={<Home />} />
          <Route path="*" element={<NotFound />} />
        </Route>
      </Routes>
    </>
  )
}

export default App;
