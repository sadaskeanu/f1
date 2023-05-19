import {
  WorldChampionData,
  WorldChampionDataApiResponse,
} from "../types/ChampionCardData/WorldChampionData";
import {
  RaceChampionsData,
  RaceChampionsDataApiResponse,
} from "../types/RaceChampionsData/RaceChampionsData";

export function mapWorldChampionApiResponse(
  data: WorldChampionDataApiResponse
): WorldChampionData {
  return {
    id: data.MRData.StandingsTable.StandingsLists[0].DriverStandings[0].Driver
      .driverId,
    season: data.MRData.StandingsTable.StandingsLists[0].season,
    points:
      data.MRData.StandingsTable.StandingsLists[0].DriverStandings[0].points,
    name: data.MRData.StandingsTable.StandingsLists[0].DriverStandings[0].Driver
      .givenName,
    familyName:
      data.MRData.StandingsTable.StandingsLists[0].DriverStandings[0].Driver
        .familyName,
    team: data.MRData.StandingsTable.StandingsLists[0].DriverStandings[0]
      .Constructors[0].name,
  };
}

export function mapRaceChampionsApiResponse(
  data: RaceChampionsDataApiResponse
): RaceChampionsData {
  return {
    season: data.MRData.RaceTable.season,
    races: data.MRData.RaceTable.Races.map((race) => ({
      driverId: race.Results[0].Driver.driverId,
      race: race.raceName,
      driverName: race.Results[0].Driver.givenName,
      driverFamilyName: race.Results[0].Driver.familyName,
      team: race.Results[0].Constructor.name,
    })),
  };
}
