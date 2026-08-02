---
title: "power-supply-ripple-noise"
site: tinkerbench
topic: "household-staples"
tier: mvp
cardTitle: "power-supply-ripple-noise"
cardPick: "Editorial household-staples pick from TinkerBench."
updatedAt: '2026-06-06T03:05:47.202Z'
relatedProducts: []
status: published
subtopic: household-staples
publishedAt: '2026-06-06T03:05:47.202Z'
metaDescription: "power-supply-ripple-noise"
excerpt: "power-supply-ripple-noise"
heroImage: /images/heroes/power-supply-ripple-noise.webp
tags:
  - tinkerbench
  - home gym
author: marcus-webb
---


*TinkerBench is reader-supported. When you buy through links on our site, we may earn an affiliate commission.*

Power supplies are the unsung heroes of any electronics project. Without a clean, stable source of power, even the most ingeniously designed circuit can behave erratically or fail completely. One of the key characteristics that define a power supply's quality is its **ripple and noise**. Understanding what it is, how to measure it, and how to minimize it is crucial for any serious electronics hobbyist.
---
## What is Power Supply Ripple and Noise?

Simply put, **power supply ripple noise** is the small, unwanted AC voltage that rides on top of the DC output of a power supply. It's a complex phenomenon caused by several factors within the power supply itself.

*   **Ripple:** This is the periodic component, often at the switching frequency of the power supply (or twice the line frequency in a linear supply). Think of it as a small AC sine wave superimposed on the DC level. It's primarily due to incomplete filtering of the rectified AC voltage.

*   **Noise:** This is the higher-frequency, more random component. It can be caused by switching transients, diode reverse recovery, and electromagnetic interference (EMI).  Noise spikes can be very short in duration but still cause problems.

Think of it like this: you want a glass of perfectly still water (clean DC). Ripple is like gently rocking the glass back and forth, causing waves. Noise is like someone flicking drops of water into the glass, creating splashes.

Why does it matter? Ripple and noise can cause a variety of problems:

*   **Digital circuit malfunction:** Microcontrollers and other digital ICs require a stable voltage. Excessive ripple and noise can cause timing errors, data corruption, and general instability. An [Arduino Uno Rev3](/products/b008grtsv6-arduino-uno-rev3-a000066-atmega328p-microcontroller-16mhz-14/), for example, might exhibit unpredictable behavior.
*   **Analog circuit inaccuracy:** Sensitive analog circuits, like amplifiers and sensors, are particularly susceptible to ripple and noise. It can introduce unwanted signals, reduce resolution, and distort measurements.
*   **Premature component failure:**  Excessive ripple current can overheat capacitors, shortening their lifespan.
*   **EMI problems:** High-frequency noise can radiate from the power supply and interfere with other circuits.

## Measuring Power Supply Ripple and Noise

Measuring ripple and noise requires a bit more care than simply sticking a multimeter across the output terminals. A standard multimeter typically won't capture the high-frequency noise component accurately. Here's what you need:

### Equipment

*   **Oscilloscope:** This is the primary tool for measuring ripple and noise. You'll need an oscilloscope with sufficient bandwidth (at least 100 MHz is recommended for switching power supplies).  Check out our article on [When you need 100 MHz bandwidth vs 20 MHz on a scope].
*   **Oscilloscope Probe:**  A standard passive probe is fine, but be aware of its limitations. The long ground lead can act as an antenna, picking up noise. A shorter ground lead (using the probe's ground spring) or a coaxial cable with a BNC adapter is preferred.  See our article on [Scope probes: why the 10 dollar ones lie about bandwidth].
*   **Power Supply Load:**  The ripple and noise will vary with the load current. Use a suitable resistive load to draw the expected current from the power supply.
*   **50 Ohm Terminator (Optional):** For measuring very high-frequency noise, a 50-ohm terminator at the oscilloscope input can help to match impedance and reduce reflections.
*   **Capacitors (Optional):** Ceramic and electrolytic capacitors for filtering.

### Measurement Procedure

1.  **Set Up:** Connect the power supply to the load.
2.  **Probe Connection:** Connect the oscilloscope probe directly to the output terminals of the power supply. Use the shortest possible ground connection (ground spring or BNC adapter). Avoid using long ground leads.
3.  **Oscilloscope Settings:**
    *   **Coupling:** Set the oscilloscope to AC coupling. This blocks the DC voltage and allows you to see the ripple and noise more clearly.
    *   **Voltage Scale:** Adjust the vertical scale (volts/division) to see the ripple and noise waveform clearly. Start with a small voltage scale (e.g., 10mV/div) and adjust as needed.
    *   **Time Scale:** Adjust the horizontal scale (time/division) to see several cycles of the ripple waveform.
    *   **Triggering:** Use AC triggering and adjust the trigger level to stabilize the waveform.
    *   **Bandwidth Limit:** Enable the oscilloscope's bandwidth limit (typically 20 MHz). This can help to reduce high-frequency noise that isn't relevant to the ripple measurement.
4.  **Measure:**
    *   **Ripple:** Measure the peak-to-peak voltage of the periodic ripple waveform.
    *   **Noise:** Estimate the peak-to-peak voltage of the random noise spikes.  This is often harder to quantify precisely, but it's important to get a sense of the noise level.

**Important Considerations:**

*   **Ground Loops:** Be aware of ground loops, which can introduce noise into your measurements. Ensure that all equipment is connected to the same ground point.
*   **Probe Compensation:**  Ensure your oscilloscope probe is properly compensated. An uncompensated probe can distort the waveform and lead to inaccurate measurements.
*   **Power Supply Mode:** Most power supplies have a "constant voltage" (CV) and "constant current" (CC) mode. Make measurements in CV mode for ripple and noise characterization.

## Minimizing Power Supply Ripple and Noise

Once you've measured the ripple and noise, you can take steps to reduce it. Here are some common techniques:

### Filtering

*   **Output Capacitors:** Adding capacitors to the output of the power supply is the most common and effective way to reduce ripple and noise.
    *   **Electrolytic Capacitors:** These capacitors have high capacitance values and are good at filtering low-frequency ripple. Choose capacitors with low ESR (Equivalent Series Resistance) for better performance.
    *   **Ceramic Capacitors:** These capacitors have low ESR and good high-frequency performance, making them effective at filtering noise. Place ceramic capacitors close to the load for best results.
*   **LC Filters:** Adding an inductor (L) in series with the output, followed by a capacitor (C) to ground, creates an LC filter. This type of filter is very effective at attenuating ripple and noise at specific frequencies.

### Layout and Grounding

*   **Proper PCB Layout:** A well-designed PCB layout can significantly reduce noise. Keep high-current traces short and wide, and use a ground plane to minimize inductance.
*   **Star Grounding:** Connect all ground points to a single point (star ground) to avoid ground loops.
*   **Shielding:** Shielding the power supply from external EMI can also help to reduce noise.

### Power Supply Selection

*   **Choose a Low-Noise Power Supply:** Some power supplies are specifically designed for low noise. These power supplies typically use better filtering components and more sophisticated control circuitry.
*   **Linear vs. Switching:** Linear power supplies generally have lower ripple and noise than switching power supplies. However, they are less efficient and larger. If low noise is critical, a linear power supply may be the better choice.

### Post-Regulation

*   **Linear Regulators:** Adding a linear regulator after the switching power supply can significantly reduce ripple and noise. Linear regulators provide a very clean and stable output voltage, but they are less efficient than switching regulators.

**Example Scenario:**

Let's say you're building a sensitive analog circuit that requires a very clean 5V supply. You're using a cheap switching power supply that you measured to have 50mV of ripple and noise. This is unacceptable for your application.

Here are some steps you can take to reduce the ripple and noise:

1.  **Add Output Capacitors:** Add a 1000uF electrolytic capacitor and a 0.1uF ceramic capacitor to the output of the power supply.
2.  **LC Filter:** Add a small inductor (e.g., 10uH) in series with the output, followed by a 100uF capacitor to ground.
3.  **Linear Regulator:** Add a 7805 linear regulator after the switching power supply to provide a clean 5V output.

By implementing these techniques, you can significantly reduce the ripple and noise and ensure the stable operation of your analog circuit.
