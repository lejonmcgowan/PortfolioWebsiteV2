---
title: "Crab Rays"
description: "A muti-threaded Ray Tracer, powered by Rust"
image: "https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEhw6OTWnofJECiDWHVwbWSThyphenhyphenxExI7IYNoKWfYmEQBn-csyzMEvwf61VZL7AFgjPfM4jm6ox19OgDaqfs4dHeAXJ6C1r1LfUX1uYtEyKEtchI8s5jbuaAmUwDoQZame8lIQ_SfPKWgiAto/w1200-h630-p-k-no-nu/bunny_diff_cornell2.png"
startDate: "2026-01-15"
skills: ["Rust", "PRB", "Lights", "Math"]
---

## Overview

My current ongoing project. There's three goals I have for this project

1. To redo and modernize an old college project I worked on. The old project was a C++ project making use ofthe [POV-Ray Scene format](https://www.povray.org/). Here I wanted a chance to make use of GLTF 2 as a modern, open scene format. 
2. To work on a few features I never got around to at the time. Textures is one of the big examples, as well as materials (PBR was still very new when I was in college)
3. to get a medium-large scale showcase of my Rust knowledge. I believe Rust is the future of systems programming, so I wanted to create a situation to really understand its strenghts and drawbacks as you work in a larger system

For this project I want to keep dependencies small. As of now, it's the offcially maintained GLTF crate, a vector/matrix library, and a library used to generate an image from the results. 