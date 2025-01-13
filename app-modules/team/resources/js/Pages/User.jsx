import AuthenticatedLayout from "@/Layouts/AuthenticatedLayout.jsx";
import {Head} from "@inertiajs/react";
import {Provider} from "react-redux";
import Store from "../../../../timesheet/resources/js/Store/Store.jsx";
import '../../.././../assets/css/bootstrap.min.css';
import '../../../../assets/js/bootstrap.bundle.min.js';
import React, { useState } from 'react';
import { UserTable } from '../components/UserTable';
import { UserForm } from '../components/UserForm';

const initialUsers = [
    {
        id: '1',
        name: 'John Doe',
        email: 'john@example.com',
        role: 'admin'
    },
    {
        id: '2',
        name: 'Jane Smith',
        email: 'jane@example.com',
        role: 'user'
    },
    {
        id: '3',
        name: 'Mike Johnson',
        email: 'mike@example.com',
        role: 'moderator'
    }
];

export default function User()
{

    const [users, setUsers] = useState(initialUsers);
    const [selectedUser, setSelectedUser] = useState(null);
    const [isFormOpen, setIsFormOpen] = useState(false);
    const [formMode, setFormMode] = useState('view');

    const handleEdit = (user) => {
        setSelectedUser(user);
        setFormMode('edit');
        setIsFormOpen(true);
    };

    const handleDelete = (user) => {
        setSelectedUser(user);
        setFormMode('delete');
        setIsFormOpen(true);
    };

    const handleSubmit = (updatedUser, mode) => {
        if (mode === 'delete') {
            setUsers(users.filter(u => u.id !== updatedUser.id));
        } else if (mode === 'edit') {
            setUsers(users.map(u => u.id === updatedUser.id ? updatedUser : u));
        }
        setIsFormOpen(false);
        setSelectedUser(null);
    };

    const handleCancel = () => {
        setIsFormOpen(false);
        setSelectedUser(null);
    };

    return (
        <AuthenticatedLayout
            header={
                <h2 className="text-xl font-semibold leading-tight text-gray-800">
                    Team Members
                </h2>
            }
        >
            <Head title="Team Members" />
            <Provider store={Store}>
                <div className="py-12">
                    <div className="mx-auto max-w-7xl sm:px-6 lg:px-8">
                        <div className="overflow-hidden bg-white shadow-sm sm:rounded-lg">
                            <UserTable
                                users={users}
                                onEdit={handleEdit}
                                onDelete={handleDelete}
                            />
                        </div>

                        {isFormOpen && selectedUser && (
                            <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center p-4">
                                <div className="bg-white rounded-lg shadow-xl max-w-md w-full">
                                    <UserForm
                                        user={selectedUser}
                                        initialMode={formMode}
                                        onSubmit={handleSubmit}
                                        onCancel={handleCancel}
                                    />
                                </div>
                            </div>
                        )}
                    </div>
                </div>
            </Provider>
        </AuthenticatedLayout>
    );
}
