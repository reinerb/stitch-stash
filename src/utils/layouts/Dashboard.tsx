import { faGithub, faThreads } from '@fortawesome/free-brands-svg-icons';
import {
  faCalculator,
  faTableCellsLarge,
} from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import Head from 'next/head';
import Link from 'next/link';
import { twMerge } from 'tailwind-merge';

type DashboardProps = {
  title: string;
  children?: React.ReactNode;
  className?: string;
};

export default function Dashboard({
  title,
  children,
  className,
}: DashboardProps) {
  return (
    <>
      <Head>
        <title>{title}</title>
      </Head>
      <div className="grid grid-rows-[1fr_auto] grid-cols-[auto_1fr] min-h-screen">
        <header className="flex flex-col p-4 bg-neutral-100">
          <nav className="w-full">
            <ul className="flex flex-col w-full gap-1">
              <li className="w-full">
                <Link
                  href="/fabric-size-calculator"
                  className="px-4 py-2 hover:bg-neutral-200 w-full block"
                >
                  <FontAwesomeIcon icon={faCalculator} /> Fabric Size Calculator
                </Link>
              </li>
              <li className="w-full">
                <Link
                  href="/floss-tracker"
                  className="px-4 py-2 hover:bg-neutral-200 block w-full"
                >
                  <FontAwesomeIcon icon={faThreads} /> Floss Tracker
                </Link>
              </li>
              <li className="w-full">
                <Link
                  href="/pattern-collection"
                  className="px-4 py-2 hover:bg-neutral-200 w-full block"
                >
                  <FontAwesomeIcon icon={faTableCellsLarge} /> Pattern
                  Collection
                </Link>
              </li>
            </ul>
          </nav>
        </header>
        <main className={twMerge('row-span-2 p-4', className)}>{children}</main>
        <footer className="flex justify-center p-2 bg-slate-100">
          <Link href="https://github.com/reinerb/stitch-stash">
            <FontAwesomeIcon icon={faGithub} />
          </Link>
        </footer>
      </div>
    </>
  );
}
