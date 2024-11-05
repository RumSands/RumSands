import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class SharedService {

  constructor() { }
  categories = [
    { categoryid: 1, categoryname: 'English', categoryimg: 'english.jpg' },
    { categoryid: 2, categoryname: 'IT', categoryimg: 'it.jpeg' },
    { categoryid: 3, categoryname: 'Multimedia', categoryimg: 'multi.jpg' }
    ];
  
    
  courses = [
    {
      courseid: 1,
      courseimg: 'multi1.jpg',
      coursename: 'Photography and Video Course',
      descriptioncourse: `
        "Unleash your creativity with our comprehensive Photography and Video Course at Rum Sands Academy!
        Designed for enthusiasts of all skill levels, this course will equip you with the knowledge and practical skills needed to excel in both photography and videography.
  
        - What You Will Learn:
        • Fundamentals of Photography: Understand camera settings, composition, lighting, and the principles of taking stunning photographs.
        • Videography Techniques: Learn how to capture high-quality video, including camera movement, framing, and storytelling through video.
        • Post-Production Skills: Gain proficiency in editing photos and videos using industry-standard software to enhance your final products.
        • Creative Projects: Engage in hands-on projects that challenge your skills and encourage innovative thinking.
        • Portfolio Development: Build a personal portfolio showcasing your best work, preparing you for future opportunities in photography and videography.
  
        - Why Choose This Course?
        Our experienced instructors provide personalized guidance in a collaborative environment, ensuring that you develop your unique style while mastering technical skills. Whether you aspire to be a professional photographer or simply want to capture life's moments beautifully, this course will set you on the right path.
  
        Enroll now and start your journey into the world of photography and videography with Rum Sands Academy!
        "
      `,
      categoryid: 3
    },
    {
      courseid: 2,
      courseimg: 'it1.jpg',
      coursename: 'OCP Oracle',
      descriptioncourse: `
        "- OCP Oracle Certified Professional

        Get ready to enhance your skills with Rum Sands Academy!
        Our distinguished OCP Oracle course opens the door to the world of data management and analytics with exceptional skills at competitive prices.

    - What You Will Learn: 
    • Oracle Database Fundamentals: Understand the architecture and components of Oracle databases.

    • Advanced SQL Programming: Master advanced SQL queries and database manipulation techniques.

    • Performance Tuning: Learn methods to optimize database performance for efficient data retrieval.

    • Backup and Recovery: Gain insights into best practices for database backup and recovery.

    • Data Security: Explore essential data security measures and compliance requirements.

    - Why Choose This Course?
    Achieve your OCP Oracle certification and become proficient in data management. Our interactive learning environment and hands-on projects will equip you with the skills necessary to excel in the data-driven world.

    Join us now and take your career to new heights with the OCP Oracle course at Rum Sands Academy!"
          `,
      categoryid: 2
    } ,
    {
      courseid: 3,
      courseimg: 'it2.jpeg',
      coursename: 'Introduction CEH',
      descriptioncourse: `
       "- Introduction to CEH (Certified Ethical Hacker)

The Certified Ethical Hacker (CEH) course at Rum Sands Academy paves the way for a deep understanding of penetration testing and ethical hacking. This course is essential for anyone looking to enter the field of cybersecurity and gain the skills needed to protect systems and networks effectively.

-  What You Will Learn: 
• Fundamentals of Cybersecurity: Understand the basic principles of cybersecurity and how to protect sensitive information.
• Hacking Techniques: Explore the tools and techniques used in ethical hacking to test network security.
• Defense Strategies: Learn how to secure systems and networks against potential threats and cyber-attacks.
• Vulnerability Analysis: Discover how to identify security vulnerabilities and conduct comprehensive penetration tests.
• Reporting and Analysis: Develop skills in reporting the results of penetration tests and providing recommendations for enhancing security.

- Why Choose This Course? 
The CEH course offers a unique opportunity to dive into the world of penetration testing, helping you build a successful career in cybersecurity. With our interactive approach and hands-on workshops, you will be able to apply what you learn in real-world scenarios, ensuring a practical understanding of the field.

Embark on this exciting journey towards cybersecurity expertise and become a vital part of the solution to protect systems and networks from digital threats. Enroll now at Rum Sands Academy to start your path to becoming a Certified Ethical Hacker!"
          `,
      categoryid: 2
    } ,
    {
      courseid: 4,
      courseimg: 'multi2.jpg',
      coursename: 'Animation',
      descriptioncourse: `
     "Bring your ideas to life with our exciting Animation Course at Rum Sands Academy! 
      This course is designed for beginners and aspiring animators who want to learn the art and techniques of animation, from basic concepts to advanced skills.

      - What You Will Learn: 
      • Principles of Animation: Understand the fundamental principles that make animations come alive, including timing, spacing, and movement.
      • 2D Animation Techniques: Explore various techniques for creating captivating 2D animations using industry-standard software.
      • 3D Animation Basics: Get introduced to 3D modeling and animation, learning how to create characters and environments in a three-dimensional space.
      • Storyboarding: Learn how to plan your animations through effective storyboarding and character development.
      • Post-Production and Editing: Gain skills in editing and enhancing your animations to create polished final products.

      - Why Choose This Course? 
      Our experienced instructors provide hands-on training and personalized feedback, ensuring that you develop your unique style and voice as an animator. With engaging projects and a collaborative learning environment, you'll be well-equipped to embark on a successful career in animation.

      Join us today and start your journey into the dynamic world of animation with Rum Sands Academy!"
          `,
      categoryid: 3
    } ,
    {
      courseid: 5,
      courseimg: 'eng1.jpg',
      coursename: 'Conversation Courses',
      descriptioncourse: `
    "Unlock the power of effective communication with our Conversation Courses at Rum Sands Academy! Whether you're looking to improve your speaking skills for personal growth, travel, or professional development, our courses are designed to help you become a confident and fluent speaker.

      - What You Will Learn: 
      • Speaking with Confidence: Build your confidence in everyday conversations.
      • Pronunciation and Accent: Improve your pronunciation and work on your accent to sound more natural.
      • Listening Skills: Develop the ability to understand native speakers in real-life situations.
      • Interactive Dialogue Practice: Participate in engaging dialogues and discussions on various topics.
      • Cultural Insights: Gain insights into cultural nuances to enhance your communication.

      - Why Choose This Course? 
      Our conversation courses are tailored to all levels, from beginners to advanced speakers. With a focus on practical communication, you'll be able to apply your new skills immediately in real-world situations. Join us and speak with fluency and confidence!"
          `,
      categoryid: 1
    },
    {
      courseid: 6,
      courseimg: 'it3.jpg',
      coursename: 'PTP',
      descriptioncourse: `
      "- PTP (Penetration Testing Professional)
      Master the art of cybersecurity with our Penetration Testing Professional (PTP) course at Rum Sands Academy! This course is specifically designed for individuals who aspire to excel in penetration testing and achieve the eCPPT certification, equipping you with the skills needed to thrive in the cybersecurity industry.

      - What You Will Learn: 
      • Gain a comprehensive understanding of penetration testing fundamentals, including key techniques and methodologies.
      • Practice hands-on penetration testing skills through real-world scenarios to enhance your practical experience.
      • Prepare thoroughly to successfully pass the eCPPT exam and earn a recognized certification that boosts your career prospects.

      - Course Benefits: 
      • Clear and easy-to-understand explanations make complex concepts accessible.
      • Emphasis on practical, hands-on application to build real-world expertise.
      • Interactive learning environment available both online and in-person, providing flexibility and engagement.

      - Career Opportunities with eCPPT Certification: 
      • Cybersecurity Specialist: Safeguard organizations from cyber threats and strengthen security measures.
      • Penetration Tester: Conduct security assessments and identify vulnerabilities in systems and networks.
      • Information Security Professional: Protect sensitive information and implement security best practices.
      • Network Analyst: Monitor network security and respond to incidents effectively.
      • System Administrator: Manage and secure IT infrastructure, ensuring system integrity and availability.

      Start your journey towards a rewarding career in cybersecurity. Enroll in our PTP course at Rum Sands Academy and open doors to new career opportunities with the eCPPT certification!"
          `,
      categoryid: 2
    } ,
    {
      courseid: 7,
      courseimg: 'multi3.jpg',
      coursename: 'Sound Engineering and Dubbing Course',
      descriptioncourse: `
     "Dive into the world of sound with our comprehensive Sound Engineering and Dubbing Course at Rum Sands Academy! 
      This course is designed for aspiring sound engineers, voice artists, and anyone interested in mastering the art of sound production and dubbing.

      - What You Will Learn: 
      • Fundamentals of Sound Engineering: Understand sound theory, equipment, and techniques for capturing high-quality audio.
      • Recording Techniques: Learn how to set up recording sessions, including mic placement and acoustic treatment, for various types of projects.
      • Editing and Mixing: Gain proficiency in editing audio tracks and mixing sound to create professional-quality recordings.
      • Dubbing Techniques: Discover the processes involved in dubbing for film, television, and video games, including voice synchronization and sound effects.
      • Post-Production Skills: Enhance your audio projects through mastering and finalization techniques, ensuring your sound is polished and ready for distribution.

      - Why Choose This Course? 
      Our experienced instructors provide hands-on training and personalized feedback, creating a supportive environment where you can develop your skills and creativity. With practical projects and real-world applications, you will gain the confidence to pursue a career in sound engineering and dubbing.

      Enroll now and embark on your journey into the fascinating world of sound with Rum Sands Academy!"
          `,
      categoryid: 3
    } ,
    {
      courseid: 8,
      courseimg: 'multi4.jpg',
      coursename: 'Cinema 4D',
      descriptioncourse: `
    "Embark on a creative journey with our Cinema 4D Course at Rum Sands Academy!
      This course is designed for aspiring 3D artists and animators who want to master the powerful tools of Cinema 4D and bring their ideas to life in three dimensions.

      - What You Will Learn: 
      • Introduction to Cinema 4D: Familiarize yourself with the interface and essential features of Cinema 4D, setting the foundation for your 3D journey.
      • 3D Modeling Techniques: Learn various modeling techniques to create detailed 3D objects and environments using Cinema 4D's robust tools.
      • Animation Basics: Discover the principles of animation and how to animate objects and characters effectively in a 3D space.
      • Texturing and Lighting: Understand the importance of texturing and lighting in 3D design and how to enhance your models with realistic materials and lighting setups.
      • Rendering and Post-Production: Gain skills in rendering your projects and exploring post-production techniques to finalize your work.

      - Why Choose This Course? 
      Our experienced instructors provide hands-on training and personalized feedback, creating an engaging learning environment. With practical projects and real-world applications, you will develop the skills needed to excel in the competitive field of 3D design and animation.

      Join us today and unlock your creative potential with Cinema 4D at Rum Sands Academy!"
          `,
      categoryid: 3
    } ,
    {
      courseid: 9,
      courseimg: 'multi5.jpg',
      coursename: 'Photoshop and Illustrator',
      descriptioncourse: `
      "Elevate your design skills with our Photoshop and Illustrator Course at Rum Sands Academy! 
      This comprehensive course is designed for aspiring graphic designers and creative individuals who want to master the essential tools for digital design.

      - What You Will Learn: 
      • Introduction to Photoshop: Explore the fundamentals of Adobe Photoshop, including image editing, retouching, and compositing techniques.
      • Creative Illustration with Illustrator: Learn how to create stunning vector graphics and illustrations using Adobe Illustrator.
      • Design Principles: Understand the key principles of design, including color theory, typography, and layout, to create visually appealing artwork.
      • Hands-On Projects: Engage in practical projects that challenge your creativity and allow you to apply your skills in real-world scenarios.
      • Portfolio Development: Build a professional portfolio showcasing your best designs, preparing you for opportunities in the creative industry.

      - Why Choose This Course? 
      Our experienced instructors provide personalized guidance and support, ensuring that you gain a deep understanding of both software programs. With a focus on creativity and practical application, you will develop the skills needed to excel in the competitive field of graphic design.

      Join us today and start your journey toward becoming a proficient designer with Rum Sands Academy!"
          `,
      categoryid: 3
    } ,
    {
      courseid: 10,
      courseimg: 'multi6.jpg',
      coursename: 'Digital Editing',
      descriptioncourse: `
     "Unleash your creativity with our Digital Editing Course at Rum Sands Academy! 
      This course is designed for aspiring editors and content creators who want to master the art of digital editing and enhance their storytelling skills.

      - What You Will Learn: 
      • Introduction to Digital Editing: Understand the fundamentals of digital editing, including software tools, techniques, and workflows.
      • Video Editing Techniques: Learn how to edit video footage, add transitions, effects, and sound to create polished final products.
      • Audio Editing Skills: Gain proficiency in editing audio tracks, including noise reduction, sound enhancement, and synchronization with video.
      • Color Correction and Grading: Discover techniques for color correction and grading to enhance the visual quality of your projects.
      • Project Workflow Management: Explore best practices for organizing and managing editing projects to streamline your workflow.

      - Why Choose This Course? 
      Our experienced instructors provide hands-on training and personalized feedback, ensuring that you develop your unique style and technical skills. With engaging projects and practical applications, you will gain the confidence to create compelling digital content for various platforms.

      Enroll now and embark on your journey into the exciting world of digital editing with Rum Sands Academy!"
          `,
      categoryid: 3
    } ,
    {
      courseid: 11,
      courseimg: 'eng2.jpg',
      coursename: 'Interactive English courses for ages 6 - 16 years',
      descriptioncourse: `
    "Unlock the world of language for your child with our Interactive English Courses at Rum Sands Academy! Tailored for ages 6 to 16, our courses provide a fun and engaging environment for young learners to develop their English language skills.

    - What Your Child Will Learn: 
    • Basic to Advanced English: Courses designed to cater to different proficiency levels, from beginners to more advanced learners.
    • Speaking and Listening Skills: Interactive activities that promote conversational skills and improve listening comprehension.
    • Reading and Writing: Engaging reading materials and writing exercises to enhance literacy skills.
    • Creative Learning: Fun games, songs, and role-playing activities to make learning English enjoyable.
    • Cultural Awareness: Exposure to different cultures through stories, discussions, and multimedia resources.

    - Why Choose This Course? 
    Our interactive approach ensures that children are not only learning but also enjoying the process. With experienced instructors and a focus on communication, your child will gain confidence in their English skills while making new friends.

    Enroll your child today and watch them thrive in a supportive and stimulating environment at Rum Sands Academy!"
          `,
      categoryid: 1
    } ,
    {
      courseid: 12,
      courseimg: 'it4.jpg',
      coursename: 'Python',
      descriptioncourse: `
      "Embark on an exciting journey to explore the world of Python and become proficient in application development with Rum Sands Academy. Our course provides you with the essential skills needed to harness the power of Python for various applications, making it perfect for beginners and those looking to enhance their programming abilities.

      - What You Will Learn: 
      • Introduction to Python: Understand the basics of Python programming, including syntax, data types, and control structures.
      • Developing Applications: Gain hands-on experience in building your own applications, from simple scripts to complex software solutions.
      • Working with Libraries: Learn to use popular Python libraries and frameworks that enhance your development capabilities.
      • Problem-Solving Techniques: Master techniques to solve real-world problems through programming.
      • Best Practices in Coding: Discover industry best practices to write clean, efficient, and maintainable code.

      - Why Choose This Course? 
      Our interactive approach and practical assignments ensure that you not only learn Python but also apply it effectively. By the end of the course, you will have the confidence and skills to develop your own applications and tackle challenges in the programming world.

      Unlock your potential with Python and start building the future. Enroll now in our Python Programming course at Rum Sands Academy!"
          `,
      categoryid: 2
    } ,
    {
      courseid: 13,
      courseimg: 'it5.jpg',
      coursename: 'MCITP/SA',
      descriptioncourse: `
      "- MCITP/SA - Microsoft Certified IT Professional/System Administrator

        Prepare for an exciting journey into the world of technology with our MCITP/SA course at Rum Sands Academy! This course opens new horizons filled with challenges and innovative technologies that will enhance your career.

        - What You Will Learn: 
        • Microsoft Technologies: Gain in-depth knowledge of Microsoft server technologies and system administration practices.

        • Network Management: Learn how to manage and maintain network infrastructure efficiently.

        • Security Protocols: Understand essential security protocols and best practices to protect your systems.

        • Troubleshooting Techniques: Master troubleshooting techniques to diagnose and resolve common IT issues.

        • Professional Skills Development: Enhance your professional skills in management and security to shine in your career.

        - Why Choose This Course? 
        Join us and become part of your professional transformation! Our interactive learning environment and hands-on training will equip you with the skills needed to excel in the IT field.

        Let your career path shine with management and security skills gained through the MCITP/SA course at Rum Sands Academy!"
          `,
      categoryid: 2
    } ,
    {
      courseid: 14,
      courseimg: 'it6.jpg',
      coursename: 'CCNA',
      descriptioncourse: `
     "- CCNA - Cisco Certified Network Associate

      Join us at Rum Sands Academy for an exciting journey with our competitively priced CCNA course!
      Challenge your mind and break through technological barriers as you delve into the world of networking.

      - What You Will Learn: 
      • Networking Fundamentals: Understand the basics of networking, including protocols, models, and topologies.

      • Router and Switch Configuration: Gain hands-on experience in configuring and managing Cisco routers and switches.

      • Network Security: Learn essential security practices to protect networks from potential threats.

      • Troubleshooting Techniques: Develop skills in diagnosing and resolving network issues effectively.

      • Real-World Applications: Explore practical scenarios and projects to apply your knowledge in real-world situations.

      - Why Choose This Course? 
      By joining the CCNA community at Rum Sands Academy, you will enhance your skills and open new horizons in the technology field. Our interactive learning approach and hands-on training will prepare you for a successful career in networking.

      Get ready to elevate your career and embrace the world of technology with the CCNA course!"
          `,
      categoryid: 2
    } ,
    {
      courseid: 15,
      courseimg: 'it7.jpg',
      coursename: 'Python & Ai',
      descriptioncourse: `
    "- Python AI - Mastering Application Development with Artificial Intelligence

      Embark on an exciting journey exploring the world of Python AI and master application development using artificial intelligence! 
      Our course offers a unique opportunity to integrate Python with AI to create innovative projects.

      - What You Will Learn: 
      • Python Fundamentals: Strengthen your programming skills with a solid foundation in Python.

      • Introduction to AI: Understand the core concepts and techniques of artificial intelligence.

      • Machine Learning Algorithms: Learn how to implement various machine learning algorithms using Python libraries.

      • Data Handling: Explore techniques for data manipulation and preprocessing for AI applications.

      • Project Development: Engage in hands-on projects that combine Python and AI to solve real-world problems.

      - Why Choose This Course? 
      Our Python AI course will empower you to combine programming and artificial intelligence to create cutting-edge applications. With expert instruction and a collaborative learning environment, you will be well-equipped to embark on your journey into the world of innovative programming.

      Contact us now to kickstart your adventure in Python AI at Rum Sands Academy!"
          `,
      categoryid: 2
    } ,
    {
      courseid: 16,
      courseimg: 'eng3.jpg',
      coursename: 'IELTS',
      descriptioncourse: `
    "Master Your English Skills with Our IELTS Preparation Course at Rum Sands Academy!

      Prepare to excel in the IELTS exam with our comprehensive course, designed to help you achieve the highest possible scores. Whether your goal is to study abroad, work in an English-speaking environment, or simply improve your language skills, our course provides everything you need.

      - What You Will Learn:
      • Reading Skills: Develop techniques to quickly understand and analyze various text types found in the IELTS exam.
      • Writing Skills: Improve your ability to write structured essays, reports, and letters with precision and clarity.
      • Speaking Confidence: Engage in practical speaking exercises to boost your fluency and comfort in interviews or oral tests.
      • Listening Skills: Learn how to efficiently listen to and understand conversations, lectures, and announcements in real-world settings.
      • Test Strategies: Master time management and exam strategies to maximize your performance on all four components of the IELTS.

      - Why Choose This Course?
      ✅ Flexible Learning Options: Whether online or in-person, our course fits your schedule with classes available from 9 AM to 10 PM, seven days a week.
      ✅ Tailored for All Skill Levels: Our course is suitable for both beginners and advanced learners, ensuring personalized support for everyone.
      ✅ Expert Trainers: Learn from experienced trainers with 20 years of experience helping students succeed in IELTS.
      ✅ Focused Training: With 120 hours of preparation, you'll cover every essential skill needed for IELTS success.
      ✅ Comprehensive Foundation: Our course also provides a strong English language foundation, starting at beginner levels and progressing to advanced.

      Join Rum Sands Academy today and take the next step toward mastering English and achieving your goals with the IELTS exam!"
          `,
      categoryid: 1
    } ,
    {
      courseid: 17,
      courseimg: 'it8.JPG',
      coursename: 'Asp.Net',
      descriptioncourse: `
    "Unlock your potential in web development with our comprehensive ASP.NET course. Designed for aspiring developers and tech enthusiasts, this course offers a deep dive into building modern web applications using the latest ASP.NET technologies.

    - What You Will Learn:
    • Fundamentals of ASP.NET and its architecture
    • Creating dynamic web pages with ASP.NET MVC
    • Working with databases using Entity Framework
    • Implementing security features for web applications
    • Developing RESTful APIs for seamless data interaction
    • Best practices for responsive design and user experience

    - Why Choose This Course?
    Our hands-on approach ensures that you gain practical experience through real-world projects. By the end of this course, you will have the skills needed to create robust, secure, and scalable web applications that stand out in the industry.

    Join us and take your first step towards becoming a proficient web developer with ASP.NET!"
          `,
      categoryid: 2
    } ,
    {
      courseid: 18,
      courseimg: 'eng4.png',
      coursename: 'English Language Courses',
      descriptioncourse: `
   "Enhance your English language skills with our comprehensive English Language Courses at Rum Sands Academy! Whether you're a beginner or looking to refine your proficiency, our courses are designed to meet your individual needs and help you achieve your language goals.

    - What You Will Learn: 
    • Speaking and Listening: Develop fluency and comprehension through interactive conversations and listening exercises.
    • Reading and Writing: Improve your reading comprehension and writing skills with engaging materials and structured practice.
    • Grammar and Vocabulary: Master essential grammar rules and expand your vocabulary for effective communication.
    • Business English: Tailored modules to help professionals improve their English for the workplace.

    - Why Choose This Course? 
    Our experienced instructors provide personalized attention in a supportive environment, ensuring that you progress at your own pace. With engaging activities and practical exercises, you will gain the confidence to use English in everyday situations and professional contexts.

    Join us today and embark on your journey to fluency with Rum Sands Academy's English Language Courses!"
          `,
      categoryid: 1
    } ,
    {
      courseid: 19,
      courseimg: 'it9.jpg',
      coursename: 'Java',
      descriptioncourse: `
      "Dive into the world of Java programming with our comprehensive course designed for both beginners and experienced developers. This course will equip you with the essential skills to build robust, high-performance applications using Java.

      - What You Will Learn:
      • Introduction to Java: Understand the fundamentals of Java programming, including syntax, data types, and control structures.

      • Object-Oriented Programming: Explore the principles of OOP, including classes, objects, inheritance, and polymorphism.

      • Building Applications: Gain hands-on experience in developing applications, from desktop software to web applications.

      • Working with Java Frameworks: Learn to use popular frameworks like Spring and Hibernate to enhance your development capabilities.

      • Exception Handling and Debugging: Master techniques for handling errors and debugging your code effectively.

      • Best Practices in Coding: Discover industry best practices for writing clean, efficient, and maintainable Java code.

      - Why Choose This Course?
      Our interactive learning approach combines theoretical knowledge with practical assignments, ensuring you can apply what you learn. By the end of the course, you will be equipped with the confidence and skills to tackle real-world programming challenges and create powerful Java applications.

      Join us and take the first step towards becoming a proficient Java developer!"
          `,
      categoryid: 2
    } ,
    {
      courseid: 20,
      courseimg: 'eng5.jpg',
      coursename: 'TOEFL',
      descriptioncourse: `
     "Achieve Success with Our TOEFL Preparation Course at Rum Sands Academy!

      Prepare to excel in the TOEFL exam with our specially designed course, providing you with the skills and strategies necessary to achieve top scores. Whether you're aiming for university admission or professional opportunities, our course will equip you with the knowledge needed to succeed.

      - What You Will Learn:
      • Reading Skills: Enhance your ability to comprehend and analyze academic texts, a key component of the TOEFL exam.
      • Writing Skills: Develop clear and structured essay-writing skills to express your ideas effectively in the writing section.
      • Speaking Confidence: Engage in speaking exercises that mirror the TOEFL tasks, improving your fluency and articulation.
      • Listening Skills: Improve your ability to understand academic lectures, conversations, and discussions, helping you excel in the listening section.
      • Exam Strategies: Learn key test-taking techniques, including time management and answering strategies, to maximize your score across all four sections.

      - Why Choose This Course?
      ✅ Flexible Learning Options: Choose between online or in-person sessions, with class times available from 9 AM to 10 PM, seven days a week, to suit your schedule.
      ✅ Tailored for All Levels: From beginners to advanced learners, our course is structured to meet all skill levels, ensuring personalized support.
      ✅ Experienced Trainers: With 20 years of expertise, our trainers are dedicated to helping you achieve your desired TOEFL score.
      ✅ Comprehensive Training: Our course includes 120 hours of preparation, covering every essential TOEFL skill and strategy.
      ✅ English Language Foundation: Start from the basics and progress through advanced levels, ensuring you're fully prepared for the TOEFL exam.

      Join Rum Sands Academy today and take your English skills to the next level with our TOEFL Preparation Course. Get ready to achieve your academic and professional dreams!"
          `,
      categoryid: 1
    } ,
    {
      courseid: 21,
      courseimg: 'it10.jpg',
      coursename: 'ASP Core',
      descriptioncourse: `
     "Take your web development skills to the next level with our comprehensive ASP.NET Core course at Rum Sands Academy. This course is designed to provide you with the essential skills to build modern, high-performance web applications using the latest technologies in ASP.NET Core.

      - What You Will Learn: 
      • Introduction to ASP.NET Core: Understand the fundamentals of ASP.NET Core, including its architecture and key features.
      • Web Application Development: Learn to build dynamic, responsive web applications using MVC (Model-View-Controller) design pattern.
      • API Development: Gain hands-on experience in creating RESTful APIs for connecting front-end and back-end applications.
      • Security Practices: Master techniques for securing web applications and managing user authentication and authorization.
      • Deploying Applications: Discover how to deploy and host your web applications on different platforms, including cloud services.

      - Why Choose This Course? 
      Our interactive approach combines theory with practical assignments, ensuring you gain real-world experience in ASP.NET Core development. By the end of the course, you’ll be well-equipped to build, deploy, and maintain robust web applications.

      Start your journey in web development with ASP.NET Core and join Rum Sands Academy to unlock new career opportunities."
          `,
      categoryid: 2
    } ,
    {
      courseid: 22,
      courseimg: 'it11.jpeg',
      coursename: 'Cyber Security',
      descriptioncourse: `
    "Prepare to face modern cyber challenges and build a strong defense with the Cybersecurity Essentials course at RAM Sands Academy! This comprehensive course will equip you with the latest tools and techniques to safeguard against cyber threats.

    - What You Will Learn: 
    • Understanding Cyber Threats: Gain insights into various cyber threats and how they impact organizations.

    • Defensive Strategies: Learn the latest defensive strategies and technologies to protect systems and networks.

    • Incident Response: Develop skills in identifying and responding to security incidents effectively.

    • Risk Management: Understand risk management principles and how to apply them in cybersecurity.

    • Hands-On Experience: Engage in practical exercises and real-world scenarios to reinforce your learning.

    - Why Choose This Course?
    Join a community of cybersecurity defenders and prepare for inspiring challenges ahead! Our interactive approach and hands-on workshops will ensure you gain practical skills and knowledge essential for a successful career in cybersecurity.

    Take the first step towards becoming a guardian of the digital world with Rum Sands Academy!"
          `,
      categoryid: 2
    }
  ];







}
