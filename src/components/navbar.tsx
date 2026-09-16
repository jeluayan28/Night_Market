"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import { Store, Mail, Lock, User, MapPin, ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";

export function Navbar() {
  const [isLogin, setIsLogin] = useState(false);
  const [open, setOpen] = useState(false);
  const router = useRouter();

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setOpen(false);
    router.push("/dashboard");
  };

  return (
    <header className="sticky top-0 z-50 w-full border-b border-border/40 bg-[#17152B]/80 backdrop-blur-md">
      <div className="container mx-auto flex h-16 items-center justify-end px-4">
        <Dialog open={open} onOpenChange={setOpen}>
          <DialogTrigger asChild>
            <Button
              variant="outline"
              className="border-[#6C4CF1]/40 hover:bg-[#6C4CF1]/10 text-foreground"
            >
              <Store className="mr-2 h-4 w-4 text-[#FF4FA3]" />
              Join as a Vendor
            </Button>
          </DialogTrigger>

          <DialogContent className="sm:max-w-md bg-[#17152B] border-border text-foreground shadow-2xl">
            <DialogHeader>
              <DialogTitle className="text-2xl font-bold text-center">
                {isLogin ? (
                  <span>
                    Vendor <span className="text-[#FF8A3D]">Login</span>
                  </span>
                ) : (
                  <span>
                    Become a <span className="text-[#FF4FA3]">Vendor</span>
                  </span>
                )}
              </DialogTitle>
              <DialogDescription className="text-center text-muted-foreground">
                {isLogin
                  ? "Access your dashboard to manage your stall status and menu."
                  : "Register your night market stall and start listing your products."}
              </DialogDescription>
            </DialogHeader>

            <form onSubmit={handleSubmit} className="space-y-4 py-2">
              {!isLogin && (
                <div className="space-y-1">
                  <label className="text-xs font-semibold text-gray-300">
                    Full Name
                  </label>
                  <div className="relative">
                    <User className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-muted-foreground" />
                    <Input
                      required
                      placeholder="Juan Dela Cruz"
                      className="pl-10 bg-[#17152B] border-border focus-visible:ring-[#6C4CF1]"
                    />
                  </div>
                </div>
              )}

              {!isLogin && (
                <div className="space-y-1">
                  <label className="text-xs font-semibold text-gray-300">
                    Stall / Business Name
                  </label>
                  <div className="relative">
                    <Store className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-muted-foreground" />
                    <Input
                      required
                      placeholder="Sizzling BBQ House"
                      className="pl-10 bg-[#17152B] border-border focus-visible:ring-[#6C4CF1]"
                    />
                  </div>
                </div>
              )}

              {!isLogin && (
                <div className="space-y-1">
                  <label className="text-xs font-semibold text-gray-300">
                    Stall Location
                  </label>
                  <div className="relative">
                    <MapPin className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-muted-foreground" />
                    <Input
                      required
                      placeholder="Lane A - Stall 05"
                      className="pl-10 bg-[#17152B] border-border focus-visible:ring-[#6C4CF1]"
                    />
                  </div>
                </div>
              )}

              <div className="space-y-1">
                <label className="text-xs font-semibold text-gray-300">
                  Email Address
                </label>
                <div className="relative">
                  <Mail className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-muted-foreground" />
                  <Input
                    required
                    type="email"
                    placeholder="vendor@nightmarket.com"
                    className="pl-10 bg-[#17152B] border-border focus-visible:ring-[#6C4CF1]"
                  />
                </div>
              </div>

              <div className="space-y-1">
                <label className="text-xs font-semibold text-gray-300">
                  Password
                </label>
                <div className="relative">
                  <Lock className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-muted-foreground" />
                  <Input
                    required
                    type="password"
                    placeholder="••••••••"
                    className="pl-10 bg-[#17152B] border-border focus-visible:ring-[#6C4CF1]"
                  />
                </div>
              </div>

              <Button
                type="submit"
                className="w-full bg-[#6C4CF1] hover:bg-[#6C4CF1]/90 text-white font-semibold mt-4"
              >
                {isLogin ? "Sign In to Dashboard" : "Register Stall"}
                <ArrowRight className="ml-2 h-4 w-4" />
              </Button>
            </form>

            <div className="text-center pt-2 border-t border-border/50 text-sm">
              {isLogin ? (
                <p className="text-muted-foreground">
                  Don't have a vendor account yet?{" "}
                  <button
                    type="button"
                    onClick={() => setIsLogin(false)}
                    className="text-[#FF4FA3] hover:underline font-semibold"
                  >
                    Sign Up
                  </button>
                </p>
              ) : (
                <p className="text-muted-foreground">
                  Already have a vendor account?{" "}
                  <button
                    type="button"
                    onClick={() => setIsLogin(true)}
                    className="text-[#FF8A3D] hover:underline font-semibold"
                  >
                    Log In
                  </button>
                </p>
              )}
            </div>
          </DialogContent>
        </Dialog>
      </div>
    </header>
  );
}
