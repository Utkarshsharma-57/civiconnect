import React from 'react';
import { Calendar, MapPin, Award, TrendingUp, MessageSquare, CheckCircle } from 'lucide-react';
import { mockUser, mockIssues } from '../utils/mockData';
import IssueCard from '../components/IssueCard';

const ProfilePage: React.FC = () => {
  const user = mockUser;
  const userIssues = mockIssues.filter(issue => issue.userId === user.id);

  const achievements = [
    { icon: MessageSquare, label: 'Issue Reporter', description: 'Reported 10+ issues', earned: true },
    { icon: TrendingUp, label: 'Community Advocate', description: 'Received 100+ votes', earned: true },
    { icon: CheckCircle, label: 'Solution Finder', description: 'Suggested 5+ solutions', earned: true },
    { icon: Award, label: 'Civic Champion', description: 'Active for 6+ months', earned: false },
  ];

  const stats = [
    { label: 'Issues Reported', value: user.issuesSubmitted, color: 'text-blue-600' },
    { label: 'Solutions Suggested', value: user.suggestionsSubmitted, color: 'text-green-600' },
    { label: 'Votes Given', value: user.votesGiven, color: 'text-purple-600' },
    { label: 'Issues Resolved', value: '3', color: 'text-orange-600' },
  ];

  return (
    <div className="min-h-screen bg-gray-50 pb-20 md:pb-0">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {/* Profile Header */}
        <div className="bg-white rounded-xl shadow-sm border border-gray-100 overflow-hidden mb-8">
          <div className="bg-gradient-to-r from-blue-500 to-green-500 h-32"></div>
          <div className="relative px-6 pb-6">
            <div className="flex flex-col md:flex-row md:items-end md:space-x-6 -mt-16">
              <img
                src={user.avatar}
                alt={user.name}
                className="w-32 h-32 rounded-full border-4 border-white object-cover mx-auto md:mx-0"
              />
              <div className="text-center md:text-left mt-4 md:mt-0 flex-1">
                <h1 className="text-3xl font-bold text-gray-900 mb-2">
                  {user.name}
                </h1>
                <div className="flex flex-col md:flex-row md:items-center md:space-x-6 text-gray-600 mb-4">
                  <div className="flex items-center justify-center md:justify-start space-x-1">
                    <MapPin size={16} />
                    <span>{user.location}</span>
                  </div>
                  <div className="flex items-center justify-center md:justify-start space-x-1">
                    <Calendar size={16} />
                    <span>Joined {new Date(user.joinedAt).toLocaleDateString()}</span>
                  </div>
                </div>
                <p className="text-gray-700 max-w-2xl">
                  Active community member working to improve local infrastructure and quality of life. 
                  Passionate about creating positive change through civic engagement.
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Stats Grid */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-8">
          {stats.map((stat, index) => (
            <div key={index} className="bg-white rounded-xl shadow-sm border border-gray-100 p-6 text-center">
              <div className={`text-3xl font-bold mb-2 ${stat.color}`}>
                {stat.value}
              </div>
              <div className="text-sm text-gray-600 font-medium">
                {stat.label}
              </div>
            </div>
          ))}
        </div>

        {/* Main Content */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Issues and Activity */}
          <div className="lg:col-span-2 space-y-8">
            {/* Recent Issues */}
            <div>
              <h2 className="text-2xl font-bold text-gray-900 mb-6">
                My Issues ({userIssues.length})
              </h2>
              <div className="space-y-6">
                {userIssues.map((issue) => (
                  <IssueCard
                    key={issue.id}
                    issue={issue}
                    onLike={(id) => console.log('Liked issue:', id)}
                    onComment={(id) => console.log('Comment on issue:', id)}
                  />
                ))}
              </div>
            </div>
          </div>

          {/* Sidebar */}
          <div className="space-y-8">
            {/* Achievements */}
            <div className="bg-white rounded-xl shadow-sm border border-gray-100 p-6">
              <h3 className="text-lg font-semibold text-gray-900 mb-4 flex items-center">
                <Award size={20} className="mr-2" />
                Achievements
              </h3>
              <div className="space-y-4">
                {achievements.map((achievement, index) => (
                  <div
                    key={index}
                    className={`flex items-start space-x-3 p-3 rounded-lg ${
                      achievement.earned ? 'bg-green-50 border border-green-200' : 'bg-gray-50'
                    }`}
                  >
                    <div className={`p-2 rounded-lg ${
                      achievement.earned ? 'bg-green-100 text-green-600' : 'bg-gray-200 text-gray-400'
                    }`}>
                      <achievement.icon size={16} />
                    </div>
                    <div className="flex-1">
                      <h4 className={`font-medium ${
                        achievement.earned ? 'text-green-900' : 'text-gray-600'
                      }`}>
                        {achievement.label}
                      </h4>
                      <p className={`text-sm ${
                        achievement.earned ? 'text-green-700' : 'text-gray-500'
                      }`}>
                        {achievement.description}
                      </p>
                    </div>
                    {achievement.earned && (
                      <CheckCircle size={16} className="text-green-600" />
                    )}
                  </div>
                ))}
              </div>
            </div>

            {/* Impact Summary */}
            <div className="bg-white rounded-xl shadow-sm border border-gray-100 p-6">
              <h3 className="text-lg font-semibold text-gray-900 mb-4">
                Community Impact
              </h3>
              <div className="space-y-4">
                <div className="flex justify-between items-center">
                  <span className="text-gray-600">Issues Resolved</span>
                  <span className="font-semibold text-green-600">3</span>
                </div>
                <div className="flex justify-between items-center">
                  <span className="text-gray-600">Community Likes</span>
                  <span className="font-semibold text-blue-600">127</span>
                </div>
                <div className="flex justify-between items-center">
                  <span className="text-gray-600">Comments Received</span>
                  <span className="font-semibold text-purple-600">89</span>
                </div>
                <div className="pt-4 border-t border-gray-100">
                  <div className="text-center">
                    <div className="text-2xl font-bold text-gray-900 mb-1">
                      92%
                    </div>
                    <div className="text-sm text-gray-600">
                      Community Satisfaction
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProfilePage;