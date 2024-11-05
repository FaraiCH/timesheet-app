import AuthenticatedLayout from "@/Layouts/AuthenticatedLayout.jsx";
import {Head} from "@inertiajs/react";
import {Provider} from "react-redux";
import Store from "../../../../timesheet/resources/js/Store/Store.jsx";

export default function User()
{
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
                <div className="flex min-h-screen">
                    <div className="py-12 w-4/4">
                        <div className="mx-auto max-w-7xl sm:px-6 lg:px-8">
                            <div className="overflow-hidden bg-white shadow-sm sm:rounded-lg">
                                <div className="p-6 text-gray-900">
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </Provider>
        </AuthenticatedLayout>
    );
}
