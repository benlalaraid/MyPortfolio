import { Icons } from "@/components/icons";
import { HomeIcon, NotebookIcon } from "lucide-react";

export const DATA = {
  name: "BENLALA Raid Athmane",
  initials: "RB",
  url: "https://benlala-raid-athmane.vercel.app",
  location: "El Eulma, Setif, Algeria",
  locationLink: "",
  description:
    "I am a UI/UX designer, freelancer, machine learning junior developer, and data science enthusiast, currently pursuing a degree in Computer Sciences Engineering at ESTIN.",
  summary:
    "I am a final-year student at the School of Information and Communication Technologies (ESTIN) in Bejaia, \
    specializing in Artificial Intelligence and Computer Vision.\
    I have actively participated in several Kaggle competitions and successfully \
    developed predictive models using various machine learning algorithms. \
    My expertise extends to advanced AI technologies, particularly in neural \
    networks and deep learning, with a focus on key domains such as Convolutional \
    Neural Networks (CNNs), Natural Language Processing (NLP), and Large Language \
    Models (LLMs). Having completed multiple projects in computer vision, \
    I am deeply committed to mastering this field. Notably, I rank second in my \
    class in the final-year standings.",
  avatarUrl: "/me.jpg",
  skills: [
    "HTML",
    "CSS",
    "Flutter",
    "ُDjango",
    "ُFast api",
    "Mysql",
    "Mongodb",
    "Postgres",
    "Neo4j",
    "C",
    "Java",
    "Python",
    "pytorch",
    "tensorflow",
    "sklearn",
    "pandas",
    "numpy",
    "matplotlib",
    "seaborn",
  ],
  navbar: [
    { href: "/", icon: HomeIcon, label: "Home" },
    { href: "/blog", icon: NotebookIcon, label: "Blog" },
  ],
  contact: {
    email: "r_benlala@estin.dz",
    tel: "+213791908802",
    social: {
      GitHub: {
        name: "GitHub",
        url: "https://github.com/benlalaraid",
        icon: Icons.github,

        navbar: true,
      },
      LinkedIn: {
        name: "LinkedIn",
        url: "https://www.linkedin.com/in/raid-athmane-benlala-b7976b211/",
        icon: Icons.linkedin,

        navbar: true,
      },
      email: {
        name: "Send Email",
        url: "r_benlala@estin.dz",
        icon: Icons.email,

        navbar: false,
      },
    },
  },

  work: [
    {
      company: "Higher School of Computer Science and Digital Technologies.",
      href: "https://estin.dz/",
      badges: [],
      location: "onsite",
      title: "internship in UI/UX Design",
      logoUrl: "/estin.png",
      start: "2025",
      end: "2025",
      description:
        "Collaborated with talented teammates Aymen Dennoub and Yerfa Belkacem to design and develop a web application for the digitization of ESTIN's budgetary service, enhancing user experience and improving operational efficiency.",
    },
    {
      company: "ByteCraft",
      href: "https://www.instagram.com/bytecraft.club/",
      badges: [],
      location: "onsite",
      title: "co-founder + treasurer",
      logoUrl: "/bytecraft.jpg",
      start: "2021",
      end: "2022",
      description:
        "Co-founded and managed financial operations as Treasurer for ByteCraft Club at ESTIN during 2021/2022. Led budgeting, organized tech events, and supported student innovation through workshops and hackathons, fostering a dynamic environment for learning and growth in programming and technology.",
    },
    {
      company: "ByteCraft",
      href: "https://www.instagram.com/bytecraft.club/",
      badges: [],
      location: "onsite",
      title: "member(design departement)",
      logoUrl: "/bytecraft.jpg",
      start: "2022",
      end: "2024",
      description:
        "Contributed to ByteCraft Club's design department, enhancing UI/UX design skills while sharing expertise in graphic, motion, and UI/UX design with team members across various fields, fostering collaboration and creative growth.",
    },
    {
      company: "GDSC",
      href: "https://www.instagram.com/gdsc_estin/",
      badges: [],
      location: "onsite",
      title: "member(design departement)",
      logoUrl: "/gdsc.jpg",
      start: "2022",
      end: "2023",
      description:
        "Contributed as a member of the design department to develop the user interface for ESTIN's Objet Perdu-Trouvé mobile application, while actively sharing design knowledge with fellow students to enhance collaboration and learning.",
    },
    {
      company: "School of AI Bejaia",
      href: "https://www.instagram.com/soai_bejaia/",
      badges: [],
      location: "onsite",
      title: "member (technical departement)",
      logoUrl: "/soai.png",
      start: "2024",
      end: "2025",
      description:
        "As a member of the Technical Department in the School of AI Bejaia club, I contributed by delivering in-depth sessions on deep learning and machine learning. Additionally, I participated as a mentor in the datathon organized by the club.",
    },
  ],
  education: [
    {
      school: "Higher School of Computer Science and Digital Technologies.",
      href: "https://estin.dz/",
      degree: "Engineer in Computer Science, Master's level degree M2",
      logoUrl: "/estin.png",
      start: "2020",
      end: "2025",
    },
  ],
  projects: [
    {
      title: "FlickrCaptionator",
      href: "https://github.com/benlalaraid/FlickrCaptionator",
      dates: "march, 2025",
      active: true,
      description:
        "A modern, immersive web application featuring a sleek dark-themed UI that leverages deep learning for accurate image captioning. It integrates a powerful model combining VGG16 for feature extraction and LSTM for text generation, trained on the Flickr dataset to deliver meaningful and context-aware captions.",
      technologies: [
        "FastAPI",
        "HTML",
        "CSS",
        "JS",
        "Particles.js",
        "TensorFlow",
        "Keras",
        "VGG16",
        "LSTM",
      ],
      links: [
        {
          type: "Repository",
          href: "https://github.com/benlalaraid/FlickrCaptionator",
          icon: <Icons.globe className="size-3" />,
        },
      ],
      image: "/FlickrCaptionator.jpg",
      video: "",
    },
    {
      title: "NEU-Surface-Defect-Classification",
      href: "https://github.com/benlalaraid/NEU-Surface-Defect-Classification",
      dates: "march, 2025",
      active: true,
      description:
        "A web application for analyzing and classifying surface defects in steel using the NEU Surface Defect dataset and a pre-trained PyTorch model.",
      technologies: [
        "HTML",
        "CSS",
        "js",
        "FastAPI",
        "EfficientNet-B0",
        "Pytorch",
      ],
      links: [
        {
          type: "Repository",
          href: "https://github.com/benlalaraid/NEU-Surface-Defect-Classification",
          icon: <Icons.globe className="size-3" />,
        },
      ],
      image: "/NEU-Surface-Defect-Classification.jpg",
      video: "",
    },
    {
      title: "Deep-Learning-For-Hadeeth-Recognition",
      href: "https://github.com/benlalaraid/Deep-Learning-For-Hadeeth-Recognition",
      dates: "december, 2025",
      active: true,
      description:
        "This project implements an Arabic character recognition system specifically designed for Hadeeth texts (Islamic narrations) using deep learning techniques. The system segments Arabic text images into individual characters and uses a Convolutional Neural Network (CNN) to recognize and classify each character.",
      technologies: ["Python", "OpenCV", "TEnsorflow", "Keras"],
      links: [
        {
          type: "Repository",
          href: "https://github.com/benlalaraid/Deep-Learning-For-Hadeeth-Recognition",
          icon: <Icons.globe className="size-3" />,
        },
      ],
      image: "/Deep-Learning-For-Hadeeth-Recognition.webp",
      video: "",
    },
    {
      title: "Pulmonary-Nodule-Detection",
      href: "https://github.com/benlalaraid/Pulmonary-Nodule-Detection",
      dates: "february, 2025",
      active: true,
      description:
        "This web application allows users to upload chest X-ray images and detect pulmonary nodules using a trained YOLOv8 model.",
      technologies: ["HTML", "CSS", "js", "FastAPI", "YOLOv8", "Pytorch"],
      links: [
        {
          type: "Repository",
          href: "https://github.com/benlalaraid/Pulmonary-Nodule-Detection",
          icon: <Icons.globe className="size-3" />,
        },
      ],
      image: "/Pulmonary-Nodule-Detection.jpg",
      video: "",
    },

    {
      title: "Arabic-Sign-Language-Image-Classification-With-CNN",
      href: "https://github.com/benlalaraid/Arabic-Sign-Language-Image-Classification-With-CNN",
      dates: "avril, 2024",
      active: true,
      description:
        "This project aims to build a robust image classification model to recognize and classify Arabic sign language gestures. Using deep learning techniques and convolutional neural networks (CNNs), the goal is to facilitate communication for the deaf and hard of hearing communities by translating sign language gestures into written Arabic text.",
      technologies: [
        "HTML",
        "CSS",
        "js",
        "FastAPI",
        "TensorFlow ",
        "OpenCV",
        "Scikit-learn",
      ],
      links: [
        {
          type: "Repository",
          href: "https://github.com/benlalaraid/Arabic-Sign-Language-Image-Classification-With-CNN",
          icon: <Icons.globe className="size-3" />,
        },
      ],
      image: "/Arabic-Sign-Language-Image-Classification-With-CNN.jpg",
      video: "",
    },

    {
      title: "recommendation-system-tic-tac-toe",
      href: "https://github.com/benlalaraid/recommendation-system-tic-tac-toe",
      dates: "march, 2023",
      active: true,
      description:
        "A web application that contain two sections, an expert system that suggest for you best PC Software & programs and Tic Tac Toe game using MinMax search Algorithm",
      technologies: ["HTML5", "CSS3", "JavaScript", "Bootstrap", "Flask"],
      links: [
        {
          type: "Repository",
          href: "https://github.com/benlalaraid/recommendation-system-tic-tac-toe",
          icon: <Icons.globe className="size-3" />,
        },
      ],
      image: "/Ai-project-1CS-.png",
      video: "",
    },
    {
      title: "covid-19-prediction-model",
      href: "https://github.com/benlalaraid/covid-19-prediction-model",
      dates: "march, 2024",
      active: true,
      description:
        "Application of Random Forest, Decision Tree, XGBoost, Logistic Regression, KNN, and SVM models on preprocessed data, optimizing each algorithm to maximize the recall of COVID-19 prediction.",
      technologies: ["Python", "Pandas", "NumPy"],
      links: [
        {
          type: "Repository",
          href: "https://github.com/benlalaraid/covid-19-prediction-model",
          icon: <Icons.globe className="size-3" />,
        },
      ],
      image: "/covid19.jpg",
      video: "",
    },
  ],
  certificates: [
    {
      title: "Machine Learning Specialization",
      company: "DeepLearning.AI",
      href: "https://coursera.org/share/745b35ad3fd74a2ddacff0906500a972",
      logoUrl: "/coursera.svg",
      dates: "march 30, 2024",
    },
    {
      title: "Convolutional Neural Networks",
      company: "DeepLearning.AI",
      href: "https://coursera.org/share/95a270afb28ff83051a94f5da6a0d78d",
      logoUrl: "/coursera.svg",
      dates: "june 23, 2024",
    },
    {
      title: "Advanced Learning Algorithms",
      company: "DeepLearning.AI",
      href: "https://coursera.org/share/c5d5d16b70f28dfd7cfa8ec48c7197df",
      logoUrl: "/coursera.svg",
      dates: "march 30, 2024",
    },
    {
      title: "Supervised Machine Learning: Regression and Classification",
      company: "DeepLearning.AI",
      href: "https://coursera.org/share/7aec7139c44f1fa2c98e4af73c9466ed",
      logoUrl: "/coursera.svg",
      dates: "february 26, 2024",
    },
    {
      title: "Python and Statistics for Financial Analysis",
      company: "The Hong Kong University of Science and Technology",
      href: "https://coursera.org/share/665078149aa194204d867464d90059f9",
      logoUrl: "/Hong.png",
      dates: "july 4, 2024",
    },
    {
      title: "Unsupervised Learning, Recommenders, Reinforcement Learning",
      company: "DeepLearning.AI",
      href: "https://coursera.org/share/2f97d7cf80b226ed9adf1e37ac7ba1c8",
      logoUrl: "/coursera.svg",
      dates: "march 27, 2024",
    },
    {
      title: "AI For Everyone",
      company: "DeepLearning.AI",
      href: "https://coursera.org/share/c5d08b964d072f0c68cb1164daccae6a",
      logoUrl: "/coursera.svg",
      dates: "september 28, 2023",
    },
    {
      title: "Python for Data Science, AI & Development",
      company: "IBM",
      href: "https://coursera.org/share/80c5cef16ef3bc663c3085d04ccadb54",
      logoUrl: "/IBM.webp",
      dates: "september 30, 2023",
    },
  ],
  hackathons: [
    {
      title: "First Place in CSE DataHack-2",
      dates: "February 20th - 22nd, 2025",
      location: "ESI Algiers School",
      description: "",
      image: "",
      mlh: "",
      links: [],
    },
    {
      title: "TRAINIT Datathon",
      dates: "Mars 8th - 10th, 2024",
      location: "Estin School",
      description: "",
      image: "",
      mlh: "",
      links: [],
    },
    {
      title: "ByteCraft IDEATECH-2",
      dates: "November 18th - 20th, 2022",
      location: "Estin School",
      description: "",
      image: "",
      mlh: "",
      links: [],
    },
    {
      title: "ByteCraft Design Camp",
      dates: "October 21th - 22nd, 2022",
      location: "Estin School",
      description: "",
      image: "",
      mlh: "",
      links: [],
    },
  ],
} as const;
