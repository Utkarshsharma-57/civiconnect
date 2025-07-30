import React, { useState } from 'react';
import { Heart, MessageCircle, MapPin, Clock, CheckCircle, AlertCircle, Share2, Bookmark, Eye } from 'lucide-react';
import { Issue } from '../types';

interface IssueCardProps {
  issue: Issue;
  onLike?: (issueId: string) => void;
  onComment?: (issueId: string) => void;
}

const IssueCard: React.FC<IssueCardProps> = ({ issue, onLike, onComment }) => {
  const [isLiked, setIsLiked] = useState(false);
  const [isBookmarked, setIsBookmarked] = useState(false);

  const getStatusColor = (status: string) => {
    switch (status) {
      case 'open':
        return 'text-red-600 bg-red-50 border-red-200';
      case 'in-progress':
        return 'text-orange-600 bg-orange-50 border-orange-200';
      case 'resolved':
        return 'text-green-600 bg-green-50 border-green-200';
      default:
        return 'text-neutral-600 bg-neutral-50 border-neutral-200';
    }
  };

  const getStatusIcon = (status: string) => {
    switch (status) {
      case 'open':
        return <AlertCircle size={14} />;
      case 'in-progress':
        return <Clock size={14} />;
      case 'resolved':
        return <CheckCircle size={14} />;
      default:
        return <AlertCircle size={14} />;
    }
  };

  const getCategoryColor = (category: string) => {
    const colors = {
      pothole: 'bg-neutral-100 text-neutral-800',
      garbage: 'bg-green-100 text-green-800',
      water: 'bg-blue-100 text-blue-800',
      infrastructure: 'bg-purple-100 text-purple-800',
      lighting: 'bg-yellow-100 text-yellow-800',
      traffic: 'bg-red-100 text-red-800',
    };
    return colors[category as keyof typeof colors] || 'bg-neutral-100 text-neutral-800';
  };

  const formatDate = (dateString: string) => {
    const date = new Date(dateString);
    const now = new Date();
    const diffInHours = (now.getTime() - date.getTime()) / (1000 * 60 * 60);
    
    if (diffInHours < 24) {
      return `${Math.floor(diffInHours)}h ago`;
    } else {
      return `${Math.floor(diffInHours / 24)}d ago`;
    }
  };

  const handleLike = () => {
    setIsLiked(!isLiked);
    onLike?.(issue.id);
  };

  const handleBookmark = () => {
    setIsBookmarked(!isBookmarked);
  };

  return (
    <div className="card-hover group">
      {/* Header */}
      <div className="p-6 pb-4">
        <div className="flex items-start justify-between mb-4">
          <div className="flex items-center space-x-3">
            <div className="relative">
              <img
                src={issue.userAvatar}
                alt={issue.userName}
                className="w-12 h-12 rounded-full object-cover ring-2 ring-white shadow-soft"
              />
              <div className="absolute -bottom-1 -right-1 w-4 h-4 bg-green-500 rounded-full border-2 border-white"></div>
            </div>
            <div>
              <h3 className="font-semibold text-neutral-900">{issue.userName}</h3>
              <p className="text-sm text-neutral-500 flex items-center">
                <Clock size={12} className="mr-1" />
                {formatDate(issue.createdAt)}
              </p>
            </div>
          </div>
          
          <div className="flex items-center space-x-2">
            <button
              onClick={handleBookmark}
              className={`p-2 rounded-lg transition-all duration-200 ${
                isBookmarked 
                  ? 'text-primary-600 bg-primary-50' 
                  : 'text-neutral-400 hover:text-primary-600 hover:bg-primary-50'
              }`}
            >
              <Bookmark size={16} className={isBookmarked ? 'fill-current' : ''} />
            </button>
            
            <div className={`px-3 py-1.5 rounded-full text-xs font-semibold border flex items-center space-x-1.5 ${getStatusColor(issue.status)}`}>
              {getStatusIcon(issue.status)}
              <span className="capitalize">{issue.status.replace('-', ' ')}</span>
            </div>
          </div>
        </div>

        <h2 className="text-xl font-bold text-neutral-900 mb-3 leading-tight group-hover:text-primary-600 transition-colors duration-200">
          {issue.title}
        </h2>
        
        <p className="text-neutral-700 mb-4 leading-relaxed line-clamp-3">
          {issue.description}
        </p>

        <div className="flex items-center text-sm text-neutral-500 mb-4">
          <MapPin size={16} className="mr-2 text-primary-500" />
          <span className="truncate">{issue.location.address}</span>
        </div>

        <div className="flex flex-wrap gap-2 mb-4">
          <span className={`px-3 py-1.5 rounded-full text-xs font-semibold ${getCategoryColor(issue.category)}`}>
            {issue.category}
          </span>
          {issue.tags.slice(0, 2).map((tag) => (
            <span
              key={tag}
              className="px-3 py-1.5 rounded-full text-xs font-semibold bg-neutral-100 text-neutral-700"
            >
              #{tag}
            </span>
          ))}
          {issue.tags.length > 2 && (
            <span className="px-3 py-1.5 rounded-full text-xs font-semibold bg-neutral-100 text-neutral-700">
              +{issue.tags.length - 2} more
            </span>
          )}
        </div>
      </div>

      {/* Image */}
      {issue.imageUrl && (
        <div className="px-6 pb-4">
          <div className="relative overflow-hidden rounded-xl">
            <img
              src={issue.imageUrl}
              alt={issue.title}
              className="w-full h-48 object-cover group-hover:scale-105 transition-transform duration-300"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
          </div>
        </div>
      )}

      {/* Actions */}
      <div className="px-6 py-4 border-t border-neutral-100">
        <div className="flex items-center justify-between">
          <div className="flex items-center space-x-6">
            <button
              onClick={handleLike}
              className={`flex items-center space-x-2 transition-all duration-200 ${
                isLiked 
                  ? 'text-red-500' 
                  : 'text-neutral-500 hover:text-red-500'
              }`}
            >
              <Heart size={18} className={isLiked ? 'fill-current' : ''} />
              <span className="text-sm font-semibold">{issue.likes + (isLiked ? 1 : 0)}</span>
            </button>
            
            <button
              onClick={() => onComment?.(issue.id)}
              className="flex items-center space-x-2 text-neutral-500 hover:text-primary-600 transition-colors duration-200"
            >
              <MessageCircle size={18} />
              <span className="text-sm font-semibold">{issue.comments}</span>
            </button>
            
            <button className="flex items-center space-x-2 text-neutral-500 hover:text-neutral-700 transition-colors duration-200">
              <Eye size={18} />
              <span className="text-sm font-semibold">1.2k</span>
            </button>
          </div>
          
          <div className="flex items-center space-x-2">
            <button className="p-2 text-neutral-400 hover:text-neutral-600 hover:bg-neutral-50 rounded-lg transition-all duration-200">
              <Share2 size={16} />
            </button>
            
            <button className="btn-primary btn-sm">
              View Details
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default IssueCard;