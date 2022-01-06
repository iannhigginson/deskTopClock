function clock() {
 const _date = new Date();

 let year = _date.getFullYear();
 console.log({ year });

 let month = _date.getMonth();
 /**
  **  We get the month name
  */
 let monthNames = [
  "January",
  "February",
  "March",
  "April",
  "May",
  "June",
  "July",
  "August",
  "September",
  "October",
  "November",
  "December",
 ];
 let thisMonthIs = monthNames[month];
 console.log(thisMonthIs);
 /**
  ** Now we make it a two digit string
  */
 month = month < 10 ? `0${month}` : `${month}`;
 let shortDayMonth = parseInt(month) + 1;
 shortDayMonth = shortDayMonth < 10 ? `0${shortDayMonth}` : `${shortDayMonth}`;
 console.log(shortDayMonth);

 /**
  *
  ** Now we work the day
  *
  */
 let date = _date.getDate();
 /**
  ** Now we make it a two digit string
  *? rawDate is the raw date
  */
 date = date < 10 ? `0${date}` : `${date}`;
 let rawDate = date;
 console.log({ rawDate });
 /**
  ** Get the first,second,third and the ths
  */
 date =
  date < 2
   ? `${date}st`
   : date === 2
   ? `${date}nd`
   : date === 3
   ? `${date}rd`
   : `${date}th`;

 console.log({ date });

 let day = _date.getDay();
 let dayDays = [
  "Sunday",
  "Monday",
  "Tuesday",
  "Wednessday",
  "Thursday",
  "Friday",
  "Saturday",
 ];
 let toDayIs = dayDays[day];
 console.log(toDayIs);

 let theDate = `${rawDate}/${shortDayMonth}/${year}`;
 console.log({ theDate });

 let theLongDate = `${toDayIs} ${date} ${thisMonthIs} ${year}`;
 console.log({ theLongDate });

 /**
  ** Lets do the time
  */

 let hrs = _date.getHours();
 hrs = hrs < 10 ? `0${hrs}` : `${hrs}`;

 let mins = _date.getMinutes();
 mins = mins < 10 ? `0${mins}` : `${mins}`;

 let secs = _date.getSeconds();
 secs = secs < 10 ? `0${secs}` : `${secs}`;

 let theTime = `${hrs}:${mins}:${secs}`;
 console.log(theTime);

 let phrs = (100 * hrs) / 24;
 let pmins = (100 * mins) / 60;
 let psecs = (100 * secs) / 60;

 console.log(phrs);
 console.log(pmins);
 console.log(psecs);

 // document.getElementById("dateContainer").innerText = theDate;

 // document.getElementById("timeContainer").innerText = theTime;

 // document.getElementById("hpCell").innerText = phrs.toFixed(2) + "%";
 // document.getElementById("mpCell").innerText = pmins.toFixed(2) + "%";
 // document.getElementById("spCell").innerText = psecs.toFixed(2) + "%";

 // document.getElementById("hCell").innerText = hrs;
 // document.getElementById("mCell").innerText = mins;
 // document.getElementById("sCell").innerText = secs;

 // document.getElementById("hour").value = hrs;
 // document.getElementById("minute").value = mins;
 // document.getElementById("second").value = secs;

 // setTimeout(clock, 1000);
}

clock();
