---
title: "https://gpoauto.ro"
website: "https://gpoauto.ro"
date: "2022-01-07"
featuredImage: ./thumb-featured-gpo.png
tags:
  [
    "JavaScript",
    "Gatsby",
    "GraphQL",
    "NodeJs",
    "AWS",
    "NginX",
    "Linux",
    "Preact",
    "Leaflet",
    "github",
    "Nodemailer",
    "Cloudflare"
  ]
id: "1"
---

<style>
  /* underline{}, green bold color{color}, center, justify, image border */
c{
  color: var(--accent-color);
  display: inline-block;
  font-weight: 700;
}
centered{
  text-align:center;
}
justify{
  text-align:justify;
}
    Img{
      border: solid 1px #fff;
    }
    Img:hover{
      border: solid 2px var(--accent-color);
    }
    
 </style>



<justify>

A blazing fast one page website for the GPO auto driving school based in Odorheiu-Secuiesc (RO). 
The site was created to reflect the corporate's identity design, and to serve a platform where a client can get basic information of 
the **#GPO sofőriskola** (driving school) services.  

The main features asked by the client and implemented by the JointAdventure Bt. are the next:
 * responsive banner image
 * card with the services
 * about us section
 * slider with former students
 * contact us section
 * a contact form
 * interactive map with the companies location  

To achieve the requirements of our client, we've used and welded together several technologies. For fronted, we've used the blazing fast <c>Gatsby</c> static site generator, which is a <c>React JS</c> based framework. 
This static site, sits on a shared host, which is in a direct communication with the projects's <c>github</c> repository.   
<br/>

The site, obviously is speed oriented, and uses the latest available technologies to work 
around the good old performance issues, like code splitting, unused css, FOUC, image compression and lazy loading.

<center>Thank you 💜GatsbyJS. <br/> </center>

Besides these, an <c> Nginx </c> based <c>AWS EC2</c> instance serves the backend for the <c>NodeJS </c> application, which operates the contact form submissions. 
For e-mailing we use the <c>NodeMailer</c>'s API.
Next to these stacks, several backend technologies were implemented, to make the API and Linux based server side secure and fluent. 
</justify>
<br />
<br />



![photo](thumb-gpo-1.png)  
![photo](thumb-gpo-2.png)  
![photo](thumb-gpo-3.png)  
