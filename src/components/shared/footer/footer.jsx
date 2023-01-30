import clsx from 'clsx';
import React from 'react';
import slugify from 'slugify';

import MENUS from 'constants/menus';
import LinkedIn from 'icons/linkedin-logo.inline.svg';
import Logo from 'icons/logo.inline.svg';
import Slack from 'icons/slack-logo.inline.svg';
import Twitter from 'icons/twitter-logo.inline.svg';

import Button from '../button';
import Link from '../link';

const items = [
  { icon: Slack, iconClassName: 'w-[22px] h-[22px]', url: '/' },
  { icon: LinkedIn, iconClassName: 'w-4 h-4', url: '/' },
  { icon: Twitter, iconClassName: 'w-5 h-4', url: '/' },
];

const Footer = () => {
  const handleAnchorClick = (e) => {
    const getAnchor = (str) => slugify(str).toLocaleLowerCase();

    const id = getAnchor(e.target.firstChild.data);
    const element = document.getElementById(id);

    if (element) {
      const indent = 50;
      const elementTop = element.getBoundingClientRect().top;
      const elementOffset = window.pageYOffset + elementTop - indent;

      window.scrollTo({
        top: elementOffset,
        behavior: 'smooth',
      });
    }
  };
  return (
    <footer className="safe-paddings border-t border-t-gray-10 bg-white">
      <div className="container flex items-center justify-between pt-5 pb-5 sm:flex-col sm:justify-around">
        <Link className="ml-2" to="/">
          <Logo className="h-12 w-44" />
        </Link>

        <nav className="mt-4 flex">
          <ul className="grid min-w-fit grid-cols-2 grid-rows-2 gap-y-4 gap-x-3 xl:gap-x-1 lg:mr-6 lg:grid-cols-3 lg:gap-x-4 md:grid-cols-2 sm:mx-auto">
            {MENUS.footer.map(({ text, to, target }, index) => (
              <li className="w-fit max-w-min text-sm font-semibold text-primary-1" key={index}>
                <Button
                  className="flex sm:flex-wrap"
                  theme="link-primary"
                  to={to}
                  target={target}
                  onClick={handleAnchorClick}
                >
                  {text}
                </Button>
              </li>
            ))}
          </ul>
        </nav>
        <div className="mt-4">
          <Link className="font-semibold" theme="primary" to="mailto:hello@kcdzurich.ch">
            hello@kcdzurich.ch
          </Link>
          <ul className="mt-4 flex min-w-fit gap-x-2.5">
            {items.map(({ icon, iconClassName, url }, index) => {
              const Icon = icon;

              return (
                <li
                  className="h-9 w-9 rounded-full border border-gray-10 transition-colors duration-200 hover:border-primary-1 hover:border-opacity-40"
                  key={index}
                >
                  <Link className="flex h-full w-full items-center justify-center" to={url}>
                    <Icon className={clsx('', iconClassName)} />
                  </Link>
                </li>
              );
            })}
          </ul>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
