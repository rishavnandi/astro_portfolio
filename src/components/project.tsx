import { ProjectProps } from '@/types';
import { ExternalLink } from "@/ui/link";
import Tag from "@/ui/tag";
import { BsGithub } from "react-icons/bs";
import { NPM, Puzzle } from "@react-symbols/icons";
import { FiArrowUpRight } from "react-icons/fi";

const Project = ({ title, url, gh, description, type, tags }: ProjectProps) => {
  return (
    <div className="flex flex-col p-4 border rounded-md dark:border-neutral-800">
      <div className="flex items-center justify-between mb-2">
        {url ? (
          <ExternalLink href={url}>
            <div className="flex items-center space-x-2">
              <h3 className="text-xl font-medium hover:text-gray-600 dark:hover:text-gray-300">
                {title}
              </h3>
              <FiArrowUpRight size={13} />
            </div>
          </ExternalLink>
        ) : (
          <h3 className="text-xl font-medium">{title}</h3>
        )}

        {gh && (
          <ExternalLink href={gh}>
            <BsGithub
              size={20}
              className="text-gray-400 transition-colors duration-150 hover:text-gray-900 dark:hover:text-gray-100"
              aria-label="View on Github"
            />
          </ExternalLink>
        )}
      </div>

      {description && <p className="dark:text-gray-300">{description}</p>}

      <div className="flex items-center mt-3 space-x-2">
        <div className="hidden md:block">
          {type === "Library" ? (
            <NPM width={20} aria-label="Library" />
          ) : (
            <Puzzle width={20} aria-label="App" />
          )}
        </div>
        {tags?.map((tag) => (
          <Tag key={tag} className="text-xs">
            {tag}
          </Tag>
        ))}
      </div>
    </div>
  );
};

export default Project;
