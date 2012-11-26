/*
 * Copyright 2007-2011, Petr Enin
 *
 */

function jscounter(id, year, month, day, hours, minutes, seconds) {
    var objDateNow = new Date(),
        timeNow = objDateNow.getTime(),
        iseconds = (seconds) ? seconds : 0,
        iminutes = (minutes) ? minutes : 0,
        ihours = (hours) ? hours : 0,
        iday = (day) ? day : 1,
        imonth = (month) ? month : 0;
    if (imonth) imonth--; // month 0-11
    var iyear = (year) ? year : (objDateNow.getFullYear() + 1),
        objDateNew = new Date(iyear, imonth, iday, ihours, iminutes, iseconds),
        timeNew = objDateNew.getTime(),
        diff = timeNew - timeNow;

    if (diff < 0) diff *= (-1);

    var msec = 1000,
        mmin = 60 * msec,
        mhour = 60 * mmin,
        mday = 24 * mhour,
        d = Math.floor(diff / (mday));
    diff -= (d * mday);
    var h = Math.floor(diff / (mhour));
    diff -= (h * mhour);
    var m = Math.floor(diff / (mmin));
    diff -= (m * mmin);
    var s = Math.floor(diff / (msec));
    if (h < 10) h = "0" + h;
    if (m < 10) m = "0" + m;
    if (s < 10) s = "0" + s;

    document.getElementById(id).innerHTML = "" + d + " days " + h + ":" + m + ":" + s + "";
    window.setTimeout("jscounter('" + id + "', " + year + ", " +
        month + ", " +
        day + ", " +
        hours + ", " +
        minutes + ", " +
        seconds + ")", 1000);
}

