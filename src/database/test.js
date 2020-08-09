const Database = require("./db")
const createProffy = require("./createProffy")

Database.then(async (db) => {
    //inserir dados

    proffyValue = {
        name: "Marley Lobão de Sousa",
        avatar: "https://avatars1.githubusercontent.com/u/64692533?s=460&u=fa64aefc3beddbef7400a8a2d06db928dc1c67c9&v=4",
        whatsapp: "123456789",
        bio: "Bora bora.",
    }

    classValue = {
        subject: 4,
        cost: "100",
        
    }

    classScheduleValues = [
        {
            weekday: 1,
            time_from:720,
            time_to: 1220,
        },
        {
            weekday: 0,
            time_from:520,
            time_to: 1220,
        }
    ]

    //await createProffy(db, {proffyValue, classValue, classScheduleValues})

    //consultar dados
    const selectedProffys = await db.all("SELECT * FROM proffys")

    const selectClassesAndProffys = await db.all(`
        SELECT classes.*, proffys.*
        FROM proffys
        JOIN classes ON (classes.proffy_id = proffy_id)
        WHERE classes.proffy_id = 1;
    `)

    const selectClassesSchedule = await db.all(`
        SELECT class_schedule.*
        FROM class_schedule
        WHERE class_schedule.class_id = 1
        AND class_schedule.weekday = "0"
        AND class_schedule.time_from <= "1300"
        AND class_schedule.time_to > "1300"
    `)

    console.log(selectClassesSchedule)
})