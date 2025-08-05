import { siteConfig } from "@/config/site"
import { button as buttonStyles } from '@heroui/theme';
import { Link } from "@heroui/link";
import { FileIcon, GithubIcon, WhatsappIcon } from "./icons";
import { FaLinkedin, FaPhoneAlt } from "react-icons/fa";

export default function WhatsappLink() {
    return (
        <Link
            isExternal
            className={`${buttonStyles({
                color: 'success',
                radius: 'full',
                variant: 'shadow',
            })} !text-white c`}
            href={siteConfig.links.whatsapp}
        >
            <WhatsappIcon /> Whatsapp
        </Link>
    )
}

export function GitHubLink() {
    return (
        <Link
            isExternal
            className={`${buttonStyles({ variant: 'shadow', radius: 'full' })}
                      href={siteConfig.links.github} bg-white text-lg text-black`}
        >
            <GithubIcon size={25} />
            GitHub
        </Link>
    )
}

export function DocsLink() {
    return (
        <Link
            isExternal
            className={`${buttonStyles({ color: 'primary', variant: 'shadow', radius: 'full' })} text-white text-center`}
            href="/auth/projects"
        >
            <FileIcon />
            Veja Meus Projetos
        </Link>
    )
}

export function DocsLink2() {
    return (
        <Link
            isExternal
            className={`${buttonStyles({ color: 'primary', variant: 'shadow', radius: 'full' })} text-lg p-6 text-white text-center`}
            href="/auth/projects"
        >   
            <FaLinkedin />
            Veja no LinkedIN
        </Link>
    )
}

export function LinkedinLink() {
    return (
        <Link
            isExternal
            className={`${buttonStyles({ color: 'primary', variant: 'shadow', radius: 'full' })} text-white text-center text-lg`}
            href={siteConfig.links.linkedin}
        >
            <FaLinkedin />
            LinkedIn
        </Link>
    )
}

export function InContact() {
    return (
        <Link
            isExternal
            className={`${buttonStyles({ color: 'warning', variant: 'shadow', radius: 'full' })} text-white text-center m-auto mt-6 text-lg p-6`}
            href={siteConfig.links.whatsapp}
        >
            <FaPhoneAlt />
            Entrar em Contato
        </Link>
    )
}

export function WorkIng() {
    return (
        <Link
            isExternal
            className={`${buttonStyles({ color: 'success', variant: 'shadow', radius: 'full' })} text-white text-center m-auto mt-6 text-lg p-6`}
            href={siteConfig.links.whatsapp}
        >
            Vamos Trabalhar!
        </Link>
    )
}