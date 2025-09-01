import {
  X,
  Home,
  BookOpen,
  Clipboard,
  User,
  Settings,
  LogOut,
  ChartBar,
} from "lucide-react";
import { Link, useLocation } from "react-router-dom";

const DashboardSidebar = ({ isOpen, onClose }) => {
  const location = useLocation();

  const navigation = [
    { name: "Dashboard", href: "/dashboard", icon: Home },
    { name: "Courses", href: "/dashboard/courses", icon: BookOpen },
    { name: "Assignments", href: "/dashboard/assignments", icon: Clipboard },
    { name: "Progress", href: "/dashboard/progress", icon: ChartBar },
    { name: "Profile", href: "/dashboard/profile", icon: User },
    { name: "Settings", href: "/dashboard/settings", icon: Settings },
  ];

  const isActive = (path) => location.pathname === path;

  return (
    <>
      {/* Mobile overlay */}
      {isOpen && (
        <div
          className="fixed inset-0 bg-gray-600 bg-opacity-50 z-20 md:hidden"
          onClick={onClose}
        />
      )}

      {/* Sidebar */}
      <div
        className={`
        fixed inset-y-0 left-0 z-30 w-64 bg-white shadow-lg transform transition duration-300 ease-in-out
        ${isOpen ? "translate-x-0" : "-translate-x-full"} 
        md:translate-x-0 md:static md:inset-0
      `}
      >
        <div className="flex items-center justify-between h-16 px-4 border-b border-gray-200">
          <div className="flex items-center">
            <div className="h-8 w-8 bg-indigo-600 rounded-full flex items-center justify-center">
              <BookOpen className="h-5 w-5 text-white" />
            </div>
            <span className="ml-2 text-xl font-semibold text-gray-900">
              Pathfinder
            </span>
          </div>
          <button
            onClick={onClose}
            className="md:hidden p-2 rounded-md text-gray-500 hover:text-gray-600 hover:bg-gray-100"
          >
            <X className="h-6 w-6" />
          </button>
        </div>

        {/* Navigation */}
        <nav className="mt-8 px-4">
          <div className="space-y-1">
            {navigation.map((item) => {
              const Icon = item.icon;
              return (
                <Link
                  key={item.name}
                  to={item.href}
                  className={`
                    group flex items-center px-4 py-3 text-sm font-medium rounded-lg transition-colors
                    ${
                      isActive(item.href)
                        ? "bg-indigo-100 text-indigo-700"
                        : "text-gray-600 hover:bg-gray-50 hover:text-gray-900"
                    }
                  `}
                  onClick={onClose}
                >
                  <Icon
                    className={`
                    mr-3 h-5 w-5 transition-colors
                    ${
                      isActive(item.href)
                        ? "text-indigo-500"
                        : "text-gray-400 group-hover:text-gray-500"
                    }
                  `}
                  />
                  {item.name}
                </Link>
              );
            })}
          </div>
        </nav>

        {/* Bottom section */}
        <div className="absolute bottom-0 w-full border-t border-gray-200 p-4">
          <button className="flex items-center w-full px-4 py-3 text-sm font-medium text-gray-600 hover:bg-gray-50 hover:text-gray-900 rounded-lg transition-colors">
            <LogOut className="mr-3 h-5 w-5 text-gray-400" />
            Sign out
          </button>
        </div>
      </div>
    </>
  );
};

export default DashboardSidebar;
