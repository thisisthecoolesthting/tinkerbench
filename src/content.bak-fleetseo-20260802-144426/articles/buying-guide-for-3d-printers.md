---
title: Buying guide for 3d printers
description: buying guide for 3d printers
pubDate: '2026-07-09'
author: eli-rowe
tags:
- best soldering iron for beginners
- hakko fx-888d vs pine64 pinecil
- cheapest decent oscilloscope
status: published
heroImage: ''
---

So, you're thinking about adding a 3D printer to your workbench. Good for you! It's a fantastic tool that opens up a whole new world of possibilities, from printing custom enclosures for your electronics projects to fabricating specialized jigs and fixtures. But if you’ve spent any time looking around, you've probably noticed the sheer number of options out there can be a bit overwhelming. Don't worry, I've been down this road myself. I've had a few different machines on my bench over the years, and I’ve learned a thing or two about what makes a good fit for a tinkerer like us.

*By the way, some of the links in this article are affiliate links. If you click them and make a purchase, TinkerBench might earn a small commission at no extra cost to you. These commissions help keep the lights on and allow us to continue providing honest, hands-on reviews.*

## Understanding the Landscape: FDM vs. Resin

Before we dive into specific features, let's talk about the two main types of 3D printers you'll encounter in the hobbyist space: FDM and Resin (SLA/DLP/LCD). Each has its strengths and weaknesses, making them suitable for different applications.

### FDM: The Workhorse for Functional Parts

FDM stands for Fused Deposition Modeling. This is what most people picture when they think of 3D printing. A spool of plastic filament is fed into a heated nozzle, which melts the plastic and extrudes it layer by layer onto a build plate. Think of it like a computer-controlled hot glue gun building an object from the ground up.

**Pros for the Tinkerer:**
*   **Cost-effective:** FDM printers and their filaments (PLA, PETG, ABS, etc.) are generally much cheaper than resin printers and resins.
*   **Robust parts:** The plastics used in FDM are often quite durable, making them excellent for functional prototypes, enclosures, brackets, and tools.
*   **Larger build volumes:** You can typically print much bigger objects on an FDM printer compared to an equally priced resin printer.
*   **Easier cleanup:** While not entirely mess-free, FDM cleanup is usually simpler – peel the print off the bed, trim any supports, and you're done. No hazardous chemicals or UV curing baths needed.
*   **Wide material variety:** Beyond standard PLA, you can get filaments with carbon fiber, wood, metal particles, flexible materials, and more.

**Cons for the Tinkerer:**
*   **Layer lines:** FDM prints inherently have visible layer lines, which can sometimes be a cosmetic issue or require post-processing (sanding, painting).
*   **Lower detail:** While modern FDM printers are impressive, they can't match the intricate detail and smooth surfaces of resin printers, especially for very small features.
*   **Slower for fine detail:** Printing with very fine layers on an FDM machine can significantly increase print time.
*   **More prone to warping/adhesion issues:** Especially with materials like ABS, getting prints to stick to the bed and not warp can be a challenge.

**Who is FDM for?**
If you're looking to print functional parts, custom enclosures for your [Raspberry Pi projects](INTERNAL:getting-started-raspberry-pi), jigs, fixtures, or larger prototypes where strength and cost are primary concerns, an FDM printer is likely your best bet. It's an excellent all-around choice for the general tinkerer.

### Resin (SLA/DLP/LCD): Precision and Detail

Resin printers work by using a light source (laser for SLA, projector for DLP, LCD screen for LCD) to selectively cure liquid photopolymer resin, layer by layer. The build plate typically moves upwards, pulling the cured object out of the resin vat.

**Pros for the Tinkerer:**
*   **Incredible detail:** This is where resin printers shine. They can produce incredibly fine details, smooth surfaces, and intricate geometries, making them ideal for miniatures, jewelry, or highly detailed prototypes.
*   **Smoother finish:** Layer lines are almost invisible, resulting in a much smoother surface finish straight off the printer.
*   **Faster for small, detailed prints:** While FDM prints larger objects faster, resin printers can often produce multiple small, detailed objects much quicker as the print time is primarily dependent on the height of the object, not the number of objects on the build plate.

**Cons for the Tinkerer:**
*   **Messy and hazardous:** Working with resin requires gloves, ventilation, and careful handling. Uncured resin is toxic. Cleanup involves isopropyl alcohol (IPA) and often a separate UV curing station.
*   **Smaller build volumes:** Generally, resin printers have smaller build areas compared to FDM, especially at comparable price points.
*   **Brittle parts:** Standard resins are often more brittle than FDM plastics, making them less suitable for functional parts that need to withstand stress. Though engineering resins are improving this.
*   **Higher material cost:** Resin is more expensive per kilogram than FDM filament.
*   **Post-processing:** Prints require washing in IPA and then a final cure under UV light to fully harden.

**Who is Resin for?**
If your projects involve intricate details, smooth finishes, small parts, or aesthetic models – think custom miniature components, detailed scale parts, or very precise small enclosures – a resin printer is the way to go. It’s a specialized tool for specific needs.

For the purpose of this guide, I'll focus primarily on FDM printers, as they are generally the more versatile and beginner-friendly option for the average tinkerer's workbench.

## Key Features to Consider for FDM Printers

Once you've decided an FDM printer is right for you, it's time to look at the specifics. Don't get bogged down in every minor spec; focus on these key areas.

### Build Volume: How Big Do You Need to Go?

This is perhaps the most straightforward consideration: how large of an object do you need to print? Build volume is typically expressed as X x Y x Z dimensions (width x depth x height).
*   **Small (e.g., 150x150x150mm):** Good for very small parts, miniatures, or if space is extremely limited.
*   **Medium (e.g., 220x220x250mm):** This is the sweet spot for many hobbyists. It's large enough for most common enclosures, brackets, and even some larger multi-part prints. The venerable **Creality Ender 3 V3 KE** (B0CD8K8F6Q) falls into this category and is a solid choice for many.
*   **Large (e.g., 300x300x300mm+):** If you envision printing full-size helmet props, large tool organizers, or require significant single-piece enclosures, you'll want a larger machine. Be aware that larger prints also mean longer print times.

My advice: Err on the side of slightly larger than you think you need, but don't go overboard if you're just starting, as larger printers can sometimes be more challenging to dial in.

### Print Speed: Time is Money (or Project Completion)

Early FDM printers were notoriously slow. Modern machines, especially those designed with Klipper firmware in mind, can print significantly faster without sacrificing quality.
*   **Standard (50-100 mm/s):** Still perfectly acceptable for many.
*   **High-Speed (150-500+ mm/s):** Printers like the **Bambu Lab P1S** (B0C8K95T87) or the **Anycubic Kobra 2 Pro** boast impressive speeds. This is achieved through stiffer frames, lighter print heads, and advanced motion control.

Faster prints mean you get your parts sooner, which is a huge benefit when iterating on designs or just being impatient (like me). However, high speed isn't everything; consistency and reliability are equally important.

### Bed Leveling: The Foundation of a Good Print

Manually leveling a print bed is one of the most frustrating aspects of 3D printing for newcomers. Thankfully, most modern printers now offer some form of automatic or assisted bed leveling.
*   **Manual:** Avoid this unless you enjoy fiddling with screws and feeler gauges.
*   **Assisted:** The printer guides you to adjust knobs, but you still do the work.
*   **Automatic (ABL):** The printer uses a sensor (CR-Touch, BLTouch, inductive sensor) to map the bed's surface and compensate for any imperfections. This is a must-have feature for convenience and consistent first layers.

Look for a printer that advertises "auto bed leveling" or "CR-Touch/BLTouch." It will save you headaches.

### Extruder Type: Direct Drive vs. Bowden

This refers to how the filament is fed into the hotend (the part that melts the plastic).
*   **Bowden:** The extruder motor is mounted on the frame, pushing filament through a long PTFE tube to the hotend.
    *   *Pros:* Lighter print head (potentially faster movements), less weight on the gantry.
    *   *Cons:* More friction, harder to print flexible filaments, can have more "stringing" due to retraction issues.
*   **Direct Drive:** The extruder motor is mounted directly on the print head.
    *   *Pros:* Better control over filament, excellent for flexible filaments, less stringing.
    *   *Cons:* Heavier print head (can lead to ghosting/vibrations if not designed well), more stress on stepper motors.

For most general-purpose printing, either can work. However, if you plan on experimenting with flexible filaments like TPU, a direct drive system is highly recommended. The **Anycubic Kobra 2 Neo** (B0C77G29L3) is an example of a budget-friendly direct drive option.

### Open Source vs. Proprietary Ecosystems

This is a philosophical choice as much as a technical one.
*   **Open Source (e.g., Creality, Prusa, many Klipper-based machines):** You have access to the firmware, schematics, and a vast community of modders and tinkerers. This means more support, more upgrades, and more freedom to customize.
*   **Proprietary (e.g., Bambu Lab to some extent):** These systems often offer a more polished, "it just works" experience out of the box, with tightly integrated hardware and software. However, you might be limited in terms of upgrades, repairs, or using third-party software.

For the tinkerer, the open-source route often aligns better with our desire to understand, modify, and improve. However, if you simply want a reliable tool that prints well with minimal fuss, a more proprietary, integrated system can be very appealing.

### Enclosures: For Advanced Materials

Some materials, like ABS, ASA, and Nylon, require a stable, warm environment to print successfully, otherwise they warp and delaminate.
*   **Open Frame:** Most budget printers are open-frame. Fine for PLA, PETG.
*   **Enclosed:** Some printers come with an enclosure, or you can build one yourself. Essential for materials prone to warping.

Unless you know you'll be printing engineering-grade materials from day one, an open-frame printer is usually fine to start with. You can always add an enclosure later.

## Software and Slicers: The Brains of the Operation

The printer itself is just the hardware. You'll need software to translate your 3D models (STLs) into instructions the printer can understand (G-code). This is called a "slicer."
*   **Cura (Ultimaker Cura):** Free, open-source, and arguably the most popular slicer. It has a massive community, tons of features, and profiles for almost every printer.
*   **PrusaSlicer:** Developed by Prusa Research, excellent for Prusa printers but also supports many others. Known for its quality profiles and advanced features.
*   **Orca Slicer / Bambu Studio:** Forks of PrusaSlicer, often optimized for high-speed printers and offering enhanced features like calibration tools and multi-color printing setup.

Most printers will recommend a slicer, and many come with pre-configured profiles. Spend some time learning your slicer, as it has a huge impact on print quality.

## Bottom Line: What to Buy?

For the weekend tinkerer, I generally recommend starting with a well-regarded FDM printer that offers a good balance of features, reliability, and community support. You want something that's easy to get started with but also has room for growth and modification.

If you're a beginner looking for a solid entry point, consider something like the **Creality Ender 3 V3 KE** (B0CD8K8F6Q). It's a significant upgrade from older Ender 3 models, offering auto-leveling, direct drive, and decent speed for a very reasonable price. It's a great platform to learn on, and the community support for Ender-series printers is immense.

If you have a bit more budget and want a machine that's largely "set and forget" with excellent print quality and speed right out of the box, the **Bambu Lab P1S** (B0C8K95T87) is an incredibly popular choice. While more of a closed ecosystem, its performance and user experience are hard to beat.

Ultimately, the best 3D printer for you is one that fits your specific projects, budget, and willingness to tinker. Don't chase the absolute cheapest option, as you might spend more time troubleshooting than printing. Invest in a machine that has a good reputation for reliability and support, and you'll be well on your way to bringing your digital designs into
