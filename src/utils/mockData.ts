import { Issue, User, Suggestion } from '../types';

export const mockUser: User = {
  id: '1',
  name: 'Sarah Chen',
  email: 'sarah@example.com',
  avatar: 'https://images.pexels.com/photos/774909/pexels-photo-774909.jpeg?auto=compress&cs=tinysrgb&w=150&h=150&dpr=2',
  joinedAt: '2024-01-15',
  issuesSubmitted: 12,
  votesGiven: 45,
  suggestionsSubmitted: 8,
  location: 'Downtown District'
};

export const mockIssues: Issue[] = [
  {
    id: '1',
    title: 'Large pothole on Main Street blocking traffic',
    description: 'Deep pothole near the intersection causing damage to vehicles and creating safety hazard during rush hour.',
    imageUrl: 'https://images.pexels.com/photos/163064/play-stone-network-networked-interactive-163064.jpeg?auto=compress&cs=tinysrgb&w=600',
    location: {
      lat: 40.7128,
      lng: -74.0060,
      address: '123 Main Street, Downtown'
    },
    category: 'pothole',
    status: 'in-progress',
    userId: '1',
    userName: 'Sarah Chen',
    userAvatar: 'https://images.pexels.com/photos/774909/pexels-photo-774909.jpeg?auto=compress&cs=tinysrgb&w=50&h=50&dpr=2',
    likes: 24,
    comments: 8,
    createdAt: '2024-12-20T10:30:00Z',
    updatedAt: '2024-12-21T14:20:00Z',
    tags: ['urgent', 'traffic', 'safety']
  },
  {
    id: '2',
    title: 'Overflowing garbage bins in Central Park',
    description: 'Multiple bins are overflowing attracting pests and creating unsanitary conditions for families.',
    imageUrl: 'https://images.pexels.com/photos/2827392/pexels-photo-2827392.jpeg?auto=compress&cs=tinysrgb&w=600',
    location: {
      lat: 40.7829,
      lng: -73.9654,
      address: 'Central Park, Recreation Area'
    },
    category: 'garbage',
    status: 'open',
    userId: '2',
    userName: 'Mike Rodriguez',
    userAvatar: 'https://images.pexels.com/photos/1043471/pexels-photo-1043471.jpeg?auto=compress&cs=tinysrgb&w=50&h=50&dpr=2',
    likes: 18,
    comments: 5,
    createdAt: '2024-12-19T15:45:00Z',
    updatedAt: '2024-12-19T15:45:00Z',
    tags: ['sanitation', 'park', 'health']
  },
  {
    id: '3',
    title: 'Water leak flooding Oak Avenue sidewalk',
    description: 'Major water main break causing flooding and making the sidewalk impassable for pedestrians.',
    imageUrl: 'https://images.pexels.com/photos/1684187/pexels-photo-1684187.jpeg?auto=compress&cs=tinysrgb&w=600',
    location: {
      lat: 40.7589,
      lng: -73.9851,
      address: '456 Oak Avenue, Residential District'
    },
    category: 'water',
    status: 'resolved',
    userId: '3',
    userName: 'Emma Thompson',
    userAvatar: 'https://images.pexels.com/photos/1130626/pexels-photo-1130626.jpeg?auto=compress&cs=tinysrgb&w=50&h=50&dpr=2',
    likes: 31,
    comments: 12,
    createdAt: '2024-12-18T09:15:00Z',
    updatedAt: '2024-12-21T11:30:00Z',
    tags: ['emergency', 'water', 'resolved']
  },
  {
    id: '4',
    title: 'Broken streetlight creating safety concern',
    description: 'Street lamp has been out for weeks making the intersection dangerous for evening commuters.',
    imageUrl: 'https://images.pexels.com/photos/327933/pexels-photo-327933.jpeg?auto=compress&cs=tinysrgb&w=600',
    location: {
      lat: 40.7505,
      lng: -73.9934,
      address: '789 Elm Street, Business District'
    },
    category: 'lighting',
    status: 'open',
    userId: '4',
    userName: 'David Kim',
    userAvatar: 'https://images.pexels.com/photos/1681010/pexels-photo-1681010.jpeg?auto=compress&cs=tinysrgb&w=50&h=50&dpr=2',
    likes: 15,
    comments: 6,
    createdAt: '2024-12-17T18:20:00Z',
    updatedAt: '2024-12-17T18:20:00Z',
    tags: ['safety', 'lighting', 'pedestrian']
  }
];

export const mockSuggestions: Suggestion[] = [
  {
    id: '1',
    issueId: '1',
    title: 'Temporary traffic diversion with clear signage',
    description: 'Set up proper warning signs and traffic cones to guide vehicles around the pothole while repairs are scheduled.',
    userId: '2',
    userName: 'Mike Rodriguez',
    votes: 12,
    createdAt: '2024-12-20T12:00:00Z',
    userHasVoted: false
  },
  {
    id: '2',
    issueId: '1',
    title: 'Quick concrete patch as interim solution',
    description: 'Apply a temporary concrete patch to make the road safer until a permanent repair can be completed.',
    userId: '3',
    userName: 'Emma Thompson',
    votes: 8,
    createdAt: '2024-12-20T14:30:00Z',
    userHasVoted: true
  },
  {
    id: '3',
    issueId: '2',
    title: 'Install additional recycling bins',
    description: 'Add more bins and improve recycling options to reduce overall waste volume in the park.',
    userId: '1',
    userName: 'Sarah Chen',
    votes: 15,
    createdAt: '2024-12-19T16:15:00Z',
    userHasVoted: false
  }
];