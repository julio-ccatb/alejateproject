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
import { Chrome, Menu } from "lucide-react";

export default function NavbarDemo() {
  return (
    <header className="bg-background sticky top-0 z-40 w-full border-b">
      <div className="flex h-16 !w-full items-center justify-between px-4 md:px-6">
        <div className="flex items-center gap-2">
          <Link href="#" className="flex items-center gap-2" prefetch={false}>
            <Image src={"/logo.png"} alt="logo" height={60} width={60} />
          </Link>
        </div>
        <nav className="hidden items-center gap-6 md:flex">
          <NavigationMenu>
            <NavigationMenuList className="flex items-center gap-6">
              <NavigationMenuItem>
                <NavigationMenuLink
                  href="#"
                  className="bg-background hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground data-[active]:bg-accent/50 data-[state=open]:bg-accent/50 group inline-flex h-9 w-max items-center justify-center rounded-md px-4 py-2 text-sm font-medium transition-colors focus:outline-none disabled:pointer-events-none disabled:opacity-50"
                >
                  Inicio
                </NavigationMenuLink>
              </NavigationMenuItem>
              <NavigationMenuItem>
                <NavigationMenuLink
                  href="#"
                  className="bg-background hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground data-[active]:bg-accent/50 data-[state=open]:bg-accent/50 group inline-flex h-9 w-max items-center justify-center rounded-md px-4 py-2 text-sm font-medium transition-colors focus:outline-none disabled:pointer-events-none disabled:opacity-50"
                >
                  Nosotros
                </NavigationMenuLink>
              </NavigationMenuItem>
              <NavigationMenuItem>
                <NavigationMenuLink
                  href="#"
                  className="bg-background hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground data-[active]:bg-accent/50 data-[state=open]:bg-accent/50 group inline-flex h-9 w-max items-center justify-center rounded-md px-4 py-2 text-sm font-medium transition-colors focus:outline-none disabled:pointer-events-none disabled:opacity-50"
                >
                  Tours
                </NavigationMenuLink>
              </NavigationMenuItem>
              <NavigationMenuItem>
                <NavigationMenuLink
                  href="#"
                  className="bg-background hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground data-[active]:bg-accent/50 data-[state=open]:bg-accent/50 group inline-flex h-9 w-max items-center justify-center rounded-md px-4 py-2 text-sm font-medium transition-colors focus:outline-none disabled:pointer-events-none disabled:opacity-50"
                >
                  About
                </NavigationMenuLink>
              </NavigationMenuItem>
            </NavigationMenuList>
          </NavigationMenu>
        </nav>
        <Button
          variant="outline"
          className="hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground flex max-w-[700px] items-center gap-2 rounded-md bg-black px-4 py-2 text-sm font-medium text-white transition-colors focus:outline-none disabled:pointer-events-none disabled:opacity-50"
        >
          <Chrome className="h-5 w-5" />
          Continue with Google
        </Button>
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
                      Tienda
                    </NavigationMenuLink>
                  </NavigationMenuItem>
                </NavigationMenuList>
              </NavigationMenu>
              <Button
                variant="outline"
                className="hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground flex items-center gap-2 rounded-md bg-black px-4 py-2 text-sm font-medium text-white transition-colors focus:outline-none disabled:pointer-events-none disabled:opacity-50"
              >
                <Chrome className="h-5 w-5" />
                Continue with Google
              </Button>
            </div>
          </SheetContent>
        </Sheet>
      </div>
    </header>
  );
}
