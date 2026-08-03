---
title: How to choose 3d printers
description: how to choose 3d printers
pubDate: '2026-07-09'
author: eli-rowe
tags:
- best soldering iron for beginners
- hakko fx-888d vs pine64 pinecil
- cheapest decent oscilloscope
status: published
heroImage: ''
---

So, you've decided to dip your toes into the world of 3D printing. Maybe you've seen some impressive prints online, or perhaps you're looking to prototype your own inventions. Whatever your motivation, congratulations – you're about to embark on a fascinating journey. But before you get lost in the endless options, let's talk about what really matters when choosing your first (or next) 3D printer.

*Affiliate Disclosure: This article contains affiliate links. If you make a purchase through these links, TinkerBench may earn a small commission at no extra cost to you. This helps support our independent testing and content creation.*

## Understanding Your Needs: What Do You Want to Print?

This is the absolute first question to answer, and it will narrow down your choices considerably. Are you planning to print small, intricate miniatures for tabletop gaming? Functional parts for home repairs or custom enclosures for your electronics projects? Large-scale architectural models? The answer dictates the type of printer, its build volume, and even the materials you'll be using.

### FDM vs. Resin: The Fundamental Divide

The vast majority of consumer-grade 3D printers fall into one of two main categories: Fused Deposition Modeling (FDM) or Stereolithography (SLA), commonly referred to as "resin" printers.

**FDM Printers:** These are the workhorses of the hobbyist world. They operate by extruding a thermoplastic filament (like PLA, PETG, or ABS) through a heated nozzle, laying down successive layers to build up a 3D object.

*   **Pros:** Generally more affordable upfront, wider range of material options (including flexible, wood-filled, and glow-in-the-dark filaments), easier cleanup, safer to operate in a typical home environment, and prints tend to be more robust for functional applications.
*   **Cons:** Visible layer lines (though these can be minimized), generally lower resolution and detail than resin printers, and can be prone to issues like warping or stringing if not properly tuned.
*   **Who it's for:** Beginners, those on a budget, anyone wanting to print functional parts, prototypes, larger objects, or just experiment with various materials.

**Resin (SLA/DLP/LCD) Printers:** These printers use a liquid photopolymer resin that cures when exposed to UV light. They achieve incredibly high detail and smooth surfaces.

*   **Pros:** Superior detail and surface finish, ideal for miniatures, jewelry, artistic models, or any application where fine features are paramount.
*   **Cons:** Resin is messy, toxic, and requires careful handling (gloves, ventilation). Post-processing involves washing prints in alcohol and further UV curing. Resins are more expensive than filament, and prints can be brittle. Build volumes are typically smaller.
*   **Who it's for:** Model makers, miniature painters, jewelers, anyone prioritizing extreme detail and smooth finishes over size or material robustness. Not recommended as a first printer for someone without a dedicated workspace and a good understanding of safety protocols.

For the purpose of this guide, I'm going to focus primarily on FDM printers, as they are the more common and accessible entry point for most tinkerers. If you're dead set on resin, I'd suggest doing some deep dives into [resin printer safety and workflow](INTERNAL:resin-safety-workflow) before making a purchase.

## Key Specifications and Features to Consider (FDM Focus)

Once you've decided on FDM, it's time to dig into the nitty-gritty. Don't get overwhelmed by the spec sheets; focus on what genuinely impacts your printing experience.

### 1. Build Volume: How Big Do You Need to Go?

This refers to the maximum dimensions (X, Y, Z) of an object the printer can produce. Common sizes range from 150x150x150mm up to 300x300x400mm or more.

*   **Small (e.g., 150x150x150mm):** Fine for tiny trinkets, miniature parts, or very specific functional components. You'll quickly run into limitations if you want to print anything substantial.
*   **Medium (e.g., 220x220x250mm):** This is the sweet spot for many hobbyists. Printers like the ubiquitous Creality Ender 3 series (or clones) fall into this category. It's large enough for most common projects without taking up excessive bench space. The [Creality Ender 3 V3 KE](https://www.amazon.com/Creality-Ender-3-V3-KE-Filament/dp/B0CKK57XJ4/?tag=tinkerbench-20) is a solid example of a modern printer in this size class that offers a lot for the money.
*   **Large (e.g., 300x300x300mm+):** If you plan on printing helmets, large enclosures, or multiple parts simultaneously, a larger build volume is essential. Be aware that larger prints take considerably longer and consume more filament. They also require a very well-tuned printer to avoid failures over long print times.

My advice: Don't automatically go for the biggest. A medium-sized printer is often more reliable, faster, and easier to manage for a beginner. You can always print larger objects in sections and assemble them.

### 2. Print Speed and Quality: The Perpetual Trade-off

Modern FDM printers are getting incredibly fast. Where 50-60mm/s was once standard, some printers now boast speeds of 250mm/s or even 500mm/s.

*   **Speed:** Faster printing is great, especially for large objects. However, raw speed isn't everything. A printer needs to maintain print quality at high speeds, which requires a rigid frame, good electronics, and advanced motion control (like input shaping, often seen on Klipper-powered machines).
*   **Quality:** This is largely determined by factors like layer height (thinner layers mean finer detail but longer print times), extruder consistency, and the rigidity of the printer's frame. Don't obsess over "micron" specs – most hobbyists print at 0.16mm to 0.28mm layer heights.

For a beginner, a printer that can reliably hit 100-150mm/s with good quality is more than sufficient. Don't chase the absolute fastest speeds unless you know you need them and are willing to pay for the engineering required to achieve them *reliably*.

### 3. Ease of Use and Assembly: Plug and Play vs. Project

Some printers arrive as a box of parts, requiring hours of assembly and calibration. Others are nearly ready to print out of the box.

*   **Assembly:** Many popular budget printers require some assembly. This can be a great learning experience, helping you understand how the machine works. However, if you're not mechanically inclined or short on time, look for "pre-assembled" or "quick-assembly" models.
*   **Auto-Leveling/Bed Leveling:** This is a crucial feature. Manual bed leveling can be frustrating for newcomers. Look for printers with automatic bed leveling (ABL) systems (like BLTouch, CRTouch, or inductive sensors). This significantly reduces the learning curve and potential for failed prints.
*   **User Interface:** A simple touchscreen interface is often more user-friendly than a small monochrome LCD with a rotary encoder.
*   **Connectivity:** SD card slots are standard. USB connectivity for tethering to a computer is also common. Wi-Fi and app control are increasingly popular features, allowing you to monitor prints remotely. The [Bambu Lab P1P](https://www.amazon.com/Bambu-Lab-P1P-3D-Printer/dp/B0BTHN384W/?tag=tinkerbench-20) is a prime example of a printer that prioritizes ease of use and advanced connectivity right out of the box, though it comes at a higher price point.

### 4. Open Source vs. Closed Ecosystem

This is a philosophical choice with practical implications.

*   **Open Source:** Many budget-friendly printers are based on open-source designs (Marlin firmware, RepRap principles). This means a huge community, readily available modifications, and easy access to replacement parts. You have more control but also more responsibility for troubleshooting.
*   **Closed Ecosystem:** Some manufacturers, particularly those focusing on ease of use and reliability, employ closed-source firmware and proprietary parts. This can mean a smoother experience but less flexibility for customization and potentially higher costs for replacement parts.

For a tinkerer, an open-source printer often provides more opportunities for learning and modification down the line. However, if you just want to print and not tinker with the printer itself, a more closed, "appliance-like" experience might be preferable.

### 5. Hotend and Extruder: Printing Diverse Materials

The hotend melts the filament, and the extruder pushes it. Their design impacts what materials you can print.

*   **All-Metal Hotend:** Essential for printing higher-temperature filaments like ABS, ASA, or Nylon, as it doesn't have a PTFE tube that degrades at high temperatures.
*   **Direct Drive Extruder:** The extruder motor is mounted directly above the hotend. This provides better control over filament flow, especially for flexible filaments like TPU, and reduces stringing.
*   **Bowden Extruder:** The extruder motor is mounted away from the hotend, pushing filament through a long PTFE tube. Simpler, lighter print head, often found on cheaper machines, but less ideal for flexibles.

If you envision printing anything beyond basic PLA and PETG, an all-metal hotend and ideally a direct-drive extruder are highly recommended.

### 6. Heated Bed: Adhesion is Key

A heated print bed is almost a non-negotiable feature for FDM printers. It helps prevent warping by keeping the bottom layers of your print warm and sticking to the surface.

*   **Bed Surface:** Common surfaces include glass, PEI (smooth or textured), and flexible magnetic sheets. PEI sheets are excellent for adhesion and ease of print removal. A flexible PEI sheet is a game-changer for getting prints off without a struggle.

### 7. Enclosure: For Advanced Materials and Consistency

While not strictly a feature of the printer itself, an enclosure (either built-in or aftermarket) is vital for printing temperature-sensitive materials like ABS, ASA, or Nylon. It maintains a stable ambient temperature, preventing warping and improving print quality. It also helps contain fumes. If you plan on printing these materials, factor in the cost and space for an enclosure.

## Budgeting for Your 3D Printing Journey

Beyond the printer itself, there are other costs to consider.

*   **Filament:** This is your consumable. A 1kg spool of good quality PLA can range from $18-$30. Start with a few spools of different colors of PLA.
*   **Tools:** A good set of [precision pliers](https://www.amazon.com/Hakko-CHP-170-Micro-Cutter/dp/B000BMZ8LC/?tag=tinkerbench-20) for snipping filament, a scraper for print removal, and perhaps a set of hex keys are essential.
*   **Spare Parts:** No matter how good your printer is, things will eventually wear out. Having spare nozzles, a PTFE tube (if applicable), and perhaps a thermistor on hand is wise.
*   **Software:** Slicing software (like PrusaSlicer or Cura) is almost always free. Design software (CAD) can range from free (Tinkercad, FreeCAD) to subscription-based (Fusion 360 for personal use, SolidWorks).
*   **Ventilation:** Especially for materials like ABS or resin, proper ventilation is crucial for your health. This might involve a small exhaust fan or even an air purifier.

A good starting budget for a decent FDM printer and initial supplies is around $250-$400. You can certainly spend less, but you'll likely encounter more frustrations. You can also spend significantly more for advanced features, larger build volumes, or multi-material capabilities, such as the [Prusa MK4](https://www.amazon.com/Original-PRUSA-MK4-3D-Printer/dp/B0C39H9C1P/?tag=tinkerbench-20).

## Bottom Line

Choosing your first 3D printer can feel overwhelming, but by focusing on your primary needs and understanding the core technologies, you can make an informed decision. For most weekend tinkerers and aspiring makers, an FDM printer with a medium build volume, automatic bed leveling, and a heated bed is the sweet spot. Don't be afraid to start with a more affordable, community-supported model. You'll learn a ton, and you can always upgrade or add a second, specialized printer later. The most important thing is to get started, embrace the learning curve, and enjoy the process of bringing your digital designs into the physical world. For more tips on getting started, check out our guide on [essential 3D printing accessories](INTERNAL:3d-printing-accessories). Happy printing!

## Our picks worth a closer look

- **[Pine64 Pinecil Smart Mini Portable Soldering Iron V2](/products/b097cz9x42-pinecil-smart-soldering-iron/)** — see current price and specs.
- **[Hakko FX-888D Digital Soldering Station with FX-8801 Tip](/products/b01bpp3jno-hakko-fx888d-soldering-station/)** — see current price and specs.
- **[FNIRSI DSO-TC3 Handheld Digital Oscilloscope and Component Tester](/products/b07wmvg9kk-fnirsi-digital-oscilloscope/)** — see current price and specs.

