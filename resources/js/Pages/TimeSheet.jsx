import { Head } from '@inertiajs/react';

export default function TimeSheet() {
    const tableData = [
        { id: 1, name: 'John Doe', email: 'john@example.com' },
        { id: 2, name: 'Jane Smith', email: 'jane@example.com' },
        { id: 3, name: 'Bob Johnson', email: 'bob@example.com' },
    ];
    return (
        <>
            <Head title="Time Sheet" />
            <div className="container mx-auto mt-8">
                <div className="bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4">
                    <h1 className="text-2xl mb-4">New Page Panel</h1>
                    <table className="table-auto w-full">
                        <thead>
                        <tr>
                            <th className="px-4 py-2">ID</th>
                            <th className="px-4 py-2">Name</th>
                            <th className="px-4 py-2">Email</th>
                        </tr>
                        </thead>
                        <tbody>
                        {tableData.map((row) => (
                            <tr key={row.id}>
                                <td className="border px-4 py-2">{row.id}</td>
                                <td className="border px-4 py-2">{row.name}</td>
                                <td className="border px-4 py-2">{row.email}</td>
                            </tr>
                        ))}
                        </tbody>
                    </table>
                </div>
            </div>
        </>

    );
}

