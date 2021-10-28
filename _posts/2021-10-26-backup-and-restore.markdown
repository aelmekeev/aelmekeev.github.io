---
layout: post
title:  Backup and Restore
date:   2021-10-26 07:01:15 +0100
tags:   projects
---

## Intro

As far as I remember myself I've considered a new OS/machine as a good thing. It was an opportunity to clean up and catch up on new features in the tools I've been using for a long time.

But it's time to say goodbye to this attitude. The last two migrations from the old machine to a new one were less joy and more pain. Finally, I've started to think about backups for my environment.

## Options

Here are some of the options that people use:

1. Use system tools (e.g. [MacOS Time Machine](https://support.apple.com/en-gb/HT201250) or [Microsoft Backup and Restore](https://support.microsoft.com/en-us/windows/back-up-and-restore-your-pc-ac359b36-7015-4694-de9a-c5eac1ce9d9c))
2. Make your main environment completely portable (e.g. with [Vagrant](https://www.vagrantup.com/))
3. DIY solution with some helpers (e.g. [homebrew](https://brew.sh/) + [dotbot](https://github.com/anishathalye/dotbot))

All of them make sense to me. Though these are the reasons why I don't feel like picking up either of them:

1. I do still like the "cleanliness" of the new setup so system tools are not my choice.
2. My mind refuses the idea of using a VM as a dev environment, sorry.
3. DIY is usually quite a lot of work, and I'm lazy.

I'm lazy, but still, I've decided to go with DIY.

## How about ...

Applications were more or less covered by [homebrew](https://brew.sh/) and [asdf](https://github.com/asdf-vm/asdf). Now, I want to be able to backup and restore configuration files for everything I use.

And then I thought. ***Why can't we delegate the creation and maintenance of scripts for backup/restoration of configuration files to the community?*** Similar to how we delegate it for apps/frameworks in homebrew and asdf.

The idea is quite simple. For each application, we should have `backup.sh` that will do all the work. Whether it's just copying files (e.g. `.gitconfig` for `git`) or executing some commands (e.g. `brew bundle dump` for `homebrew`). And then we just need to run all those commands for the apps we have installed on our machine and push our backup to the remote repository!

Similarly, to restore the configuration, you can just run the `restore.sh` for each of the apps.

Besides delegating a big chunk of the work to the community, this approach allows sharing backups across multiple operating systems. To a certain degree, of course.

**So, here is the prototype: [aelmekeev/backup-and-restore](https://github.com/aelmekeev/backup-and-restore).**

It's a template repository that you can use to create your environment backup. And if you want to, you can easily pull updates with the scripts for new applications or improved scripts for existing ones.

## Will this work?

I still don't know if this is genius, stupid, or simple exists somewhere.

Here are the issues I can see:
* **Trust.** I don't quite understand how the open-source projects with lots of community-written scripts gain trust. Should I do system backup before running `restore.sh` or even `backup.sh`?
* **Audience.** It feels like all the cool guys and girls already have some DIY stuff so, who would even contribute to this project?

What do you think?