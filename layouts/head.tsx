import React from 'react';
import NextHead from 'next/head';

import { siteConfig } from '@/config/site';

export const Head = () => {
  return (
    <NextHead>
      <title>{siteConfig.name}</title>
      <meta key="title" content={siteConfig.name} property="og:title" />
      <meta content={siteConfig.description} property="og:description" />
      <meta content={siteConfig.description} name="description" />
      <meta name="keywords" content="Calebe Liasse, SEO, Website, Calebe desenvolvedor, LinkedIn Calebe, Redes sociais, otimização de sites, Webservices, WebApp, Criar landing page, otimização de Website, site institucional, " />
      <meta
        key="viewport"
        content="viewport-fit=cover, width=device-width, initial-scale=1.0, maximum-scale=1.0, user-scalable=0"
        name="viewport"
      />
      <link href="/favicon.ico" rel="icon" />
    </NextHead>
  );
};
