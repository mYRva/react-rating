
import {BrowserRouter as Router, Route, Routes} from 'react-router-dom'

import Header from "./component/Header";
import FeedBackList from "./component/FeedBackList";
import FeedBackStats from "./component/FeedBackStats";
import FeedBackForm from "./component/FeedBackForm";

import AboutPage from './pages/AboutPage';
import {FeedbackProvider} from './context/FeedbackContext'

import AboutIconLink from './component/AboutIconLink';

function App(){ 
    
    return (      
        <FeedbackProvider>        
            <Router>
                <Header />
                <div className='container'>
                    <Routes>
                        <Route
                            exact 
                            path='/' 
                            element={
                                <>
                                    <FeedBackForm  />
                                    <FeedBackStats  />
                                    <FeedBackList   />
                                </>   
                            }>
                        </Route>                                           
                    
                        <Route path='/about' element={<AboutPage/>} />
                    </Routes> 
                    <AboutIconLink/>
                </div>    
            </Router>      
        </FeedbackProvider>        
    )    
}

export default App;