---
title: "Unity’s Data-Oriented Technology Stack (DOTS)"
description: "Worked on the Entities team to integrate DOTS into packages and the core of Unit itself"
image: "https://unity.com/_next/image?url=https%3A%2F%2Fcdn.sanity.io%2Fimages%2Ffuvbjjlp%2Fproduction%2Fa8a7d413c81ac8a5cf104d3dab696a61010b8838-1920x1080.jpg%3Fauto%3Dformat&w=3840&q=75"
startDate: "2019-12-01"
endDate: "2022-08-01"
skills: ["Unity", "C++", "C#", "Data Oriented Programming", "multi-threaded"]
demoLink: "https://unity.com/dots"
---

DOTS includes technologies and packages that deliver a data-oriented design approach to building games in Unity. Applying data-oriented design to a game’s architecture empowers creators to scale processing in a highly performant manner.
---

I worked on the DOTS initiative at Unity. It was an amazing opportunity getting to work on such cutting edge, high performance, world class technology. 

But to summarize this project, DOTS is Unity's attempt to give a new paradigm to how you approach game development. Instead of GameObjects, DOTS makes use of an 
ECS paradigm powered by the opinionated C# Burst compiler, and ultiamtely driven with parallelism in mind (particularly with job based scheduling). This is a system esepcially designed for larger scale, AAA projects or for games that are simulation heavy. 

In particular, the team I worked on maintained the ESC part in the Entities package. So we worked at the heart of DOTS to evangelize for the project, help other parts of the engine integrate into DOTS, and make sure Burst optimizations were performing as expected. A few othe the reponsibilies I had over my tenue on Entites included

- verifying performance of Burst function pointers, and adding them where performance gains were met
- helping to integrate IJobEntities as scaffolding over older pipelines of how you would engage with the package
- taking responsibility for EntityTransactionManager, used for engaging in multi-threaded acts with Entities
- comparaing approaches with different data structures to help minimize sptial footprints when using debug level features. 

Absolutely amazing experience. Really help me approciate game engines even more than before I got in. 