import React, { useState } from 'react';
import './Faq.css';
import { FaAngleDown, FaAngleUp, FaRegQuestionCircle } from 'react-icons/fa';

const faqData = [
  {
    question: "What is Medilab?",
    answer: "Medilab is a comprehensive healthcare management system designed to streamline the operations of medical facilities.",
  },
  {
    question: "How can I book an appointment?",
    answer: "To book an appointment, log in to your Medilab account, go to the 'Appointments' section, and follow the instructions to schedule a visit with a healthcare provider.",
  },
  {
    question: "Is my data secure with Medilab?",
    answer: "Yes, Medilab takes data security very seriously. We use advanced encryption and security protocols to ensure that your personal and medical information is safe.",
  },
  {
    question: "How do I update my personal information in Medilab?",
    answer: "To update your personal information, log in to your Medilab account, go to the 'Profile' section, and edit the information as needed.",
  }
];

const FAQ = () => {
  const [activeIndex, setActiveIndex] = useState(null);

  const toggleFAQ = (index) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  return (
    <div style={{ backgroundColor: "#f1f7fd", paddingBottom: "10px" }}>
      <div className="faq-container">
        <h2>Frequently Asked Questions</h2>
        <p>Welcome to our Frequently Asked Questions (FAQ) section. Here, you'll find answers to the most common inquiries about Medilab. Whether you're looking for information on how to book an appointment, access your medical records, or understand our data security measures, this section aims to provide clear and concise answers to help you make the most of our healthcare management system.</p>
        <div style={{padding: "0 50px"}}>
          {faqData.map((faq, index) => (
            <div key={index} className="faq-item">
              <div className="faq-question" onClick={() => toggleFAQ(index)}>
                <FaRegQuestionCircle className='question-icon'/>{faq.question}
                {activeIndex === index ? <FaAngleUp className="icon" /> : <FaAngleDown className="icon" />}
              </div>
              <div className={`faq-answer ${activeIndex === index ? 'active' : ''}`}>
                {faq.answer}
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default FAQ;
