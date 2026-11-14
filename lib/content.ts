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
  slug: "40gel" | "70gel" | "85gel" | "120gel";
  name: string;
  photo?: string;
  price: number;
  perPersonLabel: string;
  highlights: string[];
  sections: MenuSection[];
};

export const menuCategories = [
  "ძირითადი კერძები",
  "სალათები და დამატებები",
  "დესერტი და ხილი",
  "სასმელები",
] as const;

export const packages: MenuPackage[] = [
  {
    slug: "120gel",
    name: "პრემიუმ მენიუ",
    price: 120,
    photo: "/menu/roast-rabbit.webp",
    perPersonLabel: "ფასი ერთ სტუმარზე",
    highlights: ["ცხელი კერძები", "ცივი კერძები", "დესერტი", "სასმელები"],
    sections: [
      {
        title: menuCategories[0],
        items: [
          {
            label: "გოჭი",
            img: "/menu/editorial/gochi.webp",
          },
          {
            label: "ხაშლამა",
            img: "/menu/editorial/khashlama.webp",
          },
          { label: "კურდღელი", img: "/menu/roast-rabbit.webp" },
          { label: "მეგრული საცივი ინდაურით", img: "/menu/turkey-satsivi.webp" },
          {
            label: "წიწილა ტაბაკა",
            img: "/menu/editorial/tabaka.webp",
          },
          { label: "ოსტრი", img: "/menu/ostri.webp" },
          {
            label: "ღორის მწვადი",
            img: "/menu/editorial/mwv.webp",
          },
          { label: "ზუთხის მწვადი ან ქათმის მწვადი გარნირით (კარტოფილი ფრი და სოუსი)", img: "/menu/chicken-skewers.webp" },
          {
            label: "კუჭმაჭი",
            img: "/menu/editorial/kuchmachi.webp",
          },
          {
            label: "კუპატი",
            img: "/menu/editorial/kupati.webp",
          },
          {
            label: "ხორციანი რულეტი",
            img: "/menu/editorial/ruleti.webp",
          },
          {
            label: "ხორციანი ბლინი",
            img: "/menu/editorial/blini.webp",
          },
          {
            label: "მწყერი",
            img: "/menu/editorial/mwyeri.webp",
          },
          {
            label: "კალმახი",
            img: "/menu/editorial/kalmaxi.webp",
          },
          {
            label: "სათალი",
            img: "/menu/editorial/satali.webp",
          },
        ],
      },
      {
        title: menuCategories[1],
        items: [
          {
            label: "ქათმის სალათი",
            img: "/menu/editorial/qatmissalati.webp",
          },
          {
            label: "სალათი ცეზარი",
            img: "/menu/editorial/cezari.webp",
          },
          { label: "სოკო კეცზე სულგუნით", img: "/menu/editorial/soko.webp" },
          {
            label: "აჩმა",
            img: "/menu/editorial/achma.webp",
          },
          { label: "მეგრული ხაჭაპური", img: "/menu/editorial/xachapuri.webp" },
          {
            label: "გებჟალია",
            img: "/menu/editorial/gebjalia.webp",
          },
          {
            label: "ყველის ასორტი (სულგუნი, შებოლილი სულგუნი, იმერული ყველი)",
            img: "/menu/editorial/sulguni.webp",
          },
          { label: "ყველიანი კვერები", img: "/menu/cheese-kverebi.webp" },
          {
            label: "ელარჯი",
            img: "/menu/editorial/elarji.webp",
          },
          {
            label: "მჭადი",
            img: "/menu/editorial/mchadi.webp",
          },
          {
            label: "შოთის პური",
            img: "/menu/editorial/shoti.webp",
          },
          {
            label: "ფხალის ასორტი (ბადრიჯანი, ბულგარული წიწაკა, ისპანახი)",
            img: "/menu/editorial/fxali.webp",
          },
          { label: "მწნილის ასორტი", img: "/menu/editorial/mjave.webp" },
          {
            label: "კიტრი და პომიდორი",
            img: "/menu/editorial/kitripomidori.webp",
          },
          {
            label: "მწვანილის თაიგული",
            img: "/menu/editorial/mwvanili.webp",
          },
          {
            label: "ტყემლის საწებელი",
            img: "/menu/editorial/tyemali.webp",
          },
          {
            label: "პომიდვრის საწებელი",
            img: "/menu/editorial/sawebeli.webp",
          },
          {
            label: "ხიზილალა",
            img: "/menu/editorial/xizilala.webp",
          },
          {
            label: "ზეთისხილი",
            img: "/menu/editorial/zetisxili.webp",
          },
        ],
      },
      {
        title: menuCategories[2],
        items: [
          {
            label: "ქიშმიში და მიწისთხილი",
            img: "/menu/editorial/txili.webp",
          },
          { label: "ნამცხვრის მრავალფეროვანი ასორტი", img: "/menu/editorial/namcxvari.webp" },
          { label: "არაჟანი", img: "/menu/arajani.webp" },
          { label: "სეზონური ხილის ასორტი", img: "/menu/editorial/xili.webp" },
          {
            label: "ჟელატინი",
            img: "/menu/editorial/jele.webp",
          },
        ],
      },
      {
        title: menuCategories[3],
        items: [
          { label: "ყავა ან ჩაი", img: "/menu/editorial/yava.webp" },
          { label: "ლიმონათი (ზედაზენი)", img: "/menu/editorial/limonati.webp" },
          {
            label: "მინერალური წყალი (ნაბეღლავი)",
            img: "/menu/editorial/nabeghlavi.webp",
          },
          {
            label: "ფანტა",
            img: "/menu/editorial/fanta.webp",
          },
          {
            label: "კოკა-კოლა",
            img: "/menu/editorial/kola.webp",
          },
          {
            label: "წყალი",
            img: "/menu/editorial/wyali.webp",
          },
        ],
      },
    ],
  },
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
        title: menuCategories[0],
        items: [
          {
            label: "გოჭი",
            img: "/menu/editorial/gochi.webp",
          },
          {
            label: "ხაშლამა",
            img: "/menu/editorial/khashlama.webp",
          },
          { label: "ქათამი ბაჟეში", img: "/menu/editorial/baje.webp" },
          {
            label: "წიწილა ტაბაკა",
            img: "/menu/editorial/tabaka.webp",
          },
          {
            label: "ღორის მწვადი",
            img: "/menu/editorial/mwv.webp",
          },
          { label: "ზუთხის მწვადი ან ქათმის მწვადი გარნირით (კარტოფილი ფრი და სოუსი)", img: "/menu/chicken-skewers.webp" },
          {
            label: "კუჭმაჭი",
            img: "/menu/editorial/kuchmachi.webp",
          },
          {
            label: "კუპატი",
            img: "/menu/editorial/kupati.webp",
          },
          {
            label: "ხორციანი რულეტი",
            img: "/menu/editorial/ruleti.webp",
          },
          {
            label: "ხორციანი ბლინი",
            img: "/menu/editorial/blini.webp",
          },
          {
            label: "მწყერი",
            img: "/menu/editorial/mwyeri.webp",
          },
          {
            label: "კალმახი",
            img: "/menu/editorial/kalmaxi.webp",
          },
          {
            label: "სათალი",
            img: "/menu/editorial/satali.webp",
          },
        ],
      },
      {
        title: menuCategories[1],
        items: [
          {
            label: "ქათმის სალათი",
            img: "/menu/editorial/qatmissalati.webp",
          },
          {
            label: "სალათი ცეზარი",
            img: "/menu/editorial/cezari.webp",
          },
          { label: "სოკო კეცზე სულგუნით", img: "/menu/editorial/soko.webp" },
          {
            label: "აჩმა",
            img: "/menu/editorial/achma.webp",
          },
          { label: "მეგრული ხაჭაპური", img: "/menu/editorial/xachapuri.webp" },
          {
            label: "გებჟალია",
            img: "/menu/editorial/gebjalia.webp",
          },
          {
            label: "ყველის ასორტი (სულგუნი, შებოლილი სულგუნი, იმერული ყველი)",
            img: "/menu/editorial/sulguni.webp",
          },
          { label: "ყველიანი კვერები", img: "/menu/cheese-kverebi.webp" },
          {
            label: "ელარჯი",
            img: "/menu/editorial/elarji.webp",
          },
          {
            label: "მჭადი",
            img: "/menu/editorial/mchadi.webp",
          },
          {
            label: "შოთის პური",
            img: "/menu/editorial/shoti.webp",
          },
          {
            label: "ფხალის ასორტი (ბადრიჯანი, ბულგარული წიწაკა, ისპანახი)",
            img: "/menu/editorial/fxali.webp",
          },
          { label: "მწნილის ასორტი", img: "/menu/editorial/mjave.webp" },
          {
            label: "კიტრი და პომიდორი",
            img: "/menu/editorial/kitripomidori.webp",
          },
          {
            label: "მწვანილის თაიგული",
            img: "/menu/editorial/mwvanili.webp",
          },
          {
            label: "ტყემლის საწებელი",
            img: "/menu/editorial/tyemali.webp",
          },
          {
            label: "პომიდვრის საწებელი",
            img: "/menu/editorial/sawebeli.webp",
          },
          {
            label: "ხიზილალა",
            img: "/menu/editorial/xizilala.webp",
          },
          {
            label: "ზეთისხილი",
            img: "/menu/editorial/zetisxili.webp",
          },
        ],
      },
      {
        title: menuCategories[2],
        items: [
          {
            label: "ქიშმიში და მიწისთხილი",
            img: "/menu/editorial/txili.webp",
          },
          { label: "ნამცხვრის მრავალფეროვანი ასორტი", img: "/menu/editorial/namcxvari.webp" },
          { label: "არაჟანი", img: "/menu/arajani.webp" },
          { label: "სეზონური ხილის ასორტი", img: "/menu/editorial/xili.webp" },
          {
            label: "ჟელატინი",
            img: "/menu/editorial/jele.webp",
          },
        ],
      },
      {
        title: menuCategories[3],
        items: [
          { label: "ყავა ან ჩაი", img: "/menu/editorial/yava.webp" },
          { label: "ლიმონათი (ზედაზენი)", img: "/menu/editorial/limonati.webp" },
          {
            label: "მინერალური წყალი (ნაბეღლავი)",
            img: "/menu/editorial/nabeghlavi.webp",
          },
          {
            label: "ფანტა",
            img: "/menu/editorial/fanta.webp",
          },
          {
            label: "კოკა-კოლა",
            img: "/menu/editorial/kola.webp",
          },
          {
            label: "წყალი",
            img: "/menu/editorial/wyali.webp",
          },
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
        title: menuCategories[0],
        items: [
          { label: "გოჭი", img: "/menu/editorial/gochi.webp", alt: "გოჭი" },
          { label: "ქათამი", img: "/menu/editorial/qatami.webp", alt: "ქათამი" },
          {
            label: "ქათამი ბაჟეში",
            img: "/menu/editorial/baje.webp",
            alt: "ქათამი ბაჟეში",
          },
          { label: "ხაშლამა", img: "/menu/editorial/khashlama.webp", alt: "ხაშლამა" },
          { label: "ღორის მწვადი", img: "/menu/editorial/mwv.webp", alt: "ღორის მწვადი" },
          { label: "კუჭმაჭი", img: "/menu/editorial/kuchmachi.webp", alt: "კუჭმაჭი" },
          {
            label: "სოკო სულგუნით",
            img: "/menu/editorial/soko.webp",
            alt: "სოკო სულგუნით",
          },
        ],
      },
      {
        title: menuCategories[1],
        items: [
          { label: "ხიზილალა", img: "/menu/editorial/xizilala.webp", alt: "ხიზილალა" },
          {
            label: "ყველის ასორტი (სულგუნი, იმერული ყველი)",
            img: "/menu/editorial/sulguni.webp",
            alt: "ყველის ასორტი",
          },
          {
            label: "ფხალის ასორტი (ბადრიჯანი, ბულგარული, ისპანახი)",
            img: "/menu/editorial/fxali.webp",
            alt: "ფხალის ასორტი",
          },
          {
            label: "ბოსტნეულის თაიგული",
            img: "/menu/editorial/bostneuli.webp",
            alt: "ბოსტნეულის თაიგული",
          },
          {
            label: "კიტრი-პომიდორი",
            img: "/menu/editorial/kitripomidori.webp",
            alt: "კიტრი-პომიდორი",
          },
          {
            label: "მჟავის ასორტი",
            img: "/menu/editorial/mjave.webp",
            alt: "მჟავის ასორტი",
          },
          { label: "ზეთისხილი", img: "/menu/editorial/zetisxili.webp", alt: "ზეთისხილი" },
          {
            label: "ქათმის სალათი",
            img: "/menu/editorial/qatmissalati.webp",
            alt: "ქათმის სალათი",
          },
          {
            label: "ვინეგრეტი",
            img: "/menu/editorial/vinegreti.webp",
            alt: "ცეზარის სალათი",
          },
          { label: "ხაჭაპური", img: "/menu/editorial/xachapuri.webp", alt: "ხაჭაპური" },
          { label: "აჩმა", img: "/menu/editorial/achma.webp", alt: "აჩმა" },
          {
            label: "ხორციანი ბლინი",
            img: "/menu/editorial/blini.webp",
            alt: "ხორციანი ბლინი",
          },
          { label: "ღომი", img: "/menu/editorial/ghomi.webp", alt: "ღომი" },
          { label: "ელარჯი", img: "/menu/editorial/elarji.webp", alt: "ელარჯი" },
          { label: "მჭადი", img: "/menu/editorial/mchadi.webp", alt: "მჭადი" },
          { label: "შოთის პური", img: "/menu/editorial/shoti.webp", alt: "შოთის პური" },
          { label: "ტყემალი", img: "/menu/editorial/tyemali.webp", alt: "ტყემალი" },
          {
            label: "პომიდვრის საწებელი",
            img: "/menu/editorial/sawebeli.webp",
            alt: "პომიდვრის საწებელი",
          },
        ],
      },
      {
        title: menuCategories[2],
        items: [
          {
            label: "დაჭრილი ხილი (სეზონური)",
            img: "/menu/editorial/xili.webp",
            alt: "დაჭრილი ხილი (სეზონური)",
          },
          { label: "ნამცხვარი", img: "/menu/editorial/namcxvari.webp", alt: "ნამცხვარი" },
          {
            label: "ქიშმიში და მიწისთხილი",
            img: "/menu/editorial/txili.webp",
            alt: "ქიშმიში და მიწისთხილი",
          },
        ],
      },
      {
        title: menuCategories[3],
        items: [
          {
            label: "ლიმონათი (ზედაზენი, ზანდუკელი)",
            img: "/menu/editorial/limonati.webp",
            alt: "ლიმონათი",
          },
          { label: "ნაბეღლავი", img: "/menu/editorial/nabeghlavi.webp", alt: "ნაბეღლავი" },
          { label: "ფანტა", img: "/menu/editorial/fanta.webp", alt: "ფანტა" },
          { label: "კოკა-კოლა", img: "/menu/editorial/kola.webp", alt: "კოკა-კოლა" },
          { label: "წყალი", img: "/menu/editorial/wyali.webp", alt: "წყალი" },
          { label: "ყავა და ჩაი", img: "/menu/editorial/yava.webp", alt: "ყავა და ჩაი" },
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
        title: menuCategories[0],
        items: [
          {
            label: "შემწვარი თევზი (ორაგული)",
            img: "/menu/editorial/oragulishemwvari.webp",
            alt: "შემწვარი თევზი",
          },
          {
            label: "თევზი ბაჟეში (გენერალი)",
            img: "/menu/editorial/tevzibajeshi.webp",
            alt: "თევზი ბაჟეში",
          },
          {
            label: "თევზი ქინძმარში (ლოქო)",
            img: "/menu/editorial/tevziqindzmarshi.webp",
            alt: "თევზი ქინძმარში",
          },
          {
            label: "მოლესილი ლობიო",
            img: "/menu/editorial/lobio.webp",
            alt: "მოლესილი ლობიო",
          },
          {
            label: "ფლავი",
            img: "/menu/editorial/flavi.webp",
            alt: "ფლავი",
          },
          {
            label: "სოკო კეცზე",
            img: "/menu/editorial/soko.webp",
            alt: "სოკო პილპილით",
          },
          {
            label: "სოკო პიურეთი",
            img: "/menu/editorial/soko.webp",
            alt: "სოკო პილპილით",
          },
        ],
      },
      {
        title: menuCategories[1],
        items: [
          {
            label: "ბადრიჯანი ნიგვზით",
            img: "/menu/editorial/badrijani.webp",
            alt: "ბადრიჯანი ნიგვზით",
          },
          {
            label: "ბულგარული წიწაკა ნიგვზით",
            img: "/menu/editorial/bulgaruli.webp",
            alt: "ბულგარული წიწაკა ნიგვზით",
          },
          {
            label: "ხიზილალა",
            img: "/menu/editorial/xizilala.webp",
            alt: "ხიზილალა",
          },
          { label: "ვინეგრეტი", img: "/menu/editorial/vinegreti.webp", alt: "ვინეგრეტი" },
          {
            label: "კიტრი-პომიდორი",
            img: "/menu/editorial/kitripomidori.webp",
            alt: "კიტრი-პომიდორი",
          },
          {
            label: "კომბოსტოს სალათი",
            img: "/menu/editorial/kombostossalati.webp",
            alt: "კომბოსტოს სალათი",
          },
          {
            label: "მწვანილის ასორტი",
            img: "/menu/editorial/mwvanili.webp",
            alt: "მწვანილის ასორტი",
          },
          {
            label: "მჟავის ასორტი",
            img: "/menu/editorial/mjave.webp",
            alt: "მჟავის ასორტი",
          },
          { label: "ფხალი", img: "/menu/editorial/fxali.webp", alt: "ფხალი" },
          { label: "აჩმა", img: "/menu/editorial/achma.webp", alt: "აჩმა" },
          { label: "ღომი", img: "/menu/editorial/ghomi.webp", alt: "ღომი" },
          { label: "თონის პური", img: "/menu/editorial/shoti.webp", alt: "თონის პური" },
          { label: "მჭადი", img: "/menu/editorial/mchadi.webp", alt: "მჭადი" },
          { label: "ხაჭაპური", img: "/menu/editorial/xachapuri.webp", alt: "ხაჭაპური" },
          { label: "ლობიანი", img: "/menu/editorial/lobiani.webp", alt: "ლობიანი" },
          { label: "ტყემალი", img: "/menu/editorial/tyemali.webp", alt: "ტყემალი" },
          {
            label: "პომიდვრის საწებელი",
            img: "/menu/editorial/sawebeli.webp",
            alt: "პომიდვრის საწებელი",
          },
          { label: "აჯიკა", img: "/menu/editorial/ajika.webp", alt: "აჯიკა" },
        ],
      },
      {
        title: menuCategories[2],
        items: [
          {
            label: "კორკოტი",
            img: "/menu/editorial/korkoti.webp",
            alt: "კორკოტი",
          },
        ],
      },
      {
        title: menuCategories[3],
        items: [
          {
            label: "ლიმონათი (ზედაზენი)",
            img: "/menu/editorial/limonati.webp",
            alt: "ლიმონათი (ზედაზენი)",
          },
          { label: "ფანტა", img: "/menu/editorial/fanta.webp", alt: "ფანტა" },
          { label: "კოკა-კოლა", img: "/menu/editorial/kola.webp", alt: "კოკა-კოლა" },
          {
            label: "მინერალური წყალი (ნაბეღლავი)",
            img: "/menu/editorial/nabeghlavi.webp",
            alt: "მინერალური წყალი (ნაბეღლავი)",
          },
          { label: "წყალი", img: "/menu/editorial/wyali.webp", alt: "წყალი" },
          { label: "ყავა და ჩაი", img: "/menu/editorial/yava.webp", alt: "ყავა და ჩაი" },
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
