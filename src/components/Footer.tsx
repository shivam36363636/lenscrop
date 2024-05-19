import Link from "next/link";
import WidthWrapper from "./WidthWrapper";
import Image from "next/image";
import { ReactNode } from "react";
import {
  DiscordIcon,
  FacebookIcon,
  InstagramIcon,
  LinkedInIcon,
  TwitterIcon,
} from "@/icons/Icons";

const footerLinks: FooterLinksProps[] = [
  {
    heading: "SITEMAP",
    links: [
      {
        label: "MakeMyWeb",
        href: "https://makemyweb.ai",
      },
      {
        label: "Services",
        href: "/services",
      },
      {
        label: "Products",
        href: "/products",
      },
      {
        label: "Blogs",
        href: "/blogs",
      },
      {
        label: "Life at LENS",
        href: "/life-at-lens",
      },
    ],
  },
  {
    heading: "CONNECT",
    links: [
      {
        label: "+1-517-9300-792",
        href: "tel:+1-517-9300-792",
      },
      {
        label: "+91-9990-736-796",
        href: "tel:+91-9990-736-796",
      },
      {
        label: "solutions@lenscorp.ai",
        href: "mailto:solutions@lenscorp.ai",
      },
    ],
  },
];

const socialLinks: { icon: ReactNode; href: string }[] = [
  {
    icon: <FacebookIcon />,
    href: "#",
  },
  {
    icon: <InstagramIcon />,
    href: "#",
  },
  {
    icon: <LinkedInIcon />,
    href: "#",
  },
  {
    icon: <DiscordIcon />,
    href: "#",
  },
  {
    icon: <TwitterIcon />,
    href: "#",
  },
];

export default function Footer() {
  return (
    <div className="mt-10">
      <WidthWrapper>
        <div className="flex items-start justify-between pt-12 flex-wrap gap-10">
          <div className="flex flex-col gap-3">
            <Link href={"/"}>
              <Image
                src={"/assets/nav_logo.webp"}
                alt="company logo"
                width={80}
                height={70}
              />
            </Link>
            <p>Tomorrow&apos;s Vision, Today!</p>
            <div className="flex items-center gap-2 mt-5">
              {socialLinks?.map((link, index) => (
                <Link key={index} href={link.href}>
                  {link.icon}
                </Link>
              ))}
            </div>
          </div>
          {footerLinks.map((footerLink, index) => (
            <FooterLinks
              heading={footerLink.heading}
              links={footerLink.links}
              key={index}
            />
          ))}
        </div>
      </WidthWrapper>
      <div className="bg-[#272e5c] py-10 mt-16">
        <WidthWrapper>
          <div className="flex items-center justify-between text-white max-sm:flex-col gap-2">
            <p>{new Date().getFullYear()} LENS, Inc. All rights reserved.</p>
            <div className="flex items-center gap-5 font-semibold">
              <Link href={"/"}>Code of conduct</Link>
              <Link href={"/"}>Sustainability Goals</Link>
            </div>
          </div>
        </WidthWrapper>
      </div>
    </div>
  );
}

type FooterLinksProps = {
  heading: string;
  links: {
    label: string;
    href: string;
  }[];
};
function FooterLinks({ heading, links }: FooterLinksProps) {
  return (
    <div className="flex flex-col gap-5 px-5">
      <h3 className="text-xl">{heading}</h3>
      <div className="flex flex-col gap-2">
        {links.map((link, index) => (
          <Link key={index} className="hover:text-black/50" href={link.href}>
            {link.label}
          </Link>
        ))}
      </div>
    </div>
  );
}
