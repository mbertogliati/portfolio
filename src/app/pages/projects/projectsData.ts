export interface Project{
    name: string,
    image?: string,
    year: string,
    description: string
    repositoryURL?: string
}
export interface ProjectData{
    'Academic': Project[],
    'Personal': Project[],
    'Professional': Project[]
}
export const projectsData : ProjectData = {
    'Academic': [
      {
        name: "Calculator Application",
        year: "2022",
        description: `
        Practical assignment for 'Syntax and Semantics of Languages' subject.
        <br>
        The goal was to develop a simple calculator application in C using Flex and Bison to generate the lexical and syntax analyzers.
        <br><br>
        The application is able to perform basic arithmetic operations and to handle parentheses and variables.
        <br>
        `,
        repositoryURL: "https://github.com/mbertogliati/sintaxis-app"
      },
      {
        name: "Futbol Cabezon (Wollok Game)",
        year: "2022",
        description: `
        Final project for 'Paradigms of Programming' subject.
        <br>
        The goal was to develop an interactive game following the Object Oriented Paradigm concepts.
        <br><br>
        As a group, we developed a funny soccer game inspired in <a href="https://www.miniplay.com/game/soccer-heads" target="_blank">Soccer Heads</a>, a popular flash game.
        <br>
        We used Wollok, a language designed for teaching object-oriented programming, created and maintained by <a href="https://uqbar.org/#/" target="_blank">UQBAR Foundation</a> (Argentina).
        <br><br>
        Every year, UQBAR hosts the 'Wollok Game Contest', where everyone can submit their game to be selected as the best.
        <br>
        Our game was selected as the best game of 2022.
        `,
        repositoryURL: "https://github.com/mbertogliati/futbolCabezon"
      },
      {
        name: "Simple ORM & Parser Combinator",
        year: "2023",
        description: `
        Two separate assignments for 'Advanced Programming Techniques' subject.
        <br><br>
        <h4>Simple ORM</h4>
        <div style="margin-left: 1rem">
            <p>
                The goal was to develop a simple Object-Relational Mapper (ORM) using Ruby's metaprogramming capabilities.
                <br>
                Its purpose was to understand various metaprogramming concepts in Ruby like method_missing, define_method, instance_eval, etc.
            </p>
        </div>
        <h4>Parser Combinator</h4>
        <div style="margin-left: 1rem">
            <p>
                The goal was to develop a simple parser combinator library in Scala to parse a musical language invented by our teachers.
                The parser was supposed to be able to process a string and return an Object-Oriented representation of the musical language.
                <br>
                Its purpose was to understand object-functional programming concepts in Scala like case classes, pattern matching, higher-order functions, etc.
            </p>
        </div>
        `,
        repositoryURL: "https://github.com/mbertogliati/tadp-tp"
      },
      {
        name: "Simple Operating System",
        year: "2022",
        description: `
        Final project for 'Operating Systems' subject.
        <br><br>
        The goal was to develop a simple, distributed operating system in C, which consisted of a kernel for CPU planification and memory management + a shell for user interaction.
        No file system was implemented.
        <br><br>
        Its purpose was to understand CPU Planification Algorithms, Caching, Memory Management Techniques (like paging and segmentation),
        Synchronization and Concurrency, Inter-Process Communication and File Systems.
        `,
        repositoryURL: "https://github.com/mbertogliati/tp-operativos"
      },
      {
        name: "Plagiarism Detector",
        year: "2023",
        description: `
        Final project for 'Natural Language Processing' subject.
        <br><br>
        The goal was to develop a plagiarism detector using Natural Language Processing techniques.
        <br>
        The application was able to compare a practical assignment to a dataset of documents and to determine if the assignment was plagiarized.
        <br><br>
        Its purpose was to understand various NLP techniques like Bag of Words, Lemmas, TF-IDF, Cosine Similarity, etc.
        <br>
        Additionally, I implemented a web scraping script using Selenium to get information fron the internet based in the document words.
        `,
        repositoryURL: "https://github.com/mbertogliati/nlp-tp"
      },
      {
        name: "State Monitoring of Public Transportation Services and Establishments",
        year: "2023",
        description: `
        Final project for 'Systems Design' subject.
        <br><br>
        The goal was to build a complete system fron scratch. This system was supposed to monitor the state of public
        transportation services and establishments in the city of Buenos Aires for people with disabilities.
        <br>
        These people could create communities to check the state of services of their interest
        and to report incidents in real time. These incidents were notified to other users inside the community.
        <br><br>
        Its purpose was to understand and apply Software Quality Attributes, Software Architecture and Design Patterns.
        <br><br>
        The system was developed using Java's framework Javalin, Handlebars for rendering views and MySQL as the database.
        Additionally, we used the Java library Retrofit to consume public APIs for implementing various functionalities such as phone messaging, email, and location.
        <br><br>
        The system was deployed in a free server provided by <a href="https://render.com/">Render</a>, using Docker and implementing CI/CD concepts.

        `,
        repositoryURL: "https://github.com/mbertogliati/dds-tpa"
      },
      {
        name: "General Purpose Forum",
        year: "2022",
        description: `
        Final project for 'Full Stack Developer' course.
        <br><br>
        The goal was to develop a web page about a topic of out choice using Laravel Framework.
        <br>
        We decided to develop a general purpose forum where users could create post and comment them.
        <br><br>
        Its purpose was to understand various web development concepts like MVC, ORM, RESTful APIs, Authentication, Authorization, etc.
        `,
        repositoryURL: "https://github.com/mbertogliati/foro"
      },

    ],
    'Personal': [
      {
        name: "My Personal Webpage",
        year: "2024",
        description: `
        This is the webpage you are currently visiting.
        <br>
        I developed it using Angular, a TypeScript framework.
        <br><br>
        The main goal of this project was to learn Angular and to have a place to showcase my work.
        <br>
        I also wanted to have a place to write about my experiences and thoughts.
        <br><br>
        The webpage is hosted on GitHub Pages and the source code is available on GitHub.
        <br>
        `,
        repositoryURL: "https://github.com/mbertogliati/portfolio"
      }
    ],
    'Professional': []
}
