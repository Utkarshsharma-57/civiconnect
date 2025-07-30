import React, { useState, useEffect } from 'react';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { Home, Search, Plus, User, Menu, X, TrendingUp, Bell, Settings, LogOut } from 'lucide-react';
import { useAuth } from '../contexts/AuthContext';

const Navigation: React.FC = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const location = useLocation();
  const navigate = useNavigate();
  const { currentUser, logout } = useAuth();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navItems = [
    { path: '/', label: 'Home', icon: Home },
    { path: '/explore', label: 'Explore', icon: Search },
    { path: '/post', label: 'Post Issue', icon: Plus },
    { path: '/suggestions', label: 'Suggestions', icon: TrendingUp },
    { path: '/profile', label: 'Profile', icon: User },
  ];

  const isActive = (path: string) => location.pathname === path;

  const handleLogout = async () => {
    try {
      await logout();
      navigate('/');
    } catch (error) {
      console.error('Failed to log out:', error);
    }
  };

  return (
    <>
      {/* Desktop Navigation */}
      <nav className={`hidden lg:block sticky top-0 z-50 transition-all duration-300 ${
        isScrolled 
          ? 'bg-white/95 backdrop-blur-md shadow-medium border-b border-neutral-100' 
          : 'bg-white shadow-soft'
      }`}>
        <div className="max-w-7xl mx-auto px-6">
          <div className="flex items-center justify-between h-16">
            {/* Logo */}
            <Link to="/" className="flex items-center space-x-3 group">
              <div className="relative">
                <div className="w-10 h-10 bg-gradient-hero rounded-xl flex items-center justify-center shadow-soft group-hover:shadow-medium transition-all duration-200 group-hover:scale-105">
                  <span className="text-white font-bold text-lg">CC</span>
                </div>
                <div className="absolute -inset-1 bg-gradient-hero rounded-xl opacity-0 group-hover:opacity-20 blur transition-opacity duration-200 -z-10"></div>
              </div>
              <div>
                <span className="text-xl font-bold bg-gradient-hero bg-clip-text text-transparent">
                  Civiconnect
                </span>
                <p className="text-xs text-neutral-500 -mt-1">Community First</p>
              </div>
            </Link>
            
            {/* Navigation Links */}
            <div className="flex items-center space-x-1">
              {navItems.map(({ path, label, icon: Icon }) => (
                <Link
                  key={path}
                  to={path}
                  className={`nav-link ${
                    isActive(path) ? 'nav-link-active' : 'nav-link-inactive'
                  }`}
                >
                  <Icon size={18} />
                  <span>{label}</span>
                </Link>
              ))}
            </div>

            {/* Right Side Actions */}
            <div className="flex items-center space-x-3">
              <button className="btn-ghost btn-sm relative">
                <Bell size={20} />
                <span className="absolute -top-1 -right-1 w-3 h-3 bg-red-500 rounded-full animate-bounce-gentle"></span>
              </button>
              
              <button className="btn-ghost btn-sm">
                <Settings size={20} />
              </button>
              
              <div className="h-6 w-px bg-neutral-200"></div>
              
              {currentUser ? (
                <div className="flex items-center space-x-3">
                  <div className="flex items-center space-x-2">
                    <div className="w-8 h-8 bg-gradient-primary rounded-full flex items-center justify-center">
                      <span className="text-white text-sm font-medium">
                        {currentUser.email?.charAt(0).toUpperCase()}
                      </span>
                    </div>
                    <span className="text-sm font-medium text-neutral-700 hidden md:block">
                      {currentUser.email}
                    </span>
                  </div>
                  <button
                    onClick={handleLogout}
                    className="btn-ghost btn-sm text-error-600 hover:text-error-700 hover:bg-error-50"
                  >
                    <LogOut size={18} />
                  </button>
                </div>
              ) : (
                <>
                  <Link to="/login" className="btn-ghost btn-sm">
                    Login
                  </Link>
                  
                  <Link to="/signup" className="btn-primary btn-sm">
                    Sign Up
                  </Link>
                </>
              )}
            </div>
          </div>
        </div>
      </nav>

      {/* Mobile Navigation Header */}
      <nav className={`lg:hidden sticky top-0 z-50 transition-all duration-300 ${
        isScrolled 
          ? 'bg-white/95 backdrop-blur-md shadow-medium border-b border-neutral-100' 
          : 'bg-white shadow-soft'
      }`}>
        <div className="px-4">
          <div className="flex items-center justify-between h-16">
            {/* Mobile Logo */}
            <Link to="/" className="flex items-center space-x-2">
              <div className="w-8 h-8 bg-gradient-hero rounded-lg flex items-center justify-center">
                <span className="text-white font-bold text-sm">CC</span>
              </div>
              <span className="text-lg font-bold bg-gradient-hero bg-clip-text text-transparent">
                Civiconnect
              </span>
            </Link>
            
            {/* Mobile Menu Button */}
            <button
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className="btn-ghost btn-sm"
            >
              {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>

        {/* Mobile Menu Overlay */}
        {isMobileMenuOpen && (
          <div className="absolute top-full left-0 right-0 bg-white border-t border-neutral-100 shadow-large animate-slide-down">
            <div className="px-4 py-6 space-y-2">
              {navItems.map(({ path, label, icon: Icon }) => (
                <Link
                  key={path}
                  to={path}
                  onClick={() => setIsMobileMenuOpen(false)}
                  className={`flex items-center space-x-3 px-4 py-3 rounded-xl text-base font-medium transition-all duration-200 ${
                    isActive(path)
                      ? 'text-primary-600 bg-primary-50 border border-primary-100'
                      : 'text-neutral-700 hover:text-primary-600 hover:bg-neutral-50'
                  }`}
                >
                  <Icon size={20} />
                  <span>{label}</span>
                </Link>
              ))}
              
              <div className="pt-4 space-y-3">
                <div className="flex items-center space-x-3 px-4 py-3">
                  <button className="btn-ghost flex-1 flex items-center justify-center space-x-2">
                    <Bell size={20} />
                    <span>Notifications</span>
                  </button>
                  <button className="btn-ghost">
                    <Settings size={20} />
                  </button>
                </div>
                
                {currentUser ? (
                  <div className="space-y-3">
                    <div className="flex items-center space-x-3 px-4 py-3 bg-neutral-50 rounded-xl">
                      <div className="w-10 h-10 bg-gradient-primary rounded-full flex items-center justify-center">
                        <span className="text-white font-medium">
                          {currentUser.email?.charAt(0).toUpperCase()}
                        </span>
                      </div>
                      <div className="flex-1">
                        <p className="font-medium text-neutral-900">{currentUser.email}</p>
                        <p className="text-sm text-neutral-500">Signed in</p>
                      </div>
                    </div>
                    <button
                      onClick={() => {
                        handleLogout();
                        setIsMobileMenuOpen(false);
                      }}
                      className="w-full btn-ghost text-error-600 hover:text-error-700 hover:bg-error-50 flex items-center justify-center space-x-2"
                    >
                      <LogOut size={20} />
                      <span>Sign Out</span>
                    </button>
                  </div>
                ) : (
                  <div className="flex space-x-3">
                    <Link
                      to="/login"
                      onClick={() => setIsMobileMenuOpen(false)}
                      className="btn-outline flex-1 text-center"
                    >
                      Login
                    </Link>
                    <Link
                      to="/signup"
                      onClick={() => setIsMobileMenuOpen(false)}
                      className="btn-primary flex-1 text-center"
                    >
                      Sign Up
                    </Link>
                  </div>
                )}
              </div>
            </div>
          </div>
        )}
      </nav>

      {/* Bottom Navigation for Mobile */}
      <div className="lg:hidden fixed bottom-0 left-0 right-0 bg-white border-t border-neutral-200 z-50 shadow-large">
        <div className="flex justify-around items-center py-2 px-4">
          {navItems.map(({ path, label, icon: Icon }) => (
            <Link
              key={path}
              to={path}
              className={`flex flex-col items-center py-2 px-3 rounded-xl transition-all duration-200 ${
                isActive(path)
                  ? 'text-primary-600 bg-primary-50'
                  : 'text-neutral-500 hover:text-primary-600 hover:bg-neutral-50'
              }`}
            >
              <Icon size={20} />
              <span className="text-xs mt-1 font-medium">{label}</span>
            </Link>
          ))}
        </div>
      </div>
    </>
  );
};

export default Navigation;