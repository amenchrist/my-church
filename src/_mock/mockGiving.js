const recipients = [ 'RHAPSODY OF REALITIES', 'HEALING SCHOOL', 'LOVEWORLD UK', 'INNERCITY MISSION', 'MINISTRY PROGRAMS' ]


function getRandomValue(max, array){
    return array[Math.floor(Math.random()*max)]
}

function getRandomDate(){
    const days = Array.apply(null, Array(28)).map( (x, i) => i<10? `0${i}`: i );
    const months = Array.apply(null, Array(12)).map((x, i) => i<9? `0${i+1}`: i+1)
    return `${days[Math.floor(Math.random()*days.length)]}.${months[Math.floor(Math.random()*months.length)]}.2022`
}

function getRandomTime(){
    const hours = Array.apply(null, Array(24)).map((x, i) => i<10? `0${i}`: i);
    const minutes = Array.apply(null, Array(60)).map((x, i) => i<10? `0${i+1}`: i)
    return `${hours[Math.floor(Math.random()*hours.length)]}:${minutes[Math.floor(Math.random()*minutes.length)]}`
}

function getRandomAmount(){
    return `${Math.floor(Math.random()*100)}.00`

}

const tithes = Array.apply(null, Array(100)).map(function (x, i) { 
    const amount = getRandomAmount(), time = getRandomTime(), date = getRandomDate();

    return {
    id: i+'w2f34f3fw3',
    amount,
    currency: 'GBP',
    category: 'TITHE',
    recipient: 'CHRIST EMBASSY BARKING',
    time,
    date,
    description: '',
    reference: 'QWFQFF',
    };
})

const offerings = Array.apply(null, Array(100)).map(function (x, i) { 
    const amount = getRandomAmount(), time = getRandomTime(), date = getRandomDate();

    return {
    id: i+'w2f34f3fw3',
    amount,
    currency: 'GBP',
    category: 'OFFERING',
    recipient: 'CHRIST EMBASSY BARKING',
    time,
    date,
    description: '',
    reference: 'QWFQFF',
    };
})

const specialSeeds = Array.apply(null, Array(100)).map(function (x, i) { 
    const amount = getRandomAmount(), time = getRandomTime(), date = getRandomDate();

    return {
    id: i+'w2f34f3fw3',
    amount,
    currency: 'GBP',
    category: 'SPECIAL SEEDS',
    recipient: 'CHRIST EMBASSY BARKING',
    time,
    date,
    description: '',
    reference: 'QWFQFF',
    };
})

const other = Array.apply(null, Array(100)).map(function (x, i) { 
    const amount = getRandomAmount(), time = getRandomTime(), date = getRandomDate();

    return {
    id: i+'w2f34f3fw3',
    amount,
    currency: 'GBP',
    category: 'OTHER',
    recipient: 'CHRIST EMBASSY BARKING',
    time,
    date,
    description: '',
    reference: 'QWFQFF',
    };
})
export const partnerships = Array.apply(null, Array(100)).map(function (x, i) { 
    const amount = getRandomAmount();
    const recipient = getRandomValue(recipients.length, recipients), time = getRandomTime(), date = getRandomDate();
    return {
    id: i+'w2f34f3fw3',
    amount,
    currency: 'GBP',
    category: 'PARTNERSHIP',
    recipient,
    time,
    date,
    description: '',
    reference: 'QWFQFF',
    };
})

export const givings = offerings.concat(tithes, partnerships, specialSeeds, other)

// export const givings = [
//     {
//         id: 'w2f34f3fw3',
//         amount: 20,
//         currency: 'GBP',
//         category: 'PARTNERSHIP',
//         recipient: 'RHAPSODY OF REALITIES',
//         time: '09:30',
//         date: '21.06.2022',
//         description: '',
//         reference: 'QWFQFF',
//     },
//     {
//         id: '2323d23',
//         amount: 40,
//         currency: 'GBP',
//         category: 'OFFERING',
//         recipient: 'Christ Embassy Barking',
//         time: '16:23',
//         date: '13.09.2022',
//         description: '',
//         reference: 'SDFQQW',
//     },
//     {
//         id: 'd23d23d',
//         amount: 10,
//         currency: 'GBP',
//         category: 'TITHE',
//         recipient: 'Christ Embassy Barking',
//         time: '12:43',
//         date: '20.04.2022',
//         description: '',
//         reference: 'XSDFEFWE',
//     }
// ]