export type tasks = {
  id: string,
  name: string,
  description: string | null,
  status: string,
  worker: string,
};

export type milestones = {
  id: string,
  name: string,
  color: string;
};