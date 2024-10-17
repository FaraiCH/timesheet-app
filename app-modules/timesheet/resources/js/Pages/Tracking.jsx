import AuthenticatedLayout from '@/Layouts/AuthenticatedLayout';
import { Head } from '@inertiajs/react';
import Table from "../components/timesheet/Table.jsx";
export default function Tracking() {
    return (
        <AuthenticatedLayout
            header={
                <h2 className="text-xl font-semibold leading-tight text-gray-800">
                    Timesheet
                </h2>
            }
        >
            <Head title="Timesheet" />

            <div className="py-12">
                <div className="mx-auto max-w-7xl sm:px-6 lg:px-8">
                    <div className="overflow-hidden bg-white shadow-sm sm:rounded-lg">
                        <div className="p-6 text-gray-900">
                           <Table />
                        </div>
                    </div>
                </div>
            </div>
        </AuthenticatedLayout>
    );
}
