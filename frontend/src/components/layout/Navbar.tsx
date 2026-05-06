import { useNavigate } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { useLogout } from "@/hooks/auth/useLogout";

const Navbar = () => {
  const navigate = useNavigate();

  const logoutMutation = useLogout();

  const handleLogout = async () => {
    try {
      await logoutMutation.mutateAsync();

      localStorage.removeItem("access_token");
      localStorage.removeItem("session_id");
      localStorage.removeItem("user_role");

      navigate("/login");
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <header className="border-b bg-background">
      <div className="max-w-7xl mx-auto px-6 h-16 flex items-center justify-between">
        <h1 className="text-xl font-bold">Todo App</h1>

        <Button
          variant="destructive"
          onClick={handleLogout}
          disabled={logoutMutation.isPending}
        >
          {logoutMutation.isPending ? "Logging out..." : "Logout"}
        </Button>
      </div>
    </header>
  );
};

export default Navbar;
