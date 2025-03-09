
import { useLocation, Link } from "react-router-dom";
import { useEffect } from "react";
import { ArrowLeft } from "lucide-react";

const NotFound = () => {
  const location = useLocation();

  useEffect(() => {
    console.error(
      "404 Error: User attempted to access non-existent route:",
      location.pathname
    );
  }, [location.pathname]);

  return (
    <div className="flex min-h-screen flex-col items-center justify-center bg-gradient-to-br from-white to-secondary/30 p-6 text-center">
      <div className="max-w-md animate-fade-in">
        <h1 className="mb-6 text-6xl font-bold tracking-tight">404</h1>
        <p className="mb-8 text-xl text-muted-foreground">
          Oops! The page you're looking for can't be found.
        </p>
        <Link
          to="/"
          className="inline-flex items-center gap-2 rounded-xl bg-primary px-6 py-3 font-medium text-primary-foreground transition-all hover:opacity-90"
        >
          <ArrowLeft className="h-5 w-5" />
          <span>Return to Home</span>
        </Link>
      </div>
    </div>
  );
};

export default NotFound;
