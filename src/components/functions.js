export function getDateValues(d){
    //get day of week "eg Sunday"
    const weekDays = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"]
    const day = weekDays[d.getDay()]

    //get timestamp "eg 1639816377"
    const time = Math.floor(d.getTime()/1000)

    //get date "eg 21.11.2021"
    const date = [ d.getDate(), d.getMonth()+1, d.getFullYear() ].join(".")

    return {
        day,
        date,
        time,
    }
}