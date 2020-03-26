/* eslint-disable no-magic-numbers */

import { TimeInterval } from '../src';

describe('Named Constructors', () =>
{
    it('For One Day', () =>
    {
        const interval = TimeInterval.forOneDay();
        expect(interval.inDays()).toBe(1);
    });

    it('For Two Days', () =>
    {
        const interval = TimeInterval.forSpecifiedDays(2);

        expect(interval.inDays()).toBe(2);
    });

    it('For One Week', () =>
    {
        const interval = TimeInterval.forOneWeek();

        expect(interval.inDays()).toBe(7);
    });

    it('For Specified Weeks', () =>
    {
        const interval = TimeInterval.forSpecifiedWeeks(3);

        expect(interval.inDays()).toBe(21);
    });

    it('For One Hour', () =>
    {
        const interval = TimeInterval.forOneHour();

        expect(interval.inHours()).toBe(1);
    });

    it('For One Minute', () =>
    {
        const interval = TimeInterval.forOneMinute();
        expect(interval.inMinutes()).toBe(1);
    });

    it('For Specified Minutes', () =>
    {
        const interval = TimeInterval.forSpecifiedMinutes(5);
        expect(interval.inMinutes()).toBe(5);
    });

    it('For Specified Seconds', () =>
    {
        const interval = TimeInterval.forSpecifiedSeconds(22);

        interval.inSeconds();

        expect(interval.inSeconds()).toBe(22);
    });

    it('For 24 Hours', () =>
    {
        const interval = TimeInterval.forSpecifiedHours(24);

        expect(interval.inDays()).toBe(1);
    });

    it('From Time Between Two Dates', () =>
    {
        const date1 = new Date('2000-05-25');
        const date2 = new Date('2000-05-26');

        const interval = TimeInterval.fromTimeBetweenTwoDates(date1, date2);

        expect(interval.inDays()).toBe(1);
    });
});

describe('Specific Getter Methods for time units', () =>
{
    it('In Milliseconds', () =>
    {
        const interval = TimeInterval.forSpecifiedHours(1);
        expect(interval.inMilliseconds()).toBe(TimeInterval.ONE_HOUR);
    });

    it('In Seconds', () =>
    {
        const interval = TimeInterval.forSpecifiedHours(1);
        expect(interval.inMilliseconds()).toBe(TimeInterval.ONE_SECOND * 60 * 60);
    });

    it('In Minutes', () =>
    {
        const interval = TimeInterval.forSpecifiedHours(0.5);
        expect(interval.inMinutes()).toBe(30);
    });

    it('In Hours', () =>
    {
        const interval = TimeInterval.forSpecifiedHours(2);
        expect(interval.inHours()).toBe(2);
    });

    it('In Days', () =>
    {
        const interval = TimeInterval.forSpecifiedDays(2);
        expect(interval.inDays()).toBe(2);
    });

    it('In Weeks', () =>
    {
        const interval = TimeInterval.forSpecifiedDays(14);
        expect(interval.inWeeks()).toBe(2);
    });

    it('In Approximate Years', () =>
    {
        const interval = TimeInterval.forSpecifiedDays(365);
        expect(interval.inApproximateYears()).toBe(1);
    });
});

describe('Comparison and Adding', () =>
{
    it('Is One Period of Time Longer than Another', () =>
    {
        const interval = TimeInterval.forSpecifiedDays(4);

        expect(interval.isLongerThan(TimeInterval.forSpecifiedDays(3))).toBe(true);
        expect(interval.isLongerThan(TimeInterval.forSpecifiedDays(5))).toBe(false);
    });

    it('Add To Date -- one Day', () =>
    {
        const date = new Date('2015-05-25');

        const interval = TimeInterval.forSpecifiedDays(1);
        expect(interval.addToDate(date)).toEqual(new Date('2015-05-26'));
    });

    it('Add To Date -- one Week', () =>
    {
        const date = new Date('2015-05-20');

        const interval = TimeInterval.forOneWeek();
        expect(interval.addToDate(date)).toEqual(new Date('2015-05-27'));
    });
});

