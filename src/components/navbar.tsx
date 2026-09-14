import Link from "next/link";
import { Store } from "lucide-react";
import { Button } from "@/components/ui/button";

export function Navbar() {
  return (
    <header className="sticky top-0 z-50 w-full border-b border-border/40 bg-[#17152B]/80 backdrop-blur-md">
      <div className="container mx-auto flex h-16 items-center justify-end px-4">
        {/* Navigation & Action (Right Aligned) */}
        <div className="flex items-center gap-3">
          <Link href="/dashboard">
            <Button
              variant="outline"
              className="border-[#6C4CF1]/40 hover:bg-[#6C4CF1]/10 text-foreground"
            >
              <Store className="mr-2 h-4 w-4 text-[#FF4FA3]" />
              Join as a Vendor
            </Button>
          </Link>
        </div>
      </div>
    </header>
  );
}