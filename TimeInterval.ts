/* eslint-disable no-magic-numbers */
class TimeInterval
{
    public static readonly ONE_SECOND = 1000;
    public static readonly ONE_MINUTE = 60000;
    public static readonly ONE_DAY = 86400000;
    public static readonly ONE_HOUR = 3600000;
    public static readonly ONE_WEEK = 604800000;

    private readonly milliseconds: number;

    private constructor(milliseconds: number)
    {
        this.milliseconds = milliseconds;
    }

    public static fromTimeBetweenTwoDates(date1: Date | number, date2: Date | number): TimeInterval
    {
        const firstDateInMilliseconds = date1 instanceof Date ? date1.getTime() : date1;
        const secondDateInMilliseconds = date2 instanceof Date ? date2.getTime() : date2;

        return new this(Math.abs(firstDateInMilliseconds - secondDateInMilliseconds));
    }

    public static forOneHour(): TimeInterval
    {
        return new this(this.ONE_HOUR);
    }

    public static forSpecifiedHours(hours: number): TimeInterval
    {
        return new this(this.ONE_HOUR * hours);
    }

    public static forOneDay(): TimeInterval
    {
        return new this(this.ONE_DAY);
    }

    public static forSpecifiedDays(days: number): TimeInterval
    {
        return new this(this.ONE_DAY * days);
    }

    public static forOneWeek(): TimeInterval
    {
        return new this(this.ONE_WEEK);
    }

    public static absoluteTimeFromNow(date: Date): TimeInterval
    {
        return TimeInterval.fromTimeBetweenTwoDates(Date.now(), date.getTime());
    }

    public inMilliseconds(): number
    {
        return this.milliseconds;
    }

    public inMinutes(): number
    {
        return this.milliseconds / TimeInterval.ONE_MINUTE;
    }

    public inHours(): number
    {
        return this.milliseconds / TimeInterval.ONE_HOUR;
    }

    public inDays(): number
    {
        return this.milliseconds / TimeInterval.ONE_DAY;
    }

    public inWeeks(): number
    {
        return this.milliseconds / TimeInterval.ONE_WEEK;
    }

    public inApproximateYears(): number
    {
        return this.milliseconds / (TimeInterval.ONE_DAY * 365 );
    }

    public addToDate(date: Date): Date
    {
        return new Date(this.milliseconds + date.getTime());
    }
}

export default TimeInterval;
