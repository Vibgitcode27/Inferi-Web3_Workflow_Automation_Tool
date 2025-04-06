// pages/index.js
"use client";
import { useState, useEffect } from 'react';
import Head from 'next/head';
import { Layout } from 'antd';
import Navbar from './(components)/Navbar';
import HomeContent from './(components)/HomeContent';

// Import other components and styles

const { Content, Footer } = Layout;

export default function Home() {
  // Your existing state and effects
  
  return (
    <Layout style={{ minHeight: '100vh' }}>
      <Head>
        <title>Inferi - Web3 Workflow Automation</title>
        <meta name="description" content="Automate your Web3 and blockchain workflows with Inferi" />
        <link rel="icon" href="/favicon.ico" />
        <link href="https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700;800&display=swap" rel="stylesheet" />
      </Head>
      <Navbar />
      <Content style={{ paddingTop: 70 , backgroundColor : "white" }}>
        <HomeContent/>
      </Content>

      {/* Footer remains the same */}
    </Layout>
  );
}