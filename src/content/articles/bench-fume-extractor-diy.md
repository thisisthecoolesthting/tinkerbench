---
title: Bench fume extractor diy
description: bench fume extractor diy
pubDate: '2026-07-09'
author: eli-rowe
tags:
- best soldering iron for beginners
- hakko fx-888d vs pine64 pinecil
- cheapest decent oscilloscope
status: published
heroImage: ''
---

Solder fumes. We all know them, and most of us have ignored them at one point or another. That sweet, acrid smell of rosin core flux might evoke fond memories of childhood electronics kits, but let's be clear: it's not good for you. Over time, exposure can lead to respiratory irritation, headaches, and even more serious health issues. If you're spending any significant amount of time at the bench, a fume extractor isn't a luxury; it's a necessity.

*TinkerBench is reader-supported. When you buy through links on our site, we may earn an affiliate commission. As an Amazon Associate I earn from qualifying purchases.*

## Why Build When You Can Buy?

Before we dive into building, it's worth asking: why DIY a fume extractor when there are plenty of commercial options available? This is TinkerBench, after all, and sometimes the joy is in the making. But there are practical reasons too.

First, cost. Many commercial units, especially those with decent airflow and filtration, can run well over $100. A DIY approach can often get you comparable performance for a fraction of that. Second, customization. You can tailor the size, shape, and mounting to perfectly fit your workbench and workflow. Need a longer duct? A specific type of filter? A unique mounting solution? DIY gives you that flexibility. Third, performance. Many of the cheaper "desktop" fume extractors are little more than a small fan blowing air through a thin carbon filter. They're often underpowered and don't effectively capture fumes. A well-designed DIY unit can outperform many budget commercial offerings.

However, a DIY fume extractor isn't for everyone. If you're short on time, uncomfortable with basic wiring, or simply prefer a plug-and-play solution, a commercial unit is a sensible choice. For beginners, something like the [Hakko FA400-04 Bench Top ESD-Safe Smoke Absorber](https://www.amazon.com/Hakko-FA400-04-Bench-ESD-Safe-Absorber/dp/B000VSBGGE/?tag=tinkerbench-20) is a solid, no-fuss option. It's a perennial favorite for a reason – it works. But if you're ready to get your hands dirty and build something tailored to your needs, read on.

## The Core Components: Fan, Filter, and Housing

At its heart, a fume extractor is simple: a fan pulls air through a filter, trapping harmful particles and gases. The trick is to get these components working effectively together.

### The Fan: Airflow is King

This is arguably the most critical component. You need a fan that moves enough air to create a noticeable draw at your soldering point. Small computer fans, while quiet and cheap, often don't cut it. You're looking for something with a decent Cubic Feet per Minute (CFM) rating.

*   **Axial Fans:** These are common computer case fans. They're good for moving air in open spaces but struggle against resistance (like a filter). For a simple, close-range setup, a larger 120mm or 140mm axial fan can work, but don't expect miracles. Look for higher static pressure models if you go this route.
*   **Blower Fans (Centrifugal Fans):** These are much better for fume extraction. They pull air in axially and expel it radially, making them very effective at moving air through restrictive environments like filters and ducts. They're often found in server racks or as car heater blowers. A 12V DC blower fan designed for cooling can provide excellent airflow. Search for "centrifugal blower fan 12V" on Amazon or eBay. I've had good luck with 50x50x15mm or 75x75x30mm units for personal bench use.

Powering the fan is usually straightforward. Most suitable fans are 12V DC, so a wall wart power supply (like one from an old router) or a dedicated bench power supply will do the job. If you're building a more permanent setup, consider adding a switch and a DC jack for a clean power connection.

### The Filter: What Are You Really Catching?

This is where many DIY projects fall short. A simple carbon filter isn't enough for all soldering fumes. Solder smoke contains particulate matter (tiny bits of solder and flux) and volatile organic compounds (VOCs) from the flux.

*   **Activated Carbon Filters:** Excellent for absorbing VOCs and odors. These are essential for removing the "smell" of flux. You can buy sheets of activated carbon filter material (often used for range hoods or aquariums) and cut them to size.
*   **HEPA Filters (High-Efficiency Particulate Air):** These are designed to capture very fine particulate matter. While not strictly necessary for *all* solder fumes (many particles are larger), if you're doing a lot of leaded soldering or working with particularly smoky fluxes, adding a pre-filter or a dedicated particulate filter can significantly improve air quality.
*   **Pre-filters:** A simple piece of coarse foam or mesh can extend the life of your more expensive carbon or HEPA filters by catching larger dust particles.

A common and effective setup is a two-stage filter: a pre-filter (e.g., coarse foam or a cheap furnace filter material) followed by an activated carbon filter. For a robust build, you might even consider a third stage with a small HEPA filter.

### The Housing: Directing the Flow

The housing serves two main purposes: holding the fan and filter, and directing the airflow. Material choice is flexible:

*   **Plywood or MDF:** Easy to work with, readily available. Can be cut and glued into a box shape.
*   **3D Printed Parts:** If you have a 3D printer, this offers incredible design flexibility for custom ducts, fan mounts, and filter holders. This is my preferred method for iterating on designs.
*   **PVC Pipe/Ducting:** Great for creating ducted systems that move air away from your bench and potentially outdoors.
*   **Repurposed Enclosures:** An old project box, a plastic container, or even a cardboard box (for a temporary solution) can serve as a housing.

The key is to ensure the housing creates a relatively sealed path for the air to flow *through* the filter, not around it. Any gaps will reduce efficiency. Design the intake opening to be as close to your soldering work as possible. A hood-like design that funnels air towards the filter is generally more effective than a flat grill.

## My Go-To DIY Design: The Modular Extractor

My current workbench setup uses a modular design that I've refined over several iterations. It balances performance, cost, and ease of filter replacement.

I started with a robust 12V DC centrifugal blower fan – specifically, a 75mm x 30mm unit that draws about 0.5A. This fan provides plenty of static pressure to pull air through multiple filter stages. You can find these by searching for "blower fan 7530 12V" on Amazon.

The housing is 3D printed in PETG, primarily because I wanted a compact form factor and the ability to easily swap filters. The design has three main sections:
1.  **Intake Hood:** A wide, shallow hood that directs solder fumes towards the filter stack. This is crucial for capturing fumes effectively without having to place the unit right on top of my work.
2.  **Filter Stack:** This section holds three layers: a coarse foam pre-filter (cut from a cheap automotive air filter), a thick activated carbon filter (cut from a [replacement sheet used for commercial fume extractors](https://www.amazon.com/Hakko-A1001-Activated-Carbon-Filter/dp/B000TGL26E/?tag=tinkerbench-20)), and a finer particulate filter. The layers are held in place with a simple friction fit and a removable cover.
3.  **Fan Enclosure & Exhaust:** The blower fan is mounted here, pulling air through the filters and exhausting it out the back. I've designed a small duct adapter that allows me to attach a flexible hose to direct the exhaust air out a window, which is ideal if you're dealing with a lot of fumes or leaded solder.

Power is provided by a standard 12V wall adapter plugged into a panel-mount DC jack on the side of the unit, with a small toggle switch for power. The entire unit is mounted to an articulated arm (similar to a desk lamp arm) so I can position it precisely where I need it over my work. This flexibility is a game-changer.

If 3D printing isn't an option, you could achieve a similar multi-stage filter box with plywood or even thick cardboard for experimentation. The principle remains the same: fan pulls air through a stack of filters.

## Tips for Success and Safety

*   **Positioning is Key:** No matter how powerful your extractor, it won't work well if it's too far from your soldering iron. Aim for 4-6 inches from the work.
*   **Airflow Direction:** Ensure the airflow is pulling *away* from your face. Place the extractor so it's between your work and your nose.
*   **Regular Filter Replacement:** Filters get saturated. Activated carbon loses its effectiveness over time. If you notice the smell returning or reduced airflow, it's time for a change. I usually replace my carbon filter every 3-6 months depending on usage.
*   **Ventilation:** A fume extractor *filters* the air, it doesn't remove all contaminants. If possible, vent the exhaust outdoors, especially if you're working with leaded solder or particularly noxious fluxes. Even with excellent filtration, good room ventilation (e.g., an open window) is still a good idea.
*   **ESD Safety:** If you're working with sensitive electronics, ensure your fan and housing are ESD-safe or that the fan motor is enclosed and grounded if necessary. Most small DC fans aren't a huge ESD risk, but it's worth considering.
*   **Noise:** Blower fans can be noisy. Consider placing the unit a little further away or incorporating some sound dampening if noise is an issue.
*   **Power Supply:** Make sure your 12V power supply can provide enough current for your chosen fan. Most small blower fans draw less than 1A, so a 1A or 2A supply is usually sufficient. My [bench power supply](INTERNAL:bench-power-supply-review) is invaluable for testing these kinds of circuits.
*   **Alternative Filters:** For those concerned about specific chemicals, specialized filters are available, though they add complexity and cost. Research the specific fluxes you use if you have concerns. You might find my article on [choosing the right solder](INTERNAL:solder-types-explained) helpful.

## Bottom Line

Building your own fume extractor is a rewarding project that can significantly improve your workbench environment. It's an intermediate-level build, requiring basic wiring skills, some mechanical aptitude, and a willingness to experiment. For the beginner, a commercial unit like the Hakko FA400 is a safer bet. But for the tinkerer who enjoys custom solutions and wants better performance than budget offerings, a DIY fume extractor offers excellent value and performance. Just remember to prioritize airflow and multi-stage filtration for the best results. Your lungs will thank you. For further reading on workbench ergonomics, check out my article on [setting up your ideal electronics workbench](INTERNAL:workbench-setup-guide).

## Our picks worth a closer look

- **[Pine64 Pinecil Smart Mini Portable Soldering Iron V2](/products/b097cz9x42-pinecil-smart-soldering-iron/)** — see current price and specs.
- **[Hakko FX-888D Digital Soldering Station with FX-8801 Tip](/products/b01bpp3jno-hakko-fx888d-soldering-station/)** — see current price and specs.
- **[FNIRSI DSO-TC3 Handheld Digital Oscilloscope and Component Tester](/products/b07wmvg9kk-fnirsi-digital-oscilloscope/)** — see current price and specs.

