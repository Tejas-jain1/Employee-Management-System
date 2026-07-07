const employees = [
  {
    id: 1,
    firstName: "Rahul",
    email: "employee1@example.com",
    password: "1234",
    taskNumber: {
      active: 1,
      newTask: 1,
      completed: 1,
      failed: 0
    },
    tasks: [
      {
        active: true,
        newTask: false,
        completed: false,
        failed: false,
        taskTitle: "Build Login Page",
        taskDescription: "Create responsive login page.",
        taskDate: "2026-07-05",
        category: "Development"
      },
      {
        active: false,
        newTask: true,
        completed: false,
        failed: false,
        taskTitle: "Create Dashboard",
        taskDescription: "Design employee dashboard.",
        taskDate: "2026-07-06",
        category: "Design"
      },
      {
        active: false,
        newTask: false,
        completed: true,
        failed: false,
        taskTitle: "Fix Navbar",
        taskDescription: "Make navbar responsive.",
        taskDate: "2026-07-02",
        category: "Bug Fix"
      }
    ]
  },

  {
    id: 2,
    firstName: "Aman",
    email: "employee2@example.com",
    password: "1234",
    taskNumber: {
      active: 0,
      newTask: 1,
      completed: 1,
      failed: 2
    },
   tasks: [
  {
    active: false,
    newTask: true,
    completed: false,
    failed: false,
    taskTitle: "Make YouTube Video",
    taskDescription: "Record React project tutorial.",
    taskDate: "2026-07-05",
    category: "Content"
  },
  {
    active: false,
    newTask: false,
    completed: true,
    failed: false,
    taskTitle: "Design Landing Page",
    taskDescription: "Create landing page UI.",
    taskDate: "2026-07-06",
    category: "Design"
  },
  {
    active: false,
    newTask: false,
    completed: false,
    failed: true,
    taskTitle: "API Integration",
    taskDescription: "Connect login API.",
    taskDate: "2026-07-01",
    category: "Backend"
  },
  {
    active: false,
    newTask: false,
    completed: false,
    failed: true,
    taskTitle: "Deploy Website",
    taskDescription: "Deploy project on Vercel.",
    taskDate: "2026-06-30",
    category: "Deployment"
  }
]
  },

  {
    id: 3,
    firstName: "Priya",
    email: "employee3@example.com",
    password: "1234",
    taskNumber: {
      active: 1,
      newTask: 0,
      completed: 2,
      failed: 1
    },
   tasks: [
  {
    active: true,
    newTask: false,
    completed: false,
    failed: false,
    taskTitle: "Testing",
    taskDescription: "Test authentication module.",
    taskDate: "2026-07-05",
    category: "Testing"
  },
  {
    active: false,
    newTask: false,
    completed: true,
    failed: false,
    taskTitle: "Write Documentation",
    taskDescription: "Complete README file.",
    taskDate: "2026-07-06",
    category: "Documentation"
  },
  {
    active: false,
    newTask: false,
    completed: true,
    failed: false,
    taskTitle: "Sidebar",
    taskDescription: "Create sidebar component.",
    taskDate: "2026-07-01",
    category: "Development"
  },
  {
    active: false,
    newTask: false,
    completed: false,
    failed: true,
    taskTitle: "Payment Gateway",
    taskDescription: "Integrate payment API.",
    taskDate: "2026-06-29",
    category: "Backend"
  }
]
  },

  {
    id: 4,
    firstName: "Neha",
    email: "employee4@example.com",
    password: "1234",
    taskNumber: {
      active: 0,
      newTask: 2,
      completed: 1,
      failed: 0
    },
   tasks: [
  {
    active: false,
    newTask: true,
    completed: false,
    failed: false,
    taskTitle: "Optimize Website",
    taskDescription: "Improve loading speed.",
    taskDate: "2026-07-05",
    category: "Optimization"
  },
  {
    active: false,
    newTask: true,
    completed: false,
    failed: false,
    taskTitle: "Design Cards",
    taskDescription: "Create dashboard cards.",
    taskDate: "2026-07-06",
    category: "UI"
  },
  {
    active: false,
    newTask: false,
    completed: true,
    failed: false,
    taskTitle: "Footer",
    taskDescription: "Complete footer section.",
    taskDate: "2026-07-01",
    category: "Development"
  }
]
  },

  {
    id: 5,
    firstName: "Arjun",
    email: "employee5@example.com",
    password: "1234",
    taskNumber: {
      active: 1,
      newTask: 1,
      completed: 0,
      failed: 0
    },
   tasks: [
  {
    active: true,
    newTask: false,
    completed: false,
    failed: false,
    taskTitle: "Bug Fixing",
    taskDescription: "Resolve dashboard bugs.",
    taskDate: "2026-07-05",
    category: "Bug Fix"
  },
  {
    active: false,
    newTask: true,
    completed: false,
    failed: false,
    taskTitle: "Notifications",
    taskDescription: "Implement notifications.",
    taskDate: "2026-07-06",
    category: "Feature"
  }
]
  }
];

const admin = [
  {
    id: 1,
    firstName: "Admin",
    email: "admin@example.com",
    password: "1234"
  }
];

export const setlocalStorage= ()=>{
    localStorage.setItem('employees' , JSON.stringify(employees))
    localStorage.setItem('admin' , JSON.stringify(admin))
}

export const getlocalStorage= ()=>{
 const employees = JSON.parse(localStorage.getItem('employees'))
 const admin = JSON.parse(localStorage.getItem('admin'))
 return{employees,admin}
}


