export const projects = [
  {
    name: 'News NLP Pipeline',
    summary:
      'An NLP pipeline that explores topics, sentiment, and named entities across 15 years of Pakistani news.',
    description:
      'A pipeline that analyzes Dawn News headlines to discover topics, measure sentiment, and extract named entities without any manual labeling.',
    stack: ['Python', 'SQLite', 'BERTopic', 'spaCy', 'Transformers', 'Streamlit'],
    outcome: ['350K+ headlines', '20 discovered topics', '420K+ entity mentions'],
    demoUrl: 'https://news-nlp-pipeline.streamlit.app/',
    sourceUrl: 'https://github.com/umer-niazi/news-nlp-pipeline',
    featured: true,
  },
  {
    name: 'Himalayan Wildlife Classifier',
    summary:
      'A computer vision project that classifies Himalayan wildlife species using transfer learning with confidence-based rejection.',
    description:
      'A PyTorch-based classifier for Snow Leopard, Markhor, and Himalayan Brown Bear, with an additional Other class and confidence-based rejection.',
    stack: ['Python', 'PyTorch', 'ResNet18', 'Streamlit'],
    outcome: ['96.55% validation accuracy', '4-class classification', 'Confidence-based rejection'],
    demoUrl: 'https://himalayan-wildlife-classifier.streamlit.app/',
    sourceUrl: 'https://github.com/umer-niazi/himalayan-wildlife-classifier',
    featured: true,
  },
  {
    name: 'wmus',
    summary:
      'A keyboard-first terminal music player for Windows, inspired by cmus.',
    description:
      'A native Windows terminal music player inspired by the keyboard-driven workflow of cmus.',
    stack: ['Python', 'windows-curses', 'pygame'],
    outcome: ['Keyboard-first workflow', 'Fuzzy search', 'Metadata caching'],
    demoUrl: null,
    sourceUrl: 'https://github.com/umer-niazi/wmus',
    featured: false,
  },
  {
    name: 'Shelter Outcome Predictor',
    summary:
      'A machine learning project exploring animal shelter outcomes using real-world intake data.',
    description:
      'A predictive model that estimates adoption, transfer, and euthanasia outcomes from animal shelter records, prioritizing recall for at-risk animals over raw accuracy.',
    stack: ['Python', 'scikit-learn', 'Pandas', 'Streamlit'],
    outcome: ['62K+ intake records', '63% euthanasia recall', 'Recall-focused'],
    demoUrl: 'https://shelter-outcome-predictor.streamlit.app/',
    sourceUrl: 'https://github.com/umer-niazi/shelter-outcome-predictor',
    featured: false,
  },
];

export const secondaryProjects = [
  {
    name: 'Waddle Away',
    summary:
      'A small 2D endless runner built with Godot and released for browser play.',
    description:
      'A complete game project focused on finishing and shipping a polished experience rather than leaving another prototype unfinished.',
    stack: ['Godot', 'GDScript'],
    features: ['Browser release', 'Desktop and mobile support', 'Complete playable project'],
    demoUrl: 'https://umer-niazi.itch.io/waddle-away',
    demoLabel: 'Play',
    sourceUrl: 'https://github.com/umer-niazi/waddle-away',
    featured: false,
  },
];
