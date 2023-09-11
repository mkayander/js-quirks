import { TopicSection } from "@/components/organisms/TopicSection";
import { NextPage } from "next";
import Link from "next/link";
import React from "react";

type NavLinkProps = {
  href: string;
  title: string;
};

const NavLink: React.FC<NavLinkProps> = ({ href, title }) => {
  return (
    <Link
      href={href}
      className="rounded border border-indigo-50 border-opacity-0 bg-indigo-200 bg-opacity-0 bg-gradient-to-r from-indigo-300/0 px-4 py-2 transition hover:border-opacity-20 hover:bg-opacity-10 hover:from-indigo-400/10 hover:to-green-300/5"
    >
      {title}
    </Link>
  );
};

type TopicLayoutProps = {
  children: React.ReactNode;
};

const TopicLayout: NextPage<TopicLayoutProps> = ({ children }) => {
  return (
    <div className="flex grow flex-col">
      <header className="mb-6 flex flex-col items-center py-4">
        <nav className="container">
          <ul>
            <li>
              <NavLink href="/" title="Home" />
            </li>
          </ul>
        </nav>
      </header>
      <section className="flex grow flex-col">
        <TopicSection>{children}</TopicSection>
      </section>
    </div>
  );
};

export default TopicLayout;
