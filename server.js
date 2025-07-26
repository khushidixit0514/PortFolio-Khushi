import express from "express";
import bodyParser from "body-parser";

const app= express();
const port=3000;

app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.static("public"));
app.set("view engine", "ejs");

app.get("/",(req,res)=>{
    console.log("fine");
    res.render("home", { title: "Home", activePage: "home" });
});
app.get("/introduction",(req,res)=>{
    console.log("intopage");
    res.render("introduction", { title: "introduction", activePage: "introduction" });
});

app.get("/achievement",(req,res)=>{
    console.log("achievementpage");
    res.render("achievement", { title: "achievement", activePage: "achievement" });
});
app.get("/skill",(req,res)=>{
    console.log("skillpage");
    res.render("skill", { title: "skill", activePage: "skill" });
});
app.get("/experience",(req,res)=>{
    console.log("experiencepage");
    res.render("experience", { title: "experience", activePage: "experience" });
});
app.get("/projects",(req,res)=>{
    console.log("projectspage");
    res.render("projects", { title: "projects", activePage: "projects" });
});
app.listen(port , ()=>{
    console.log(`Listenin at port ${port}`);
});