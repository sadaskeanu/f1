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

// "StandingsLists":[{"season":"2022","round":"22","DriverStandings":[{"position":"1","positionText":"1","points":"454","wins":"15","Driver":{"driverId":"max_verstappen","permanentNumber":"33","code":"VER","url":"http:\/\/en.wikipedia.org\/wiki\/Max_Verstappen","givenName":"Max","familyName":"Verstappen","dateOfBirth":"1997-09-30","nationality":"Dutch"},              "Constructors":[{"constructorId":"red_bull","url":"http:\/\/en.wikipedia.org\/wiki\/Red_Bull_Racing","name":"Red Bull","nationality":"Austrian"}]}]}]}}}
