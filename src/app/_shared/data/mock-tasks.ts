import { Task } from "../models/task";

function getRandomDate(start: Date, end: Date): Date {
    const diff = end.getTime() - start.getTime();
    const randomOffset = Math.floor(Math.random() * diff);
    return new Date(start.getTime() + randomOffset);
  }

  let randomDate = (() => {
    return getRandomDate(new Date(2023, 0, 1), new Date(2024, 4, 30));
  })

  let a = new Date();
export const mock_tasks: Task[] = [
    {
        userId: 1,
        id: 1,
        title: "Complete User Profile",
        description: "Finalize and submit the user profile details.",
        done: false,
        due: randomDate()

    },
    {
        userId: 1,
        id: 2,
        title: "Database Backup",
        description: "Perform a full backup of the database.",
        done: true,
        due: randomDate()
    },
    {
        userId: 1,
        id: 3,
        title: "UI Design Review",
        description: "Review the new UI design for the upcoming release.",
        done: false,
        due: randomDate()
    },
    {
        userId: 1,
        id: 4,
        title: "Code Refactoring",
        description: "Refactor the legacy code for better performance.",
        done: true,
        due: randomDate()
    },
    {
        userId: 2,
        id: 5,
        title: "Prepare Presentation",
        description: "Create a presentation for the client meeting.",
        done: false,
        due: randomDate()
    },
    {
        userId: 2,
        id: 6,
        title: "Test Automation",
        description: "Automate the testing process for the new features.",
        done: true,
        due: randomDate()
    },
    {
        userId: 2,
        id: 7,
        title: "Server Maintenance",
        description: "Conduct regular maintenance on the production servers.",
        done: false,
        due: randomDate()
    },
    {
        userId: 3,
        id: 8,
        title: "Marketing Strategy",
        description: "Develop a new marketing strategy for the product launch.",
        done: false,
        due: randomDate()
    },
    {
        userId: 3,
        id: 9,
        title: "Customer Feedback Analysis",
        description: "Analyze the feedback received from customers.",
        done: true,
        due: randomDate()
    },
    {
        userId: 3,
        id: 10,
        title: "Social Media Campaign",
        description: "Plan and execute a social media campaign.",
        done: false,
        due: randomDate()
    },
    {
        userId: 3,
        id: 13,
        title: "Competitor Research",
        description: "Research competitors' strategies and market positioning.",
        done: false,
        due: randomDate()
    },
    {
        userId: 3,
        id: 14,
        title: "Content Creation",
        description: "Create engaging content for blog and social media.",
        done: false,
        due: randomDate()
    },
    {
        userId: 4,
        id: 11,
        title: "Bug Fixing",
        description: "Identify and fix bugs reported by users.",
        done: false,
        due: randomDate()
    },
    {
        userId: 4,
        id: 12,
        title: "Feature Documentation",
        description: "Document the new features added to the software.",
        done: true,
        due: randomDate()
    },
    {
        userId: 4,
        id: 15,
        title: "Team Meeting",
        description: "Organize a team meeting to discuss project progress.",
        done: false,
        due: randomDate()
    },
    {
        userId: 4,
        id: 16,
        title: "Code Review",
        description: "Review code submissions from team members.",
        done: false,
        due: randomDate()
    },
    {
        userId: 4,
        id: 17,
        title: "Security Audit",
        description: "Perform a security audit on the application.",
        done: false,
        due: randomDate()
    },
    {
        userId: 5,
        id: 18,
        title: "Design Mockups",
        description: "Create mockups for the new feature.",
        done: false,
        due: randomDate()
    },
    {
        userId: 5,
        id: 19,
        title: "User Testing",
        description: "Conduct user testing sessions for the beta version.",
        done: false,
        due: randomDate()
    },
    {
        userId: 5,
        id: 20,
        title: "API Development",
        description: "Develop APIs for the new mobile app.",
        done: false,
        due: randomDate()
    },
    {
        userId: 5,
        id: 21,
        title: "Performance Optimization",
        description: "Optimize the performance of the web application.",
        done: false,
        due: randomDate()
    },
    {
        userId: 5,
        id: 22,
        title: "Data Migration",
        description: "Migrate data from the old system to the new one.",
        done: false,
        due: randomDate()
    },
    {
        userId: 6,
        id: 23,
        title: "Sprint Planning",
        description: "Plan tasks and goals for the next sprint.",
        done: false,
        due: randomDate()
    },
    {
        userId: 6,
        id: 24,
        title: "Integration Testing",
        description: "Perform integration testing for the new module.",
        done: false,
        due: randomDate()
    },
    {
        userId: 6,
        id: 25,
        title: "DevOps Setup",
        description: "Set up CI/CD pipelines for the project.",
        done: false,
        due: randomDate()
    },
    {
        userId: 6,
        id: 26,
        title: "Training Session",
        description: "Conduct a training session for the new hires.",
        done: false,
        due: randomDate()
    },
    {
        userId: 6,
        id: 27,
        title: "Documentation Review",
        description: "Review and update the project documentation.",
        done: false,
        due: randomDate()
    },
    {
        userId: 7,
        id: 28,
        title: "Client Onboarding",
        description: "Assist in the onboarding process for new clients.",
        done: false,
        due: randomDate()
    },
    {
        userId: 7,
        id: 29,
        title: "Risk Assessment",
        description: "Conduct a risk assessment for the upcoming project.",
        done: false,
        due: randomDate()
    },
    {
        userId: 7,
        id: 30,
        title: "Sales Pitch",
        description: "Prepare a sales pitch for potential investors.",
        done: false,
        due: randomDate()
    },
    {
        userId: 7,
        id: 31,
        title: "Product Roadmap",
        description: "Develop a product roadmap for the next quarter.",
        done: false,
        due: randomDate()
    },
    {
        userId: 7,
        id: 32,
        title: "Brand Strategy",
        description: "Formulate a new brand strategy to boost market presence.",
        done: false,
        due: randomDate()    },
    {
        userId: 8,
        id: 33,
        title: "Project Proposal",
        description: "Write a project proposal for the new initiative.",
        done: false,
        due: randomDate()
    },
    {
        userId: 8,
        id: 34,
        title: "Financial Analysis",
        description: "Analyze the financial performance of the company.",
        done: true,
        due: randomDate()
    },
    {
        userId: 8,
        id: 35,
        title: "Budget Planning",
        description: "Create a budget plan for the upcoming year.",
        done: false,
        due: randomDate()
    },
    {
        userId: 8,
        id: 36,
        title: "Investor Meeting",
        description: "Prepare for an investor meeting to secure funding.",
        done: false,
        due: randomDate()
    },
    {
        userId: 8,
        id: 37,
        title: "Market Research",
        description: "Conduct market research to identify new opportunities.",
        done: false,
        due: randomDate()
    },
    {
        userId: 9,
        id: 38,
        title: "Employee Training",
        description: "Develop and deliver training programs for employees.",
        done: false,
        due: randomDate()
    },
    {
        userId: 9,
        id: 39,
        title: "Performance Review",
        description: "Conduct performance reviews for all employees.",
        done: true,
        due: randomDate()
    },
    {
        userId: 9,
        id: 40,
        title: "Recruitment Drive",
        description: "Organize a recruitment drive to hire new talent,done with the following date format yyyy-mm-dd to all existing objects",
        done: false,
        due: randomDate()
    }
];


  
