const { Post } = require('../models');

const postInfo = [
  {
    title: 'Dolor sit amet consectetur adipiscing elit duis tristique.',
    post_url: 'https://www.google.com/search/howsearchworks/how-search-works/organizing-information/',
    user_id: 0001
  },
  {
    title: 'Cum sociis natoque penatibus et magnis.',
    post_url: 'https://www.indiatoday.in/technology/news/story/apple-becomes-first-tech-giant-to-explicitly-ban-caste-discrimination-trains-managers-on-indian-caste-system-1988183-2022-08-15',
    user_id: 0003
  },
  {
    title: 'Id ornare arcu odio ut sem nulla pharetra diam sit. ',
    post_url: 'https://ground.news/article/cc4aadeb-8087-4966-a96f-699a54e312d1',
    user_id: 0009
  },
  {
    title: 'Augue ut lectus arcu bibendum.',
    post_url: 'https://www.theverge.com/2022/8/16/23307730/google-everyday-robots-project-ai-language-skills-palm-saycan',
    user_id: 0002
  },
  {
    title: 'In hendrerit gravida rutrum quisque non. ',
    post_url: 'https://www.newsweek.com/nuclear-fusion-energy-milestone-ignition-confirmed-california-1733238',
    user_id: 0005
  },
  {
    title: 'Dui accumsan sit amet nulla.',
    post_url: 'https://analyticsindiamag.com/nvidia-wants-to-create-a-more-realistic-metaverse/',
    user_id: 0007
  },
  {
    title: 'Maecenas pharetra convallis posuere morbi leo urna molestie at.',
    post_url: 'https://techcrunch.com/2022/08/11/teens-abandoned-facebook-pew-study/',
    user_id: 0001
  },
  {
    title: 'Habitasse platea dictumst vestibulum rhoncus est pellentesque elit.',
    post_url: 'https://techcrunch.com/2022/08/11/medical-simulation-platform-fundamentalvr-raises-20m-to-help-surgeons-learn-through-vr/',
    user_id: 0009
  },
  {
    title: 'Nisl suscipit adipiscing bibendum est ultricies.',
    post_url: 'https://arstechnica.com/gadgets/2022/08/fitbits-will-soon-lose-the-ability-to-sync-with-computers/',
    user_id: 0006
  },
  {
    title: 'Risus pretium.',
    post_url: 'https://gizmodo.com/spotify-concert-tickets-music-ticketmaster-1849394535',
    user_id: 0008
  },
  {
    title: 'Fermentum dui faucibus in ornare quam.',
    post_url: 'https://www.tomshardware.com/news/microsoft-windows-11-encryption-could-damage-your-data',
    user_id: 0004
  },
  {
    title: 'Faucibus ornare suspendisse.',
    post_url: 'https://digg.com/money/link/how-much-does-it-cost-to-mine-bitcoin-around-the-world-42bQ14q7nn',
    user_id: 0002
  },
  {
    title: 'A diam maecenas sed enim ut.',
    post_url: 'https://www.engadget.com/nas-as-lucy-spacecraft-gets-improvised-fix-on-its-way-to-explore-trojan-asteroids-100356302.html',
    user_id: 0003
  },
  {
    title: 'Id aliquet lectus proin.',
    post_url: 'https://www.bloomberg.com/opinion/articles/2022-08-04/alphabet-s-deepmind-shows-ai-s-value-in-speeding-drug-discovery',
    user_id: 0004
  },
  {
    title: 'Neque viverra justo nec ultrices dui.',
    post_url: 'https://www.umass.edu/news/article/umass-amherst-and-georgia-tech-researchers-3d-print-first-high-performance',
    user_id: 0007
  },
  {
    title: 'Pellentesque elit ullamcorper dignissim cras.',
    post_url: 'https://www.bbc.com/news/technology-62345306',
    user_id: 0009
  },
  {
    title: 'Nunc sed velit dignissim sodales ut eu sem.',
    post_url: 'https://www.theverge.com/2022/7/30/23285091/indonesia-bans-access-steam-epic-games-paypal-yahoo',
    user_id: 0002
  },
  {
    title: 'Tincidunt praesent semper feugiat.',
    post_url: 'https://www.theregister.com/2022/08/15/nuclear_power_climate_change/',
    user_id: 0006
  },
  {
    title: 'Parturient montes nascetur ridiculus mus mauris vitae ultricies leo.',
    post_url: 'https://techxplore.com/news/2022-08-google-apple-text-messages-iphones.html',
    user_id: 0004
  },
  {
    title: 'Commodo nulla facilisi nullam vehicula.',
    post_url: 'https://phys.org/news/2022-08-scientists-superconductor.html',
    user_id: 0005
  }
];

const postSeeds = () => Post.bulkCreate(postInfo);

module.exports = postSeeds;
