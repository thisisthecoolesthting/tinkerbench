---
title: How to choose oscilloscopes
description: how to choose oscilloscopes
pubDate: '2026-07-09'
author: eli-rowe
tags:
- best soldering iron for beginners
- hakko fx-888d vs pine64 pinecil
- cheapest decent oscilloscope
status: published
heroImage: ''
---

Every tinkerer's journey eventually leads them to the oscilloscope. That flickering green trace, once the hallmark of a serious electronics lab, is now accessible to almost anyone with a curious mind and a few hundred dollars. But with so many options out there, from tiny handheld units to benchtop behemoths, how do you pick the right one? Let's demystify the scope.

*TinkerBench is reader-supported. When you buy through links on our site, we may earn an affiliate commission. We only recommend products we've personally tested and stand behind.*

## What Does an Oscilloscope Do, Anyway?

At its heart, an oscilloscope is a voltage over time graphing tool. You feed it an electrical signal, and it draws a picture of that signal's waveform. Think of it as a voltmeter that can see changes hundreds, thousands, or even millions of times a second. This "picture" tells you a lot: the signal's amplitude (how high or low it goes), its frequency (how fast it repeats), its shape (sine wave, square wave, pulse, etc.), and even subtle issues like noise or distortion.

For debugging a flaky circuit, understanding how a microcontroller's GPIO pins are behaving, or reverse-engineering a communication protocol, an oscilloscope is indispensable. Multimeters are great for static measurements, but they're blind to the dynamic world of changing signals.

### Key Specifications: Understanding the Jargon

Before you dive into shopping, let's break down the essential specs you'll encounter. Don't worry, it's not as complex as it sounds.

#### Bandwidth: How Fast Can It See?

This is arguably the most critical specification. Bandwidth defines the maximum frequency of signal that the oscilloscope can accurately display. If your signal's frequency exceeds the scope's bandwidth, the displayed amplitude will be attenuated, meaning it looks smaller than it actually is, and details will be lost.

*   **For audio work, basic hobby projects, and slow digital signals (e.g., Arduino I2C):** A 20-50 MHz scope is usually sufficient.
*   **For microcontrollers running at a few tens of MHz, higher-speed digital, or RF work:** You'll want 100-200 MHz.
*   **For serious RF, high-speed serial protocols (USB, Ethernet), or advanced digital design:** You're looking at 300 MHz and up.

**Eli's Rule of Thumb:** Your oscilloscope's bandwidth should be at least 5 times (and ideally 10 times) the highest frequency component you want to observe. Remember that square waves and pulses have significant harmonic content at much higher frequencies than their fundamental. A 10 MHz square wave needs a 100 MHz scope to look "square."

#### Sample Rate: How Many Snapshots Per Second?

While bandwidth tells you the highest frequency it can *see*, sample rate tells you how many discrete data points it captures per second to reconstruct that waveform. Measured in Samples per Second (Sa/s or GS/s for GigaSamples/second), a higher sample rate means a more detailed and accurate representation of your signal.

*   **Real-time Sample Rate:** This is the critical number. It's how many samples per second the Analog-to-Digital Converter (ADC) can actually take.
*   **Equivalent-time Sample Rate (ETS):** Some older or cheaper scopes boast huge ETS numbers, but this only works for repetitive signals and is often misleading for general-purpose use. Focus on real-time sample rate.

**Eli's Rule of Thumb:** Aim for a real-time sample rate of at least 2.5 to 5 times your scope's bandwidth per channel in use. So, a 100 MHz scope should ideally have at least 250 MSa/s, and preferably 500 MSa/s or 1 GS/s. Be aware that many scopes halve their sample rate when using more than one channel.

#### Number of Channels: How Many Signals Simultaneously?

Most hobbyist scopes come with 2 or 4 analog channels.

*   **2-channel scopes:** Fine for comparing two related signals, like the input and output of an amplifier, or two phases of a clock signal.
*   **4-channel scopes:** Much more versatile. Essential for debugging microcontrollers (e.g., power, clock, data, and a control line), multi-phase power supplies, or complex digital logic.

Many modern scopes also integrate a logic analyzer, providing 8 or 16 digital channels. These are incredibly useful for observing digital buses (SPI, I2C, UART) without consuming your valuable analog channels. Look for "MSO" (Mixed Signal Oscilloscope) models if digital analysis is a priority.

#### Memory Depth: How Much Can It Remember?

Memory depth (often listed as "Record Length") is the number of sample points the oscilloscope can store for a single acquisition. Measured in points or kilo-points (kpts) or mega-points (Mpts).

*   **Shallow memory (e.g., 10 kpts):** Limits how long of a waveform you can capture at a high sample rate. If you're looking for an infrequent glitch, a shallow memory might miss it or force you to lower your sample rate, reducing detail.
*   **Deep memory (e.g., 1 Mpts or more):** Allows you to capture long durations of high-frequency signals with full detail, making it much easier to zoom in on specific events. This is particularly useful for debugging serial data streams or intermittent issues.

**Eli's Take:** Deep memory is often overlooked by beginners but is a huge quality-of-life improvement. Don't skimp here if you can afford it.

### Types of Oscilloscopes: Finding Your Fit

The market broadly breaks down into a few categories:

#### Handheld Oscilloscopes: The Portable Problem Solver

These are usually battery-powered, compact, and often include multimeter functions. They’re excellent for field service, quick checks, or when you need to poke around a circuit without dragging out a full bench setup.

*   **Pros:** Portable, often affordable, can include DMM functions.
*   **Cons:** Limited bandwidth (typically 20-100 MHz), smaller screens, fewer advanced features, shallower memory.
*   **Who it's for:** Field technicians, hobbyists with limited bench space, anyone needing ultimate portability.
*   **Consider:** The **FNIRSI DSO-TC3** (B0BP7PZ345) is a popular choice for its multimeter and component tester integration, though its scope capabilities are modest. For a more serious handheld, look at offerings from Siglent or Rigol.

#### USB PC-Based Oscilloscopes: Compact Power with a Catch

These scopes connect to your computer via USB and use your PC's screen for display and processing. They can offer surprisingly good specs for their price point, leveraging your computer's power.

*   **Pros:** Can be very cost-effective for their specs, large display (your PC monitor), often good memory depth.
*   **Cons:** Requires a PC, software can be clunky, latency issues can sometimes be present, tied to your computer's OS.
*   **Who it's for:** Hobbyists on a budget who already have a dedicated bench PC, those needing more channels (logic analyzers often come this way).
*   **Consider:** Picoscope makes excellent PC-based scopes, though they can get pricey. For a budget option, the **Hantek 6022BE** (B07W941Q46) was a popular entry point for many, but its software can be a hurdle.

#### Digital Storage Oscilloscopes (DSOs): The Modern Bench Standard

This is the workhorse of the modern lab, from hobby benches to industrial test floors. They digitize the signal and store it in memory, allowing for advanced analysis, measurement, and waveform storage.

*   **Pros:** Wide range of bandwidths and features, dedicated display and controls, robust.
*   **Cons:** Can be bulky and expensive at the high end.
*   **Who it's for:** Everyone from beginners to professional engineers. If you're serious about electronics, this is likely what you want.

#### Mixed Signal Oscilloscopes (MSOs): Analog and Digital Combined

An MSO is a DSO with integrated digital logic analyzer channels. These are invaluable for embedded systems development, where you need to see both analog signals (power supply ripple, clock integrity) and digital signals (SPI, I2C, UART communication) simultaneously and time-correlated.

*   **Pros:** Combines analog and digital analysis, powerful for embedded work.
*   **Cons:** Typically more expensive than pure DSOs.
*   **Who it's for:** Embedded systems developers, microcontroller enthusiasts, anyone working with digital buses.

### Essential Features to Look For

Beyond the core specs, certain features can significantly enhance your oscilloscope experience:

*   **Automatic Measurements:** The ability to automatically display peak-to-peak voltage, frequency, rise time, etc., saves a ton of time.
*   **Triggering Options:** Basic edge triggering is standard, but look for pulse width, video, runt, and serial protocol triggering (I2C, SPI, UART) if your work demands it. Good triggering is crucial for catching intermittent events.
*   **Math Functions:** Add, subtract, multiply, FFT (Fast Fourier Transform) for spectrum analysis. FFT can be incredibly useful for finding noise sources.
*   **Waveform Storage:** USB port for saving screenshots and waveform data is a must.
*   **Screen Size and Resolution:** A larger, higher-resolution screen makes a huge difference in usability, especially when dealing with complex waveforms or multiple channels.
*   **Rotary Encoders:** Physical knobs are almost always preferable to menu diving for setting parameters like vertical scale and horizontal timebase.
*   **Probes:** Don't forget these! Most scopes come with basic 10x passive probes. Consider active probes for very high frequencies or specialized differential probes for floating measurements. [Choosing the Right Oscilloscope Probe](INTERNAL:choosing-oscilloscope-probes) is a topic in itself.

### Recommendations for Different Budgets

Based on my time with various units on the bench, here are a few general recommendations:

#### For the Beginner / Casual Hobbyist (Under $300)

*   **Siglent SDS1052DL+ or SDS1104X-E (100MHz / 4-channel):** Siglent offers excellent value. The SDS1052DL+ (B07W8T26QW) is an older but reliable 2-channel, 50MHz option if you're on a tight budget. If you can stretch a bit more, the SDS1104X-E is a fantastic entry-level 4-channel, 100MHz scope with deep memory and good features, often considered the best value in its class.
    *   **Who it's for:** Students, new hobbyists, those upgrading from a multimeter, Arduino and basic microcontroller work.
    *   **Who it's not for:** High-speed digital designers, RF engineers, professionals needing advanced debugging features.

#### For the Intermediate / Serious Hobbyist (Under $600)

*   **Rigol DS1054Z (100MHz / 4-channel):** This scope (B01B0Q620M) is legendary in the hobbyist community. While officially 50MHz, it's widely known to be easily upgradeable to 100MHz via software. It offers 4 channels, a decent sample rate (1GSa/s shared), and a wealth of features for its price. Rigol's UI is generally good, and there's a massive community around it.
    *   **Who it's for:** Embedded developers, advanced hobbyists, those doing repair work, anyone needing a full-featured bench scope without breaking the bank.
    *   **Who it's not for:** Those needing bandwidth above 100MHz, or demanding the absolute fastest update rates for glitch hunting.
*   **Siglent SDS1104X-E (100MHz / 4-channel):** Mentioned again here because it truly punches above its weight. It's newer than the DS1054Z and often offers a slightly snappier interface and better update rates.

#### For the Advanced User / Small Business (Under $1500)

*   **Rigol DS2072A (200MHz / 2-channel) or DS2072A-S (with built-in arbitrary waveform generator):** These offer higher bandwidth, deeper memory, and faster update rates than the 1000 series. If you need to observe faster signals or more complex phenomena, this is a solid step up.
    *   **Who it's for:** Small businesses, freelance engineers, serious embedded developers, RF enthusiasts.
    *   **Who it's not for:** Those working at gigahertz frequencies or needing specialized high-end features.

### A Note on Used Equipment

You can often find great deals on used oscilloscopes from brands like Tektronix or Keysight (formerly Agilent). However, be cautious. Older analog scopes are wonderful for specific tasks but lack the features and ease of use of a modern DSO. Digital scopes can fail, and repair parts or calibration services might be expensive or unavailable. Always test a used scope thoroughly before buying. [Testing a Used Oscilloscope](INTERNAL:testing-used-scopes) is a worthwhile read.

## Bottom Line

Choosing an oscilloscope is about matching its capabilities to your needs and budget. For most weekend tinkerers, a 2-channel, 50-100 MHz DSO with at least 500 MSa/s sample rate and a decent memory depth

## Our picks worth a closer look

- **[Pine64 Pinecil Smart Mini Portable Soldering Iron V2](/products/b097cz9x42-pinecil-smart-soldering-iron/)** — see current price and specs.
- **[Hakko FX-888D Digital Soldering Station with FX-8801 Tip](/products/b01bpp3jno-hakko-fx888d-soldering-station/)** — see current price and specs.
- **[FNIRSI DSO-TC3 Handheld Digital Oscilloscope and Component Tester](/products/b07wmvg9kk-fnirsi-digital-oscilloscope/)** — see current price and specs.

