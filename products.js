const products = [
  {
    id: "AURA-001",
    name: "Floral Embroidered Straight Kurti",
    brand: "BIBA",
    size: "34",
    description: "Elegant straight-cut kurti featuring delicate floral embroidery along the neckline and hemline. Crafted from soft cotton fabric ideal for festive and office wear.",
    image: "images/biba/34/biba_34_01.png",
    soldOut: false
  },
  {
    id: "AURA-002",
    name: "Block Print Anarkali Kurti",
    brand: "BIBA",
    size: "34",
    description: "Vibrant block print anarkali kurti with flared silhouette and three-quarter sleeves. Features traditional hand-stamped motifs in earthy tones, perfect for ethnic occasions.",
    image: "images/biba/34/biba_34_02.png",
    soldOut: false
  },
  {
    id: "AURA-003",
    name: "Mirror Work Festive Kurti",
    brand: "BIBA",
    size: "34",
    description: "Stunning mirror work festive kurti adorned with intricate gota patti embroidery. The rich fabric and decorative detailing make it ideal for celebrations and weddings.",
    image: "images/biba/34/biba_34_03.png",
    soldOut: false
  },
  {
    id: "AURA-004",
    name: "Geometric Print Cotton Kurti",
    brand: "BIBA",
    size: "34",
    description: "Contemporary geometric print kurti in breathable cotton. The structured print and straight cut make it a versatile pick for office and casual outings.",
    image: "images/biba/34/biba_34_04.png",
    soldOut: false
  },
  {
    id: "AURA-005",
    name: "Ajrakh Block Print Kurti",
    brand: "BIBA",
    size: "34",
    description: "Authentic Ajrakh block print kurti showcasing natural dye patterns in indigo and madder red. A handcrafted masterpiece for the conscious fashion lover.",
    image: "images/biba/34/biba_34_05.png",
    soldOut: false
  },
  {
    id: "AURA-006",
    name: "Woven Jacquard Ethnic Kurti",
    brand: "BIBA",
    size: "34",
    description: "Woven jacquard kurti with self-textured fabric and subtle ethnic motifs. Elegant collar detail and comfortable fit suitable for formal wear.",
    image: "images/biba/34/biba_34_06.png",
    soldOut: false
  },
  {
    id: "AURA-007",
    name: "Paisley Printed Kurti",
    brand: "BIBA",
    size: "34",
    description: "Classic paisley printed kurti in vibrant colors with intricate detailing. The fluid fabric drapes beautifully and is ideal for both festive and casual wear.",
    image: "images/biba/34/biba_34_07.png",
    soldOut: false
  },
  {
    id: "AURA-008",
    name: "Chikankari Embroidered Kurti",
    brand: "BIBA",
    size: "34",
    description: "Delicate chikankari embroidered kurti on fine cotton fabric. The intricate white threadwork on pastel base creates a timeless, elegant look.",
    image: "images/biba/34/biba_34_08.png",
    soldOut: false
  },
  {
    id: "AURA-009",
    name: "Ikat Printed Kurti",
    brand: "BIBA",
    size: "34",
    description: "Ikat printed kurti featuring bold geometric patterns in rich earth tones. The handwoven-effect print adds artisanal charm to this ethnic silhouette.",
    image: "images/biba/34/biba_34_09.png",
    soldOut: false
  },
  {
    id: "AURA-010",
    name: "Bandhani Print Kurti",
    brand: "BIBA",
    size: "34",
    description: "Traditional Bandhani print kurti with characteristic tie-dye dot pattern. Vibrant colors and lightweight fabric make it perfect for festive occasions.",
    image: "images/biba/34/biba_34_10.png",
    soldOut: false
  },
  {
    id: "AURA-011",
    name: "Embroidered Yoke Kurti",
    brand: "BIBA",
    size: "34",
    description: "Kurti with beautifully embroidered yoke panel featuring floral and foliage motifs. The contrast detailing against solid body creates a balanced, premium look.",
    image: "images/biba/34/biba_34_11.png",
    soldOut: false
  },
  {
    id: "AURA-012",
    name: "Digital Floral Print Kurti",
    brand: "BIBA",
    size: "34",
    description: "Digital floral print kurti with large-scale botanical motif. The high-definition print on smooth fabric captures every petal detail vividly.",
    image: "images/biba/34/biba_34_12.png",
    soldOut: false
  },
  {
    id: "AURA-013",
    name: "Thread Embroidery Kurti",
    brand: "BIBA",
    size: "34",
    description: "Thread embroidery kurti with dense floral stitching across the bodice. Earthy palette and comfortable silhouette make it ideal for daily ethnic wear.",
    image: "images/biba/34/biba_34_13.png",
    soldOut: false
  },
  {
    id: "AURA-014",
    name: "Abstract Print A-Line Kurti",
    brand: "BIBA",
    size: "34",
    description: "Abstract print A-line kurti with artistic watercolor-effect patterns. The flared silhouette is flattering and comfortable for all-day wear.",
    image: "images/biba/34/biba_34_14.png",
    soldOut: false
  },
  {
    id: "AURA-015",
    name: "Solid with Lace Detail Kurti",
    brand: "BIBA",
    size: "34",
    description: "Solid kurti with delicate lace trim at hemline and sleeves. The understated elegance of this piece pairs well with palazzos and dhoti pants.",
    image: "images/biba/34/biba_34_15.png",
    soldOut: false
  },
  {
    id: "AURA-016",
    name: "Kalamkari Print Kurti",
    brand: "BIBA",
    size: "36",
    description: "Kalamkari print kurti featuring hand-painted mythological motifs in classic ochre and black. A celebration of India's ancient textile artform.",
    image: "images/biba/36/biba_36_01.png",
    soldOut: false
  },
  {
    id: "AURA-017",
    name: "Phulkari Embroidered Kurti",
    brand: "BIBA",
    size: "36",
    description: "Phulkari embroidered kurti with dense colorful threadwork on base fabric. The vibrant embroidery celebrates Punjab's rich textile heritage.",
    image: "images/biba/36/biba_36_02.png",
    soldOut: false
  },
  {
    id: "AURA-018",
    name: "Striped Handloom Kurti",
    brand: "BIBA",
    size: "36",
    description: "Handloom striped kurti in natural cotton with classic horizontal weave. Breathable, sustainable and perfectly suited for everyday wear.",
    image: "images/biba/36/biba_36_03.png",
    soldOut: false
  },
  {
    id: "AURA-019",
    name: "Mandarin Collar Kurti",
    brand: "BIBA",
    size: "36",
    description: "Mandarin collar kurti with sleek silhouette and classic button detailing. The minimal design philosophy makes it effortlessly chic.",
    image: "images/biba/36/biba_36_04.png",
    soldOut: false
  },
  {
    id: "AURA-020",
    name: "Boho Printed Kurti",
    brand: "BIBA",
    size: "36",
    description: "Boho printed kurti with free-spirited pattern and relaxed fit. Vibrant hues and artistic print inspire a joyful, expressive style.",
    image: "images/biba/36/biba_36_05.png",
    soldOut: false
  },
  {
    id: "AURA-021",
    name: "Batik Print Kurti",
    brand: "BIBA",
    size: "36",
    description: "Batik print kurti featuring wax-resist dyed patterns in earthy tones. The organic, hand-crafted texture gives this piece a uniquely artisanal character.",
    image: "images/biba/36/biba_36_06.png",
    soldOut: false
  },
  {
    id: "AURA-022",
    name: "Gota Patti Work Kurti",
    brand: "BIBA",
    size: "36",
    description: "Gota patti work kurti adorned with metallic ribbon appliqué in geometric patterns. Luxurious detailing for festive and bridal events.",
    image: "images/biba/36/biba_36_07.png",
    soldOut: false
  },
  {
    id: "AURA-023",
    name: "Zari Border Kurti",
    brand: "BIBA",
    size: "38",
    description: "Kurti with golden zari border along hemline and cuffs. The rich woven trim adds an ethnic, celebratory touch to the clean silhouette.",
    image: "images/biba/38/biba_38_01.png",
    soldOut: false
  },
  {
    id: "AURA-024",
    name: "Cutwork Kurti",
    brand: "BIBA",
    size: "38",
    description: "Cutwork kurti featuring precision-cut floral motifs creating a delicate, lace-like effect. Lined for comfort and modesty.",
    image: "images/biba/38/biba_38_02.png",
    soldOut: false
  },
  {
    id: "AURA-025",
    name: "Resham Embroidered Kurti",
    brand: "BIBA",
    size: "38",
    description: "Resham embroidered kurti with dense silk thread embroidery in floral motifs. The lustrous finish and rich colors radiate traditional elegance.",
    image: "images/biba/38/biba_38_03.png",
    soldOut: false
  },
  {
    id: "AURA-026",
    name: "Mughal Print Kurti",
    brand: "BIBA",
    size: "38",
    description: "Mughal print kurti featuring intricate architectural and floral motifs inspired by Mughal art. Rich dark tones and fine detailing for festive occasions.",
    image: "images/biba/38/biba_38_04.png",
    soldOut: false
  },
  {
    id: "AURA-027",
    name: "Ditsy Floral Print Kurti",
    brand: "BIBA",
    size: "38",
    description: "Ditsy floral print kurti with scattered petite flower motifs on solid base. Light and breezy fabric makes it ideal for casual summer days.",
    image: "images/biba/38/biba_38_05.png",
    soldOut: false
  },
  {
    id: "AURA-028",
    name: "Sequin Work Kurti",
    brand: "BIBA",
    size: "40",
    description: "Sequin work kurti with scattered mirror-like embellishments catching light beautifully. Perfect for evening celebrations and festive gatherings.",
    image: "images/biba/40/biba_40_01.png",
    soldOut: false
  },
  {
    id: "AURA-029",
    name: "Lotus Printed Kurti",
    brand: "BIBA",
    size: "40",
    description: "Lotus printed kurti with large botanical motif in watercolor-inspired design. Flowing fabric and vibrant print for festive and casual wear.",
    image: "images/biba/40/biba_40_02.png",
    soldOut: false
  },
  {
    id: "AURA-030",
    name: "Kantha Stitch Kurti",
    brand: "BIBA",
    size: "40",
    description: "Kantha stitch kurti with traditional running stitch embroidery creating textured patterns. A tribute to Bengal's centuries-old handcraft tradition.",
    image: "images/biba/40/biba_40_03.png",
    soldOut: false
  },
  {
    id: "AURA-031",
    name: "Solid Kurta with Woven Hem",
    brand: "BIBA",
    size: "40",
    description: "Solid kurti in premium fabric with woven hem detailing. The minimalist design and quality construction speak for themselves.",
    image: "images/biba/40/biba_40_04.png",
    soldOut: false
  },
  {
    id: "AURA-032",
    name: "Ethnic Motif Kurti",
    brand: "BIBA",
    size: "40",
    description: "Ethnic motif kurti with all-over traditional pattern print. Rich colors and geometric designs create a festive, celebratory aesthetic.",
    image: "images/biba/40/biba_40_05.png",
    soldOut: false
  },
  {
    id: "AURA-033",
    name: "Dahlia Print Kurti",
    brand: "BIBA",
    size: "40",
    description: "Dahlia print kurti featuring oversized floral motif in rich jewel tones. The bold statement print paired with classic silhouette is fashion-forward.",
    image: "images/biba/40/biba_40_06.png",
    soldOut: false
  },
  {
    id: "AURA-034",
    name: "Printed Rayon Kurti",
    brand: "BIBA",
    size: "42",
    description: "Printed rayon kurti with flowing fabric and vibrant color palette. Lightweight and comfortable, ideal for summer festivals and casual outings.",
    image: "images/biba/42/biba_42_01.png",
    soldOut: false
  },
  {
    id: "AURA-035",
    name: "Foil Print Kurti",
    brand: "BIBA",
    size: "42",
    description: "Foil print kurti featuring metallic foil stamped pattern catching light with every movement. Festive and contemporary styling.",
    image: "images/biba/42/biba_42_02.png",
    soldOut: false
  },
  {
    id: "AURA-036",
    name: "Tye-Dye Kurti",
    brand: "BIBA",
    size: "42",
    description: "Tie-dye kurti in organic spiral and cloud patterns. Each piece is uniquely colored, making it a one-of-a-kind artisanal find.",
    image: "images/biba/42/biba_42_03.png",
    soldOut: false
  },
  {
    id: "AURA-037",
    name: "Chevron Print Kurti",
    brand: "BIBA",
    size: "42",
    description: "Chevron print kurti with bold zigzag stripe pattern in complementary colors. The geometric design adds modern energy to ethnic silhouette.",
    image: "images/biba/42/biba_42_04.png",
    soldOut: false
  },
  {
    id: "AURA-038",
    name: "Angrakha Style Kurti",
    brand: "BIBA",
    size: "42",
    description: "Angrakha style kurti with wrap-front overlapping panels and tie detail. Classic Rajasthani silhouette with contemporary fabric and prints.",
    image: "images/biba/42/biba_42_05.png",
    soldOut: false
  },
  {
    id: "AURA-039",
    name: "Floral Buta Print Kurti",
    brand: "BIBA",
    size: "42",
    description: "Floral buta print kurti with scattered small motifs on neutral base. Elegant and restrained, suitable for office and casual occasions.",
    image: "images/biba/42/biba_42_06.jpg",
    soldOut: false
  },
  {
    id: "AURA-040",
    name: "Pastel Floral Printed Kurti",
    brand: "Rangriti",
    size: "34",
    description: "Soft pastel floral printed kurti in breathable cotton cambric. The delicate botanical print and flowing silhouette make it ideal for day outings and casual ethnic wear.",
    image: "images/rangriti/34/rangriti_34_01.png",
    soldOut: false
  },
  {
    id: "AURA-041",
    name: "Ethnic Mirror Work Kurti",
    brand: "Rangriti",
    size: "34",
    description: "Ethnic mirror work kurti with hand-stitched mirror embellishments on the yoke and cuffs. The sparkling details pair beautifully with simple churidar or palazzo.",
    image: "images/rangriti/34/rangriti_34_02.png",
    soldOut: false
  },
  {
    id: "AURA-042",
    name: "Rajasthani Print Kurti",
    brand: "Rangriti",
    size: "34",
    description: "Rajasthani hand block printed kurti in traditional motifs and vibrant pigments. Celebrates the rich textile heritage of desert artisans.",
    image: "images/rangriti/34/rangriti_34_03.png",
    soldOut: false
  },
  {
    id: "AURA-043",
    name: "Cotton Cambric Kurti",
    brand: "Rangriti",
    size: "34",
    description: "Premium cotton cambric kurti with clean-cut silhouette and subtle self-texture. Breathable and versatile for everyday ethnic dressing.",
    image: "images/rangriti/34/rangriti_34_04.png",
    soldOut: false
  },
  {
    id: "AURA-044",
    name: "Bandhej Print Kurti",
    brand: "Rangriti",
    size: "34",
    description: "Bandhej tie-dye kurti in traditional circular pattern technique. Vivid colors and artisanal finish make each piece beautifully unique.",
    image: "images/rangriti/34/rangriti_34_05.png",
    soldOut: false
  },
  {
    id: "AURA-045",
    name: "Embellished Neckline Kurti",
    brand: "Rangriti",
    size: "34",
    description: "Kurti with embellished neckline featuring beadwork and mirror sequins. The decorated neckline elevates a simple silhouette into festive attire.",
    image: "images/rangriti/34/rangriti_34_06.png",
    soldOut: false
  },
  {
    id: "AURA-046",
    name: "Madhubani Print Kurti",
    brand: "Rangriti",
    size: "34",
    description: "Madhubani art print kurti featuring folk art-inspired motifs of fish, birds and flowers in traditional black and earthy tones on colored base.",
    image: "images/rangriti/34/rangriti_34_07.png",
    soldOut: false
  },
  {
    id: "AURA-047",
    name: "Chanderi Silk Kurti",
    brand: "Rangriti",
    size: "34",
    description: "Chanderi silk kurti with characteristic golden butis and sheer, lustrous fabric. Lightweight and elegant, perfect for summer festive occasions.",
    image: "images/rangriti/34/rangriti_34_08.png",
    soldOut: false
  },
  {
    id: "AURA-048",
    name: "Georgette Floral Kurti",
    brand: "Rangriti",
    size: "34",
    description: "Georgette floral kurti with all-over printed flowers and flowing fabric. The gentle drape and feminine print create an effortlessly beautiful look.",
    image: "images/rangriti/34/rangriti_34_09.png",
    soldOut: false
  },
  {
    id: "AURA-049",
    name: "Warli Print Kurti",
    brand: "Rangriti",
    size: "34",
    description: "Warli tribal art print kurti featuring the iconic white motifs of Gujarat's indigenous art form. Stylish, meaningful and culturally rooted.",
    image: "images/rangriti/34/rangriti_34_10.png",
    soldOut: false
  },
  {
    id: "AURA-050",
    name: "Jaipuri Print Kurti",
    brand: "Rangriti",
    size: "34",
    description: "Jaipuri block print kurti in classic floral pattern using natural dyes. The authentic hand-stamped character adds artisanal charm.",
    image: "images/rangriti/34/rangriti_34_11.png",
    soldOut: false
  },
  {
    id: "AURA-051",
    name: "Shibori Print Kurti",
    brand: "Rangriti",
    size: "34",
    description: "Shibori print kurti with indigo and white Japanese resist-dye technique. The organic, cloud-like pattern is bohemian and artistic.",
    image: "images/rangriti/34/rangriti_34_12.png",
    soldOut: false
  },
  {
    id: "AURA-052",
    name: "Dabu Print Kurti",
    brand: "Rangriti",
    size: "34",
    description: "Dabu mud-resist print kurti featuring dark textured patterns on natural cotton. A sustainable, handcrafted piece for the thoughtful dresser.",
    image: "images/rangriti/34/rangriti_34_13.png",
    soldOut: false
  },
  {
    id: "AURA-053",
    name: "Leaf Motif Kurti",
    brand: "Rangriti",
    size: "34",
    description: "Leaf motif kurti with stylized botanical design in earthy green tones. The nature-inspired print is calming and freshly modern.",
    image: "images/rangriti/34/rangriti_34_14.png",
    soldOut: false
  },
  {
    id: "AURA-054",
    name: "Lattice Print Kurti",
    brand: "Rangriti",
    size: "34",
    description: "Lattice print kurti with trellis-pattern inspired design creating an architectural visual effect on the fabric.",
    image: "images/rangriti/34/rangriti_34_15.png",
    soldOut: false
  },
  {
    id: "AURA-055",
    name: "Bell Sleeve Kurti",
    brand: "Rangriti",
    size: "34",
    description: "Bell sleeve kurti with dramatic flared sleeve ending and elegant straight silhouette. The fashion-forward sleeve makes this a contemporary ethnic statement.",
    image: "images/rangriti/34/rangriti_34_16.png",
    soldOut: false
  },
  {
    id: "AURA-056",
    name: "Asymmetric Hem Kurti",
    brand: "Rangriti",
    size: "34",
    description: "Asymmetric hem kurti with diagonal cut creating a stylish high-low hemline. Pairs beautifully with straight pants and heels.",
    image: "images/rangriti/34/rangriti_34_17.png",
    soldOut: false
  },
  {
    id: "AURA-057",
    name: "Keyhole Neck Kurti",
    brand: "Rangriti",
    size: "34",
    description: "Keyhole neckline kurti with circular open detail at neckline. The subtle design element adds contemporary charm to classic ethnic silhouette.",
    image: "images/rangriti/34/rangriti_34_18.png",
    soldOut: false
  },
  {
    id: "AURA-058",
    name: "Cold Shoulder Kurti",
    brand: "Rangriti",
    size: "34",
    description: "Cold shoulder kurti with off-shoulder cutouts adding a fashionable contemporary twist to traditional kurti silhouette.",
    image: "images/rangriti/34/rangriti_34_19.png",
    soldOut: false
  },
  {
    id: "AURA-059",
    name: "Tie-up Waist Kurti",
    brand: "Rangriti",
    size: "34",
    description: "Tie-up waist kurti with drawstring detail creating a defined waistline. The belted look is flattering and modern.",
    image: "images/rangriti/34/rangriti_34_20.png",
    soldOut: false
  },
  {
    id: "AURA-060",
    name: "Anarkali Frock",
    brand: "Rangriti",
    size: "34",
    description: "Anarkali frock kurti with heavily flared bottom and fitted bodice. Embellishments throughout create a regal, celebratory look for special occasions.",
    image: "images/rangriti/34/rangriti_34_21.png",
    soldOut: false
  },
  {
    id: "AURA-061",
    name: "Peplum Style Kurti",
    brand: "Rangriti",
    size: "34",
    description: "Peplum style kurti with flounced waistline detail. The structured peplum adds feminine drama and a modern silhouette to ethnic dressing.",
    image: "images/rangriti/34/rangriti_34_22.png",
    soldOut: false
  },
  {
    id: "AURA-062",
    name: "Embroidered Hem Kurti",
    brand: "Rangriti",
    size: "34",
    description: "Kurti with intricately embroidered hemline in floral threadwork. The border embroidery grounds the garment with traditional artistry.",
    image: "images/rangriti/34/rangriti_34_23.png",
    soldOut: false
  },
  {
    id: "AURA-063",
    name: "Rose Print Kurti",
    brand: "Rangriti",
    size: "34",
    description: "Rose print kurti with oversized watercolor-effect rose pattern in soft pink and sage. Romantic and feminine for casual festive occasions.",
    image: "images/rangriti/34/rangriti_34_24.png",
    soldOut: false
  },
  {
    id: "AURA-064",
    name: "Tribal Art Print Kurti",
    brand: "Rangriti",
    size: "34",
    description: "Tribal art print kurti with geometric symbols and indigenous patterns celebrating India's tribal textile traditions.",
    image: "images/rangriti/34/rangriti_34_25.png",
    soldOut: false
  },
  {
    id: "AURA-065",
    name: "Floral Patch Work Kurti",
    brand: "Rangriti",
    size: "34",
    description: "Patchwork kurti with hand-stitched floral fabric patches creating a kaleidoscopic, bohemian look full of color and texture.",
    image: "images/rangriti/34/rangriti_34_26.png",
    soldOut: false
  },
  {
    id: "AURA-066",
    name: "Texture Weave Kurti",
    brand: "Rangriti",
    size: "36",
    description: "Textured weave kurti in dobby or jacquard fabric with subtle self-pattern creating depth and visual interest.",
    image: "images/rangriti/36/rangriti_36_01.png",
    soldOut: false
  },
  {
    id: "AURA-067",
    name: "Dobby Fabric Kurti",
    brand: "Rangriti",
    size: "36",
    description: "Dobby fabric kurti with woven dot or geometric micro-pattern adding texture to the clean silhouette.",
    image: "images/rangriti/36/rangriti_36_02.png",
    soldOut: false
  },
  {
    id: "AURA-068",
    name: "Schiffli Embroidered Kurti",
    brand: "Rangriti",
    size: "36",
    description: "Schiffli embroidered kurti with machine-embroidered floral motifs in delicate threadwork. Creates an all-over lace-like texture.",
    image: "images/rangriti/36/rangriti_36_03.png",
    soldOut: false
  },
  {
    id: "AURA-069",
    name: "Lucknowi Chikan Kurti",
    brand: "Rangriti",
    size: "36",
    description: "Lucknowi chikan kurti with hand-embroidered shadow stitch technique on fine cotton fabric. Timeless, elegant and artisanal.",
    image: "images/rangriti/36/rangriti_36_04.png",
    soldOut: false
  },
  {
    id: "AURA-070",
    name: "Abstract Floral Kurti",
    brand: "Rangriti",
    size: "36",
    description: "Abstract floral kurti with artist-interpretation of flowers in painterly brushstroke motifs on solid base fabric.",
    image: "images/rangriti/36/rangriti_36_05.png",
    soldOut: false
  },
  {
    id: "AURA-071",
    name: "Color Block Kurti",
    brand: "Rangriti",
    size: "36",
    description: "Color block kurti with contrasting solid panels creating a bold, graphic, contemporary look with ethnic silhouette.",
    image: "images/rangriti/36/rangriti_36_06.png",
    soldOut: false
  },
  {
    id: "AURA-072",
    name: "Tassel Detail Kurti",
    brand: "Rangriti",
    size: "36",
    description: "Tassel detail kurti with thread or fabric tassels at neckline, hemline, or cuffs adding playful, bohemian character.",
    image: "images/rangriti/36/rangriti_36_07.png",
    soldOut: false
  },
  {
    id: "AURA-073",
    name: "Pin Tuck Kurti",
    brand: "Rangriti",
    size: "36",
    description: "Pin tuck kurti with fine parallel fabric folds creating structured texture across the bodice and sleeves.",
    image: "images/rangriti/36/rangriti_36_08.png",
    soldOut: false
  },
  {
    id: "AURA-074",
    name: "Smocked Yoke Kurti",
    brand: "Rangriti",
    size: "36",
    description: "Smocked yoke kurti with gathered and elasticated yoke creating a blouse-like top with gathered skirt below.",
    image: "images/rangriti/36/rangriti_36_09.png",
    soldOut: false
  },
  {
    id: "AURA-075",
    name: "Peasant Style Kurti",
    brand: "Rangriti",
    size: "36",
    description: "Peasant style kurti with gathered fabric, ruffled hemline, and bohemian lace or embroidered details throughout.",
    image: "images/rangriti/36/rangriti_36_10.png",
    soldOut: false
  },
  {
    id: "AURA-076",
    name: "Lace Inset Kurti",
    brand: "Rangriti",
    size: "36",
    description: "Lace inset kurti with delicate lace panel detailing at neckline or hemline. The combination of solid fabric and lace is elegant.",
    image: "images/rangriti/36/rangriti_36_11.png",
    soldOut: false
  },
  {
    id: "AURA-077",
    name: "Layered Hem Kurti",
    brand: "Rangriti",
    size: "36",
    description: "Layered hem kurti with tiered fabric layers at the hemline creating movement and volume for a graceful silhouette.",
    image: "images/rangriti/36/rangriti_36_12.png",
    soldOut: false
  },
  {
    id: "AURA-078",
    name: "Gathered Sleeve Kurti",
    brand: "Rangriti",
    size: "36",
    description: "Gathered sleeve kurti with puffed shoulder and gathered sleeve head. The voluminous sleeve is playfully modern.",
    image: "images/rangriti/36/rangriti_36_13.png",
    soldOut: false
  },
  {
    id: "AURA-079",
    name: "Tunic Style Kurti",
    brand: "Rangriti",
    size: "36",
    description: "Tunic length kurti with longline silhouette falling to mid-thigh or knee. Versatile to wear over leggings or jeans.",
    image: "images/rangriti/36/rangriti_36_14.png",
    soldOut: false
  },
  {
    id: "AURA-080",
    name: "Cap Sleeve Kurti",
    brand: "Rangriti",
    size: "36",
    description: "Cap sleeve kurti with short structured sleeve detail. The streamlined sleeve keeps the silhouette light and modern.",
    image: "images/rangriti/36/rangriti_36_15.png",
    soldOut: false
  },
  {
    id: "AURA-081",
    name: "Flutter Sleeve Kurti",
    brand: "Rangriti",
    size: "36",
    description: "Flutter sleeve kurti with loose, fluttery short sleeve creating romantic movement with every gesture.",
    image: "images/rangriti/36/rangriti_36_16.png",
    soldOut: false
  },
  {
    id: "AURA-082",
    name: "Embroidered Panel Kurti",
    brand: "Rangriti",
    size: "36",
    description: "Embroidered panel kurti with decorative embroidered chest or back panel. The focal panel becomes the design centerpiece.",
    image: "images/rangriti/36/rangriti_36_17.png",
    soldOut: false
  },
  {
    id: "AURA-083",
    name: "Polka Dot Kurti",
    brand: "Rangriti",
    size: "36",
    description: "Polka dot kurti in classic round spot print on contrasting base. Timeless, playful pattern suitable for casual festive wear.",
    image: "images/rangriti/36/rangriti_36_18.png",
    soldOut: false
  },
  {
    id: "AURA-084",
    name: "Houndstooth Print Kurti",
    brand: "Rangriti",
    size: "36",
    description: "Houndstooth print kurti giving a contemporary twist to the classic textile pattern in an ethnic silhouette.",
    image: "images/rangriti/36/rangriti_36_19.png",
    soldOut: false
  },
  {
    id: "AURA-085",
    name: "Medallion Print Kurti",
    brand: "Rangriti",
    size: "38",
    description: "Medallion print kurti with circular, symmetrical ornamental motifs arranged in all-over repeat pattern.",
    image: "images/rangriti/38/rangriti_38_01.png",
    soldOut: false
  },
  {
    id: "AURA-086",
    name: "Border Print Kurti",
    brand: "Rangriti",
    size: "38",
    description: "Border print kurti with decorative printed border at hemline echoing traditional saree border aesthetics.",
    image: "images/rangriti/38/rangriti_38_02.png",
    soldOut: false
  },
  {
    id: "AURA-087",
    name: "Chintz Print Kurti",
    brand: "Rangriti",
    size: "38",
    description: "Chintz print kurti with high-gloss printed floral pattern inspired by traditional chintz textile technique.",
    image: "images/rangriti/38/rangriti_38_03.png",
    soldOut: false
  },
  {
    id: "AURA-088",
    name: "Indigo Dabu Kurti",
    brand: "Rangriti",
    size: "38",
    description: "Indigo dabu resist print kurti with natural mud-resist technique creating negative space patterns on indigo-dyed cotton.",
    image: "images/rangriti/38/rangriti_38_04.png",
    soldOut: false
  },
  {
    id: "AURA-089",
    name: "Botanical Print Kurti",
    brand: "Rangriti",
    size: "38",
    description: "Botanical print kurti with high-fidelity scientific-illustration style floral and leaf motifs for nature lovers.",
    image: "images/rangriti/38/rangriti_38_05.png",
    soldOut: false
  },
  {
    id: "AURA-090",
    name: "Natural Dye Kurti",
    brand: "Rangriti",
    size: "38",
    description: "Natural dye kurti using plant-based dyes in earthy tones of turmeric, indigo, and madder. Sustainable and beautifully muted.",
    image: "images/rangriti/38/rangriti_38_06.png",
    soldOut: false
  },
  {
    id: "AURA-091",
    name: "Terracotta Print Kurti",
    brand: "Rangriti",
    size: "38",
    description: "Terracotta print kurti with clay-inspired earth tone palette and rustic motifs for an organic, grounded aesthetic.",
    image: "images/rangriti/38/rangriti_38_07.png",
    soldOut: false
  },
  {
    id: "AURA-092",
    name: "Onam Print Kurti",
    brand: "Rangriti",
    size: "38",
    description: "Onam print kurti with traditional Kerala kasav-inspired gold and white palette celebrating South Indian textile tradition.",
    image: "images/rangriti/38/rangriti_38_08.png",
    soldOut: false
  },
  {
    id: "AURA-093",
    name: "Sanganeri Print Kurti",
    brand: "Rangriti",
    size: "38",
    description: "Sanganeri block print kurti in classic Jaipur floral pattern using traditional vegetable dyes on white base.",
    image: "images/rangriti/38/rangriti_38_09.png",
    soldOut: false
  },
  {
    id: "AURA-094",
    name: "Patola Print Kurti",
    brand: "Rangriti",
    size: "38",
    description: "Patola print kurti inspired by the double ikat weave of Gujarat with geometric diamond patterns in rich colors.",
    image: "images/rangriti/38/rangriti_38_10.png",
    soldOut: false
  },
  {
    id: "AURA-095",
    name: "Meenakari Print Kurti",
    brand: "Rangriti",
    size: "38",
    description: "Meenakari inspired print kurti with jewel-tone enameled art motifs reminiscent of Rajasthani jewelry craft.",
    image: "images/rangriti/38/rangriti_38_11.png",
    soldOut: false
  },
  {
    id: "AURA-096",
    name: "Hand Block Jaipuri Kurti",
    brand: "Rangriti",
    size: "38",
    description: "Hand block Jaipuri print kurti with fresh floral stamp in vibrant colors on natural fabric. Authentically artisanal.",
    image: "images/rangriti/38/rangriti_38_12.png",
    soldOut: false
  },
  {
    id: "AURA-097",
    name: "Kota Doria Kurti",
    brand: "Rangriti",
    size: "38",
    description: "Kota Doria fabric kurti with distinctive square check texture of the lightweight Rajasthani weave. Breezy and elegant.",
    image: "images/rangriti/38/rangriti_38_13.png",
    soldOut: false
  },
  {
    id: "AURA-098",
    name: "Bagru Print Kurti",
    brand: "Rangriti",
    size: "38",
    description: "Bagru hand print kurti using vegetable dyes and resist printing from the Bagru village artisans. Heritage craft at its finest.",
    image: "images/rangriti/38/rangriti_38_14.png",
    soldOut: false
  },
  {
    id: "AURA-099",
    name: "Leheriya Print Kurti",
    brand: "Rangriti",
    size: "38",
    description: "Leheriya print kurti with traditional Rajasthani wave pattern tie-dye in rainbow-spectrum colors.",
    image: "images/rangriti/38/rangriti_38_15.png",
    soldOut: false
  },
  {
    id: "AURA-100",
    name: "Gond Art Print Kurti",
    brand: "Rangriti",
    size: "38",
    description: "Gond art print kurti featuring tribal art motifs of Madhya Pradesh's Gond community in black and earthy tones.",
    image: "images/rangriti/38/rangriti_38_16.png",
    soldOut: false
  },
  {
    id: "AURA-101",
    name: "Temple Border Kurti",
    brand: "Rangriti",
    size: "38",
    description: "Temple border kurti with architectural temple motif repeated along the hemline, inspired by South Indian temple walls.",
    image: "images/rangriti/38/rangriti_38_17.png",
    soldOut: false
  },
  {
    id: "AURA-102",
    name: "Kerala Kasav Style Kurti",
    brand: "Rangriti",
    size: "38",
    description: "Kerala kasav style kurti with white fabric and golden woven border echoing the elegance of Kerala's traditional sarees.",
    image: "images/rangriti/38/rangriti_38_18.png",
    soldOut: false
  },
  {
    id: "AURA-103",
    name: "Puja Collection Kurti",
    brand: "Rangriti",
    size: "38",
    description: "Puja collection kurti designed for religious and ceremonial occasions with auspicious motifs and gold accents.",
    image: "images/rangriti/38/rangriti_38_19.png",
    soldOut: false
  },
  {
    id: "AURA-104",
    name: "Festival Special Kurti",
    brand: "Rangriti",
    size: "38",
    description: "Festival special kurti with celebratory print and embellishment, designed to make every occasion memorable.",
    image: "images/rangriti/38/rangriti_38_20.png",
    soldOut: false
  },
  {
    id: "AURA-105",
    name: "Pearl Beaded Kurti",
    brand: "Rangriti",
    size: "38",
    description: "Pearl beaded kurti with hand-applied pearl cluster embellishments along neckline creating a luxurious, bridal-adjacent look.",
    image: "images/rangriti/38/rangriti_38_21.png",
    soldOut: false
  },
  {
    id: "AURA-106",
    name: "Taanka Embroidery Kurti",
    brand: "Rangriti",
    size: "38",
    description: "Taanka embroidery kurti with cross-stitch style geometric embroidery in vibrant multicolor threads on base fabric.",
    image: "images/rangriti/38/rangriti_38_22.png",
    soldOut: false
  },
  {
    id: "AURA-107",
    name: "Gamthi Embroidery Kurti",
    brand: "Rangriti",
    size: "42",
    description: "Gamthi embroidery kurti with patterned sequin embroidery on dupatta and neckline, celebrating Kutchi craft.",
    image: "images/rangriti/42/rangriti_42_01.png",
    soldOut: false
  },
  {
    id: "AURA-108",
    name: "Threadwork Booti Kurti",
    brand: "Rangriti",
    size: "42",
    description: "Threadwork booti kurti with individual embroidered flower buds (bootis) scattered across the fabric in dense arrangement.",
    image: "images/rangriti/42/rangriti_42_02.png",
    soldOut: false
  },
  {
    id: "AURA-109",
    name: "Zardozi Work Kurti",
    brand: "Rangriti",
    size: "42",
    description: "Zardozi work kurti with gold metal thread embroidery in floral motifs. Regal, heavy embellishment for grand occasions.",
    image: "images/rangriti/42/rangriti_42_03.png",
    soldOut: false
  },
  {
    id: "AURA-110",
    name: "Aari Embroidered Kurti",
    brand: "Rangriti",
    size: "42",
    description: "Aari embroidery kurti with chain stitch embroidery using aari needle creating flowing floral patterns on fabric.",
    image: "images/rangriti/42/rangriti_42_04.png",
    soldOut: false
  },
  {
    id: "AURA-111",
    name: "Pearl Drop Detail Kurti",
    brand: "Rangriti",
    size: "42",
    description: "Pearl drop detail kurti with delicate drop pearl accents at strategic points on the neckline and hemline.",
    image: "images/rangriti/42/rangriti_42_05.png",
    soldOut: false
  },
  {
    id: "AURA-112",
    name: "Golden Thread Kurti",
    brand: "Rangriti",
    size: "42",
    description: "Golden thread kurti with metallic gold zari thread woven or embroidered through the fabric for shimmering festive appeal.",
    image: "images/rangriti/42/rangriti_42_06.png",
    soldOut: false
  },
  {
    id: "AURA-113",
    name: "Kashmiri Motif Kurti",
    brand: "Rangriti",
    size: "42",
    description: "Kashmiri motif kurti with chinaar leaf, paisley and almond (badam) motifs inspired by valley of Kashmir artistry.",
    image: "images/rangriti/42/rangriti_42_07.png",
    soldOut: false
  },
  {
    id: "AURA-114",
    name: "Sindhi Embroidered Kurti",
    brand: "Rangriti",
    size: "42",
    description: "Sindhi embroidery kurti with dense, colorful cross stitch embroidery typical of Sindh's rich handicraft heritage.",
    image: "images/rangriti/42/rangriti_42_08.png",
    soldOut: false
  },
  {
    id: "AURA-115",
    name: "Banjara Style Kurti",
    brand: "Rangriti",
    size: "42",
    description: "Banjara style kurti with bold geometric embroidery, mirrors and beads typical of nomadic Banjara tribe artistry.",
    image: "images/rangriti/42/rangriti_42_09.png",
    soldOut: false
  },
  {
    id: "AURA-116",
    name: "Lambadi Art Kurti",
    brand: "Rangriti",
    size: "42",
    description: "Lambadi art kurti with colorful patchwork, beadwork and embroidery inspired by the Lambadi tribals of Telangana.",
    image: "images/rangriti/42/rangriti_42_10.png",
    soldOut: false
  },
  {
    id: "AURA-117",
    name: "Toda Embroidery Kurti",
    brand: "Rangriti",
    size: "42",
    description: "Toda embroidery kurti with sacred geometric red and black embroidery of the Toda tribe of the Nilgiris.",
    image: "images/rangriti/42/rangriti_42_11.png",
    soldOut: false
  },
  {
    id: "AURA-118",
    name: "Kasuti Work Kurti",
    brand: "Rangriti",
    size: "42",
    description: "Kasuti work kurti with cross stitch embroidery from Karnataka featuring chariot and temple motifs.",
    image: "images/rangriti/42/rangriti_42_12.png",
    soldOut: false
  },
  {
    id: "AURA-119",
    name: "Pipli Appliqué Kurti",
    brand: "Rangriti",
    size: "42",
    description: "Pipli appliqué kurti with vibrant fabric cutouts in animal and geometric shapes applied as surface decoration.",
    image: "images/rangriti/42/rangriti_42_13.png",
    soldOut: false
  },
  {
    id: "AURA-120",
    name: "Kantha Work Kurti",
    brand: "Rangriti",
    size: "42",
    description: "Kantha work kurti with Bengali running stitch embroidery creating textured all-over design in colorful threads.",
    image: "images/rangriti/42/rangriti_42_14.png",
    soldOut: false
  },
  {
    id: "AURA-121",
    name: "Shadow Work Kurti",
    brand: "Rangriti",
    size: "46",
    description: "Shadow work kurti with intricate backlit embroidery creating delicate visible motifs on transparent fabric.",
    image: "images/rangriti/46/rangriti_46_01.jpg",
    soldOut: false
  },
  {
    id: "AURA-122",
    name: "Pastel Floral Printed Kurti",
    brand: "Rangriti",
    size: "46",
    description: "Soft pastel floral printed kurti in breathable cotton cambric. The delicate botanical print and flowing silhouette make it ideal for day outings and casual ethnic wear.",
    image: "images/rangriti/46/rangriti_46_02.jpg",
    soldOut: false
  }
];

// To mark a product as sold out, change soldOut: false → soldOut: true
// Example: find the product by ID and set soldOut: true
// { id: 'AURA-001', soldOut: true }