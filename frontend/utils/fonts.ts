import { Bebas_Neue, Roboto, Roboto_Condensed } from 'next/font/google';

export const font_bebas_neue = Bebas_Neue({
  weight: ['400'],
  style: ['normal'],
  subsets: ['latin'],
  variable: '--font-bebas-neue',
});

export const font_roboto_cond = Roboto_Condensed({
  weight: ['400', '700'],
  style: 'normal',
  subsets: ['latin'],
  variable: '--font-roboto-cond',
});
