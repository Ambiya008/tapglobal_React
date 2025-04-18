import React, { useState } from 'react';
import Header from '../../components/Header/Header';
import { BusinessCenter, Timeline, AccountBalance, Build } from '@mui/icons-material';
import './Services.scss';

const TurnaroundManagement = () => {
  const [activeFaq, setActiveFaq] = useState(null);

  const toggleFaq = (index) => {
    setActiveFaq(activeFaq === index ? null : index);
  };

  return (
    <>
      <Header />
      <div className="service-page">
        <div className="service-hero">
          <div className="container">
            <h1>Turn Around Management</h1>
            <p>Navigating Through Challenges with Expert Leadership</p>
          </div>
        </div>
        <div className="service-content">
          <div className="container">
            <div className="content-section">
              <div className="section-content image-left">
                <div className="service-image">
                  <img src="/images/services/interim-executive.jpg" alt="Interim Executive" />
                </div>
                <div className="content">
                  <h2>Interim Executive and Crisis Management</h2>
                  <p>At TAP Global, we recognize the criticality of robust leadership...</p>
                  <div className="service-features">
                    <h3>Core Services</h3>
                    <ul>
                      <li>Provision of immediate senior management roles, including Chief Restructuring Officer, Chief Financial Officer, and Chief Executive Officer</li>
                      <li>Effective management of communication channels with key stakeholders</li>
                      <li>Leadership in restructuring efforts</li>
                    </ul>
                    
                    <h3>Strategic Advantages</h3>
                    <ul>
                      <li>Accelerated implementation of turnaround strategies</li>
                      <li>Mitigation of the impacts caused by executive turnover</li>
                      <li>Achievement of optimal outcomes through an objective approach</li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>

            <div className="content-section">
              <div className="section-content image-right">
                <div className="service-image">
                  <img src="/images/services/restructuring.jpg" alt="Restructuring" />
                </div>
                <div className="content">
                  <h2>Restructuring and Debt Advisory</h2>
                  <p>Our Restructuring and Debt Advisory service offers expert solutions...</p>
                  <div className="service-features">
                    <h3>Core Services</h3>
                    <ul>
                      <li>In-depth restructuring of existing debt and financial arrangements</li>
                      <li>Strategic refinancing advice and negotiation support</li>
                      <li>Creation of sustainable financial structures</li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>

            <div className="content-section">
              <div className="section-content image-left">
                <div className="service-image">
                  <img src="/images/services/liquidity.jpg" alt="Liquidity Management" />
                </div>
                <div className="content">
                  <h2>Liquidity Management</h2>
                  <p>In the dynamic business landscape, maintaining optimal liquidity...</p>
                  <div className="service-features">
                    <h3>Core Services</h3>
                    <ul>
                      <li>Customized liquidity strategies for cash flow optimization</li>
                      <li>Advanced tools and techniques for cash management</li>
                      <li>Continuous monitoring and adjustment of liquidity positions</li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>

            <div className="content-section">
              <div className="section-content image-right">
                <div className="service-image">
                  <img src="/images/services/distressed-assets.jpg" alt="Distressed Assets" />
                </div>
                <div className="content">
                  <h2>Distressed Assets and Insolvency Support</h2>
                  <p>Dealing with financial distress requires strategic insight...</p>
                  <div className="service-features">
                    <h3>Core Services</h3>
                    <ul>
                      <li>Strategic management of distressed assets</li>
                      <li>Guidance on insolvency proceedings and recovery</li>
                      <li>Assistance in asset restructuring and turnaround</li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </div> {/* closing container div */}
        </div> {/* closing service-content div */}

        <div className="faq-section">
          <div className="container">
            <h2>Frequently Asked Questions (FAQs)</h2>
            <div className="faq-grid">
              {[
                {
                  question: "What is interim executive management?",
                  answer: "Interim executive management involves providing experienced senior leaders on a temporary basis to guide organizations through critical transitions, crises, or leadership gaps."
                },
                {
                  question: "When should a business consider turnaround management?",
                  answer: "Businesses should consider turnaround management when facing financial distress, operational inefficiencies, or significant performance declines requiring expert intervention and strategic restructuring."
                },
                {
                  question: "How does TAP Global support restructuring and debt advisory?",
                  answer: "We offer comprehensive solutions including debt restructuring, refinancing strategies, and the development of sustainable financial structures to stabilize and strengthen your organization."
                },
                {
                  question: "What industries benefit from crisis management services?",
                  answer: "Our services benefit a wide range of industries, including manufacturing, technology, healthcare, finance, and more—any business facing operational or financial challenges."
                },
                {
                  question: "How quickly can TAP Global deploy interim executives?",
                  answer: "We can rapidly deploy experienced interim executives to address urgent leadership needs and ensure minimal disruption to your operations."
                }
              ].map((faq, index) => (
                <div 
                  key={index} 
                  className={`faq-item ${activeFaq === index ? 'active' : ''}`}
                  onClick={() => toggleFaq(index)}
                >
                  <h3>{faq.question}</h3>
                  <div className="faq-answer">
                    <p>{faq.answer}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        <div className="contact-section">
          <div className="container">
            <h2>Ready to Transform Your Business?</h2>
            <p>Contact our team of experts to discuss how we can help your organization navigate through challenges and emerge stronger.</p>
            <a href="/contact" className="contact-button">Get in Touch</a>
          </div>
        </div>
      </div>
    </>
  );
};

export default TurnaroundManagement;