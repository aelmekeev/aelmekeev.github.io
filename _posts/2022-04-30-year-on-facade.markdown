---
layout: post
title:  Year on Facade
date:   2022-04-30 13:03:15 +0000
tags:   projects
---

## Intro

I have started another collection. This time it is about buildings with the year of (re-)construction on their facade: https://aelmekeev.github.io/year-on-facade/.

## Why?

In some way, it is a replacement for the [collection of fire bells](https://fire-bells.herokuapp.com/) ([GitHub](https://github.com/aelmekeev/fire-bells)) I have started more than five years ago. There is no way for me to proceed with that one since I no longer live in Russia though.

The one thing I loved about the fire bells is an additional motivation for the local area exploration. There are hidden gems everywhere, and the need to find something cool really helps with going somewhere you have never been before.

## How does this work?

The actual collection is just a set of CSV files for each city. Each line contains the year and coordinates of the building it is on. And then around that:

* a script that performs validation of the data added to CSV files
* script that SVG files for each city that represent the timeline and years that are part of the collection
* a simple page that allows comparing the state of the collection for different cities
* a simple statistics page for each city where you can visually understand which years are still not in the collection
* and, of course, a map with all the buildings added as markers

Everything is simple and, surprisingly, I like the result.

## What have I learned?

Not too much from a technical perspective, to be honest. It is not my first experience working with Google Maps, and also functionality I use is pretty trivial. It was about small things, I guess, e.g.:

* to be able to add a new item to the collection with a simple modification of a CSV file via GitHub UI, I have made GitHub Action push some changes as part of the build pipeline
* I had to understand how javascript is loaded and executed when we load the webpage
* basic understanding of SVG

I hope to learn quite a lot about London and its history from this project! Here are a couple of examples of things I have learned so far:

* world's first ATM [was installed](https://home.barclays/news/2017/06/from-the-archives-the-atm-is-50/) on 27 June 1967 at a branch of Barclays Bank in Enfield, north London
* Google can blur whole buildings in Street View as it happened with [73 Plender Street](https://www.google.com/maps/@51.5364486,-0.1379086,3a,75y,164.76h,95t/data=!3m6!1e1!3m4!1svjhRWTP8SkTIJw22O5Nimg!2e0!7i13312!8i6656)
* and I think there is [an Upside Down London](https://www.google.com/maps/@51.513807,-0.1109428,3a,75y,74.77h,91.05t/data=!3m6!1e1!3m4!1sByYpvqzp1SP-sdGSu4TtcQ!2e0!7i16384!8i8192)

## Is this collection personal?

Initially, I plan to find ~100 locations in London. Once this is done I will share it with a wider audience, e.g. on [Reddit's MapPorn](https://www.reddit.com/r/MapPorn/) or some bloggers like [JackSucksAtGeography](https://www.youtube.com/c/JackSucksAtGeography) or [JayForeman](https://www.youtube.com/c/JayForeman) (MapMen). This is mostly to check if there would be anyone interested in this idea.

There are two options after that for those interested:

* contribute to the same collection and make it a worldwide niche project
* fork the GitHub repository and start their collection

I am OK with the first option, but there will be technical difficulties since GoogleMaps' free limit is ~28000 views per month. So, optimizations/changes will be required to the project if the audience will be more than ten active users.

And yes, I did create [buy me a tea](https://www.buymeacoffee.com/aelmekeev) thingy, but I highly doubt it would be enough to cover the expenses.