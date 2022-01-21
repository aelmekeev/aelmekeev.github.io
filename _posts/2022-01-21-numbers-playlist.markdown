---
layout: post
title:  Numbers playlist
date:   2022-01-21 20:31:15 +0000
tags:   projects
---

## Intro

From time to time, I like to go back to something I've started in the past but haven't finished. For example, in 2018, I completed a collection of Tortues Ninja caps I've tried to collect when I was a child. By the way, [here](https://www.milkcapmania.co.uk/340-Tortues-Ninja.html) is a digital version of it.

In 2022 I've realized that I should finish one more project. Back in 2013, I was quite active on social media, and in an attempt to generate some content, I've decided to post 10 songs per day with numbers as the titles. I've made just two posts like this, reaching number 20.

Today I have a [Spotify playlist of 73 tracks](https://open.spotify.com/playlist/3aMXF1tA7L1ml1XrEqpa0s).

## How does this work?

Well, it's not just a playlist. [Here](https://github.com/aelmekeev/natural-numbers-playlist) is what under the hood:

* 3 out of [4 rules](https://github.com/aelmekeev/natural-numbers-playlist#rules) validation is automated
* validation is running daily so in case the song will disappear from Spotify I will know about it
* playlist on Spotify is automatically updated based on the list of tracks in the repository
* I've also written a script that allows finding songs by number in case something needs to be replaced

Working with Github actions and Spotify API was quite fun. For example, authorization is done by refreshing user access token every 20 minutes and storing it in a cache so it can be used by playlist sync workflow.

## What have I learned?

Now I know a little bit about Github Actions.

Now I know that there a lot of artists with hundreds of thousands of listeners that I have never heard about. Though to be fair I have not even heard of 2 artists out of [Spotify most monthly listeners top 20](https://en.wikipedia.org/wiki/List_of_most-streamed_artists_on_Spotify#Most_monthly_listeners).

Now I know that I still can't listen most of the "low budget" hip-hop/rap songs when I'm usually fine with "low budget" indie/country/pop. This is the main reason why the list currently has 73 songs. There are tracks with the name of 74 I just can't listen them since they are too bad / too offensive.

## Is this playlist any good?

Obviously, these are not my favorite songs. Though there are just a few that I didn't like at all, they were not bad enough to not make it to the list.

There were a few songs and artists I've never heard before that I really like:

* [Two - Sleeping At Last](https://open.spotify.com/track/62CprXvSWsKBvYu3Yba55A)
* [Four - The Wrecks](https://open.spotify.com/track/1qzhvRq7oZLCZt4wVLvoVN)
* [Six - Six](https://open.spotify.com/track/3jnntYfllN05QxplcXtpaS)
* [Seven - Claudia Valentina](https://open.spotify.com/track/7FRICngbPiyTPEKF7wRC9G)
* [5'1 - Greta Isaac](https://open.spotify.com/track/7sazmTwxeXwxR48U15BopG)