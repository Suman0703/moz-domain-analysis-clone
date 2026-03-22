import React from 'react';
import DataCard from './DataCard';
import ChartCard from './ChartCard';
import CtaBanner from './CtaBanner';
import EmptyStateCard from './EmptyStateCard';
import BarChartCard from './BarChartCard';
import CompetitorCard from './CompetitorCard';

const Dashboard = () => {
  const topPagesData = [
    { name: 'support.mozilla.org/en-US/kb/enable-and-disable-co...', score: '90' },
    { name: 'www.mozilla.org/', score: '89' },
    { name: 'support.mozilla.org/es/kb/habilitar-y-deshabilitar-c...', score: '89' },
    { name: 'bugzilla.mozilla.org/', score: '88' },
    { name: 'support.mozilla.org/it/kb/Attivare%20e%20disattiv...', score: '87' },
    { name: 'wiki.mozilla.org/LDAP_C_SDK', score: '87' },
    { name: 'wiki.mozilla.org/Security/Server_Side_TLS', score: '87' },
  ];

  const topDomainsData = [
    { name: 'www.google.com', score: '100' },
    { name: 'youtube.com', score: '100' },
    { name: 'www.blogger.com', score: '100' },
    { name: 'linkedin.com', score: '99' },
    { name: 'wordpress.org', score: '99' },
    { name: 'whatsapp.com', score: '99' },
    { name: 'apple.com', score: '99' },
  ];

  const keywordsByClicksData = [
    { name: 'js', score: '42,357' },
    { name: '400', score: '22,682' },
    { name: 'br', score: '22,682' },
    { name: 'http error 500', score: '22,682' },
    { name: 'firefox extensions', score: '12,504' },
    { name: 'ublock origin firefox', score: '9,707' },
    { name: '403', score: '9,378' },
  ];

  const topRankingKeywordsData = [
    { name: 'js', score: '1' },
    { name: '400', score: '1' },
    { name: 'br', score: '1' },
    { name: 'http error 500', score: '1' },
    { name: 'what is a url', score: '1' },
    { name: 'ublock origin firefox', score: '1' },
    { name: 'mozilla', score: '1' },
  ];

  const brandedKeywordsData = [
    { name: 'mozilla', score: '20,900' },
    { name: 'mdn', score: '7,900' },
    { name: 'js map', score: '5,400' },
    { name: 'javascript array', score: '3,600' },
    { name: 'js array', score: '3,600' },
    { name: 'mozila', score: '2,300' },
  ];

  const competitorsData = [
    { domain: 'developer.mozilla.org', da: '97', visibility: '36.89' },
    { domain: 'addons.mozilla.org', da: '97', visibility: '4.75' },
    { domain: 'www.w3schools.com', da: '90', visibility: '4.67' },
    { domain: 'support.mozilla.org', da: '97', visibility: '4.42' },
    { domain: 'www.reddit.com', da: '92', visibility: '3.85' },
    { domain: 'stackoverflow.com', da: '92', visibility: '2.75' },
    { domain: 'en.wikipedia.org', da: '97', visibility: '2.35' },
  ];

  const topQuestionsData = [
    { name: 'Does a 500 error mean the site is down?', score: '20.52' },
    { name: 'Will error 500 fix itself?', score: '19.53' },
    { name: 'How do I find out my URL?', score: '19.46' },
    { name: 'What does it mean when it asks for a URL?', score: '19.46' },
    { name: 'Is a URL an email address?', score: '19.46' },
    { name: 'What is Mozilla used for?', score: '18.29' },
    { name: 'Can Mozilla be trusted?', score: '18.29' },
  ];

  return (
    <div className="bg-[#F4F7F9] px-4 md:px-6 lg:px-8 pb-12">
      <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8 mt-8">
        <DataCard title="Top Pages by Links" description="The most important pages on mozilla.org based on PA." col1Header="Page/URL" col2Header="PA" data={topPagesData} />
        <DataCard title="Top Linking Domains" description="The top linking domains to mozilla.org based on DA." col1Header="Domain" col2Header="DA" data={topDomainsData} />

        <ChartCard />
        <CtaBanner title="Want more link data?" subtitle="Get instant access to our index of 35 trillion links." buttonText="Try Moz Pro Free" />

        <DataCard title="Keywords by Estimated Clicks" description="Estimated clicks for top keywords." col1Header="Keyword" col2Header="Visibility" data={keywordsByClicksData} isLink={false} />
        <DataCard title="Top Ranking Keywords" description="Your top keywords for mozilla.org." col1Header="Keyword" col2Header="Rank" data={topRankingKeywordsData} isLink={false} />

        <EmptyStateCard title="Top Featured Snippets" description="Keywords that trigger a featured snippet." learnMoreLink="#" />
        <DataCard title="Branded Keywords" description="Highest-volume keywords for the brand." col1Header="Keyword" col2Header="Volume" data={brandedKeywordsData} isLink={false} />

        <BarChartCard />
        <CtaBanner title="Want more keyword data?" subtitle="Database of over 500 million keywords." buttonText="Try Moz Pro Free" />

        <CompetitorCard data={competitorsData} />

        <div className="md:col-span-2">
          <DataCard title="Top Questions" description="Top questions from People Also Ask boxes." col1Header="Question" col2Header="Relevance" data={topQuestionsData} isLink={false} />
        </div>

        <CtaBanner title="Ready to get started for free?" subtitle="Make data-driven decisions for your search strategy." buttonText="Check Domain Authority" />
      </div>
    </div>
  );
};

export default Dashboard;