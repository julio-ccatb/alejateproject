/**
 * v0 by Vercel.
 * @see https://v0.dev/t/omGQmKHA2w5
 * Documentation: https://v0.dev/docs#integrating-generated-code-into-your-nextjs-app
 */
import {
  Sheet,
  SheetTrigger,
  SheetContent,
  SheetTitle,
} from "@/components/ui/sheet";
import { Button } from "@/components/ui/button";
import Link from "next/link";

import {
  NavigationMenu,
  NavigationMenuList,
  NavigationMenuItem,
  NavigationMenuLink,
} from "@/components/ui/navigation-menu";
import Image from "next/image";
import { Menu } from "lucide-react";
import { auth } from "@/server/auth";
import LogInWithSocials from "@/app/_components/auth/loginWithSocials";
import ThemeToggle from "@/components/mode-toggle";

export default async function NavbarDemo() {
  // const session = await auth();

  return (
    <header className="sticky top-0 z-40 w-full border-b bg-background">
      <div className="flex h-16 !w-full items-center justify-between px-4 md:px-6">
        <div className="flex items-center gap-2">
          <Link
            href="#"
            className="flex items-center gap-2 p-4 dark:hidden"
            prefetch={false}
          >
            <Image src={"/logo.png"} alt="logo" height={60} width={60} />
          </Link>
          <Link
            href="#"
            className="flex items-center gap-2 p-4"
            prefetch={false}
          >
            <Image src={"/logo-white.png"} alt="logo" height={60} width={60} />
          </Link>
        </div>
        <nav className="hidden items-center gap-6 dark:visible md:flex">
          <NavigationMenu>
            <NavigationMenuList className="flex items-center gap-6">
              <NavigationMenuItem>
                <NavigationMenuLink
                  href="#"
                  className="group inline-flex h-9 w-max items-center justify-center rounded-md bg-background px-4 py-2 text-sm font-medium transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground focus:outline-none disabled:pointer-events-none disabled:opacity-50 data-[active]:bg-accent/50 data-[state=open]:bg-accent/50"
                >
                  Inicio
                </NavigationMenuLink>
              </NavigationMenuItem>
              <NavigationMenuItem>
                <NavigationMenuLink
                  href="#"
                  className="group inline-flex h-9 w-max items-center justify-center rounded-md bg-background px-4 py-2 text-sm font-medium transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground focus:outline-none disabled:pointer-events-none disabled:opacity-50 data-[active]:bg-accent/50 data-[state=open]:bg-accent/50"
                >
                  Nosotros
                </NavigationMenuLink>
              </NavigationMenuItem>
              <NavigationMenuItem>
                <NavigationMenuLink
                  href="#"
                  className="group inline-flex h-9 w-max items-center justify-center rounded-md bg-background px-4 py-2 text-sm font-medium transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground focus:outline-none disabled:pointer-events-none disabled:opacity-50 data-[active]:bg-accent/50 data-[state=open]:bg-accent/50"
                >
                  Tours
                </NavigationMenuLink>
              </NavigationMenuItem>
              <NavigationMenuItem>
                <NavigationMenuLink
                  href="#"
                  className="group inline-flex h-9 w-max items-center justify-center rounded-md bg-background px-4 py-2 text-sm font-medium transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground focus:outline-none disabled:pointer-events-none disabled:opacity-50 data-[active]:bg-accent/50 data-[state=open]:bg-accent/50"
                >
                  Servicios
                </NavigationMenuLink>
              </NavigationMenuItem>
            </NavigationMenuList>
          </NavigationMenu>
        </nav>
        <div className="flex items-center gap-2">
          <LogInWithSocials />
          {/* {session && session.user ? (
            <>Hi {session.user.name}</>
          ) : (
            <LogInWithSocials />
          )} */}
          <ThemeToggle />
        </div>
        <Sheet>
          <SheetTrigger asChild>
            <Button variant="outline" size="icon" className="md:hidden">
              <Menu className="h-6 w-6" />
              <span className="sr-only">Toggle navigation menu</span>
            </Button>
          </SheetTrigger>
          <SheetContent side="left" className="md:hidden">
            <SheetTitle className="sr-only">Menu</SheetTitle>
            <div className="grid gap-4 p-4">
              <Link
                href="#"
                className="flex items-center gap-2 font-bold"
                prefetch={false}
              >
                {/* <MountainIcon className="h-6 w-6" /> */}
                <Image src={"/logo.png"} alt="logo" width={190} height={190} />
              </Link>
              <NavigationMenu>
                <NavigationMenuList className="grid gap-2">
                  <NavigationMenuItem>
                    <NavigationMenuLink
                      href="#"
                      className="flex items-center gap-2 py-2 text-lg font-semibold"
                    >
                      Inicio
                    </NavigationMenuLink>
                  </NavigationMenuItem>
                  <NavigationMenuItem>
                    <NavigationMenuLink
                      href="#"
                      className="flex items-center gap-2 py-2 text-lg font-semibold"
                    >
                      Nosotros
                    </NavigationMenuLink>
                  </NavigationMenuItem>
                  <NavigationMenuItem>
                    <NavigationMenuLink
                      href="#"
                      className="flex items-center gap-2 py-2 text-lg font-semibold"
                    >
                      Tours
                    </NavigationMenuLink>
                  </NavigationMenuItem>
                  <NavigationMenuItem>
                    <NavigationMenuLink
                      href="#"
                      className="flex items-center gap-2 py-2 text-lg font-semibold"
                    >
                      Servicios
                    </NavigationMenuLink>
                  </NavigationMenuItem>
                </NavigationMenuList>
              </NavigationMenu>
              {/* {session && session.user ? (
                <>Hi {session.user.name}</>
              ) : (
                <LogInWithSocials />
                )} */}
            </div>
            <LogInWithSocials />
          </SheetContent>
        </Sheet>
      </div>
    </header>
  );
}
