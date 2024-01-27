import { Routes, Route, BrowserRouter } from 'react-router-dom';
import HomePage from './pages/HomePage';
import SignIn from './pages/SignInPage';
import SignUp from './pages/SignUpPage';
import ProfilePage from './pages/ProfilePage';
import LikedPage from './pages/LikedPage';
import UploadPage from './pages/UploadPage';
import ImagePage from './pages/ImagePage';
import SearchPage from './pages/SearchPage';
import UserProfilePage from './pages/UserProfile';


function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<HomePage />} />
        <Route path='/login' element={<SignIn />} />
        <Route path='/register' element={<SignUp />} />
        <Route path='/profile' element={<ProfilePage />} />
        <Route path='/liked' element={<LikedPage />} />
        <Route path='/upload' element={<UploadPage />} />
        <Route path='/image/:imageUrl' element={<ImagePage />} />
        <Route path='/search/:title' element={<SearchPage />} />
        <Route path='/user/:user' element={<UserProfilePage />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
