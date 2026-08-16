---
title: Buying guide for power supplies
description: buying guide for power supplies
pubDate: '2026-07-10'
author: eli-rowe
tags:
- best soldering iron for beginners
- hakko fx-888d vs pine64 pinecil
- cheapest decent oscilloscope
status: published
heroImage: ''
---

Power is the lifeblood of every electronic project. Skimp on it, and you'll find yourself chasing phantom bugs, dealing with flaky performance, or worse, frying your carefully assembled circuits. A good bench power supply isn't just a convenience; it's a fundamental tool that will save you time, components, and frustration.

*TinkerBench is reader-supported. When you buy through links on our site, we may earn an affiliate commission at no extra cost to you. We only recommend products we've thoroughly tested and would use ourselves.*

## Why Not Just Use Wall Warts and Batteries?

When you’re just starting, it’s tempting to power everything with whatever wall wart you have lying around or a handful of AA batteries. And for simple, low-power projects, that might even work. But as soon as you move beyond blinking an LED, you'll hit limitations that a dedicated bench power supply easily overcomes.

### The Problem with Fixed Supplies

Wall warts and battery packs offer a fixed voltage and, often, a limited current. Need 3.3V for your ESP32, but your wall wart only puts out 5V? You'll need a voltage regulator, which adds complexity, wastes power, and introduces another potential point of failure. What if your circuit draws more current than the wall wart can provide? You get brownouts, unpredictable behavior, or the supply simply shuts down.

A bench power supply, on the other hand, gives you precise control. You can dial in the exact voltage your circuit needs, typically from 0V up to 30V or even 60V, and set a current limit to protect your project from accidental shorts or overloads. This current limiting feature alone is worth the price of admission. It's like having an invisible safety net for your components.

### Debugging Made Easy

One of the most powerful features of a good bench supply is its ability to help you debug. If your circuit isn't working, and you suspect a power issue, simply watching the current draw on your supply can tell you a lot. Is it drawing too much current, indicating a short? Too little, suggesting an open circuit or a component that isn't powering up? Is the current fluctuating erratically? These are all clues that are invisible when you're just using a fixed supply. Many modern supplies also have a "tracking" feature, allowing you to control multiple outputs simultaneously, which is invaluable for circuits requiring both positive and negative rails.

## Key Specifications to Consider

Choosing a power supply can seem daunting with all the numbers and acronyms. Let's break down the essential specifications you should pay attention to.

### Voltage Range: How High and How Low?

Most hobbyist electronics operate in the 3.3V to 12V range. However, having a supply that can go up to 30V is highly versatile. It covers common microcontrollers, motor drivers, audio amplifiers, and even some higher-voltage discrete component circuits. The ability to go down to 0V is also critical for testing components at very low voltages or for precisely setting thresholds.

For the vast majority of tinkerers, a 0-30V supply is the sweet spot. If you're working with vacuum tubes or specialized high-voltage applications, you'll obviously need something more specific, but that's a niche requirement.

### Current Output: Amps for Your Needs

This is where many beginners underestimate their needs. While an Arduino might only draw tens of milliamps, a small motor can pull hundreds of milliamps, and a bank of LEDs or a more complex digital circuit can easily go into the ampere range.

*   **1A-2A:** Sufficient for basic microcontroller projects, small sensors, and low-power digital circuits.
*   **3A-5A:** A good all-around choice for most hobbyist work. It handles small motors, LED strips, and more complex digital designs. This is where I'd recommend most people start.
*   **10A+:** Necessary for driving larger motors, power electronics, high-current LED arrays, or charging batteries. These supplies tend to be bulkier and more expensive.

Remember, the power supply *provides* up to its rated current; your circuit *draws* what it needs. A 5A supply won't force 5A into a circuit that only needs 100mA. What it *will* do is protect your circuit if it accidentally tries to draw 5A due to a short.

### Number of Outputs: Single, Dual, or Triple?

*   **Single Output:** The simplest and most affordable. Perfect for most projects that only need one voltage rail. Most beginners will start here.
*   **Dual Output:** Invaluable for circuits that require both positive and negative voltage rails (e.g., op-amps, some audio circuits). Many dual supplies can also be configured in series for higher voltage (e.g., two 30V outputs in series for 60V) or in parallel for higher current (e.g., two 5A outputs in parallel for 10A).
*   **Triple Output:** Typically two main variable outputs (e.g., 0-30V) and a fixed 5V or 3.3V output. The fixed voltage output is incredibly convenient for powering logic circuits or microcontrollers while you're experimenting with different voltages on other parts of your circuit. This is my preferred configuration for general bench work.

### Regulation and Ripple: Clean Power is Happy Power

*   **Load Regulation:** How much the output voltage changes when the load current changes. Good supplies maintain a very stable voltage even when your circuit's current draw fluctuates.
*   **Line Regulation:** How much the output voltage changes when the input AC line voltage changes. Less critical in most modern homes with stable mains, but important for consistent performance.
*   **Ripple and Noise:** Unwanted AC components superimposed on your DC output. High ripple can cause instability in sensitive digital circuits, introduce hum into audio circuits, and generally make debugging a nightmare. Look for supplies with ripple and noise specifications in the low millivolt range (e.g., < 5mV RMS). Linear power supplies generally have lower ripple than switching power supplies, but modern switching supplies have gotten very good.

### Display Accuracy and Resolution

A clear, accurate display is essential. You want to be able to set your voltage and current limits precisely. Look for displays with at least two decimal places for voltage (e.g., 12.34V) and one or two for current (e.g., 0.50A or 0.500A). Digital displays are standard now, but some older or cheaper units might have less resolution.

### Protection Features: Don't Fry Your Fun

*   **Over-Voltage Protection (OVP):** Shuts down the supply if the output voltage exceeds a set limit.
*   **Over-Current Protection (OCP):** This is the current limiting feature we discussed earlier. Absolutely essential.
*   **Over-Temperature Protection (OTP):** Prevents damage to the supply itself if it overheats.
*   **Short-Circuit Protection:** A good supply will simply enter current limit mode and maintain a very low output voltage when a short is detected, protecting both the supply and your circuit.

## Types of Power Supplies

There are two main types of bench power supplies: linear and switching.

### Linear Power Supplies

These use a transformer, rectifier, and a linear regulator to produce a stable DC output.
*   **Pros:** Very low ripple and noise, excellent regulation, fast transient response.
*   **Cons:** Heavy (due to large transformers), less efficient (dissipate a lot of heat), typically larger and more expensive for the same power output.
*   **Who it's for:** Audiophiles, RF engineers, or anyone working with extremely sensitive analog circuits where absolute minimal noise is paramount.

### Switching Power Supplies (SMPS)

These convert AC to DC, then chop the DC at a high frequency, transform it, and rectify it back to the desired DC voltage.
*   **Pros:** Much lighter and more compact, higher efficiency, generally more affordable for higher power outputs.
*   **Cons:** Can have higher ripple and noise (though modern designs are very good), can generate EMI (electromagnetic interference) that might affect sensitive RF circuits, slower transient response than linear supplies.
*   **Who it's for:** The vast majority of hobbyists and general electronics work. For most digital and mixed-signal circuits, a well-designed switching supply is perfectly adequate.

For TinkerBench, we primarily recommend good quality switching supplies due to their balance of performance, size, and cost, unless a specific application absolutely demands the ultra-low noise of a linear supply.

## Product Recommendations for the TinkerBench

After testing numerous units over the years, here are a few that stand out for different levels of users:

### Beginner/Budget-Conscious: KORAD KD3005D

The KORAD KD3005D (or its many re-badged equivalents like the Mastech HY3005D) is a workhorse for many beginners. It's a single-output, 0-30V, 0-5A switching supply. It's affordable, reasonably accurate, and has decent current limiting. It's a bit noisy with its fan, and the transient response isn't top-tier, but for getting started, it's hard to beat the value. It’s perfect for powering your Arduino projects, small motor drivers, and basic circuit testing. It's a significant step up from wall warts without breaking the bank.

### Intermediate/General Purpose: Siglent SPD3303X-E

For those ready to invest in a more robust and versatile supply, the Siglent SPD3303X-E is an excellent choice. This is a triple-output programmable linear supply (yes, linear!) with two 0-30V/3.2A channels and one fixed 2.5V/3.3V/5V/3.2A channel. The linear design means incredibly low noise, which is fantastic for sensitive analog work. The ability to track outputs, series/parallel them, and program sequences makes it incredibly useful for more complex designs. The display is clear, the controls are intuitive, and it feels very solid. This is the supply I recommend for anyone serious about getting deeper into electronics and who needs clean, reliable power for demanding projects. It's a bit pricier, but it's a tool that will last you decades.

### Advanced/High Current: RD6006P (with a caveat)

For higher current needs, especially if you're comfortable building your own enclosure and sourcing a robust AC-DC converter, the Riden RD6006P is an interesting option. It's not a complete bench supply out of the box; it's a programmable DC-DC converter module that you integrate. It offers 0-60V at 0-6A, with excellent resolution and a full-color display. The "P" version adds communication ports and a more robust output. You'll need to provide an AC-DC power brick (e.g., a 60V, 400W switching power supply) and an enclosure. This is for the tinkerer who enjoys a bit of DIY and needs high voltage/current flexibility without the cost of a fully integrated commercial unit. RD6006P Module

## Connecting Your Power Supply

Most bench power supplies use banana jacks for output. You'll want a good set of banana plug to alligator clip leads for general prototyping. For breadboard work, leads with pin tips are useful. Always ensure your connections are secure to avoid intermittent power issues.

When hooking up your circuit, always connect the ground (black lead) first, then the positive (red lead). When disconnecting, remove the positive first, then the ground. This minimizes the chance of accidental shorts.

For more on safely working with your power supply, check out our guide on [basic bench safety](INTERNAL:basic-bench-safety). And if you're diving into [understanding schematics](INTERNAL:understanding-schematics), knowing how power rails are represented will make your life much easier.

## Bottom Line

A quality bench power supply is not a luxury; it's a fundamental piece of equipment that will elevate your electronics tinkering. It provides precise control, crucial protection, and invaluable debugging capabilities that no collection of wall warts can match. Start with a reliable 0-30V, 0-5A single-output switching supply, and you'll be well-equipped for the vast majority of projects. As your skills and projects grow, consider a dual or triple output linear supply for its versatility and ultra-clean power. Invest wisely here, and you'll have a tool that serves you faithfully for years to come.
