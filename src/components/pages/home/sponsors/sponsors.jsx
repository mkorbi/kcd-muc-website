import clsx from 'clsx';
import React from 'react';

import Link from 'components/shared/link';
import LINKS from 'constants/links';
import Acend from 'icons/acend-logo.svg';

import Adfinis from './images/adfinis.svg';
import BGNova from './images/bg-nova.svg';
import Camptocamp from './images/camptocamp.svg';
import Dynatrace from './images/dynatrace.svg';
import Google from './images/google.svg';
import Innoq from './images/innoq.svg';
import Isovalent from './images/isovalent.svg';
import Postfinance from './images/postfinance.svg';
import Puzzle from './images/puzzle.svg';
import Swisscom from './images/swisscom.svg';
import Vmware from './images/vmware.svg';

const TITLE = 'Sponsors';

const ITEMS = [
  {
    title: 'Gold',
    logos: [
      { icon: Google, url: 'https://www.google.com/' },
      { icon: Isovalent, url: 'https://isovalent.com/' },
    ],
    cardClassname: 'min-w-[488px] min-h-[152px] sm:min-w-[350px] sm:min-h-[130px]',
  },
  {
    title: 'Silver',
    logos: [
      { icon: Swisscom, url: 'https://www.swisscom.ch/' },
      { icon: Vmware, url: 'https://www.vmware.com/' },
      { icon: Dynatrace, url: 'https://www.dynatrace.com/' },
    ],
    cardClassname: 'min-w-[384px] min-h-[122px] sm:min-w-[320px] sm:min-h-[115px]',
  },
  {
    title: 'Bronze',
    logos: [
      { icon: Innoq, url: 'https://www.innoq.com/' },
      { icon: Adfinis, url: 'https://adfinis.com/' },
    ],
    cardClassname: 'min-w-[280px] min-h-[104px] sm:min-w-[250px] sm:min-h-[94px]',
  },
  {
    title: 'Special Sponsors',
    logos: [
      { icon: Postfinance, url: 'https://www.postfinance.ch/' },
      { icon: Puzzle, url: 'https://www.puzzle.ch/' },
      { icon: Camptocamp, url: 'https://www.camptocamp.com/' },
      { icon: BGNova, url: 'https://b-nova.com/' },
      { icon: Acend, url: 'https://acend.ch/' },
    ],
    cardClassname: 'min-w-[280px] min-h-[104px] sm:min-w-[250px] sm:min-h-[94px]',
  },
];

const Sponsors = () => (
  <section className="safe-paddings relative bg-white sm:pb-16">
    <div className="container text-center">
      <h2 className="text-6xl font-bold leading-denser text-primary-1" id={LINKS.sponsors.id}>
        {TITLE}
      </h2>
      <p className="mx-auto mt-5 max-w-[800px] text-lg leading-normal text-primary-1">
        We would like to extend a special thank you to our sponsors for their support and commitment
        to the community. We couldn't do it without them! If you’re interested in becoming a
        sponsor, please contact{' '}
        <Link className="font-semibold" theme="blue-underlined" to="mailto:hello@kcdzurich.ch">
          hello@kcdzurich.ch
        </Link>
      </p>

      <ul className="mt-16 flex flex-col">
        {ITEMS.map(({ title, logos, cardClassname }, index) => (
          <li className="" key={index}>
            <p className="text-center text-2xl font-bold uppercase leading-normal text-primary-1">
              {title}
            </p>

            <ul className="mt-10 mb-[70px] flex flex-wrap justify-center gap-x-8 xl:gap-y-6">
              {logos.map(({ icon, url }, index) => (
                <li className={clsx('flex items-center justify-center', cardClassname)} key={index}>
                  <Link
                    className="flex h-full w-fit items-center justify-center"
                    to={url}
                    target="_blank"
                  >
                    <img
                      className="h-auto w-auto max-w-[250px] sm:max-w-[210px]"
                      src={icon}
                      width="auto"
                      height="auto"
                      loading="lazy"
                      alt="sponsor-logo"
                    />
                  </Link>
                </li>
              ))}
            </ul>
          </li>
        ))}
      </ul>
    </div>
  </section>
);

export default Sponsors;
