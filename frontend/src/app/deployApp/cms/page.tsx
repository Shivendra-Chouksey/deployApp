"use client";
import { useRouter } from "next/navigation";
import { useEffect, useState } from "react";

interface Customer {
  id: number;
  name: string;
  mobileNumber: string;
}

export default function CMSPage() {
  const [customers, setCustomers] = useState<Customer[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchCustomers = async () => {
      try {
        const res = await fetch(`${process.env.NEXT_PUBLIC_DEPLOYAPP_BACKEND_API}/customers`);
        if (!res.ok) throw new Error("Failed to fetch");
        const data = await res.json();
        setCustomers(data);
      } catch (err) {
        console.error("Error fetching customers:", err);
      } finally {
        setLoading(false);
      }
    };

    fetchCustomers();
  }, []);
  const router = useRouter();
  return (
    
    <div className="flex min-h-screen bg-yellow-50 p-8">
      {/* Left side (optional header or nav) */}
      <div className="w-1/3 pr-8">
        <h1 className="text-2xl font-bold mb-4 text-gray-900">CMS Dashboard</h1>
        <p className="text-gray-600">Manage your customers here.</p>
        <button
            onClick={() => router.push("/deployApp")}
            className="bg-indigo-600 text-white px-4 py-2 rounded hover:bg-indigo-700 transition"
            >
            ← Home Page
        </button>
      </div>

      {/* Right side container for customer data */}
      <div className="w-2/3 bg-white rounded shadow p-6 overflow-auto">
        <h2 className="text-xl font-semibold mb-4 text-gray-900">Customer List</h2>
        {loading ? (
          <p>Loading...</p>
        ) : customers.length === 0 ? (
          <p>No customers found.</p>
        ) : (
          <ul className="space-y-4">
            {customers.map((customer) => (
              <li key={customer.id} className="border-b pb-2">
                <p className="font-medium text-gray-900">{customer.name}</p>
                <p className="text-sm text-gray-500">Mobile: {customer.mobileNumber}</p>
              </li>
            ))}
          </ul>
        )}
      </div>
    </div>
  );
}
