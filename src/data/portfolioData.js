import bootstrapLogo from 'devicon/icons/bootstrap/bootstrap-original.svg'
import cssLogo from 'devicon/icons/css3/css3-original.svg'
import expressLogo from 'devicon/icons/express/express-original.svg'
import gitLogo from 'devicon/icons/git/git-original.svg'
import githubLogo from 'devicon/icons/github/github-original.svg'
import htmlLogo from 'devicon/icons/html5/html5-original.svg'
import javaLogo from 'devicon/icons/java/java-original.svg'
import javascriptLogo from 'devicon/icons/javascript/javascript-original.svg'
import linkedinLogo from 'devicon/icons/linkedin/linkedin-original.svg'
import mongodbLogo from 'devicon/icons/mongodb/mongodb-original.svg'
import nodeLogo from 'devicon/icons/nodejs/nodejs-original.svg'
import postgresqlLogo from 'devicon/icons/postgresql/postgresql-original.svg'
import pythonLogo from 'devicon/icons/python/python-original.svg'
import reactLogo from 'devicon/icons/react/react-original.svg'

export const personalInfo = {
  name: 'Onkar Warade',
  initials: 'OW',
  primaryRole: 'AI & ML Engineer',
  secondaryRole: 'Full Stack Developer',
  email: 'onkarwarade45@gmail.com',
  phone: '+91 9322070390',
  phoneLink: 'tel:+919322070390',
  location: 'Pune, Maharashtra, India',
  footerEmail: 'onkarwarade.skn.it@gmail.com',
}

export const socialLinks = {
  linkedin: {
    url: 'https://www.linkedin.com/in/onkar-warade-b1a558305',
    logo: linkedinLogo,
  },
  github: {
    url: 'https://github.com/OnkarAshokWarade/',
    logo: githubLogo,
  },
}

export const currentRole = {
  title: 'AI/ML Engineer & Full Stack Developer',
  company: 'RPDS Innovations Pvt. Ltd.',
  introduction: 'contributing to thoughtful, scalable software through intelligent problem-solving and modern web development.',
  description: 'Combining AI/ML thinking with full-stack development to create intelligent, reliable, and user-focused digital solutions.',
  focusAreas: ['AI & ML Solutions', 'Full Stack Development', 'Scalable Engineering'],
}

export const siteAssets = {
  resumeUrl: '/Onkar-Warade-Resume.pdf',
  resumeFileName: 'Onkar-Warade-Resume.pdf',
  toolkitVideoUrl: '/x.webm',
}

export const contactFormUrl = 'https://formspree.io/f/moeabnwv'

export const navigationItems = [
  ['Home', 'home'],
  ['Approach', 'about'],
  ['Toolkit', 'skills'],
  ['Experience', 'experience'],
  ['Contact', 'contact'],
]

export const capabilities = [
  { number: '01', title: 'AI & Machine Learning', text: 'Exploring intelligent systems that make digital products more useful, adaptive, and insightful.' },
  { number: '02', title: 'Full Stack Development', text: 'Building reliable interfaces, backend logic, and connected experiences from idea to deployment.' },
  { number: '03', title: 'Problem Solving', text: 'Turning complex requirements into clear, practical, and maintainable technical solutions.' },
  { number: '04', title: 'Clean, Scalable Code', text: 'Creating strong foundations that stay readable, extensible, and dependable as products grow.' },
]

export const technologies = [
  { name: 'Python', category: 'AI & Data', logo: pythonLogo, color: '#3776ab', featured: true },
  { name: 'SQL', category: 'AI & Data', logo: null, color: '#38bdf8' },
  { name: 'HTML', category: 'Frontend', logo: htmlLogo, color: '#e34f26' },
  { name: 'CSS', category: 'Frontend', logo: cssLogo, color: '#1572b6' },
  { name: 'JavaScript', category: 'Frontend', logo: javascriptLogo, color: '#f7df1e' },
  { name: 'React', category: 'Frontend', logo: reactLogo, color: '#61dafb', featured: true },
  { name: 'Bootstrap', category: 'Frontend', logo: bootstrapLogo, color: '#9b72e8' },
  { name: 'Node.js', category: 'Backend', logo: nodeLogo, color: '#339933', featured: true },
  { name: 'Express', category: 'Backend', logo: expressLogo, color: '#f4f4f5', invert: true },
  { name: 'Java', category: 'Backend', logo: javaLogo, color: '#ed1d25' },
  { name: 'MongoDB', category: 'Database & Tools', logo: mongodbLogo, color: '#47a248', featured: true },
  { name: 'PostgreSQL', category: 'Database & Tools', logo: postgresqlLogo, color: '#4169e1' },
  { name: 'Git', category: 'Database & Tools', logo: gitLogo, color: '#f05032' },
]

export const technologyCategories = [
  { name: 'AI & Data', label: 'AI & DATA', markerClass: 'marker-ai' },
  { name: 'Frontend', label: 'FRONTEND', markerClass: 'marker-frontend' },
  { name: 'Backend', label: 'BACKEND', markerClass: 'marker-backend' },
  { name: 'Database & Tools', label: 'DATABASE & TOOLS', markerClass: 'marker-data' },
]

export const projects = [
  { title: 'InsightFlow AI', summary: 'Turning complex information into calm, actionable signals for decision makers.', tags: ['AI analytics', 'Dashboard'], variant: 'flow' },
  { title: 'SmartOps Platform', summary: 'A thoughtful workflow layer for teams building more reliable operations.', tags: ['Automation', 'Systems'], variant: 'ops' },
  { title: 'Neural Commerce', summary: 'An intelligent commerce experience shaped around useful, human discovery.', tags: ['Personalization', 'Web'], variant: 'commerce' },
]
