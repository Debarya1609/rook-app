export interface Project {
  id: string;
  name: string;
  platform: string;
  url: string;
  dateCreated: string;
  status: 'Analyzed' | 'In Progress' | 'Pending';
}