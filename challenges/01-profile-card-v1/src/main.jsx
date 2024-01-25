import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';

const skills = [
  {
    skill: 'HTML+CSS',
    level: 'advanced',
    color: '#2662EA',
  },
  {
    skill: 'JavaScript',
    level: 'advanced',
    color: '#EFD81D',
  },
  {
    skill: 'Web Design',
    level: 'advanced',
    color: '#C3DCAF',
  },
  {
    skill: 'Git and GitHub',
    level: 'intermediate',
    color: '#E84F33',
  },
  {
    skill: 'React',
    level: 'advanced',
    color: '#60DAFB',
  },
  {
    skill: 'Svelte',
    level: 'beginner',
    color: '#FF3B00',
  },
];

function Avatar() {
  return <img className="avatar" src="photo/avatar.jpg" alt="Avatar" />;
}

function Intro() {
  return (
    <div className="intro">
      <h1>Hi, I&apos;m Mike</h1>
      <p>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Nostrum vitae
        facere ea, dolorum eius minus corrupti pariatur aut officiis sed.
      </p>
    </div>
  );
}

function SkillList() {
  return (
    <div className="skill-list">
      {skills.map(skill => {
        return <Skill key={skill.skill} {...skill} />;
      })}
    </div>
  );
}

function Skill({ skill, level, color }) {
  return (
    <div className="skill" style={{ background: color }}>
      <span>{skill}</span>
      <span>
        {level === 'beginner' ? '😊' : level === 'intermediate' ? '👍' : '💪'}
      </span>
    </div>
  );
}

function App() {
  return (
    <div className="card">
      <Avatar />
      <div className="data">
        <Intro />
        <SkillList />
      </div>
    </div>
  );
}

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
