import LogInWithSocials from "@/app/_components/auth/loginWithSocials";
import ThemeToggle from "@/components/mode-toggle";
import { Button } from "@/components/ui/button";
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
} from "@/components/ui/navigation-menu";
import { Menu, MoveRight } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { Sheet, SheetContent, SheetHeader, SheetTrigger } from "../sheet";
import { auth } from "@/server/auth";
import { Badge } from "../badge";

export const Navbar = async () => {
  const session = await auth();

  const navigationItems = [
    {
      title: "Inicio",
      href: "/",
      description:
        "Explora nuestra página principal y descubre lo que ofrecemos.",
    },
    {
      title: "Nosotros",
      description: "Conoce más sobre quiénes somos y cómo trabajamos.",
      callToAction: () => <Button>Conocenos</Button>,
      items: [
        {
          title: "Sobre Alejate Con Ale",
          href: "/nosotros/alejate-con-ale",
        },
        {
          title: "El Equipo",
          href: "/nosotros/equipo",
        },
        {
          title: "Contacto",
          href: "/nosotros/contacto",
        },
      ],
    },
    {
      title: "Tours",
      description:
        "Explora nuestras increíbles opciones de tours y experiencias.",
      callToAction: () => <Button>Ver los Tours</Button>,
      items: [
        {
          title: "Top 5 Tours",
          href: "/tours/excursiones/top-5",
        },
        {
          title: "Excursiones",
          href: "/tours/excursiones",
        },
        {
          title: "Rallys",
          href: "/tours/rallys",
        },
        {
          title: "Cotizaciones",
          href: "/tours/cotizaciones",
        },
      ],
    },
  ];

  if (session?.user)
    navigationItems.push({
      title: "Mi cuenta",
      description:
        "Explora nuestras increíbles opciones de tours y experiencias.",
      callToAction: () => (
        <Link href="/api/auth/signout">
          <Button variant={"destructive"}>Cerrar Session</Button>
        </Link>
      ),
      items: [
        {
          title: "Panel",
          href: "/panel",
        },
        {
          title: "Mis Viajes",
          href: "/tours/excursiones/top-5",
        },
        {
          title: "Reservas",
          href: "/tours/excursiones",
        },
        {
          title: "Cuenta",
          href: "/tours/rallys",
        },
        {
          title: "Ajustes",
          href: "/tours/cotizaciones",
        },
      ],
    });

  return (
    <header className="fixed left-0 top-0 z-40 flex w-screen items-center justify-center bg-background">
      <div className="container flex min-h-20 flex-row items-center gap-4 px-4 lg:grid lg:grid-cols-3">
        <div className="hidden flex-row items-center justify-start gap-4 lg:flex">
          <NavigationMenu className="flex items-start justify-start">
            <NavigationMenuList className="flex flex-row justify-start gap-4">
              {navigationItems.map((item) => (
                <NavigationMenuItem key={item.title}>
                  {item.href ? (
                    <>
                      <NavigationMenuLink>
                        <Button variant="ghost">{item.title}</Button>
                      </NavigationMenuLink>
                    </>
                  ) : (
                    <>
                      <NavigationMenuTrigger className="text-sm font-medium">
                        {item.title}
                      </NavigationMenuTrigger>
                      <NavigationMenuContent className="!w-[450px] p-4">
                        <div className="flex grid-cols-2 flex-col gap-4 lg:grid">
                          <div className="flex h-full flex-col justify-between">
                            <div className="flex flex-col">
                              <p className="text-base">{item.title}</p>
                              <p className="text-sm text-muted-foreground">
                                {item.description}
                              </p>
                            </div>
                            {item.callToAction ? item.callToAction() : <></>}
                          </div>
                          <div className="flex h-full flex-col justify-end text-sm">
                            {item.items?.map((subItem) => (
                              <NavigationMenuLink
                                href={subItem.href}
                                key={subItem.title}
                                className="flex flex-row items-center justify-between rounded px-4 py-2 hover:bg-muted"
                              >
                                <span>{subItem.title}</span>
                                <MoveRight className="h-4 w-4 text-muted-foreground" />
                              </NavigationMenuLink>
                            ))}
                          </div>
                        </div>
                      </NavigationMenuContent>
                    </>
                  )}
                </NavigationMenuItem>
              ))}
            </NavigationMenuList>
          </NavigationMenu>
        </div>
        <div className="flex lg:justify-center">
          <Link href={"/"}>
            <Image src={"/logo.png"} height={80} width={80} alt="logo" />
          </Link>
        </div>
        <div className="flex w-full justify-end gap-4">
          <Button variant="ghost" className="hidden md:inline">
            Book a demo
          </Button>
          <div className="hidden border-r md:inline"></div>
          {session?.user ? (
            <Badge>{session.user.name?.substring(0, 24)}...</Badge>
          ) : (
            <LogInWithSocials />
          )}
          <ThemeToggle />
        </div>
        <div className="flex w-12 shrink items-end justify-end lg:hidden">
          <Sheet>
            <SheetTrigger>
              <Button variant={"ghost"}>
                <Menu className="h-5 w-5" />
              </Button>
            </SheetTrigger>

            <SheetContent side={"left"}>
              <SheetHeader>
                <Link href={"/"}>
                  <Image src={"/logo.png"} height={50} width={50} alt="logo" />
                </Link>
              </SheetHeader>
              <div className="container absolute right-0 top-20 flex w-full flex-col gap-8 border-t bg-background p-4 shadow-lg">
                {navigationItems.map((item) => (
                  <div key={item.title}>
                    <div className="flex flex-col gap-2">
                      {item.href ? (
                        <Link
                          href={item.href}
                          className="flex items-center justify-between"
                        >
                          <span className="text-lg">{item.title}</span>
                          <MoveRight className="h-4 w-4 stroke-1 text-muted-foreground" />
                        </Link>
                      ) : (
                        <p className="text-lg">{item.title}</p>
                      )}
                      {item.items?.map((subItem) => (
                        <Link
                          key={subItem.title}
                          href={subItem.href}
                          className="flex items-center justify-between"
                        >
                          <span className="text-muted-foreground">
                            {subItem.title}
                          </span>
                          <MoveRight className="h-4 w-4 stroke-1" />
                        </Link>
                      ))}
                    </div>
                  </div>
                ))}
              </div>
            </SheetContent>
          </Sheet>
        </div>
      </div>
    </header>
  );
};
