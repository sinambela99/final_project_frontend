export default function Navbar() {
  return (
    <header class="bg-white shadow">
      <nav class="flex justify-between items-center w-[92%] mx-auto">
        <div class="text-xl font-semibold text-gray-700">
          <a
            href="#"
            class="text-gray-800 text-xl font-bold hover:text-gray-700 md:text-2xl"
          >
            HuruHara
          </a>
        </div>
        <div class="">
          <ul class="flex items-center gap-[4vw]">
            <li>
              <a
                href="#"
                class="text-gray-800 text-xl font-bold hover:text-gray-700 md:text-2xl"
              >
                Product
              </a>
            </li>
            <li>
              <a
                href="#"
                class="text-gray-800 text-xl font-bold hover:text-gray-700 md:text-2xl"
              >
                Cart
              </a>
            </li>
            <li>
              <a
                href="#"
                class="text-gray-800 text-xl font-bold hover:text-gray-700 md:text-2xl"
              >
                Profile
              </a>
            </li>
          </ul>
        </div>
        <div>
          <button class="bg-[#a6c1ee] test-white px-5 py-2 rounded-full hover:bg-[#87acec]">
            Sign Up
          </button>
        </div>
      </nav>
    </header>
  );
}
