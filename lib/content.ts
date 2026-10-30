export type MenuItem =
  | string
  | {
      label: string;
      img?: string; // путь в /public/menu/...
      alt?: string; // alt-текст (SEO/доступность)
      note?: string; // мелкая подпись (опционально)
    };
export type MenuSection = { title: string; items: MenuItem[] };
export type MenuPackage = {
  slug: "40gel" | "70gel" | "85gel";
  name: string;
  price: number;
  perPersonLabel: string;
  highlights: string[];
  sections: MenuSection[];
};

export const packages: MenuPackage[] = [
  {
    slug: "85gel",
    name: "95 ₾ პაკეტი",
    price: 95,
    perPersonLabel: "ფასი ერთ სტუმარზე",
    highlights: [
      "ცხელი კერძები",
      "სალათები და ცივი კერძები",
      "დესერტი",
      "სასმელები",
    ],
    sections: [
      {
        title: "ძირითადი კერძები",
        items: [
          { label: "გოჭი", img: "/menu/gochi.jpg", alt: "გოჭი" },
          {
            label: "ოსტრი ან ქაბაბი",
            img: "/menu/qababi.jpg",
            alt: "ოსტრი ან ქაბაბი",
          },
          { label: "ხაშლამა", img: "/menu/xashlama.jpg", alt: "ხაშლამა" },
          {
            label: "ქათამი ბაჟეში",
            img: "/menu/baje.webp",
            alt: "ქათამი ბაჟეში",
          },
          {
            label: "წიწილა ტაბაკა",
            img: "/menu/tabaka.jpg",
            alt: "წიწილა ტაბაკა",
          },
          {
            label: "სოკო სულგუნით",
            img: "/menu/soko.jpg",
            alt: "სოკო სულგუნით",
          },
          { label: "ღორის მწვადი", img: "/menu/mwv.webp", alt: "ღორის მწვადი" },
          {
            label: "მწვადი ხბოს ან ასიტრინის",
            img: "/menu/mwvadixbo.jpg",
            alt: "მწვადი ხბოს ან ასიტრინის",
          },
          { label: "კუჭმაჭი", img: "/menu/kuchmachi.jpg", alt: "კუჭმაჭი" },
          { label: "კუპატი", img: "/menu/kupati.jpg", alt: "კუპატი" },
          {
            label: "ხორციანი რულეტი",
            img: "/menu/ruleti.jpeg",
            alt: "ხორციანი რულეტი",
          },
          { label: "მწყერი", img: "/menu/mwyeri.jpg", alt: "მწყერი" },
        ],
      },
      {
        title: "ცივი კერძები",
        items: [
          {
            label: "ყველის ასორტი (სულგუნი, შებოლილი სულგუნი, იმერული ყველი)",
            img: "/menu/sulguni.jpg",
            alt: "ყველის ასორტი",
          },
          {
            label: "ფხალის ასორტი (ბადრიჯანი, ბულგარული, ისპანახი)",
            img: "/menu/fxali.webp",
            alt: "ფხალის ასორტი",
          },
          {
            label: "გებჟალია",
            img: "/menu/gebjalia.jpg",
            alt: "გებჟალია",
          },

          {
            label: "მჟავის ასორტი",
            img: "/menu/mjave.webp",
            alt: "მჟავის ასორტი",
          },

          { label: "ზეთისხილი", img: "/menu/zetisxili.jpg", alt: "ზეთისხილი" },
        ],
      },
      {
        title: "თევზეული",
        items: [
          { label: "კალმახი", img: "/menu/kalmaxi.jpg", alt: "კალმახი" },
          { label: "სათალი", img: "/menu/satali.jpg", alt: "სათალი" },
          { label: "ხიზილალა", img: "/menu/xizilala.jpg", alt: "ხიზილალა" },
        ],
      },
      {
        title: "სალათები",
        items: [
          {
            label: "ქათმის სალათი",
            img: "/menu/qatmissalati.jpg",
            alt: "ქათმის სალათი",
          },
          {
            label: "ცეზარის სალათი",
            img: "/menu/cezari.jpg",
            alt: "ცეზარის სალათი",
          },
          {
            label: "კიტრი-პომიდორი",
            img: "/menu/kitripomidori.webp",
            alt: "კიტრი-პომიდორი",
          },
          {
            label: "მწვანილის თაიგული",
            img: "/menu/mwvanili.jpg",
            alt: "მწვანილის თაიგული",
          },
        ],
      },
      {
        title: "დესერტი",
        items: [
          { label: "ნამცხვარი", img: "/menu/namcxvari.jpg", alt: "ნამცხვარი" },
          { label: "ჟელატინი", img: "/menu/jele.jpg", alt: "ჟელატინი" },
          {
            label: "ქიშმიში და მიწისთხილი",
            img: "/menu/txili.webp",
            alt: "ქიშმიში და მიწისთხილი",
          },
          {
            label: "ნაყინი ან მაწონი (თაფლითა და თხილით)",
            img: "/menu/nayini.jpeg",
            alt: "ნაყინი ან მაწონი",
          },
        ],
      },
      {
        title: "ცომეული",
        items: [
          { label: "ხაჭაპური", img: "/menu/xachapuri.jpg", alt: "ხაჭაპური" },
          { label: "აჩმა", img: "/menu/achma.jpg", alt: "აჩმა" },
          {
            label: "ხორციანი ბლინი",
            img: "/menu/blini.jpg",
            alt: "ხორციანი ბლინი",
          },
          { label: "ღომი", img: "/menu/ghomi.jpg", alt: "ღომი" },
          { label: "ელარჯი", img: "/menu/elarji.jpg", alt: "ელარჯი" },
          { label: "მჭადი", img: "/menu/mchadi.webp", alt: "მჭადი" },
          { label: "შოთის პური", img: "/menu/shoti.jpg", alt: "შოთის პური" },
        ],
      },
      {
        title: "საწებლები",
        items: [
          {
            label: "პომიდვრის საწებელი",
            img: "/menu/sawebeli.jpg",
            alt: "პომიდვრის საწებელი",
          },
          { label: "ტყემალი", img: "/menu/tyemali.jpg", alt: "ტყემალი" },
        ],
      },
      {
        title: "ხილი",
        items: [
          {
            label: "დაჭრილი ხილი (სეზონური)",
            img: "/menu/xili.jpg",
            alt: "დაჭრილი ხილი (სეზონური)",
          },
        ],
      },
      {
        title: "სასმელები",
        items: [
          {
            label: "ლიმონათი (ზედაზენი, ზანდუკელი)",
            img: "/menu/limonati.png",
            alt: "ლიმონათი",
          },
          { label: "ნაბეღლავი", img: "/menu/nabeghlavi.jpg", alt: "ნაბეღლავი" },
          { label: "ფანტა", img: "/menu/fanta.jpg", alt: "ფანტა" },
          { label: "კოკა-კოლა", img: "/menu/kola.jpg", alt: "კოკა-კოლა" },
          { label: "წყალი", img: "/menu/wyali.jpg", alt: "წყალი" },
          { label: "ყავა და ჩაი", img: "/menu/yava.jpg", alt: "ყავა და ჩაი" },
        ],
      },
    ],
  },
  {
    slug: "70gel",
    name: "80 ₾ პაკეტი",
    price: 80,
    perPersonLabel: "ფასი ერთ სტუმარზე",
    highlights: [
      "ცხელი კერძები",
      "სალათები და ცივი კერძები",
      "დესერტი",
      "სასმელები",
    ],
    sections: [
      {
        title: "ძირითადი კერძები",
        items: [
          { label: "გოჭი", img: "/menu/gochi.jpg", alt: "გოჭი" },
          { label: "ქათამი", img: "/menu/qatami.webp", alt: "ქათამი" },
          {
            label: "ქათამი ბაჟეში",
            img: "/menu/baje.webp",
            alt: "ქათამი ბაჟეში",
          },
          { label: "ხაშლამა", img: "/menu/xashlama.jpg", alt: "ხაშლამა" },
          { label: "ღორის მწვადი", img: "/menu/mwv.webp", alt: "ღორის მწვადი" },
          { label: "კუჭმაჭი", img: "/menu/kuchmachi.jpg", alt: "კუჭმაჭი" },
          {
            label: "სოკო სულგუნით",
            img: "/menu/soko.jpg",
            alt: "სოკო სულგუნით",
          },
        ],
      },
      {
        title: "ცივი კერძები",
        items: [
          { label: "ხიზილალა", img: "/menu/xizilala.jpg", alt: "ხიზილალა" },
          {
            label: "ყველის ასორტი (სულგუნი, იმერული ყველი)",
            img: "/menu/sulguni.jpg",
            alt: "ყველის ასორტი",
          },
          {
            label: "ფხალის ასორტი (ბადრიჯანი, ბულგარული, ისპანახი)",
            img: "/menu/fxali.webp",
            alt: "ფხალის ასორტი",
          },
          {
            label: "ბოსტნეულის თაიგული",
            img: "/menu/bostneuli.webp",
            alt: "ბოსტნეულის თაიგული",
          },
          {
            label: "კიტრი-პომიდორი",
            img: "/menu/kitripomidori.webp",
            alt: "კიტრი-პომიდორი",
          },
          {
            label: "მჟავის ასორტი",
            img: "/menu/mjave.webp",
            alt: "მჟავის ასორტი",
          },
          { label: "ზეთისხილი", img: "/menu/zetisxili.jpg", alt: "ზეთისხილი" },
        ],
      },
      {
        title: "სალათები",
        items: [
          {
            label: "ქათმის სალათი",
            img: "/menu/qatmissalati.jpg",
            alt: "ქათმის სალათი",
          },
          {
            label: "ვინეგრეტი",
            img: "/menu/vinegreti.jpg",
            alt: "ცეზარის სალათი",
          }, // новый файл
        ],
      },
      {
        title: "ცომეული",
        items: [
          { label: "ხაჭაპური", img: "/menu/xachapuri.jpg", alt: "ხაჭაპური" },
          { label: "აჩმა", img: "/menu/achma.jpg", alt: "აჩმა" },
          {
            label: "ხორციანი ბლინი",
            img: "/menu/blini.jpg",
            alt: "ხორციანი ბლინი",
          },
          { label: "ღომი", img: "/menu/ghomi.jpg", alt: "ღომი" },
          { label: "ელარჯი", img: "/menu/elarji.jpg", alt: "ელარჯი" },
          { label: "მჭადი", img: "/menu/mchadi.webp", alt: "მჭადი" },
          { label: "შოთის პური", img: "/menu/shoti.jpg", alt: "შოთის პური" },
        ],
      },
      {
        title: "საწებლები",
        items: [
          { label: "ტყემალი", img: "/menu/tyemali.jpg", alt: "ტყემალი" },
          {
            label: "პომიდვრის საწებელი",
            img: "/menu/sawebeli.jpg",
            alt: "პომიდვრის საწებელი",
          },
        ],
      },
      {
        title: "ხილი",
        items: [
          {
            label: "დაჭრილი ხილი (სეზონური)",
            img: "/menu/xili.jpg",
            alt: "დაჭრილი ხილი (სეზონური)",
          },
        ],
      },
      {
        title: "დესერტი",
        items: [
          { label: "ნამცხვარი", img: "/menu/namcxvari.jpg", alt: "ნამცხვარი" },
          {
            label: "ქიშმიში და მიწისთხილი",
            img: "/menu/txili.webp",
            alt: "ქიშმიში და მიწისთხილი",
          },
        ],
      },
      {
        title: "სასმელები",
        items: [
          {
            label: "ლიმონათი (ზედაზენი, ზანდუკელი)",
            img: "/menu/limonati.png",
            alt: "ლიმონათი",
          },
          { label: "ნაბეღლავი", img: "/menu/nabeghlavi.jpg", alt: "ნაბეღლავი" },
          { label: "ფანტა", img: "/menu/fanta.jpg", alt: "ფანტა" },
          { label: "კოკა-კოლა", img: "/menu/kola.jpg", alt: "კოკა-კოლა" },
          { label: "წყალი", img: "/menu/wyali.jpg", alt: "წყალი" },
          { label: "ყავა და ჩაი", img: "/menu/yava.jpg", alt: "ყავა და ჩაი" },
        ],
      },
    ],
  },
  {
    slug: "40gel",
    name: "40 ₾ პაკეტი",
    price: 40,
    perPersonLabel: "ფასი ერთ სტუმარზე",
    highlights: ["ცხელი კერძები", "სალათები და ცივი კერძები", "სასმელები"],
    sections: [
      {
        title: "ძირითადი კერძები",
        items: [
          {
            label: "შემწვარი თევზი (ორაგული)",
            img: "/menu/oragulishemwvari.jpeg",
            alt: "შემწვარი თევზი",
          },
          {
            label: "თევზი ბაჟეში (გენერალი)",
            img: "/menu/tevzibajeshi.jpg",
            alt: "თევზი ბაჟეში",
          },
          {
            label: "თევზი ქინძმარში (ლოქო)",
            img: "/menu/tevziqindzmarshi.jpg",
            alt: "თევზი ქინძმარში",
          },

          {
            label: "მოლესილი ლობიო",
            img: "/menu/lobio.jpg",
            alt: "მოლესილი ლობიო",
          },
          {
            label: "ფლავი",
            img: "/menu/flavi.jpg",
            alt: "ფლავი",
          },
          {
            label: "სოკო კეცზე",
            img: "/menu/soko.jpg",
            alt: "სოკო პილპილით",
          },
          {
            label: "სოკო პიურეთი",
            img: "/menu/soko.jpg",
            alt: "სოკო პილპილით",
          },
        ],
      },

      {
        title: "ცივი კერძები",
        items: [
          {
            label: "ბადრიჯანი ნიგვზით",
            img: "/menu/badrijani.jpg",
            alt: "ბადრიჯანი ნიგვზით",
          },
          {
            label: "ბულგარული წიწაკა ნიგვზით",
            img: "/menu/bulgaruli.jpg",
            alt: "ბულგარული წიწაკა ნიგვზით",
          },
          {
            label: "ხიზილალა",
            img: "/menu/xizilala.jpg",
            alt: "ხიზილალა",
          },
          {
            label: "კორკოტი",
            img: "/menu/korkoti.jpg",
            alt: "კორკოტი",
          },
        ],
      },
      {
        title: "სალათები",
        items: [
          { label: "ვინეგრეტი", img: "/menu/vinegreti.jpg", alt: "ვინეგრეტი" }, // новый файл
          {
            label: "კიტრი-პომიდორი",
            img: "/menu/kitripomidori.webp",
            alt: "კიტრი-პომიდორი",
          },
          {
            label: "კომბოსტოს სალათი",
            img: "/menu/kombostossalati.jpg",
            alt: "კომბოსტოს სალათი",
          }, // новый файл
          {
            label: "მწვანილის ასორტი",
            img: "/menu/mwvanili.jpg",
            alt: "მწვანილის ასორტი",
          },
          {
            label: "მჟავის ასორტი",
            img: "/menu/mjave.webp",
            alt: "მჟავის ასორტი",
          },
          { label: "ფხალი", img: "/menu/fxali.webp", alt: "ფხალი" },
        ],
      },
      {
        title: "ცომეული",
        items: [
          { label: "აჩმა", img: "/menu/achma.jpg", alt: "აჩმა" },
          { label: "ღომი", img: "/menu/ghomi.jpg", alt: "ღომი" },
          { label: "თონის პური", img: "/menu/shoti.jpg", alt: "თონის პური" },
          { label: "მჭადი", img: "/menu/mchadi.webp", alt: "მჭადი" },
          { label: "ხაჭაპური", img: "/menu/xachapuri.jpg", alt: "ხაჭაპური" },
          { label: "ლობიანი", img: "/menu/lobiani.webp", alt: "ლობიანი" }, // новый файл
        ],
      },
      {
        title: "საწებლები",
        items: [
          { label: "ტყემალი", img: "/menu/tyemali.jpg", alt: "ტყემალი" },
          {
            label: "პომიდვრის საწებელი",
            img: "/menu/sawebeli.jpg",
            alt: "პომიდვრის საწებელი",
          },
          { label: "აჯიკა", img: "/menu/ajika.webp", alt: "აჯიკა" }, // новый файл
        ],
      },
      {
        title: "სასმელები",
        items: [
          {
            label: "ლიმონათი (ზედაზენი)",
            img: "/menu/limonati.png",
            alt: "ლიმონათი (ზედაზენი)",
          },
          { label: "ფანტა", img: "/menu/fanta.jpg", alt: "ფანტა" },
          { label: "კოკა-კოლა", img: "/menu/kola.jpg", alt: "კოკა-კოლა" },
          {
            label: "მინერალური წყალი (ნაბეღლავი)",
            img: "/menu/nabeghlavi.jpg",
            alt: "მინერალური წყალი (ნაბეღლავი)",
          },
          { label: "წყალი", img: "/menu/wyali.jpg", alt: "წყალი" },
          { label: "ყავა და ჩაი", img: "/menu/yava.jpg", alt: "ყავა და ჩაი" },
        ],
      },
    ],
  },
];

export const getPackageBySlug = (slug: MenuPackage["slug"]) =>
  packages.find((p) => p.slug === slug);

export type MediaType = "image" | "video";
export type MediaItem = {
  id: string;
  src: string;
  w?: number;
  h?: number;
  album: "დარბაზი" | "დეკორი" | "საჭმელი" | "ივენთები";
  type?: MediaType;
  poster?: string;
  alt?: string;
};

export const albums = [
  { key: "დარბაზი", icon: "🏛️" },
  { key: "დეკორი", icon: "✨" },
  { key: "საჭმელი", icon: "🍽️" },
  { key: "ივენთები", icon: "💍" },
] as const;

export const media: MediaItem[] = [
  {
    id: "decor1",
    src: "/gallery/dekor1.jpg",
    album: "დეკორი",
    alt: "ლა ფიესტას დეკორი",
  },
  {
    id: "hall1",
    src: "/gallery/hall1.jpg",
    album: "დარბაზი",
  },
  {
    id: "hall2",
    src: "/gallery/hall2.jpg",
    album: "დარბაზი",
  },
  {
    id: "hall3",
    src: "/gallery/hall3.jpg",
    album: "დარბაზი",
  },
  {
    id: "hall4",
    src: "/gallery/hall4.jpg",
    album: "დარბაზი",
  },
  {
    id: "hall5",
    src: "/gallery/hall5.jpg",
    album: "დარბაზი",
  },
  {
    id: "hall6",
    src: "/gallery/hall6.jpg",
    album: "დარბაზი",
  },
  {
    id: "hall7",
    src: "/gallery/hall7.jpg",
    album: "დარბაზი",
  },
  {
    id: "hall8",
    src: "/gallery/hall8.jpg",
    album: "დარბაზი",
  },
  {
    id: "hall9",
    src: "/gallery/hall9.jpg",
    album: "დარბაზი",
  },
  {
    id: "hall10",
    src: "/gallery/hall10.jpg",
    album: "დარბაზი",
  },
  // {
  // 	id: 'v1',
  // 	type: 'video',
  // 	src: '/videos/gallery/first_dance.mp4',
  // 	poster: '/images/gallery/events/poster.jpg',
  // 	w: 1920,
  // 	h: 1080,
  // 	album: 'ივენთები',
  // },
];

export const texts = {
  About: {
    title: "ჩვენ შესახებ",
    introTitle: "La Fiesta — ადგილი, სადაც ქორწილის ოცნებები რეალობად იქცევა",
    introText:
      "ყოველი სიყვარულის ისტორია უნიკალურია, ამიტომაც თქვენი დღესასწაული უნდა იყოს გამორჩეული. ჩვენ ვქმნით ელეგანტურ ატმოსფეროს, სადაც მნიშვნელობა აქვს თითოეულ დეტალს — დეკორიდან განათებასა და მუსიკამდე.",
    missionTitle: "ჩვენი მისია",
    missionText:
      "გავხადოთ თქვენი დღე უშეცდომო და დაუვიწყარი. ყურადღებით ვისმენთ თქვენს სურვილებს და ვქმნით გადაწყვეტილებებს, რომლებიც ასახავს თქვენს სტილსა და ხასიათს.",
    featuresTitle: "რას გთავაზობთ",
    featuresList: [
      "ინდივიდუალური დეკორი და ფოტოზონები",
      "ბანკეტური მენიუ გამოცდილი შეფ-მზარეულებისგან",
      "სანათო და მუსიკალური უზრუნველყოფა",
      "კომფორტული ზონები სტუმრებისთვის და წყვილისთვის",
      "სრულყოფილი ორგანიზება — „ყველაფერი ერთ სივრცეში“",
    ],
    statsTitle: "რატომ La Fiesta",
    statsBullets: [
      "ელეგანტური ინტერიერი და ფართო დარბაზი",
      "თანამედროვე ტექნიკური აღჭურვილობა",
      "ზრუნვა დეტალებზე და გულთბილი მომსახურება",
    ],
    whyTitle: "რატომ La Fiesta",
    whyList: [
      "ელეგანტური ინტერიერი და ფართო დარბაზი",
      "თანამედროვე ტექნიკური აღჭურვილობა",
      "ზრუნვა დეტალებზე და გულთბილი მომსახურება",
    ],
    ctaTitle: "გაეცანით ჩვენს სივრცეს",
    ctaText:
      "მობრძანდით La Fiesta-ში — ერთად შევქმნით დღესასწაულს, რომელიც თქვენს გულებს გაათბობს წლების განმავლობაში.",
    ctaButton: "დაჯავშნა",
  },
  Nav: {
    home: "მთავარი",
    menu: "მენიუ",
    gallery: "გალერეა",
    about: "ჩვენ შესახებ",
    contacts: "კონტაქტი",
  },
  HomePage: {
    title: "La Fiesta — საქორწილო დარბაზი მარტვილში",
    subtitle: "ელეგანტური ბანკეტები და უმაღლესი მომსახურება",
    seeMenu: "მენიუს ნახვა",
    book: "დაჯავშნა",
  },
  Menu: {
    title: "მენიუ",
    recommended: "რეკომენდაცია",
    note: "ფასები შეიძლება შეიცვალოს ბანკეტის შეთავაზებიდან გამომდინარე.",
  },
  Gallery: {
    title: "გალერეა",
    subtitle: "ფოტოები და ვიდეოები ჩვენი დარბაზიდან, დეკორები და კერძები",
  },
  Contacts: {
    title: "კონტაქტი",
    address: "მისამართი: მარტვილი, საქართველო",
    hours: "სამუშაო საათები: 11:00–23:00",
    form: {
      name: "სახელი",
      phone: "ტელეფონი",
      date: "თარიღი",
      guests: "სტუმრების რაოდენობა",
      message: "შეტყობინება",
      send: "გაგზავნა",
      ok: "მადლობა! მალე დაგიკავშირდებით.",
      workHours: "სამუშაო საათები: 11:00–23:00",
    },
  },
  MenuPackages: {
    title: "ბანკეტის პაკეტები",
    subtitle: "აირჩიეთ შესაბამისი შეთავაზება თქვენი ღონისძიებისთვის",
    note: "ფასები მითითებულია ერთ სტუმარზე. ალკოჰოლური სასმელები — შეთანხმებით.",
    view: "ნახვა",
    perPerson: "ფასი ერთ სტუმარზე",
    back: "დაბრუნება პაკეტებში",
    book: "დაჯავშნა",
  },
  Footer: {
    social: "გაგვიზიარეთ",
    rights: "ყველა უფლება დაცულია © {year} La Fiesta",
  },
} as const;
