---
title: 20. When you need 100 MHz bandwidth vs 20 MHz on a scope
site: tinkerbench
topic: 20. When you need 100 MHz bandwidth vs 20 MHz on a scope
tier: mvp
updatedAt: '2026-05-12T11:09:08Z'
relatedProducts: []
status: published
heroImage: /heroes/20-when-you-need-100-mhz-bandwidth-vs-20-mhz-on-a-scope.webp
subtopic: soldering
---

When you pick up a new oscilloscope or upgrade your bench gear, one of the key specs you'll encounter is bandwidth—often 20 MHz or 100 MHz and beyond. But what does that really mean for your practical electronics work? If you're scratching your head on when you actually need 100 MHz bandwidth instead of settling for 20 MHz, this article will clear up the confusion. We'll break down the types of signals each bandwidth can accurately capture, how it impacts your measurements, and when it's worth investing in a higher-bandwidth scope.

## What Is Oscilloscope Bandwidth?

Bandwidth essentially defines the highest signal frequency your oscilloscope can measure accurately. It is typically referenced as the frequency at which the scope’s input signal amplitude is attenuated by 3 dB (about 70.7% of the true amplitude). This means a 20 MHz scope can reliably display signals up to roughly 20 MHz without significant distortion, while a 100 MHz scope can handle signals up to 100 MHz.

A scope’s bandwidth affects several aspects of your signal visibility:

- **Rise time accuracy:** Higher bandwidth scopes show faster transitions more faithfully.
- **Signal fidelity:** Lower bandwidth scopes may distort or miss high-frequency components.
- **Measurement reliability:** Critical when dealing with fast switching electronics or RF signals.

## How Bandwidth Affects Signal Quality

Electronic signals, especially digital waveforms, aren’t just about their fundamental frequency. Their shape depends on the harmonics—the higher frequency components. Narrow bandwidth scopes effectively act as low-pass filters, trimming off these harmonics and rounding signal edges.

For example, a 1 MHz square wave includes significant frequency components well beyond 1 MHz. Viewing it on a 20 MHz scope captures some of those components but may underrepresent the highest harmonics, making edges appear less sharp. A 100 MHz scope can reveal those fast edges more precisely.

This means:

- **Higher bandwidth scopes resolve sharp edges and fast pulses, important for digital and RF troubleshooting.**
- **Lower bandwidth scopes are often enough for audio signals, low-speed analog circuits, and general-purpose tests.**

## When You Actually Need 20 MHz Bandwidth

A 20 MHz scope is often the sweet spot for hobbyists, repair techs, and makers working on:

- **Audio Electronics:** Most analog audio signals don’t exceed 20 kHz, often staying well below 1 MHz even with auxiliary signals.
- **Low-Speed Digital Logic:** Classic microcontrollers running with clock speeds of a few MHz, like 8-bit Atmel or PIC chips, produce edges fully viewable on 20 MHz scopes.
- **Power Supply Testing:** Slow switching power supplies (under 100 kHz PWM) or linear regulators don’t require high bandwidth.
- **Basic Analog Circuits:** Amplifiers, filters, and sensor signals with bandwidths well within 20 MHz.

The advantage here is lower cost, simpler operation, and often longer soldering tip life due to the scope’s lower-frequency probes and simpler compensation.

## When 100 MHz Bandwidth Is a Practical Necessity

A jump to 100 MHz bandwidth should be considered when your signals demand fidelity in fast edges, high-frequency components, or RF detail:

- **High-Speed Digital:** Interfaces like SPI, I2C at higher frequencies, RMII Ethernet PHYs, or microcontrollers clocked at 50 MHz plus.
- **Switching Power Supplies:** Modern SMPS with MOSFET switching frequencies above 100 kHz and fast edge transitions.
- **RF Circuits:** VHF/UHF analog or mixed-signal systems generate signals in tens to hundreds of MHz.
- **Fast Edge Pulses:** Debugging pulse-width modulators or digital signals with sub-10 ns rise times require bandwidths of 100 MHz or more.
- **Serial Communication Debugging:** Protocols like USB Full speed, CAN bus, or higher frequency UARTs benefit from enhanced bandwidth for accurate waveform capture.

Even if your fundamental frequency is low, the signal's harmonics and switching speed dictate bandwidth. Consider the rule of thumb for rise time:  
**Bandwidth (Hz) = 0.35 / Rise Time (seconds)**  
To measure a 5 ns rise time, you want about 70 MHz bandwidth, so 100 MHz gives some margin. This mathematical relationship helps translate your expected signal speeds into bandwidth requirements.

## Trade-Offs Between 20 MHz and 100 MHz Scopes

The difference between 20 MHz and 100 MHz scopes is not just price or speed—it’s a balance of practical utility versus cost, noise, probe compatibility, and learning curve.

| Feature / Scenario            | 20 MHz Scope                         | 100 MHz Scope                          |
|------------------------------|------------------------------------|--------------------------------------|
| **Typical Price**             | Lower                              | Higher                               |
| **Scope Input Bandwidth**     | Up to 20 MHz                       | Up to 100 MHz                        |
| **Adequate For**             | Audio circuits, slow digital lines | Fast digital, RF signals, SMPS debug |
| **Measurement Accuracy**      | Good for low-frequency signals     | High-fidelity fast edge capture      |
| **Rise Time Capture**         | > 17.5 ns                         | ~3.5 ns or better                    |
| **Probe Cost and Complexity** | Inexpensive passive probes         | More advanced probes recommended     |
| **Learning Curve**            | Beginner-friendly                   | More complex measurements            |
| **Soldering Tip Life (Indirect)** | Lower-frequency operation can extend tip life | Higher bandwidth concerns may correlate with higher usage, affecting tip life indirectly |
| **Best For**                 | Hobbyists, beginners, repair techs | Advanced hobbyist and pros            |

## Common Pitfalls in Bandwidth Selection

- **Buying More Bandwidth Than Needed:** High bandwidth scopes cost more and require careful probe usage; for audio or basic logic work, 100 MHz may be overkill and less cost-effective.
- **Ignoring Rise Time Requirements:** Don't pick bandwidth solely based on fundamental frequency. Look at signal rise/fall times to judge necessary scope bandwidth.
- **Underestimating Probe Quality:** Even a 100 MHz scope will underperform if paired with cheap or incompatible probes.
- **Assuming Bandwidth Means Better Signal:** Higher bandwidth scopes are more sensitive to noise. Without proper grounding and shielding, measurements can become noisier, requiring more skill.

## How to Choose the Right Bandwidth Scope for Your Bench

1. **Define Your Signals' Frequency Profile:** Identify the highest fundamental frequency and rise time you expect.
2. **Calculate Required Bandwidth:** Use the bandwidth-rise time formula to get theoretical minimum bandwidth.
3. **Consider Protocols and Usage Scenarios:** Are you measuring audio, microcontrollers, RF communication, or power electronics?
4. **Factor in Budget and Upgrade Path:** Buying a modest 20 MHz scope now and adding a 100 MHz one later can be practical.
5. **Check Probe and Accessory Availability:** Bandwidth increases often require better probes that may add cost.
6. **Balance Portability and Features:** Higher bandwidth scopes may be bench-bound or pricier, while 20 MHz scopes are often compact and user-friendly.

## Wrapping It Up

Choosing between 20 MHz and 100 MHz scope bandwidth comes down to the signals you actually work with and your future needs as a hobbyist or technician. Low-frequency audio, slow microcontroller signals, and general analog circuits are generally fine at 20 MHz, while high-speed digital, SMPS testing, and RF debug call for 100 MHz or more. Understanding the underlying signal characteristics, rise times, and practical trade-offs can save you money and headaches while ensuring your measurements are accurate and reliable.

## Frequently Asked Questions

**Q: Can I use a 20 MHz oscilloscope for debugging a 16 MHz microcontroller?**  
**A:** Yes, if your primary interest is monitoring clock frequency and logic states. However, very fast edges or sub-nanosecond transients won't be accurately displayed.

**Q: Will a 100 MHz scope improve soldering iron tip life?**  
**A:** Oscilloscope bandwidth doesn't directly affect soldering iron tip life, but more detailed measurements may lead to more frequent use and cleaning cycles, indirectly impacting tip wear.

**Q: Are probes interchangeable between 20 MHz and 100 MHz scopes?**  
**A:** Basic passive probes for 20 MHz scopes might work on 100 MHz scopes but may not preserve signal integrity. For 100 MHz scopes, higher-quality or compensated probes are recommended for accurate reading.
