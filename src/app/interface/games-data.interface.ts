export interface GamesResponse {
  id: number;
  dateCreated: string;
  name: string;
  image: string;
  platformId: number;
  priority: number;
  numberOfHoursPlayed: number;
  numberOfHoursToComplete: number;
  isComplete: boolean;
}

export interface ModifiedGamesResponse {
  id: number;
  dateCreated: string;
  name: string;
  image: string;
  platformId: number;
  priority: number;
  numberOfHoursPlayed: number;
  numberOfHoursToComplete: number;
  isComplete: boolean;
  platform: string;
  percentCompleted: number;
  completionDate: string;
}
