export interface Subject{
  name: string;
  status: "approved" | "ongoing" | "pending";
}
export const careerData : {title: string, subjects: Subject[][]} =
  {
    title: 'Information Systems Engineering',
    subjects: [
      [
        {name: 'Systems and Organizations', status: 'approved'},
        {name: 'Algorithms and Data Structures', status: 'approved'},
        {name: 'Computer Architecture', status: 'approved'},
        {name: 'Discrete Mathematics', status: 'approved'},
        {name: 'Calculus I', status: 'approved'},
        {name: 'Algebra and Analytic Geometry', status: 'approved'},
        {name: 'Engineering and Society', status: 'approved'},
        {name: 'Chemistry', status: 'approved'},
      ],
      [
        {name: 'Calculus II', status: 'approved'},
        {name: 'Physics I', status: 'approved'},
        {name: 'Paradigms of Programming', status: 'approved'},
        {name: 'Language Syntax and Semantics', status: 'approved'},
        {name: 'Systems Analysis', status: 'approved'},
        {name: 'Technical English I', status: 'approved'},
        {name: 'Representation Systems', status: 'approved'},
        {name: 'Probability and Statistics', status: 'approved'},
      ],
      [
        {name: 'Physics II', status: 'approved'},
        {name: 'Superior Mathematics', status: 'approved'},
        {name: 'Economics', status: 'approved'},
        {name: 'Operating Systems', status: 'approved'},
        {name: 'System Design', status: 'approved'},
        {name: 'Data Management', status: 'approved'},
        {name: 'Natural Language Processing', status: 'approved'},
        {name: 'Advanced Programming Techniques', status: 'approved'},
        {name: 'Technical English II', status: 'approved'},
      ],
      [
        {name: 'Communications', status: 'ongoing'},
        {name: 'Resource Management', status: 'ongoing'},
        {name: 'Operations Research', status: 'ongoing'},
        {name: 'Strategic Management of Human Resources', status: 'ongoing'},
        {name: 'Software Engineering', status: 'ongoing'},
        {name: 'Control Theory', status: 'ongoing'},
        {name: 'Simulation', status: 'pending'},
        {name: 'Information Networks', status: 'pending'},
      ],
      [
        {name: 'Final Project', status: 'pending'},
        {name: 'Management Systems', status: 'pending'},
        {name: 'Artificial Intelligence', status: 'pending'},
        {name: 'Gerencial Administration', status: 'pending'}
      ]
    ]
  };
