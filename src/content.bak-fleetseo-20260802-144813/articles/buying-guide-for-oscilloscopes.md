---
title: Buying guide for oscilloscopes
description: buying guide for oscilloscopes
pubDate: '2026-07-09'
author: eli-rowe
tags:
- best soldering iron for beginners
- hakko fx-888d vs pine64 pinecil
- cheapest decent oscilloscope
status: published
heroImage: ''
---

So, you’re thinking about adding an oscilloscope to your bench. Good for you. For years, I told myself I didn’t *really* need one, that my multimeter and logic probe were enough. I was wrong. An oscilloscope isn’t just another tool; it’s a window into the dynamic world of electronics that static measurements simply can’t show you. It’s the difference between looking at a still photograph of a waterfall and watching the water flow. If you’re serious about understanding what’s *really* happening in your circuits, especially with anything involving timing, signals, or noise, an oscilloscope is indispensable.

*TinkerBench is reader-supported. When you buy through links on our site, we may earn an affiliate commission. Learn more about how we test products [here](INTERNAL:our-testing-methodology).*

## Why an Oscilloscope? Beyond the Multimeter

A multimeter is excellent for measuring DC voltages, currents, and resistance — the steady-state characteristics of a circuit. But modern electronics are rarely steady-state. We’re dealing with clocks, data lines, audio signals, power supply ripple, and all sorts of transient events. That’s where the oscilloscope shines.

Imagine you’re troubleshooting a digital circuit. Your multimeter might tell you a pin is at 3.3V, but is it a *clean* 3.3V, or is it riddled with noise and ringing? Is the signal transitioning cleanly, or are there glitches? What’s the actual frequency of that clock signal? How long does it take for a transistor to switch? These are questions only an oscilloscope can answer.

For analog work, it’s even more critical. You can see the shape of an audio waveform, identify distortion, or track down unwanted oscillations. In power electronics, you can visualize switching losses, measure rise and fall times, and observe ripple on your DC rails. It’s the difference between guessing and knowing.

## Key Specifications and What They Mean for Your Bench

Navigating oscilloscope specifications can feel like deciphering hieroglyphs if you’re new to it. Let’s break down the most important ones for the home tinkerer.

### Bandwidth: The Top of Your Frequency Range

This is arguably the most critical spec. Bandwidth defines the maximum frequency signal the oscilloscope can accurately display. As a rule of thumb, you want an oscilloscope with a bandwidth at least 3 to 5 times the highest frequency component you expect to measure. Why? Because square waves and other complex signals are made up of a fundamental frequency *and* many higher-order harmonics. To see a reasonably accurate representation of a digital signal, you need to capture those harmonics.

For most hobbyist work involving microcontrollers (Arduino, Raspberry Pi), audio, and lower-speed digital logic, a 50 MHz or 70 MHz scope is a good starting point. If you’re dabbling in RF, high-speed data, or faster microprocessors, you’ll need more.

*   **50-100 MHz:** Excellent for audio, slower microcontrollers (e.g., ATmega328 on an Arduino Uno), I2C/SPI buses, power supply ripple, and general analog troubleshooting. This is where most beginners should start.
*   **100-200 MHz:** Good for faster microcontrollers (e.g., ARM Cortex-M), basic RF, USB 1.1, and more complex digital signals. This range offers a lot of versatility for the money.
*   **200 MHz+:** Moving into more specialized areas. Useful for faster embedded systems, Ethernet, USB 2.0, and advanced RF. These tend to be significantly more expensive.

Don’t be tempted to buy a 20 MHz scope just because it’s cheap. You’ll quickly outgrow it and find yourself frustrated by its limitations, especially with digital signals.

### Sample Rate: Capturing the Details

While bandwidth tells you the highest frequency your scope can *see*, sample rate tells you how accurately it can *reconstruct* that signal. Measured in Samples per Second (Sa/s), this is how many data points the oscilloscope takes per second to draw the waveform. The Nyquist-Shannon sampling theorem states you need at least twice the highest frequency component to avoid aliasing, but for accurate waveform representation, you ideally want 5-10 times the bandwidth.

Most entry-level digital oscilloscopes (DSOs) will offer 500 MSa/s to 1 GSa/s (GigaSamples per second). For a 100 MHz scope, 1 GSa/s is generally sufficient for single-channel measurements. Be aware: many scopes advertise a high sample rate, but that rate is often shared across channels. A 1 GSa/s, 4-channel scope might only deliver 250 MSa/s per channel when all four are active. Always check the *per-channel* sample rate.

### Number of Channels: How Many Signals at Once?

Most hobbyist scopes come with two or four analog channels.
*   **Two channels:** Perfectly adequate for many tasks. You can compare two signals (e.g., input vs. output of an amplifier, clock vs. data line).
*   **Four channels:** Offers much greater flexibility. You can observe multiple points in a complex circuit simultaneously, which is invaluable for debugging microcontroller peripherals (e.g., SPI with clock, MOSI, MISO, and Chip Select). If your budget allows, four channels are a significant upgrade in capability.

### Memory Depth: Zooming In on Events

Memory depth (often in points or Mpts) determines how long a waveform the oscilloscope can capture at its maximum sample rate. A deeper memory allows you to capture a long duration of a high-speed signal, then zoom in on specific details without losing resolution.

For example, if you have a 1 GSa/s scope with 1 Mpt (1 million points) of memory, you can capture 1 millisecond of data at full speed (1 Mpt / 1 GSa/s = 0.001 s). If you need to see an event that happens over several milliseconds or even seconds, you’d either need a much deeper memory or you’d have to reduce the sample rate, sacrificing detail.

For general tinkering, a few Mpts is usually fine. If you’re debugging complex serial protocols or looking for infrequent glitches, more memory is better.

### Display: Size and Clarity Matter

While not a technical spec in the same vein as bandwidth, a good display makes a world of difference. Look for:
*   **Resolution:** Higher resolution means sharper waveforms.
*   **Size:** A larger screen is easier on the eyes, especially during long debugging sessions. 7-inch or 8-inch displays are common and generally good.
*   **Color:** Almost all modern DSOs are color, which helps differentiate channels and measurements.

## Types of Oscilloscopes for the Home Bench

When you’re looking at oscilloscopes today, you’ll primarily encounter two types:

### Digital Storage Oscilloscopes (DSOs)

These are the workhorses of modern electronics. They digitize the analog signal, store it in memory, and then display it on an LCD screen. This allows for features like:
*   **Waveform storage:** Save waveforms for later analysis.
*   **Automated measurements:** Automatically calculate frequency, peak-to-peak voltage, rise time, etc.
*   **Triggering modes:** Capture specific events (e.g., only when a signal rises above a certain voltage).
*   **Advanced analysis:** FFT (Fast Fourier Transform) for spectrum analysis, serial decoding (I2C, SPI, UART).

Most recommendations for hobbyists will be DSOs. They offer the best balance of features, performance, and price.

A solid entry-level choice that many tinkerers start with is the **Rigol DS1054Z**. While technically a 50 MHz scope, it's widely known to be hackable to 100 MHz, offering incredible value. It's a 4-channel scope with 1 GSa/s sample rate and 12 Mpts memory depth. It often goes for around $350-400, making it a fantastic first scope. You can find it on Amazon: [Rigol DS1054Z](https://www.amazon.com/Rigol-DS1054Z-Digital-Oscilloscopes/dp/B010AY990A/?tag=tinkerbench-20).

### Mixed Signal Oscilloscopes (MSOs)

An MSO is essentially a DSO with added digital logic channels. If you’re heavily involved in microcontroller work, especially with many digital signals (e.g., parallel buses, multiple serial lines), an MSO can be incredibly useful. It allows you to see your analog signals alongside many digital signals, all time-correlated.

For example, you could observe an analog sensor output on channel 1, an MCU’s ADC conversion complete signal on channel 2, and 8-16 digital data lines on the logic channels, all at the same time. This can simplify debugging complex digital systems dramatically. MSOs are generally more expensive than pure DSOs.

The **Keysight MSOX2000 series** (e.g., MSOX2012A) is a professional-grade MSO, but for hobbyists looking for MSO capabilities without breaking the bank, some companies like Siglent offer more affordable options. For example, the **Siglent SDS1104X-E** is a 100 MHz, 4-channel DSO that can be upgraded to MSO functionality with an optional logic probe kit. This offers a good path for growth. You can often find it for around $500-600. [Siglent SDS1104X-E](https://www.amazon.com/Siglent-SDS1104X-E-Oscilloscope-Channels-Bandwidth/dp/B073X696L1/?tag=tinkerbench-20).

### PC-Based / USB Oscilloscopes

These scopes connect to your computer via USB and use software on your PC for display and control. They can be very compact and often less expensive for a given bandwidth/sample rate, as they leverage your computer's screen and processing power.

*   **Pros:** Portable, often cheaper, can integrate well with other PC-based tools.
*   **Cons:** Tied to a computer, performance depends on PC specs, latency can sometimes be an issue, user interface is software-dependent (and sometimes clunky).

For absolute beginners or those with very limited space, a USB scope can be a good entry point. Just be wary of the *really* cheap ones; their performance often doesn't live up to the advertised specs. A decent one, like those from Picoscope, can be quite good. The **PicoScope 2205A** is a 25 MHz, 2-channel USB scope that provides excellent software and features for its price range, often around $200. [PicoScope 2205A](https://www.amazon.com/PicoScope-2205A-Oscilloscope-Generators-Channels/dp/B0XXXXXXXX/?tag=tinkerbench-20).

## Essential Features to Look For

Beyond the core specs, these features significantly improve the user experience and debugging power:

*   **Triggering Capabilities:** Basic edge triggering is standard. Look for pulse width, video, slope, and especially *serial protocol triggering and decoding* (I2C, SPI, UART, CAN, LIN). This is a game-changer for digital debugging, letting the scope automatically trigger on specific data packets and display the decoded data.
*   **Automatic Measurements:** The more built-in measurements (Vp-p, Vrms, frequency, duty cycle, rise/fall times, etc.), the less manual calculation you'll do.
*   **FFT (Fast Fourier Transform):** This converts the time-domain signal into the frequency domain, allowing you to see the spectral content of a signal. Invaluable for identifying noise sources, harmonics, and analyzing RF signals.
*   **Waveform Math:** Addition, subtraction, multiplication, and division of waveforms. Useful for things like calculating instantaneous power (Voltage * Current).
*   **Persistence Mode:** Mimics an analog scope, showing how often a signal trace appears. Great for spotting intermittent glitches or signal variations.
*   **Connectivity:** USB for data transfer and remote control, Ethernet for network access, and possibly a pass/fail output for automated testing.
*   **Probes:** Don’t underestimate the importance of good probes. Most scopes come with decent passive 1x/10x probes. For high-frequency work, active probes or specialized current probes might be necessary, but that’s a topic for another day. Ensure the probes match the scope’s bandwidth.

## Who is it For? (And Who It Isn't For)

*   **Beginner/Weekend Tinkerer:** A 50-100 MHz, 2 or 4-channel DSO with decent memory and basic serial decoding is ideal. The Rigol DS1054Z is almost universally recommended here for its value.
*   **Intermediate/Advanced Hobbyist:** 100-200 MHz, 4-channel DSO or MSO with advanced triggering, deeper memory, and comprehensive serial decoding. The Siglent SDS1104X-E is a strong contender.
*   **Professional/High-Speed Application:** You’re likely looking at 350 MHz+ bandwidth, very deep memory, high sample rates, and specialized probes. These are typically Agilent/Keysight, Tektronix, or Rohde & Schwarz instruments, costing thousands. If you're reading this, you probably already know what you need and aren't in this category for your home bench.

If you *only
