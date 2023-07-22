"use client";

import { useEffect, useState } from "react";
import { getUser, updateUser } from "@/api/user";
import { useParams, useRouter } from "next/navigation";

export default function UserEdit() {
  const [data, setData] = useState([]);
  const [name, setName] = useState(data.name);
  const [address, setAddress] = useState(data.address);
  const [email, setEmail] = useState(data.email);
  const { id } = useParams();
  const router = useRouter();

  useEffect(() => {
    getUser(id).then((res) => setData(res));
  }, []);

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      await updateUser(id, name, address, email);
      router.push(`/profile/${id}`);
    } catch (error) {
      console.log(error);
    }
  };

  if (!data) return <h1>Loading...</h1>;

  return (
    <div>
      <div className="fixed inset-0 bg-black bg-opacity-50 backdrop-blur-sm flex justify-center items-center">
        <div className="w-[600px] flex flex-col">
          <form
            onSubmit={handleSubmit}
            className="bg-white p-8 rounded-lg shadow relative dark:bg-gray-700"
          >
            <div className="shrink-0 mr-auto sm:py-3">
              <p className="font-medium">Edit your account details</p>
            </div>
            <div className="flex flex-col gap-4 border-b py-4 sm:flex-row">
              <p className="shrink-0 w-32 font-medium">Name</p>
              <input
                type="text"
                onChange={(e) => setName(e.target.value)}
                defaultValue={data.name}
                className="w-full rounded-md border border-gray-500 bg-white px-2 py-2 outline-none ring-blue-600 focus:ring-1"
                required
              />
            </div>
            <div className="flex flex-col gap-4 border-b py-4 sm:flex-row">
              <p className="shrink-0 w-32 font-medium">Address</p>
              <input
                type="text"
                onChange={(e) => setAddress(e.target.value)}
                defaultValue={data.address}
                className="w-full rounded-md border bg-white px-2 py-2 outline-none ring-blue-600 focus:ring-1"
                required
              />
            </div>
            <div className="flex flex-col gap-4 border-b py-4 sm:flex-row">
              <p className="shrink-0 w-32 font-medium">Email</p>
              <input
                type="text"
                onChange={(e) => setEmail(e.target.value)}
                defaultValue={data.email}
                className="w-full rounded-md border bg-white px-2 py-2 outline-none ring-blue-600 focus:ring-1"
                required
              />
            </div>
            <div className="mt-4 flex flex-row space-x-2 space-x justify-end">
              <button
                onClick={() => router.push(`/profile/${id}`)}
                className="hidden rounded-lg border-2 border-transparent bg-gray-400 px-4 py-2 font-medium text-white sm:inline focus:outline-none focus:ring hover:bg-gray-500"
              >
                Cancel
              </button>
              <button className="hidden rounded-lg border-2 border-transparent bg-blue-600 px-4 py-2 font-medium text-white sm:inline focus:outline-none focus:ring hover:bg-blue-700">
                Confirm
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}
