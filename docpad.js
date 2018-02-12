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
        link: "https://goo.gl/forms/W0r7bSwgeI1ZYBis1"
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
	'sponsors',
	'partners',
      'contact'
    ],

    // Labels which you can translate to other languages
    labels: {
      about: "About",
      location: "Location",
      speakers: "Speakers",
      schedule: "Schedule",
      sponsors: "Sponsors",
      partners: "Past Events",
      contact: "Contact"
    },

    // The entire schedule
    schedule: [
      {
        name: "Opening Remarks",
        time: "8:30 AM"
      },
      {
        name: "FirstName LastName",
        photo: "themes/yellow-swan/img/speaker.png",
        bio: "Some information about the speaker",
        company: "Post-Doctoral Fellow",
        link: {
          href: "https://www.researchgate.net/",
          text: "HomePage"
        },
        presentation: {
          title: "Title",
          description: "Short description",
          time: "16:00 PM"
        }
      },
       {
        name: "FirstName LastName",
        photo: "themes/yellow-swan/img/speaker.png",
        bio: "Some information about the speaker",
        company: "Post-Doctoral Fellow",
        link: {
          href: "https://www.researchgate.net/",
          text: "HomePage"
        },
        presentation: {
          title: "Title",
          description: "Short description",
          time: "9:00 AM"
        }
      },
      {
        name: "FirstName LastName",
        photo: "themes/yellow-swan/img/speaker.png",
        bio: "Some information about the speaker",
        company: "Post-Doctoral Fellow",
        link: {
          href: "https://www.researchgate.net/",
          text: "HomePage"
        },
        presentation: {
          title: "Title",
          description: "Short description",
          time: "9:20 AM"
        }
      },
      {
        name: "FirstName LastName",
        photo: "themes/yellow-swan/img/speaker.png",
        bio: "Some information about the speaker",
        company: "Post-Doctoral Fellow",
        link: {
          href: "https://www.researchgate.net/",
          text: "HomePage"
        },
        presentation: {
          title: "Title",
          description: "Short description",
          time: "9:40 AM"
        }
      },
      {
        name: "FirstName LastName",
        photo: "themes/yellow-swan/img/speaker.png",
        bio: "Some information about the speaker",
        company: "Post-Doctoral Fellow",
        link: {
          href: "https://www.researchgate.net/",
          text: "HomePage"
        },
        presentation: {
          title: "Title",
          description: "Short description",
          time: "10:00 AM"
        }
      },
      {
        name: "Coffee Break",
        time: "10:30 AM"
      },
      {
        name: "FirstName LastName",
        photo: "themes/yellow-swan/img/speaker.png",
        bio: "Some information about the speaker",
        company: "Post-Doctoral Fellow",
        link: {
          href: "https://www.researchgate.net/",
          text: "HomePage"
        },
        presentation: {
          title: "Title",
          description: "Short description",
          time: "11:00 AM"
        }
      },
      {
        name: "FirstName LastName",
        photo: "themes/yellow-swan/img/speaker.png",
        bio: "Some information about the speaker",
        company: "Post-Doctoral Fellow",
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
        name: "FirstName LastName",
        photo: "themes/yellow-swan/img/speaker.png",
        bio: "Some information about the speaker",
        company: "Post-Doctoral Fellow",
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
        name: "FirstName LastName",
        photo: "themes/yellow-swan/img/speaker.png",
        bio: "Some information about the speaker",
        company: "Post-Doctoral Fellow",
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
        name: "FirstName LastName",
        photo: "themes/yellow-swan/img/speaker.png",
        bio: "Some information about the speaker",
        company: "Post-Doctoral Fellow",
        link: {
          href: "https://www.researchgate.net/",
          text: "HomePage"
        },
        presentation: {
          title: "Title",
          description: "Short description",
          time: "14:30 PM"
        }
      },
      {
        name: "FirstName LastName",
        photo: "themes/yellow-swan/img/speaker.png",
        bio: "Some information about the speaker",
        company: "Post-Doctoral Fellow",
        link: {
          href: "https://www.researchgate.net/",
          text: "HomePage"
        },
        presentation: {
          title: "Title",
          description: "Short description",
          time: "14:50 PM"
        }
      },
      {
        name: "FirstName LastName",
        photo: "themes/yellow-swan/img/speaker.png",
        bio: "Some information about the speaker",
        company: "Post-Doctoral Fellow",
        link: {
          href: "https://www.researchgate.net/",
          text: "HomePage"
        },
        presentation: {
          title: "Title",
          description: "Short description",
          time: "15:10 PM"
        }
      },
      {
        name: "FirstName LastName",
        photo: "themes/yellow-swan/img/speaker.png",
        bio: "Some information about the speaker",
        company: "Post-Doctoral Fellow",
        link: {
          href: "https://www.researchgate.net/",
          text: "HomePage"
        },
        presentation: {
          title: "Title",
          description: "Short description",
          time: "15:30 PM"
        }
      }
    ],

    // List of Sponsors
    sponsors: [
      {
        name: "CEPCEB",
        logo: "themes/yellow-swan/img/sponsor.png",
        url: "http://cepceb.ucr.edu/"
      }
    ],

// List of Partners
    partners: [
      {
        name: "PastEvents",
        logo: "themes/yellow-swan/img/pastevent.png",
        url: "https://github.com/CEPCEB-Postdoc-Symposium/pastevents/raw/master/pastevents.pdf"
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
