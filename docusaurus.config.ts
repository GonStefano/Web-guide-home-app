import {themes as prismThemes} from 'prism-react-renderer';
import type {Config} from '@docusaurus/types';
import type * as Preset from '@docusaurus/preset-classic';

// This runs in Node.js - Don't use client-side code here (browser APIs, JSX...)

const config: Config = {
  title: 'HomeApp',
  tagline: 'Guía de uso y documentación oficial.',
  favicon: 'img/Logo.png',

  // Future flags, see https://docusaurus.io/docs/api/docusaurus-config#future
  future: {
    v4: true, // Improve compatibility with the upcoming Docusaurus v4
  },

  // Set the production url of your site here
  url: 'https://home-app.me',
  // Con dominio personalizado el baseUrl es simplemente '/'
  baseUrl: '/',

  // GitHub pages deployment config.
  // If you aren't using GitHub pages, you don't need these.
  organizationName: 'GonStefano', // Usuario de GitHub
  projectName: 'Web-guide-home-app', // Nombre del repo

  trailingSlash: true,
  onBrokenLinks: 'throw',

  // Even if you don't use internationalization, you can use this field to set
  // useful metadata like html lang. For example, if your site is Chinese, you
  // may want to replace "en" with "zh-Hans".
  i18n: {
    defaultLocale: 'es',
    locales: ['es'],
  },

  presets: [
    [
      'classic',
      {
        docs: {
          sidebarPath: './sidebars.ts',
        },
        blog: false, // Desactivar blog por ahora
        theme: {
          customCss: './src/css/custom.css',
        },
      } satisfies Preset.Options,
    ],
  ],

  themeConfig: {
    // Replace with your project's social card
    image: 'img/Logo.png',
    colorMode: {
      respectPrefersColorScheme: true,
    },
    navbar: {
      title: 'HomeApp',
      logo: {
        alt: 'HomeApp Logo',
        src: 'img/logo.svg', // Recomendado crear un logo luego
      },
      items: [
        {
          to: '/docs/intro',
          position: 'left',
          label: 'Guía de Uso',
        },
        {
          to: '/docs/tareas',
          position: 'left',
          label: 'Tareas',
        },
        {
          to: '/docs/hogar',
          position: 'left',
          label: 'Energía & Clima',
        },
        {
          to: '/docs/faq',
          position: 'left',
          label: 'FAQ',
        },
        {
          href: 'https://github.com/stefano/homeapp',
          label: 'GitHub',
          position: 'right',
        },
      ],
    },
    footer: {
      style: 'dark',
      links: [
        {
          title: 'Documentación',
          items: [
            {
               label: 'Introducción',
               to: '/docs/intro',
            },
            {
               label: 'Gestión de Tareas',
               to: '/docs/tareas',
            },
          ],
        },
        {
          title: 'Legal',
          items: [
            {
               label: 'Privacidad',
               to: '/',
            },
          ],
        },
      ],
      copyright: `Copyright © ${new Date().getFullYear()} HomeApp. Construido con Docusaurus.`,
    },
    prism: {
      theme: prismThemes.github,
      darkTheme: prismThemes.dracula,
    },
  } satisfies Preset.ThemeConfig,
};

export default config;
