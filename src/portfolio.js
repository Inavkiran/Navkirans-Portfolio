const header = {
  // all the properties are optional - can be left empty or deleted
  homepage: 'https://www.inavkiran.com',
  title: 'NS',
}

const about = {
  // all the properties are optional - can be left empty or deleted
  name: 'Navkiran Singh',
  role: 'Full Stack Developer',
  // description: '',
  // resume: 'https://example.com',
  social: {
    linkedin: 'https://www.linkedin.com/in/inavkiran/',
    github: 'https://github.com/Inavkiran',
    twitter: 'https://twitter.com/inavkiran',
    calendly: 'https://calendly.com/inavkiran',
  },
}

const projects = [
  // projects can be added an removed
  // if there are no projects, Projects section won't show up
  {
    name: 'Project 1',
    description:
      'Amet asperiores et impedit aliquam consectetur? Voluptates sed a nulla ipsa officia et esse aliquam',
    stack: ['SASS', 'TypeScript', 'React'],
    sourceCode: 'https://github.com',
    livePreview: 'https://github.com',
  },
  {
    name: 'Project 2',
    description:
      'Amet asperiores et impedit aliquam consectetur? Voluptates sed a nulla ipsa officia et esse aliquam',
    stack: ['SASS', 'TypeScript', 'React'],
    sourceCode: 'https://github.com',
    livePreview: 'https://github.com',
  },
  {
    name: 'Project 3',
    description:
      'Amet asperiores et impedit aliquam consectetur? Voluptates sed a nulla ipsa officia et esse aliquam',
    stack: ['SASS', 'TypeScript', 'React'],
    sourceCode: 'https://github.com',
    livePreview: 'https://github.com',
  },
]

const skills = [
  // skills can be added or removed
  // if there are no skills, Skills section won't show up
  'HTML',
  'CSS',
  'JavaScript',
  'React',
  'Node jS',
  'Express',
  'Mongo DB',
]

const contact = {
  // email is optional - if left empty Contact section won't show up
  email: 'navkiran054@gmail.com',
}

export { header, about, projects, skills, contact }
