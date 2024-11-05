import { allDocContents, DocContent } from "contentlayer/generated";
import CustomContainer from "@/ui/container";
import { compareDesc } from "date-fns";

import type { iData } from "@/data/dataInterface";
import { projects } from "@/data/projects";
import { technologiesData } from "@/data/technologies";

import Project from "@/components/project";
import Section from "@/components/section";
import PostCard from "@/components/postCard";
import Technology from "@/components/technology";

export default function Home({ posts }: { posts: DocContent[] }) {
  return (
    <>
      <div className="flex flex-col items-center justify-center px-4 py-5 md:py-14 md:px-0">
        <div className="flex items-center justify-between w-full max-w-6xl">
          <div>
            <h1 className="mb-4 text-3xl font-bold md:text-5xl">
              Hi, I&apos;m Rishav Nandi 👋
            </h1>
            <p className="text-xl dark:text-gray-300">
              I&apos;m a DevOps and Data Science enthusiast from India.
            </p>
          </div>
        </div>
      </div>
      <CustomContainer>
        <Section title="Featured Projects">
          <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
            {projects.map((data: iData) => (
              <Project key={data.title} {...data} />
            ))}
          </div>
        </Section>
        <Section title="Latest Posts">
          {posts.map((post) => (
            <PostCard key={post.url} {...post} />
          ))}
        </Section>
        <Section title="Technologies">
          <div className="grid grid-cols-2 gap-4 md:grid-cols-6">
            {technologiesData.map((tech) => (
              <Technology key={tech.name} {...tech} />
            ))}
          </div>
        </Section>
      </CustomContainer>
    </>
  );
}

export async function getStaticProps() {
  const posts: DocContent[] = allDocContents.sort((a, b) => {
    return compareDesc(new Date(a.date), new Date(b.date));
  });
  return { props: { posts } };
}

export const runtime = "edge";
