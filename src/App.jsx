import MainPage from './mainPage/MainPage.jsx';
import { Routes, Route } from 'react-router-dom';
import Registration from './registrationPage/Rigistration.jsx';
import Search from './search/Search.jsx';
import Results from './results/Results.jsx';
import { ResultProvider } from "./context/resultProvider";

function App(){
 return(
    <>
        <Routes>
            <Route path="/" element={<MainPage />} />
            <Route path="/registr" element={<Registration />} />
            
            <Route path="/search" element={
              <ResultProvider>
                <Search />
              </ResultProvider>} />

            <Route path="/result" element={<ResultProvider><Results /></ResultProvider>} />
            
        </Routes>
    </>
  )
}
 export default App