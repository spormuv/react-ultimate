import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';

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
      <Skill skill="React" emoji="💥" bg="#00d8ff" />
      <Skill skill="HTML+CSS" emoji="👍" bg="#96be25" />
      <Skill skill="Node" emoji="💪" bg="#be4d25" />
      <Skill skill="JavaScript" emoji="💪" bg="#44ef77" />
      <Skill skill="TypeScript" emoji="💪" bg="#f25b65" />
    </div>
  );
}

function Skill({ skill, emoji, bg }) {
  return (
    <div className="skill" style={{ background: bg }}>
      <span>{skill}</span>
      <span>{emoji}</span>
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
