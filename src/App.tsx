import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navigation from './components/Navigation';
import HomePage from './pages/HomePage';
import ExplorePage from './pages/ExplorePage';
import PostIssuePage from './pages/PostIssuePage';
import SuggestionsPage from './pages/SuggestionsPage';
import ProfilePage from './pages/ProfilePage';
import LoginPage from './pages/LoginPage';
import SignUpPage from './pages/SignUpPage';
import ChatBotWidget from './components/ChatBotWidget';
import { AuthProvider } from './contexts/AuthContext';

function App() {
  return (
    <AuthProvider>
      <Router>
        <div className="min-h-screen bg-neutral-50 font-sans antialiased">
          <Routes>
            <Route path="/login" element={<LoginPage />} />
            <Route path="/signup" element={<SignUpPage />} />
            <Route path="/*" element={
              <>
                <Navigation />
                <main className="lg:pt-0">
                  <Routes>
                    <Route path="/" element={<HomePage />} />
                    <Route path="/explore" element={<ExplorePage />} />
                    <Route path="/post" element={<PostIssuePage />} />
                    <Route path="/suggestions" element={<SuggestionsPage />} />
                    <Route path="/profile" element={<ProfilePage />} />
                  </Routes>
                </main>
              </>
            } />
          </Routes>
          <ChatBotWidget />
        </div>
      </Router>
    </AuthProvider>
  );
}

export default App;