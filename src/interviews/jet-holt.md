---
title: Jet Holt
description: "CS graduate who enjoys working on his own projects. Known for
  Eurorack Synth modules. "
location: Earth
profileImage: /assets/img/wo6mog5l_400x400.png
backgroundImage: /assets/img/sean-o-kmn4veeepr8-unsplash.jpg
website: https://jetholt.com/
social: https://twitter.com/JetroidMakes
status: Published
date: 2019-03-08T00:00:00.000Z
---
**Who are you? Where are you from and what is your backstory?**

My name is [Jet Holt](https://jetholt.com/) (but I go by '[Jetroid](https://twitter.com/JetroidMakes)' online), pleased to meet you! I'm a 23 year old software programmer and hardware hacker from a rural part of England. I am a recent computer science graduate, though I took my first steps into coding in my late teens. I have [designed and programmed](https://jetholt.com/frequency-central/) five [Eurorack](https://en.wikipedia.org/wiki/Eurorack) synthesiser modules as products for my[ father's small business](http://frequencycentral.co.uk/), and am beginning to make products and services of my own whilst travelling.

<br>

As a kid I used to really like video games, but I'd quickly get bored and find some way to express my imagination and creativity. I'd spend weeks in my garden shed fashioning swords, crossbows, and catapults out of wood and elastic rubber (my father helped me with the powertools), and I'd spend hours in my room making all kinds of elaborate structures and architecture with Lego. I once made a semi-automatic rubber band gun out of Lego bricks, gears, and axles (and a helping of glue or two to stop it exploding in my hands!). I loved the engineering challenges!

<br>

Eventually, these dual passions of creation and video games met when I joined the (now defunct) [SeriousZone](http://seriouszone.com/) community in 2007, who encouraged me to learn how to make in-game levels for my favourite game, Serious Sam: The Second Encounter, before later moving on to Team Fortress 2 and Portal. I loved sharing screenshots of my creations with others. Sadly I didn’t know about backups so data rot, link rot, and the ever-churning nature of the web means I lost all of my files and images of my creations. 👎🏻

<br>

I think these early endeavours into creation really stuck with me, as it opened my eyes to the fact that there is a lot of satisfaction inherent to taking an idea from a concept to something that you can actually use or hold in your hand. My video game creation passion caused my to find programming and the rest is history.

<br>

**What made you get into programming?**

Getting into programming was very linked to my background. I first encountered code when I started using Serious Editor 2. In the original Serious Editor - the tool I used to make levels for Serious Sam - there was a bespoke system of visual '3D' logic that was really easy to use because you could you could see the relationships. You didn’t need tutorials because it was so intuitive. The system introduced me to logic concepts like AND and OR! In the Serious Editor 2, they replaced this system with a bespoke scripting language that they called ‘Macro scripting’ (unrelated to Macros in Computer Science or Excel). I found using Macro to be incredibly frustrating, partly because there was a lack of information or tutorials about it. Seeing code like this for the first time didn't make much sense to me and I naïvely kept wondering why had they replaced their original system with this ‘awful’ new one? Whilst I never really mastered Macro (I was merely copying existing scripts and modifying them to suit my needs), I was able to use it for what I needed at the time, and it gave me confidence to decide to start programming later.

<br>

![](https://docs.google.com/a/jesswallace.co/drawings/d/sVUY-8pJtlz3kFAMFYI7aXA/image?w=624&h=352&rev=3&ac=1&parent=1T1sGgLCQK6uPV1iTf4ZtE-h5L5wEfPPndO9ujwX3R78)

<br>

Eventually I was making levels for more modern games like Team Fortress 2 and Portal 2 - I even competed in a competition in 2010, though I didn't win. This process uses the tool Hammer. When level designing, you can accidentally create an object that would be impossible to render - called an 'invalid solid'. Hammer is meant to detect these when loading the file and remove them, but in late 2012, there had been a bug in Hammer for months which [caused it to also remove all of your entities](https://tf2maps.net/threads/invalid-solid-removes-every-entity-from-map.19578/)(things like lights, colour correctors, doors, etc) as well as the invalid solid - you were just left with an unusable file containing only the valid solids. When this happened to you, common wisdom was to try to revert to an autosaved backup, but sometimes those autosaves would also have the invalid solid in them too, and loading them would ruin your creation!

<br>

I was affected by the bug and was stuck with a level that I had spent weeks or months working on that I couldn't use. I figured out a crude solution by using an online diff checker tool to find the solids that Hammer have removed for being invalid and was able to restore the files. This process took a long time, as the files could be several hundred thousand lines long and it might take me several hours to find the problem. I realised that I was essentially doing a repetitive task. My experience with Macro programming with the Serious Editor had showed me that code is the perfect tool to solve repetitive tasks. I had only one problem; I didn't know how to use any programming languages that didn't run inside a game engine. I'd have to learn one from scratch. At the advice of my programmer friend, I picked up Python, which is still one of my go-to languages when I want to solve a problem quickly today.

<br>

I found Python a little confusing at first because I didn’t know the keywords to search to answer my questions, and I didn’t understand the rules with scoping and indentation. I think I would have found a language that uses curly braces a lot easier to learn, but it was what it was. After a little practice solving problems on codecademy, and after asking questions on Stack Overflow when I got stuck, I was able to solve that weasel bug and fix my level! Ironically, I never used my own solution as I got hooked on programming instead. For the next two years after this, I used or experimented with a whole gamut of programming languages, including Assembly, C, Java, Ruby, HTML, and JavaScript.

<br>

**What made you create modular synthesisers?**

During my time at sixth form (which roughly translates to the final two years of high school in the American system), I was taking an electronics course, mostly because my father was spending most of his time in his workshop doing electronics for his burgeoning business, Frequency Central, and I wanted to understand his work. My father was never formally trained in electronics, merely learning from his passion of electronic musical instruments. This was a strength for him because he was able to approach problems from unique angles. Even before he started his new business, he was a bit of a rock star in the DIY electronic instrument community. Not having a formal training meant that sometimes there were gaps in his thinking process and he'd might reach a problem that he didn't know how to approach. We made a great team as my class meant that I could give advice about alternate approaches.

<br>

For my second year electronics project, the class was tasked with making something from scratch and following a design process. My father suggested I design a synthesiser module that he could sell and we could split the profits. That sounded like a good idea to me, but I knew so little about music that I didn’t have any ideas of my own. He showed me an old concept he had come up with (one that I had actually proposed some novel solutions for!) that he loved the functionality of, but which would have used too many components and would have had too large a circuit board to feasibly manufacture and sell as a module. If I could learn how to code for a[PIC microcontroller](https://en.wikipedia.org/wiki/PIC_microcontrollers), I would be able to use it to do everything and use these small chips to completely replace those boards of discrete components.

<br>

I had a great time learning assembly, and routinely got incredibly stuck for days, even when doing the simplest things. The microcontrollers come with a 200+ page datasheet, and on any page could be a short note that would explain your issues! There are also a lot of interesting problems when you’re dealing with hardware and switches, as they aren’t perfect and you need to take special steps to avoid abnormal input. My electronics teacher only knew the basic of PIC microcontrollers, so I was on my own. I got a lot of advice from [Tom Wiltshire](https://electricdruid.net/), another programmer who creates synths using microcontrollers and assembly. The resultant product at the end of this project was the [Bartos Flur](https://jetholt.com/bartos-flur/). I was awarded full marks for the project, something my electronics teacher told me he had never done before, and I'm told he talked about my project as a model example to students in subsequent years of the class. I used my share of the profits to buy the laptop that I still use today.

<br>

I've since developed four more synthesiser modules and I really love the process. I find Assembly is a lot of fun that I don't get from other languages, as I can do lots of clever little tricks to make the most of a particular micro-controller. I also love those weeks that I get to spend with my father, as it gives me a chance to connect with him.

<br>

**What does your process for learning to code look like?**

The best way to describe my learning process would be to talk about an example. In summer 2016, I decided that I wanted to learn front-end web development, and set myself a goal: to recreate the [Fallout hacking minigame as an online version you can play in your browser](https://jetholt.com/hacking/). I had liked what [Jennifer Dewalt had done with the little web toys she made](https://jenniferdewalt.com/), and figured a little toy of my own could be fun to make.

<br>

The following image is how the minigame that I created looked at the end of 2016:

<br>

![](https://docs.google.com/a/jesswallace.co/drawings/d/sbAPpv0nRO47Gi1Hi8d5prQ/image?w=624&h=303&rev=3&ac=1&parent=1T1sGgLCQK6uPV1iTf4ZtE-h5L5wEfPPndO9ujwX3R78)

<br>

I definitely recommend setting a goal of something to make when learning programming. I’ve done it almost every time I wanted to learn a new programming skill; to learn Python in 2012, I set the goal of creating a workaround for the Hammer bug. I had the goal of creating the Bartos Flur when learning assembly. When learning Java in 2014, I wanted to create an automated gaussian elimination problem solver to help with my schoolwork. Given that you’re creating some kind of ‘final thing’, you'll really be able to see yourself progress in a way that you wouldn't see if you were just completing some meaningless tasks on a tutorial website. Even if it’s just a dumb, simple gimmicky idea you have, setting a goal will be helpful as you can sort of reverse-engineer the path to get to the goal and figure out what you need to learn. If you are a beginner learner of all things programming, it might even be a good idea to set yourself a goal of what you want to get out of programming in general, then you can figure out which languages and tools to learn.

<br>

By the summer of 2016, I only had the most basic of knowledge of front end web development. I knew how to colour text on a page, and how to respond to a few basic events like clicks or hovers. My previous encounter with front-end web development in 2014 saw me trying to create a blog that you access using an emulated linux command line terminal format; I hadn't even known how to properly [structure a web page](https://raw.githubusercontent.com/Jetroid/jetroid.github.io/master/oldstuff/index.html) at that time and wasn’t a serious project nor effort.

<br>

My first step to succeeding with the fallout hacking minigame was to give myself a grounding in some of the concept. I decided to start a [codecademy course on HTML & CSS](https://www.codecademy.com/learn/make-a-website). I don’t think the codecademy courses are a great way to learn, but I find it's hard to know what questions to ask when you don't have a basic knowledge of the topic at hand. If I was learning some new programming paradigm today, I would definitely still follow along a tutorial of some kind first. I think that learning the basics in a structured way gives you a feel for what the tool/language/etc is, and will give you some understanding that you can build on. I completed the first third of the course before I found that the repetition of skills and the introduction of bootstrap was no longer helping me.

<br>

After the codecademy course, I knew the basics like what HTML tags like <div> and <p> are for (previously I appended text directly to the <body>! 🤦) and how CSS selectors worked. I combined this knowledge with google searches like "How to create a multi-column layout HTML CSS" to create the basic structure of my page, which I augmented with searches like "How to add HTML content with javascript" that taught me how to dynamically add content to the page. The exact searches you need will depend on the project and what you want to do, but because you're trying to make a particularly idea, you'll generally have an idea of what you need to know. I repeated the process until I was [happy with the result](https://jetholt.com/blog-hacking/) of my hacking minigame, then moved on to a new project - in this case, I took the skills I have learned and designed myself a personal website. For me, creating a new project from scratch using the same skills re-enforces those skills and gives me more opportunities to learn too.

<br>

I think an important thing that I do that other people don’t is that I sometimes go back to old projects to make improvements when I learn something new. For example, by November 2017 I had learned node.js with heroku, so I went back to my hacking minigame and replaced a slow loading javascript file (that contained several thousand 5-letter words!) with an AJAX call to a heroku dyno running [a small node.js script](https://github.com/Jetroid/hacking-heroku) that returns a set of 30 words to use. This gave a much faster page load time, the user didn’t have to download so much data, and I was even able to improve the gameplay by providing words of lengths longer than 5. Similarly, I went back in November 2018 to the project and made even more changes, some graphical, some functionality, some bugfixing.

<br>

![](https://docs.google.com/a/jesswallace.co/drawings/d/sOh-d-zgy7476BdAypATkuw/image?w=624&h=311&rev=1&ac=1&parent=1T1sGgLCQK6uPV1iTf4ZtE-h5L5wEfPPndO9ujwX3R78)

<br>

My hope is that by applying the things I have learned to old projects, not only will the project be better for it, but when I have need of the knowledge I learned, either I use simple recollection which will be aided because of the repetition of usage, or I have a set of exemplar projects that I can look back on to figure out how I did something.

<br>

Here, I drew a hipster flow chart you can follow.

![](https://lh6.googleusercontent.com/SWwfM_tb-n_qnblJ9h1esJn5Va6d9mA5vX5SqM0bYnkCU-rRFDjdf42w57cRuAceD6m1hxGdE-C7jv4Mnphw3OBR-GiTu__90JiUW8crnf6I6XY2-7e-CGOUtioDT6ClVRmy3AKJ)

<br>

**What does your process for building look like?**

Remember I mentioned the blog with emulated linux command line front end? I was inspired by this interview to go back and [rebuild it](https://jetholt.com/terminal/) from the ground up. I actually created a 60-tweet twitter thread for this interview where I wrote about the steps I was taking, the order of features I was implementing, what I needed to learn to reach my goals, and my debugging process when I found a bug. You can read the tweets over on [Twitter](https://twitter.com/JetroidMakes/status/1094534029964062720) or on [Threader App](https://threader.app/thread/1094534029964062720), and I hope they are interesting and useful to you.

<br>

These days, when I build a project I don't have to do quite so much learning as I described above. I generally have a good idea of how I’d make most of the components.

<br>

If it’s a more complicated project, I start by sketching out the architecture of the project as a block diagram on paper. For example, the sketch of a recent project has the incredibly abstract block of “Front End” pointing labelled arrows at other blocks like “Bot Commander”, and “Accounts & Billing”, whilst “Bot Commander” points to many smaller blocks representing bots. All of these point to a cylinder representing the database. The block diagram gives me an idea of what connections and interfaces each block will need to make, and ensures that when I go to build each step, I don’t find any surprises. If it’s a more simple web toy, I just sketch out what I’d like it to look like or do. For my synth projects, I designate different functions to different physical pins and figure out what functionality should be in the main routine, and what functionality should be in an interrupt service routine.

<br>

If the project requires a database, my next step will generally be to write out what tables, rows, and datatypes I expect the database will take and need. I think it’s generally a good idea to actually think about this well in advance, as it can be painful to work with a set of tables in a database that hasn’t been designed well.

<br>

Then I go to make each of the individual blocks, one at a time, focusing on making the core functionality work first, perhaps building a simple UI or testing rig. That means peripheral ‘business’ things like “Accounts & Billing” come last. For each block, I may do some research to see if there is any existing code that can help me. For example, if I’m writing a web scraping bot, I may research scraping libraries. If I need to send messages to users on Telegram, I’ll see if there is library I can use to make that job easier. The exception to this is frameworks - Frameworks can be a great sandbox if you’re doing the one specific thing that they are designed for, but I find that if you need to do something outside those boundaries then it can be hard to break out and do your own thing. I don’t like that the framework is in control of the flow of your code. I don’t find that frameworks help me much of the time.

<br>

When it comes to implementing a front end, unless the aesthetics of the front end is the whole point (like was the case with my hacking minigame), I generally implement the functionality first, get everything on the page where it needs to be, and worry about making everything look nice last. A perfect example of this is the [interactive map of my trips](https://jetholt.com/trips/) toy that I made two weeks ago, where I added the content and functionality to the page before focusing on styling:

![](https://lh6.googleusercontent.com/2Bt8l_I8UjlaZdw0Le9EpRy_y8wKGI9pS0KZAS7HOjJo_6uF220tm2CCrgYeWbBjcpWQHapb5iSCXdXv7ST5YT2ZR7oQthBm67LggLMevcbPHpnuOK1J16LBlpMybUppyN1PM3Ie)

<br>

**Do you face any particular challenges when building over a period of time?**

Yes, I often get too focused on perfecting one specific aspect of my project whilst there are still parts I haven’t even started on. This can sometimes lead to burnout and I don’t end up finishing the project as I get tired of it.

<br>

I also find that I’m at risk of over-analysing a project and deciding not to make it as I don’t think it would be useful, then getting caught up because I don’t know what to work on. In those circumstances, I might as well have just have made it anyway and worried about if it was useful later.

<br>

**Are you currently learning anything new?**

I like to think that I’m always learning or doing something new!

<br>

I’ve been slowly learning how to make a website perform better and load faster - my personal website homepage is down to around 300 ±25ms to load, images included, which I’m incredibly happy about!

<br>

Two weeks ago, I learned how to use [CesiumJS](https://cesiumjs.org/) to create an [interactive map](https://jetholt.com/trips/) of my travels in Asia. This week, I learned more about the unix permissions system so that I could create my[ linux terminal emulator](https://jetholt.com/terminal/).

<br>

A goal for me in the coming weeks will be learning how to create templates and plugins for Wordpress so that I can quickly and easily create websites that non-technical clients or family can use.

<br>

I'm also trying to learn how to promote myself online, though right now I'm mostly a using trial and error method and seeing what works. So far I haven’t been too successful! 😅 Most online guides about self-promotion feel very scummy and inauthentic to me, so I'm trying to find my own way. I feel that integrity of personal expression is important. Still baby steps here! Watch this space.

<br>

**Advice for those learning to code?**

Don't worry if you realise that a project or goal you tried to make is a little beyond your skill level. Embrace the failure. Write notes to yourself about what went well and what didn't, and what you need to do to succeed when you try it again when you are more experienced. You can always come back later.

<br>

Don’t chase the latest trend of programming languages and frameworks. It’s a constantly churning mess, honestly. When I was first learning to code, there was a lot of bluster about Objective C; everybody was talking about it. Seven years later and nobody really uses it now since Apple released Swift. Take a look at [this list](https://www.tiobe.com/tiobe-index/), consider picking one that seems popular and stable and that does what you want to do. Though I think it’s best to know several languages.

<br>

Avoid frameworks if you can, especially as a beginner. When I was at university, I saw some programmers who almost exclusively used frameworks and never started from scratch, and I always got the impression that they were dependent on the framework and would struggle to create something without it. In my experience, they tended to be weaker programmers when I worked with them in a team. Also, a framework only covers a small portion of the total ‘knowledge base’ for a given programming language. Non-framework knowledge can be used even with the framework, whilst knowledge about a framework is useless if you are using a different framework.

<br>

A mistake I made when I already kind of knew how to code but was still new to the whole ecosystem was not using version control. I use [git](https://git-scm.com/) for almost all of my projects now, and it’s saved my ass when I accidentally break something and can’t explain why. You know how sometimes you might be writing a report or something, and you have report.doc, report-final.doc, report-new.doc, etc, all of which save the document at different points? That’s what git is for. It’ll be a pain to learn it at first, but the payoff is definitely worth it! There’s even a [whole website](https://github.com/) that will backup a copy of your code for you. I really regret not using git earlier as I have lost a lot of my earliest code.

<br>

**What technology do you use?**

I might be being a little evangelical here, but I use Linux as my operating system of choice - specifically, I am currently using [Arch Linux](https://www.archlinux.org/). I would recommend Linux to everybody - though perhaps a more user-friendly install like [Debian](https://www.debian.org/) rather than Arch. Back when I still used Windows 7, I found it hard to set up my development environment. On Linux, this is basically streamlined because of a package manager which installs everything for you. Additionally, when it comes time to ssh into a server some day, you’ll feel at home as it’s essentially structured just like your regular workstation.

<br>

*General Programming:*

\- [Sublime Text 3](https://www.sublimetext.com/3)is my editor/IDE of choice, unless otherwise stated.

<br>

*For creating synthesisers:*

\- I use[MPLAB X IDE](https://www.microchip.com/mplab/mplab-x-ide)- I used to prefer MPLAB v8.92 as you could just take an asm file and run with it, but I found that the projects functionality of MPLAB X was a lot better despite being more difficult to learn.

\- I use a[PICKIT 3](https://www.microchip.com/Developmenttools/ProductDetails/PG164130)as my PIC burner.

\- I code in assembly - C is an option but I have heard the optimisation of the compilation is intentionally bad if you don’t pay for the ‘professional compiler’, and I prefer assembly as it lets me do a lot of neat tricks that I know would not be otherwise possible.

\- I use chips from the 16F series, selecting the best one for the task using the [Microchip parametric part picker](https://www.microchip.com/ParamChartSearch/chart.aspx?branchID=1005).

\- [Python](https://www.python.org/) for quick scripts to convert data from one format to another

\- [LibreOffice](https://www.libreoffice.org/) Calc - As strange as this sounds, I use spreadsheet software to plot waveforms which I then turn into sounds.

<br>

*Personal website & web toys:*

* [Jekyll](https://jekyllrb.com/)as a static site generator. Definitely recommend.
* Plain HTML, CSS for most pages; pure JS to enhance other pages.
* [GitHub pages](https://pages.github.com/)for hosting.
* [Cloudflare](https://www.cloudflare.com/), initially just for flexible SSL support, but now for caching, HTML, CSS, and JS minification.
* Bespoke set of[Python](https://www.python.org/)scripts that run when I commit to optimise images.
* [Prose](https://prose.io/)as a content authoring tool.
* [Google Analytics](https://analytics.google.com/analytics/web/), though I’m considering removing this as I don’t like giving information to Google.
* [Heroku](https://www.heroku.com/)free tier to host some tiny scripts that enhance my web toys.

*Research Papers (side job with my University):*

\- [Java](https://www.java.com/en/) for the bulk of the code. We already have a lot of code written in Java so it makes sense to keep using it. Given that Java is a compiled language, this prevents our code from crashing unexpectedly during an hour-long experiment due to a silly syntax typo because the syntax is checked at compile time.

\- [PostgreSQL](https://www.postgresql.org/). Our work is related to databases, and this one has everything we need.

\- [Python](https://www.python.org/) is unbeatable for quickly converting data from one format to another.

\- [LibreOffice](https://www.libreoffice.org/) Calc for creating graphs. Use what you know.

\- [Texmaker](http://www.xm1math.net/texmaker/) and[ Overleaf](https://www.overleaf.com/) for editing LaTeX.

<br>

**What have been influential books, resources and links that have helped you?**

[Codecademy](https://www.codecademy.com/) was a useful resource for me in learning the basics of a few languages, though I'll admit that the platform wasn't perfect for me and I don’t think it is a good way to learn. I think people should diversify their resources rather than just using any single tutorial platform, and they should definitely be trying to make something rather than just follow a tutorial to completion.

<br>

[Can't Hurt Me](https://www.goodreads.com/book/show/41721428-can-t-hurt-me) by David Goggins is a great book. I have the audio book and I'm already on my third listen in two months. It's not a technology book at all, but I'd recommend it to anybody who wants to reach their goals and become something greater than they currently are.

<br>

[Look Mum No Computer](https://www.youtube.com/channel/UCafxR2HWJRmMfSdyZXvZMTw) is a fun and quirky channel if you're interested in getting into synthesisers. It’s my job to make these things, yet he still teaches me stuff!

<br>

[Ben Eater](https://www.youtube.com/user/eaterbc) and [bigclivedotcom](https://www.youtube.com/user/bigclivedotcom) are superb channels if you want to learn about electronics. I love their content.

<br>

[MAKE](https://makebook.io/) if you want to learn about shipping and promoting products; this is great because it gives you tasks (‘homework’) that you can follow along with as you read it. I hope to put these skills into practice soon!

<br>

[Server Help Telegram Group](https://t.me/server_help); run by my friend [Daniel](https://daniellockyer.com/), the people there are very open to helping others resolve their intermediate-level server issues.

<br>

I realise this is going to be very niche, but when I am working with PICs, I find [this page](http://picprojects.org.uk/projects/pictips.htm) to be invaluable.

<br>

**Where can people learn more about you and your work?**

The best place to find out about me would be my [personal website](https://jetholt.com/). I write about my [projects](https://jetholt.com/projects/) and sometimes posts focused [tutorials](https://jetholt.com/tutorials/) (admittedly mostly just about Jekyll right now!).

<br>

I also recently got a [twitter account that you can follow](https://twitter.com/JetroidMakes)- I’m sharing my journey, my experiments, and my products. I’m trying to make sure every tweet provides some kind of value to my followers!