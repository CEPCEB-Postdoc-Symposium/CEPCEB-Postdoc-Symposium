module.exports = {

  prompts: false,

  // These are variables will be accessible via our templates
  templateData: {

    // Conference info
    conf: {
      name: "5th Annual CEPCEB Postdoc Symposium",
      description: "5th Annual CEPCEB Postdoc Symposium",
      date: "June 1 2018",
      // If your event is free, just comment this line
      venue: "UCR",
      address: "Genomics Auditorium",
      city: "Riverside",
      state: "California"
    },

    // The Call To Action button at the header,
    // If you don't want this, just remove the callToAction property.
    callToAction: {
        text: "Register now!",
        link: "https://docs.google.com/forms/d/e/1FAIpQLSf8DfSL9Wt9EDgaFGq6jVTNf0EY1h5VVjO0kRBsFeMzzoH8Fg/viewform"
    },

    // Site info
    site: {
      theme: "yellow-swan",
      url: "https://cepceb-postdoc-symposium.github.io/symposium/",
      googleanalytics: "GTM-W532RCD"
    },

    // Active sections on the website
    // to deactivate comment out with '//'
    // you can also change order here and it will reflect on page
    sections: [
      'about',
      'speakers',
      'schedule',
      'location',
	'pastevents',
      'contact'
    ],

    // Labels which you can translate to other languages
    labels: {
      about: "About",
      location: "Location",
      speakers: "Speakers",
      schedule: "Schedule",
      pastevents: "Past Events",
      contact: "Organizing Committee"
    },

    // The entire schedule
    schedule: [
    {
        name: "Steve A. Kay, Ph.D., D.Sc.",
        photo: "themes/yellow-swan/img/steve-kay.jpg",
        bio: "Director of Convergent Biosciences. Provost Professor of Neurology, Biomedical Engineering and Biological Sciences",
        company: "University of Southern California",
        link: {
          href: "https://dornsife.usc.edu/labs/kay-laboratory/",
          text: "Steve Kay Lab"
        },
        presentation: {
          title: "Title",
          description: "Short description",
          time: "3:25 PM"
        }
      },
	{
        name: "Registration and Breakfast",
        time: "8:30 AM"
      },
      {
        name: "Opening Remarks",
        time: "9:00 AM"
      },
       {
        name: "Xiang Zhou",
        photo: "themes/yellow-swan/img/speaker.png",
        bio: "Some information about the speaker",
        company: "Postdoctoral Researcher",
        link: {
          href: "https://www.researchgate.net/",
          text: "HomePage"
        },
        presentation: {
          title: "Title",
          description: "Short description",
          time: "9:10 AM"
        }
      },
      {
        name: "Alison Mills",
        photo: "themes/yellow-swan/img/alison_mills.png",
        bio: "Alison Mills is a second year PhD student in the UCR Biochemistry and Molecular Biology Department. She works in the Rasmussen lab investigating cell division orientation in Arabidopsis and maize. She received her undergraduate degree in biochemistry and molecular biology and a Masters in biotechnology from the University of California, Irvine. Her current research investigates the function of the division plane marker, TANGLED1, in Arabidopsis, and the role of the microtubule severing protein, KATANIN, in cell division in maize. Outside of lab, her interests include reading science fiction and tabletop roleplaying games.",
        company: "Graduate Student",
        link: {
          href: "https://www.linkedin.com/in/alison-mills-824022162/",
          text: "HomePage"
        },
        presentation: {
          title: "It Takes Two: TANGLED1 and AIR9 are Both Required For Proper Division Plane Orientation in Arabidopsis thaliana.",
          description: "Short description",
          time: "9:30 AM"
        }
      },
      {
        name: "Kelly Clark",
        photo: "themes/yellow-swan/img/kelley_clark.jpg",
        bio: "I’m a 4 th year PhD student in the Microbiology program studying in Dr. Wenbo Ma’s lab. My PhD studies are on the currently, most devastating disease of citrus, Huanglongbing. I’m originally from Arizona, where I attended the University of Arizona and received my Bachelor’s degree in Plant Biology. My interests in the biological sciences began when I was a child as many of my family members are also in the Agricultural field. In my free time I enjoy hiking, painting, and being with my cat.",
        company: "Graduate Student",
        link: {
          href: "https://twitter.com/kclar012/",
          text: "HomePage"
        },
        presentation: {
          title: "An effector from the Huanglongbing-associated pathogen targets a class of proteases in citrus.",
          description: "Short description",
          time: "9:50 AM"
        }
      },
      {
        name: "Wiphawee Leesutthiphonchai",
        photo: "themes/yellow-swan/img/wiphawee_leesutthiphonchai.png",
        bio: "Wiphawee is a fourth year PhD Candidate in Plant Pathology program working under supervision of Dr.Howard Judelson. Her research focuses on a transcription factor involved in sporulation of the plant pathogen Phytophthora infestans. Her work helps to understand how the transcription factor regulates sporulation, which is a key stage for spore formation and plant infection.",
        company: "Graduate Student",
        link: {
          href: "https://oomyceteworld.net/Others.html",
          text: "HomePage"
        },
        presentation: {
          title: "Transcriptional networks controlling sporulation of Phytophthora infestans: towards saving potato from late blight.",
          description: "Short description",
          time: "10:10 AM"
        }
      },
      {
        name: "Coffee Break",
        time: "10:40 AM"
      },
      {
        name: "Jiang Li",
        photo: "themes/yellow-swan/img/jiang_li.jpg",
        bio: "Jiang is a postdoc in Dr. Nair’s Lab in UCR School of Medicine. He received his PhD degree from Fudan university in China. He works in Nair Lab and focus on the function of human Resistin protein in inflammation. They found that human Resistin decreases the pro-inflammatory cytokines by binding to Toll-like receptor 4. This binding blocks TLR4 signaling in immune and inflammatory cells when challenged by Lipopolysaccharide.",
        company: "Post-Doctoral Fellow",
        link: {
          href: "https://scholar.google.com/citations?hl=zh-CN&view_op=list_works&gmla=AJsN-F7efWd_jERoS77FwwNrtwkSN9rEPH6XBN9-v7CXksYQd96rTCtZQJHUhnw2Xc_8-93ATbj0fosUsI8r7G4haNKjy7igwXrptGOmQf38MngFNFBqkNY&user=e2hhObIAAAAJ",
          text: "HomePage"
        },
        presentation: {
          title: "Resistin therapeutics in Lipopolysaccharide induced sepsis.",
          description: "Short description",
          time: "11:00 AM"
        }
      },
      {
        name: "Christi Scott",
        photo: "themes/yellow-swan/img/speaker.png",
        bio: "Some information about the speaker",
        company: "Graduate Student",
        link: {
          href: "https://www.researchgate.net/",
          text: "HomePage"
        },
        presentation: {
          title: "Title",
          description: "Short description",
          time: "11:20 AM"
        }
      },
      {
        name: "Poonam (Sonia) Deol",
        photo: "themes/yellow-swan/img/speaker.png",
        bio: "Some information about the speaker",
        company: "Assistant Project Scientist",
        link: {
          href: "https://www.researchgate.net/",
          text: "HomePage"
        },
        presentation: {
          title: "Title",
          description: "Short description",
          time: "11:40 AM"
        }
      },
      {
        name: "Ryan Joseph",
        photo: "themes/yellow-swan/img/speaker.png",
        bio: "Some information about the speaker",
        company: "Project Scientist",
        link: {
          href: "https://www.researchgate.net/",
          text: "HomePage"
        },
        presentation: {
          title: "Title",
          description: "Short description",
          time: "12:00 PM"
        }
      },
      {
        name: "Lunch Break",
        time: "12:30 PM"
      },
      {
        name: "Maureen Hummel",
        photo: "themes/yellow-swan/img/speaker.png",
        bio: "Some information about the speaker",
        company: "Postdoctoral Researcher",
        link: {
          href: "https://www.researchgate.net/",
          text: "HomePage"
        },
        presentation: {
          title: "Title",
          description: "Short description",
          time: "1:30 PM"
        }
      },
      {
        name: "Qiang Cai",
        photo: "themes/yellow-swan/img/qiang_cai.jpg",
        bio: "I joined in Professor Hailing Jin's lab after I got my Ph.D. at 2014 from Shanghai Jiaotong University. I am working on plant extracellular vesicles and sRNA trafficking in plant immunity.",
        company: "Postdoctoral Researcher",
        link: {
          href: "https://scholar.google.com/citations?user=vJ2cdBsAAAAJ&hl=en",
          text: "HomePage"
        },
        presentation: {
          title: "Plants secrete extracellular vesicles to deliver small RNAs into a fungal pathogen to silence its virulence genes.",
          description: "Short description",
          time: "1:50 PM"
        }
      },
      {
        name: "Bailong Zhang",
        photo: "themes/yellow-swan/img/bailong_zhang.jpg",
        bio: "I joined in Professor Xuemei Chen's lab after I got my Ph.D. at 2014 from Fudan University. I am working on plant microRNA and siRNA metabolism.",
        company: "Postdoctoral Researcher",
        link: {
          href: "https://www.researchgate.net/profile/Bailong_Zhang/",
          text: "HomePage"
        },
        presentation: {
          title: "Linking Key Steps of Plant miRNA Biogenesis by TREX-2 and the Nuclear Pore Complex",
          description: "Short description",
          time: "2:10 PM"
        }
      },
      {
        name: "Yongjian Qiu",
        photo: "themes/yellow-swan/img/yongjian_qiu.jpg",
        bio: "My name is Yongjian Qiu. I got my B.S. degree from University of Science and Technology of China (USTC) in 2006. In the same year, I started my graduate studies in the Department of Horticulture and Landscape Architecture at Washington State University, Pullman, WA. My graduate research in Dr. Joe Poovaiah's laboratory focused on functional characterization of calcium- and calcium/calmodulin-binding proteins in plant defense against abiotic and biotic stresses. I got my Ph.D. degree in July 2011 and subsequently I joined Dr. Meng Chen's laboratory as a Postdoctoral Associate in the Department of Biology at Duke University, Durham, NC. I continued my research as an Assistant Project Scientist in Dr. Meng Chen's laboratory after the lab moved to University of California, Riverside in late 2015. My project in Dr. Meng Chen's laboratory focuses on understanding the detailed mechanism of phytochrome signaling in regulating light- and temperature-mediated plant growth.",
        company: "Assistant Project Scientist",
        link: {
          href: "https://scholar.google.com/citations?user=hwDBLkMAAAAJ&hl=en",
          text: "HomePage"
        },
        presentation: {
          title: "Mechanism of phytochrome-mediated thermomorphogenesis.",
          description: "Short description",
          time: "2:30 PM"
        }
      },
      {
        name: "Coffee Break",
	time: "3:00 PM"
      },
      {
        name: "Keynote Speaker:Dr. Steve Kay ",
        time: "3:20 PM"
      },
      {
        name: "Poster session with Refreshments",
        time: "4:30 PM"
      }
    ],

// List of pastevents
    pastevents: [
      {
        name: "PastEvents",
        logo: "themes/yellow-swan/img/2015a.jpg",
        url: "themes/yellow-swan/img/2015.jpg"
      },
      {
        name: "PastEvents",
        logo: "themes/yellow-swan/img/2016a.jpg",
        url: "themes/yellow-swan/img/2016.jpg"
      },
      {
        name: "PastEvents",
        logo: "themes/yellow-swan/img/2017a.jpg",
        url: "themes/yellow-swan/img/2017.jpg"
      }
    ],
    // Theme path
    getTheme: function() {
      return "themes/" + this.site.theme;
    },

    // Site Path
    getUrl: function() {
    	return this.site.url;
    }
  }
};
