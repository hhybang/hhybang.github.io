// CV content — mirrors CV.pdf. Edit here to update the HTML CV page.

export type CVEntry = {
  date?: string;
  title: string;
  subtitle?: string; // HTML allowed (e.g. advisor links)
  detail?: string; // HTML allowed
  bullets?: string[]; // HTML allowed
};

export type CVSection = { heading: string; entries: CVEntry[] };

export const contact = {
  email: 'hbang@mit.edu',
  website: 'hyeminbang.com',
  location: 'Cambridge, MA, USA',
};

export const cv: CVSection[] = [
  {
    heading: 'Education',
    entries: [
      {
        title: 'PhD in Computer Science',
        subtitle: 'Massachusetts Institute of Technology',
        detail:
          'Advisor: <a href="https://mitchellg.github.io">Mitchell Gordon</a>, CSAIL',
      },
      {
        date: '2025',
        title: 'MEng in Computer Science',
        subtitle: 'Massachusetts Institute of Technology',
        detail:
          'Advisor: <a href="https://arvindsatya.com">Arvind Satyanarayan</a>, Visualization Group, CSAIL<br>Concentration: Artificial Intelligence · GPA: 4.8 / 5',
      },
      {
        date: '2019',
        title: 'SB in Computer Science',
        subtitle: 'Massachusetts Institute of Technology',
        detail: 'GPA: 4.4 / 5',
      },
    ],
  },
  {
    heading: 'Academic Research',
    entries: [
      {
        date: '2025–Present',
        title: 'MIT CSAIL',
        subtitle:
          'Mentor: <a href="https://mitchellg.github.io">Mitchell Gordon</a>',
        detail:
          'Developing frameworks to evaluate and enhance human–AI interactions.',
      },
      {
        date: '2022–Present',
        title: 'Visualization Group, MIT CSAIL',
        subtitle:
          'Mentor: <a href="https://arvindsatya.com">Arvind Satyanarayan</a>',
        detail:
          'Researching methods to interpret and align model learning behavior with human reasoning.',
      },
    ],
  },
  {
    heading: 'Publications',
    entries: [
      {
        title:
          'Iterative Rubric Refinement from User Disagreement at Inference Time',
        subtitle: '<strong>Hyemin Bang</strong>, Mitchell Gordon',
        detail: 'Under review',
      },
      {
        date: '2025',
        title:
          'Abstraction Alignment: Comparing Model-Learned and Human-Encoded Conceptual Relationships',
        subtitle:
          'Angie Boggust, <strong>Hyemin Bang</strong>, Hendrik Strobelt, Arvind Satyanarayan',
        detail:
          'ACM Conference on Human Factors in Computing Systems (CHI) · <a href="https://vis.csail.mit.edu/pubs/abstraction-alignment/">Project</a> · <a href="https://vis.csail.mit.edu/pubs/abstraction-alignment.pdf">Paper</a> · <a href="https://github.com/mitvis/abstraction-alignment">Code</a>',
      },
    ],
  },
  {
    heading: 'Workshop Papers',
    entries: [
      {
        date: '2024',
        title:
          'Explanation Alignment: Quantifying the Correctness of Model Reasoning At Scale',
        subtitle:
          '<strong>Hyemin Bang</strong>, Angie Boggust, Arvind Satyanarayan',
        detail:
          'European Conference on Computer Vision (ECCV) Explainable Computer Vision Workshop · <a href="https://vis.csail.mit.edu/pubs/explanation-alignment/">Project</a> · <a href="https://vis.csail.mit.edu/pubs/explanation-alignment.pdf">Paper</a> · <a href="https://github.com/mitvis/explanation_alignment">Code</a>',
      },
    ],
  },
  {
    heading: 'Teaching',
    entries: [
      {
        date: 'Spring 2025',
        title: '6.8510 (6.871): Intelligent Multimodal User Interfaces',
        subtitle: 'Graduate Teaching Assistant, MIT',
        detail: 'Professor: <a href="https://www.csail.mit.edu/person/randall-davis">Randall Davis</a>',
      },
      {
        date: 'Summer–Fall 2024',
        title: 'Break Through Tech AI',
        subtitle: 'Graduate Teaching Assistant, MIT',
        bullets: [
          'Mentored undergraduate women, non-binary, and underrepresented students in data science, machine learning, and AI.',
        ],
      },
      {
        date: 'Spring 2024',
        title: '6.7930 (6.871) / HST.956: Machine Learning for Healthcare',
        subtitle: 'Graduate Teaching Assistant, MIT',
        detail: 'Professor: <a href="https://people.csail.mit.edu/psz/home/">Peter Szolovits</a>',
        bullets: [
          'Delivered a lecture on explainability and interpretability in healthcare ML to 100 students.',
        ],
      },
      {
        date: 'Fall 2022',
        title: '6.4100 (6.034): Artificial Intelligence',
        subtitle: 'Graduate Teaching Assistant, MIT',
        detail: 'Principal Lecturer: <a href="https://www.csail.mit.edu/person/kimberle-koile">Kimberle Koile</a>',
      },
      {
        date: 'Fall 2017',
        title: 'Refugee Learning Accelerator',
        subtitle: 'Undergraduate Researcher, MIT Media Lab',
        bullets: [
          'Mentored Middle Eastern computer scientists and engineers in developing technologies for refugee education.',
        ],
      },
    ],
  },
  {
    heading: 'Professional Experience',
    entries: [
      {
        date: '2019–2021',
        title: 'InterSystems',
        subtitle: 'Systems Developer',
        bullets: [
          "Integrated H2O and DataRobot, third-party machine learning platforms, into InterSystems IRIS, the company's high-performance database platform, simplifying and streamlining the development and deployment of machine learning models.",
          'Designed and implemented Kafka and AmazonSQS connectors for InterSystems IRIS, enabling seamless data integration between systems.',
        ],
      },
    ],
  },
];
