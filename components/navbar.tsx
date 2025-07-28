'use client';
import {
  Navbar as HeroUINavbar,
  NavbarContent,
  NavbarMenu,
  NavbarMenuToggle,
  NavbarBrand,
  NavbarItem,
  NavbarMenuItem,
} from '@heroui/navbar';
import { Link } from '@heroui/link';
import { link as linkStyles } from '@heroui/theme';
import NextLink from 'next/link';
import clsx from 'clsx';

import { siteConfig } from '@/config/site';
import { myAppHook } from '@/lib/context/AppUtils';
import {
  GithubIcon,
  InstagramIcon,
  LinkedInIcon,
  WhatsappIcon,
} from '@/components/icons';
import Image from 'next/image';

export const Navbar = () => {
  myAppHook();

  return (
    <HeroUINavbar maxWidth="xl" position="sticky">
      <NavbarContent className="basis-1/5 sm:basis-full" justify="start">
        <NavbarBrand className="gap-3 max-w-fit">
          <NextLink className="flex justify-start items-center gap-1" href="/">
            <Image src={'/favicon.png'} alt={'icone de logo do site'} width={150} height={150} className="max-w-12" />
          </NextLink>
        </NavbarBrand>
        <div className="hidden lg:flex gap-4 justify-start ml-2">
          {siteConfig.navItems.map((item) => (
            <NavbarItem key={item.href}>
              <NextLink
                className={clsx(
                  linkStyles({ color: 'foreground' }),
                  'data-[active=true]:text-primary data-[active=true]:font-medium'
                )}
                href={item.href}
              >
                {item.label}
              </NextLink>
            </NavbarItem>
          ))}
        </div>
      </NavbarContent>

      <NavbarContent className="hidden sm:flex basis-1/5 sm:basis-full" justify="end">
        <NavbarItem className="hidden sm:flex gap-2">
          <Link isExternal href={siteConfig.links.whatsapp}>
            <WhatsappIcon className="text-default-500" />
          </Link>
          <Link isExternal href={siteConfig.links.linkedin}>
            <LinkedInIcon className="text-default-500" />
          </Link>
          <Link isExternal href={siteConfig.links.instagram}>
            <InstagramIcon className="text-default-500" />
          </Link>
          <Link isExternal href={siteConfig.links.github}>
            <GithubIcon className="text-default-500" />
          </Link>
        </NavbarItem>
      </NavbarContent>

      <NavbarContent className="sm:hidden basis-1 pl-4" justify="end">
        <Link isExternal href={siteConfig.links.github}>
          <GithubIcon className="text-default-500" />
        </Link>
        <NavbarMenuToggle />
      </NavbarContent>

      <NavbarMenu>
        <div className="mx-4 mt-2 flex flex-col gap-2">
          {siteConfig.navMenuItems.map((item) => {
            const Icon = item.icon;

            return (
              <NavbarMenuItem key={item.href}>
                <Link className="text-gray-600 dark:text-white font-bold flex items-center gap-2" href={item.href}>
                  {Icon && <Icon className="w-4 h-4" />}
                  {item.label}
                </Link>
              </NavbarMenuItem>
            );
          })}

          <div className="flex flex-col justify-center gap-4 font-bold">
            <Link isExternal className="text-green-500" href={siteConfig.links.whatsapp}>
              <WhatsappIcon className="mr-2" /> Whatsapp
            </Link>
            <Link isExternal className="text-blue-500" href={siteConfig.links.linkedin}>
              <LinkedInIcon className="mr-2" /> LinkedIn
            </Link>
            <Link isExternal className="text-pink-500" href={siteConfig.links.instagram}>
              <InstagramIcon className="mr-2" /> Instagram
            </Link>
            <Link isExternal className="dark:text-neutral-200 text-gray-600" href={siteConfig.links.github}>
              <GithubIcon className="mr-2" /> GitHub
            </Link>
          </div>
        </div>
      </NavbarMenu>
    </HeroUINavbar>
  );
};
