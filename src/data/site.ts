export type Shot={src:string;alt:string}
export type Project={title:string;category:string;desc:string;stack:string[];status:string;shots:Shot[];demo:string;github:string;contribution:string;cs:Record<string,string>}
export type ExperienceEntry={role:string;organization:string;dates:string;bullets:string[]}

export const SITE={
  role:"Full-Stack Web Developer",
  intro:"Computer Science undergraduate building full-stack products and real-time web applications.",
  location:"Lucknow, Uttar Pradesh",
  email:"adityasrivastava1730@gmail.com",
  phone:"+91-6387436554",
  linkedin:"",
  github:"",
  resume:"",
  hero:{type:"image",src:"/media/aditya-portrait.png",poster:"",alt:"Aditya Srivastava outdoors",pos:"50% 44%"},
  about:{src:"/media/aditya-about.png",alt:"Aditya Srivastava at an outdoor event"},
  facts:[["Education","B.Tech, Computer Science and Engineering"],["College","Shri Ramswaroop Memorial College of Engineering and Management"],["Graduation","2027"],["Location","Lucknow, Uttar Pradesh"]]
};

export const PROJECTS:Project[]=[
  {title:"CamBridge",category:"Real-time · Full-stack",desc:"A smartphone security camera system that turns phones into remotely accessible monitoring hubs.",
    stack:["React","Node.js","Express.js","WebRTC","Socket.IO","JWT"],status:"Built and deployed",
    shots:[{src:"/media/cambridge.png",alt:"CamBridge project page describing secure remote camera monitoring"}],demo:"https://cam-bridge.vercel.app/",github:"",contribution:"Built and deployed a real-time video surveillance application, including peer-to-peer streaming, device pairing, authentication, and REST APIs.",
    cs:{overview:"CamBridge turns a smartphone into a remotely viewable security camera, making it possible to monitor a space from another device.",problem:"Dedicated camera systems can be costly. CamBridge gives existing smartphones a second life as remote monitoring devices.",goals:"Create a full-stack system for pairing devices and viewing a camera stream remotely, with secure access and responsive video.",solution:"Built a React application backed by Node.js and Express. WebRTC carries peer-to-peer video while Socket.IO supports signaling and session coordination; JWT protects authenticated access.",features:"Smartphone camera monitoring, remote device pairing, peer-to-peer live video, JWT authentication, and REST API-based session management.",architecture:"The React client uses Express REST APIs for device pairing and session management. Socket.IO coordinates WebRTC signaling, and WebRTC carries the peer-to-peer media stream.",implementation:"Developed the React interface and Node.js/Express backend, connecting authenticated REST endpoints with Socket.IO signaling and WebRTC streaming.",challenges:"Coordinating device pairing, session state, and signaling while keeping peer-to-peer video responsive.",lessons:"Real-time products need clear separation between media transport and signaling, plus careful handling of pairing and session state."}},
  {title:"Gym Management & Fitness Tracker",category:"Fitness · Web application",desc:"A workout tracking platform with personalized dashboards and secure session authentication.",
    stack:["React","Node.js","Express.js","MongoDB","REST APIs"],status:"Built",
    shots:[{src:"/media/gym.png",alt:"Gym and fitness tracker sign-in screen"}],demo:"https://gym-one-eosin.vercel.app/",github:"",contribution:"Designed the workout tracking experience, Express REST APIs, and MongoDB schemas for core application data.",
    cs:{overview:"A fitness-oriented web application for tracking workouts through a personalized dashboard.",problem:"Fitness users need a convenient place to manage workout information and view it through a focused dashboard.",goals:"Build a full-stack workout tracker with authenticated access, custom dashboards, and maintainable CRUD APIs.",solution:"Built a React frontend connected to a Node.js and Express backend, with MongoDB schemas for application data and REST APIs for CRUD operations.",features:"Workout tracking, custom user dashboards, secure session authentication, and CRUD REST APIs.",architecture:"The React client communicates with Express REST endpoints; MongoDB stores application data using structured schemas.",implementation:"Designed Express CRUD APIs and MongoDB schemas, then connected them to the React application and its authenticated dashboard.",challenges:"Structuring workout data and API operations so the dashboard can read and update records consistently.",lessons:"Clear API boundaries and carefully structured schemas make it easier to build reliable CRUD-based applications."}},
  {title:"E-commerce Web Application",category:"E-commerce · Full-stack",desc:"A responsive online store with dynamic product catalogs, cart flows, and checkout workflows.",
    stack:["HTML5","CSS3","JavaScript","React","Laravel","MySQL"],status:"Built",
    shots:[{src:"/media/ecommerce.png",alt:"E-commerce storefront landing page design"}],demo:"",github:"",contribution:"Built responsive storefront interfaces and e-commerce flows, and optimized SQL queries for relational data retrieval.",
    cs:{overview:"An end-to-end online shopping application built around product discovery and a straightforward purchase flow.",problem:"Shoppers need a clear way to browse products, manage a cart, and proceed through checkout across desktop and mobile layouts.",goals:"Build a responsive storefront with dynamic product listings, shopping cart behavior, and checkout workflows.",solution:"Created the frontend with HTML, CSS, JavaScript, and React, with Laravel and MySQL supporting application data and relational queries.",features:"Dynamic product catalogs, shopping cart logic, checkout workflows, and responsive page layouts.",architecture:"A React-based user interface presents product and cart flows, with Laravel application services and MySQL relational storage.",implementation:"Built responsive interfaces and product/cart workflows, and optimized SQL queries for relational data fetching.",challenges:"Keeping shopping and checkout interfaces usable across screen sizes while retrieving relational product data efficiently.",lessons:"Responsive layouts and well-structured relational queries both contribute to a smoother end-to-end shopping experience."}}
];

export const SKILLS={
  Languages:["Python","JavaScript","C++","SQL","HTML5","CSS3"],
  "Web & frameworks":["React.js","Node.js","Express.js","MERN Stack","Flask","Tailwind CSS",],
  Databases:["MySQL","SQLite","MongoDB"],
  "APIs & protocols":["REST APIs","WebRTC","Socket.IO","JWT Authentication","JSON"],
  Tools:["Git","GitHub","Postman","VS Code","Vercel"],
  "Core computer science":["Data Structures & Algorithms","Object-Oriented Programming","DBMS","CRUD Operations"]
};

export const EDUCATION={
  institution:"Shri Ramswaroop Memorial College of Engineering and Management",
  degree:"B.Tech — Computer Science and Engineering",
  location:"Lucknow, India",
  dates:"2023–2027"
};

export const EXPERIENCE:ExperienceEntry[]=[
  {role:"Python Full Stack Intern",organization:"SRDT Pvt. Ltd.",dates:"",bullets:["Engineered full-stack applications integrating Python backend services with MySQL and SQLite databases.","Designed backend logic, RESTful API endpoints, and database models for seamless data flow.","Applied frontend-backend architecture patterns with clean separation of concerns and maintainable code.","Used Git and GitHub for version control, collaboration, and code reviews."]},
  {role:"GenAI Study Jam Participant",organization:"Google Developer Groups (GDG), SRMCEM",dates:"",bullets:["Completed hands-on Google Cloud labs exploring Vertex AI, Cloud Functions, and App Engine.","Built and deployed cloud-based API integrations and gained practical experience with Generative AI tooling."]}
];

export const CERTIFICATIONS=[
  ["Python Full Stack Development Internship Certificate","SRDT Pvt. Ltd.","September 2025"],
  ["GenAI Study Jam Certificate","Google Developer Groups (GDG), SRMCEM","November 2024"]
];
