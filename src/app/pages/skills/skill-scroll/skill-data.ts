import {Skill} from "../skill";
export const languagesAndFrameworks =
{
  programmingLanguages :[
    {
      name: "Javascript",
      iconURL: "/assets/img/skills/js.png",
      currentLevel: 0.26,
      goalLevel: 0.4,
      exampleCode: "document.getElementById('welcome-message').innerHTML = 'Hi Mom!';",
      description: "I've learned vanilla javascript to know the basics about front-end web development, including:<br> " +
        "<ul>" +
        " <li>DOM Handling</li>" +
        "<li>JQuery</li>" +
        "<li>AJAX Requests</li>" +
        "<li>Promises & Callbacks</li>" +
        "<li>JSON</li>" +
        "</ul>"
    },
    {
      name: "C",
      iconURL: "/assets/img/skills/c.png",
      currentLevel: 0.26,
      goalLevel: 0.4,
      exampleCode: "int a = 1;\nfree(&a); //DON'T! ",
      description: "I've entered the coding world with this language and learned a lot through the process. Some of the key conpcets I've learned are:<br> " +
        "<ul>" +
        "<li>Procedural programming</li>" +
        "<li>Pointers and manual memory management</li>" +
        "<li>Algorithms and data structures</li>" +
        "<li>Concurrent programming (Threads, Semaphores, Deadlocks and Race Conditions)</li>" +
        "<li>C Standard</li>" +
        "<li>Flex & Bison (Lexers & Parsers)</li>" +
        "<li>Build Tools (Makefile)</li>" +
        "<li>Linux OS</li>" +
        "</ul>"
    },
    {
      name: "Java",
      iconURL: "/assets/img/skills/java.png",
      currentLevel: 0.26,
      goalLevel: 0.4,
      exampleCode: "List<String> list = new ArrayList<>();\nlist.add(\"Lists in java suck!\");",
      description: "My entry point to object-oriented programming. I've learned about:<br> " +
        "<ul>" +
        "<li>JVM & Bytecode</li>" +
        "<li>Java Swing Library</li>" +
        "<li>JUnit & Mockito</li>" +
        "<li>Spring Framework</li>" +
        "</ul>"
    },
    {
      name: "Python",
      iconURL: "/assets/img/skills/python.png",
      currentLevel: 0.26,
      goalLevel: 0.4,
      exampleCode: "hi = \"Hi\"\n" +
        "hi = 1\n" +
        "print(\"This is so wrong and yet it works: \" + hi)",
      description: "My entry point to object-oriented programming. I've learned about:<br> " +
        "<ul>" +
        "<li>Numpy</li>" +
        "<li>Pandas</li>" +
        "<li>JUnit & Mockito</li>" +
        "</ul>"
    },
    {
      name: "Ruby",
      iconURL: "/assets/img/skills/ruby.png",
      currentLevel: 0.26,
      goalLevel: 0.4,
      exampleCode: "def method_missing(name, *args)\n  puts \"This language is so weird\"\nend",
      description: "A very interesting programming language with an intuitive and consistent meta-model that allows an unprecedented flexibility:<br> " +
        "<ul>" +
        "<li>Class opening</li>" +
        "<li>Blocks</li>" +
        "<li>Ruby Metamodel</li>" +
        "<ul>" +
        "<li>Instance methods vs Class methods</li>" +
        "<li>Singleton Classes</li>" +
        "<li>Method Missing Handling</li>" +
        "</ul>" +
        "</ul>"
    },
    {
      name: "Scala",
      iconURL: "/assets/img/skills/scala.png",
      currentLevel: 0.26,
      goalLevel: 0.4,
      exampleCode: "def either[U >: T](c: Container[U]) : Container[U] = {\n" +
        "    new Container[U]({s => \"This language has the best type system of all!\"})\n" +
        "  }",
      description: "My first touch with hybrid technologies. An object-functional language with one of the best sound type systems out there. The key concepts I learned are:<br>" +
        "<ul>" +
        "<li>Hybrid technology handling</li>" +
        "<li>Variance and Covariance</li>" +
        "<li>Upper bounds & Lower bounds</li>" +
        "<li>Structural typing</li>" +
        "</ul>"
    },
    {
      name: "Haskell",
      iconURL: "/assets/img/skills/haskell.png",
      currentLevel: 0.26,
      goalLevel: 0.4,
      exampleCode: "fib 0 = 1 \n" +
        "fib 1 = 1 \n" +
        "fib n = + (fib (- n 1)) (fib (- n 2)) --Functional is awesome!",
      description: "One of the few pure-functional languages out there. I learned it as an intro to functional programming, including concepts like:<br>" +
        "<ul>" +
        "<li>Pattern Matching</li>" +
        "<li>Purism (Referential transparency / no side-effects) </li>" +
        "<li>Higher Order Functions (Partial application, composition, lambdas)</li>" +
        "<li>Endofunctors & monads</li>" +
        "<li>Property Testing</li>" +
        "</ul>"
    },
    {
      name: "PHP",
      iconURL: "/assets/img/skills/php.png",
      currentLevel: 0.26,
      goalLevel: 0.4,
      exampleCode:  "$message = \"Hi Mom!\";\n"+
        "$bar = \"message\";\n"+
        "echo $$bar; //Outputs 'Hi Mom!', interesting...",
      description: "My first approach to web development, including the following concepts:<br>" +
        "<ul>" +
        "<li>Variable variables</li>" +
        "<li>Built-in HTTP Methods</li>" +
        "<li>HTML Integrations</li>" +
        "<li>Laravel framework</li>" +
        "</ul>"
    },],
  frameworks : [
    {
      name: "Angular",
      iconURL: "/assets/img/skills/frameworks/angular.png",
      currentLevel: 0.26,
      goalLevel: 0.4,
      exampleCode: "<app-component></app-component>",
      description: "I've learned the basics of this framework, including:<br>" +
        "<ul>" +
        "<li>Components</li>" +
        "<li>Services</li>" +
        "<li>Directives</li>" +
        "<li>Routing</li>" +
        "<li>HTTP Requests</li>" +
        "<li>Forms</li>" +
        "<li>Observables</li>" +
        "</ul>"
    },
    {
      name: "React",
      iconURL: "/assets/img/skills/frameworks/react.png",
      currentLevel: 0.26,
      goalLevel: 0.4,
      exampleCode: "ReactDOM.render(<App />, document.getElementById('root'));",
      description: "I've learned the basics of this library, including:<br>" +
        "<ul>" +
        "<li>Components</li>" +
        "<li>State & Props</li>" +
        "<li>Routing</li>" +
        "<li>HTTP Requests</li>" +
        "<li>Forms</li>" +
        "<li>Context</li>" +
        "<li>Hooks</li>" +
        "</ul>"
    },
    {
      name: "Spring Boot",
      iconURL: "/assets/img/skills/frameworks/spring.png",
      currentLevel: 0.26,
      goalLevel: 0.4,
      exampleCode: "@RestController\n" +
        "public class HelloController {\n" +
        "    @RequestMapping(\"/hello\")\n" +
        "    public String hello() {\n" +
        "        return \"Hello World!\";\n" +
        "    }\n" +
        "}",
      description: "I've learned the basics of this framework, including:<br>" +
        "<ul>" +
        "<li>Controllers</li>" +
        "<li>Services</li>" +
        "<li>Repositories</li>" +
        "<li>Spring Security</li>" +
        "<li>Spring Data</li>" +
        "<li>Spring Boot Actuator</li>" +
        "<li>Spring Boot Admin</li>" +
        "</ul>"
    },
    {
      name: "Laravel",
      iconURL: "/assets/img/skills/frameworks/laravel.png",
      currentLevel: 0.26,
      goalLevel: 0.4,
      exampleCode: "Route::get('/hello', function () {\n" +
        "    return 'Hello World!';\n" +
        "});",
      description: "I've learned the basics of this framework, including:<br>" +
        "<ul>" +
        "<li>Controllers</li>" +
        "<li>Services</li>" +
        "<li>Repositories</li>" +
        "<li>Routing</li>" +
        "<li>HTTP Requests</li>" +
        "<li>Forms</li>" +
        "<li>Middleware</li>" +

        "</ul>"
    },
    {
      name: ".NET",
      iconURL: "/assets/img/skills/frameworks/dotnet.png",
      currentLevel: 0.26,
      goalLevel: 0.4,
      exampleCode: "public class HelloController : Controller\n" +
        "{\n" +
        "    public string Hello()\n" +
        "    {\n" +
        "        return \"Hello World!\";\n" +
        "    }\n" +
        "}",
      description: "I've learned the basics of this framework, including:<br>" +
        "<ul>" +
        "<li>Controllers</li>" +
        "<li>Services</li>" +
        "<li>Repositories</li>" +
        "<li>Routing</li>" +
        "<li>HTTP Requests</li>" +
        "<li>Forms</li>" +
        "<li>Middleware</li>" +
        "</ul>"
    }]
}
