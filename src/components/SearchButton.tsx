
import { Search } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useState } from "react";
import { Input } from "@/components/ui/input";
import { useNavigate } from "react-router-dom";

export function SearchButton() {
  const [isSearchOpen, setIsSearchOpen] = useState(false);
  const [searchTerm, setSearchTerm] = useState("");
  const navigate = useNavigate();

  const handleSearch = (e: React.FormEvent) => {
    e.preventDefault();
    if (!searchTerm.trim()) return;
    
    // Simple navigation to sections based on search term
    const term = searchTerm.toLowerCase();
    
    if (term.includes("project") || term.includes("work")) {
      navigate("/#projects");
    } else if (term.includes("experience") || term.includes("job")) {
      navigate("/#experience");
    } else if (term.includes("skill") || term.includes("tech")) {
      navigate("/#skills");
    } else if (term.includes("organization") || term.includes("activity")) {
      navigate("/#organizations");
    } else if (term.includes("contact")) {
      navigate("/#contact");
    } else if (term.includes("music") || term.includes("studio")) {
      navigate("/music");
    }
    
    setIsSearchOpen(false);
    setSearchTerm("");
  };

  return (
    <div className="relative">
      {isSearchOpen ? (
        <form onSubmit={handleSearch} className="flex items-center">
          <Input
            type="text"
            placeholder="Search..."
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            className="w-36 md:w-48 h-8 mr-2 bg-background"
            autoFocus
          />
          <Button 
            type="button" 
            variant="ghost" 
            size="icon" 
            className="h-8 w-8 rounded-full"
            onClick={() => setIsSearchOpen(false)}
          >
            <span className="sr-only">Close search</span>
            <Search className="h-4 w-4" />
          </Button>
        </form>
      ) : (
        <Button
          variant="ghost"
          size="icon"
          onClick={() => setIsSearchOpen(true)}
          className="rounded-full w-8 h-8"
          aria-label="Search"
        >
          <Search className="h-4 w-4" />
        </Button>
      )}
    </div>
  );
}
