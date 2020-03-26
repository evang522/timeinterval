<img src="/assets/clock.png" width=100/>

# Time Interval JS
[![npm version](https://badge.fury.io/js/time-interval-js.svg)](https://badge.fury.io/js/time-interval-js) 

**A simple Time Interval class developed for working with javascript date objects and relationships between them.**

This package is written in Typescript, therefore there is no additional typing package needed to work with TS.

## Getting Started

Install the package with NPM or yarn 
   
`npm i time-interval-js`   
-or-  
`yarn add time-interval-js` 

To import and use in your code:
```js
import { TimeInterval } from 'time-interval-js'
```

And that's it.

## Usage

### Named Constructors  
Time Units:
```js
const interval = TimeInterval.forOneHour();

interval.inHours(1); // 1
```
Comparison Based Constructor:
```js
const date1 = new Date(2020-01-01);
const date2 = new Date(2020-01-02);

const intervalBetweenTwoDates = TimeInterval.fromTimeBetweenTwoDates(date1, date2);
// Produces a time interval equal to precisely the time between these two dates.

```

### Get a time interval in terms of any common time measurement:
```js
const interval = TimeInterval.forSpecifiedDays(2);

interval.inHours();  // 48
interval.inDays();  // 2
interval.inWeeks();  // 0.2857142857142857
// inHours()
// inDays()
// inSeconds()
// inMilliseconds()
```
Note: There is a `getInApproximateYears` method, but it is named this way because **there is no guaranteed perfect precision**. As we all know, years are not always 365 days, although the package uses this measure to calculate years.


### Time Interval Comparison
```js
const daysInterval = TimeInterval.fromSpecifiedDays(5);
const weeksInterval = TimeInterval.fromSpecifiedWeeks(2);

weeksInterval.isLongerThan(daysInterval) // true
daysInterval.isShorterThan(weeksInterval) // true
```

### Adding Time Intervals to Dates  
Want to calculate a date that is 5 weeks from now?
```js
const now  = new Date();
const interval = TimeInterval.forSpecifiedWeeks(5);

interval.addToDate(now) // produces a new date that is exactly 5 weeks from the provided date.
```
## Detailed Method Documentation
The code is straightforward enough that you should be able to understand everything by looking at the single source file.

Check it out [here](/src/TimeInterval.ts). 

## Interfaces
There is also a `TimeIntervalInterface` available if you want to mock the object for any reason. The `TimeInterval` class implements this interface.
```js
import { TimeIntervalInterface } from 'time-interval-js';
```

## Important Note Regarding Time Relationships
**TL;DR:** All Intervals are positive values.

  
This library operates on absolute time intervals. Theoretically speaking, a time interval has no negative or positive value, as it is only a relationship between two dates in time, and taking a stance from which point in time to view the difference (as positive or negative) is an additional property which the package currently does not support. Maybe later :) 

Therefore, don't expect to get a negative value when you create a time interval between today and last week. 

```js
const lastWeek = new Date('2020-01-05');
const today = new Date('2020-01-12');

const interval = TimeInterval.fromTimeBetweenTwoDates(lastWeek, today);

interval.inSeconds()  // will ALWAYS be positive
```

All time intervals will have positive values. In the future perhaps we can add some specific methods
which allow us to consider a perspective from which to judge the relationship between two points in time.
