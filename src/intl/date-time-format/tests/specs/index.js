/**
 * DateTimeFormat tc
 * @author yiminghe@gmail.com
 */
KISSY.add(function (S, DateTimeFormat, GregorianCalendar) {

    var Style=DateTimeFormat.Style;

    describe('date format', function () {
        it('works simply', function () {
            var gregorianCalendar = new GregorianCalendar(2013,
                GregorianCalendar.JULY, 9);
            var df = new DateTimeFormat('yyyy-MM-dd');
            expect(df.format(gregorianCalendar)).toBe('2013-07-09');
            df = new DateTimeFormat('yy-MM-dd');
            expect(df.format(gregorianCalendar)).toBe('13-07-09');
        });

        it('getDateTimeInstance works', function () {
            var gregorianCalendar = new GregorianCalendar(2013,
                GregorianCalendar.JULY, 11,14,31,19);
            var df =  DateTimeFormat.getDateTimeInstance(Style.FULL,Style.FULL);
            expect(df.format(gregorianCalendar)).toBe('2013年07月11日 星期四 下午02时31分19秒 GMT+0800');
        });
        it('getDateTimeInstance works for midnight', function () {
            var gregorianCalendar = new GregorianCalendar(2013,
                GregorianCalendar.JULY, 11,0,31,19);
            var df =  DateTimeFormat.getDateTimeInstance(Style.FULL,Style.FULL);
            expect(df.format(gregorianCalendar)).toBe('2013年07月11日 星期四 上午12时31分19秒 GMT+0800');
        });
        it('getDateTimeInstance works for noon', function () {
            var gregorianCalendar = new GregorianCalendar(2013,
                GregorianCalendar.JULY, 11,12,31,19);
            var df =  DateTimeFormat.getDateTimeInstance(Style.FULL,Style.FULL);
            expect(df.format(gregorianCalendar)).toBe('2013年07月11日 星期四 下午12时31分19秒 GMT+0800');
        });
    });

}, {
    requires: ['intl/date-time-format', 'date/gregorian']
});