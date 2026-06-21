---
title: "choosing-wire-gauge-electronics"
site: tinkerbench
topic: "household-staples"
tier: mvp
cardTitle: "choosing-wire-gauge-electronics"
cardPick: "Editorial household-staples pick from TinkerBench."
updatedAt: '2026-06-06T03:05:47.171Z'
relatedProducts: []
status: published
subtopic: household-staples
publishedAt: '2026-06-06T03:05:47.171Z'
metaDescription: "choosing-wire-gauge-electronics"
excerpt: "choosing-wire-gauge-electronics"
heroImage: /images/heroes/choosing-wire-gauge-electronics.webp
tags:
  - tinkerbench
  - home gym
author: marcus-webb
---


*TinkerBench is reader-supported. When you buy through links on our site, we may earn an affiliate commission.*

# Choosing the Right Wire Gauge for Electronic Projects: A Guide

Selecting the correct wire gauge is crucial for any electronics project. Too thin, and the wire can overheat and potentially cause a fire. Too thick, and you're wasting money and adding unnecessary bulk. This guide will walk you through the key factors to consider when choosing the right wire gauge for your specific needs, ensuring safety and optimal performance.
---
## Understanding Wire Gauge and Current Carrying Capacity

Wire gauge, typically expressed in American Wire Gauge (AWG), is a standardized system for denoting wire diameter. A smaller AWG number indicates a thicker wire, and thus a higher current carrying capacity.

### Ampacity and Safe Current Limits

The most important factor in selecting wire gauge is its ampacity, or current carrying capacity. This refers to the maximum amount of current a wire can safely handle without overheating. The National Electrical Code (NEC) provides ampacity charts for different wire types and insulation ratings.

However, for hobby electronics, we need to be more conservative. NEC standards are designed for home wiring, where short bursts of overload are acceptable. In our projects, we want consistent performance and longevity.

Here's a simplified table for common AWG sizes used in hobby electronics, derated for safety:

| AWG | Diameter (inches) | Approximate Current Capacity (Amps) - Chassis Wiring | Approximate Current Capacity (Amps) - Power Transmission |
|---|---|---|---|
| 22  | 0.0253           | 0.5                                             | 0.25                                               |
| 24  | 0.0201           | 0.35                                            | 0.175                                              |
| 26  | 0.0159           | 0.225                                            | 0.1125                                             |
| 28  | 0.0126           | 0.15                                             | 0.075                                              |
| 30  | 0.0100           | 0.1                                              | 0.05                                               |

**Important Notes:**

*   **Chassis Wiring vs. Power Transmission:** Chassis wiring refers to wires running inside an enclosure where heat can dissipate more easily. Power transmission involves longer runs, where heat buildup is more of a concern.
*   **Insulation Temperature Rating:** The temperature rating of the wire's insulation also affects ampacity. Higher temperature ratings allow for higher current capacity, but always stay within the specified limit.
*   **Bundled Wires:** If multiple wires are bundled together, they will generate more heat. Reduce the current capacity by 20% or more, depending on the number of wires in the bundle.
*   **Solid vs. Stranded Wire:** Solid core wire is generally rated for higher current, but stranded is easier to work with on a hobby bench. Use stranded unless you have a very specific reason not to.

**Example:** If you're building a circuit that draws 200mA (0.2 Amps), 26 AWG wire is *probably* okay for short runs within a project box, but 24 AWG would be a safer choice. If you're running that current across your bench, use 24 AWG minimum.

### Calculating Current Requirements

Before selecting a wire gauge, you need to determine the maximum current your circuit will draw. This is usually the sum of the current draw of all components connected to that wire.

1.  **Identify all Components:** List all components connected to the wire in question.
2.  **Find Current Draw:** Check the datasheets for each component to find its maximum current draw.
3.  **Add Them Up:** Sum the current draw of all components.
4.  **Add a Safety Margin:** Increase the total current by at least 20% to account for unforeseen spikes or changes in component behavior.

**Example:** You're powering an Arduino Uno \[/products/b008grtsv6-arduino-uno-rev3-a000066-atmega328p-microcontroller-16mhz-14/] along with an LED that draws 20mA and a small sensor that draws 5mA. The Arduino itself might draw up to 500mA at full load (when driving the pins).

Total Current = 500mA (Arduino) + 20mA (LED) + 5mA (Sensor) = 525mA

With a 20% safety margin: 525mA * 1.2 = 630mA

Therefore, you should use wire that can safely handle at least 630mA. In this case, 22 AWG would be a good choice.

## Accounting for Voltage Drop

Voltage drop is the decrease in voltage that occurs along a wire due to its resistance. Excessive voltage drop can cause components to malfunction or operate inefficiently.

### Calculating Voltage Drop

Voltage drop can be calculated using Ohm's Law:

*   **V = I * R**

Where:

*   V = Voltage Drop (in volts)
*   I = Current (in amps)
*   R = Resistance (in ohms)

To calculate the resistance of a wire, you need to know its length and gauge. Wire resistance charts are readily available online.

**Example:** You need to run 1 Amp to a component 10 feet away (20 feet of wire total, since it needs a return path) using 22 AWG wire, which has a resistance of approximately 16.14 ohms per 1000 feet.

Total Resistance = (20 feet / 1000 feet) * 16.14 ohms = 0.323 ohms

Voltage Drop = 1 Amp * 0.323 ohms = 0.323 Volts

If you're starting with a 5V supply, the component will receive 4.677V. Whether that's acceptable depends on the component's tolerance. For a microcontroller, it's probably fine. For an analog sensor expecting a clean 5V, it might cause issues.

### Minimizing Voltage Drop

*   **Use a Thicker Wire:** Increasing the wire gauge (decreasing the AWG number) reduces resistance and voltage drop.
*   **Shorten Wire Length:** Shorter wire runs have lower resistance.
*   **Increase Supply Voltage:** A higher supply voltage can compensate for voltage drop, but ensure components can handle the increased voltage by using a voltage regulator.
*   **Use a Separate Power Supply:** For critical components, consider using a separate power supply placed close to the component to minimize voltage drop.

## Physical Considerations and Practical Advice

Beyond current capacity and voltage drop, physical factors also play a role in wire selection.

### Wire Flexibility and Routing

*   **Stranded Wire:** Stranded wire is more flexible than solid wire and is easier to work with in projects where wires need to be bent or moved.
*   **Wire Insulation:** Choose wire with insulation appropriate for the environment. PVC insulation is common for general-purpose use. Higher temperature insulation is needed for hot environments.
*   **Wire Size and Space Constraints:** Consider the available space in your project enclosure. Thicker wires take up more space and may be difficult to route.

### Common Wiring Mistakes to Avoid

*   **Undersized Wires:** This is the most dangerous mistake. Always err on the side of caution and choose a wire gauge that can handle the maximum expected current with a safety margin.
*   **Poor Connections:** Loose or poorly soldered connections can create resistance and heat. Ensure all connections are secure and properly soldered. A [Hakko FX-888D](/) is a good starting point.
*   **Ignoring Voltage Drop:** Failing to account for voltage drop can lead to component malfunction, especially in projects with long wire runs.
*   **Mixing Wire Types:** Avoid mixing wire types (e.g., solid and stranded) in the same circuit, as this can create uneven resistance and potential connection issues.

### Recommendations for Common Projects

*   **Arduino Projects:** 22-26 AWG is generally suitable for connecting sensors, LEDs, and other low-power components. Use 20-22 AWG for power connections.
*   **LED Lighting:** For low-power LEDs (e.g., indicator LEDs), 26-28 AWG is sufficient. For high-power LEDs, use 20-22 AWG.
*   **Robotics:** 18-22 AWG is typically used for motor connections, depending on the motor's current draw.
*   **Power Supplies:** Use 16-18 AWG for power connections to power supplies.

By carefully considering current carrying capacity, voltage drop, and physical constraints, you can choose the right wire gauge for your electronics projects, ensuring safety, reliability, and optimal performance. Don't skimp on this crucial detail – your projects (and your bench) will thank you for it.
