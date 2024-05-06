{
  // * Interface - Generic
  // By interface generic we can pass type and interface as paramiter

  interface Developer<WT, BT = null> {
    name: string;
    computer: {
      brand: string;
      model: string;
      releaseYear: number;
    };
    smartWatch: WT;
    bike?: BT;
  }

  type AppleWatch = {
    brand: string;
    model: string;
    heartBeatTrack: boolean;
    sleepTrack: boolean;
  };

  interface YamahaBike {
    brand: string;
    model: string;
    engineCapacity: string;
  }

  const richDeveloper: Developer<AppleWatch, YamahaBike> = {
    name: "Rahad",
    computer: {
      brand: "Macbook",
      model: "X234",
      releaseYear: 2022,
    },
    smartWatch: {
      brand: "Apple",
      model: "F44",
      heartBeatTrack: true,
      sleepTrack: true
    },
    bike: {
        brand: 'Yamaha',
        model: 'C54',
        engineCapacity: '100CC'
    }
  };
}
