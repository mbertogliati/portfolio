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
        repositoryURL: "ninuno"
      }
    ],
    'Personal': [],
    'Professional': []
}
