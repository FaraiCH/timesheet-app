import React, { useState } from 'react';
import { X, Edit, Trash, Eye, Save, Plus } from 'lucide-react';

const defaultUser = {
    id: '',
    name: '',
    email: '',
    role: 'user'
};

export function UserForm({ initialMode = 'view', user, onSubmit, onCancel }) {
    const [mode, setMode] = useState(initialMode);
    const [formData, setFormData] = useState(user || defaultUser);
    const [slideDirection, setSlideDirection] = useState('left');

    const handleModeChange = (newMode) => {
        setSlideDirection(getSlideDirection(mode, newMode));
        setMode(newMode);
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        onSubmit(formData, mode);
    };

    const handleInputChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    const getSlideDirection = (currentMode, newMode) => {
        const modes = ['view', 'edit', 'delete'];
        const currentIndex = modes.indexOf(currentMode);
        const newIndex = modes.indexOf(newMode);
        return newIndex > currentIndex ? 'left' : 'right';
    };

    return (
        <div className="w-full max-w-md mx-auto bg-white rounded-lg shadow-lg overflow-hidden">
            <div className="p-4 bg-gray-50 border-b flex justify-between items-center">
                <h2 className="text-lg font-semibold text-gray-700">
                    {mode === 'view' && 'View User'}
                    {mode === 'edit' && 'Edit User'}
                    {mode === 'create' && 'Create User'}
                    {mode === 'delete' && 'Delete User'}
                </h2>
                <div className="flex gap-2">
                    {mode !== 'view' && (
                        <button
                            onClick={() => handleModeChange('view')}
                            className="p-2 text-gray-500 hover:text-gray-700 rounded-full hover:bg-gray-100"
                        >
                            <Eye size={18} />
                        </button>
                    )}
                    {mode !== 'edit' && user && (
                        <button
                            onClick={() => handleModeChange('edit')}
                            className="p-2 text-blue-500 hover:text-blue-700 rounded-full hover:bg-blue-50"
                        >
                            <Edit size={18} />
                        </button>
                    )}
                    {mode !== 'delete' && user && (
                        <button
                            onClick={() => handleModeChange('delete')}
                            className="p-2 text-red-500 hover:text-red-700 rounded-full hover:bg-red-50"
                        >
                            <Trash size={18} />
                        </button>
                    )}
                </div>
            </div>

            <form onSubmit={handleSubmit} className="p-6">
                <div className={`transform transition-all duration-300 ${
                    slideDirection === 'left' ? 'translate-x-0' : '-translate-x-full'
                }`}>
                    {mode !== 'delete' ? (
                        <>
                            <div className="mb-4">
                                <label className="block text-sm font-medium text-gray-700 mb-1">
                                    Name
                                </label>
                                <input
                                    type="text"
                                    name="name"
                                    value={formData.name}
                                    onChange={handleInputChange}
                                    disabled={mode === 'view'}
                                    className="w-full px-3 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 disabled:bg-gray-50"
                                    required
                                />
                            </div>
                            <div className="mb-4">
                                <label className="block text-sm font-medium text-gray-700 mb-1">
                                    Email
                                </label>
                                <input
                                    type="email"
                                    name="email"
                                    value={formData.email}
                                    onChange={handleInputChange}
                                    disabled={mode === 'view'}
                                    className="w-full px-3 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 disabled:bg-gray-50"
                                    required
                                />
                            </div>
                            <div className="mb-6">
                                <label className="block text-sm font-medium text-gray-700 mb-1">
                                    Role
                                </label>
                                <select
                                    name="role"
                                    value={formData.role}
                                    onChange={handleInputChange}
                                    disabled={mode === 'view'}
                                    className="w-full px-3 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 disabled:bg-gray-50"
                                >
                                    <option value="user">User</option>
                                    <option value="admin">Admin</option>
                                    <option value="moderator">Moderator</option>
                                </select>
                            </div>
                        </>
                    ) : (
                        <div className="py-4 text-center">
                            <p className="text-gray-700 mb-2">Are you sure you want to delete this user?</p>
                            <p className="font-medium text-gray-900">{formData.name}</p>
                            <p className="text-sm text-gray-500">{formData.email}</p>
                        </div>
                    )}

                    <div className="flex justify-end gap-3">
                        <button
                            type="button"
                            onClick={onCancel}
                            className="px-4 py-2 text-sm font-medium text-gray-700 bg-white border border-gray-300 rounded-md hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-blue-500"
                        >
                            Cancel
                        </button>
                        {mode !== 'view' && (
                            <button
                                type="submit"
                                className={`px-4 py-2 text-sm font-medium text-white rounded-md focus:outline-none focus:ring-2 ${
                                    mode === 'delete'
                                        ? 'bg-red-600 hover:bg-red-700 focus:ring-red-500'
                                        : 'bg-blue-600 hover:bg-blue-700 focus:ring-blue-500'
                                }`}
                            >
                                {mode === 'edit' && 'Save Changes'}
                                {mode === 'create' && 'Create User'}
                                {mode === 'delete' && 'Delete User'}
                            </button>
                        )}
                    </div>
                </div>
            </form>
        </div>
    );
}
