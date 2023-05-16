export interface ChampionData {
  MRData: {
    StandingsTable: {
      StandingsLists: {
        season: string;
        round: string;
        DriverStandings: {
          points: string;
          wins: string;
          Constructors: {
            constructorId: string;
            name: string;
            nationality: string;
          }[];
          Driver: {
            driverId: string;
            givenName: string;
            familyName: string;
          };
        }[];
      }[];
    };
  };
}
