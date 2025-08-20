"use client";
import { useState } from "react";

interface StatusButtonProps {
  label: string;
  endpoint: string;
}

export function StatusButton({ label, endpoint }: StatusButtonProps) {
  const [status, setStatus] = useState("");

  const checkStatus = async () => {
    try {
      const res = await fetch(endpoint);
      setStatus(res.ok ? "✅ Active" : "⚠️ Unreachable");
    } catch {
      setStatus("❌ Down");
    }
    setTimeout(() => setStatus(""), 2000);
  };

  return (
    <div className="flex flex-col items-center">
      <button
        onClick={checkStatus}
        className="bg-blue-600 text-white px-6 py-3 rounded hover:bg-blue-700 transition"
      >
        {label}
      </button>
      {status && (
        <span className="mt-2 text-sm font-medium text-gray-800 bg-white border border-gray-300 rounded px-4 py-1 shadow">
          {status}
        </span>
      )}
    </div>
  );
}
