let day = new Date().getDay() 
let hours = new Date ().getHours()

console.log(hours)

function verif1 (req,res,next){
    if(day>1 && day<6 && hours>8 && hours<17)
    next()
    else(res.send(`<h1>Welcome servise colsed now... , service open 8h-->17h / monday-->friday<h1/>`))
}
module.exports= verif1