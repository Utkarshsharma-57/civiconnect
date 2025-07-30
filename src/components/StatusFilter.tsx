import React from 'react';
import { AlertCircle, Clock, CheckCircle } from 'lucide-react';

interface StatusFilterProps {
  selectedStatus: string;
  onStatusChange: (status: string) => void;
}

const StatusFilter: React.FC<StatusFilterProps> = ({ selectedStatus, onStatusChange }) => {
  const statuses = [
    { value: 'all', label: 'All Issues', icon: null, count: 247 },
    { value: 'open', label: 'Open', icon: AlertCircle, count: 156, color: 'text-red-600' },
    { value: 'in-progress', label: 'In Progress', icon: Clock, count: 67, color: 'text-orange-600' },
    { value: 'resolved', label: 'Resolved', icon: CheckCircle, count: 24, color: 'text-green-600' },
  ];

  return (
    <div className="flex flex-wrap gap-2">
      {statuses.map(({ value, label, icon: Icon, count, color }) => (
        <button
          key={value}
          onClick={() => onStatusChange(value)}
          className={`flex items-center space-x-2 px-4 py-2 rounded-lg text-sm font-medium transition-colors ${
            selectedStatus === value
              ? 'bg-blue-600 text-white'
              : 'bg-white text-gray-700 hover:bg-gray-50 border border-gray-200'
          }`}
        >
          {Icon && (
            <Icon 
              size={16} 
              className={selectedStatus === value ? 'text-white' : color}
            />
          )}
          <span>{label}</span>
          <span className={`px-2 py-0.5 rounded-full text-xs ${
            selectedStatus === value
              ? 'bg-blue-500 text-white'
              : 'bg-gray-100 text-gray-600'
          }`}>
            {count}
          </span>
        </button>
      ))}
    </div>
  );
};

export default StatusFilter;