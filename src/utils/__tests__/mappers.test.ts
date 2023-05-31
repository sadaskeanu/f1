import {
  mapWorldChampionApiResponse,
  mapRaceChampionsApiResponse,
} from "../mappers";

test("should map WorldChampionDataApiResponse to WorldChampionData correctly", () => {
  const data = {
    MRData: {
      StandingsTable: {
        StandingsLists: [
          {
            season: "2022",
            round: "20",
            DriverStandings: [
              {
                points: "385",
                wins: "9",
                Constructors: [
                  {
                    constructorId: "mercedes",
                    name: "Mercedes",
                    nationality: "German",
                  },
                ],
                Driver: {
                  driverId: "1",
                  givenName: "Lewis",
                  familyName: "Hamilton",
                },
              },
            ],
          },
        ],
      },
    },
  };

  const expectedOutput = {
    id: "1",
    season: "2022",
    points: "385",
    name: "Lewis",
    familyName: "Hamilton",
    team: "Mercedes",
  };

  const result = mapWorldChampionApiResponse(data);

  expect(result).toEqual(expectedOutput);
});

test("should map RaceChampionsDataApiResponse to RaceChampionsData correctly", () => {
  const data = {
    MRData: {
      xmlns: "http://example.com",
      series: "Formula 1",
      url: "http://example.com",
      limit: "10",
      offset: "0",
      total: "20",
      RaceTable: {
        season: "2023",
        Races: [
          {
            season: "2023",
            round: "1",
            url: "http://example.com/races/1",
            raceName: "Australian Grand Prix",
            Circuit: {
              circuitId: "albert_park",
              url: "http://example.com/circuits/albert_park",
              circuitName: "Albert Park Circuit",
              Location: {
                lat: "-37.8497",
                long: "144.968",
                locality: "Melbourne",
                country: "Australia",
              },
            },
            date: "2023-03-12",
            Results: [
              {
                number: "44",
                position: "1",
                positionText: "1",
                points: "25",
                Driver: {
                  driverId: "1",
                  permanentNumber: "44",
                  code: "HAM",
                  url: "http://example.com/drivers/hamilton",
                  givenName: "Lewis",
                  familyName: "Hamilton",
                  dateOfBirth: "1985-01-07",
                  nationality: "British",
                },
                Constructor: {
                  constructorId: "mercedes",
                  url: "http://example.com/constructors/mercedes",
                  name: "Mercedes",
                  nationality: "German",
                },
                grid: "1",
                laps: "58",
                status: "Finished",
                Time: {
                  millis: "5704462",
                  time: "1:35:04.462",
                },
                FastestLap: {
                  rank: "1",
                  lap: "55",
                  Time: {
                    time: "1:29.323",
                  },
                  AverageSpeed: {
                    units: "kph",
                    speed: "220.752",
                  },
                },
              },
            ],
          },
        ],
      },
    },
  };

  const expectedOutput = {
    season: "2023",
    races: [
      {
        driverId: "1",
        race: "Australian Grand Prix",
        driverName: "Lewis",
        driverFamilyName: "Hamilton",
        team: "Mercedes",
      },
    ],
  };

  const result = mapRaceChampionsApiResponse(data);

  expect(result).toEqual(expectedOutput);
});
