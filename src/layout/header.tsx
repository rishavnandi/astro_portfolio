import { useRouter } from "next/router";
import Image from "next/image";
import { headerLinks } from "@/data/headerLinks";
import { socialsLinks } from "@/data/socials";
import ChangeTheme from "@/components/changeTheme";
import CustomContainer from "@/ui/container";
import { CustomLink, ExternalLink } from "@/ui/link";

const Header = () => {
  const router = useRouter();
  const isActivePath = (path: string) => router.pathname === path;

  return (
    <header className="sticky top-0 z-40 w-full py-3 md:py-7 bg-light dark:bg-midnight">
      <CustomContainer>
        <nav className="flex flex-col items-center justify-between w-full md:flex-row">
          <CustomLink href="/" className="mb-4 md:mb-0">
            <Image
              width={128}
              height={128}
              src="/images/pic.jpg"
              alt="Rishav Nandi"
              className="rounded-full transition-transform hover:-translate-y-0.5"
              priority
            />
          </CustomLink>

          <div className="flex flex-col items-center md:flex-row md:space-x-7">
            <div className="flex space-x-7">
              {headerLinks.map(({ title, url }) => (
                <CustomLink
                  key={url}
                  href={url}
                  className={`transition-colors duration-150 ${isActivePath(url)
                      ? "text-gray-900 dark:text-gray-100"
                      : "text-gray-600 dark:text-gray-400 hover:text-gray-900 dark:hover:text-gray-100"
                    }`}
                >
                  {title}
                </CustomLink>
              ))}
            </div>

            <div className="flex items-center mt-5 md:mt-0 md:pl-6 md:border-l border-neutral-700 space-x-5">
              {socialsLinks.map(({ url, icon, label }) => (
                <ExternalLink
                  key={url}
                  href={url}
                  className="text-gray-600 dark:text-gray-400 hover:text-gray-900 dark:hover:text-gray-100"
                  aria-label={label}
                >
                  {icon}
                </ExternalLink>
              ))}
              <ChangeTheme />
            </div>
          </div>
        </nav>
      </CustomContainer>
    </header>
  );
};

export default Header;
