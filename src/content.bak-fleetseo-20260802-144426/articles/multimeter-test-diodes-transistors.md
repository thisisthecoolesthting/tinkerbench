---
title: "multimeter-test-diodes-transistors"
site: tinkerbench
topic: "household-staples"
tier: mvp
cardTitle: "multimeter-test-diodes-transistors"
cardPick: "Editorial household-staples pick from TinkerBench."
updatedAt: '2026-06-06T03:05:47.198Z'
relatedProducts: []
status: published
subtopic: household-staples
publishedAt: '2026-06-06T03:05:47.198Z'
metaDescription: "multimeter-test-diodes-transistors"
excerpt: "multimeter-test-diodes-transistors"
heroImage: /images/heroes/multimeter-test-diodes-transistors.webp
tags:
  - tinkerbench
  - home gym
author: marcus-webb
---


*TinkerBench is reader-supported. When you buy through links on our site, we may earn an affiliate commission.*
---
## How to Use a Multimeter to Test Diodes and Transistors

A multimeter is an indispensable tool for any electronics enthusiast. Beyond basic voltage and resistance measurements, it can also be used to diagnose the health of diodes and transistors, two fundamental components in countless circuits. This guide will walk you through the process of testing these components using the diode test and other relevant functions on your multimeter. We'll cover forward voltage, reverse leakage, and even a rudimentary transistor gain measurement.

### Why Test Diodes and Transistors?

Before you dive into any project, it's wise to check whether components are functioning correctly. Diodes and transistors can fail due to overvoltage, overheating, or manufacturing defects. Identifying a faulty component before it's soldered into a circuit can save you a lot of time and frustration. Plus, these tests can help you understand the characteristics of these devices better.

## Testing Diodes with a Multimeter

The diode test function on a multimeter is specifically designed to assess the functionality of diodes. Here's how to use it:

### Setting Up Your Multimeter for Diode Testing

1.  **Select Diode Test Mode:** Turn on your multimeter and set it to the diode test mode. This is usually indicated by a diode symbol (a triangle pointing to a vertical line).

2.  **Connect the Test Leads:** Plug the red test lead into the "VΩmA" jack and the black test lead into the "COM" jack. These are the standard connections for most measurements.

### Performing the Diode Test

1.  **Identify the Anode and Cathode:** A diode has two terminals: the anode (positive) and the cathode (negative). The cathode is usually marked with a band on the diode body.

2.  **Forward Bias Test:** Place the red test lead (positive) on the anode and the black test lead (negative) on the cathode. This forward-biases the diode, allowing current to flow.

3.  **Observe the Reading:** The multimeter should display the forward voltage drop of the diode. For silicon diodes, this is typically between 0.5V and 0.7V. A reading of "OL" (overload) or a very high voltage suggests an open circuit (bad diode). A reading close to 0V indicates a short circuit (also a bad diode).

4.  **Reverse Bias Test:** Now, reverse the leads. Place the red test lead on the cathode and the black test lead on the anode. This reverse-biases the diode, blocking current flow.

5.  **Observe the Reading:** The multimeter should display "OL" or a very high voltage, indicating that no current is flowing. A low voltage reading in this direction means the diode is leaking current in reverse, which is a sign of failure.

### Interpreting Diode Test Results

*   **Good Diode:** Exhibits a forward voltage drop between 0.5V and 0.7V when forward-biased and "OL" when reverse-biased.
*   **Shorted Diode:** Shows a voltage close to 0V in both forward and reverse bias.
*   **Open Diode:** Displays "OL" in both forward and reverse bias.
*   **Leaky Diode:** Displays a low voltage (significantly less than 0.5V) when reverse-biased.

## Testing Transistors with a Multimeter

Testing transistors with a multimeter is a bit more complex than testing diodes, but it's still a valuable skill. We’ll focus on bipolar junction transistors (BJTs) here. There are several ways to test transistor functionality, ranging from quick checks to more detailed measurements.

### Identifying Transistor Terminals

Before testing, you need to identify the transistor's terminals: base (B), collector (C), and emitter (E). Consult the transistor's datasheet for the pinout. This is crucial, as incorrect connections can damage the transistor or your multimeter.

### Testing BJT as a Diode Pair

A BJT can be thought of as two diodes connected back-to-back. This allows us to use the diode test function to check the junctions within the transistor.

1.  **NPN Transistors:** In an NPN transistor, the base is the anode of one diode (connected to the emitter) and the anode of another diode (connected to the collector).

2.  **PNP Transistors:** In a PNP transistor, the base is the cathode of one diode (connected to the emitter) and the cathode of another diode (connected to the collector).

### Performing the Diode Test on a Transistor

1.  **NPN Transistor Test:**
    *   Place the red lead on the base (B) and the black lead on the emitter (E). You should see a forward voltage drop (0.5V to 0.7V).
    *   Place the red lead on the base (B) and the black lead on the collector (C). You should see a forward voltage drop (0.5V to 0.7V).
    *   Reverse the leads on the base and emitter. You should see "OL".
    *   Reverse the leads on the base and collector. You should see "OL".
    *   Place the red lead on the collector (C) and the black lead on the emitter (E). You should see "OL" in both polarities.

2.  **PNP Transistor Test:**
    *   Place the black lead on the base (B) and the red lead on the emitter (E). You should see a forward voltage drop (0.5V to 0.7V).
    *   Place the black lead on the base (B) and the red lead on the collector (C). You should see a forward voltage drop (0.5V to 0.7V).
    *   Reverse the leads on the base and emitter. You should see "OL".
    *   Reverse the leads on the base and collector. You should see "OL".
    *   Place the red lead on the collector (C) and the black lead on the emitter (E). You should see "OL" in both polarities.

### Interpreting Transistor Diode Test Results

*   **Good Transistor:** Shows expected diode behavior for both junctions.
*   **Shorted Transistor:** Shows a low resistance (near 0 ohms) between any two terminals in both polarities.
*   **Open Transistor:** Shows "OL" or very high resistance between any two terminals in both polarities.

### Estimating Transistor Gain (hFE)

Some multimeters have an hFE (DC current gain) measurement function. This provides an approximate value for the transistor's gain, which is the ratio of collector current to base current.

1.  **Locate the hFE Socket:** Most multimeters with this feature have a dedicated socket labeled "hFE" or "Transistor".

2.  **Insert the Transistor:** Carefully insert the transistor into the correct holes corresponding to its base, collector, and emitter. Make sure you know whether you are testing an NPN or PNP transistor and orient it accordingly.

3.  **Read the hFE Value:** The multimeter will display the approximate hFE value. This value is highly dependent on the specific transistor and the test conditions, so it's best used as a relative indicator of transistor health rather than an absolute measurement. A significantly lower-than-expected hFE value can indicate a degraded transistor.

Note that this hFE test is very rudimentary. It only tests the transistor at one specific collector current, which might not be representative of its performance in your circuit.

## Caveats and Limitations

While a multimeter is useful for basic diode and transistor testing, it has limitations:

*   **In-Circuit Testing:** Testing components while they are still soldered into a circuit can give misleading results due to the influence of other components. It's best to remove the diode or transistor from the circuit before testing.
*   **Dynamic Characteristics:** A multimeter only provides static measurements. It cannot assess the dynamic performance of a diode or transistor under varying signal conditions. For more thorough testing, you'd need specialized equipment like curve tracers or oscilloscopes. [Link to: /16. The cheapest decent oscilloscope in 2026 after testing 5 units]
*   **Gain Accuracy:** The hFE measurement on a multimeter is only an approximation. It's not a substitute for a dedicated transistor tester or a circuit simulation.
*   **MOSFETs and Other Transistors:** This article focused on BJTs. MOSFETs require different testing methods due to their unique characteristics.

## Conclusion

Using a multimeter to test diodes and transistors is a valuable skill for any electronics hobbyist. While it has limitations, it's a quick and easy way to identify faulty components and gain a basic understanding of their behavior. By following the steps outlined in this guide, you can troubleshoot circuits more effectively and ensure the reliability of your projects. Remember to always consult datasheets for specific component information and to exercise caution when working with electronic components. Consider a decent multimeter like the Fluke 117 or Amprobe AM-570 [Link to: /10. Fluke 117 vs Amprobe AM-570: when the 5x price is worth it] if you find yourself doing this regularly.
