export interface Issue {
  id: string;
  title: string;
  description: string;
  imageUrl?: string;
  location: {
    lat: number;
    lng: number;
    address: string;
  };
  category: 'pothole' | 'garbage' | 'water' | 'infrastructure' | 'lighting' | 'traffic';
  status: 'open' | 'in-progress' | 'resolved';
  userId: string;
  userName: string;
  userAvatar?: string;
  likes: number;
  comments: number;
  createdAt: string;
  updatedAt: string;
  tags: string[];
}

export interface User {
  id: string;
  name: string;
  email: string;
  avatar?: string;
  joinedAt: string;
  issuesSubmitted: number;
  votesGiven: number;
  suggestionsSubmitted: number;
  location: string;
}

export interface Suggestion {
  id: string;
  issueId: string;
  title: string;
  description: string;
  userId: string;
  userName: string;
  votes: number;
  createdAt: string;
  userHasVoted: boolean;
}

export interface Comment {
  id: string;
  issueId: string;
  userId: string;
  userName: string;
  userAvatar?: string;
  content: string;
  createdAt: string;
}