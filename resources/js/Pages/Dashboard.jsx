import AuthenticatedLayout from '@/Layouts/AuthenticatedLayout';
import { Head } from '@inertiajs/react';

import {
    Clock,
    Calendar,
    BarChart3,
    Users,
    Clock4,
    BriefcaseIcon,
    MenuIcon,
    BellIcon,
    UserCircle,
    ClockIcon,
} from 'lucide-react';

// Dummy data
const weeklyHours = [
    { day: 'Mon', hours: 8.5 },
    { day: 'Tue', hours: 7.5 },
    { day: 'Wed', hours: 8 },
    { day: 'Thu', hours: 9 },
    { day: 'Fri', hours: 6.5 },
];

const recentProjects = [
    { name: 'Website Redesign', hours: 12.5, status: 'In Progress' },
    { name: 'Mobile App Development', hours: 28, status: 'Completed' },
    { name: 'API Integration', hours: 15.5, status: 'In Progress' },
];

const upcomingTasks = [
    { name: 'Team Meeting', time: '2:00 PM', duration: '1h' },
    { name: 'Client Presentation', time: '4:30 PM', duration: '1.5h' },
    { name: 'Code Review', time: '10:00 AM', duration: '2h' },
];

export default function Dashboard() {
    return (
        <AuthenticatedLayout
            header={
                <h2 className="text-xl font-semibold leading-tight text-gray-800">
                    Dashboard
                </h2>
            }
        >
            <Head title="Dashboard" />

            <div className="py-12">
                <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
                    {/* Stats Overview */}
                    <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mb-8">
                        <div className="bg-white p-6 rounded-lg shadow-sm">
                            <div className="flex items-center">
                                <Clock className="h-8 w-8 text-blue-500" />
                                <div className="ml-4">
                                    <p className="text-sm text-gray-500">Hours Today</p>
                                    <p className="text-2xl font-semibold">6.5</p>
                                </div>
                            </div>
                        </div>
                        <div className="bg-white p-6 rounded-lg shadow-sm">
                            <div className="flex items-center">
                                <Calendar className="h-8 w-8 text-green-500" />
                                <div className="ml-4">
                                    <p className="text-sm text-gray-500">Weekly Total</p>
                                    <p className="text-2xl font-semibold">39.5</p>
                                </div>
                            </div>
                        </div>
                        <div className="bg-white p-6 rounded-lg shadow-sm">
                            <div className="flex items-center">
                                <BriefcaseIcon className="h-8 w-8 text-purple-500" />
                                <div className="ml-4">
                                    <p className="text-sm text-gray-500">Active Projects</p>
                                    <p className="text-2xl font-semibold">4</p>
                                </div>
                            </div>
                        </div>
                        <div className="bg-white p-6 rounded-lg shadow-sm">
                            <div className="flex items-center">
                                <Users className="h-8 w-8 text-orange-500" />
                                <div className="ml-4">
                                    <p className="text-sm text-gray-500">Team Members</p>
                                    <p className="text-2xl font-semibold">12</p>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
                        {/* Weekly Hours Chart */}
                        <div className="bg-white p-6 rounded-lg shadow-sm lg:col-span-2">
                            <h2 className="text-lg font-semibold mb-4">Weekly Hours</h2>
                            <div className="h-64 flex items-end justify-between">
                                {weeklyHours.map((day) => (
                                    <div key={day.day} className="flex flex-col items-center">
                                        <div
                                            className="w-16 bg-blue-500 rounded-t"
                                            style={{ height: `${day.hours * 20}px` }}
                                        ></div>
                                        <p className="mt-2 text-sm text-gray-600">{day.day}</p>
                                        <p className="text-xs text-gray-500">{day.hours}h</p>
                                    </div>
                                ))}
                            </div>
                        </div>

                        {/* Upcoming Tasks */}
                        <div className="bg-white p-6 rounded-lg shadow-sm">
                            <h2 className="text-lg font-semibold mb-4">Upcoming Tasks</h2>
                            <div className="space-y-4">
                                {upcomingTasks.map((task, index) => (
                                    <div key={index} className="flex items-center p-3 bg-gray-50 rounded">
                                        <Clock4 className="h-5 w-5 text-gray-400" />
                                        <div className="ml-3">
                                            <p className="text-sm font-medium">{task.name}</p>
                                            <p className="text-xs text-gray-500">{task.time} • {task.duration}</p>
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </div>
                    </div>

                    {/* Recent Projects */}
                    <div className="mt-8 bg-white p-6 rounded-lg shadow-sm">
                        <h2 className="text-lg font-semibold mb-4">Recent Projects</h2>
                        <div className="overflow-x-auto">
                            <table className="min-w-full">
                                <thead>
                                <tr className="border-b">
                                    <th className="text-left py-3 px-4">Project Name</th>
                                    <th className="text-left py-3 px-4">Hours Logged</th>
                                    <th className="text-left py-3 px-4">Status</th>
                                </tr>
                                </thead>
                                <tbody>
                                {recentProjects.map((project, index) => (
                                    <tr key={index} className="border-b">
                                        <td className="py-3 px-4">{project.name}</td>
                                        <td className="py-3 px-4">{project.hours}h</td>
                                        <td className="py-3 px-4">
                      <span className={`px-2 py-1 rounded-full text-xs ${
                          project.status === 'Completed'
                              ? 'bg-green-100 text-green-800'
                              : 'bg-blue-100 text-blue-800'
                      }`}>
                        {project.status}
                      </span>
                                        </td>
                                    </tr>
                                ))}
                                </tbody>
                            </table>
                        </div>
                    </div>
                </main>
            </div>
        </AuthenticatedLayout>
    );
}
