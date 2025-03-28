// pages/index.js
"use client";
import Head from 'next/head';
import { useState } from 'react';

// Custom Button Component
interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  primary: boolean;
  children: React.ReactNode;
}

const Button: React.FC<ButtonProps> = ({ primary, children, ...props }) => {
  return (
    <button
      style={{
        padding: '12px 24px',
        borderRadius: '8px',
        fontWeight: '600',
        cursor: 'pointer',
        transition: 'all 0.2s ease',
        backgroundColor: primary ? '#4a6bef' : 'transparent',
        color: primary ? 'white' : '#4a6bef',
        border: primary ? 'none' : '2px solid #4a6bef',
        fontSize: '16px',
        boxShadow: primary ? '0 4px 14px rgba(74, 107, 239, 0.3)' : 'none',
      }}
      {...props}
    >
      {children}
    </button>
  );
};

// Feature Card Component
interface FeatureCardProps {
  icon: string;
  title: string;
  description: string;
}

const FeatureCard: React.FC<FeatureCardProps> = ({ icon, title, description }) => {
  return (
    <div
      style={{
        padding: '28px',
        borderRadius: '12px',
        backgroundColor: 'white',
        boxShadow: '0 4px 20px rgba(0, 0, 0, 0.08)',
        transition: 'transform 0.3s ease',
        cursor: 'pointer',
      }}
      onMouseEnter={(e) => {
        e.currentTarget.style.transform = 'translateY(-8px)';
      }}
      onMouseLeave={(e) => {
        e.currentTarget.style.transform = 'translateY(0)';
      }}
    >
      <div style={{ fontSize: '36px', marginBottom: '16px' }}>{icon}</div>
      <h3 style={{ fontSize: '20px', fontWeight: '700', marginBottom: '12px' }}>{title}</h3>
      <p style={{ fontSize: '16px', color: '#666', lineHeight: '1.6' }}>{description}</p>
    </div>
  );
};

export default function Home() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <div>
      <Head>
        <title>Inferi - Web3 Workflow Automation</title>
        <meta name="description" content="Automate your Web3 and blockchain workflows with Inferi" />
        <link rel="icon" href="/favicon.ico" />
        <link href="https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700;800&display=swap" rel="stylesheet" />
      </Head>

      <div
        style={{
          position: 'relative',
          overflow: 'hidden',
          background: 'linear-gradient(to bottom, #fff, #f8faff)',
        }}
      >
        {/* Navigation */}
        <nav
          style={{
            display: 'flex',
            justifyContent: 'space-between',
            alignItems: 'center',
            padding: '24px 5%',
            position: 'relative',
            zIndex: 10,
          }}
        >
          <div style={{ display: 'flex', alignItems: 'center' }}>
            <h1 style={{ fontSize: '28px', fontWeight: '800', background: 'linear-gradient(90deg, #4a6bef, #8a63e8)', WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent' }}>
              inferi
            </h1>
          </div>

          {/* Desktop Menu */}
          <div
            style={{
              display: 'flex',
              gap: '32px',
              alignItems: 'center',
              '@media (max-width: 768px)': {
                display: 'none',
              },
            }}
          >
            <a href="#features" style={{ textDecoration: 'none', color: '#333', fontWeight: '500' }}>Features</a>
            <a href="#how-it-works" style={{ textDecoration: 'none', color: '#333', fontWeight: '500' }}>How It Works</a>
            <a href="#integrations" style={{ textDecoration: 'none', color: '#333', fontWeight: '500' }}>Integrations</a>
            <a href="#pricing" style={{ textDecoration: 'none', color: '#333', fontWeight: '500' }}>Pricing</a>
          </div>

          <div style={{ display: 'flex', gap: '16px' }}>
            <Button primary={false}>Log In</Button>
            <Button primary={true}>Get Started</Button>
          </div>

          {/* Mobile Menu Button */}
          <div
            style={{
              display: 'none',
              '@media (max-width: 768px)': {
                display: 'block',
              },
            }}
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M3 12H21" stroke="#151515" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
              <path d="M3 6H21" stroke="#151515" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
              <path d="M3 18H21" stroke="#151515" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
          </div>
        </nav>

        {/* Hero Section */}
        <section
          style={{
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            textAlign: 'center',
            padding: '80px 5% 120px',
            position: 'relative',
          }}
        >
          <div
            style={{
              position: 'absolute',
              width: '600px',
              height: '600px',
              background: 'radial-gradient(circle, rgba(138, 99, 232, 0.15) 0%, rgba(255, 255, 255, 0) 70%)',
              top: '-300px',
              right: '-300px',
              borderRadius: '50%',
              zIndex: 0,
            }}
          ></div>
          
          <h1
            style={{
              fontSize: '64px',
              fontWeight: '800',
              maxWidth: '800px',
              marginBottom: '24px',
              lineHeight: 1.1,
              position: 'relative',
              zIndex: 1,
            }}
          >
            Automate Your <span style={{ background: 'linear-gradient(90deg, #4a6bef, #8a63e8)', WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent' }}>Web3 Workflows</span> with Ease
          </h1>
          
          <p
            style={{
              fontSize: '20px',
              maxWidth: '600px',
              marginBottom: '40px',
              color: '#666',
              position: 'relative',
              zIndex: 1,
            }}
          >
            Connect your blockchain operations with popular apps and services. Build powerful automated feries without writing a single line of code.
          </p>
          
          <div style={{ display: 'flex', gap: '16px', marginBottom: '64px', position: 'relative', zIndex: 1 }}>
            <Button
              primary={true}
              style={{
                fontSize: '18px',
                padding: '16px 32px',
              }}
            >
              Start Building Feries
            </Button>
            <Button primary={false}>Watch Demo</Button>
          </div>
          
          <div
            style={{
              position: 'relative',
              width: '100%',
              maxWidth: '1000px',
              height: '500px',
              backgroundColor: '#151515',
              borderRadius: '12px',
              overflow: 'hidden',
              boxShadow: '0 20px 80px rgba(0, 0, 0, 0.12)',
              zIndex: 1,
            }}
          >
            <div
              style={{
                position: 'absolute',
                top: '0',
                left: '0',
                width: '100%',
                height: '48px',
                backgroundColor: '#1f1f1f',
                display: 'flex',
                alignItems: 'center',
                padding: '0 16px',
              }}
            >
              <div style={{ display: 'flex', gap: '8px' }}>
                <div style={{ width: '12px', height: '12px', borderRadius: '50%', backgroundColor: '#ff5f57' }}></div>
                <div style={{ width: '12px', height: '12px', borderRadius: '50%', backgroundColor: '#febc2e' }}></div>
                <div style={{ width: '12px', height: '12px', borderRadius: '50%', backgroundColor: '#28c840' }}></div>
              </div>
            </div>
            
            <div
              style={{
                position: 'absolute',
                top: '48px',
                left: '0',
                width: '100%',
                height: 'calc(100% - 48px)',
                padding: '24px',
                display: 'flex',
                flexDirection: 'column',
                gap: '24px',
              }}
            >
              <div
                style={{
                  fontSize: '20px',
                  fontWeight: '600',
                  color: 'white',
                }}
              >
                Building a New Feri
              </div>
              
              <div
                style={{
                  display: 'flex',
                  gap: '16px',
                  height: '100%',
                }}
              >
                <div
                  style={{
                    flex: '1',
                    backgroundColor: '#252525',
                    borderRadius: '8px',
                    padding: '16px',
                    display: 'flex',
                    flexDirection: 'column',
                    gap: '16px',
                  }}
                >
                  <div style={{ fontSize: '16px', fontWeight: '600', color: 'white' }}>Triggers</div>
                  
                  <div
                    style={{
                      backgroundColor: '#2a2a2a',
                      borderRadius: '8px',
                      padding: '12px',
                      display: 'flex',
                      alignItems: 'center',
                      gap: '12px',
                      cursor: 'pointer',
                      border: '1px solid #3a3a3a',
                    }}
                  >
                    <div
                      style={{
                        width: '40px',
                        height: '40px',
                        borderRadius: '8px',
                        backgroundColor: '#4a6bef',
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center',
                        color: 'white',
                      }}
                    >
                      Eth
                    </div>
                    <div>
                      <div style={{ color: 'white', fontWeight: '500' }}>New Transaction</div>
                      <div style={{ color: '#999', fontSize: '14px' }}>Triggers when a new transaction occurs</div>
                    </div>
                  </div>
                  
                  <div
                    style={{
                      backgroundColor: '#2a2a2a',
                      borderRadius: '8px',
                      padding: '12px',
                      display: 'flex',
                      alignItems: 'center',
                      gap: '12px',
                      cursor: 'pointer',
                    }}
                  >
                    <div
                      style={{
                        width: '40px',
                        height: '40px',
                        borderRadius: '8px',
                        backgroundColor: '#8a63e8',
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center',
                        color: 'white',
                      }}
                    >
                      NFT
                    </div>
                    <div>
                      <div style={{ color: 'white', fontWeight: '500' }}>NFT Transfer</div>
                      <div style={{ color: '#999', fontSize: '14px' }}>Triggers on NFT transfer events</div>
                    </div>
                  </div>
                </div>
                
                <div
                  style={{
                    flex: '1',
                    backgroundColor: '#252525',
                    borderRadius: '8px',
                    padding: '16px',
                    display: 'flex',
                    flexDirection: 'column',
                    gap: '16px',
                  }}
                >
                  <div style={{ fontSize: '16px', fontWeight: '600', color: 'white' }}>Actions</div>
                  
                  <div
                    style={{
                      backgroundColor: '#2a2a2a',
                      borderRadius: '8px',
                      padding: '12px',
                      display: 'flex',
                      alignItems: 'center',
                      gap: '12px',
                      cursor: 'pointer',
                    }}
                  >
                    <div
                      style={{
                        width: '40px',
                        height: '40px',
                        borderRadius: '8px',
                        backgroundColor: '#2c7a7b',
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center',
                        color: 'white',
                      }}
                    >
                      SL
                    </div>
                    <div>
                      <div style={{ color: 'white', fontWeight: '500' }}>Send Slack Message</div>
                      <div style={{ color: '#999', fontSize: '14px' }}>Send a message to a Slack channel</div>
                    </div>
                  </div>
                  
                  <div
                    style={{
                      backgroundColor: '#2a2a2a',
                      borderRadius: '8px',
                      padding: '12px',
                      display: 'flex',
                      alignItems: 'center',
                      gap: '12px',
                      cursor: 'pointer',
                    }}
                  >
                    <div
                      style={{
                        width: '40px',
                        height: '40px',
                        borderRadius: '8px',
                        backgroundColor: '#d53f8c',
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center',
                        color: 'white',
                      }}
                    >
                      EM
                    </div>
                    <div>
                      <div style={{ color: 'white', fontWeight: '500' }}>Send Email</div>
                      <div style={{ color: '#999', fontSize: '14px' }}>Send an email notification</div>
                    </div>
                  </div>
                  
                  <div
                    style={{
                      backgroundColor: '#2a2a2a',
                      borderRadius: '8px',
                      padding: '12px',
                      display: 'flex',
                      alignItems: 'center',
                      gap: '12px',
                      cursor: 'pointer',
                    }}
                  >
                    <div
                      style={{
                        width: '40px',
                        height: '40px',
                        borderRadius: '8px',
                        backgroundColor: '#3182ce',
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center',
                        color: 'white',
                      }}
                    >
                      NT
                    </div>
                    <div>
                      <div style={{ color: 'white', fontWeight: '500' }}>Add to Notion</div>
                      <div style={{ color: '#999', fontSize: '14px' }}>Create a new entry in Notion</div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </div>

      {/* Feature Section */}
      <section
        id="features"
        style={{
          padding: '120px 5%',
          textAlign: 'center',
          backgroundColor: 'white',
        }}
      >
        <h2
          style={{
            fontSize: '48px',
            fontWeight: '800',
            marginBottom: '16px',
          }}
        >
          Features that <span style={{ background: 'linear-gradient(90deg, #4a6bef, #8a63e8)', WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent' }}>Power</span> Your Workflow
        </h2>
        <p
          style={{
            fontSize: '20px',
            maxWidth: '600px',
            margin: '0 auto 64px',
            color: '#666',
          }}
        >
          Inferi combines powerful Web3 functionality with ease of use to automate your blockchain operations.
        </p>

        <div
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))',
            gap: '24px',
            maxWidth: '1200px',
            margin: '0 auto',
          }}
        >
          <FeatureCard
            icon="🔗"
            title="Web3 Native"
            description="Built from the ground up for blockchain operations with support for multiple chains, wallets, and protocols."
          />
          <FeatureCard
            icon="🔌"
            title="Rich Integrations"
            description="Connect with Slack, Notion, Email, and many other popular services to build powerful workflows."
          />
          <FeatureCard
            icon="⚡"
            title="No-Code Builder"
            description="Create complex automation feries without writing a single line of code using our visual editor."
          />
          <FeatureCard
            icon="📊"
            title="Real-Time Monitoring"
            description="Monitor your workflows with real-time analytics and notifications when things go wrong."
          />
          <FeatureCard
            icon="🛡️"
            title="Secure by Design"
            description="Enterprise-grade security for your Web3 operations with encrypted connections and key management."
          />
          <FeatureCard
            icon="🚀"
            title="Lightning Fast"
            description="Built on a high-performance infrastructure to handle your most demanding workflows."
          />
        </div>
      </section>

      {/* How It Works */}
      <section
        id="how-it-works"
        style={{
          padding: '120px 5%',
          backgroundColor: '#f9fafc',
        }}
      >
        <div
          style={{
            maxWidth: '1200px',
            margin: '0 auto',
          }}
        >
          <h2
            style={{
              fontSize: '48px',
              fontWeight: '800',
              marginBottom: '16px',
              textAlign: 'center',
            }}
          >
            How Inferi <span style={{ background: 'linear-gradient(90deg, #4a6bef, #8a63e8)', WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent' }}>Works</span>
          </h2>
          <p
            style={{
              fontSize: '20px',
              maxWidth: '600px',
              margin: '0 auto 64px',
              color: '#666',
              textAlign: 'center',
            }}
          >
            Building powerful feries is simple with our three-step process.
          </p>

          <div
            style={{
              display: 'grid',
              gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))',
              gap: '48px',
            }}
          >
            <div>
              <div
                style={{
                  width: '80px',
                  height: '80px',
                  borderRadius: '50%',
                  backgroundColor: '#4a6bef',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  color: 'white',
                  fontSize: '32px',
                  fontWeight: '700',
                  marginBottom: '24px',
                }}
              >
                1
              </div>
              <h3 style={{ fontSize: '24px', fontWeight: '700', marginBottom: '16px' }}>Choose a Trigger</h3>
              <p style={{ fontSize: '16px', color: '#666', lineHeight: '1.6' }}>
                Select from a variety of Web3 triggers like new transactions, smart contract events, or token transfers.
              </p>
            </div>

            <div>
              <div
                style={{
                  width: '80px',
                  height: '80px',
                  borderRadius: '50%',
                  backgroundColor: '#8a63e8',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  color: 'white',
                  fontSize: '32px',
                  fontWeight: '700',
                  marginBottom: '24px',
                }}
              >
                2
              </div>
              <h3 style={{ fontSize: '24px', fontWeight: '700', marginBottom: '16px' }}>Configure Actions</h3>
              <p style={{ fontSize: '16px', color: '#666', lineHeight: '1.6' }}>
                Define what happens when your trigger fires. Send notifications, update databases, or execute transactions.
              </p>
            </div>

            <div>
              <div
                style={{
                  width: '80px',
                  height: '80px',
                  borderRadius: '50%',
                  background: 'linear-gradient(90deg, #4a6bef, #8a63e8)',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  color: 'white',
                  fontSize: '32px',
                  fontWeight: '700',
                  marginBottom: '24px',
                }}
              >
                3
              </div>
              <h3 style={{ fontSize: '24px', fontWeight: '700', marginBottom: '16px' }}>Activate Your Feri</h3>
              <p style={{ fontSize: '16px', color: '#666', lineHeight: '1.6' }}>
                Turn on your feri and let Inferi handle the automation. Monitor performance in real-time from your dashboard.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Integrations */}
      <section
        id="integrations"
        style={{
          padding: '120px 5%',
          textAlign: 'center',
          backgroundColor: 'white',
        }}
      >
        <h2
          style={{
            fontSize: '48px',
            fontWeight: '800',
            marginBottom: '16px',
          }}
        >
          Powerful <span style={{ background: 'linear-gradient(90deg, #4a6bef, #8a63e8)', WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent' }}>Integrations</span>
        </h2>
        <p
          style={{
            fontSize: '20px',
            maxWidth: '600px',
            margin: '0 auto 64px',
            color: '#666',
          }}
        >
          Connect your favorite apps and services to create the perfect workflow.
        </p>

        <div
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(120px, 1fr))',
            gap: '32px',
            maxWidth: '1000px',
            margin: '0 auto',
          }}
        >
          {['Ethereum', 'Solana', 'Polygon', 'Slack', 'Notion', 'Gmail', 'Discord', 'Twitter', 'IPFS', 'Airtable', 'Google Sheets', 'Zapier'].map((app) => (
            <div
              key={app}
              style={{
                height: '120px',
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'center',
                justifyContent: 'center',
                backgroundColor: '#f5f7ff',
                borderRadius: '12px',
                padding: '16px',
                transition: 'transform 0.3s ease, box-shadow 0.3s ease',
              }}
              onMouseEnter={(e) => {
                const target = e.currentTarget as HTMLElement;
                target.style.transform = 'translateY(-4px)';
                target.style.boxShadow = '0 8px 20px rgba(0, 0, 0, 0.1)';
              }}
              onMouseLeave={(e) => {
                const target = e.currentTarget as HTMLElement;
                target.style.transform = 'translateY(0)';
                target.style.boxShadow = 'none';
              }}
            >
              <div style={{ fontSize: '32px', marginBottom: '8px' }}>
                {app === 'Ethereum' && '⟠'}
                {app === 'Solana' && '◎'}
                {app === 'Polygon' && '⬡'}
                {app === 'Slack' && '🔷'}
                {app === 'Notion' && '📝'}
                {app === 'Gmail' && '✉️'}
                {app === 'Discord' && '🎮'}
                {app === 'Twitter' && '🐦'}
                {app === 'IPFS' && '📁'}
                {app === 'Airtable' && '🗃️'}
                {app === 'Google Sheets' && '📊'}
                {app === 'Zapier' && '⚡'}
              </div>
              <div style={{ fontSize: '14px', fontWeight: '600' }}>{app}</div>
            </div>
          ))}
        </div>
      </section>

      {/* CTA Section */}
      <section
        style={{
          padding: '120px 5%',
          textAlign: 'center',
          background: 'linear-gradient(135deg, #4a6bef, #8a63e8)',
          color: 'white',
        }}
      >
        <h2
          style={{
            fontSize: '48px',
            fontWeight: '800',
            marginBottom: '24px',
            maxWidth: '800px',
            margin: '0 auto 24px',
          }}
        >
          Ready to Automate Your Web3 Workflows?
        </h2>
        <p
          style={{
            fontSize: '20px',
            maxWidth: '600px',
            margin: '0 auto 40px',
            opacity: '0.9',
          }}
        >
          Join thousands of developers and businesses building powerful blockchain automation with Inferi.
        </p>
        <button
          style={{
            padding: '16px 32px',
            borderRadius: '8px',
            fontWeight: '600',
            cursor: 'pointer',
            transition: 'all 0.2s ease',
            backgroundColor: 'white',
            color: '#4a6bef',
            border: 'none',
            fontSize: '18px',
            boxShadow: '0 4px 14px rgba(0, 0, 0, 0.1)',
          }}
        >
          Get Started for Free
        </button>
      </section>

      {/* Footer */}
      <footer
        style={{
          padding: '80px 5% 40px',
          backgroundColor: '#151515',
          color: 'white',
        }}
      >
        <div
          style={{
            maxWidth: '1200px',
            margin: '0 auto',
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))',
            gap: '48px',
            marginBottom: '64px',
          }}
        >
          <div>
            <h3 style={{ fontSize: '28px', fontWeight: '800', marginBottom: '24px', background: 'linear-gradient(90deg, #4a6bef, #8a63e8)', WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent' }}>
              inferi
            </h3>
            <p style={{ color: '#aaa', marginBottom: '24px', lineHeight: '1.6' }}>
              Automate your Web3 workflows with ease. Connect blockchain operations with your favorite apps.
            </p>
          </div>

          <div>
            <h4 style={{ fontSize: '16px', fontWeight: '700', marginBottom: '16px', color: '#ddd' }}>Product</h4>
            <ul style={{ listStyle: 'none', padding: 0 }}>
              {['Features', 'Pricing', 'Integrations', 'Docs', 'API'].map((item) => (
                <li key={item} style={{ marginBottom: '12px' }}>
                  <a href="#" style={{ color: '#aaa', textDecoration: 'none', transition: 'color 0.2s' }} onMouseEnter={(e) => e.target.style.color = '#4a6bef'} onMouseLeave={(e) => e.target.style.color = '#aaa'}>
                    {item}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 style={{ fontSize: '16px', fontWeight: '700', marginBottom: '16px', color: '#ddd' }}>Resources</h4>
            <ul style={{ listStyle: 'none', padding: 0 }}>
              {['Blog', 'Tutorials', 'Community', 'Case Studies', 'Help Center'].map((item) => (
                <li key={item} style={{ marginBottom: '12px' }}>
                  <a href="#" style={{ color: '#aaa', textDecoration: 'none', transition: 'color 0.2s' }} onMouseEnter={(e) => e.target.style.color = '#4a6bef'} onMouseLeave={(e) => e.target.style.color = '#aaa'}>
                    {item}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 style={{ fontSize: '16px', fontWeight: '700', marginBottom: '16px', color: '#ddd' }}>Company</h4>
            <ul style={{ listStyle: 'none', padding: 0 }}>
              {['About', 'Careers', 'Contact', 'Privacy', 'Terms'].map((item) => (
                <li key={item} style={{ marginBottom: '12px' }}>
                  <a href="#" style={{ color: '#aaa', textDecoration: 'none', transition: 'color 0.2s' }} onMouseEnter={(e) => e.target.style.color = '#4a6bef'} onMouseLeave={(e) => e.target.style.color = '#aaa'}>
                    {item}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>

        <div
          style={{
            maxWidth: '1200px',
            margin: '0 auto',
            paddingTop: '24px',
            borderTop: '1px solid #333',
            display: 'flex',
            justifyContent: 'space-between',
            alignItems: 'center',
            color: '#aaa',
            fontSize: '14px',
          }}
        >
          <div>© 2025 Inferi. All rights reserved.</div>
          <div style={{ display: 'flex', gap: '16px' }}>
            <a href="#" style={{ color: '#aaa', textDecoration: 'none', transition: 'color 0.2s' }} onMouseEnter={(e) => e.target.style.color = '#4a6bef'} onMouseLeave={(e) => e.target.style.color = '#aaa'}>
              Twitter
            </a>
            <a href="#" style={{ color: '#aaa', textDecoration: 'none', transition: 'color 0.2s' }} onMouseEnter={(e) => e.target.style.color = '#4a6bef'} onMouseLeave={(e) => e.target.style.color = '#aaa'}>
              Discord
            </a>
            <a href="#" style={{ color: '#aaa', textDecoration: 'none', transition: 'color 0.2s' }} onMouseEnter={(e) => e.target.style.color = '#4a6bef'} onMouseLeave={(e) => e.target.style.color = '#aaa'}>
              GitHub
            </a>
          </div>
        </div>

      </footer>
      </div>);
}