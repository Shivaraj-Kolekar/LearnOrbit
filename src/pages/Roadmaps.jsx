import { useEffect, useState } from 'react'
import { Book, Target, Briefcase } from 'lucide-react'
import SpotlightCard from '@/components/SpotlightCard'
import { AnimatedContainer } from '@/components/AnimatedContainer'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { ToastContainer, toast } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css'
import { useUser } from '@clerk/clerk-react'
import CryptoJS from 'crypto-js'
const Roadmaps = () => {
  const { isSignedIn, user } = useUser()
  const [selectedSkills, setSelectedSkills] = useState(() => {
    const savedSkills = localStorage.getItem('CompletedTasks')
    return savedSkills ? JSON.parse(savedSkills) : {}
  })
  const hashUserId = userId => {
    return CryptoJS.SHA256(user.id).toString()
  }
  const [selectedSkill, setSelectedSkill] = useState({
    name: 'React',
    description: 'A JavaScript library for building user interfaces.',
    roadmap: [
      'Learn Basic Javascript',
      'Learn ES6 Javascript',
      'Learn About JSX elements',
      'Learn About React components',
      'Understand State and Props',
      'Learn Rendering of components in React',
      'Learn Hooks',
      'Learn about React router',
      'Learn about state management',
      'Learn a CSS framework and component library',
      'Learn React forms',
      'Learn a React Framework'
    ],
    references: [
      {
        name: 'React Official Documentation',
        url: 'https://react.dev/learn'
      },
      {
        name: 'Complete React Course for beginners by Hitesh Choudhary [Youtube]',
        url: 'https://youtube.com/playlist?list=PLRAV69dS1uWQos1M1xP6LWN6C-lZvpkmq&si=vh5nHd_gVAefx6p-'
      },
      {
        name: 'FreeCodeCamp React Guide',
        url: 'https://www.freecodecamp.org/learn/front-end-development-libraries/react/'
      },
      {
        name: 'React Full course 2024 by Brocode [Youtube]',
        url: 'https://youtu.be/CgkZ7MvWUAA?si=9cQP31YahxBWFcXE'
      },
      {
        name: 'Learn React with 1 Project by Web Dev Simplified [Youtube]',
        url: 'https://youtu.be/Rh3tobg7hEo?si=fnD7fiiPVjrlzETG'
      },
      {
        name: 'React full course with 4 Projects by Smoljames [Youtube]',
        url: 'https://youtu.be/82PXenL4MGg?si=FUaC4DP8GewJ_clj'
      }
    ],
    projects: [
      {
        name: 'To-Do List App',
        url: 'https://bit.ly/4fP4SDa',
        description:
          'Build a todo app which allow to add, delete , edit and update tasks',
        difficulty: 'Medium',
        Tech: 'React, CSS',
        Liveurl: 'https://kanban-tasks-board.vercel.app/'
      },
      {
        name: 'Weather App',
        url: 'https://bit.ly/46LGJt2',
        description:
          'Build a weather app which display different information about the weather and uses a weather api',
        difficulty: 'Medium',
        Tech: 'React, API',
        Liveurl: 'https://weather.com/en-IN/?Goto=Redirected'
      },
      {
        name: 'portfolio',
        url: 'https://bit.ly/4crqWB8',
        description:
          'Build your own portfolio showcasing your skills and projects',
        difficulty: 'Easy',
        Tech: 'React, CSS',
        Liveurl: ' https://shivaraj-portfolio.vercel.app/'
      }
    ]
  })
  const handleSelection = step => {
    if (!user) return // Ensure there's a user before proceeding
    const userId = user.id
    const hashedUserId = hashUserId(user.id)
    console.log('userr id: ', userId)
    setSelectedSkills(prevState => {
      const updatedSkills = {
        ...prevState,
        [step]: !prevState[step]
      }
      if (isSignedIn) {
        localStorage.setItem(
          `CompletedTasks_${hashedUserId}`,
          JSON.stringify(updatedSkills)
        )
      }
      return updatedSkills
    })
  }

  // This effect runs on component mount to ensure the state is synced with localStorage

  useEffect(() => {
    if (isSignedIn && user) {
      const userId = user.id
      const hashedUserId = hashUserId(user.id)
      console.log('userr id: ', userId)
      // Only load from localStorage if the user is signed in
      const savedSkills = localStorage.getItem(`CompletedTasks_${hashedUserId}`)
      if (savedSkills) {
        setSelectedSkills(JSON.parse(savedSkills))
      }
    } else {
      setSelectedSkills({})
    }
  }, [isSignedIn, user])

  const [tab, setTab] = useState('roadmap')
  const [skills, setSkills] = useState([
    {
      name: 'React',
      description: 'A JavaScript library for building user interfaces.',
      roadmap: [
        'Learn Basic Javascript',
        'Learn ES6 Javascript',
        'Learn About JSX elements',
        'Learn About React components',
        'Understand State and Props',
        'Learn Rendering of components in React',
        'Learn Hooks',
        'Learn about React router',
        'Learn about state management',
        'Learn a CSS framework and component library',
        'Learn React forms',
        'Learn a React Framework'
      ],
      references: [
        {
          name: 'React Official Documentation',
          url: 'https://react.dev/learn'
        },
        {
          name: 'Complete React Course for beginners by Hitesh Choudhary [Youtube]',
          url: 'https://youtube.com/playlist?list=PLRAV69dS1uWQos1M1xP6LWN6C-lZvpkmq&si=vh5nHd_gVAefx6p-'
        },
        {
          name: 'FreeCodeCamp React Guide',
          url: 'https://www.freecodecamp.org/learn/front-end-development-libraries/react/'
        },
        {
          name: 'React Full course 2024 by Brocode [Youtube]',
          url: 'https://youtu.be/CgkZ7MvWUAA?si=9cQP31YahxBWFcXE'
        },
        {
          name: 'Learn React with 1 Project by Web Dev Simplified [Youtube]',
          url: 'https://youtu.be/Rh3tobg7hEo?si=fnD7fiiPVjrlzETG'
        },
        {
          name: 'React full course with 4 Projects by Smoljames [Youtube]',
          url: 'https://youtu.be/82PXenL4MGg?si=FUaC4DP8GewJ_clj'
        }
      ],
      projects: [
        {
          name: 'To-Do List App',
          url: 'https://bit.ly/4fP4SDa',
          description:
            'Build a todo app which allow to add, delete , edit and update tasks',
          difficulty: 'Medium',
          Tech: 'React, CSS',
          Liveurl: 'https://kanban-tasks-board.vercel.app/'
        },
        {
          name: 'Weather App',
          url: 'https://bit.ly/46LGJt2',
          description:
            'Build a weather app which display different information about the weather and uses a weather api',
          difficulty: 'Medium',
          Tech: 'React, API',
          Liveurl: 'https://weather.com/en-IN/?Goto=Redirected'
        },
        {
          name: 'portfolio',
          url: 'https://bit.ly/4crqWB8',
          description:
            'Build your own portfolio showcasing your skills and projects',
          difficulty: 'Easy',
          Tech: 'React, CSS',
          Liveurl: ' https://shivaraj-portfolio.vercel.app/'
        }
      ]
    },

    {
      name: 'Python',
      description:
        'An interpreted, high-level and general-purpose programming language.',
      roadmap: [
        'Learn Python syntax and basic data types',
        'Understand control structures and functions',
        'Learn about object-oriented programming in Python',
        'Understand modules and packages',
        'Learn about file I/O and exception handling',
        'Understand list comprehensions and generators',
        'Learn about decorators and context managers',
        'Understand virtual environments and package management',
        'Learn about testing in Python',
        'Understand web development with Python (e.g., Django, Flask)',
        'Learn about data analysis and visualization libraries',
        'Understand machine learning basics with Python'
      ],
      references: [
        {
          name: 'Python Official Documentation',
          url: 'https://docs.python.org/3/'
        },
        {
          name: 'Real Python',
          url: 'https://realpython.com/'
        },
        {
          name: 'Python for Everybody Specialization',
          url: 'https://www.coursera.org/specializations/python'
        },
        {
          name: 'Python Full course for 2024 by Brocode [Youtube]',
          url: 'https://youtu.be/ix9cRaBkVe0?si=zQ7sDUHMFHuIfNwg'
        },
        {
          name: 'Python Course by Kaggle',
          url: 'https://www.kaggle.com/learn/python'
        },
        {
          name: 'W3schools python course',
          url: ' https://www.w3schools.com/python/'
        }
      ],
      projects: [
        {
          name: 'Web Scraper',
          description: 'Build a web scraper to collect data from a website',
          difficulty: 'Medium',
          Tech: 'Python, BeautifulSoup'
        },
        {
          name: 'Django Blog',
          description: 'Create a blog application using Django framework',
          difficulty: 'Hard',
          Tech: 'Python, Django'
        },
        {
          name: 'Data Visualization Dashboard',
          description:
            'Develop a dashboard to visualize data using Python libraries',
          difficulty: 'Medium',
          Tech: 'Python, Matplotlib, Pandas'
        }
      ]
    },
    {
      name: 'C++',
      description:
        'A general-purpose programming language created as an extension of the C programming language.',
      roadmap: [
        'Learn C++ syntax and basic concepts',
        'Understand pointers and references',
        'Learn about object-oriented programming in C++',
        'Understand templates and generic programming',
        'Learn about the Standard Template Library (STL)',
        'Understand memory management in C++',
        'Learn about exception handling',
        'Understand multithreading and concurrency',
        'Learn about C++11/14/17/20 features',
        'Understand build systems and package managers',
        'Learn about testing frameworks for C++',
        'Understand performance optimization techniques'
      ],
      references: [
        {
          name: 'C++ Reference',
          url: 'https://en.cppreference.com/w/'
        },
        {
          name: 'C++ A complete and modern course for beginners by Hitesh Choudhary',
          url: 'https://youtu.be/FpfHmAkRVK4?si=69TjFAjmt-XzFE4h'
        },
        {
          name: 'C++ Full Course for free by Brocode',
          url: 'https://youtu.be/-TkoO8Z07hI?si=RexG3XgeB2bpiS96'
        },
        {
          name: 'W3schools C++ course',
          url: 'https://www.w3schools.com/cpp/default.asp'
        },
        {
          name: 'LearnCpp.com',
          url: 'https://www.learncpp.com/'
        },
        {
          name: 'C++ Core Guidelines',
          url: 'https://isocpp.github.io/CppCoreGuidelines/CppCoreGuidelines'
        }
      ],
      projects: [
        {
          name: 'Simple Game Engine',
          description: 'Create a basic 2D game engine using C++ and SDL',
          difficulty: 'Hard',
          Tech: 'C++, SDL'
        },
        {
          name: 'Data Structures Library',
          description: 'Implement common data structures in C++',
          difficulty: 'Medium',
          Tech: 'C++'
        },
        {
          name: 'File Compression Tool',
          description: 'Develop a file compression and decompression utility',
          difficulty: 'Hard',
          Tech: 'C++'
        }
      ]
    },
    {
      name: 'MongoDB',
      description:
        'A source-available cross-platform document-oriented database program.',
      roadmap: [
        'Understand NoSQL and document databases',
        'Learn basic CRUD operations',
        'Understand MongoDB data modeling',
        'Learn about indexing in MongoDB',
        'Understand aggregation framework',
        'Learn about replication and sharding',
        'Understand MongoDB security and authentication',
        'Learn about MongoDB Atlas (cloud solution)',
        'Understand MongoDB performance optimization',
        'Learn about MongoDB transactions',
        'Understand change streams',
        'Learn about MongoDB backup and recovery'
      ],
      references: [
        {
          name: 'MongoDB Official Documentation',
          url: 'https://docs.mongodb.com/'
        },
        {
          name: 'MongoDB University',
          url: 'https://university.mongodb.com/'
        },
        {
          name: 'Learn MongoDB in 1 Hour by Brocode [Youtube]',
          url: 'https://youtu.be/c2M-rlkkT5o?si=wRdZDO6oE8baSzBA'
        },
        {
          name: 'MongoDB Node.js Driver Documentation',
          url: 'https://mongodb.github.io/node-mongodb-native/'
        },
        {
          name: 'W3schools MongoDB course',
          url: 'https://www.w3schools.com/mongodb/'
        }
      ],
      projects: [
        {
          name: 'E-commerce Backend',
          description: 'Build a backend for an e-commerce site using MongoDB',
          difficulty: 'Hard',
          Tech: 'MongoDB, Node.js, Express.js'
        },
        {
          name: 'Blog API',
          description: 'Create a RESTful API for a blog using MongoDB',
          difficulty: 'Medium',
          Tech: 'MongoDB, Node.js, Express.js'
        },
        {
          name: 'User Authentication System',
          description: 'Develop a user authentication system with MongoDB',
          difficulty: 'Medium',
          Tech: 'MongoDB, Node.js, Passport.js'
        }
      ]
    },
    {
      name: 'HTML',
      description: 'The standard markup language for creating web pages.',
      roadmap: [
        'Learn basic HTML structure',
        'Understand HTML elements and attributes',
        'Learn about semantic HTML',
        'Understand forms and input types',
        'Learn about tables and lists',
        'Understand meta tags and SEO basics',
        'Learn about HTML5 features',
        'Understand accessibility principles',
        'Learn about responsive design principles',
        'Understand how to embed multimedia'
      ],
      references: [
        {
          name: 'MDN Web Docs - HTML',
          url: 'https://developer.mozilla.org/en-US/docs/Web/HTML'
        },
        {
          name: 'HTML course by Hitesh Choudhary [Youtube]',
          url: 'https://youtube.com/playlist?list=PLu71SKxNbfoDBNF5s-WH6aLbthSEIMhMI&si=yfJcrRWIlfEF4Hy5'
        },
        {
          name: 'HTML course by Brocode [Youtube]',
          url: 'https://youtu.be/HD13eq_Pmp8?si=IqwP6PYZvo14Nm4u'
        },
        {
          name: 'W3Schools HTML Tutorial',
          url: 'https://www.w3schools.com/html/'
        },
        {
          name: 'FreeCodeCamp Responsive Web Design Certification',
          url: 'https://www.freecodecamp.org/learn/2022/responsive-web-design/'
        }
      ],
      projects: [
        {
          name: 'Personal Blog',
          description: 'Create a simple blog layout using HTML',
          difficulty: 'Easy',
          Tech: 'HTML'
        },
        {
          name: 'Restaurant Menu',
          description:
            'Design a restaurant menu page with proper HTML structure',
          difficulty: 'Easy',
          Tech: 'HTML'
        },
        {
          name: 'Survey Form',
          description: 'Build a survey form using various HTML input types',
          difficulty: 'Medium',
          Tech: 'HTML'
        }
      ]
    },
    {
      name: 'CSS',
      description:
        'A stylesheet language used for describing the presentation of a document written in HTML.',
      roadmap: [
        'Learn CSS syntax and selectors',
        'Understand the box model',
        'Learn about positioning and layout',
        'Understand Flexbox and Grid',
        'Learn about responsive design and media queries',
        'Understand CSS animations and transitions',
        'Learn about CSS preprocessors (e.g., Sass)',
        'Understand CSS methodologies (e.g., BEM)',
        'Learn about CSS frameworks',
        'Understand CSS-in-JS concepts'
      ],
      references: [
        {
          name: 'MDN Web Docs - CSS',
          url: 'https://developer.mozilla.org/en-US/docs/Web/CSS'
        },
        {
          name: 'CSS-Tricks',
          url: 'https://css-tricks.com/'
        },
        {
          name: 'FreeCodeCamp CSS Challenges',
          url: 'https://www.freecodecamp.org/learn/responsive-web-design/#basic-css'
        },
        {
          name: 'CSS course by Brocode [Youtube]',
          url: 'https://youtu.be/wRNinF7YQqQ?si=LZgm8LImRMHxX_AQ'
        },
        {
          name: 'W3schools CSS course',
          url: 'https://www.w3schools.com/css/default.asp'
        },
        {
          name: 'TailwindCSS course by Hitesh Choudhary [Youtube]',
          url: ' https://youtu.be/rbSPe1tJowY?si=rezU9nbt-RNqylqI'
        }
      ],
      projects: [
        {
          name: 'Responsive Landing Page',
          description:
            'Create a responsive landing page for a fictional product',
          difficulty: 'Medium',
          Tech: 'HTML, CSS'
        },
        {
          name: 'CSS Art',
          description: 'Create a piece of art using only CSS',
          difficulty: 'Hard',
          Tech: 'CSS'
        },
        {
          name: 'Portfolio Website',
          description:
            'Build a personal portfolio website with advanced CSS techniques',
          difficulty: 'Medium',
          Tech: 'HTML, CSS'
        }
      ]
    },

    {
      name: 'JavaScript',
      description:
        'A high-level, interpreted programming language that conforms to the ECMAScript specification.',
      roadmap: [
        'Learn basic JavaScript syntax',
        'Understand variables, data types, and operators',
        'Learn about control structures (if/else, loops)',
        'Understand functions and scope',
        'Learn about arrays and objects',
        'Understand DOM manipulation',
        'Learn about event handling',
        'Understand asynchronous JavaScript (Promises, async/await)',
        'Learn about ES6+ features',
        'Understand modules and build tools',
        'Learn about testing frameworks',
        'Understand basic algorithms and data structures'
      ],
      references: [
        {
          name: 'MDN Web Docs - JavaScript',
          url: 'https://developer.mozilla.org/en-US/docs/Web/JavaScript'
        },
        {
          name: 'JavaScript.info',
          url: 'https://javascript.info/'
        },
        {
          name: 'Freecodecamp Javascript course',
          url: 'https://www.freecodecamp.org/learn/javascript-algorithms-and-data-structures-v8/'
        },
        {
          name: 'Complete Javascript course by Hitesh Choudhary [Youtube]',
          url: ' https://youtube.com/playlist?list=PLu71SKxNbfoBuX3f4EOACle2y-tRC5Q37&si=TEGmhs1qQkhnZrrZ'
        },
        {
          name: 'W3schools Javascript course',
          url: ' https://www.w3schools.com/js/default.asp'
        },
        {
          name: 'Javascript course by Brocode [Youtube]',
          url: 'https://youtube.com/playlist?list=PLZPZq0r_RZOO1zkgO4bIdfuLpizCeHYKv&si=mwuVBo3XAnum2hX_'
        }
      ],
      projects: [
        {
          name: 'Todo List App',
          description: 'Build a todo list application with CRUD functionality',
          difficulty: 'Medium',
          Tech: 'HTML, CSS, JavaScript'
        },
        {
          name: 'Quiz Game',
          description: 'Create an interactive quiz game with JavaScript',
          difficulty: 'Medium',
          Tech: 'HTML, CSS, JavaScript'
        },
        {
          name: 'Weather App',
          description: 'Build a weather app that fetches data from an API',
          difficulty: 'Hard',
          Tech: 'HTML, CSS, JavaScript, API'
        }
      ]
    },
    {
      name: 'Node.js',
      description:
        'An open-source, cross-platform JavaScript runtime environment that executes JavaScript code outside a web browser.',
      roadmap: [
        'Understand Node.js basics and its architecture',
        'Learn about npm (Node Package Manager)',
        'Understand modules and the CommonJS module system',
        'Learn about the Event Loop',
        'Understand asynchronous programming in Node.js',
        'Learn about file system operations',
        'Understand streams and buffers',
        'Learn about RESTful API development',
        'Understand database integration (e.g., MongoDB, MySQL)',
        'Learn about authentication and security',
        'Understand testing in Node.js',
        'Learn about deployment and scaling Node.js applications'
      ],
      references: [
        {
          name: 'Node.js Official Documentation',
          url: 'https://nodejs.org/en/docs/'
        },
        {
          name: 'Complete Node.js Backend Course by Piyush garg [Youtube]',
          url: 'https://youtube.com/playlist?list=PLinedj3B30sDby4Al-i13hQJGQoRQDfPo&si=FjowL1OFcTkvAlJB'
        },
        {
          name: 'FreeCodeCamp Back End Development and APIs',
          url: 'https://www.freecodecamp.org/learn/back-end-development-and-apis/'
        },
        {
          name: 'Complete Nodejs Backend Course by Sheryians Coding School [Youtube]',
          url: ' https://youtube.com/playlist?list=PLbtI3_MArDOkXRLxdMt1NOMtCS-84ibHH&si=OBHf_gSdQ5Gghqnc'
        },
        {
          name: 'W3schools Nodejs Course',
          url: 'https://www.w3schools.com/nodejs/'
        }
      ],
      projects: [
        {
          name: 'RESTful API',
          description: 'Build a RESTful API for a simple blog application',
          difficulty: 'Medium',
          Tech: 'Node.js, Express.js, MongoDB'
        },
        {
          name: 'Real-time Chat Application',
          description: 'Create a real-time chat application using Socket.io',
          difficulty: 'Hard',
          Tech: 'Node.js, Express.js, Socket.io'
        },
        {
          name: 'Task Manager CLI',
          description: 'Develop a command-line task manager application',
          difficulty: 'Medium',
          Tech: 'Node.js'
        }
      ]
    },
    {
      name: 'SQL',
      description:
        'Structured Query Language for managing and manipulating relational databases.',
      roadmap: [
        'Understand database basics and RDBMS concepts',
        'Learn basic SQL syntax and data types',
        'Master SELECT queries and filtering data',
        'Learn about JOIN operations',
        'Understand aggregation functions and GROUP BY',
        'Learn about subqueries and nested queries',
        'Understand indexes and query optimization',
        'Learn about database design and normalization',
        'Understand transactions and ACID properties',
        'Learn about stored procedures and functions',
        'Understand views and materialized views',
        'Learn about database security and user management'
      ],
      references: [
        {
          name: 'W3Schools SQL Tutorial',
          url: 'https://www.w3schools.com/sql/'
        },
        {
          name: 'SQLZoo',
          url: 'https://sqlzoo.net/'
        },
        {
          name: 'Mode SQL Tutorial',
          url: 'https://mode.com/sql-tutorial/'
        },
        {
          name: 'Complete MySQL Course By Brocode [Youtube]',
          url: 'https://youtu.be/5OdVJbNCSso?si=qqyerT1MdFSN1nsG'
        },
        {
          name: 'SQL course by Scaler',
          url: 'https://www.scaler.com/topics/sql/'
        }
      ],
      projects: [
        {
          name: 'Library Management System',
          description:
            'Design and implement a database for a library management system',
          difficulty: 'Medium',
          Tech: 'SQL, Any RDBMS (e.g., MySQL, PostgreSQL)'
        },
        {
          name: 'E-commerce Database',
          description: 'Create a database schema for an e-commerce platform',
          difficulty: 'Hard',
          Tech: 'SQL, Any RDBMS'
        },
        {
          name: 'Data Analysis Project',
          description:
            'Perform data analysis on a large dataset using SQL queries',
          difficulty: 'Medium',
          Tech: 'SQL, Any RDBMS, Data Visualization Tool'
        }
      ]
    },
    {
      name: 'Git',
      description:
        'A distributed version control system for tracking changes in source code during software development.',
      roadmap: [
        'Understand version control concepts',
        'Learn basic Git commands (init, add, commit, status)',
        'Understand branching and merging',
        'Learn about remote repositories and collaboration',
        'Understand Git workflow models (e.g., GitFlow)',
        'Learn about resolving merge conflicts',
        'Understand Git rebasing and cherry-picking',
        'Learn about Git hooks and automation',
        'Understand Git best practices and conventions',
        'Learn about Git GUIs and integrations',
        'Understand advanced Git features (bisect, reflog)',
        'Learn about Git hosting platforms (GitHub, GitLab, Bitbucket)'
      ],
      references: [
        {
          name: 'Pro Git Book',
          url: 'https://git-scm.com/book/en/v2'
        },
        {
          name: 'Atlassian Git Tutorial',
          url: 'https://www.atlassian.com/git/tutorials'
        },
        {
          name: 'GitHub Skills',
          url: 'https://skills.github.com/'
        },
        { name: 'Git Documentation', url: ' https://git-scm.com/doc' },
        {
          name: 'Github cheatsheet by github',
          url: ' https://education.github.com/git-cheat-sheet-education.pdf'
        }
      ],
      projects: [
        {
          name: 'Personal Website with Version Control',
          description: 'Build a personal website and manage it using Git',
          difficulty: 'Easy',
          Tech: 'Git, HTML, CSS, JavaScript'
        },
        {
          name: 'Collaborative Open Source Project',
          description: 'Contribute to an open-source project on GitHub',
          difficulty: 'Medium',
          Tech: 'Git, GitHub, Relevant programming language'
        },
        {
          name: 'Git Workflow Simulation',
          description:
            'Simulate a team project using Git and practice complex workflows',
          difficulty: 'Hard',
          Tech: 'Git, GitHub/GitLab'
        }
      ]
    }
  ])

  return (
    <div>
      {' '}
      <div role='alert' className='alert alert-info rounded-md'>
        <svg
          xmlns='http://www.w3.org/2000/svg'
          fill='none'
          viewBox='0 0 24 24'
          className='h-6 w-6 shrink-0 stroke-current'
        >
          <path
            strokeLinecap='round'
            strokeLinejoin='round'
            strokeWidth='2'
            d='M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z'
          ></path>
        </svg>
        <span>
          The User's Skills progress tracking graphs feature is in development,
          will be in production soon.
        </span>
      </div>
      <h1 className='text-3xl text-white  text-center font-bold my-8'>
        Start your{' '}
        <span className='underline underline-offset-8 text-sky-400'>
          Development Journey
        </span>{' '}
        right{' '}
        <span className='underline underline-offset-8 text-sky-400'>now!</span>
      </h1>
      <div className='max-w-7xl mx-auto p-4 text-black md:p-6 lg:p-8'>
        <div className='flex flex-col'>
          <div className='flex flex-wrap  justify-start mb-4'>
            {skills.map(skill => (
              <button
                key={skill.name}
                className={`bg-slate-900 self-center transform transition-all hover:scale-105 hover:transform hover:transition-all h-16 w-full lg:w-56 md:w-80  my-2 text-white hover:bg-slate-800 rounded-lg px-4 py-2 mx-2 ${
                  selectedSkill.name === skill.name
                    ? 'bg-sky-400 border-white border-2 text-white'
                    : ''
                }`}
                onClick={() => {
                  setSelectedSkill(skill)
                  toast.info(`${skill.name} Learning Path started`)
                }}
              >
                {skill.name}
              </button>
            ))}
          </div>
        </div>

        <h2 className='text-3xl flex flex-col text-sky-500 underline-offset-8 underline text-center font-bold mb-4'>
          Learning Dock
        </h2>
        <div className='flex flex-wrap justify-center mb-4'>
          <button
            className={`bg-slate-900 self-center h-16 w-60 my-2 text-white hover:bg-slate-800 p-2 mx-2 flex flex-row justify-center items-center  rounded-lg ${
              tab === 'roadmap'
                ? 'bg-blue-500 border-white border-2 text-white'
                : ''
            }`}
            onClick={() => {
              setTab('roadmap')
            }}
          >
            <Book className='mx-2' size={24} />
            Roadmap
          </button>
          <button
            className={`bg-slate-900 self-center h-16 w-60 my-2 text-white hover:bg-slate-800 p-2 mx-2 flex flex-row justify-center items-center  rounded-lg ${
              tab === 'references'
                ? 'bg-blue-500 border-white border-2 text-white'
                : ''
            }`}
            onClick={() => setTab('references')}
          >
            <Target className='mx-2' size={24} />
            References
          </button>
          <button
            className={`bg-slate-900 self-center h-16 w-60 my-2 text-white hover:bg-slate-800 p-2 mx-2 flex flex-row justify-center items-center  rounded-lg ${
              tab === 'projects'
                ? 'bg-blue-500 border-white border-2 text-white'
                : ''
            }`}
            onClick={() => setTab('projects')}
          >
            <Briefcase className='mx-2' size={24} />
            Projects
          </button>
        </div>
        <div className='bg-none text-white font-medium rounded-md p-4'>
          {tab === 'roadmap' && (
            <ul>
              {selectedSkill.roadmap.map(step => (
                <li
                  onClick={() => {
                    !isSignedIn
                      ? toast.error(
                          'Please sign in to track the completion of tasks'
                        )
                      : !handleSelection(step) && !selectedSkills[step]
                      ? toast.success('Task completed succesfully')
                      : toast.warning('incomplerte')
                  }}
                  className={`bg-slate-900 p-4 border-slate-700 border-2 rounded-lg m-2 ${
                    selectedSkills[step]
                      ? 'bg-teal-700 border-teal-400  line-through border-2'
                      : ''
                  }`}
                  key={step}
                >
                  {' '}
                  <input
                    type='radio'
                    checked={selectedSkills[step] || false}
                    onChange={() => handleSelection(step)}
                  />{' '}
                  {''} {step}
                </li>
              ))}
            </ul>
          )}
          {tab === 'references' && (
            <ul>
              {selectedSkill.references.map(reference => (
                <li
                  className='bg-slate-800  p-4 rounded-lg m-2'
                  key={reference}
                >
                  <a
                    href={reference.url}
                    target='_blank'
                    rel='noopener noreferrer'
                    className='text-blue-400 hover:underline'
                  >
                    {reference.name}
                  </a>
                </li>
              ))}
            </ul>
          )}
          {tab === 'projects' && (
            <ul className='  flex lg:flex-row flex-col flex-wrap  align-middle justify-center '>
              {selectedSkill.projects.map(project => (
                <li
                  className='bg-gray-900 border-2 border-gray-800 hover:border-gray-300  hover:scale-105 hover:transform hover:transition-all max-h-[480px]   transform transition-all  md:w-[350px] gap-4 p-4 rounded-xl m-2'
                  key={project}
                >
                  <div className=''>
                    {/*<img
                      className='w-80  md:h-56 h-44  rounded-md'
                      src={project.url}
                      target='_blank'
                    ></img>*/}
                  </div>
                  <div className='p-2  '>
                    {' '}
                    <h2 className='my-1 text-2xl font-semibold'>
                      {project.name}
                    </h2>
                    <span className='flex flex-row justify-between self-center'>
                      <div className='self-center'>
                        {/*<a
                          className='my-1 text-blue-400 '
                          href={project.Liveurl}
                          target='_blank'
                        >
                          Live Link
                        </a>*/}
                        <p className='my-1 font-bold self-center text-lg'>
                          {project.difficulty}
                        </p>{' '}
                      </div>
                    </span>
                    <p className='my-1 text-xl text-gray-300 font-normal'>
                      {project.description}
                    </p>
                  </div>
                </li>
              ))}
            </ul>
          )}
        </div>
      </div>
      <ToastContainer
        position='top-right'
        autoClose={5000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme='colored'
      />
    </div>
  )
}

export default Roadmaps
