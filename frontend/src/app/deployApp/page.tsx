// import { StatusButton } from "@/components/StatusButton";

// const backend_link = process.env.NEXT_PUBLIC_DEPLOYAPP_BACKEND_API;

// export default function DeployAppPage() {
//   return (
//     <div className="flex flex-col items-center justify-center min-h-screen gap-6 bg-gray-50 p-8">
//       <StatusButton
//         label="GetBackendStatus"
//         endpoint={backend_link + "/health"}
//       />
//       <StatusButton
//         label="GetDbStatus"
//         endpoint={backend_link + "/db-status"}
//       />
//       {/* <StatusButton label="CustomerManagementSystem" endpoint={process.env.NEXT_DEPLOYAPP_BACKEND_API + "/customers"} /> */}
      
//     </div>
//   );
// }


"use client";
import { useRouter } from "next/navigation";
import { StatusButton } from "@/components/StatusButton";

export default function DeployAppPage() {
  const router = useRouter();
  const backend_link = process.env.NEXT_PUBLIC_DEPLOYAPP_BACKEND_API;
  return (
    <div className="flex flex-col items-center justify-center min-h-screen gap-6 bg-gray-50 p-8">
      <StatusButton label="GetBackendStatus" endpoint={backend_link + "/health"} />
      <StatusButton label="GetDbStatus" endpoint={backend_link + "/db-status"} />
      <button
        onClick={() => router.push("/deployApp/cms")}
        className="bg-red-600 text-white px-6 py-3 rounded hover:bg-red-700 transition"
      >
        CustomerManagementSystem
      </button>
    </div>
  );
}
