import { Outlet } from "react-router-dom";

const MainLayout = () => {
  return (
    <div className="min-h-screen flex flex-col">

      {/* HEADER */}
      <header className="p-4 border-b">
        <h1 className="text-xl font-bold">My Website</h1>
      </header>

      {/* PAGE CONTENT */}
      <main className="flex-1 p-4">
        <Outlet />
      </main>

      {/* FOOTER */}
      <footer className="p-4 border-t text-sm text-gray-500">
        © 2026 My Website
      </footer>

    </div>
  );
};

export default MainLayout;