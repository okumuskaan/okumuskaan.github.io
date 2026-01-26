const newsData = [
  {
    img: './imgs/news/fl_setup.png',
    title: 'Paper Accepted to IEEE ICC 2026',
    desc: 
`
    I am pleased to share that our paper <a class="intext-link" href="./research.html#ufl-tuma-icc26-paper">Type-based unsourced federated learning with client self-selection</a> has been accepted for presentation at the 
    <a class="intext-link" href="https://icc2026.ieee-icc.org/" target="_blank">IEEE International Conference on Communications (ICC) 2026</a>, to be held in Glasgow, Scotland, UK.
    <br><br>
    In this work, we study <span class="bold-text">federated learning over wireless networks</span> in the presence of heterogeneous data across clients. Instead of relying on server-side knowledge of client-specific information, which can raise privacy concerns, we propose a <span class="bold-text">client self-selection</span> mechanism where devices independently decide whether to participate based on locally computed training losses and a common threshold broadcast by the server. To enable reliable aggregation over wireless channels, this strategy is embedded into the <span class="bold-text">type-based unsourced multiple access (TUMA)</span> framework over distributed MIMO, resulting in a fully unsourced design: the server does not need to know client identities, and no channel state information is required at either the clients or the server. 
`,
    date: 'January 19, 2026'
  },
  {
    img: './imgs/news/ISIT25_photo.jpeg',
    title: 'ISIT\'25 Presentation',
    desc: 
`
    I presented our paper <a class="intext-link" href="./research.html#tuma-cf-mimo-isit25-paper">Type-based unsourced multiple access over fading channels with cell-free massive MIMO</a> at the 
    <a class="intext-link" target="_blank" href="https://2025.ieee-isit.org/">IEEE International Symposium on Information Theory (ISIT) 2025</a> in Ann Arbor, Michigan, USA.
    <br><br>
The paper extends the type-based unsourced multiple access (TUMA) framework to fading environments with multiple antennas. By leveraging cell-free massive MIMO and spatial diversity, the proposed approach enables reliable estimation of both transmitted messages and their multiplicities, without requiring instantaneous channel state information at the devices.
<br><br>
The presentation was followed by an engaging discussion and a lively Q&A session, leading to several interesting technical exchanges and new connections.
<br><br>
You can find the slides of my presentation <a class="intext-link" href="./docs/2025-06-tuma-isit25.pdf" target="_blank">here</a>.
`,
    date: 'June 26, 2025'
  },
  {
    img: './imgs/news/tuma_cf_mimo-2.png',
    title: '2 Papers Accepted to IEEE ISIT 2025',
    desc: 
  `
  I am pleased to announce that two of our papers have been accepted for presentation at the <a class="intext-link" target="_blank" href="https://2025.ieee-isit.org/">IEEE International Symposium on Information Theory (ISIT) 2025</a> to be held in Ann Arbor, Michigan, USA.
  <br><br>
  Both papers study <span class="bold-text">type-based unsourced multiple access (TUMA)</span>, a communication framework tailored to settings with a massive number of sporadically active users. In contrast to standard unsourced multiple access, TUMA focuses on recovering both the set of transmitted messages and their multiplicities. The receiver’s objective is therefore to estimate the empirical distribution (type) of the transmitted messages, enabling efficient large-scale data aggregation.
  <br>
  <ul>
    <li>
      <a class="intext-link" href="./research.html#bound-tuma-isit25-paper">An achievability bound for type-based unsourced multiple access</a> <br>
This paper derives a novel achievability bound that characterizes the fundamental performance limits of TUMA over the Gaussian multiple-access channel, and uses it to benchmark practical schemes based on coded compressed sensing with approximate message passing.
    </li><br>
    <li>
      <a class="intext-link" href="./research.html#tuma-cf-mimo-isit25-paper">Type-based unsourced multiple access over fading channels with cell-free massive MIMO</a> <br>
This work extends TUMA to more realistic fading environments with multiple antennas by considering a cell-free massive MIMO architecture. By exploiting spatial diversity through location-based codebook partitioning and multisource approximate message passing—implemented in both centralized and distributed forms—the proposed framework enables robust and scalable estimation of both transmitted messages and their multiplicities, without requiring instantaneous CSI at the devices. I look forward to presenting this work on June 26 at ISIT 2025 in Ann Arbor, Michigan. 
</ul><br>
A high-level presentation of our work on the TUMA framework can be found <a class="intext-link" href="./docs/2025-03-tuma-scc.pdf" target="_blank">here</a>.
  
  `,
    date: 'April 11, 2025'
  },
  {
    img: './imgs/news/swe-ctw24.JPG',
    title: 'Swe-CTW\'24 Poster Presentation',
    desc: 'I presented our paper <em>Type-Based Unsourced Multiple Access</em> at Swe-CTW 2024 in Gothenburg, Sweden.',
    date: 'October 17, 2024'
  },
  {
    img: './imgs/news/spawc-24.JPG',
    title: 'SPAWC\'24 Poster Presentation',
    desc: 
    `
I presented our paper <a class="intext-link" href="./research.html#tuma-spawc24-paper">Type-Based Unsourced Multiple Access</a> at the <a class="intext-link" href="https://www.spawc2024.signalprocessingsociety.org/spawc2024.org/index.html" target="_blank">IEEE Workshop on Signal Processing Advances in Wireless Communications (SPAWC) 2024</a> in Lucca, Italy.
<br><br>
In this work, we extend the classical type-based multiple access framework to the unsourced setting, where a large number of uncoordinated devices report quantized measurements of a physical or digital process over a shared channel. The receiver aims to estimate the type of the reported states—the set of states and their multiplicities—and we show that this can be done efficiently using approximate message passing. Using a multi-target tracking example, we also study how to choose the quantization resolution to balance communication errors and quantization distortion.
<br><br>
This was my first conference attendance, and it was a great experience with many engaging discussions and valuable new connections.
<br><br>
You can find the poster of my presentation <a class="intext-link" href="./docs/tuma_poster_spawc24.pdf" target="_blank">here</a>. 
`,
    date: 'September 14, 2024'
  },
  {
    img: './imgs/news/epfl-grad-photo.jpg',
    title: 'MSc Graduation Ceremony at EPFL',
    desc: 'I successfully completed my Master\'s degree in Communication Systems at EPFL with the Magistrale ceremony.',
    date: 'October 7, 2023'
  },
  {
    img: './imgs/news/chalmers-photo.png',
    title: 'Started PhD at Chalmers',
    desc: 'I started my PhD studies at Chalmers University of Technology in the Communication Systems research group, under the supervision of Prof. Giuseppe Durisi and Prof. Erik G. Ström.',
    date: 'October 3, 2023'
  },
  {
    img: './imgs/news/epfl-photo-2.jpg',
    title: 'Master Thesis Defense',
    desc: 'I successfully defended my Master\'s thesis titled <em></em> at EPFL, receiving positive feedback from the committee.',
    date: 'June 23, 2023'
  }
];