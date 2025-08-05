import { Link } from '@heroui/link';
import Image from 'next/image';
import { button as buttonStyles } from '@heroui/theme';

import DefaultLayout from '@/layouts/default';
import { InstagramIcon, LinkedInIcon, WhatsappIcon } from '@/components/icons';
import { siteConfig } from '@/config/site';

export default function ContactPage() {
  return (
    <DefaultLayout>
      <section className="flex flex-col items-center justify-center gap-4">
        <div
          className="
  bg-white dark:bg-gray-900/15 backdrop-blur-[3px] p-4 rounded-xl mt-10 
    w-72 sm:w-80
    shadow-md md:shadow-lg lg:shadow-xl 
    transition-all duration-300 
    mx-auto
    flex flex-col
    "
        >
          <Image
            alt={'Foto da minha pessoa(dono do portifólio)'}
            className="rounded-full border-white border-medium self-center mb-4 shadow-md"
            height={150}
            src={'/Calebe.webp'}
            width={150}
          />
          <p className=" text-gray-700 dark:text-gray-100 text-center">
            Calebe Liasse - Dev Web & Mobile
          </p>
          <br />
          <p className=" text-gray-700 dark:text-gray-100 text-center">Converse comigo👇</p>
          <section className="m-auto p-3 flex flex-col gap-4">
            <Link
              isExternal
              className={`${buttonStyles({
                color: 'success',
                radius: 'full',
                variant: 'shadow',
              })} !text-white`}
              href={siteConfig.links.whatsapp}
            >
              <WhatsappIcon /> Whatsapp
            </Link>
            <Link
              isExternal
              className={`${buttonStyles({
                color: 'danger',
                radius: 'full',
                variant: 'shadow',
              })} !text-white`}
              href={siteConfig.links.instagram}
            >
              <InstagramIcon /> Instagram
            </Link>
            <Link
              isExternal
              className={`${buttonStyles({
                color: 'primary',
                radius: 'full',
                variant: 'shadow',
              })} !text-white`}
              href={siteConfig.links.linkedin}
            >
              <LinkedInIcon /> LinkedIn
            </Link>
          </section>
        </div>
      </section>
    </DefaultLayout>
  );
}
