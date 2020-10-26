export const exampleObj = [
  {
    price: 22951,
    carrier: "SU",
    segments: [
      {
        origin: "MOW",
        destination: "HKT",
        date: "2020-11-03T01:22:00.000Z",
        stops: ["SHA", "BKK", "HKG"],
        duration: 804,
      },
      {
        date: "2020-11-02T23:33:00.000Z",
        destination: "HKT",
        duration: 633,
        origin: "MOW",
        stops: ["KUL", "HKG", "AUH"],
      },
    ],
  },
  {
    carrier: "TG",
    price: 18796,
    segments: [
      {
        date: "2020-11-02T23:33:00.000Z",
        destination: "HKT",
        duration: 633,
        origin: "MOW",
        stops: ["KUL", "HKG", "AUH"],
      },
      {
        date: "2020-11-23T03:43:00.000Z",
        destination: "MOW",
        duration: 1799,
        origin: "HKT",
        stops: ["DXB"],
      },
    ],
  },
  {
    carrier: "EY",
    price: 49043,
    segments: [
        {date: "2020-11-03T07:56:00.000Z",
    destination: "HKT",
    duration: 1269,
    origin: "MOW",
stops: []
},
{date: "2020-11-22T23:29:00.000Z",
destination: "MOW",
duration: 1049,
origin: "HKT",
stops: ['IST']
},
]
  },
  {
    carrier: "MH",
    price: 48597,
    segments : [{
        date: "2020-11-03T09:31:00.000Z",
destination: "HKT",
duration: 1713,
origin: "MOW",
stops: ["HKG", "SHA", "KUL"]
    },{
        date: "2020-11-23T12:34:00.000Z",
destination: "MOW",
duration: 1103,
origin: "HKT",
stops: ['AUH']
    }]
  },
  {
    carrier: "FV",
    price: 92107,
    segments: [{
        date: "2020-11-03T04:07:00.000Z",
destination: "HKT",
duration: 1852,
origin: "MOW",
stops: ["SIN", "DXB", "BKK"]
    },{
        date: "2020-11-23T08:51:00.000Z",
destination: "MOW",
duration: 1757,
origin: "HKT",
stops: ["AUH", "KUL", "IST"]
    }]
  }
];

export const filter = (state, action) => {
  switch (action.type) {
  }
};
