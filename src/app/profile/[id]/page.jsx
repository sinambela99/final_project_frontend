"use client";

import { getUser } from "@/api/user";
import { useEffect, useState } from "react";
import { useParams, useRouter } from "next/navigation";

export default function ProfilePage() {
  const [data, setData] = useState([]);
  const { id } = useParams();
  const router = useRouter();

  useEffect(() => {
    getUser(id).then((res) => {
      if (!res) {
        router.push('/404')
      } else {
        setData(res);
      }
    });
  }, []);

  console.log(data);

  return (
    <div>
      <div className="bg-gray-100 p-40 md:px-6 h-full">
        <div className="py-12 my-4 max-w-screen-md border px-4 shadow-xl sm:mx-4 sm:rounded-xl sm:px-4 sm:py-16 lg:py-5 md:mx-auto">
          <div className="flex flex-col border-b py-4 sm:flex-row sm:items-start">
            <div className="shrink-0 mr-auto sm:py-3">
              <p className="font-medium">Account Details</p>
            </div>
            <button
              onClick={() => router.push(`/profile/delete/${id}`)}
              className="mr-4 hidden rounded-lg border-2 border-transparent bg-red-600 px-4 py-2 font-medium text-white sm:inline focus:outline-none focus:ring hover:bg-red-700"
            >
              Delete
            </button>
            <button
              onClick={() => router.push(`/profile/edit/${id}`)}
              className="hidden rounded-lg border-2 border-transparent bg-blue-600 px-4 py-2 font-medium text-white sm:inline focus:outline-none focus:ring hover:bg-blue-700"
            >
              Edit
            </button>
          </div>
          <div className="flex flex-col gap-4 border-b py-4 sm:flex-row">
            <p className="shrink-0 w-32 font-medium">Name</p>
            <p className="w-full rounded-md border bg-white px-2 py-2 outline-none ring-blue-600 focus:ring-1">
              {data.name}
            </p>
          </div>
          <div className="flex flex-col gap-4 border-b py-4 sm:flex-row">
            <p className="shrink-0 w-32 font-medium">Address</p>
            <p className="w-full rounded-md border bg-white px-2 py-2 outline-none ring-blue-600 focus:ring-1">
              {data.address}
            </p>
          </div>
          <div className="flex flex-col gap-4 border-b py-4 sm:flex-row">
            <p className="shrink-0 w-32 font-medium">Email</p>
            <p className="w-full rounded-md border bg-white px-2 py-2 outline-none ring-blue-600 focus:ring-1">
              {data.email}
            </p>
          </div>
          <div className="flex flex-col gap-4 border-b py-4 sm:flex-row">
            <p className="shrink-0 w-32 font-medium">Role</p>
            <p className="w-full rounded-md border bg-white px-2 py-2 outline-none ring-blue-600 focus:ring-1">
              {data.role}
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
