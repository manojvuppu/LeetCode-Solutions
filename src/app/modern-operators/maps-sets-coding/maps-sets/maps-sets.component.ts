import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-maps-sets',
  templateUrl: './maps-sets.component.html',
  styleUrls: ['./maps-sets.component.css'],
})
export class MapsSetsComponent implements OnInit {
  ///////////////////////////////////////
  // Coding Challenge #3

  /* 
Let's continue with our football betting app! This time, we have a map with a log of the events that happened during the game. The values are the events themselves, and the keys are the minutes in which each event happened (a football game has 90 minutes plus some extra time).
1. Create an array 'events' of the different game events that happened (no duplicates)
2. After the game has finished, is was found that the yellow card from minute 64 was unfair. So remove this event from the game events log.

3. Print the following string to the console: "An event happened, on average, every 9 minutes" (keep in mind that a game has 90 minutes)
4. Loop over the events and log them to the console, marking whether it's in the first half or second half (after 45 min) of the game, like this:
      [FIRST HALF] 17: ⚽️ GOAL
GOOD LUCK 😀
*/

  gameEvents = new Map([
    [17, '⚽️ GOAL'],
    [36, '🔁 Substitution'],
    [47, '⚽️ GOAL'],
    [61, '🔁 Substitution'],
    [64, '🔶 Yellow card'],
    [69, '🔴 Red card'],
    [70, '🔁 Substitution'],
    [72, '🔁 Substitution'],
    [76, '⚽️ GOAL'],
    [80, '⚽️ GOAL'],
    [92, '🔶 Yellow card'],
  ]);

  constructor() {}

  ngOnInit() {

    //1
    const events = [...new Set(this.gameEvents.values())];
    console.log(events);

    //2
    this.gameEvents.delete(64);
    console.log(this.gameEvents);

    //3
    console.log(
      `An event happened, on average, every ${90 / this.gameEvents.size} minutes`
    );

    const time = [...this.gameEvents.keys()].pop();
    console.log(time);
    console.log(
      `An event happened, on average, every ${time / this.gameEvents.size} minutes`
    );

    //4

    for(const [time,event] of this.gameEvents){
      const half = time < 45 ? 'FIRST HALF':'SECOND HALF';
      console.log(`[${half}] ${time}: ${event}`);
    }
  }
}
