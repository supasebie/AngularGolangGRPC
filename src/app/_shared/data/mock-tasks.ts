import { Task } from "../models/task";

export const mock_tasks: Task[] = [
    // Existing tasks
    {
        userId: 1,
        id: 1,
        title: "Complete User Profile",
        description: "Finalize and submit the user profile details.",
        done: false,
    },
    {
        userId: 1,
        id: 2,
        title: "Database Backup",
        description: "Perform a full backup of the database.",
        done: true,
    },
    {
        userId: 1,
        id: 3,
        title: "UI Design Review",
        description: "Review the new UI design for the upcoming release.",
        done: false,
    },
    {
        userId: 1,
        id: 4,
        title: "Code Refactoring",
        description: "Refactor the legacy code for better performance.",
        done: true,
    },
    {
        userId: 2,
        id: 5,
        title: "Prepare Presentation",
        description: "Create a presentation for the client meeting.",
        done: false,
    },
    {
        userId: 2,
        id: 6,
        title: "Test Automation",
        description: "Automate the testing process for the new features.",
        done: true,
    },
    {
        userId: 2,
        id: 7,
        title: "Server Maintenance",
        description: "Conduct regular maintenance on the production servers.",
        done: false,
    },
    // New tasks for userId: 3
    {
        userId: 3,
        id: 8,
        title: "Marketing Strategy",
        description: "Develop a new marketing strategy for the product launch.",
        done: false,
    },
    {
        userId: 3,
        id: 9,
        title: "Customer Feedback Analysis",
        description: "Analyze the feedback received from customers.",
        done: true,
    },
    {
        userId: 3,
        id: 10,
        title: "Social Media Campaign",
        description: "Plan and execute a social media campaign.",
        done: false,
    },
    {
        userId: 3,
        id: 13,
        title: "Competitor Research",
        description: "Research competitors' strategies and market positioning.",
        done: false,
    },
    {
        userId: 3,
        id: 14,
        title: "Content Creation",
        description: "Create engaging content for blog and social media.",
        done: false,
    },
    // New tasks for userId: 4
    {
        userId: 4,
        id: 11,
        title: "Bug Fixing",
        description: "Identify and fix bugs reported by users.",
        done: false,
    },
    {
        userId: 4,
        id: 12,
        title: "Feature Documentation",
        description: "Document the new features added to the software.",
        done: true,
    },
    {
        userId: 4,
        id: 15,
        title: "Team Meeting",
        description: "Organize a team meeting to discuss project progress.",
        done: false,
    },
    {
        userId: 4,
        id: 16,
        title: "Code Review",
        description: "Review code submissions from team members.",
        done: false,
    },
    {
        userId: 4,
        id: 17,
        title: "Security Audit",
        description: "Perform a security audit on the application.",
        done: false,
    },
    // New tasks for userId: 5
    {
        userId: 5,
        id: 18,
        title: "Design Mockups",
        description: "Create mockups for the new feature.",
        done: false,
    },
    {
        userId: 5,
        id: 19,
        title: "User Testing",
        description: "Conduct user testing sessions for the beta version.",
        done: false,
    },
    {
        userId: 5,
        id: 20,
        title: "API Development",
        description: "Develop APIs for the new mobile app.",
        done: false,
    },
    {
        userId: 5,
        id: 21,
        title: "Performance Optimization",
        description: "Optimize the performance of the web application.",
        done: false,
    },
    {
        userId: 5,
        id: 22,
        title: "Data Migration",
        description: "Migrate data from the old system to the new one.",
        done: false,
    },
    // New tasks for userId: 6
    {
        userId: 6,
        id: 23,
        title: "Sprint Planning",
        description: "Plan tasks and goals for the next sprint.",
        done: false,
    },
    {
        userId: 6,
        id: 24,
        title: "Integration Testing",
        description: "Perform integration testing for the new module.",
        done: false,
    },
    {
        userId: 6,
        id: 25,
        title: "DevOps Setup",
        description: "Set up CI/CD pipelines for the project.",
        done: false,
    },
    {
        userId: 6,
        id: 26,
        title: "Training Session",
        description: "Conduct a training session for the new hires.",
        done: false,
    },
    {
        userId: 6,
        id: 27,
        title: "Documentation Review",
        description: "Review and update the project documentation.",
        done: false,
    },
    // New tasks for userId: 7
    {
        userId: 7,
        id: 28,
        title: "Client Onboarding",
        description: "Assist in the onboarding process for new clients.",
        done: false,
    },
    {
        userId: 7,
        id: 29,
        title: "Risk Assessment",
        description: "Conduct a risk assessment for the upcoming project.",
        done: false,
    },
    {
        userId: 7,
        id: 30,
        title: "Sales Pitch",
        description: "Prepare a sales pitch for potential investors.",
        done: false,
    },
    {
        userId: 7,
        id: 31,
        title: "Product Roadmap",
        description: "Develop a product roadmap for the next quarter.",
        done: false,
    },
    {
        userId: 7,
        id: 32,
        title: "Brand Strategy",
        description: "Formulate a new brand strategy to boost market presence.",
        done: false,
    }
];