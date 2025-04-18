import React, { useState } from 'react';
import Header from '../../components/Header/Header';
import './Services.scss';

const EnterpriseStrategy = () => {
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
            <h1>Enterprise Strategy</h1>
            <p>Transforming Business Vision into Sustainable Success</p>
          </div>
        </div>

        <div className="service-content">
          <div className="container">
            <div className="content-section">
              <div className="section-content image-left">
                <div className="service-image">
                  <img src="/images/services/market-fit.jpg" alt="Product Market-Fit" />
                </div>
                <div className="content">
                  <h2>Product Market-Fit and Value Chain Analysis</h2>
                  <p>TAP Global specializes in identifying and optimizing the sweet spot where your products align perfectly with market demands, using advanced analytical techniques and deep market insights.</p>
                  <div className="service-features">
                    <h3>Core Services</h3>
                    <ul>
                      <li>Comprehensive analysis of market trends and consumer preferences</li>
                      <li>Evaluation and optimization of the value chain to enhance efficiency and profitability</li>
                      <li>Strategic recommendations to align products with market needs and maximize market penetration</li>
                    </ul>
                    
                    <h3>Strategic Advantages</h3>
                    <ul>
                      <li>Customized solutions based on thorough market analysis and trends</li>
                      <li>Enhanced product positioning and competitive advantage</li>
                      <li>Streamlined operations leading to cost savings and improved profit margins</li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>

            <div className="content-section">
              <div className="section-content image-right">
                <div className="service-image">
                  <img src="/images/services/gap-analysis.jpg" alt="Gap Analysis" />
                </div>
                <div className="content">
                  <h2>Current State Assessment and Gap Analysis</h2>
                  <p>Our service provides a thorough evaluation of your company's current operational state, identifying gaps and areas for improvement to drive growth and efficiency.</p>
                  <div className="service-features">
                    <h3>Core Services</h3>
                    <ul>
                      <li>Detailed assessment of organizational processes and performance</li>
                      <li>Identification of gaps in capabilities, processes, and technologies</li>
                      <li>Strategic planning to bridge identified gaps and capitalize on opportunities</li>
                    </ul>
                    
                    <h3>Strategic Advantages</h3>
                    <ul>
                      <li>Clear insight into organizational strengths and weaknesses</li>
                      <li>Actionable strategies for improvement and innovation</li>
                      <li>Enhanced readiness for market changes and challenges</li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>

            <div className="content-section">
              <div className="section-content image-left">
                <div className="service-image">
                  <img src="/images/services/digital-strategy.jpg" alt="Digital Strategy" />
                </div>
                <div className="content">
                  <h2>Digital Business and Technology Strategy</h2>
                  <p>TAP Global offers cutting-edge digital business and technology strategies to transform your business operations and drive digital innovation.</p>
                  <div className="service-features">
                    <h3>Core Services</h3>
                    <ul>
                      <li>Development of a comprehensive digital business strategy</li>
                      <li>Integration of the latest technological advancements into business processes</li>
                      <li>Customized digital solutions to enhance customer engagement and operational efficiency</li>
                    </ul>
                    
                    <h3>Strategic Advantages</h3>
                    <ul>
                      <li>Stay ahead in the digital landscape with innovative strategies</li>
                      <li>Improved customer experience and operational agility</li>
                      <li>Long-term growth through effective digital transformation</li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="faq-section">
          <div className="container">
            <h2>Frequently Asked Questions (FAQs)</h2>
            <div className="faq-grid">
              {[
                {
                  question: "What is enterprise strategy consulting?",
                  answer: "Enterprise strategy consulting helps organizations develop and implement comprehensive business strategies that align with their goals, market conditions, and available resources for sustainable growth and competitive advantage."
                },
                {
                  question: "How do you determine product-market fit?",
                  answer: "We use a combination of market research, consumer behavior analysis, competitive analysis, and data analytics to evaluate and optimize how well your products meet market demands and customer needs."
                },
                {
                  question: "What does the gap analysis process involve?",
                  answer: "Our gap analysis process includes assessing current performance, identifying desired future states, measuring the gaps between them, and developing strategic plans to bridge these gaps effectively."
                },
                {
                  question: "How can digital transformation benefit my business?",
                  answer: "Digital transformation can enhance operational efficiency, improve customer experience, enable data-driven decision-making, and create new business opportunities while reducing costs and increasing competitiveness."
                },
                {
                  question: "What makes TAP Global's approach unique?",
                  answer: "We combine deep industry expertise, advanced analytics, and practical implementation experience to deliver customized solutions that drive real business results and sustainable growth."
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
            <h2>Ready to Transform Your Enterprise?</h2>
            <p>Contact our team of strategy experts to discuss how we can help your organization achieve sustainable growth and success.</p>
            <a href="/contact" className="contact-button">Get in Touch</a>
          </div>
        </div>
      </div>
    </>
  );
};

export default EnterpriseStrategy;