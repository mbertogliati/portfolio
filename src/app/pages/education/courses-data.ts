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
        This was my first contact with web development.
        <br>
        I learned the basics of HTML, CSS, JavaScript, PHP, and MySQL.
        <br><br>
        The final project consisted of forming a team and developing a web application using the Laravel framework about a topic of our choice.
        <br>
        We chose a general purpose forum, where users can create posts, comment on them, and like or dislike comments.
        <br><br>
        The concepts included in the course were:
        <br><br>
        <ul>
            <li>Lightweight front-end with Blade template engine
                <ul>
                    <li>HTML</li>
                    <li>CSS</li>
                    <li>JavaScript</li>
                </ul>
            </li>

            <li>Backend with Laravel
                <ul>
                    <li>Routing</li>
                    <li>Controllers</li>
                    <li>Models</li>
                    <li>Views</li>
                    <li>Middleware</li>
                    <li>Validation</li>
                    <li>Authentication</li>
                    <li>Authorization</li>
                    <li>Eloquent ORM</li>
                </ul>
            </li>
        </ul>
            <br>
        You can find the forum repository <a href="https://github.com/mbertogliati/foro" target="_blank">here<a>
        `
    },
    {
        name: "Python",
        iconURL: "/assets/img/skills/python.png",
        year: "2021",
        description: `
        This course was my first dive into Python.
        <br>
        I've learned the basics of the languages and some of its most famous
        libraries such as:
        <ul>
            <li>NumPy</li>
            <li>Pandas</li>
            <li>Matplotlib</li>
        </ul>
        `
    }

];
