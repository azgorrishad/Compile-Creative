export const founderMetrics = {
  monthlyRevenue: "$284,500",
  monthlyGrowth: "+12.4%",
  outstandingRevenue: "$42,000",
  profitMargin: "68%",
  pipelineValue: "$1.2M",
  activeProjects: 14,
  projectsAtRisk: 1,
  activeClients: 8,
  clientRetention: "96%",
  leadConversion: "24%",
  teamUtilization: "85%",
};

export const agencyHealth = [
  { metric: "Revenue Targets", status: "green", detail: "Exceeding Q2 goals by 15%" },
  { metric: "Sales Pipeline", status: "green", detail: "3 high-value prospects in negotiation" },
  { metric: "Project Delivery", status: "yellow", detail: "2 projects approaching deadline buffer" },
  { metric: "Team Workload", status: "green", detail: "Balanced across all departments" },
  { metric: "Client Satisfaction", status: "green", detail: "NPS at 78 (Industry top 5%)" },
  { metric: "Automation Status", status: "yellow", detail: "Jarvis crawler experiencing API limits" },
];

export const crmPipeline = [
  {
    id: "lead",
    title: "Lead",
    items: [
      { id: "c1", client: "Acme Corp", value: "$120k", tag: "Inbound", date: "2d ago" },
      { id: "c2", client: "Stark Ind", value: "$400k", tag: "Referral", date: "5d ago" }
    ]
  },
  {
    id: "discovery",
    title: "Discovery Call",
    items: [
      { id: "c3", client: "Globex", value: "$85k", tag: "Outbound", date: "Today" }
    ]
  },
  {
    id: "proposal",
    title: "Proposal Sent",
    items: [
      { id: "c4", client: "Initech", value: "$210k", tag: "RFP", date: "1w ago" },
      { id: "c5", client: "Soylent", value: "$150k", tag: "Inbound", date: "3d ago" }
    ]
  },
  {
    id: "negotiation",
    title: "Negotiation",
    items: [
      { id: "c6", client: "Massive Dynamic", value: "$320k", tag: "Referral", date: "Update Needed" }
    ]
  },
  {
    id: "won",
    title: "Closed Won",
    items: [
      { id: "c7", client: "Wayne Ent", value: "$550k", tag: "Inbound", date: "Yesterday" }
    ]
  }
];

export const activeProjects = [
  { id: 1, name: "Aura Botanica - Brand System", client: "Elena Rodriguez", health: "green", margin: "72%", deadline: "Oct 12", team: 4 },
  { id: 2, name: "Nexus OS - UX Overhaul", client: "Marcus Chen", health: "yellow", margin: "65%", deadline: "Sep 28", team: 6 },
  { id: 3, name: "Vault Financial - Automation", client: "David Sterling", health: "green", margin: "80%", deadline: "Nov 05", team: 3 },
  { id: 4, name: "Lumina Health - Landing Pages", client: "Sarah Jenkins", health: "red", margin: "45%", deadline: "Sep 15", team: 2 },
];

export const teamMembers = [
  { id: 1, name: "Alex Mercer", role: "Design Lead", utilization: 90, status: "Busy" },
  { id: 2, name: "Jordan Lee", role: "Full Stack Engineer", utilization: 75, status: "Available" },
  { id: 3, name: "Sam Rivera", role: "Growth Strategist", utilization: 105, status: "Overbooked" },
  { id: 4, name: "Taylor Swift", role: "Copywriter", utilization: 60, status: "Available" },
];

export const recentDeliverables = [
  { id: 1, task: "Brand Guidelines v1", project: "Aura Botanica", assignee: "Alex Mercer", status: "In Review", due: "Today" },
  { id: 2, cast: "Landing Page Copy", project: "Nexus OS", assignee: "Taylor Swift", status: "Approved", due: "Yesterday" },
  { id: 3, task: "API Integration Module", project: "Vault Financial", assignee: "Jordan Lee", status: "Draft", due: "Tomorrow" },
];
