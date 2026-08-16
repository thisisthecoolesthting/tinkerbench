---
title: How to choose power supplies
description: how to choose power supplies
pubDate: '2026-07-10'
author: eli-rowe
tags:
- best soldering iron for beginners
- hakko fx-888d vs pine64 pinecil
- cheapest decent oscilloscope
status: published
heroImage: ''
---

I’ve been asked countless times, “Eli, I need a power supply. Which one should I get?” It’s a simple question with a surprisingly complex answer, because the “best” power supply for you depends entirely on what you’re trying to power. It’s a bit like asking what the best wrench is – a pipe wrench isn’t much use for a spark plug. So, let’s break down the world of power supplies and help you pick the right one for your workbench.

*As an Amazon Associate, I earn from qualifying purchases made through the affiliate links in this article.*

## Understanding Your Power Needs: Volts, Amps, and Watts

Before you even start looking at models, you need to pin down the fundamental requirements of your projects: voltage, current, and power. These three are inextricably linked by Ohm's Law (V=IR) and the power formula (P=IV).

### Voltage: The Electrical Pressure

Voltage (V) is the electrical "pressure" that pushes current through a circuit. Most hobby electronics operate at common voltages like 3.3V, 5V, 9V, 12V, or 24V. Your microcontroller boards, op-amps, and motor drivers will all specify an operating voltage.

*   **Fixed vs. Variable Voltage:** Some projects need a very specific, unchanging voltage (e.g., 5V for a Raspberry Pi). Others, especially during development and testing, benefit immensely from a variable voltage supply. Being able to dial in 3.3V, then 5V, then 12V without swapping supplies or using voltage regulators is a huge time-saver.
*   **Voltage Range:** If you're building a simple 5V circuit, a supply that only goes up to 5V might suffice. But if you’re experimenting with anything from low-power sensors to small motors, you’ll quickly find yourself needing a wider range, perhaps 0-30V. My general recommendation for a first bench supply is one that offers at least 0-30V. This covers the vast majority of common hobbyist ICs, microcontrollers, and many motor applications.

### Current: The Flow of Electrons

Current (A) is the amount of electrical charge flowing through a circuit per unit of time. This is where many beginners get tripped up. A power supply *provides* a maximum current, but your circuit *draws* only what it needs. A 5A supply won't "force" 5A into a circuit that only needs 100mA; it will simply make 5A *available* if required.

*   **Peak vs. Continuous Current:** Consider the maximum current your project might ever draw. Does an LED blink? Does a motor briefly stall? These can cause current spikes. You want a power supply that can comfortably provide the *continuous* current your circuit needs, with some headroom for those brief peak demands.
*   **Overcurrent Protection (OCP):** This is a critical safety feature. A good bench supply will allow you to set a current limit. If your circuit tries to draw more than this limit (e.g., due to a short circuit or a miswired component), the power supply will either shut down or enter a constant current (CC) mode, preventing damage to your circuit, the power supply itself, and potentially you. Always set your current limit before connecting a new circuit!
*   **Typical Current Needs:**
    *   Microcontrollers (Arduino, ESP32, etc.): Typically tens to hundreds of milliamps (mA), often less than 0.5A.
    *   Raspberry Pi: 1-3A, depending on the model and peripherals.
    *   Small motors/servos: 0.5A to several amps.
    *   LED strips: Can draw significant current, often several amps per meter.
    *   Audio amplifiers: Can draw many amps, especially at higher power outputs.

### Power: The Total Output

Power (W) is simply Voltage multiplied by Current (P = V * I). While you typically specify voltage and current separately, keeping an eye on the total power output of a supply is useful. A supply rated for 30V and 5A can deliver a maximum of 150W. If your project requires 24V and 8A (192W), that 30V/5A supply won't cut it.

## Types of Power Supplies: Picking the Right Tool

Now that we understand the basics, let’s look at the different categories of power supplies you might encounter.

### 1. Bench Power Supplies (Regulated DC)

This is the workhorse of any electronics lab, hobbyist or professional. These are typically adjustable DC voltage and current sources.

*   **Linear Regulated:** These are older, heavier, and less efficient (they dissipate excess voltage as heat), but they offer very low noise output. For sensitive analog circuits or high-fidelity audio, a linear supply is often preferred. They tend to be more expensive for the same power output.
*   **Switch-Mode (SMPS):** These are lighter, more compact, and much more efficient. They achieve voltage regulation by rapidly switching power on and off. The downside is that they can introduce more electrical noise (ripple and spikes) into the output, which can be problematic for very sensitive circuits. However, modern SMPS designs have significantly reduced this issue, and for most digital and mixed-signal hobby projects, they are perfectly fine.
*   **Channels:** Many bench supplies offer multiple independent outputs, or "channels."
    *   **Single Channel:** A basic supply with one output. Good for simple projects.
    *   **Dual Channel:** Two independent outputs, often identical. Invaluable for projects requiring two different voltages (e.g., 5V for logic, 12V for motors) or for powering op-amps with a split supply (+V, 0V, -V). Some can be configured in series for higher voltage or in parallel for higher current.
    *   **Triple Channel:** Typically two main adjustable channels and a third fixed-voltage channel (e.g., 5V or 3.3V) for powering logic. This is my personal preference for a versatile bench setup.
*   **Features to Look For:**
    *   **Fine Control:** Separate coarse and fine adjustment knobs for voltage and current make precise settings much easier.
    *   **Display Resolution:** Digital displays showing voltage and current with at least two decimal places (e.g., 5.00V, 0.12A) are essential.
    *   **Memory Presets:** Some supplies allow you to save frequently used voltage/current settings.
    *   **Programmability:** Higher-end models can be controlled via USB or Ethernet, allowing automated testing. This is typically overkill for most hobbyists, but useful for more advanced setups.
    *   **Remote Sensing:** For projects that draw significant current through long wires, remote sensing (or 4-wire sensing) compensates for voltage drop in the cables, ensuring the voltage at your load is precisely what you set. Again, more of a professional feature.

*   **Recommendations:**
    *   **Beginner/Budget:** For a solid, no-frills single-channel supply, I’ve used the **KORAD KA3005P** (30V, 5A) for years. It's an SMPS but with decent ripple specs for its price. It’s got a good display and robust protection.
    *   **Intermediate/Versatile:** If you can swing it, a dual-channel supply is a game-changer. The **Rigol DP832A** is an excellent triple-output linear supply (two adjustable 30V/3A channels, one fixed 5V/3A channel). It's quiet, precise, and built like a tank. It’s a significant investment but will last decades.
    *   **Hobbyist Pro/Compact:** For something more compact with good features, the **Siglent SPD3303X-E** is a strong contender. It offers two 30V/3.2A channels and a 2.5V/3.3V/5V 3.2A channel, with excellent displays and robust protection.

### 2. Wall Warts / AC-DC Adapters

These are the ubiquitous power bricks that come with almost every consumer electronic device.

*   **Fixed Voltage/Current:** They provide a fixed DC voltage (e.g., 5V, 9V, 12V) and have a maximum current rating.
*   **Unregulated vs. Regulated:** Older, cheaper wall warts might be unregulated, meaning their output voltage can vary significantly with the load. Modern ones are almost universally regulated switch-mode supplies, offering a more stable output.
*   **Pros:** Cheap, readily available, compact.
*   **Cons:** Fixed output, often noisy, limited current, no current limiting (beyond an internal fuse/breaker), often proprietary connectors.
*   **When to Use:** Great for powering a finished project that needs a specific voltage and doesn't draw excessive current. Not ideal for development or testing due to lack of adjustability and protection.
*   **Tip:** Don't throw out old wall warts. Label them with their voltage and current. They can be invaluable for powering small, finished projects. Just be sure to check their output with your [multimeter](INTERNAL:how-to-choose-a-multimeter) before connecting them to anything sensitive.

### 3. USB Power Banks & Chargers

With the prevalence of USB-powered devices, these have become a de facto power source.

*   **Fixed Voltage (mostly 5V):** Standard USB output is 5V. Newer standards like USB-PD (Power Delivery) can negotiate higher voltages (9V, 12V, 15V, 20V) and higher currents.
*   **Limited Current:** Standard USB ports (USB-A) typically provide 0.5A to 2.4A. USB-C with PD can go much higher.
*   **Pros:** Convenient, portable, widely available.
*   **Cons:** Primarily 5V, limited current for many projects, no current limiting (beyond what the charger/bank is designed for), often noisy.
*   **When to Use:** Excellent for powering microcontrollers, small sensors, or charging batteries. Not suitable for projects requiring variable voltage or high current.

### 4. ATX PC Power Supplies

A common hack for hobbyists is to repurpose an old ATX power supply from a computer.

*   **Multiple Fixed Voltages:** They provide +3.3V, +5V, +12V, -12V, and sometimes +5VSB (standby).
*   **High Current:** Can deliver significant current on the 5V and 12V rails (often 10A-30A or more).
*   **Pros:** Very high current capability, multiple voltages, relatively cheap (if you have an old one lying around).
*   **Cons:** Bulky, noisy fan, requires modification to turn on and add proper terminals, can be dangerous if mishandled (high voltages inside), no current limiting per rail.
*   **When to Use:** Good for powering high-current 5V or 12V projects like LED strips, motor drivers, or charging large battery packs. Not recommended as a primary bench supply due to lack of adjustability and protection. If you go this route, be sure to look up proper conversion tutorials and add appropriate fusing.

### 5. Battery Packs (LiPo, NiMH, etc.)

While not a "power supply" in the traditional sense, batteries are crucial for portable projects.

*   **Fixed or Variable Voltage (depending on chemistry/configuration):** A single LiPo cell is 3.7V nominal, a 3S pack is 11.1V.
*   **High Current Capability:** Can deliver very high currents, especially LiPo batteries.
*   **Pros:** Portable, clean power (no ripple), high current.
*   **Cons:** Finite capacity, requires charging, no inherent current limiting (can be dangerous if shorted), voltage drops as they discharge.
*   **When to Use:** For any project that needs to be portable. Essential for robotics, drones, and wearable electronics. You'll still need a bench supply to *charge* these batteries and develop the circuits they power.

## Key Considerations When Buying

### Safety Features

*   **Overcurrent Protection (OCP):** Absolutely essential. Allows you to set a maximum current.
*   **Overvoltage Protection (OVP):** Shuts down the supply if the output voltage exceeds a safe limit.
*   **Short Circuit Protection:** Protects the supply from damage if the output is accidentally shorted.
*   **Thermal Protection:** Prevents the supply from overheating.

### Output Noise (Ripple and Noise)

This refers to unwanted AC components superimposed on the DC output.

*   **Linear supplies** typically have ripple in the millivolt range (mVp-p).
*   **Switch-mode supplies** can have ripple in the tens or even
