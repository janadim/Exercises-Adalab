"use strict";

const runners = [
  { name: "Gregory Goyle", time: 56 },
  { name: "Nymphadora Tonks", time: 9 },
  { name: "Luna Lovegood", time: 45 },
  { name: "Cedric Diggory", time: 8 },
  { name: "Cho Chang", time: 35 },
];

let record = runners[0];

for (const runner of runners) {
  /*
  if (runner.time < record.time) {
    record = runner;
  }
  */
  record = runner.time < record.time ? runner : record;
}

const winner = runners.reduce(
  (record, runner) => (runner.time < record.time ? runner : record),
  runners[0]
);
