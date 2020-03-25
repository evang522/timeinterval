export default interface TimeIntervalInterface {
    inMilliseconds(): number;

    inSeconds(): number;

    inMinutes(): number;

    inHours(): number;

    inDays(): number;

    inWeeks(): number;

    inApproximateYears(): number;

    addToDate(date: Date): Date;

    isLongerThan(interval: TimeIntervalInterface): boolean;

    isShorterThan(interval: TimeIntervalInterface): boolean;
}

