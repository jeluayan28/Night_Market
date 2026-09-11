import Link from "next/link";
import { Store, Utensils, Shield, Search } from "lucide-react";
import { Button } from "@/components/ui/button";

export function Navbar() {
  return (
    <header className="sticky top-0 z-50 w-full border-b border-border/40 bg-[#17152B]/80 backdrop-blur-md">
      <div className="container mx-auto flex h-16 items-center justify-between px-4">
        {/* Brand Logo */}
        <Link href="/" className="flex items-center gap-2 font-bold text-xl text-foreground">
          <div className="rounded-lg bg-[#6C4CF1] p-2 text-white shadow-lg shadow-[#6C4CF1]/30">
            <Utensils className="h-5 w-5" />
          </div>
          <span className="tracking-wide">
            NIGHT<span className="text-[#FF8A3D]">MARKET</span>
          </span>
        </Link>

        {/* Navigation & Action */}
        <div className="flex items-center gap-3">
          <Link href="/dashboard">
            <Button variant="outline" className="border-[#6C4CF1]/40 hover:bg-[#6C4CF1]/10 text-foreground">
              <Store className="mr-2 h-4 w-4 text-[#FF4FA3]" />
              Vendor Dashboard
            </Button>
          </Link>
        </div>
      </div>
    </header>
  );
}