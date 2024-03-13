export interface Course {
    name: string,
    iconURL: string,
    year: string,
    description: string
}
export const coursesData: Course[] = [
    {
        name: "Full Stack Developer",
        iconURL: "/assets/img/skills/frameworks/laravel.png",
        year: "2022",
        description: `
        I've learned the basics of this framework, including:<br>
        <ul>
            <li>Controllers</li>
            <li>Services</li>
            <li>Repositories</li>
            <li>Routing</li>
            <li>HTTP Requests</li>
            <li>Forms</li>
            <li>Middleware</li>
        </ul>
        `
    },
    {
        name: "Python",
        iconURL: "/assets/img/skills/python.png",
        year: "2021",
        description: `
        I've learned the basics of this language, including:<br>
        <ul>
            <li>Variables</li>
            <li>Loops</li>
            <li>Functions</li>
            <li>Classes</li>
            <li>Modules</li>
            <li>Libraries</li>
            <li>APIs</li>
        </ul>
        `
    }

];
