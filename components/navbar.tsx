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
import { ThemeSwitch } from '@/components/theme-switch';
import {
  TwitterIcon,
  GithubIcon,
  InstagramIcon,
  LinkedInIcon,
  WhatsappIcon,
} from '@/components/icons';

export const Navbar = () => {
  myAppHook();

  return (
    <HeroUINavbar maxWidth="xl" position="sticky">
      <NavbarContent className="basis-1/5 sm:basis-full" justify="start">
        <NavbarBrand className="gap-3 max-w-fit">
          <NextLink className="flex justify-start items-center gap-1" href="/">
            <p className="font-caveat text-4xl font-black">CL</p>
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
          <Link isExternal href={siteConfig.links.twitter}>
            <TwitterIcon className="text-default-500" />
          </Link>
          <Link isExternal href={siteConfig.links.github}>
            <GithubIcon className="text-default-500" />
          </Link>
          <ThemeSwitch />
        </NavbarItem>
      </NavbarContent>

      <NavbarContent className="sm:hidden basis-1 pl-4" justify="end">
        <Link isExternal href={siteConfig.links.github}>
          <GithubIcon className="text-default-500" />
        </Link>
        <ThemeSwitch />
        <NavbarMenuToggle />
      </NavbarContent>

      <NavbarMenu>
        <div className="mx-4 mt-2 flex flex-col gap-2">
          {siteConfig.navMenuItems.map((item, index) => (
            <NavbarMenuItem key={item.href}>
              <Link
                color={
                  index === 2
                    ? 'primary'
                    : index === siteConfig.navMenuItems.length - 1
                      ? 'danger'
                      : 'foreground'
                }
                href={item.href}
                size="lg"
              >
                {item.label}
              </Link>
            </NavbarMenuItem>
          ))}

          <div className="flex flex-col justify-center gap-4">
            <Link isExternal color="danger" href={siteConfig.links.whatsapp}>
              <WhatsappIcon className="mr-2" /> Whatsapp
            </Link>
            <Link isExternal color="danger" href={siteConfig.links.linkedin}>
              <LinkedInIcon className="mr-2" /> LinkedIn
            </Link>
            <Link isExternal color="danger" href={siteConfig.links.instagram}>
              <InstagramIcon className="mr-2" /> Instagram
            </Link>
            <Link isExternal color="danger" href={siteConfig.links.twitter}>
              <TwitterIcon className="mr-2" /> Twitter
            </Link>
            <Link isExternal color="danger" href={siteConfig.links.github}>
              <GithubIcon className="mr-2" /> GitHub
            </Link>
          </div>
        </div>
      </NavbarMenu>
    </HeroUINavbar>
  );
};
