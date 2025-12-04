import React, {useEffect} from 'react'


export default function Header(){
useEffect(()=>{
// year
const year = document.getElementById('year')
if(year) year.textContent = new Date().getFullYear()
}, [])


return (
<header>
<div className="nav">
<div className="brand">
<div className="logo">YN</div>
<div>
<div style={{fontWeight:800}}>Your Name</div>
<div style={{fontSize:12,color:'var(--muted)'}}>Designer • Frontend Engineer</div>
</div>
</div>


<nav>
<button id="menuToggle" className="ghost" style={{display:'none',padding:'10px 14px',borderRadius:10}}>☰</button>
<ul id="navList">
<li><a href="#home">Home</a></li>
<li><a href="#services">Services</a></li>
<li><a href="#projects">Work</a></li>
<li><a href="#blog">Blog</a></li>
<li><a href="#contact">Contact</a></li>
</ul>
</nav>


<div className="actions">
<button id="themeToggle" className="ghost" title="Toggle theme">Toggle</button>
<a className="ghost" href="/resume.pdf" download id="downloadCV">Download CV</a>
<a className="btn" href="#contact">Hire Me</a>
</div>
</div>
</header>
)
}