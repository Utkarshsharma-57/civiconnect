import React, { useState } from 'react';
import { ThumbsUp, ThumbsDown, Plus, TrendingUp, MessageSquare } from 'lucide-react';
import { mockSuggestions, mockIssues } from '../utils/mockData';

const SuggestionsPage: React.FC = () => {
  const [suggestions] = useState(mockSuggestions);
  const [issues] = useState(mockIssues);
  const [selectedIssue, setSelectedIssue] = useState<string>('all');

  const getIssueTitle = (issueId: string) => {
    const issue = issues.find(i => i.id === issueId);
    return issue ? issue.title : 'Unknown Issue';
  };

  const filteredSuggestions = selectedIssue === 'all' 
    ? suggestions 
    : suggestions.filter(s => s.issueId === selectedIssue);

  const handleVote = (suggestionId: string, isUpvote: boolean) => {
    console.log(`${isUpvote ? 'Upvoted' : 'Downvoted'} suggestion:`, suggestionId);
    // Handle voting logic here
  };

  return (
    <div className="min-h-screen bg-gray-50 pb-20 md:pb-0">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {/* Header */}
        <div className="mb-8">
          <div className="flex flex-col md:flex-row md:items-center md:justify-between">
            <div>
              <h1 className="text-3xl font-bold text-gray-900 mb-2">
                Community Suggestions
              </h1>
              <p className="text-gray-600">
                Propose and vote on solutions to civic issues
              </p>
            </div>
            <button className="mt-4 md:mt-0 bg-blue-600 text-white px-6 py-3 rounded-lg hover:bg-blue-700 transition-colors font-medium flex items-center space-x-2">
              <Plus size={18} />
              <span>New Suggestion</span>
            </button>
          </div>
        </div>

        {/* Filter */}
        <div className="bg-white rounded-xl shadow-sm border border-gray-100 p-6 mb-8">
          <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
            <div className="flex-1">
              <label htmlFor="issue-filter" className="block text-sm font-medium text-gray-700 mb-2">
                Filter by Issue
              </label>
              <select
                id="issue-filter"
                value={selectedIssue}
                onChange={(e) => setSelectedIssue(e.target.value)}
                className="w-full p-3 border border-gray-200 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
              >
                <option value="all">All Issues</option>
                {issues.map((issue) => (
                  <option key={issue.id} value={issue.id}>
                    {issue.title}
                  </option>
                ))}
              </select>
            </div>
            <div className="flex items-center space-x-4 text-sm text-gray-600">
              <div className="flex items-center space-x-1">
                <TrendingUp size={16} />
                <span>{filteredSuggestions.length} suggestions</span>
              </div>
            </div>
          </div>
        </div>

        {/* Suggestions List */}
        <div className="space-y-6">
          {filteredSuggestions.map((suggestion) => (
            <div
              key={suggestion.id}
              className="bg-white rounded-xl shadow-sm border border-gray-100 overflow-hidden hover:shadow-md transition-shadow"
            >
              <div className="p-6">
                {/* Issue Context */}
                <div className="mb-4 p-3 bg-blue-50 rounded-lg border border-blue-100">
                  <p className="text-sm text-blue-600 font-medium">
                    Solution for: {getIssueTitle(suggestion.issueId)}
                  </p>
                </div>

                {/* Suggestion Header */}
                <div className="flex items-start justify-between mb-4">
                  <div className="flex-1">
                    <h3 className="text-xl font-semibold text-gray-900 mb-2">
                      {suggestion.title}
                    </h3>
                    <p className="text-gray-600 mb-3">
                      {suggestion.description}
                    </p>
                    <div className="flex items-center text-sm text-gray-500">
                      <span className="font-medium">{suggestion.userName}</span>
                      <span className="mx-2">•</span>
                      <span>{new Date(suggestion.createdAt).toLocaleDateString()}</span>
                    </div>
                  </div>
                </div>

                {/* Actions */}
                <div className="flex items-center justify-between pt-4 border-t border-gray-100">
                  <div className="flex items-center space-x-4">
                    <button
                      onClick={() => handleVote(suggestion.id, true)}
                      className={`flex items-center space-x-2 px-4 py-2 rounded-lg transition-colors ${
                        suggestion.userHasVoted
                          ? 'bg-green-100 text-green-700'
                          : 'bg-gray-100 text-gray-600 hover:bg-green-50 hover:text-green-600'
                      }`}
                    >
                      <ThumbsUp size={16} />
                      <span className="font-medium">{suggestion.votes}</span>
                    </button>
                    <button
                      onClick={() => handleVote(suggestion.id, false)}
                      className="flex items-center space-x-2 px-4 py-2 rounded-lg bg-gray-100 text-gray-600 hover:bg-red-50 hover:text-red-600 transition-colors"
                    >
                      <ThumbsDown size={16} />
                    </button>
                    <button className="flex items-center space-x-2 text-blue-600 hover:text-blue-700 transition-colors">
                      <MessageSquare size={16} />
                      <span>Discuss</span>
                    </button>
                  </div>
                  <div className="text-sm text-gray-500">
                    {suggestion.votes} votes
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Empty State */}
        {filteredSuggestions.length === 0 && (
          <div className="text-center py-12">
            <div className="text-gray-400 mb-4">
              <TrendingUp size={48} className="mx-auto" />
            </div>
            <h3 className="text-lg font-medium text-gray-900 mb-2">
              No suggestions yet
            </h3>
            <p className="text-gray-600 mb-6">
              Be the first to propose a solution for this issue
            </p>
            <button className="bg-blue-600 text-white px-6 py-3 rounded-lg hover:bg-blue-700 transition-colors font-medium flex items-center space-x-2 mx-auto">
              <Plus size={18} />
              <span>Add Suggestion</span>
            </button>
          </div>
        )}
      </div>
    </div>
  );
};

export default SuggestionsPage;