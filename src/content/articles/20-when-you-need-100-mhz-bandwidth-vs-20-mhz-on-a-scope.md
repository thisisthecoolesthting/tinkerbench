---
title: 20. When you need 100 MHz bandwidth vs 20 MHz on a scope
site: tinkerbench
topic: 20. When you need 100 MHz bandwidth vs 20 MHz on a scope
tier: mvp
relatedProducts: []
status: published
metaDescription: "Understanding Bandwidth in Oscilloscopes: 20 MHz vs 100 MHz"
publishedAt: 2026-04-22
excerpt: "Understanding Bandwidth in Oscilloscopes: 20 MHz vs 100 MHz"
---

## Understanding Bandwidth in Oscilloscopes: 20 MHz vs 100 MHz

When selecting an oscilloscope, one of the most important specifications to consider is the bandwidth. This figure—measured in megahertz (MHz)—indicates the range of frequencies the scope can accurately measure. Common bandwidth settings include 20 MHz and 100 MHz, and deciding which one you need depends heavily on the nature of your signals and your measurement goals.

In this article, we'll explore why bandwidth matters, the differences between 20 MHz and 100 MHz scopes, and practical scenarios where each choice makes sense.

---

## What Does Bandwidth Mean on a Scope?

Bandwidth refers to the highest frequency signal that the oscilloscope can measure with acceptable accuracy. A 20 MHz bandwidth means the scope can reliably display signals up to roughly 20 million cycles per second, while a 100 MHz bandwidth device can handle signals up to 100 million cycles per second.

Importantly, bandwidth is tied to the rise time of signals you want to capture. The faster a signal changes—like a digital pulse or transient—the higher the frequency content it contains.

As a rule of thumb, to capture a signal’s details accurately, the oscilloscope bandwidth should be at least five times the highest frequency component of the signal. This prevents signal distortion, ensuring the displayed waveform is a faithful representation of reality.

---

## When a 20 MHz Bandwidth is Enough

### 1. Low-Frequency Analog Signals  
If you’re working primarily with low-frequency analog circuits—such as audio signals (usually up to 20 kHz), basic control signals, or slow sensor outputs—a 20 MHz scope bandwidth is often sufficient. This bandwidth covers the frequency range comfortably, ensuring clear and accurate waveforms.

### 2. Monitoring Power Lines or AC Mains Signals  
Line frequencies (50 Hz or 60 Hz) and their harmonics generally don’t exceed a few kHz to MHz. A 20 MHz bandwidth scope allows clear visualization of waveform shape, distortions, or noise on these signals without unnecessary expense or complexity.

### 3. Educational or Hobbyist Use  
For beginners, hobbyists, and educational labs focused on fundamental electronics learning or troubleshooting simple circuits, 20 MHz bandwidth instruments strike a good balance of capability, cost, and ease of use.

### 4. Slow Digital Signals  
Many microcontrollers, low-speed serial buses, and simple digital circuits operate well within a frequency envelope low enough for 20 MHz scopes to measure. For instance, I2C or UART signals rarely exceed a few MHz clock rates, making 20 MHz bandwidth an effective choice.

---

## When You Need 100 MHz Bandwidth

### 1. High-Speed Digital Signals  
Modern digital electronics often operate at clock speeds exceeding tens of MHz. Processor buses, fast SPI, USB 2.0, Ethernet, and other serial communication standards require higher bandwidth scopes to accurately capture signal transitions and timings.

A 100 MHz scope can track soaring edge rates and high-frequency harmonics that a 20 MHz scope would miss or misrepresent as slower, rounded edges.

### 2. RF Signals and High-Frequency Analog Circuits  
Radio frequency (RF) circuits, sensors, and other high-frequency analog components typically produce signals well beyond 20 MHz. For instance, simple radio transmitters, IF stages, and mixers often work in the tens to hundreds MHz range. Here, 100 MHz bandwidth scopes can display signal nuances critical for design, debugging, and compliance testing.

### 3. Observing Fast Transient Events and Noise  
Faster bandwidth scopes seize subtle transient phenomena, glitches, and noise details invisible to lower bandwidth models. This is essential for identifying electromagnetic interference, pulse integrity, crosstalk, or other signal integrity problems that occur at high frequencies.

### 4. Capture Accurate Rise/Fall Times  
The rise time (how quickly a signal transitions from low to high) is inversely related to bandwidth. If you measure a signal rising in a few nanoseconds, a 20 MHz scope will show a distorted, slow waveform. A 100 MHz scope can reveal sharp edges almost as they happen, aiding in timing analysis and debugging.

### 5. Advanced Embedded Systems and Communication Protocols  
High-speed microcontrollers, FPGA designs, and modern communication standards (e.g., CAN FD, high-speed SPI, HDMI) may push beyond 20 MHz bandwidth requirements. A 100 MHz scope provides the necessary headroom to measure timing margins, jitter, and signal integrity on these buses.

---

## Practical Considerations: Choosing Bandwidth Wisely

### Cost vs. Capability  
Higher bandwidth oscilloscopes tend to be more expensive and may have shorter battery life, higher noise floor, or require more demanding probes and setups. If your measurements don't require it, the extra bandwidth is a needless cost.

### Signal Integrity and Aliasing  
Underbandwidth measurement can cause aliasing and waveform distortion, leading to misinterpretation of signal quality. If in doubt, going wider bandwidth than you think you need is a safer bet than the reverse.

### Probing and Accessories  
Bandwidth is only as good as the entire measurement chain. High bandwidth scopes need matching high bandwidth probes and cables. Otherwise, the full bandwidth won’t be realized, and measurement accuracy may suffer.

### Future-Proofing  
Consider whether your projects might evolve into higher speed designs. If so, investing in a 100 MHz bandwidth scope today might avoid the need to upgrade later.

---

## Summary Table: 20 MHz vs 100 MHz Scope Bandwidth

| Factor                     | 20 MHz Bandwidth Scope                   | 100 MHz Bandwidth Scope                    |
|----------------------------|-----------------------------------------|--------------------------------------------|
| Suitable Signal Frequency  | Up to ~20 MHz                           | Up to ~100 MHz                             |
| Ideal for                  | Audio circuits, basic analog signals, low-speed digital buses | High-speed digital signals, RF circuits, fast transient measurements |
| Typical Applications       | Hobbyist projects, education, power line monitoring | Embedded systems, communications protocols, RF design labs     |
| Edge Rise Time Capability  | Slow edges; signals with longer rise times | Fast edges; sharp signal transitions       |
| Price Range                | Lower cost                             | Higher cost                               |
| Measurement Accuracy       | Limited for high-frequency signals     | More accurate for high-frequency signals |

---

## Final Thoughts

Selecting between a 20 MHz and a 100 MHz bandwidth oscilloscope depends on the frequency content and rise time of the signals you need to observe. If you work mostly with low-frequency signals or are just starting out, a 20 MHz scope can meet your needs affordably and efficiently.

However, if your work involves higher-speed digital electronics, RF signals, or fast transient capture, stepping up to 100 MHz bandwidth provides clearer, more accurate insights critical to reliable measurement and debugging.

Evaluate your current and anticipated signal types, your budget, and your long-term need for signal detail to make the best choice. Remember, bandwidth is about capturing signal fidelity — picking the right bandwidth lets you see your signals clearly and troubleshoot confidently.

