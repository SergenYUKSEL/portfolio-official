import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { Home } from './home'
import { Header } from './header'
import { Hr } from './hr'
import { Skills } from './skills'

function App() {
  return (
    <div>
      <Header/>
      <Hr/>
      <BrowserRouter>
      <Routes>
          <Route path="/" element={<Home/>}>
          </Route>
        </Routes>
      </BrowserRouter>
      <Skills/>
    </div>
  );
}

export default App;
