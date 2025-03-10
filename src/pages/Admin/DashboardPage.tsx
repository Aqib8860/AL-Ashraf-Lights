import { AppSidebar } from "@/components/admin/AppSidebar";
import OrderStatsCard from "@/components/order/OrderStatsCard";

const DashboardPage = () => {
    return (
        <div className="flex">
            <AppSidebar />
            
            <div className="mt-16 flex flex-col flex-wrap-col md:flex-row md:flex-wrap md:gap-x-8 px-12 justify-center mx-auto">
                <OrderStatsCard title="Total Orders" color="bg-amber-300" />
                <OrderStatsCard title="Completed" color="bg-green-300" />
                <OrderStatsCard title="Pending" color="bg-red-300" />
                </div>
        </div>
    );
}

export default DashboardPage;
