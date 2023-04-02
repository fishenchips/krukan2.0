import { Player } from "./playerInfo";

export type Match = {
  home: boolean;
  arena: string;
  date: string;
  shortDate: string;
  gameType: string;
  opposition: string;
};

export interface SquadPlayer extends Omit<Player, "emailVerified"> {}

export interface UpdatedMatch extends Match {
  _id: string;
}

export interface ScheduledMatch extends UpdatedMatch {
  roster?: Roster;
}

export type Roster = Array<SquadPlayer>;
