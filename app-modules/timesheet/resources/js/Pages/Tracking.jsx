import AuthenticatedLayout from '@/Layouts/AuthenticatedLayout';
import { Head } from '@inertiajs/react';
import Table from "../components/timesheet/Table.jsx";
import '../../.././../assets/css/bootstrap.min.css';
import '../../../../assets/js/bootstrap.bundle.min.js';
import '../../../../../public/ej/ej2-base/styles/bootstrap.css';
import '../../../../../public/ej/ej2-buttons/styles/bootstrap.css';
import '../../../../../public/ej/ej2-calendars/styles/bootstrap.css';
import SideMenu from "../components/timesheet/SideMenu.jsx";
import Store from "../Store/Store.jsx";
import {Provider} from "react-redux";

export default function Tracking() {
    return (
        <AuthenticatedLayout
            header={
                <h2 className="text-xl font-semibold leading-tight text-gray-800">
                    Timesheet
                </h2>
            }
        >
            <Head title="Timesheet Tracking" />
            <Provider store={Store}>
                <div className="flex min-h-screen">
                    <div className="w-1/4 bg-white p-6">
                        <h2 className="text-xl font-semibold mb-4">Setup Timesheet</h2>
                        <SideMenu />
                    </div>

                    <div className="py-12 w-3/4">
                        <div className="mx-auto max-w-7xl sm:px-6 lg:px-8">
                            <div className="overflow-hidden bg-white shadow-sm sm:rounded-lg">
                                <div className="p-6 text-gray-900">
                                    <Table/>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </Provider>


        </AuthenticatedLayout>
    );
}
