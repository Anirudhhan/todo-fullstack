import { Link } from "react-router-dom";

import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

const DashboardPage = () => {
  const role = localStorage.getItem("user_role");

  return (
    <div className="min-h-screen bg-muted p-6">
      <div className="max-w-7xl mx-auto">
        <div className="flex items-center justify-between mb-8">
          <div>
            <h1 className="text-4xl font-bold">Dashboard</h1>

            <p className="text-muted-foreground mt-2">
              Manage your todos and tasks
            </p>
          </div>

          <Button asChild>
            <Link to="/todos">Open Todos</Link>
          </Button>
        </div>

        <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-3">
          <Card>
            <CardHeader>
              <CardTitle>Todo Management</CardTitle>
            </CardHeader>

            <CardContent>
              <p className="text-sm text-muted-foreground mb-4">
                Create, update, complete, and manage your todos.
              </p>

              <Button asChild className="w-full">
                <Link to="/todos">View Todos</Link>
              </Button>
            </CardContent>
          </Card>

          {role === "admin" && (
            <>
              <Card>
                <CardHeader>
                  <CardTitle>User Management</CardTitle>
                </CardHeader>

                <CardContent>
                  <p className="text-sm text-muted-foreground mb-4">
                    View all users and manage suspension status.
                  </p>

                  <Button asChild className="w-full">
                    <Link to="/admin/users">Manage Users</Link>
                  </Button>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle>Admin Todos</CardTitle>
                </CardHeader>

                <CardContent>
                  <p className="text-sm text-muted-foreground mb-4">
                    View all todos across all users and assign tasks globally.
                  </p>

                  <Button asChild className="w-full">
                    <Link to="/admin/todos">Open Admin Todos</Link>
                  </Button>
                </CardContent>
              </Card>
            </>
          )}
        </div>
      </div>
    </div>
  );
};

export default DashboardPage;
