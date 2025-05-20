import React from 'react';
import { Link } from 'react-router-dom';
import './Objectives.css';

const objectives = [
  {
    title: 'SOCIAL WELFARE',
    // this is now a direct image link
    image: 'assets/Doctor.png',
    path: '/social-welfare',
  },
  {
    title: 'HEALTH & RESEARCH',
    image: 'https://jvahini.in/motive-img/image%201%20(3)_0592024092157.png',
    path: '/health-research',
  },
  {
    title: 'EDUCATION & TRAINING',
    image: 'https://jvahini.in/motive-img/image%201%20(4)_0592024092326.png',
    path: '/education-training',
  },
  {
    title: 'HUMAN RIGHTS',
    image: 'https://jvahini.in/motive-img/image%201%20(4)_0592024092326.png',
    path: '/human-rights',
  },
  {
    title: 'ANTI CRIME',
    image: 'https://jvahini.in/motive-img/image%201%20(5)_0592024092404.png',
    path: '/anti-crime',
  },
];

const Objectives = () => (
  <section className="objectives-container" aria-label="Organization Objectives">
    <h2 className="objectives-header">Our Objectives</h2>
    <div className="objectives-grid">
      {objectives.map(({ title, image, path }, i) => (
        <Link to={path} key={i} className="objective-card">
          <div
            className="objective-image"
            style={{ backgroundImage: `url(${image})` }}
            role="img"
            aria-label={title}
          />
          <div className="objective-overlay">
            <h3 className="objective-title">{title}</h3>
          </div>
        </Link>
      ))}
    </div>
  </section>
);

export default Objectives;
