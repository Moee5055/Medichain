import { Button } from "@/components/ui/button";
import { Card, CardContent, CardFooter } from "@/components/ui/card";
import { Checkbox } from "@/components/ui/checkbox";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { useNavigate } from "react-router";

export default function LoginComponent() {
  const router = useNavigate();
  const handleLogin = () => {
    console.log("hello");
    router("/");
  };

  return (
    <Card className="flex justify-center">
      <form action={handleLogin}>
        <CardContent>
          <div className="flex flex-col gap-6">
            <div className="grid gap-2">
              <Label htmlFor="email" className="mb-1">
                Medical Id
              </Label>
              <Input id="mid" type="text" placeholder="" required />
            </div>
            <div className="grid gap-2">
              <div className="flex items-center">
                <Label htmlFor="password">Password</Label>
              </div>
              <Input id="password" type="password" required />
              <div className="w-full flex justify-between items-center mt-2">
                <div className="flex items-center gap-2">
                  <Checkbox />
                  <span className="text-sm">Remember me</span>
                </div>
                <a
                  href="#"
                  className="ml-auto inline-block text-sm underline-offset-4 hover:underline"
                >
                  Forgot your password?
                </a>
              </div>
            </div>
          </div>
          <p className="mt-5 text-sm mb-3">
            By Signing in you are aggreeing our
            <span className="text-blue-500"> Term and privacy policy.</span>
          </p>
        </CardContent>
        <CardFooter className="flex-col gap-2">
          <Button
            type="submit"
            className="w-full bg-blue-500 hover:bg-blue-700 cursor-pointer"
          >
            Login
          </Button>
        </CardFooter>
      </form>
    </Card>
  );
}
