---
title: '12. Four-wire vs two-wire resistance: what your multimeter is not telling
  you'
site: tinkerbench
topic: '12. Four-wire vs two-wire resistance: what your multimeter is not telling
  you'
tier: mvp
updatedAt: '2026-05-12T11:03:38Z'
relatedProducts: []
status: published
heroImage: /heroes/12-four-wire-vs-two-wire-resistance-what-your-multimeter-is-not-telling-you.webp
subtopic: test-gear
---

## Four-wire vs Two-wire Resistance: What Your Multimeter Is Not Telling You

If you’ve ever measured a low-value resistor, a length of wire, or a PCB trace and got a reading higher than expected, you’re not alone. The reason often comes down to how your multimeter measures resistance—specifically, whether it uses a two-wire or four-wire method. Many hobbyists and bench techs rely on basic two-wire measurements without realizing the errors introduced by lead and contact resistance. This article explains the difference between two-wire and four-wire resistance measurement methods, why it matters for precision work, and when each method is appropriate.

---



> **See also:** [14. Capacitor testing: why most multimeter cap modes lie](https://tinkerbench.co/articles/14-capacitor-testing-why-most-multimeter-cap-modes-lie/)

## What Is Two-Wire Resistance Measurement?

Two-wire resistance measurement is the most common and straightforward method used by most handheld and bench multimeters. In this method, the meter applies a small current through the resistor or component via two test leads and measures the voltage drop across the same leads to calculate resistance using Ohm’s law.

### How It Works

- The same two leads carry both the current and the voltage measurement.
- The meter assumes the only resistance in the path is the resistor under test.
- Lead resistance and contact resistance from test probes are included in the measurement.
- For high-value resistors (kiloohms and above), lead resistance is negligible.
- For low-value resistors (milliohms), lead and contact resistance can cause significant errors.

---

## What Is Four-Wire (Kelvin) Resistance Measurement?

Four-wire resistance measurement, also called Kelvin sensing, is a method designed to eliminate errors caused by lead and contact resistance. It’s widely used in precision labs and industry for measuring low-value resistors, shunts, and PCB traces.

### How It Works

- Two pairs of leads are used: 
  - One pair sourcing current (force leads).
  - One pair sensing voltage (sense leads).
- The current flows only through the force leads and the resistor.
- Sense leads measure the voltage drop directly across the resistor, not affected by voltage drops in the force leads.
- Because sense leads carry negligible current, their voltage drop in the leads and contacts is minimal.
- The meter calculates resistance using the sensed voltage and the known current through the force leads.

---

## Why Does This Matter?

Resistance measurements at very low levels (under a few ohms) are often compromised by lead and contact resistances, which are additive in two-wire measurement. This can cause:

- Overstated resistance values.
- Difficulty distinguishing component tolerances.
- Errors during troubleshooting or quality assurance on low-resistors and PCB traces.

Four-wire measurement effectively excludes lead and contact resistance, providing more accurate readings down to micro-ohm levels in professional setups.

---

## When to Use Two-Wire vs Four-Wire

| Scenario                               | Recommended Method | Reason                                                             |
|--------------------------------------|--------------------|--------------------------------------------------------------------|
| Measuring resistors > 100 ohms         | Two-wire           | Lead and contact resistance negligible compared to resistor value |
| General-purpose resistance measurements | Two-wire           | Simpler, faster, and good enough for most hobbyist projects       |
| Measuring low-value resistors (< 1 ohm) | Four-wire          | Ensures lead resistance excluded, improving accuracy               |
| Measuring PCB traces or busbars         | Four-wire          | Avoids errors from fixture and lead resistances                    |
| Troubleshooting where precise values matter | Four-wire          | Pinpoints subtle resistance changes                                |
| Quick approximate resistance checks    | Two-wire           | Sufficient where high precision isn't needed                       |

---

## Practical Tips for Using Each Method

### Two-Wire Measurement Tips

1. **Shorten your leads**: Longer leads add resistance. Use the shortest leads possible.
2. **Use clean contact points**: Dirt or oxidation can add hundreds of milliohms.
3. **Measure probe resistance**: Touch leads together and note the resistance. Subtract this from your reading for a quick offset adjustment.
4. **Avoid squeezing leads**: Mechanical strain on test leads can change contact resistance.
5. **Select the correct range**: Lower range settings on your meter often enable more precise current and voltage measurements.

### Four-Wire Measurement Tips

1. **Use dedicated Kelvin clips or fixtures**: These help maintain proper four-wire contact with the resistor or test point.
2. **Check lead integrity**: Leads designed for four-wire measurements will have two conductors per lead; verify no breaks.
3. **Calibrate with a known standard**: Precision shunts or reference resistors validate your setup.
4. **Keep sense leads free of current**: Verify that the sense leads carry negligible current to avoid voltage drop.
5. **Verify meter support**: Not all multimeters have four-wire sensing capability; some require specific Kelvin resistance meters.

---

## How Much Lead Resistance Can Influence Your Measurement?

Leads and probe tips typically add between 0.1 and 0.5 ohms each way, depending on length, diameter, and cleanliness. Consider measuring a 0.1-ohm resistor with your test leads adding 0.5 ohms in series. Your two-wire reading will be roughly 0.6 ohms—six times the actual resistor value!

| Aspect                          | Two-wire Measurement       | Four-wire Measurement   |
|--------------------------------|----------------------------|------------------------|
| Lead resistance effect          | Added to measurement       | Negligible             |
| Accuracy at low ohms            | Poor                       | High                   |
| Requires specialized leads/instrument | No                     | Yes                    |
| Setup complexity               | Low                        | Moderate               |
| Best application               | General hobbyist use       | Precision low ohm measurement |
| Cost                          | Meter + standard leads      | Meter + Kelvin leads/fixtures |

---

## Summary

Two-wire resistance measurements are suitable and convenient for most beginner and intermediate electronics work involving moderate and high-value resistors. However, when dealing with low resistance components, PCB traces, or where precision is critical, the inherent lead and contact resistances in two-wire setups distort your readings. Four-wire (Kelvin) resistance measurement removes these errors by separating current sourcing and voltage sensing leads.

Understanding when and why to use four-wire measurement allows hobbyists, kit builders, and bench techs to increase accuracy without guesswork, save test time, and prevent troubleshooting errors caused by false resistance readings.

---

## Frequently Asked Questions

**Q: Can I retrofit my standard multimeter for four-wire resistance measurement?**  
**A:** Generally no. Four-wire sensing requires the meter to support separate current and voltage inputs and process them correctly. Some bench meters offer dedicated four-wire resistance modes, but handheld meters usually do not.

**Q: How can I check if my lead resistance is affecting measurements?**  
**A:** Touch the test leads together and measure the resistance. Ideally, it should be close to zero but usually shows some milliohms or ohms due to lead resistance. This shows how much error two-wire measurements may have at low resistance values.

**Q: Are all four-wire measurement leads the same?**  
**A:** No. Four-wire measurement requires special test leads with separate force and sense wires. Proper Kelvin clips or probes ensure consistent contact and minimal additional resistance in the sense leads.

---

By using the correct measurement technique for your resistance range and precision needs, you’ll avoid frustrating inaccuracies and get closer to the true behavior of your circuits and components. Keep this guide in mind next time your multimeter reading doesn’t make sense!
