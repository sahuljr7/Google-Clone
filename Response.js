export default {
  kind: "customsearch#search",
  url: {
    type: "application/json",
    template:
      "https://www.googleapis.com/customsearch/v1?q={searchTerms}&num={count?}&start={startIndex?}&lr={language?}&safe={safe?}&cx={cx?}&sort={sort?}&filter={filter?}&gl={gl?}&cr={cr?}&googlehost={googleHost?}&c2coff={disableCnTwTranslation?}&hq={hq?}&hl={hl?}&siteSearch={siteSearch?}&siteSearchFilter={siteSearchFilter?}&exactTerms={exactTerms?}&excludeTerms={excludeTerms?}&linkSite={linkSite?}&orTerms={orTerms?}&relatedSite={relatedSite?}&dateRestrict={dateRestrict?}&lowRange={lowRange?}&highRange={highRange?}&searchType={searchType}&fileType={fileType?}&rights={rights?}&imgSize={imgSize?}&imgType={imgType?}&imgColorType={imgColorType?}&imgDominantColor={imgDominantColor?}&alt=json",
  },
  queries: {
    request: [
      {
        title: "Google Custom Search - testing 1234",
        totalResults: "53500",
        searchTerms: "testing 1234",
        count: 10,
        startIndex: 1,
        inputEncoding: "utf8",
        outputEncoding: "utf8",
        safe: "off",
        cx: "d80bb1bf8d40367b4",
      },
    ],
    nextPage: [
      {
        title: "Google Custom Search - testing 1234",
        totalResults: "53500",
        searchTerms: "testing 1234",
        count: 10,
        startIndex: 11,
        inputEncoding: "utf8",
        outputEncoding: "utf8",
        safe: "off",
        cx: "d80bb1bf8d40367b4",
      },
    ],
  },
  context: {
    title: "Google",
  },
  searchInformation: {
    searchTime: 0.44041,
    formattedSearchTime: "0.44",
    totalResults: "53500",
    formattedTotalResults: "53,500",
  },
  items: [
    {
      kind: "customsearch#result",
      title: "Test 1234",
      htmlTitle: "<b>Test 1234</b>",
      link:
        "https://www.google.com/podcasts?feed=aHR0cHM6Ly9hbmNob3IuZm0vcy8xMmFiMjgxMC9wb2RjYXN0L3Jzcw==",
      displayLink: "www.google.com",
      snippet:
        "Test 1234. Subscribe. Visit website. Just testing. Available episodes. Feb 25, \n2020. Test. Just a test --- This episode is sponsored by · Anchor: The easiest ...",
      htmlSnippet:
        "<b>Test 1234</b>. Subscribe. Visit website. Just testing. Available episodes. Feb 25, <br>\n2020. Test. Just a test --- This episode is sponsored by · Anchor: The easiest&nbsp;...",
      cacheId: "BybAj-4sqMcJ",
      formattedUrl: "https://www.google.com/podcasts?feed...",
      htmlFormattedUrl: "https://www.google.com/podcasts?feed...",
      pagemap: {
        metatags: [
          {
            "og:image":
              "https://encrypted-tbn3.gstatic.com/images?q=tbn:ANd9GcRhw167G7_xGLPMia8TrL1NfCi3lVIxCyRa-VK1z61n1JB5lAQ",
            "apple-itunes-app":
              "app-id=1398000105, affiliate-data=ct=podcastsSmartBannerShow001&pt=9008, app-argument=https://podcasts.google.com/feed/aHR0cHM6Ly9hbmNob3IuZm0vcy8xMmFiMjgxMC9wb2RjYXN0L3Jzcw",
            "og:type": "music.radio_station",
            "twitter:card": "summary",
            "twitter:title": "Test 1234",
            "og:site_name": "Google Podcasts",
            "og:title": "Test 1234",
            "music:creator": "Test 1234",
            title: "Test 1234",
            "og:description": "Just testing",
            "twitter:creator": "Test 1234",
            "article:author": "Test 1234",
            "twitter:image":
              "https://encrypted-tbn3.gstatic.com/images?q=tbn:ANd9GcRhw167G7_xGLPMia8TrL1NfCi3lVIxCyRa-VK1z61n1JB5lAQ",
            referrer: "origin",
            viewport:
              "width=device-width,initial-scale=1,minimum-scale=1,maximum-scale=1,user-scalable=no,minimal-ui",
            "og:url":
              "https://podcasts.google.com/feed/aHR0cHM6Ly9hbmNob3IuZm0vcy8xMmFiMjgxMC9wb2RjYXN0L3Jzcw",
          },
        ],
        cse_image: [
          {
            src:
              "https://encrypted-tbn3.gstatic.com/images?q=tbn:ANd9GcRhw167G7_xGLPMia8TrL1NfCi3lVIxCyRa-VK1z61n1JB5lAQ",
          },
        ],
      },
    },
    {
      kind: "customsearch#result",
      title: "Google",
      htmlTitle: "Google",
      link: "https://www.google.com/",
      displayLink: "www.google.com",
      snippet:
        "Search the world's information, including webpages, images, videos and more. \nGoogle has many special features to help you find exactly what you're looking ...",
      htmlSnippet:
        "Search the world&#39;s information, including webpages, images, videos and more. <br>\nGoogle has many special features to help you find exactly what you&#39;re looking&nbsp;...",
      cacheId: "y14FcUQOGl4J",
      formattedUrl: "https://www.google.com/",
      htmlFormattedUrl: "https://www.google.com/",
      pagemap: {
        cse_thumbnail: [
          {
            src:
              "https://encrypted-tbn2.gstatic.com/images?q=tbn:ANd9GcT3X9ZpkcNrr2kAcGZuXPZTNiK1oeTXhRMCZ1UGxNLf-an4du0eriX01mc",
            width: "320",
            height: "112",
          },
        ],
        metatags: [
          {
            referrer: "origin",
            viewport: "width=device-width,minimum-scale=1.0",
            google: "notranslate",
            "format-detection": "telephone=no",
          },
        ],
        cse_image: [
          {
            src:
              "https://www.google.com/images/branding/googlelogo/2x/googlelogo_color_160x56dp.png",
          },
        ],
      },
    },
    {
      kind: "customsearch#result",
      title: "Google Maps",
      htmlTitle: "Google Maps",
      link: "https://www.google.com/maps/contrib/116650563131320632525/reviews",
      displayLink: "www.google.com",
      snippet:
        "Photo of BrightStar Care - COVID Testing Site. BrightStar ... Jimira Lake ran the \ntests for me. She was ... 1234 Panadero Ave, La Veta, CO 81055, United States -.",
      htmlSnippet:
        "Photo of BrightStar Care - COVID <b>Testing</b> Site. BrightStar ... Jimira Lake ran the <br>\n<b>tests</b> for me. She was ... <b>1234</b> Panadero Ave, La Veta, CO 81055, United States -.",
      cacheId: "dwQWt_TVn2IJ",
      formattedUrl:
        "https://www.google.com/maps/contrib/116650563131320632525/reviews",
      htmlFormattedUrl:
        "https://www.google.com/maps/contrib/116650563131320632525/reviews",
      pagemap: {
        cse_thumbnail: [
          {
            src:
              "https://encrypted-tbn1.gstatic.com/images?q=tbn:ANd9GcS6AKPxcKCbFW7eGHGdTjCiqmdQQ5IgvK--21nWN8kIjF239s-qTIZ3Jk8T",
            width: "310",
            height: "163",
          },
        ],
        metatags: [
          {
            referrer: "origin",
            "og:image":
              "https://maps.gstatic.com/tactile/geoprofile/sharing/lg_5.png",
            "og:image:width": "256",
            "twitter:card": "summary",
            "og:site_name": "Contributions by Joshua Essary",
            viewport:
              "initial-scale=1.0, maximum-scale=1.0, minimum-scale=1.0, user-scalable=no",
            "og:title": "Contributions by Joshua Essary",
            "og:image:height": "256",
            google: "notranslate",
            "og:description": "Level 6 Local Guide | 3,034 Points",
          },
        ],
        place: [
          {
            image:
              "https://maps.gstatic.com/tactile/geoprofile/sharing/lg_5.png",
            name: "Contributions by Joshua Essary",
            description: "Level 6 Local Guide | 3,034 Points",
          },
        ],
        cse_image: [
          {
            src: "https://maps.gstatic.com/tactile/geoprofile/sharing/lg_5.png",
          },
        ],
      },
    },
    {
      kind: "customsearch#result",
      title:
        "EP2469242A2 - A method for similitude testing of a turbomachine ...",
      htmlTitle:
        "EP2469242A2 - A method for similitude <b>testing</b> of a turbomachine ...",
      link: "https://www.google.com/patents/EP2469242A2?cl=en",
      displayLink: "www.google.com",
      snippet:
        "For example, HFC-245ca and HFO-1234yf are considered to be flammable \ngases, which is clearly a suboptimal characteristic for a test gas to be used in a ...",
      htmlSnippet:
        "For example, HFC-245ca and HFO-<b>1234yf</b> are considered to be flammable <br>\ngases, which is clearly a suboptimal characteristic for a <b>test</b> gas to be used in a&nbsp;...",
      formattedUrl: "https://www.google.com/patents/EP2469242A2?cl=en",
      htmlFormattedUrl: "https://www.google.com/patents/EP2469242A2?cl=en",
      pagemap: {
        cse_thumbnail: [
          {
            src:
              "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTFyk2ouf0S15dzDRe6Occso21Kv038TNHxRSW6vYmBW3djIjCthk0JFgU",
            width: "140",
            height: "120",
          },
        ],
        metatags: [
          {
            referrer: "origin-when-crossorigin",
            citation_patent_application_number: "EP:11192714A",
            "dc.description":
              "A method and system for testing a compressor are described. To perform a similitude test, a substitute for HFC-134a is selected. The substitute test gas is used, either in purity or in a mixture with other gases, to test the compressor in accordance with ASME PTC-10 tests. The substitute test gas can, for example, have a molecular weight between 40g/gmol and 150 g/gmol, a global warming potential (GWP) of less than 700, and a gas specific heat ratio of between 1 and 1.5, one of another set of predetermined characteristics, or can be selected from a group including of HFC-245ca (also known as R-245 or by its chemical name 1,1,2,2,3-pentafluoropentane), HFO-1234yf (also known by its chemical name 2,3,3,3-Tetrafluoroprop-1-ene), HFO-1234ZE (also known by its chemical name trans-1,3,3,3-Tetrafluoroprop-1-ene) and DR-11.",
            citation_patent_publication_number: "EP:2469242:A2",
            "dc.type": "patent",
            citation_reference: "None",
            viewport: "width=device-width, initial-scale=1",
            "dc.title":
              "A method for similitude testing of a turbomachine and corresponding test sytem",
            citation_pdf_url:
              "https://patentimages.storage.googleapis.com/e0/ef/7a/f4bfa64cdab6ac/EP2469242A2.pdf",
            "dc.date": "2011-12-09",
            "dc.contributor": "Gianni Iannuzzi",
          },
        ],
        cse_image: [
          {
            src:
              "https://patentimages.storage.googleapis.com/bf/41/98/327a34764da68d/imgf0003.png",
          },
        ],
      },
    },
    {
      kind: "customsearch#result",
      title:
        "US7881452B1 - Method for testing a local number portability (LNP ...",
      htmlTitle:
        "US7881452B1 - Method for <b>testing</b> a local number portability (LNP ...",
      link: "https://google.com/patents/US7881452",
      displayLink: "google.com",
      snippet:
        "The LNP test telephone call is targeted to the LNP-ported telephone number ... of \nthe telephone 109 would be 913-555-1234, reflecting the local switch that is ...",
      htmlSnippet:
        "The LNP <b>test</b> telephone call is targeted to the LNP-ported telephone number ... of <br>\nthe telephone 109 would be 913-555-<b>1234</b>, reflecting the local switch that is&nbsp;...",
      formattedUrl: "https://google.com/patents/US7881452",
      htmlFormattedUrl: "https://google.com/patents/US7881452",
      pagemap: {
        metatags: [
          {
            referrer: "origin-when-crossorigin",
            citation_patent_application_number: "US:11/384,597",
            citation_patent_number: "US:7881452",
            "dc.description":
              "A method for testing a Local Number Portability (LNP) ported telephone number is provided according to the invention. The method includes in a first switch generating a LNP test telephone call to a second switch. The LNP test telephone call is targeted to the LNP-ported telephone number associated with the first switch. The method further includes indicating that the LNP-ported telephone number is being correctly routed in the second switch if the first switch receives the LNP test telephone call back from the second switch. The method further includes indicating that the LNP-ported telephone number is being incorrectly routed in the second switch if the first switch does not receive the LNP test telephone call back from the second switch.",
            "dc.type": "patent",
            viewport: "width=device-width, initial-scale=1",
            "dc.relation": "US:6128377",
            "dc.title":
              "Method for testing a local number portability (LNP) ported telephone number",
            citation_pdf_url:
              "https://patentimages.storage.googleapis.com/3d/cf/ad/05509aaaaf65bb/US7881452B1.pdf",
            "dc.date": "2006-03-20",
            "dc.contributor": "Robert B. Dianda",
          },
        ],
      },
    },
    {
      kind: "customsearch#result",
      title: "CN103154105B - Blowing agents, foamable compositions and ...",
      htmlTitle: "CN103154105B - Blowing agents, foamable compositions and ...",
      link: "https://www.google.com/patents/CN103154105B?cl=en",
      displayLink: "www.google.com",
      snippet:
        "The result of this test shows that 1234ze (E) to be easily dissolved in the logistics \nof high pressure polyvalent alcohol and can be processed well by spray gun ...",
      htmlSnippet:
        "The result of this <b>test</b> shows that <b>1234ze</b> (E) to be easily dissolved in the logistics <br>\nof high pressure polyvalent alcohol and can be processed well by spray gun&nbsp;...",
      formattedUrl: "https://www.google.com/patents/CN103154105B?cl=en",
      htmlFormattedUrl: "https://www.google.com/patents/CN103154105B?cl=en",
      pagemap: {
        metatags: [
          {
            referrer: "origin-when-crossorigin",
            citation_patent_application_number: "CN:201180049962.0A",
            citation_patent_number: "CN:103154105:B",
            "dc.description":
              "A method of forming foam comprises: (a) providing at least a first relatively high pressure liquid comprising a first reactive component; (b) introducing into said relatively high pressure stream a liquid blowing agent composition comprising 1,3,3,3-tetrafluoropropene (HFO-1234ze) and/or HFCO-1233zd to produce a second stream at relatively high pressure and containing said blowing agent; and (c) mixing at least a portion of said third stream with a fourth stream containing a component reactive with said first component to produce a mixed reactive stream.",
            "dc.type": "patent",
            viewport: "width=device-width, initial-scale=1",
            "dc.relation": "CN:101652413:A",
            "dc.title": "Blowing agents, foamable compositions and foams",
            citation_pdf_url:
              "https://patentimages.storage.googleapis.com/b6/aa/44/fd1a4ce78fed95/CN103154105B.pdf",
            "dc.date": "2011-08-16",
            "dc.contributor": "M.C.博丹",
          },
        ],
      },
    },
    {
      kind: "customsearch#result",
      title:
        "CN1501634A - A method for testing intelligent service performance ...",
      htmlTitle:
        "CN1501634A - A method for <b>testing</b> intelligent service performance ...",
      link: "https://www.google.com/patents/CN1501634A?cl=en",
      displayLink: "www.google.com",
      snippet:
        'The method by the invention simplifies the test networking mode and decreases \nthe hardware ... 10) the definition password adopts fixed value " 1234 ".',
      htmlSnippet:
        "The method by the invention simplifies the <b>test</b> networking mode and decreases <br>\nthe hardware ... 10) the definition password adopts fixed value &quot; <b>1234</b> &quot;.",
      formattedUrl: "https://www.google.com/patents/CN1501634A?cl=en",
      htmlFormattedUrl: "https://www.google.com/patents/CN1501634A?cl=en",
      pagemap: {
        metatags: [
          {
            referrer: "origin-when-crossorigin",
            citation_patent_application_number: "CN:A021501955A",
            "dc.description":
              "The invention relates to an intelligent method for testing business performance which comprises, setting call data production rule in software and generating call data according to the call data generation rule, initiating heavy loads of business intelligent calls to the business control module through prepared call data and call flow path corresponding to the call data, automatically completion of information interaction between calling and the business control module, counting the number of calls within time in unit by the business control module. The method by the invention simplifies the test networking mode and decreases the hardware dependency, thus making the constructed call flow path and call data preparation more simple.",
            citation_patent_publication_number: "CN:1501634:A",
            "dc.type": "patent",
            viewport: "width=device-width, initial-scale=1",
            "dc.title": "A method for testing intelligent service performance",
            citation_pdf_url:
              "https://patentimages.storage.googleapis.com/80/ff/f5/5d18fc46dfc690/CN1501634A.pdf",
            "dc.date": "2002-11-17",
            "dc.contributor": "郑育红",
          },
        ],
      },
    },
    {
      kind: "customsearch#result",
      title: "H04L 12 - Data switching networks - Patents Sitemap",
      htmlTitle: "H04L 12 - Data switching networks - Patents Sitemap",
      link:
        "http://www.google.com/patents/sitemap/en/Sitemap/H04/H04L/H04L_12_1234.html",
      displayLink: "www.google.com",
      snippet:
        "03/24/2011, WO2011034923A2 Method and system for testing multiple data \npacket transceivers together during a predetermined time interval. 03/24/2011 ...",
      htmlSnippet:
        "03/24/2011, WO2011034923A2 Method and system for <b>testing</b> multiple data <br>\npacket transceivers together during a predetermined time interval. 03/24/2011&nbsp;...",
      formattedUrl:
        "www.google.com/patents/sitemap/en/Sitemap/H04/.../H04L_12_1234.html",
      htmlFormattedUrl:
        "www.google.com/patents/sitemap/en/Sitemap/H04/.../H04L_12_<b>1234</b>.html",
    },
    {
      kind: "customsearch#result",
      title:
        "US9302962B2 - Dehydrofluorination of 245fa to 1234ze - Google ...",
      htmlTitle:
        "US9302962B2 - Dehydrofluorination of 245fa to <b>1234ze</b> - Google ...",
      link: "https://www.google.com/patents/US9302962",
      displayLink: "www.google.com",
      snippet:
        "Feb 18, 2016 ... 2006/0106263 A1 discloses the production of HFC-1234yf by a ... or testing of \nembodiments of the present invention, suitable methods and ...",
      htmlSnippet:
        "Feb 18, 2016 <b>...</b> 2006/0106263 A1 discloses the production of HFC-<b>1234yf</b> by a ... or <b>testing</b> of <br>\nembodiments of the present invention, suitable methods and&nbsp;...",
      formattedUrl: "https://www.google.com/patents/US9302962",
      htmlFormattedUrl: "https://www.google.com/patents/US9302962",
      pagemap: {
        metatags: [
          {
            referrer: "origin-when-crossorigin",
            citation_patent_application_number: "US:14/819,807",
            citation_patent_number: "US:9302962",
            "dc.description":
              "A method of producing a fluoropropane of formula CF 3 CH═CHF, comprising contacting a mixture of 1,1,1,3,3-pentafluoropropane and Z-1,3,3,3-tetrafluoropropene in the gas phase with a catalyst comprising at least one catalyst selected from the group consisting of fluorinated Cr 2 O 3  or Cr/Ni on fluoride alumina, in the presence of an oxygen containing gas, to form a mixture comprising Z-1,3,3,3-tetrafluoropropane, E-1,3,3,3,-tetrafluoropropene, hydrogen fluoride, and optionally unreacted 1,1,1,3,3-pentafluoropropane, separating the E-1,3,3,3-tetrafluoropropene from the Z-isomer and any unreacted 1,1,1,3,3-pentafluoropropane, if present, and recovering said E-1,3,3,3-tetrafluoropropene.",
            "dc.type": "patent",
            viewport: "width=device-width, initial-scale=1",
            "dc.relation": "US:3413363",
            "dc.title": "Dehydrofluorination of 245fa to 1234ze",
            citation_pdf_url:
              "https://patentimages.storage.googleapis.com/23/4a/de/a7983afb3e0719/US9302962.pdf",
            "dc.date": "2015-08-06",
            "dc.contributor": "Sheng Peng",
          },
        ],
      },
    },
    {
      kind: "customsearch#result",
      title: "US20160046546A1 - Dehydrofluorination of 245fa to 1234ze ...",
      htmlTitle:
        "US20160046546A1 - Dehydrofluorination of 245fa to <b>1234ze</b> ...",
      link: "https://www.google.com/patents/US20160046546",
      displayLink: "www.google.com",
      snippet:
        "2006/0106263 A1 discloses the production of HFC-1234yf by a catalytic ... the \npractice or testing of embodiments of the present invention, suitable methods and\n ...",
      htmlSnippet:
        "2006/0106263 A1 discloses the production of HFC-<b>1234yf</b> by a catalytic ... the <br>\npractice or <b>testing</b> of embodiments of the present invention, suitable methods and<br>\n&nbsp;...",
      formattedUrl: "https://www.google.com/patents/US20160046546",
      htmlFormattedUrl: "https://www.google.com/patents/US20160046546",
      pagemap: {
        metatags: [
          {
            referrer: "origin-when-crossorigin",
            citation_patent_application_number: "US:14/819,807",
            "dc.description":
              "A method of producing a fluoropropane of formula CF 3 CH═CHF, comprising contacting a mixture of 1,1,1,3,3-pentafluoropropane and Z-1,3,3,3-tetrafluoropropene in the gas phase with a catalyst comprising at least one catalyst selected from the group consisting of fluorinated Cr 2 O 3  or Cr/Ni on fluoride alumina, in the presence of an oxygen containing gas, to form a mixture comprising Z-1,3,3,3-tetrafluoropropane, E-1,3,3,3,-tetrafluoropropene, hydrogen fluoride, and optionally unreacted 1,1,1,3,3-pentafluoropropane, separating the E-1,3,3,3-tetrafluoropropene from the Z-isomer and any unreacted 1,1,1,3,3-pentafluoropropane, if present, and recovering said E-1,3,3,3-tetrafluoropropene.",
            citation_patent_publication_number: "US:20160046546:A1",
            "dc.type": "patent",
            viewport: "width=device-width, initial-scale=1",
            "dc.title": "Dehydrofluorination of 245fa to 1234ze",
            citation_pdf_url:
              "https://patentimages.storage.googleapis.com/1e/62/d0/dcdedaf0d60aa8/US20160046546A1.pdf",
            "dc.date": "2015-08-06",
            "dc.contributor": "Sheng Peng",
          },
        ],
      },
    },
  ],
};
