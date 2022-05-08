/*
create a group and index list related items in object 
*/
const groupBy = (fn, list) => {
  return list.reduce(
    (ac, cu) => ({
      ...ac,
      [fn(cu)]: [...(ac[fn(cu)] || []), cu],
    }),
    {}
  );
};

const vehicles = groupBy(
  (vehicle) => vehicle.make,
  [
    { make: "tesla", medel: "3" },
    { make: "tesla", medel: "y" },
    { make: "ford", medel: "mech-e" },
  ]
);
const music = groupBy(
  (vehicle) => vehicle.singer,
  [
    { singer: "ed sheeran", song: "shiver" },
    { singer: "ed sheeran", song: "overpass graffiti" },
    { singer: "justin bieber", song: "stay" },
    { singer: "dua lipa", song: "future nostalgia" },
    { singer: "dua lipa", song: "levitating" },
  ]
);

console.log(vehicles);
/*
{
  tesla: [ { make: 'tesla', medel: '3' }, { make: 'tesla', medel: 'y' } ],
  ford: [ { make: 'ford', medel: 'mech-e' } ]
}
*/
console.log(music);
/*
{
  'ed sheeran': [
    { singer: 'ed sheeran', song: 'shiver' },
    { singer: 'ed sheeran', song: 'overpass graffiti' }
  ],
  'justin bieber': [ { singer: 'justin bieber', song: 'stay' } ],
  'dua lipa': [
    { singer: 'dua lipa', song: 'future nostalgia' },
    { singer: 'dua lipa', song: 'levitating' }
  ]
}
*/
