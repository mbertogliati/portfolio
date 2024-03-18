import {Skill} from "../skill";
export const languagesAndFrameworks : {programmingLanguages: Skill[], frameworks: Skill[]} =
{
  programmingLanguages :[
    {
      name: "Javascript",
      language: "javascript",
      iconURL: "/assets/img/skills/js.png",
      currentLevel: 0.5,
      goalLevel: 0.7,
      exampleCode: "document.getElementById('welcome-message').innerHTML = 'Hi Mom!';",
      description: "<p>I've learned vanilla javascript to know the basics about front-end web development, including:</p><br> " +
        "<ul>" +
        " <li>DOM Handling</li>" +
        "<li>JQuery</li>" +
        "<li>AJAX Requests</li>" +
        "<li>Promises & Callbacks</li>" +
        "<li>JSON</li>" +
        "</ul>"
    },
    {
      name: "C/C++",
      language: "c",
      iconURL: "/assets/img/skills/c.png",
      currentLevel: 0.5,
      goalLevel: 0.7,
      exampleCode: "int a = 1;\nfree(&a); //DON'T! ",
      description: "<p>I've entered the coding world with this language and learned a lot through the process. Some of the key conpcets I've learned are:</p><br> " +
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
      language: "java",
      iconURL: "/assets/img/skills/java.png",
      currentLevel: 0.4,
      goalLevel: 0.6,
      exampleCode: "List<String> list = new ArrayList<>();\nlist.add(\"Lists in java suck!\");",
      description: "<p>My entry point to object-oriented programming. I've learned about:<br></p> " +
        "<ul>" +
        "<li>JVM & Bytecode</li>" +
        "<li>Java Swing Library</li>" +
        "<li>JUnit & Mockito</li>" +
        "<li>Spring Boot</li>" +
        "<li>JPA Annotations</li>" +
        "</ul>"
    },
    {
      name: "Python",
      language: "python",
      iconURL: "/assets/img/skills/python.png",
      currentLevel: 0.3,
      goalLevel: 0.5,
      exampleCode: "hi = \"Hi\"\n" +
        "hi = 1\n" +
        "print(\"This is so wrong and yet it works: \" + hi)",
      description: "<p>I started learning Python because of its popularity. Later, I used it in college for learning Natural Language Processing." +
        "<br>" +
        "I have used the following libraries:</p>" +
        "<br> " +
        "<ul>" +
        "<li>Numpy</li>" +
        "<li>Pandas</li>" +
        "<li>NLKT</li>" +
        "<li>Scikit-learn</li>" +
        "<li>Matplotlib</li>" +
        "<li>SpaCy</li>" +
        "</ul>"
    },
    {
      name: "Ruby",
      language: "ruby",
      iconURL: "/assets/img/skills/ruby.png",
      currentLevel: 0.25,
      goalLevel: 0.25,
      exampleCode: "def method_missing(name, *args)\n  puts \"This language is so weird\"\nend",
      description: "<p>A very interesting programming language with an intuitive and consistent meta-model that allows an unprecedented flexibility:</p><br> " +
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
      language: "scala",
      iconURL: "/assets/img/skills/scala.png",
      currentLevel: 0.25,
      goalLevel: 0.4,
      exampleCode: "def either[U >: T](c: Container[U]) : Container[U] = {\n" +
        "    new Container[U]({s => \"This language has the best type system of all!\"})\n" +
        "  }",
      description: "<p> My first touch with object-functional technologies. An object-functional language with one of the best sound type systems out there. " +
        "The key concepts I learned are:</p><br>" +
        "<ul>" +
        "<li>Hybrid technology handling</li>" +
        "<li>Variance and Covariance</li>" +
        "<li>Upper bounds & Lower bounds</li>" +
        "<li>Structural typing</li>" +
        "</ul>"
    },
    {
      name: "Haskell",
      language: "haskell",
      iconURL: "/assets/img/skills/haskell.png",
      currentLevel: 0.2,
      goalLevel: 0.2,
      exampleCode: "fib 0 = 1 \n" +
        "fib 1 = 1 \n" +
        "fib n = + (fib (- n 1)) (fib (- n 2)) --Functional is awesome!",
      description: "<p>One of the few pure-functional languages out there. I learned it as an intro to functional programming, including concepts like:</p><br>" +
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
      language: "php",
      iconURL: "/assets/img/skills/php.png",
      currentLevel: 0.26,
      goalLevel: 0.26,
      exampleCode:  "$message = \"Hi Mom!\";\n"+
        "$bar = \"message\";\n"+
        "echo $$bar; //Outputs 'Hi Mom!', interesting...",
      description: "<p>My first approach to web development, including the following concepts:</p><br>" +
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
      language: "javascript",
      iconURL: "/assets/img/skills/frameworks/angular.png",
      currentLevel: 0.3,
      goalLevel: 0.5,
      exampleCode: `
import { Component } from '@angular/core';

@Component({
  selector: 'app-self-destruct',
  template: \`
    <button (click)="selfDestruct()">Self Destruct</button>
    <p *ngIf="countdown">Self-destruct in {{ countdown }}...</p>
    <p *ngIf="explosion">💥 Kaboom! System destroyed!</p>
  \`
})
export class SelfDestructComponent {
  countdown: number | undefined;
  explosion: boolean = false;

  selfDestruct(): void {
    this.countdown = 5;
    setInterval(() => {
      if (this.countdown && this.countdown-- <= 1) this.explosion = true;
    }, 1000);
  }
}
      `,
      description: "<p>My first web front-end framework and my first touch with Typescript.<br>" +
        "I learned the general concepts about front-end frameworks. This web page is written in it! <br>" +
        "Some of the key concepts of the framework I've learned are:</p><br>" +
        "<ul>" +
        "<li>Components</li>" +
        "<li>Services</li>" +
        "<li>Directives</li>" +
        "<li>Observables</li>" +
        "</ul>"
    },
    {
      name: "React",
      language: "javascript",
      iconURL: "/assets/img/skills/frameworks/react.png",
      currentLevel: 0.4,
      goalLevel: 0.6,
      exampleCode: `
      import React, { useState, useEffect } from 'react';
      function Evangelizer(){
        const [message, setMessage] = useState('Click to join the React army');
        useEffect(() => {
          document.title = message;
        });
        return (
          <div>
            <h1>{message}</h1>
            <button onClick={() => setMessage('Your soul was sold successfully!')}>Click Me!</button>
          </div>
        );
      }
      `,
      description: "<p>My current favourite front-end framework. It's functional approach to web components is very simple, intuitive and easy to learn.<br>" +
        "I love type safety, so I prefer to use TSX instead of JSX for writting my components.<br>"+
        "Some of the things I've learned about the framework:<br></p>"+
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
      language: "java",
      iconURL: "/assets/img/skills/frameworks/spring.png",
      currentLevel: 0.35,
      goalLevel: 0.5,
      exampleCode: `
import org.springframework.boot.autoconfigure.security.SecurityProperties;
import org.springframework.context.annotation.Configuration;
import org.springframework.security.config.annotation.web.builders.HttpSecurity;
import org.springframework.security.config.annotation.web.configuration.EnableWebSecurity;
import org.springframework.security.config.annotation.web.configuration.WebSecurityConfigurerAdapter;

@Configuration @EnableWebSecurity public class SecurityConfig extends WebSecurityConfigurerAdapter {
  @Override protected void configure(HttpSecurity http) throws Exception { http.authorizeRequests()
  .antMatchers("/**").permitAll()
  .and().csrf().disable();
  ...
  ...
  System.out.println("Spicing up security... zzzzZZZzZZZZZzzZZ");
  }
}
      `,
      description: "<p>One of the most complete back-end frameworks I have ever seen. It encourages a good project structure " +
        "and separation of concerns while providing a wide variety of tools. However, It has a steep learning curve, and the amount of " +
        "boilerplate needed just to get a simple example to run can be annoying.<br>"+
        "I've learned about:</p><br>" +
        "<ul>" +
        "<li>Controllers</li>" +
        "<li>Services</li>" +
        "<li>Repositories</li>" +
        "<li>Spring Security</li>" +
        "</ul>"
    },
    {
      name: "Laravel",
      language: "php",
      iconURL: "/assets/img/skills/frameworks/laravel.png",
      currentLevel: 0.3,
      goalLevel: 0.4,
      exampleCode: `
<?php
namespace App\\Models;
use Illuminate\\Database\\Eloquent\\Model;
class Chicken extends Model
{
    protected $table = 'chickens';

    public function talk()
    {
        echo "You know chickens do not talk, or do they?";
    }
}
      `,
      description: "<p>My first back-end framework. It combines a complete set of easy-to-use tools and a very " +
        "intuitive documentation (the best I've ever seen), making it the perfect choices for a quick, small project.<br>" +
        "I have learned about:</p><br>" +
        "<ul>" +
        "<li>Controllers</li>" +
        "<li>Services</li>" +
        "<li>Repositories</li>" +
        "<li>Routing</li>" +
        "<li>HTTP Requests</li>" +
        "<li>Forms</li>" +
        "<li>Middleware</li>" +
        "<li>Blade Template Engine</li>"+
        "<li>Eloquent & Doctrine ORMs</li>"+
        "</ul>"
    },
    {
      name: ".NET",
      language: "vbnet",
      iconURL: "/assets/img/skills/frameworks/dotnet.png",
      currentLevel: 0.2,
      goalLevel: 0.2,
      exampleCode: "Public Class MyWindow\n" +
        "    Inherits Window\n" +
        "    Public Sub New()\n" +
        "        InitializeComponent()\n" +
        "    End Sub\n" +
        "End Class",
      description: "<p>I have used this framework to build a selenium based automation tool for windows using WinForms. " +
        "Some of the things I have learnt are:</p><br>" +
        "<ul>" +
        "<li>Forms</li>" +
        "<li>Controls</li>" +
        "<li>Events</li>" +
        "</ul>"
    }]
}
