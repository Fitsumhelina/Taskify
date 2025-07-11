import React, { useState } from 'react';
import { X } from 'lucide-react';

interface CreateTaskModalProps {
  onClose: () => void;
  onCreateTask: (taskName: string) => void;
}

const CreateTaskModal: React.FC<CreateTaskModalProps> = ({ onClose, onCreateTask }) => {
  const [taskName, setTaskName] = useState('');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (taskName.trim()) {
      onCreateTask(taskName.trim());
      setTaskName('');
    }
  };

  const handleBackdropClick = (e: React.MouseEvent) => {
    if (e.target === e.currentTarget) {
      onClose();
    }
  };

  return (
    <div 
      className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50 p-4"
      onClick={handleBackdropClick}
    >
      <div className="bg-white rounded-2xl shadow-xl w-full max-w-md">
        <div className="p-6">
          <div className="flex items-center justify-between mb-4">
            <h2 className="text-xl font-bold text-gray-800">Create New Task</h2>
            <button
              onClick={onClose}
              className="text-gray-500 hover:text-gray-700"
            >
              <X size={24} />
            </button>
          </div>

          <p className="text-gray-600 mb-6">
            Organize your productivity effortlessly by creating a new task. Name it
            whatever helps you stay on top of your game!
          </p>

          <form onSubmit={handleSubmit} className="space-y-4">
            <div className="flex space-x-3">
              <input
                type="text"
                placeholder="Task name"
                value={taskName}
                onChange={(e) => setTaskName(e.target.value)}
                className="flex-1 px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-pink-500 focus:border-transparent"
                required
                autoFocus
              />
              <button
                type="submit"
                className="bg-pink-500 hover:bg-pink-600 text-white font-medium px-6 py-3 rounded-lg transition duration-200"
              >
                Create Task
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default CreateTaskModal;