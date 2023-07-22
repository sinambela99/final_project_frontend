"use client";

import { deleteUser } from "@/api/user";
import { useParams, useRouter } from "next/navigation";

export default function UserEdit() {
  const { id } = useParams();
  const router = useRouter();

  const handleSubmit = async () => {
    try {
      await deleteUser(id);
      router.push(`/`);
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div>
      <div className="fixed inset-0 bg-black bg-opacity-50 backdrop-blur-sm flex justify-center items-center">
        <div className="w-[600px] flex flex-col">
          <div className="bg-white p-8 rounded-lg shadow relative dark:bg-gray-700">
            <div className="mt-3 text-center sm:ml-4 sm:mt-0 sm:text-left">
              <h3 className="text-base font-semibold leading-6 text-gray-900">
                Delete account
              </h3>
              <div className="mt-2">
                <p className="text-sm text-gray-500">
                  Are you sure you want to deactivate your account? All of your
                  data will be permanently removed. This action cannot be
                  undone.
                </p>
              </div>
            </div>
            <div className="mt-6 flex flex-row space-x-2 space-x justify-end">
              <button
                className="hidden rounded-lg border-2 border-transparent bg-gray-400 px-4 py-2 font-medium text-white sm:inline focus:outline-none focus:ring hover:bg-gray-500"
                onClick={() => router.push(`/profile/${id}`)}
              >
                Cancel
              </button>
              <button
                className="hidden rounded-lg border-2 border-transparent bg-red-600 px-4 py-2 font-medium text-white sm:inline focus:outline-none focus:ring hover:bg-red-700"
                onClick={handleSubmit}
              >
                Delete
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
