export type Treatment = {
  slug: string;
  number: string;
  name: string;
  short: string;
  description: string;
  benefits: string[];
  process: { step: string; detail: string }[];
  recovery: string;
  faqs: { q: string; a: string }[];
};

export const treatments: Treatment[] = [
  {
    slug: "smile-design",
    number: "01",
    name: "Smile Design",
    short: "Visualize your perfect outcome before treatment begins.",
    description:
      "Digital smile design is the choreography that precedes every transformation. We study facial proportions, lip dynamics and personality to architect a smile that feels unmistakably yours — then preview it together before a single tooth is touched.",
    benefits: [
      "Personalized aesthetic blueprint",
      "3D mock-up & try-in preview",
      "Predictable, minimally invasive plan",
      "Harmony with your facial features",
    ],
    process: [
      { step: "Consultation", detail: "We listen to your vision and capture diagnostic records." },
      { step: "Digital Mock-up", detail: "Your future smile is rendered in 3D for your approval." },
      { step: "Try-in Preview", detail: "Wear a temporary version before committing." },
      { step: "Crafting", detail: "Master ceramists handcraft the final restorations." },
    ],
    recovery: "Most patients return to work the same day. Sensitivity, if any, settles within 48 hours.",
    faqs: [
      { q: "How long does the full process take?", a: "Typically two to four visits across three weeks." },
      { q: "Is it reversible?", a: "The mock-up phase is fully reversible. Final ceramic work is permanent by design." },
    ],
  },
  {
    slug: "cosmetic-dentistry",
    number: "02",
    name: "Cosmetic Dentistry",
    short: "Veneers, bonding and whitening for a luminous, natural appearance.",
    description:
      "From hand-layered porcelain veneers to in-office whitening, every cosmetic procedure is calibrated to look as if you were simply born this way — softer, brighter and quietly confident.",
    benefits: [
      "Natural translucency & shade",
      "Minimal tooth preparation",
      "Long-lasting, stain-resistant materials",
      "Tailored to your skin tone & lips",
    ],
    process: [
      { step: "Shade Mapping", detail: "We select a custom palette under multiple light conditions." },
      { step: "Conservative Prep", detail: "Only the enamel that needs reshaping is touched." },
      { step: "Temporaries", detail: "Live with the new shape before finalizing." },
      { step: "Bond & Polish", detail: "Final veneers are bonded and hand-polished." },
    ],
    recovery: "Mild sensitivity for one to two days. Avoid deeply pigmented foods for the first week.",
    faqs: [
      { q: "Will my veneers look fake?", a: "Never. We hand-layer ceramic to mimic natural enamel translucency." },
      { q: "How long do veneers last?", a: "Properly cared for, 12–20 years on average." },
    ],
  },
  {
    slug: "restorative-dentistry",
    number: "03",
    name: "Restorative Dentistry",
    short: "Advanced implants and crowns that feel indistinguishable from natural teeth.",
    description:
      "Biomimetic dentistry preserves what nature gave you and rebuilds the rest with materials that flex, wear and shine like real enamel. Implants are placed with surgical guides for millimetric precision.",
    benefits: [
      "Tooth-conserving philosophy",
      "Guided implant placement",
      "Custom zirconia & e.max crowns",
      "Long-term structural stability",
    ],
    process: [
      { step: "Diagnosis", detail: "3D CBCT scans map bone, nerves and sinuses." },
      { step: "Plan", detail: "Surgical guides are digitally designed for the ideal angle." },
      { step: "Restore", detail: "Implants integrate over weeks; crowns are placed atop." },
      { step: "Maintain", detail: "Annual reviews keep your work pristine." },
    ],
    recovery: "Most implant patients resume normal activities within 48 hours.",
    faqs: [
      { q: "Are implants painful?", a: "Modern guided placement is remarkably gentle, with most discomfort managed by paracetamol." },
      { q: "How long does an implant last?", a: "Lifetime success rates exceed 95% with proper hygiene." },
    ],
  },
  {
    slug: "root-canal",
    number: "04",
    name: "Root Canal Treatment",
    short: "Pain-free endodontics performed under microscopic precision.",
    description:
      "We use dental operating microscopes and rotary nickel-titanium instruments to perform root canals that are quiet, gentle and complete in a single visit whenever possible — saving the natural tooth you were born with.",
    benefits: [
      "Single-visit treatment in most cases",
      "Microscope-assisted precision",
      "Profound, gentle anesthesia",
      "Preserves the natural tooth",
    ],
    process: [
      { step: "Diagnose", detail: "Pinpoint the affected nerve with digital imaging." },
      { step: "Numb", detail: "Comfort is established before any work begins." },
      { step: "Clean & Shape", detail: "Microscopic precision removes infected tissue." },
      { step: "Seal", detail: "The canal is sealed and a final restoration placed." },
    ],
    recovery: "Mild tenderness for two to three days. Eat soft foods initially.",
    faqs: [
      { q: "Is a root canal painful?", a: "Far less than the toothache that brought you in. Most patients feel immediate relief." },
      { q: "Will I need a crown afterward?", a: "Usually yes — to protect the now-fragile tooth long-term." },
    ],
  },
  {
    slug: "prosthodontics",
    number: "05",
    name: "Prosthodontics",
    short: "Reconstructive mastery for complex full-arch and bite-rehabilitation cases.",
    description:
      "When wear, trauma or tooth loss demands more than a single restoration, we orchestrate full-mouth rehabilitations — fixed bridges, implant-supported arches and bite reconstructions — restoring both function and beauty.",
    benefits: [
      "Full-mouth reconstruction",
      "Implant-supported dentures",
      "Bite & jaw harmonization",
      "Restored chewing comfort",
    ],
    process: [
      { step: "Assess", detail: "Full diagnostic workup including TMJ analysis." },
      { step: "Wax-up", detail: "We build your new bite in wax for approval." },
      { step: "Provisionalize", detail: "Wear functional temporaries for several weeks." },
      { step: "Finalize", detail: "Definitive restorations are placed and balanced." },
    ],
    recovery: "Adaptation to a new bite typically takes two to four weeks.",
    faqs: [
      { q: "How long does full reconstruction take?", a: "Usually three to six months from plan to placement." },
      { q: "Will it look natural?", a: "Yes — every contour is designed in dialogue with your facial features." },
    ],
  },
  {
    slug: "pediatric-dentistry",
    number: "06",
    name: "Pediatric Dentistry",
    short: "Gentle, reassuring care designed for our youngest patients.",
    description:
      "Children deserve a calm, joyful first experience of dentistry. From age-appropriate explanations to behavioral guidance and preventive sealants, we build the trust that lasts a lifetime.",
    benefits: [
      "Anxiety-free environment",
      "Preventive sealants & fluoride",
      "Early orthodontic screening",
      "Parent education at every step",
    ],
    process: [
      { step: "Welcome", detail: "A playful tour familiarizes your child with the space." },
      { step: "Examine", detail: "A gentle, narrated examination — never rushed." },
      { step: "Prevent", detail: "Sealants and fluoride keep teeth healthy." },
      { step: "Coach", detail: "We teach brushing in ways that stick." },
    ],
    recovery: "Routine visits have no downtime. Treatments are followed by a small ritual reward.",
    faqs: [
      { q: "At what age should my child first visit?", a: "By the eruption of the first tooth, or no later than age one." },
      { q: "Do you use anesthesia?", a: "Only when necessary, always at child-appropriate dosing." },
    ],
  },
];

export const testimonials = [
  { name: "Layla R.", treatment: "Full Smile Design", rating: 5, quote: "I cried the first time I saw my smile in the mirror. Dr. Mohiti didn't just change my teeth — she gave me back a part of myself." },
  { name: "Arman S.", treatment: "Implant Restoration", rating: 5, quote: "From the first call to the final visit, every detail was considered. The clinic feels like a sanctuary, not a dental office." },
  { name: "Sahar M.", treatment: "Pediatric Care", rating: 5, quote: "My six-year-old asks when she gets to go back. That sentence alone tells you everything about Dr. Mohiti's gift with children." },
  { name: "Daniel K.", treatment: "Veneers", rating: 5, quote: "Subtle, natural and so well-matched to my face that even close friends didn't notice — they just said I looked rested." },
  { name: "Niloofar P.", treatment: "Root Canal", rating: 5, quote: "I was terrified. I left an hour later wondering why I'd waited so long. Truly painless and reassuring throughout." },
  { name: "Bahar T.", treatment: "Prosthodontics", rating: 5, quote: "After years of compromise, I finally have a bite that works and a smile I love. Life-changing in every sense." },
];

export const faqs = [
  { q: "What should I expect at my first visit?", a: "A relaxed conversation, a thorough examination and digital imaging. We discuss your goals before discussing any treatment — there is no pressure and no rushed decisions." },
  { q: "Do you treat anxious patients?", a: "Absolutely. Our entire clinic was designed to dissolve dental anxiety, and we offer everything from guided breathing to mild sedation when appropriate." },
  { q: "How do I know which treatment is right for me?", a: "Together. Dr. Mohiti presents options with honest pros and cons, then helps you choose what aligns with your health, budget and aesthetic goals." },
  { q: "Do you offer payment plans?", a: "Yes. We offer flexible installments on most cosmetic and restorative treatments. Details are shared during your consultation." },
  { q: "How long until I see results?", a: "Whitening and bonding show same-day results. Veneers and reconstructive work span two to six weeks. Implants follow a longer biological timeline." },
];

export const treatmentSlots = ["09:00", "10:00", "11:00", "12:00", "14:00", "15:00", "16:00", "17:00", "18:00"];