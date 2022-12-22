let date = new Date();
let month, day;
if (date.getMonth().toString().length < 2) { month = "0" + (date.getMonth() + 1) }
else { month = date.getMonth() - 1 }
if (date.getDay().toString().length < 2) { day = "0" + (date.getDay() + 1) }
else { day = date.getDay() }
let fullDate = [date.getFullYear(), month, day].join('-')

export default fullDate;
