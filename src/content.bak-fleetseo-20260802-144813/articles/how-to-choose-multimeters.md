---
title: How to choose multimeters
description: how to choose multimeters
pubDate: '2026-07-09'
author: eli-rowe
tags:
- best soldering iron for beginners
- hakko fx-888d vs pine64 pinecil
- cheapest decent oscilloscope
status: published
heroImage: ''
---

We all need to measure things. Whether you're checking a battery, debugging a circuit, or just trying to figure out why the Christmas lights aren't working, a multimeter is often the first tool you reach for. But walk into any electronics store (or browse online, more likely these days), and you're faced with a bewildering array of choices. How do you pick the right one for *your* bench?

As an Amazon Associate, I earn from qualifying purchases.

### What Do You Actually Need to Measure?

Before you even *think* about specific models, take a moment to consider what you'll actually be doing with your multimeter. This isn't a trick question; it's the fundamental starting point. For most tinkerers, the core functions are voltage (AC and DC), current (AC and DC), and resistance. Beyond that, things get specialized.

*   **Voltage (V):** This is probably the most common measurement. Are you checking AA batteries (1.5V DC)? Automotive systems (12V DC)? Household outlets (120V AC in North America, 230V AC elsewhere)? Most multimeters can handle these ranges, but some cheap ones might struggle with AC accuracy or high voltages.
*   **Current (A):** Measuring current means breaking the circuit and inserting the meter in series. This is often necessary for power consumption analysis or debugging shorts. Be aware that most multimeters have a limited current range (often 10A or 20A max, sometimes for a very short duration) and separate fused inputs for high current. If you're working with anything substantial, you'll want good fuses and maybe even a current clamp.
*   **Resistance (Ω):** Handy for checking components like resistors, continuity in wires, or diagnosing open circuits. Good accuracy here is a plus for component selection.
*   **Continuity:** A simple, audible beep that tells you if there's a connection. Invaluable for checking solder joints, tracing wires, and finding breaks. Even the cheapest meters have this, but a fast, loud beeper is a blessing.
*   **Diode Test:** Checks the forward voltage drop of a diode, useful for identifying types and confirming functionality.
*   **Capacitance (F):** Modern multimeters often include capacitance measurement. This is a huge convenience if you work with filters, power supplies, or any circuit with capacitors. For serious capacitor work, a dedicated LCR meter is better, but for general checks, the multimeter function is fine.
*   **Frequency (Hz) and Duty Cycle (%):** Useful for signal analysis, checking oscillators, or PWM signals. Not strictly essential for every hobbyist, but a nice bonus.
*   **Temperature (Temp):** Many meters come with a thermocouple probe (usually Type K) for measuring temperature. Great for checking component heat, heatsink performance, or even the temperature of your soldering iron tip.
*   **Non-Contact Voltage (NCV):** A safety feature that detects AC voltage without direct contact. Useful for quickly checking if a wire is live before touching it.

**Who is it for?**

*   **Beginner / Basic Hobbyist:** If you're just starting out, checking batteries, or doing simple continuity tests, a basic meter with V, A, Ω, and continuity is perfectly adequate. Don't overspend.
*   **Intermediate / General Tinkerer:** You're building circuits, troubleshooting projects, maybe dabbling in microcontrollers. You'll appreciate capacitance, frequency, and good accuracy.
*   **Advanced Hobbyist / "Prosumer":** You're working with sensitive circuits, debugging tricky problems, or need to verify precise values. Accuracy, resolution, and advanced features like True RMS become important.

### Understanding Key Specifications & Features

Once you know what you need to measure, it's time to dig into the specs. Don't get lost in the weeds, but understand these core concepts:

*   **Resolution:** How fine a measurement can the meter display? A "3 ½ digit" meter can display up to 1999 (e.g., 1.999V). A "4 ½ digit" meter goes up to 19999. More digits mean finer resolution within a given range. For example, on a 20V range, a 3 ½ digit meter might show 19.99V, while a 4 ½ digit meter shows 19.999V. For most hobby work, 3 ½ or 4 ½ digits are plenty.
*   **Accuracy:** How close is the displayed reading to the true value? This is usually expressed as a percentage of the reading plus a number of digits (e.g., ±(0.5% + 2 digits)). Lower percentages and fewer digits are better. For a beginner, ±(1% + 3 digits) is fine. For more critical work, aim for ±(0.1% + 2 digits) or better. You can check your meter's accuracy against [a calibrated reference](INTERNAL:calibrated-reference-guide).
*   **True RMS (Root Mean Square):** This is crucial for AC measurements. A simple "average responding" meter assumes a perfect sine wave. If you're measuring distorted AC signals (like those from motor controllers, switching power supplies, or many modern electronic loads), an average-responding meter will give you an inaccurate reading. A True RMS meter measures the actual heating power of the waveform, regardless of its shape, providing a much more accurate result. **If you plan to work with anything beyond simple mains voltage, get a True RMS meter.**
*   **Safety Rating (CAT Rating):** This is often overlooked but critical. CAT ratings (CAT I, CAT II, CAT III, CAT IV) indicate the meter's ability to withstand voltage transients (spikes) in different electrical environments.
    *   **CAT I:** Low voltage, protected electronics.
    *   **CAT II:** Appliance outlets, household wiring.
    *   **CAT III:** Distribution panels, heavy equipment, industrial settings.
    *   **CAT IV:** Primary service entrance, utility level.
    For hobbyists, a **CAT III 600V** or **CAT II 1000V** rating is generally sufficient and provides good protection for most bench work and household tasks. Don't use a CAT I meter to test your wall outlet.
*   **Input Impedance:** For voltage measurements, you want high input impedance (typically 10 MΩ). This means the meter draws very little current from the circuit, minimizing its impact on the measurement. Low input impedance can "load" a sensitive circuit and give you a false reading. Most modern meters are 10 MΩ.
*   **Auto-Ranging vs. Manual Ranging:** Auto-ranging meters automatically select the appropriate measurement range, making them easier to use. Manual ranging requires you to set the range yourself, which can be faster for repetitive measurements but requires more user input. Most good meters offer both.
*   **Backlight:** Essential for working in dimly lit areas. A bright, even backlight is a huge usability improvement.
*   **Hold Function:** Freezes the display reading, useful when probing in awkward spots where you can't see the screen.
*   **Min/Max/Average:** Records the minimum, maximum, and average values over time. Great for capturing intermittent events or monitoring fluctuating signals.
*   **Low-Z (LoZ) Mode:** This is a specialized feature, often found on higher-end meters, that presents a low input impedance (e.g., 300 kΩ) for AC voltage measurements. It's designed to eliminate "ghost voltages" – small, induced voltages that can appear on unused or open wires due to capacitive coupling, which a high-impedance meter would accurately display but are not actually capable of delivering power. If you're an electrician or frequently troubleshoot wiring, this is very useful.

### My Recommendations: From Starter to Serious

Here are a few specific multimeters I've used and can recommend, catering to different needs and budgets.

#### For the Beginner / Occasional User: The ANENG AN8008

For under $30, the [ANENG AN8008](https://www.amazon.com/dp/B07KK346PH/?tag=tinkerbench-20) is an absolute steal. I keep one in my grab-and-go toolkit. It's a 9999-count (4 ½ digit) True RMS auto-ranging meter with a decent backlight. It handles V, A, Ω, continuity, diode test, capacitance, frequency, and even temperature. The build quality is surprisingly good for the price, and the accuracy for general hobby use is more than sufficient.

**Who it's for:** Someone just starting out, needs a basic but capable meter, or wants a cheap backup.
**Who it's not for:** Anyone needing robust industrial safety ratings (it's CAT II rated, but I wouldn't trust it in a harsh environment), extreme precision, or advanced features like LoZ.
**Consider instead:** If you *really* just need continuity and basic voltage, a super cheap generic meter from your local hardware store will do, but you'll miss out on True RMS and capacitance.

#### For the Intermediate Hobbyist / Serious Tinkerer: The Uni-T UT61E+

Stepping up significantly in capabilities and price, the [Uni-T UT61E+](https://www.amazon.com/dp/B09V411W5M/?tag=tinkerbench-20) is a phenomenal value for the features it offers. This is my daily driver for most bench work. It's a 22,000-count (4 ½ digit) True RMS meter with excellent accuracy (often better than advertised). It includes all the standard functions plus capacitance up to 220mF, frequency, duty cycle, data hold, and Min/Max. Critically, it has a proper USB interface for logging data to a computer, which is incredibly useful for troubleshooting intermittent issues or monitoring long-term trends. The build quality is solid, and it feels substantial in hand.

**Who it's for:** Anyone building complex circuits, debugging microcontroller projects, or needing data logging capabilities. It's a fantastic all-around bench meter.
**Who it's not for:** The absolute beginner who might be overwhelmed by the features, or someone who needs extreme ruggedness for field use (though it's pretty durable).
**Consider instead:** If you don't need data logging, a Fluke 101 or 106 is a robust, simpler alternative, though often pricier for fewer features.

#### For the Advanced User / "Buy Once, Cry Once": The Fluke 87V

If you're serious about electronics, especially if you venture into industrial or high-power applications, the [Fluke 87V](https://www.amazon.com/dp/B0002YRDG4/?tag=tinkerbench-20) is the gold standard that many professional technicians swear by. Yes, it's expensive. But you're buying legendary reliability, incredible accuracy (often 0.05% for DCV), robust build quality, and top-tier safety ratings (CAT III 1000V, CAT IV 600V). It's True RMS, has a fantastic backlight, Min/Max/Average, relative mode, and a unique "LoZ" (low impedance) mode for ghost voltage detection. It feels like a tank and will likely outlast you. I've seen these survive drops, spills, and years of abuse in harsh environments.

**Who it's for:** Professionals, advanced hobbyists working with critical systems, anyone who demands the best accuracy, reliability, and safety, or those who truly believe in buying a tool once.
**Who it's not for:** The casual hobbyist or beginner. The features and precision will be overkill, and the price tag is hard to justify for simple tasks.
**Consider instead:** For a slightly more budget-friendly but still professional-grade meter, look at some of the higher-end Keysight or Brymen models. For basic work, any of the above options are better value.

### Probes and Accessories

Don't forget the probes! The included probes with cheaper multimeters are often barely adequate. Good probes make a huge difference in usability and safety. Look for:

*   **Flexible Silicone Leads:** Much more pliable and less prone to kinking than PVC leads, especially in cold weather.
*   **Sharp, Gold-Plated Tips:** For better contact and corrosion resistance.
*   **Safety Shrouds:** Protecting your fingers from accidental contact with live circuits.
*   **Alligator Clips:** Invaluable for hands-free measurements. Many sets come with screw-on or clip-on attachments.
*   **Test Lead Kit:** Consider a separate [test lead kit](B09G3F4Z4N) with various tips like fine-point, spade, and hook clips. This expands your meter's versatility immensely.

### Bottom Line

Choosing a multimeter isn't about getting the most expensive one; it's about matching the tool to your needs. For most weekend tinkerers and general hobbyists, a good True RMS meter with capacitance and frequency, like the Uni-T UT61E+, hits the sweet spot between features, accuracy, and price. If you're just starting, the ANENG AN8008 offers incredible value. And if you're ready to invest in a lifetime tool, the Fluke 87V is an undisputed champion. Always prioritize safety (CAT ratings and good leads) and ensure the meter can handle the types of signals you'll be working with. Happy measuring! You can learn more about [advanced troubleshooting techniques](INTERNAL:advanced-troubleshooting) and [how to maintain your test equipment](INTERNAL:test-equipment
