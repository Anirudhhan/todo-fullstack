import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";

import { useLogin } from "@/hooks/auth/useLogin";

import { Card, CardContent } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";

const LoginPage = () => {
  const navigate = useNavigate();

  const loginMutation = useLogin();

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleLogin = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    try {
      const response = await loginMutation.mutateAsync({
        email,
        password,
      });

      localStorage.setItem("access_token", response.token);

      localStorage.setItem("session_id", response.session_id);

      localStorage.setItem("user_role", response.role);

      navigate("/");
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-muted px-4">
      <Card className="w-full max-w-md">
        <CardContent className="pt-6">
          <div className="mb-6">
            <h1 className="text-3xl font-bold">Login</h1>

            <p className="text-sm text-muted-foreground mt-2">
              Login to continue
            </p>
          </div>

          <form onSubmit={handleLogin} className="space-y-4">
            <div className="space-y-2">
              <label className="text-sm font-medium">Email</label>

              <Input
                type="email"
                placeholder="Enter your email"
                value={email}
                onChange={(event) => setEmail(event.target.value)}
                required
              />
            </div>

            <div className="space-y-2">
              <label className="text-sm font-medium">Password</label>

              <Input
                type="password"
                placeholder="Enter your password"
                value={password}
                onChange={(event) => setPassword(event.target.value)}
                required
              />
            </div>

            <Button
              type="submit"
              className="w-full"
              disabled={loginMutation.isPending}
            >
              {loginMutation.isPending ? "Logging in..." : "Login"}
            </Button>
          </form>

          {loginMutation.isError && (
            <p className="text-sm text-red-500 mt-4">
              Invalid email or password
            </p>
          )}

          <p className="text-sm text-center mt-6 text-muted-foreground">
            Don&apos;t have an account?{" "}
            <Link to="/register" className="text-primary hover:underline">
              Register
            </Link>
          </p>
        </CardContent>
      </Card>
    </div>
  );
};

export default LoginPage;
