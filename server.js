const express = require("express")
const fs = require("fs")
const app = express()

app.use(express.json())
app.use(express.text())


app.get("/complete",(req,res)=>{
    const read = fs.readFileSync("availableCourses.json")
    const convert = JSON.parse(read)

    res.send(convert)
})

app.get("/",(req,res)=>{
    const read = fs.readFileSync("availableCourses.json")
    const convert = JSON.parse(read)
    var firstArr = [];
    for (var i of  convert){
        
        var firstObj = {};
        firstObj["id"]=i["id"]
        firstObj["name"]=i["name"]
        firstObj["description"]=i["description"]
        
        firstArr.push(firstObj)
    }    
    res.send(firstArr)
})

app.get("/courses",(req,res)=>{
    const read = fs.readFileSync("availableCourses.json")
const convert = JSON.parse(read)
var firstArr = []
for (var i of convert){
    var secondArr=[]
    
    for (var j of i["submission"]){
        var firstObj = {}
        firstObj["id"]=j["id"]
        firstObj["courseid"]=j["courseid"]
        firstObj["name"]=j["name"]
        firstObj["description"]=j["description"]
        secondArr.push(firstObj)
    } 
    firstArr.push(secondArr)
}    

    res.send(firstArr)
})


app.get("/comments",(req,res)=>{
    const read = fs.readFileSync("availableCourses.json")
    const convert = JSON.parse(read)
    
    var firstArr = []
    for (var i of convert){
        for (var j of i["submission"]){
            firstArr.push(j["usersummision"])
        }  
    }
    
    var thirdArr = [];
    for (var k of firstArr){
        for (var r of k){
            thirdArr.push(r)
        } 
    }
    res.send(thirdArr)
})



app.get("/:id",(req,res)=>{
    const read = fs.readFileSync("availableCourses.json")
const convert = JSON.parse(read)
var firstArr = [];
for (var i of  convert){
    
    var firstObj = {};
    firstObj["id"]=i["id"]
    firstObj["name"]=i["name"]
    firstObj["description"]=i["description"]
    
    firstArr.push(firstObj)
    
}
    var id = req.params.id-1
    res.send(firstArr[id])
})







app.get("/courses/:id",(req,res)=>{
    const read = fs.readFileSync("availableCourses.json")
const convert = JSON.parse(read)
var firstArr = []
for (var i of convert){
    var secondArr=[]
    
    for (var j of i["submission"]){
        var firstObj = {}
        firstObj["id"]=j["id"]
        firstObj["courseid"]=j["courseid"]
        firstObj["name"]=j["name"]
        firstObj["description"]=j["description"]
        secondArr.push(firstObj)
    } 
    firstArr.push(secondArr)
}    

    var id = req.params.id -1

    res.send(firstArr[id])
})



app.get("/courses/:id/:id1",(req,res)=>{
    const read = fs.readFileSync("availableCourses.json")
const convert = JSON.parse(read)
var firstArr = []
for (var i of convert){
    var secondArr=[]
    
    for (var j of i["submission"]){
        var firstObj = {}
        firstObj["id"]=j["id"]
        firstObj["courseid"]=j["courseid"]
        firstObj["name"]=j["name"]
        firstObj["description"]=j["description"]
        secondArr.push(firstObj)
    } 
    firstArr.push(secondArr)
}    

    var id = req.params.id -1
    var id1 = req.params.id1-1
    res.send(firstArr[id][id1])
})










app.get("/comments/:id",(req,res)=>{
    const read = fs.readFileSync("availableCourses.json")
const convert = JSON.parse(read)

var firstArr = []
for (var i of convert){
    var secondArr = []
    for (var j of i["submission"]){
        secondArr.push(j["usersummision"])
    }firstArr.push(secondArr)  
}
console.log(firstArr);

    var id = req.params.id-1
    res.send(firstArr[id])

})


app.get("/comments",(req,res)=>{
    const read = fs.readFileSync("availableCourses.json")
    const convert = JSON.parse(read)
    
    var firstArr = []
    for (var i of convert){
        for (var j of i["submission"]){
            firstArr.push(j["usersummision"])
        }  
    }
    
    var thirdArr = [];
    for (var k of firstArr){
        for (var r of k){
            thirdArr.push(r)
        } 
    }
    res.send(thirdArr)

})





app.get("/comments/:id/:id2",(req,res)=>{
    const read = fs.readFileSync("availableCourses.json")
const convert = JSON.parse(read)

var firstArr = []
for (var i of convert){
    var secondArr = []
    for (var j of i["submission"]){
        secondArr.push(j["usersummision"])
    }firstArr.push(secondArr)  
}
console.log(firstArr);

    var id = req.params.id-1
    var id2 = req.params.id2-1
    res.send(firstArr[id][id2])

})



app.get("/comments/:id/:id1/:name",(req,res)=>{
    const read = fs.readFileSync("availableCourses.json")
const convert = JSON.parse(read)

var firstArr = []
for (var i of convert){
    var secondArr = []
    for (var j of i["submission"]){
        secondArr.push(j["usersummision"])
    }firstArr.push(secondArr)  
}
console.log(firstArr);

    var id = req.params.id-1
    var id1 = req.params.id1-1
    var name = req.params.name

    for (var k of firstArr[id][id1]){
        if (k["username"]==name){
            res.send(k)
        }
    }
})



var port = 2000;
app.listen(port,()=>{
    console.log("server started at",port);  
})

const listener = app.listen(process.env.PORT, () => {
  console.log("Your app is listening on port " + listener.address().port);
});
