import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Plus, TrendingUp, MapPin, Users, MessageSquare, CheckCircle, ArrowRight, Star, Zap, Sparkles } from 'lucide-react';
import IssueCard from '../components/IssueCard';
import { mockIssues } from '../utils/mockData';

const HomePage: React.FC = () => {
  const [issues] = useState(mockIssues);

  const stats = [
    { 
      label: 'Issues Reported', 
      value: '1,247', 
      icon: MessageSquare, 
      color: 'text-primary-600',
      bgColor: 'bg-primary-50',
      gradient: 'bg-gradient-primary',
      change: '+12%',
      changeType: 'positive'
    },
    { 
      label: 'Issues Resolved', 
      value: '892', 
      icon: CheckCircle, 
      color: 'text-success-600',
      bgColor: 'bg-success-50',
      gradient: 'bg-gradient-forest',
      change: '+8%',
      changeType: 'positive'
    },
    { 
      label: 'Active Users', 
      value: '5,432', 
      icon: Users, 
      color: 'text-accent-600',
      bgColor: 'bg-accent-50',
      gradient: 'bg-gradient-royal',
      change: '+23%',
      changeType: 'positive'
    },
    { 
      label: 'Cities Connected', 
      value: '23', 
      icon: MapPin, 
      color: 'text-warning-600',
      bgColor: 'bg-warning-50',
      gradient: 'bg-gradient-warm',
      change: '+2',
      changeType: 'positive'
    },
  ];

  const features = [
    {
      icon: Zap,
      title: 'Real-time Updates',
      description: 'Get instant notifications when issues are resolved or updated in your area.',
      gradient: 'bg-gradient-primary',
      color: 'text-primary-600'
    },
    {
      icon: Star,
      title: 'Community Verified',
      description: 'All reports are verified by community members and local authorities.',
      gradient: 'bg-gradient-secondary',
      color: 'text-secondary-600'
    },
    {
      icon: TrendingUp,
      title: 'Progress Tracking',
      description: 'Track the progress of reported issues from submission to resolution.',
      gradient: 'bg-gradient-accent',
      color: 'text-accent-600'
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-neutral-50 via-primary-50/20 to-secondary-50/20 pb-20 lg:pb-0">
      {/* Hero Section */}
      <div className="relative overflow-hidden bg-gradient-hero">
        {/* Background Pattern */}
        <div className="absolute inset-0 bg-[url('data:image/svg+xml,%3Csvg width=&quot;60&quot; height=&quot;60&quot; viewBox=&quot;0 0 60 60&quot; xmlns=&quot;http://www.w3.org/2000/svg&quot;%3E%3Cg fill=&quot;none&quot; fill-rule=&quot;evenodd&quot;%3E%3Cg fill=&quot;%23ffffff&quot; fill-opacity=&quot;0.05&quot;%3E%3Ccircle cx=&quot;30&quot; cy=&quot;30&quot; r=&quot;2&quot;/%3E%3C/g%3E%3C/g%3E%3C/svg%3E')] opacity-20"></div>
        
        {/* Floating Elements */}
        <div className="absolute top-20 left-10 w-20 h-20 bg-white/10 rounded-full blur-xl animate-float"></div>
        <div className="absolute top-40 right-20 w-32 h-32 bg-accent-500/20 rounded-full blur-xl animate-float" style={{ animationDelay: '1s' }}></div>
        <div className="absolute bottom-20 left-1/4 w-16 h-16 bg-secondary-500/20 rounded-full blur-xl animate-float" style={{ animationDelay: '2s' }}></div>
        
        <div className="relative max-w-7xl mx-auto px-6 py-20 lg:py-32">
          <div className="text-center max-w-4xl mx-auto">
            <div className="animate-fade-in">
              <div className="flex items-center justify-center mb-6">
                <Sparkles className="text-white/80 mr-3 animate-pulse" size={32} />
                <span className="text-white/80 font-medium">Empowering Communities</span>
                <Sparkles className="text-white/80 ml-3 animate-pulse" size={32} />
              </div>
              
              <h1 className="text-4xl lg:text-7xl font-bold text-white mb-6 leading-tight">
                Your Voice,{' '}
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-yellow-200 via-white to-cyan-200">
                  Your City
                </span>
              </h1>
              <p className="text-xl lg:text-2xl text-blue-100 mb-10 max-w-3xl mx-auto leading-relaxed text-balance">
                Connect with your community to report civic issues, propose solutions, 
                and track progress in making your city better for everyone.
              </p>
            </div>
            
            <div className="animate-slide-up flex flex-col sm:flex-row gap-4 justify-center items-center">
              <Link
                to="/post"
                className="group bg-white text-primary-600 px-8 py-4 rounded-2xl font-semibold text-lg hover:shadow-glow hover:scale-105 transition-all duration-300 shadow-large flex items-center space-x-3"
              >
                <Plus size={24} className="group-hover:rotate-90 transition-transform duration-300" />
                <span>Report an Issue</span>
                <ArrowRight size={20} className="group-hover:translate-x-1 transition-transform duration-300" />
              </Link>
              <Link
                to="/explore"
                className="group border-2 border-white text-white px-8 py-4 rounded-2xl font-semibold text-lg hover:bg-white hover:text-primary-600 transition-all duration-300 flex items-center space-x-3 backdrop-blur-sm hover:shadow-glow"
              >
                <TrendingUp size={24} />
                <span>Explore Issues</span>
              </Link>
            </div>
          </div>
        </div>
      </div>

      {/* Stats Section */}
      <div className="max-w-7xl mx-auto px-6 -mt-16 relative z-10">
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 lg:gap-6">
          {stats.map((stat, index) => (
            <div
              key={index}
              className="animate-slide-up"
              style={{ animationDelay: `${index * 100}ms` }}
            >
              <div className="card-hover p-6 text-center group hover:shadow-glow">
                <div className={`inline-flex items-center justify-center w-14 h-14 rounded-2xl ${stat.bgColor} mb-4 group-hover:scale-110 transition-transform duration-200 ${stat.color} group-hover:shadow-soft`}>
                  <stat.icon size={28} />
                </div>
                <div className="text-3xl lg:text-4xl font-bold text-neutral-900 mb-2">
                  {stat.value}
                </div>
                <div className="text-sm text-neutral-600 font-medium mb-2">
                  {stat.label}
                </div>
                <div className={`text-xs font-medium ${
                  stat.changeType === 'positive' ? 'text-success-600' : 'text-error-600'
                }`}>
                  {stat.change} this month
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Features Section */}
      <div className="max-w-7xl mx-auto px-6 py-20">
        <div className="text-center mb-16">
          <h2 className="text-3xl lg:text-4xl font-bold text-neutral-900 mb-4">
            Why Choose <span className="text-gradient-primary">Civiconnect</span>?
          </h2>
          <p className="text-xl text-neutral-600 max-w-2xl mx-auto">
            We make civic engagement simple, transparent, and effective
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <div
              key={index}
              className="animate-fade-in text-center group"
              style={{ animationDelay: `${index * 200}ms` }}
            >
              <div className="card-hover p-8 h-full hover:shadow-glow">
                <div className={`inline-flex items-center justify-center w-16 h-16 rounded-2xl ${feature.gradient} text-white mb-6 group-hover:scale-110 transition-transform duration-200 shadow-soft`}>
                  <feature.icon size={32} />
                </div>
                <h3 className="text-xl font-semibold text-neutral-900 mb-4">
                  {feature.title}
                </h3>
                <p className="text-neutral-600 leading-relaxed">
                  {feature.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Recent Issues Section */}
      <div className="max-w-7xl mx-auto px-6 py-20">
        <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between mb-12">
          <div>
            <h2 className="text-3xl lg:text-4xl font-bold text-neutral-900 mb-4">
              Recent <span className="text-gradient-primary">Issues</span>
            </h2>
            <p className="text-xl text-neutral-600">
              Latest reports from your community
            </p>
          </div>
          <Link
            to="/explore"
            className="mt-6 lg:mt-0 btn-outline btn-lg group"
          >
            <span>View all issues</span>
            <ArrowRight size={20} className="group-hover:translate-x-1 transition-transform duration-200" />
          </Link>
        </div>

        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {issues.slice(0, 6).map((issue, index) => (
            <div
              key={issue.id}
              className="animate-fade-in"
              style={{ animationDelay: `${index * 100}ms` }}
            >
              <IssueCard
                issue={issue}
                onLike={(id) => console.log('Liked issue:', id)}
                onComment={(id) => console.log('Comment on issue:', id)}
              />
            </div>
          ))}
        </div>
      </div>

      {/* Call to Action Section */}
      <div className="relative overflow-hidden bg-gradient-sunset">
        {/* Background Pattern */}
        <div className="absolute inset-0 bg-[url('data:image/svg+xml,%3Csvg width=&quot;60&quot; height=&quot;60&quot; viewBox=&quot;0 0 60 60&quot; xmlns=&quot;http://www.w3.org/2000/svg&quot;%3E%3Cg fill=&quot;none&quot; fill-rule=&quot;evenodd&quot;%3E%3Cg fill=&quot;%23ffffff&quot; fill-opacity=&quot;0.05&quot;%3E%3Ccircle cx=&quot;30&quot; cy=&quot;30&quot; r=&quot;2&quot;/%3E%3C/g%3E%3C/g%3E%3C/svg%3E')] opacity-20"></div>
        
        {/* Floating Elements */}
        <div className="absolute top-10 right-10 w-24 h-24 bg-white/10 rounded-full blur-xl animate-float"></div>
        <div className="absolute bottom-10 left-10 w-20 h-20 bg-white/10 rounded-full blur-xl animate-float" style={{ animationDelay: '1.5s' }}></div>
        
        <div className="relative max-w-7xl mx-auto px-6 py-20">
          <div className="text-center max-w-3xl mx-auto">
            <h2 className="text-3xl lg:text-5xl font-bold text-white mb-6">
              Ready to Make a <span className="text-gradient-multicolor">Difference</span>?
            </h2>
            <p className="text-xl text-orange-100 mb-10 leading-relaxed text-balance">
              Join thousands of citizens working together to improve their communities.
              Your voice matters, and together we can create lasting change.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
              <Link
                to="/signup"
                className="group bg-white text-warning-600 px-8 py-4 rounded-2xl font-semibold text-lg hover:shadow-glow hover:scale-105 transition-all duration-300 shadow-large flex items-center space-x-3"
              >
                <Users size={24} />
                <span>Join Civiconnect</span>
                <ArrowRight size={20} className="group-hover:translate-x-1 transition-transform duration-200" />
              </Link>
              <Link
                to="/explore"
                className="group border-2 border-white text-white px-8 py-4 rounded-2xl font-semibold text-lg hover:bg-white hover:text-warning-600 transition-all duration-300 flex items-center space-x-3 hover:shadow-glow"
              >
                <TrendingUp size={24} />
                <span>Browse Issues</span>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HomePage;