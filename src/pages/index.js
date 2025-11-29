import React from 'react';
import Layout from '@theme/Layout';
import Link from '@docusaurus/Link';

export default function Home() {
  return (
    <Layout
      title="Jas's Docusaurus Microsite"
      description="A microsite built for TWR2019 Assignment 3"
    >
      <main style={{ padding: '2rem 1rem', maxWidth: '800px', margin: '0 auto' }}>
        <h1>Welcome to My Microsite</h1>
        <p>
          This site is created for <strong>Assignment 3: Working with Docusaurus</strong>
          in the TWR2019 course. It demonstrates how I can:
        </p>
        <ul>
          <li>Set up a Docusaurus project using Node.js and Yarn.</li>
          <li>Create documentation pages with Markdown and React.</li>
          <li>Customize the theme, colors, and layout.</li>
          <li>Deploy the microsite using GitHub Pages.</li>
        </ul>

        <h2>Site Contents</h2>
        <p>You can find the following pages through the navigation bar:</p>
        <ul>
          <li><strong>About</strong> – A short description of the focus of this microsite.</li>
          <li><strong>Contact</strong> – My basic contact information and useful links.</li>
        </ul>

        <p>
          Ready to explore? Click below to go directly to the About page.
        </p>
        <p>
          <Link to="/docs/about">Go to About Page →</Link>
        </p>
      </main>
    </Layout>
  );
}
