/**
 * AI Research section — fill in the strings and bullet lists below.
 * Empty bullet arrays hide that card. Keep lines as short paragraphs or single lines.
 */
export const aiResearchSection = {
  /** Main heading above the section */
  sectionTitle: 'AI Research',

  /** 1–3 sentences: what the study was and why it mattered */
  intro:
    'How can Retrieval-Augmented Generation (RAG) be integrated into machine learning workflows using EHR data to mitigate bias, and how do text-based versus graphical output representations affect bias visibility and interpretability?',

  /** Card 1 — context (institution, term, advisors, course code) */
  overviewTitle: 'Independent study overview',
  overviewBullets: [
    'Institution: UTSA',
    'Term: Fall 2025',
    'Program / course: CS 4913 — Independent Study',
    'Advisor: Dr. Ke Yang',
    'Working title: Bias Mitigation in Healthcare AI',
  ],

  /** Card 2 — substance of the work */
  focusTitle: 'Research focus',
  focusBullets: [
    'Problem: By combining patient demographics with external biomedical knowledge sources, the pipeline evaluates how grounding affects fairness, accuracy, and transparency in downstream clinical tasks.',
    'Approach: Utilized RAG to enhance the EHR data with external biomedical knowledge sources, and then trained a machine learning model to predict the likelihood of a patient having a certain condition based on their demographics and the external biomedical knowledge sources.',
    'Challenges: Hallucinations and bias in the RAG pipeline.',
  ],

  /** Card 3 — what you produced (hide by setting to [] if unused) */
  outcomesTitle: 'Outcomes & artifacts',
  outcomesBullets: [
    'Deliverables: Reproducible codebase, paper draft, graphical output representations',
    'Key result: This research demonstrates that RAG can be effectively integrated into machine learning workflows using EHR data to mitigate bias, and that text-based versus graphical output representations can affect bias visibility and interpretability.',
    'Links: https://github.com/Damienb123/Bias-Mitigation-Research/tree/main',
  ],
};
