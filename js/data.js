/* ============================================================
   data.js — CALendar 物种数据
   365 天，每天一种加州特有/常见动植物
   每物种: 俗名(中/英) · 学名 · 分类层级 · 图片路径

   注意: 农历节日日期每年变动，此处使用近似公历日期
   ============================================================ */

var CALENDAR_DATA = {
  "species": {
    "black-phoebe": {
      "id": "black-phoebe",
      "category": "bird",
      "nameZh": "黑长尾霸鹟",
      "nameEn": "Black Phoebe",
      "scientificName": "Sayornis nigricans",
      "taxonomy": {
        "kingdom": "Animalia",
        "phylum": "Chordata",
        "class": "Aves",
        "order": "Passeriformes",
        "family": "Tyrannidae",
        "genus": "Sayornis"
      },
      "photoPath": "images/species/black-phoebe.jpg",
      "photoCreditZh": "加州溪流沿岸",
      "photoCreditEn": "Creekside habitats, CA",
      "creditUrl": "https://www.inaturalist.org/observations?taxon_name=Sayornis%20nigricans",
      "creditSource": "iNaturalist"
    },
    "gray-whale": {
      "id": "gray-whale",
      "category": "marine",
      "nameZh": "灰鲸",
      "nameEn": "Gray Whale",
      "scientificName": "Eschrichtius robustus",
      "taxonomy": {
        "kingdom": "Animalia",
        "phylum": "Chordata",
        "class": "Mammalia",
        "order": "Cetacea",
        "family": "Eschrichtiidae",
        "genus": "Eschrichtius"
      },
      "photoPath": "images/species/gray-whale.jpg",
      "photoCreditZh": "Monterey Bay",
      "photoCreditEn": "Monterey Bay, CA",
      "creditUrl": "https://www.inaturalist.org/observations?taxon_name=Eschrichtius%20robustus",
      "creditSource": "iNaturalist"
    },
    "humpback-whale": {
      "id": "humpback-whale",
      "category": "marine",
      "nameZh": "座头鲸",
      "nameEn": "Humpback Whale",
      "scientificName": "Megaptera novaeangliae",
      "taxonomy": {
        "kingdom": "Animalia",
        "phylum": "Chordata",
        "class": "Mammalia",
        "order": "Cetacea",
        "family": "Balaenopteridae",
        "genus": "Megaptera"
      },
      "photoPath": "images/species/humpback-whale.jpg",
      "photoCreditZh": "Monterey Bay",
      "photoCreditEn": "Monterey Bay, CA",
      "creditUrl": "https://www.inaturalist.org/observations?taxon_name=Megaptera%20novaeangliae",
      "creditSource": "iNaturalist"
    },
    "blue-whale": {
      "id": "blue-whale",
      "category": "marine",
      "nameZh": "蓝鲸",
      "nameEn": "Blue Whale",
      "scientificName": "Balaenoptera musculus",
      "taxonomy": {
        "kingdom": "Animalia",
        "phylum": "Chordata",
        "class": "Mammalia",
        "order": "Cetacea",
        "family": "Balaenopteridae",
        "genus": "Balaenoptera"
      },
      "photoPath": "images/species/blue-whale.jpg",
      "photoCreditZh": "Channel Islands",
      "photoCreditEn": "Channel Islands, CA",
      "creditUrl": "https://www.inaturalist.org/observations?taxon_name=Balaenoptera%20musculus",
      "creditSource": "iNaturalist"
    },
    "california-sea-lion": {
      "id": "california-sea-lion",
      "category": "marine",
      "nameZh": "加州海狮",
      "nameEn": "California Sea Lion",
      "scientificName": "Zalophus californianus",
      "taxonomy": {
        "kingdom": "Animalia",
        "phylum": "Chordata",
        "class": "Mammalia",
        "order": "Carnivora",
        "family": "Otariidae",
        "genus": "Zalophus"
      },
      "photoPath": "images/species/california-sea-lion.png",
      "photoCreditZh": "Pier 39, San Francisco",
      "photoCreditEn": "Pier 39, San Francisco, CA",
      "creditUrl": "https://www.inaturalist.org/observations?taxon_name=Zalophus%20californianus",
      "creditSource": "iNaturalist"
    },
    "harbor-seal": {
      "id": "harbor-seal",
      "category": "marine",
      "nameZh": "港海豹",
      "nameEn": "Harbor Seal",
      "scientificName": "Phoca vitulina",
      "taxonomy": {
        "kingdom": "Animalia",
        "phylum": "Chordata",
        "class": "Mammalia",
        "order": "Carnivora",
        "family": "Phocidae",
        "genus": "Phoca"
      },
      "photoPath": "images/species/harbor-seal.jpg",
      "photoCreditZh": "Elkhorn Slough",
      "photoCreditEn": "Elkhorn Slough, CA",
      "creditUrl": "https://www.inaturalist.org/observations?taxon_name=Phoca%20vitulina",
      "creditSource": "iNaturalist"
    },
    "sea-otter": {
      "id": "sea-otter",
      "category": "marine",
      "nameZh": "海獭",
      "nameEn": "Sea Otter",
      "scientificName": "Enhydra lutris nereis",
      "taxonomy": {
        "kingdom": "Animalia",
        "phylum": "Chordata",
        "class": "Mammalia",
        "order": "Carnivora",
        "family": "Mustelidae",
        "genus": "Enhydra"
      },
      "photoPath": "images/species/sea-otter.jpg",
      "photoCreditZh": "Monterey Bay",
      "photoCreditEn": "Monterey Bay, CA",
      "creditUrl": "https://www.inaturalist.org/observations?taxon_name=Enhydra%20lutris%20nereis",
      "creditSource": "iNaturalist"
    },
    "brown-pelican": {
      "id": "brown-pelican",
      "category": "bird",
      "nameZh": "褐鹈鹕",
      "nameEn": "Brown Pelican",
      "scientificName": "Pelecanus occidentalis californicus",
      "taxonomy": {
        "kingdom": "Animalia",
        "phylum": "Chordata",
        "class": "Aves",
        "order": "Pelecaniformes",
        "family": "Pelecanidae",
        "genus": "Pelecanus"
      },
      "photoPath": "images/species/brown-pelican.jpg",
      "photoCreditZh": "La Jolla Cove",
      "photoCreditEn": "La Jolla Cove, CA",
      "creditUrl": "https://www.inaturalist.org/observations?taxon_name=Pelecanus%20occidentalis%20californicus",
      "creditSource": "iNaturalist"
    },
    "great-blue-heron": {
      "id": "great-blue-heron",
      "category": "bird",
      "nameZh": "大蓝鹭",
      "nameEn": "Great Blue Heron",
      "scientificName": "Ardea herodias",
      "taxonomy": {
        "kingdom": "Animalia",
        "phylum": "Chordata",
        "class": "Aves",
        "order": "Pelecaniformes",
        "family": "Ardeidae",
        "genus": "Ardea"
      },
      "photoPath": "images/species/great-blue-heron.jpg",
      "photoCreditZh": "Sacramento NWR",
      "photoCreditEn": "Sacramento NWR, CA",
      "creditUrl": "https://www.inaturalist.org/observations?taxon_name=Ardea%20herodias",
      "creditSource": "iNaturalist"
    },
    "great-egret": {
      "id": "great-egret",
      "category": "bird",
      "nameZh": "大白鹭",
      "nameEn": "Great Egret",
      "scientificName": "Ardea alba",
      "taxonomy": {
        "kingdom": "Animalia",
        "phylum": "Chordata",
        "class": "Aves",
        "order": "Pelecaniformes",
        "family": "Ardeidae",
        "genus": "Ardea"
      },
      "photoPath": "images/species/great-egret.jpg",
      "photoCreditZh": "Central Valley wetlands",
      "photoCreditEn": "Central Valley wetlands, CA",
      "creditUrl": "https://www.inaturalist.org/observations?taxon_name=Ardea%20alba",
      "creditSource": "iNaturalist"
    },
    "snowy-egret": {
      "id": "snowy-egret",
      "category": "bird",
      "nameZh": "雪鹭",
      "nameEn": "Snowy Egret",
      "scientificName": "Egretta thula",
      "taxonomy": {
        "kingdom": "Animalia",
        "phylum": "Chordata",
        "class": "Aves",
        "order": "Pelecaniformes",
        "family": "Ardeidae",
        "genus": "Egretta"
      },
      "photoPath": "images/species/snowy-egret.jpg",
      "photoCreditZh": "Bolsa Chica",
      "photoCreditEn": "Bolsa Chica, CA",
      "creditUrl": "https://www.inaturalist.org/observations?taxon_name=Egretta%20thula",
      "creditSource": "iNaturalist"
    },
    "black-crowned-night-heron": {
      "id": "black-crowned-night-heron",
      "category": "bird",
      "nameZh": "夜鹭",
      "nameEn": "Black-crowned Night Heron",
      "scientificName": "Nycticorax nycticorax",
      "taxonomy": {
        "kingdom": "Animalia",
        "phylum": "Chordata",
        "class": "Aves",
        "order": "Pelecaniformes",
        "family": "Ardeidae",
        "genus": "Nycticorax"
      },
      "photoPath": "images/species/black-crowned-night-heron.jpg",
      "photoCreditZh": "Lake Merritt, Oakland",
      "photoCreditEn": "Lake Merritt, Oakland, CA",
      "creditUrl": "https://www.inaturalist.org/observations?taxon_name=Nycticorax%20nycticorax",
      "creditSource": "iNaturalist"
    },
    "tundra-swan": {
      "id": "tundra-swan",
      "category": "bird",
      "nameZh": "苔原天鹅",
      "nameEn": "Tundra Swan",
      "scientificName": "Cygnus columbianus",
      "taxonomy": {
        "kingdom": "Animalia",
        "phylum": "Chordata",
        "class": "Aves",
        "order": "Anseriformes",
        "family": "Anatidae",
        "genus": "Cygnus"
      },
      "photoPath": "images/species/tundra-swan.jpg",
      "photoCreditZh": "Sacramento NWR",
      "photoCreditEn": "Sacramento NWR, CA",
      "creditUrl": "https://www.inaturalist.org/observations?taxon_name=Cygnus%20columbianus",
      "creditSource": "iNaturalist"
    },
    "snow-goose": {
      "id": "snow-goose",
      "category": "bird",
      "nameZh": "雪雁",
      "nameEn": "Snow Goose",
      "scientificName": "Anser caerulescens",
      "taxonomy": {
        "kingdom": "Animalia",
        "phylum": "Chordata",
        "class": "Aves",
        "order": "Anseriformes",
        "family": "Anatidae",
        "genus": "Anser"
      },
      "photoPath": "images/species/snow-goose.jpg",
      "photoCreditZh": "Central Valley",
      "photoCreditEn": "Central Valley, CA",
      "creditUrl": "https://www.inaturalist.org/observations?taxon_name=Anser%20caerulescens",
      "creditSource": "iNaturalist"
    },
    "canada-goose": {
      "id": "canada-goose",
      "category": "bird",
      "nameZh": "加拿大雁",
      "nameEn": "Canada Goose",
      "scientificName": "Branta canadensis",
      "taxonomy": {
        "kingdom": "Animalia",
        "phylum": "Chordata",
        "class": "Aves",
        "order": "Anseriformes",
        "family": "Anatidae",
        "genus": "Branta"
      },
      "photoPath": "images/species/canada-goose.jpg",
      "photoCreditZh": "Golden Gate Park",
      "photoCreditEn": "Golden Gate Park, San Francisco, CA",
      "creditUrl": "https://www.inaturalist.org/observations?taxon_name=Branta%20canadensis",
      "creditSource": "iNaturalist"
    },
    "northern-shoveler": {
      "id": "northern-shoveler",
      "category": "bird",
      "nameZh": "琵嘴鸭",
      "nameEn": "Northern Shoveler",
      "scientificName": "Spatula clypeata",
      "taxonomy": {
        "kingdom": "Animalia",
        "phylum": "Chordata",
        "class": "Aves",
        "order": "Anseriformes",
        "family": "Anatidae",
        "genus": "Spatula"
      },
      "photoPath": "images/species/northern-shoveler.jpg",
      "photoCreditZh": "Central Valley",
      "photoCreditEn": "Central Valley, CA",
      "creditUrl": "https://www.inaturalist.org/observations?taxon_name=Spatula%20clypeata",
      "creditSource": "iNaturalist"
    },
    "american-wigeon": {
      "id": "american-wigeon",
      "category": "bird",
      "nameZh": "赤颈凫",
      "nameEn": "American Wigeon",
      "scientificName": "Mareca americana",
      "taxonomy": {
        "kingdom": "Animalia",
        "phylum": "Chordata",
        "class": "Aves",
        "order": "Anseriformes",
        "family": "Anatidae",
        "genus": "Mareca"
      },
      "photoPath": "images/species/american-wigeon.jpg",
      "photoCreditZh": "San Francisco Bay",
      "photoCreditEn": "San Francisco Bay, CA",
      "creditUrl": "https://www.inaturalist.org/observations?taxon_name=Mareca%20americana",
      "creditSource": "iNaturalist"
    },
    "northern-pintail": {
      "id": "northern-pintail",
      "category": "bird",
      "nameZh": "针尾鸭",
      "nameEn": "Northern Pintail",
      "scientificName": "Anas acuta",
      "taxonomy": {
        "kingdom": "Animalia",
        "phylum": "Chordata",
        "class": "Aves",
        "order": "Anseriformes",
        "family": "Anatidae",
        "genus": "Anas"
      },
      "photoPath": "images/species/northern-pintail.jpg",
      "photoCreditZh": "Klamath Basin",
      "photoCreditEn": "Klamath Basin, CA",
      "creditUrl": "https://www.inaturalist.org/observations?taxon_name=Anas%20acuta",
      "creditSource": "iNaturalist"
    },
    "green-winged-teal": {
      "id": "green-winged-teal",
      "category": "bird",
      "nameZh": "绿翅鸭",
      "nameEn": "Green-winged Teal",
      "scientificName": "Anas crecca",
      "taxonomy": {
        "kingdom": "Animalia",
        "phylum": "Chordata",
        "class": "Aves",
        "order": "Anseriformes",
        "family": "Anatidae",
        "genus": "Anas"
      },
      "photoPath": "images/species/green-winged-teal.jpg",
      "photoCreditZh": "Sacramento NWR",
      "photoCreditEn": "Sacramento NWR, CA",
      "creditUrl": "https://www.inaturalist.org/observations?taxon_name=Anas%20crecca",
      "creditSource": "iNaturalist"
    },
    "ruddy-duck": {
      "id": "ruddy-duck",
      "category": "bird",
      "nameZh": "棕硬尾鸭",
      "nameEn": "Ruddy Duck",
      "scientificName": "Oxyura jamaicensis",
      "taxonomy": {
        "kingdom": "Animalia",
        "phylum": "Chordata",
        "class": "Aves",
        "order": "Anseriformes",
        "family": "Anatidae",
        "genus": "Oxyura"
      },
      "photoPath": "images/species/ruddy-duck.jpg",
      "photoCreditZh": "San Francisco Bay",
      "photoCreditEn": "San Francisco Bay, CA",
      "creditUrl": "https://www.inaturalist.org/observations?taxon_name=Oxyura%20jamaicensis",
      "creditSource": "iNaturalist"
    },
    "bufflehead": {
      "id": "bufflehead",
      "category": "bird",
      "nameZh": "白枕鹊鸭",
      "nameEn": "Bufflehead",
      "scientificName": "Bucephala albeola",
      "taxonomy": {
        "kingdom": "Animalia",
        "phylum": "Chordata",
        "class": "Aves",
        "order": "Anseriformes",
        "family": "Anatidae",
        "genus": "Bucephala"
      },
      "photoPath": "images/species/bufflehead.jpg",
      "photoCreditZh": "Morro Bay",
      "photoCreditEn": "Morro Bay, CA",
      "creditUrl": "https://www.inaturalist.org/observations?taxon_name=Bucephala%20albeola",
      "creditSource": "iNaturalist"
    },
    "common-goldeneye": {
      "id": "common-goldeneye",
      "category": "bird",
      "nameZh": "鹊鸭",
      "nameEn": "Common Goldeneye",
      "scientificName": "Bucephala clangula",
      "taxonomy": {
        "kingdom": "Animalia",
        "phylum": "Chordata",
        "class": "Aves",
        "order": "Anseriformes",
        "family": "Anatidae",
        "genus": "Bucephala"
      },
      "photoPath": "images/species/common-goldeneye.jpg",
      "photoCreditZh": "Lake Tahoe",
      "photoCreditEn": "Lake Tahoe, CA",
      "creditUrl": "https://www.inaturalist.org/observations?taxon_name=Bucephala%20clangula",
      "creditSource": "iNaturalist"
    },
    "common-merganser": {
      "id": "common-merganser",
      "category": "bird",
      "nameZh": "普通秋沙鸭",
      "nameEn": "Common Merganser",
      "scientificName": "Mergus merganser",
      "taxonomy": {
        "kingdom": "Animalia",
        "phylum": "Chordata",
        "class": "Aves",
        "order": "Anseriformes",
        "family": "Anatidae",
        "genus": "Mergus"
      },
      "photoPath": "images/species/common-merganser.jpg",
      "photoCreditZh": "Klamath River",
      "photoCreditEn": "Klamath River, CA",
      "creditUrl": "https://www.inaturalist.org/observations?taxon_name=Mergus%20merganser",
      "creditSource": "iNaturalist"
    },
    "sandhill-crane": {
      "id": "sandhill-crane",
      "category": "bird",
      "nameZh": "沙丘鹤",
      "nameEn": "Sandhill Crane",
      "scientificName": "Antigone canadensis",
      "taxonomy": {
        "kingdom": "Animalia",
        "phylum": "Chordata",
        "class": "Aves",
        "order": "Gruiformes",
        "family": "Gruidae",
        "genus": "Antigone"
      },
      "photoPath": "images/species/sandhill-crane.jpg",
      "photoCreditZh": "Central Valley",
      "photoCreditEn": "Central Valley, CA",
      "creditUrl": "https://www.inaturalist.org/observations?taxon_name=Antigone%20canadensis",
      "creditSource": "iNaturalist"
    },
    "american-coot": {
      "id": "american-coot",
      "category": "bird",
      "nameZh": "美洲骨顶",
      "nameEn": "American Coot",
      "scientificName": "Fulica americana",
      "taxonomy": {
        "kingdom": "Animalia",
        "phylum": "Chordata",
        "class": "Aves",
        "order": "Gruiformes",
        "family": "Rallidae",
        "genus": "Fulica"
      },
      "photoPath": "images/species/american-coot.jpg",
      "photoCreditZh": "Lake Merritt, Oakland",
      "photoCreditEn": "Lake Merritt, Oakland, CA",
      "creditUrl": "https://www.inaturalist.org/observations?taxon_name=Fulica%20americana",
      "creditSource": "iNaturalist"
    },
    "western-grebe": {
      "id": "western-grebe",
      "category": "bird",
      "nameZh": "北美鸊鷉",
      "nameEn": "Western Grebe",
      "scientificName": "Aechmophorus occidentalis",
      "taxonomy": {
        "kingdom": "Animalia",
        "phylum": "Chordata",
        "class": "Aves",
        "order": "Podicipediformes",
        "family": "Podicipedidae",
        "genus": "Aechmophorus"
      },
      "photoPath": "images/species/western-grebe.jpg",
      "photoCreditZh": "Clear Lake",
      "photoCreditEn": "Clear Lake, CA",
      "creditUrl": "https://www.inaturalist.org/observations?taxon_name=Aechmophorus%20occidentalis",
      "creditSource": "iNaturalist"
    },
    "eared-grebe": {
      "id": "eared-grebe",
      "category": "bird",
      "nameZh": "黑颈鸊鷉",
      "nameEn": "Eared Grebe",
      "scientificName": "Podiceps nigricollis",
      "taxonomy": {
        "kingdom": "Animalia",
        "phylum": "Chordata",
        "class": "Aves",
        "order": "Podicipediformes",
        "family": "Podicipedidae",
        "genus": "Podiceps"
      },
      "photoPath": "images/species/eared-grebe.jpg",
      "photoCreditZh": "Mono Lake",
      "photoCreditEn": "Mono Lake, CA",
      "creditUrl": "https://www.inaturalist.org/observations?taxon_name=Podiceps%20nigricollis",
      "creditSource": "iNaturalist"
    },
    "pied-billed-grebe": {
      "id": "pied-billed-grebe",
      "category": "bird",
      "nameZh": "斑嘴鸊鷉",
      "nameEn": "Pied-billed Grebe",
      "scientificName": "Podilymbus podiceps",
      "taxonomy": {
        "kingdom": "Animalia",
        "phylum": "Chordata",
        "class": "Aves",
        "order": "Podicipediformes",
        "family": "Podicipedidae",
        "genus": "Podilymbus"
      },
      "photoPath": "images/species/pied-billed-grebe.jpg",
      "photoCreditZh": "Tule Lake NWR",
      "photoCreditEn": "Tule Lake NWR, CA",
      "creditUrl": "https://www.inaturalist.org/observations?taxon_name=Podilymbus%20podiceps",
      "creditSource": "iNaturalist"
    },
    "common-loon": {
      "id": "common-loon",
      "category": "bird",
      "nameZh": "普通潜鸟",
      "nameEn": "Common Loon",
      "scientificName": "Gavia immer",
      "taxonomy": {
        "kingdom": "Animalia",
        "phylum": "Chordata",
        "class": "Aves",
        "order": "Gaviiformes",
        "family": "Gaviidae",
        "genus": "Gavia"
      },
      "photoPath": "images/species/common-loon.jpg",
      "photoCreditZh": "Point Reyes",
      "photoCreditEn": "Point Reyes, CA",
      "creditUrl": "https://www.inaturalist.org/observations?taxon_name=Gavia%20immer",
      "creditSource": "iNaturalist"
    },
    "pelagic-cormorant": {
      "id": "pelagic-cormorant",
      "category": "bird",
      "nameZh": "海鸬鹚",
      "nameEn": "Pelagic Cormorant",
      "scientificName": "Urile pelagicus",
      "taxonomy": {
        "kingdom": "Animalia",
        "phylum": "Chordata",
        "class": "Aves",
        "order": "Suliformes",
        "family": "Phalacrocoracidae",
        "genus": "Urile"
      },
      "photoPath": "images/species/pelagic-cormorant.jpg",
      "photoCreditZh": "Farallon Islands",
      "photoCreditEn": "Farallon Islands, CA",
      "creditUrl": "https://www.inaturalist.org/observations?taxon_name=Urile%20pelagicus",
      "creditSource": "iNaturalist"
    },
    "brandts-cormorant": {
      "id": "brandts-cormorant",
      "category": "bird",
      "nameZh": "加州鸬鹚",
      "nameEn": "Brandt's Cormorant",
      "scientificName": "Urile penicillatus",
      "taxonomy": {
        "kingdom": "Animalia",
        "phylum": "Chordata",
        "class": "Aves",
        "order": "Suliformes",
        "family": "Phalacrocoracidae",
        "genus": "Urile"
      },
      "photoPath": "images/species/brandts-cormorant.jpg",
      "photoCreditZh": "Point Lobos",
      "photoCreditEn": "Point Lobos, CA",
      "creditUrl": "https://www.inaturalist.org/observations?taxon_name=Urile%20penicillatus",
      "creditSource": "iNaturalist"
    },
    "bald-eagle": {
      "id": "bald-eagle",
      "category": "bird",
      "nameZh": "白头海雕",
      "nameEn": "Bald Eagle",
      "scientificName": "Haliaeetus leucocephalus",
      "taxonomy": {
        "kingdom": "Animalia",
        "phylum": "Chordata",
        "class": "Aves",
        "order": "Accipitriformes",
        "family": "Accipitridae",
        "genus": "Haliaeetus"
      },
      "photoPath": "images/species/bald-eagle.jpg",
      "photoCreditZh": "Klamath Basin",
      "photoCreditEn": "Klamath Basin, CA",
      "creditUrl": "https://www.inaturalist.org/observations?taxon_name=Haliaeetus%20leucocephalus",
      "creditSource": "iNaturalist"
    },
    "golden-eagle": {
      "id": "golden-eagle",
      "category": "bird",
      "nameZh": "金雕",
      "nameEn": "Golden Eagle",
      "scientificName": "Aquila chrysaetos",
      "taxonomy": {
        "kingdom": "Animalia",
        "phylum": "Chordata",
        "class": "Aves",
        "order": "Accipitriformes",
        "family": "Accipitridae",
        "genus": "Aquila"
      },
      "photoPath": "images/species/golden-eagle.jpg",
      "photoCreditZh": "Eastern Sierra",
      "photoCreditEn": "Eastern Sierra, CA",
      "creditUrl": "https://www.inaturalist.org/observations?taxon_name=Aquila%20chrysaetos",
      "creditSource": "iNaturalist"
    },
    "red-tailed-hawk": {
      "id": "red-tailed-hawk",
      "category": "bird",
      "nameZh": "红尾鵟",
      "nameEn": "Red-tailed Hawk",
      "scientificName": "Buteo jamaicensis",
      "taxonomy": {
        "kingdom": "Animalia",
        "phylum": "Chordata",
        "class": "Aves",
        "order": "Accipitriformes",
        "family": "Accipitridae",
        "genus": "Buteo"
      },
      "photoPath": "images/species/red-tailed-hawk.jpg",
      "photoCreditZh": "Golden Gate NRA",
      "photoCreditEn": "Golden Gate NRA, CA",
      "creditUrl": "https://www.inaturalist.org/observations?taxon_name=Buteo%20jamaicensis",
      "creditSource": "iNaturalist"
    },
    "red-shouldered-hawk": {
      "id": "red-shouldered-hawk",
      "category": "bird",
      "nameZh": "赤肩鵟",
      "nameEn": "Red-shouldered Hawk",
      "scientificName": "Buteo lineatus",
      "taxonomy": {
        "kingdom": "Animalia",
        "phylum": "Chordata",
        "class": "Aves",
        "order": "Accipitriformes",
        "family": "Accipitridae",
        "genus": "Buteo"
      },
      "photoPath": "images/species/red-shouldered-hawk.jpg",
      "photoCreditZh": "Marin County",
      "photoCreditEn": "Marin County, CA",
      "creditUrl": "https://www.inaturalist.org/observations?taxon_name=Buteo%20lineatus",
      "creditSource": "iNaturalist"
    },
    "coopers-hawk": {
      "id": "coopers-hawk",
      "category": "bird",
      "nameZh": "库氏鹰",
      "nameEn": "Cooper's Hawk",
      "scientificName": "Accipiter cooperii",
      "taxonomy": {
        "kingdom": "Animalia",
        "phylum": "Chordata",
        "class": "Aves",
        "order": "Accipitriformes",
        "family": "Accipitridae",
        "genus": "Accipiter"
      },
      "photoPath": "images/species/coopers-hawk.jpg",
      "photoCreditZh": "Los Angeles",
      "photoCreditEn": "Los Angeles, CA",
      "creditUrl": "https://www.inaturalist.org/observations?taxon_name=Accipiter%20cooperii",
      "creditSource": "iNaturalist"
    },
    "northern-harrier": {
      "id": "northern-harrier",
      "category": "bird",
      "nameZh": "白尾鷂",
      "nameEn": "Northern Harrier",
      "scientificName": "Circus hudsonius",
      "taxonomy": {
        "kingdom": "Animalia",
        "phylum": "Chordata",
        "class": "Aves",
        "order": "Accipitriformes",
        "family": "Accipitridae",
        "genus": "Circus"
      },
      "photoPath": "images/species/northern-harrier.jpg",
      "photoCreditZh": "Carrizo Plain",
      "photoCreditEn": "Carrizo Plain, CA",
      "creditUrl": "https://www.inaturalist.org/observations?taxon_name=Circus%20hudsonius",
      "creditSource": "iNaturalist"
    },
    "american-kestrel": {
      "id": "american-kestrel",
      "category": "bird",
      "nameZh": "美洲隼",
      "nameEn": "American Kestrel",
      "scientificName": "Falco sparverius",
      "taxonomy": {
        "kingdom": "Animalia",
        "phylum": "Chordata",
        "class": "Aves",
        "order": "Falconiformes",
        "family": "Falconidae",
        "genus": "Falco"
      },
      "photoPath": "images/species/american-kestrel.jpg",
      "photoCreditZh": "Central Valley",
      "photoCreditEn": "Central Valley, CA",
      "creditUrl": "https://www.inaturalist.org/observations?taxon_name=Falco%20sparverius",
      "creditSource": "iNaturalist"
    },
    "peregrine-falcon": {
      "id": "peregrine-falcon",
      "category": "bird",
      "nameZh": "游隼",
      "nameEn": "Peregrine Falcon",
      "scientificName": "Falco peregrinus",
      "taxonomy": {
        "kingdom": "Animalia",
        "phylum": "Chordata",
        "class": "Aves",
        "order": "Falconiformes",
        "family": "Falconidae",
        "genus": "Falco"
      },
      "photoPath": "images/species/peregrine-falcon.jpg",
      "photoCreditZh": "Yosemite Valley",
      "photoCreditEn": "Yosemite Valley, CA",
      "creditUrl": "https://www.inaturalist.org/observations?taxon_name=Falco%20peregrinus",
      "creditSource": "iNaturalist"
    },
    "turkey-vulture": {
      "id": "turkey-vulture",
      "category": "bird",
      "nameZh": "红头美洲鹫",
      "nameEn": "Turkey Vulture",
      "scientificName": "Cathartes aura",
      "taxonomy": {
        "kingdom": "Animalia",
        "phylum": "Chordata",
        "class": "Aves",
        "order": "Cathartiformes",
        "family": "Cathartidae",
        "genus": "Cathartes"
      },
      "photoPath": "images/species/turkey-vulture.jpg",
      "photoCreditZh": "Big Sur",
      "photoCreditEn": "Big Sur, CA",
      "creditUrl": "https://www.inaturalist.org/observations?taxon_name=Cathartes%20aura",
      "creditSource": "iNaturalist"
    },
    "california-condor": {
      "id": "california-condor",
      "category": "bird",
      "nameZh": "加州神鹫",
      "nameEn": "California Condor",
      "scientificName": "Gymnogyps californianus",
      "taxonomy": {
        "kingdom": "Animalia",
        "phylum": "Chordata",
        "class": "Aves",
        "order": "Cathartiformes",
        "family": "Cathartidae",
        "genus": "Gymnogyps"
      },
      "photoPath": "images/species/california-condor.jpg",
      "photoCreditZh": "Pinnacles NP",
      "photoCreditEn": "Pinnacles National Park, CA",
      "creditUrl": "https://www.inaturalist.org/observations?taxon_name=Gymnogyps%20californianus",
      "creditSource": "iNaturalist"
    },
    "tule-elk": {
      "id": "tule-elk",
      "category": "mammal",
      "nameZh": "图勒麋鹿",
      "nameEn": "Tule Elk",
      "scientificName": "Cervus canadensis nannodes",
      "taxonomy": {
        "kingdom": "Animalia",
        "phylum": "Chordata",
        "class": "Mammalia",
        "order": "Artiodactyla",
        "family": "Cervidae",
        "genus": "Cervus"
      },
      "photoPath": "images/species/tule-elk.jpg",
      "photoCreditZh": "Point Reyes NS",
      "photoCreditEn": "Point Reyes NS, CA",
      "creditUrl": "https://www.inaturalist.org/observations?taxon_name=Cervus%20canadensis%20nannodes",
      "creditSource": "iNaturalist"
    },
    "mule-deer": {
      "id": "mule-deer",
      "category": "mammal",
      "nameZh": "黑尾鹿",
      "nameEn": "Mule Deer",
      "scientificName": "Odocoileus hemionus",
      "taxonomy": {
        "kingdom": "Animalia",
        "phylum": "Chordata",
        "class": "Mammalia",
        "order": "Artiodactyla",
        "family": "Cervidae",
        "genus": "Odocoileus"
      },
      "photoPath": "images/species/mule-deer.jpg",
      "photoCreditZh": "Yosemite NP",
      "photoCreditEn": "Yosemite National Park, CA",
      "creditUrl": "https://www.inaturalist.org/observations?taxon_name=Odocoileus%20hemionus",
      "creditSource": "iNaturalist"
    },
    "coyote": {
      "id": "coyote",
      "category": "mammal",
      "nameZh": "郊狼",
      "nameEn": "Coyote",
      "scientificName": "Canis latrans",
      "taxonomy": {
        "kingdom": "Animalia",
        "phylum": "Chordata",
        "class": "Mammalia",
        "order": "Carnivora",
        "family": "Canidae",
        "genus": "Canis"
      },
      "photoPath": "images/species/coyote.jpg",
      "photoCreditZh": "Golden Gate Park",
      "photoCreditEn": "Golden Gate Park, San Francisco, CA",
      "creditUrl": "https://www.inaturalist.org/observations?taxon_name=Canis%20latrans",
      "creditSource": "iNaturalist"
    },
    "gray-fox": {
      "id": "gray-fox",
      "category": "mammal",
      "nameZh": "灰狐",
      "nameEn": "Gray Fox",
      "scientificName": "Urocyon cinereoargenteus",
      "taxonomy": {
        "kingdom": "Animalia",
        "phylum": "Chordata",
        "class": "Mammalia",
        "order": "Carnivora",
        "family": "Canidae",
        "genus": "Urocyon"
      },
      "photoPath": "images/species/gray-fox.jpg",
      "photoCreditZh": "Santa Monica Mtns",
      "photoCreditEn": "Santa Monica Mountains, CA",
      "creditUrl": "https://www.inaturalist.org/observations?taxon_name=Urocyon%20cinereoargenteus",
      "creditSource": "iNaturalist"
    },
    "mountain-lion": {
      "id": "mountain-lion",
      "category": "mammal",
      "nameZh": "美洲狮",
      "nameEn": "Mountain Lion",
      "scientificName": "Puma concolor",
      "taxonomy": {
        "kingdom": "Animalia",
        "phylum": "Chordata",
        "class": "Mammalia",
        "order": "Carnivora",
        "family": "Felidae",
        "genus": "Puma"
      },
      "photoPath": "images/species/mountain-lion.jpg",
      "photoCreditZh": "Santa Cruz Mtns",
      "photoCreditEn": "Santa Cruz Mountains, CA",
      "creditUrl": "https://www.inaturalist.org/observations?taxon_name=Puma%20concolor",
      "creditSource": "iNaturalist"
    },
    "bobcat": {
      "id": "bobcat",
      "category": "mammal",
      "nameZh": "短尾猫",
      "nameEn": "Bobcat",
      "scientificName": "Lynx rufus",
      "taxonomy": {
        "kingdom": "Animalia",
        "phylum": "Chordata",
        "class": "Mammalia",
        "order": "Carnivora",
        "family": "Felidae",
        "genus": "Lynx"
      },
      "photoPath": "images/species/bobcat.jpg",
      "photoCreditZh": "Point Reyes NS",
      "photoCreditEn": "Point Reyes NS, CA",
      "creditUrl": "https://www.inaturalist.org/observations?taxon_name=Lynx%20rufus",
      "creditSource": "iNaturalist"
    },
    "black-bear": {
      "id": "black-bear",
      "category": "mammal",
      "nameZh": "美洲黑熊",
      "nameEn": "American Black Bear",
      "scientificName": "Ursus americanus",
      "taxonomy": {
        "kingdom": "Animalia",
        "phylum": "Chordata",
        "class": "Mammalia",
        "order": "Carnivora",
        "family": "Ursidae",
        "genus": "Ursus"
      },
      "photoPath": "images/species/black-bear.jpg",
      "photoCreditZh": "Sequoia NP",
      "photoCreditEn": "Sequoia National Park, CA",
      "creditUrl": "https://www.inaturalist.org/observations?taxon_name=Ursus%20americanus",
      "creditSource": "iNaturalist"
    },
    "raccoon": {
      "id": "raccoon",
      "category": "mammal",
      "nameZh": "浣熊",
      "nameEn": "Raccoon",
      "scientificName": "Procyon lotor",
      "taxonomy": {
        "kingdom": "Animalia",
        "phylum": "Chordata",
        "class": "Mammalia",
        "order": "Carnivora",
        "family": "Procyonidae",
        "genus": "Procyon"
      },
      "photoPath": "images/species/raccoon.jpg",
      "photoCreditZh": "San Francisco",
      "photoCreditEn": "San Francisco, CA",
      "creditUrl": "https://www.inaturalist.org/observations?taxon_name=Procyon%20lotor",
      "creditSource": "iNaturalist"
    },
    "striped-skunk": {
      "id": "striped-skunk",
      "category": "mammal",
      "nameZh": "条纹臭鼬",
      "nameEn": "Striped Skunk",
      "scientificName": "Mephitis mephitis",
      "taxonomy": {
        "kingdom": "Animalia",
        "phylum": "Chordata",
        "class": "Mammalia",
        "order": "Carnivora",
        "family": "Mephitidae",
        "genus": "Mephitis"
      },
      "photoPath": "images/species/striped-skunk.jpg",
      "photoCreditZh": "Central Valley",
      "photoCreditEn": "Central Valley, CA",
      "creditUrl": "https://www.inaturalist.org/observations?taxon_name=Mephitis%20mephitis",
      "creditSource": "iNaturalist"
    },
    "california-poppy": {
      "id": "california-poppy",
      "category": "plant",
      "nameZh": "加州花菱草",
      "nameEn": "California Poppy",
      "scientificName": "Eschscholzia californica",
      "taxonomy": {
        "kingdom": "Plantae",
        "phylum": "Tracheophyta",
        "class": "Magnoliopsida",
        "order": "Ranunculales",
        "family": "Papaveraceae",
        "genus": "Eschscholzia"
      },
      "photoPath": "images/species/california-poppy.jpg",
      "photoCreditZh": "Antelope Valley",
      "photoCreditEn": "Antelope Valley, CA",
      "creditUrl": "https://www.inaturalist.org/observations?taxon_name=Eschscholzia%20californica",
      "creditSource": "iNaturalist"
    },
    "arroyo-lupine": {
      "id": "arroyo-lupine",
      "category": "plant",
      "nameZh": "河岸羽扇豆",
      "nameEn": "Arroyo Lupine",
      "scientificName": "Lupinus succulentus",
      "taxonomy": {
        "kingdom": "Plantae",
        "phylum": "Tracheophyta",
        "class": "Magnoliopsida",
        "order": "Fabales",
        "family": "Fabaceae",
        "genus": "Lupinus"
      },
      "photoPath": "images/species/arroyo-lupine.jpg",
      "photoCreditZh": "Carrizo Plain",
      "photoCreditEn": "Carrizo Plain, CA",
      "creditUrl": "https://www.inaturalist.org/observations?taxon_name=Lupinus%20succulentus",
      "creditSource": "iNaturalist"
    },
    "lupinus-nanus": {
      "id": "lupinus-nanus",
      "category": "plant",
      "nameZh": "天空羽扇豆",
      "nameEn": "Sky Lupine",
      "scientificName": "Lupinus nanus",
      "taxonomy": {
        "kingdom": "Plantae",
        "phylum": "Tracheophyta",
        "class": "Magnoliopsida",
        "order": "Fabales",
        "family": "Fabaceae",
        "genus": "Lupinus"
      },
      "photoPath": "images/species/lupinus-nanus.jpg",
      "photoCreditZh": "Coastal grasslands",
      "photoCreditEn": "Coastal grasslands, CA",
      "creditUrl": "https://www.inaturalist.org/observations?taxon_name=Lupinus%20nanus",
      "creditSource": "iNaturalist"
    },
    "western-redbud": {
      "id": "western-redbud",
      "category": "plant",
      "nameZh": "加州紫荆",
      "nameEn": "Western Redbud",
      "scientificName": "Cercis occidentalis",
      "taxonomy": {
        "kingdom": "Plantae",
        "phylum": "Tracheophyta",
        "class": "Magnoliopsida",
        "order": "Fabales",
        "family": "Fabaceae",
        "genus": "Cercis"
      },
      "photoPath": "images/species/western-redbud.jpg",
      "photoCreditZh": "加州内陆丘陵",
      "photoCreditEn": "Interior foothills, CA",
      "creditUrl": "https://www.inaturalist.org/observations?taxon_name=Cercis%20occidentalis",
      "creditSource": "iNaturalist"
    },
    "baby-blue-eyes": {
      "id": "baby-blue-eyes",
      "category": "plant",
      "nameZh": "粉蝶花",
      "nameEn": "Baby Blue Eyes",
      "scientificName": "Nemophila menziesii",
      "taxonomy": {
        "kingdom": "Plantae",
        "phylum": "Tracheophyta",
        "class": "Magnoliopsida",
        "order": "Boraginales",
        "family": "Boraginaceae",
        "genus": "Nemophila"
      },
      "photoPath": "images/species/baby-blue-eyes.jpg",
      "photoCreditZh": "Coastal meadows",
      "photoCreditEn": "Coastal meadows, CA",
      "creditUrl": "https://www.inaturalist.org/observations?taxon_name=Nemophila%20menziesii",
      "creditSource": "iNaturalist"
    },
    "goldfields": {
      "id": "goldfields",
      "category": "plant",
      "nameZh": "金田菊",
      "nameEn": "Goldfields",
      "scientificName": "Lasthenia californica",
      "taxonomy": {
        "kingdom": "Plantae",
        "phylum": "Tracheophyta",
        "class": "Magnoliopsida",
        "order": "Asterales",
        "family": "Asteraceae",
        "genus": "Lasthenia"
      },
      "photoPath": "images/species/goldfields.jpg",
      "photoCreditZh": "Central Valley",
      "photoCreditEn": "Central Valley, CA",
      "creditUrl": "https://www.inaturalist.org/observations?taxon_name=Lasthenia%20californica",
      "creditSource": "iNaturalist"
    },
    "tidy-tips": {
      "id": "tidy-tips",
      "category": "plant",
      "nameZh": "白尖金菊",
      "nameEn": "Tidy Tips",
      "scientificName": "Layia platyglossa",
      "taxonomy": {
        "kingdom": "Plantae",
        "phylum": "Tracheophyta",
        "class": "Magnoliopsida",
        "order": "Asterales",
        "family": "Asteraceae",
        "genus": "Layia"
      },
      "photoPath": "images/species/tidy-tips.jpg",
      "photoCreditZh": "Carrizo Plain",
      "photoCreditEn": "Carrizo Plain, CA",
      "creditUrl": "https://www.inaturalist.org/observations?taxon_name=Layia%20platyglossa",
      "creditSource": "iNaturalist"
    },
    "desert-sunflower": {
      "id": "desert-sunflower",
      "category": "plant",
      "nameZh": "沙漠向日葵",
      "nameEn": "Desert Sunflower",
      "scientificName": "Geraea canescens",
      "taxonomy": {
        "kingdom": "Plantae",
        "phylum": "Tracheophyta",
        "class": "Magnoliopsida",
        "order": "Asterales",
        "family": "Asteraceae",
        "genus": "Geraea"
      },
      "photoPath": "images/species/desert-sunflower.jpg",
      "photoCreditZh": "Anza-Borrego Desert",
      "photoCreditEn": "Anza-Borrego Desert, CA",
      "creditUrl": "https://www.inaturalist.org/observations?taxon_name=Geraea%20canescens",
      "creditSource": "iNaturalist"
    },
    "sand-verbena": {
      "id": "sand-verbena",
      "category": "plant",
      "nameZh": "沙地马鞭草",
      "nameEn": "Sand Verbena",
      "scientificName": "Abronia villosa",
      "taxonomy": {
        "kingdom": "Plantae",
        "phylum": "Tracheophyta",
        "class": "Magnoliopsida",
        "order": "Caryophyllales",
        "family": "Nyctaginaceae",
        "genus": "Abronia"
      },
      "photoPath": "images/species/sand-verbena.jpg",
      "photoCreditZh": "Anza-Borrego Desert",
      "photoCreditEn": "Anza-Borrego Desert, CA",
      "creditUrl": "https://www.inaturalist.org/observations?taxon_name=Abronia%20villosa",
      "creditSource": "iNaturalist"
    },
    "desert-lily": {
      "id": "desert-lily",
      "category": "plant",
      "nameZh": "沙漠百合",
      "nameEn": "Desert Lily",
      "scientificName": "Hesperocallis undulata",
      "taxonomy": {
        "kingdom": "Plantae",
        "phylum": "Tracheophyta",
        "class": "Liliopsida",
        "order": "Asparagales",
        "family": "Asparagaceae",
        "genus": "Hesperocallis"
      },
      "photoPath": "images/species/desert-lily.jpg",
      "photoCreditZh": "Mojave Desert",
      "photoCreditEn": "Mojave Desert, CA",
      "creditUrl": "https://www.inaturalist.org/observations?taxon_name=Hesperocallis%20undulata",
      "creditSource": "iNaturalist"
    },
    "mariposa-lily": {
      "id": "mariposa-lily",
      "category": "plant",
      "nameZh": "蝴蝶百合",
      "nameEn": "Mariposa Lily",
      "scientificName": "Calochortus venustus",
      "taxonomy": {
        "kingdom": "Plantae",
        "phylum": "Tracheophyta",
        "class": "Liliopsida",
        "order": "Liliales",
        "family": "Liliaceae",
        "genus": "Calochortus"
      },
      "photoPath": "images/species/mariposa-lily.jpg",
      "photoCreditZh": "Sierra foothills",
      "photoCreditEn": "Sierra Nevada foothills, CA",
      "creditUrl": "https://www.inaturalist.org/observations?taxon_name=Calochortus%20venustus",
      "creditSource": "iNaturalist"
    },
    "chocolate-lily": {
      "id": "chocolate-lily",
      "category": "plant",
      "nameZh": "巧克力百合",
      "nameEn": "Chocolate Lily",
      "scientificName": "Fritillaria affinis",
      "taxonomy": {
        "kingdom": "Plantae",
        "phylum": "Tracheophyta",
        "class": "Liliopsida",
        "order": "Liliales",
        "family": "Liliaceae",
        "genus": "Fritillaria"
      },
      "photoPath": "images/species/chocolate-lily.jpg",
      "photoCreditZh": "Coast Ranges",
      "photoCreditEn": "Coast Ranges, CA",
      "creditUrl": "https://www.inaturalist.org/observations?taxon_name=Fritillaria%20affinis",
      "creditSource": "iNaturalist"
    },
    "western-blue-eyed-grass": {
      "id": "western-blue-eyed-grass",
      "category": "plant",
      "nameZh": "蓝眼草",
      "nameEn": "Western Blue-eyed Grass",
      "scientificName": "Sisyrinchium bellum",
      "taxonomy": {
        "kingdom": "Plantae",
        "phylum": "Tracheophyta",
        "class": "Liliopsida",
        "order": "Asparagales",
        "family": "Iridaceae",
        "genus": "Sisyrinchium"
      },
      "photoPath": "images/species/western-blue-eyed-grass.jpg",
      "photoCreditZh": "Coastal meadows",
      "photoCreditEn": "Coastal meadows, CA",
      "creditUrl": "https://www.inaturalist.org/observations?taxon_name=Sisyrinchium%20bellum",
      "creditSource": "iNaturalist"
    },
    "douglas-iris": {
      "id": "douglas-iris",
      "category": "plant",
      "nameZh": "道格拉斯鸢尾",
      "nameEn": "Douglas Iris",
      "scientificName": "Iris douglasiana",
      "taxonomy": {
        "kingdom": "Plantae",
        "phylum": "Tracheophyta",
        "class": "Liliopsida",
        "order": "Asparagales",
        "family": "Iridaceae",
        "genus": "Iris"
      },
      "photoPath": "images/species/douglas-iris.jpg",
      "photoCreditZh": "Coastal bluffs",
      "photoCreditEn": "Coastal bluffs, CA",
      "creditUrl": "https://www.inaturalist.org/observations?taxon_name=Iris%20douglasiana",
      "creditSource": "iNaturalist"
    },
    "california-fuchsia": {
      "id": "california-fuchsia",
      "category": "plant",
      "nameZh": "加州倒挂金钟",
      "nameEn": "California Fuchsia",
      "scientificName": "Epilobium canum",
      "taxonomy": {
        "kingdom": "Plantae",
        "phylum": "Tracheophyta",
        "class": "Magnoliopsida",
        "order": "Myrtales",
        "family": "Onagraceae",
        "genus": "Epilobium"
      },
      "photoPath": "images/species/california-fuchsia.jpg",
      "photoCreditZh": "Coastal scrub",
      "photoCreditEn": "Coastal scrub, CA",
      "creditUrl": "https://www.inaturalist.org/observations?taxon_name=Epilobium%20canum",
      "creditSource": "iNaturalist"
    },
    "sticky-monkeyflower": {
      "id": "sticky-monkeyflower",
      "category": "plant",
      "nameZh": "猴面花",
      "nameEn": "Sticky Monkeyflower",
      "scientificName": "Diplacus aurantiacus",
      "taxonomy": {
        "kingdom": "Plantae",
        "phylum": "Tracheophyta",
        "class": "Magnoliopsida",
        "order": "Lamiales",
        "family": "Phrymaceae",
        "genus": "Diplacus"
      },
      "photoPath": "images/species/sticky-monkeyflower.jpg",
      "photoCreditZh": "Chaparral",
      "photoCreditEn": "Chaparral, CA",
      "creditUrl": "https://www.inaturalist.org/observations?taxon_name=Diplacus%20aurantiacus",
      "creditSource": "iNaturalist"
    },
    "california-lilac": {
      "id": "california-lilac",
      "category": "plant",
      "nameZh": "加州丁香",
      "nameEn": "California Lilac",
      "scientificName": "Ceanothus thyrsiflorus",
      "taxonomy": {
        "kingdom": "Plantae",
        "phylum": "Tracheophyta",
        "class": "Magnoliopsida",
        "order": "Rosales",
        "family": "Rhamnaceae",
        "genus": "Ceanothus"
      },
      "photoPath": "images/species/california-lilac.jpg",
      "photoCreditZh": "Coastal scrub",
      "photoCreditEn": "Coastal scrub, CA",
      "creditUrl": "https://www.inaturalist.org/observations?taxon_name=Ceanothus%20thyrsiflorus",
      "creditSource": "iNaturalist"
    },
    "matilija-poppy": {
      "id": "matilija-poppy",
      "category": "plant",
      "nameZh": "煎蛋花",
      "nameEn": "Matilija Poppy",
      "scientificName": "Romneya coulteri",
      "taxonomy": {
        "kingdom": "Plantae",
        "phylum": "Tracheophyta",
        "class": "Magnoliopsida",
        "order": "Ranunculales",
        "family": "Papaveraceae",
        "genus": "Romneya"
      },
      "photoPath": "images/species/matilija-poppy.jpg",
      "photoCreditZh": "Southern California",
      "photoCreditEn": "Southern California",
      "creditUrl": "https://www.inaturalist.org/observations?taxon_name=Romneya%20coulteri",
      "creditSource": "iNaturalist"
    },
    "pacific-tree-frog": {
      "id": "pacific-tree-frog",
      "category": "amphibian",
      "nameZh": "太平洋树蛙",
      "nameEn": "Pacific Tree Frog",
      "scientificName": "Pseudacris regilla",
      "taxonomy": {
        "kingdom": "Animalia",
        "phylum": "Chordata",
        "class": "Amphibia",
        "order": "Anura",
        "family": "Hylidae",
        "genus": "Pseudacris"
      },
      "photoPath": "images/species/pacific-tree-frog.jpg",
      "photoCreditZh": "Coastal wetlands",
      "photoCreditEn": "Coastal wetlands, CA",
      "creditUrl": "https://www.inaturalist.org/observations?taxon_name=Pseudacris%20regilla",
      "creditSource": "iNaturalist"
    },
    "california-red-legged-frog": {
      "id": "california-red-legged-frog",
      "category": "amphibian",
      "nameZh": "加州红腿蛙",
      "nameEn": "California Red-legged Frog",
      "scientificName": "Rana draytonii",
      "taxonomy": {
        "kingdom": "Animalia",
        "phylum": "Chordata",
        "class": "Amphibia",
        "order": "Anura",
        "family": "Ranidae",
        "genus": "Rana"
      },
      "photoPath": "images/species/california-red-legged-frog.jpg",
      "photoCreditZh": "Bay Area creeks",
      "photoCreditEn": "Bay Area creeks, CA",
      "creditUrl": "https://www.inaturalist.org/observations?taxon_name=Rana%20draytonii",
      "creditSource": "iNaturalist"
    },
    "california-newt": {
      "id": "california-newt",
      "category": "amphibian",
      "nameZh": "加州肥螈",
      "nameEn": "California Newt",
      "scientificName": "Taricha torosa",
      "taxonomy": {
        "kingdom": "Animalia",
        "phylum": "Chordata",
        "class": "Amphibia",
        "order": "Urodela",
        "family": "Salamandridae",
        "genus": "Taricha"
      },
      "photoPath": "images/species/california-newt.jpg",
      "photoCreditZh": "Oak woodlands",
      "photoCreditEn": "Oak woodlands, CA",
      "creditUrl": "https://www.inaturalist.org/observations?taxon_name=Taricha%20torosa",
      "creditSource": "iNaturalist"
    },
    "rough-skinned-newt": {
      "id": "rough-skinned-newt",
      "category": "amphibian",
      "nameZh": "粗皮蝾螈",
      "nameEn": "Rough-skinned Newt",
      "scientificName": "Taricha granulosa",
      "taxonomy": {
        "kingdom": "Animalia",
        "phylum": "Chordata",
        "class": "Amphibia",
        "order": "Urodela",
        "family": "Salamandridae",
        "genus": "Taricha"
      },
      "photoPath": "images/species/rough-skinned-newt.jpg",
      "photoCreditZh": "North Coast forests",
      "photoCreditEn": "North Coast forests, CA",
      "creditUrl": "https://www.inaturalist.org/observations?taxon_name=Taricha%20granulosa",
      "creditSource": "iNaturalist"
    },
    "california-tiger-salamander": {
      "id": "california-tiger-salamander",
      "category": "amphibian",
      "nameZh": "加州虎纹蝾螈",
      "nameEn": "California Tiger Salamander",
      "scientificName": "Ambystoma californiense",
      "taxonomy": {
        "kingdom": "Animalia",
        "phylum": "Chordata",
        "class": "Amphibia",
        "order": "Urodela",
        "family": "Ambystomatidae",
        "genus": "Ambystoma"
      },
      "photoPath": "images/species/california-tiger-salamander.jpg",
      "photoCreditZh": "Central Valley",
      "photoCreditEn": "Central Valley, CA",
      "creditUrl": "https://www.inaturalist.org/observations?taxon_name=Ambystoma%20californiense",
      "creditSource": "iNaturalist"
    },
    "monarch-butterfly": {
      "id": "monarch-butterfly",
      "category": "insect",
      "nameZh": "黑脉金斑蝶",
      "nameEn": "Monarch Butterfly",
      "scientificName": "Danaus plexippus",
      "taxonomy": {
        "kingdom": "Animalia",
        "phylum": "Arthropoda",
        "class": "Insecta",
        "order": "Lepidoptera",
        "family": "Nymphalidae",
        "genus": "Danaus"
      },
      "photoPath": "images/species/monarch-butterfly.jpg",
      "photoCreditZh": "Pacific Grove",
      "photoCreditEn": "Pacific Grove, CA",
      "creditUrl": "https://www.inaturalist.org/observations?taxon_name=Danaus%20plexippus",
      "creditSource": "iNaturalist"
    },
    "western-swallowtail": {
      "id": "western-swallowtail",
      "category": "insect",
      "nameZh": "西部燕尾蝶",
      "nameEn": "Western Tiger Swallowtail",
      "scientificName": "Papilio rutulus",
      "taxonomy": {
        "kingdom": "Animalia",
        "phylum": "Arthropoda",
        "class": "Insecta",
        "order": "Lepidoptera",
        "family": "Papilionidae",
        "genus": "Papilio"
      },
      "photoPath": "images/species/western-swallowtail.jpg",
      "photoCreditZh": "Yosemite Valley",
      "photoCreditEn": "Yosemite Valley, CA",
      "creditUrl": "https://www.inaturalist.org/observations?taxon_name=Papilio%20rutulus",
      "creditSource": "iNaturalist"
    },
    "painted-lady": {
      "id": "painted-lady",
      "category": "insect",
      "nameZh": "彩蛱蝶",
      "nameEn": "Painted Lady",
      "scientificName": "Vanessa cardui",
      "taxonomy": {
        "kingdom": "Animalia",
        "phylum": "Arthropoda",
        "class": "Insecta",
        "order": "Lepidoptera",
        "family": "Nymphalidae",
        "genus": "Vanessa"
      },
      "photoPath": "images/species/painted-lady.jpg",
      "photoCreditZh": "Southern California",
      "photoCreditEn": "Southern California",
      "creditUrl": "https://www.inaturalist.org/observations?taxon_name=Vanessa%20cardui",
      "creditSource": "iNaturalist"
    },
    "pipevine-swallowtail": {
      "id": "pipevine-swallowtail",
      "category": "insect",
      "nameZh": "马兜铃燕尾蝶",
      "nameEn": "Pipevine Swallowtail",
      "scientificName": "Battus philenor",
      "taxonomy": {
        "kingdom": "Animalia",
        "phylum": "Arthropoda",
        "class": "Insecta",
        "order": "Lepidoptera",
        "family": "Papilionidae",
        "genus": "Battus"
      },
      "photoPath": "images/species/pipevine-swallowtail.jpg",
      "photoCreditZh": "Coast Ranges",
      "photoCreditEn": "Coast Ranges, CA",
      "creditUrl": "https://www.inaturalist.org/observations?taxon_name=Battus%20philenor",
      "creditSource": "iNaturalist"
    },
    "anna-blue": {
      "id": "anna-blue",
      "category": "insect",
      "nameZh": "安娜蓝灰蝶",
      "nameEn": "Anna's Blue",
      "scientificName": "Plebejus anna",
      "taxonomy": {
        "kingdom": "Animalia",
        "phylum": "Arthropoda",
        "class": "Insecta",
        "order": "Lepidoptera",
        "family": "Lycaenidae",
        "genus": "Plebejus"
      },
      "photoPath": "images/species/anna-blue.jpg",
      "photoCreditZh": "Sierra Nevada",
      "photoCreditEn": "Sierra Nevada, CA",
      "creditUrl": "https://www.inaturalist.org/observations?taxon_name=Plebejus%20anna",
      "creditSource": "iNaturalist"
    },
    "california-sister": {
      "id": "california-sister",
      "category": "insect",
      "nameZh": "加州修女蝶",
      "nameEn": "California Sister",
      "scientificName": "Adelpha californica",
      "taxonomy": {
        "kingdom": "Animalia",
        "phylum": "Arthropoda",
        "class": "Insecta",
        "order": "Lepidoptera",
        "family": "Nymphalidae",
        "genus": "Adelpha"
      },
      "photoPath": "images/species/california-sister.jpg",
      "photoCreditZh": "Oak woodlands",
      "photoCreditEn": "Oak woodlands, CA",
      "creditUrl": "https://www.inaturalist.org/observations?taxon_name=Adelpha%20californica",
      "creditSource": "iNaturalist"
    },
    "california-dogface": {
      "id": "california-dogface",
      "category": "insect",
      "nameZh": "加州州蝶",
      "nameEn": "California Dogface",
      "scientificName": "Zerene eurydice",
      "taxonomy": {
        "kingdom": "Animalia",
        "phylum": "Arthropoda",
        "class": "Insecta",
        "order": "Lepidoptera",
        "family": "Pieridae",
        "genus": "Zerene"
      },
      "photoPath": "images/species/california-dogface.jpg",
      "photoCreditZh": "Sierra foothills",
      "photoCreditEn": "Sierra foothills, CA",
      "creditUrl": "https://www.inaturalist.org/observations?taxon_name=Zerene%20eurydice",
      "creditSource": "iNaturalist"
    },
    "california-quail": {
      "id": "california-quail",
      "category": "bird",
      "nameZh": "加州鹌鹑",
      "nameEn": "California Quail",
      "scientificName": "Callipepla californica",
      "taxonomy": {
        "kingdom": "Animalia",
        "phylum": "Chordata",
        "class": "Aves",
        "order": "Galliformes",
        "family": "Odontophoridae",
        "genus": "Callipepla"
      },
      "photoPath": "images/species/california-quail.jpg",
      "photoCreditZh": "Oak woodlands",
      "photoCreditEn": "Oak woodlands, CA",
      "creditUrl": "https://www.inaturalist.org/observations?taxon_name=Callipepla%20californica",
      "creditSource": "iNaturalist"
    },
    "annas-hummingbird": {
      "id": "annas-hummingbird",
      "category": "bird",
      "nameZh": "安氏蜂鸟",
      "nameEn": "Anna's Hummingbird",
      "scientificName": "Calypte anna",
      "taxonomy": {
        "kingdom": "Animalia",
        "phylum": "Chordata",
        "class": "Aves",
        "order": "Apodiformes",
        "family": "Trochilidae",
        "genus": "Calypte"
      },
      "photoPath": "images/species/annas-hummingbird.jpg",
      "photoCreditZh": "Urban gardens",
      "photoCreditEn": "Urban gardens, CA",
      "creditUrl": "https://www.inaturalist.org/observations?taxon_name=Calypte%20anna",
      "creditSource": "iNaturalist"
    },
    "rufous-hummingbird": {
      "id": "rufous-hummingbird",
      "category": "bird",
      "nameZh": "棕煌蜂鸟",
      "nameEn": "Rufous Hummingbird",
      "scientificName": "Selasphorus rufus",
      "taxonomy": {
        "kingdom": "Animalia",
        "phylum": "Chordata",
        "class": "Aves",
        "order": "Apodiformes",
        "family": "Trochilidae",
        "genus": "Selasphorus"
      },
      "photoPath": "images/species/rufous-hummingbird.jpg",
      "photoCreditZh": "Spring migration",
      "photoCreditEn": "Spring migration, CA",
      "creditUrl": "https://www.inaturalist.org/observations?taxon_name=Selasphorus%20rufus",
      "creditSource": "iNaturalist"
    },
    "western-bluebird": {
      "id": "western-bluebird",
      "category": "bird",
      "nameZh": "西部蓝鸲",
      "nameEn": "Western Bluebird",
      "scientificName": "Sialia mexicana",
      "taxonomy": {
        "kingdom": "Animalia",
        "phylum": "Chordata",
        "class": "Aves",
        "order": "Passeriformes",
        "family": "Turdidae",
        "genus": "Sialia"
      },
      "photoPath": "images/species/western-bluebird.jpg",
      "photoCreditZh": "Oak woodlands",
      "photoCreditEn": "Oak woodlands, CA",
      "creditUrl": "https://www.inaturalist.org/observations?taxon_name=Sialia%20mexicana",
      "creditSource": "iNaturalist"
    },
    "acorn-woodpecker": {
      "id": "acorn-woodpecker",
      "category": "bird",
      "nameZh": "橡树啄木鸟",
      "nameEn": "Acorn Woodpecker",
      "scientificName": "Melanerpes formicivorus",
      "taxonomy": {
        "kingdom": "Animalia",
        "phylum": "Chordata",
        "class": "Aves",
        "order": "Piciformes",
        "family": "Picidae",
        "genus": "Melanerpes"
      },
      "photoPath": "images/species/acorn-woodpecker.jpg",
      "photoCreditZh": "Coast Ranges",
      "photoCreditEn": "Coast Ranges, CA",
      "creditUrl": "https://www.inaturalist.org/observations?taxon_name=Melanerpes%20formicivorus",
      "creditSource": "iNaturalist"
    },
    "northern-flicker": {
      "id": "northern-flicker",
      "category": "bird",
      "nameZh": "北扑翅鴷",
      "nameEn": "Northern Flicker",
      "scientificName": "Colaptes auratus",
      "taxonomy": {
        "kingdom": "Animalia",
        "phylum": "Chordata",
        "class": "Aves",
        "order": "Piciformes",
        "family": "Picidae",
        "genus": "Colaptes"
      },
      "photoPath": "images/species/northern-flicker.jpg",
      "photoCreditZh": "Urban parks",
      "photoCreditEn": "Urban parks, CA",
      "creditUrl": "https://www.inaturalist.org/observations?taxon_name=Colaptes%20auratus",
      "creditSource": "iNaturalist"
    },
    "western-scrub-jay": {
      "id": "western-scrub-jay",
      "category": "bird",
      "nameZh": "加州丛鸦",
      "nameEn": "California Scrub-Jay",
      "scientificName": "Aphelocoma californica",
      "taxonomy": {
        "kingdom": "Animalia",
        "phylum": "Chordata",
        "class": "Aves",
        "order": "Passeriformes",
        "family": "Corvidae",
        "genus": "Aphelocoma"
      },
      "photoPath": "images/species/western-scrub-jay.jpg",
      "photoCreditZh": "Throughout California",
      "photoCreditEn": "Throughout California",
      "creditUrl": "https://www.inaturalist.org/observations?taxon_name=Aphelocoma%20californica",
      "creditSource": "iNaturalist"
    },
    "stellers-jay": {
      "id": "stellers-jay",
      "category": "bird",
      "nameZh": "暗冠蓝鸦",
      "nameEn": "Steller's Jay",
      "scientificName": "Cyanocitta stelleri",
      "taxonomy": {
        "kingdom": "Animalia",
        "phylum": "Chordata",
        "class": "Aves",
        "order": "Passeriformes",
        "family": "Corvidae",
        "genus": "Cyanocitta"
      },
      "photoPath": "images/species/stellers-jay.jpg",
      "photoCreditZh": "Sierra Nevada",
      "photoCreditEn": "Sierra Nevada, CA",
      "creditUrl": "https://www.inaturalist.org/observations?taxon_name=Cyanocitta%20stelleri",
      "creditSource": "iNaturalist"
    },
    "western-meadowlark": {
      "id": "western-meadowlark",
      "category": "bird",
      "nameZh": "西部草地鹨",
      "nameEn": "Western Meadowlark",
      "scientificName": "Sturnella neglecta",
      "taxonomy": {
        "kingdom": "Animalia",
        "phylum": "Chordata",
        "class": "Aves",
        "order": "Passeriformes",
        "family": "Icteridae",
        "genus": "Sturnella"
      },
      "photoPath": "images/species/western-meadowlark.jpg",
      "photoCreditZh": "Central Valley",
      "photoCreditEn": "Central Valley, CA",
      "creditUrl": "https://www.inaturalist.org/observations?taxon_name=Sturnella%20neglecta",
      "creditSource": "iNaturalist"
    },
    "yellow-billed-magpie": {
      "id": "yellow-billed-magpie",
      "category": "bird",
      "nameZh": "黄嘴喜鹊",
      "nameEn": "Yellow-billed Magpie",
      "scientificName": "Pica nuttalli",
      "taxonomy": {
        "kingdom": "Animalia",
        "phylum": "Chordata",
        "class": "Aves",
        "order": "Passeriformes",
        "family": "Corvidae",
        "genus": "Pica"
      },
      "photoPath": "images/species/yellow-billed-magpie.jpg",
      "photoCreditZh": "Central Valley",
      "photoCreditEn": "Central Valley, CA",
      "creditUrl": "https://www.inaturalist.org/observations?taxon_name=Pica%20nuttalli",
      "creditSource": "iNaturalist"
    },
    "western-tanager": {
      "id": "western-tanager",
      "category": "bird",
      "nameZh": "西部唐纳雀",
      "nameEn": "Western Tanager",
      "scientificName": "Piranga ludoviciana",
      "taxonomy": {
        "kingdom": "Animalia",
        "phylum": "Chordata",
        "class": "Aves",
        "order": "Passeriformes",
        "family": "Cardinalidae",
        "genus": "Piranga"
      },
      "photoPath": "images/species/western-tanager.jpg",
      "photoCreditZh": "Sierra Nevada",
      "photoCreditEn": "Sierra Nevada, CA",
      "creditUrl": "https://www.inaturalist.org/observations?taxon_name=Piranga%20ludoviciana",
      "creditSource": "iNaturalist"
    },
    "lazuli-bunting": {
      "id": "lazuli-bunting",
      "category": "bird",
      "nameZh": "琉璃彩鹀",
      "nameEn": "Lazuli Bunting",
      "scientificName": "Passerina amoena",
      "taxonomy": {
        "kingdom": "Animalia",
        "phylum": "Chordata",
        "class": "Aves",
        "order": "Passeriformes",
        "family": "Cardinalidae",
        "genus": "Passerina"
      },
      "photoPath": "images/species/lazuli-bunting.jpg",
      "photoCreditZh": "Riparian areas",
      "photoCreditEn": "Riparian areas, CA",
      "creditUrl": "https://www.inaturalist.org/observations?taxon_name=Passerina%20amoena",
      "creditSource": "iNaturalist"
    },
    "hooded-oriole": {
      "id": "hooded-oriole",
      "category": "bird",
      "nameZh": "巾冠拟鹂",
      "nameEn": "Hooded Oriole",
      "scientificName": "Icterus cucullatus",
      "taxonomy": {
        "kingdom": "Animalia",
        "phylum": "Chordata",
        "class": "Aves",
        "order": "Passeriformes",
        "family": "Icteridae",
        "genus": "Icterus"
      },
      "photoPath": "images/species/hooded-oriole.jpg",
      "photoCreditZh": "Palm groves",
      "photoCreditEn": "Palm groves, Southern CA",
      "creditUrl": "https://www.inaturalist.org/observations?taxon_name=Icterus%20cucullatus",
      "creditSource": "iNaturalist"
    },
    "american-robin": {
      "id": "american-robin",
      "category": "bird",
      "nameZh": "旅鸫",
      "nameEn": "American Robin",
      "scientificName": "Turdus migratorius",
      "taxonomy": {
        "kingdom": "Animalia",
        "phylum": "Chordata",
        "class": "Aves",
        "order": "Passeriformes",
        "family": "Turdidae",
        "genus": "Turdus"
      },
      "photoPath": "images/species/american-robin.jpg",
      "photoCreditZh": "Throughout California",
      "photoCreditEn": "Throughout California",
      "creditUrl": "https://www.inaturalist.org/observations?taxon_name=Turdus%20migratorius",
      "creditSource": "iNaturalist"
    },
    "cedar-waxwing": {
      "id": "cedar-waxwing",
      "category": "bird",
      "nameZh": "雪松太平鸟",
      "nameEn": "Cedar Waxwing",
      "scientificName": "Bombycilla cedrorum",
      "taxonomy": {
        "kingdom": "Animalia",
        "phylum": "Chordata",
        "class": "Aves",
        "order": "Passeriformes",
        "family": "Bombycillidae",
        "genus": "Bombycilla"
      },
      "photoPath": "images/species/cedar-waxwing.jpg",
      "photoCreditZh": "Urban parks",
      "photoCreditEn": "Urban parks, CA",
      "creditUrl": "https://www.inaturalist.org/observations?taxon_name=Bombycilla%20cedrorum",
      "creditSource": "iNaturalist"
    },
    "killdeer": {
      "id": "killdeer",
      "category": "bird",
      "nameZh": "双领鸻",
      "nameEn": "Killdeer",
      "scientificName": "Charadrius vociferus",
      "taxonomy": {
        "kingdom": "Animalia",
        "phylum": "Chordata",
        "class": "Aves",
        "order": "Charadriiformes",
        "family": "Charadriidae",
        "genus": "Charadrius"
      },
      "photoPath": "images/species/killdeer.jpg",
      "photoCreditZh": "Open fields",
      "photoCreditEn": "Open fields, CA",
      "creditUrl": "https://www.inaturalist.org/observations?taxon_name=Charadrius%20vociferus",
      "creditSource": "iNaturalist"
    },
    "american-avocet": {
      "id": "american-avocet",
      "category": "bird",
      "nameZh": "褐胸反嘴鹬",
      "nameEn": "American Avocet",
      "scientificName": "Recurvirostra americana",
      "taxonomy": {
        "kingdom": "Animalia",
        "phylum": "Chordata",
        "class": "Aves",
        "order": "Charadriiformes",
        "family": "Recurvirostridae",
        "genus": "Recurvirostra"
      },
      "photoPath": "images/species/american-avocet.jpg",
      "photoCreditZh": "San Francisco Bay",
      "photoCreditEn": "San Francisco Bay, CA",
      "creditUrl": "https://www.inaturalist.org/observations?taxon_name=Recurvirostra%20americana",
      "creditSource": "iNaturalist"
    },
    "black-necked-stilt": {
      "id": "black-necked-stilt",
      "category": "bird",
      "nameZh": "黑颈长脚鹬",
      "nameEn": "Black-necked Stilt",
      "scientificName": "Himantopus mexicanus",
      "taxonomy": {
        "kingdom": "Animalia",
        "phylum": "Chordata",
        "class": "Aves",
        "order": "Charadriiformes",
        "family": "Recurvirostridae",
        "genus": "Himantopus"
      },
      "photoPath": "images/species/black-necked-stilt.jpg",
      "photoCreditZh": "Central Valley",
      "photoCreditEn": "Central Valley, CA",
      "creditUrl": "https://www.inaturalist.org/observations?taxon_name=Himantopus%20mexicanus",
      "creditSource": "iNaturalist"
    },
    "western-gull": {
      "id": "western-gull",
      "category": "bird",
      "nameZh": "西美鸥",
      "nameEn": "Western Gull",
      "scientificName": "Larus occidentalis",
      "taxonomy": {
        "kingdom": "Animalia",
        "phylum": "Chordata",
        "class": "Aves",
        "order": "Charadriiformes",
        "family": "Laridae",
        "genus": "Larus"
      },
      "photoPath": "images/species/western-gull.jpg",
      "photoCreditZh": "California coast",
      "photoCreditEn": "California coast",
      "creditUrl": "https://www.inaturalist.org/observations?taxon_name=Larus%20occidentalis",
      "creditSource": "iNaturalist"
    },
    "heermanns-gull": {
      "id": "heermanns-gull",
      "category": "bird",
      "nameZh": "希曼氏鸥",
      "nameEn": "Heermann's Gull",
      "scientificName": "Larus heermanni",
      "taxonomy": {
        "kingdom": "Animalia",
        "phylum": "Chordata",
        "class": "Aves",
        "order": "Charadriiformes",
        "family": "Laridae",
        "genus": "Larus"
      },
      "photoPath": "images/species/heermanns-gull.jpg",
      "photoCreditZh": "Monterey Bay",
      "photoCreditEn": "Monterey Bay, CA",
      "creditUrl": "https://www.inaturalist.org/observations?taxon_name=Larus%20heermanni",
      "creditSource": "iNaturalist"
    },
    "common-murre": {
      "id": "common-murre",
      "category": "bird",
      "nameZh": "普通海鸦",
      "nameEn": "Common Murre",
      "scientificName": "Uria aalge",
      "taxonomy": {
        "kingdom": "Animalia",
        "phylum": "Chordata",
        "class": "Aves",
        "order": "Charadriiformes",
        "family": "Alcidae",
        "genus": "Uria"
      },
      "photoPath": "images/species/common-murre.jpg",
      "photoCreditZh": "Farallon Islands",
      "photoCreditEn": "Farallon Islands, CA",
      "creditUrl": "https://www.inaturalist.org/observations?taxon_name=Uria%20aalge",
      "creditSource": "iNaturalist"
    },
    "tufted-puffin": {
      "id": "tufted-puffin",
      "category": "bird",
      "nameZh": "簇羽海鹦",
      "nameEn": "Tufted Puffin",
      "scientificName": "Fratercula cirrhata",
      "taxonomy": {
        "kingdom": "Animalia",
        "phylum": "Chordata",
        "class": "Aves",
        "order": "Charadriiformes",
        "family": "Alcidae",
        "genus": "Fratercula"
      },
      "photoPath": "images/species/tufted-puffin.jpg",
      "photoCreditZh": "Farallon Islands",
      "photoCreditEn": "Farallon Islands, CA",
      "creditUrl": "https://www.inaturalist.org/observations?taxon_name=Fratercula%20cirrhata",
      "creditSource": "iNaturalist"
    },
    "sierra-bighorn": {
      "id": "sierra-bighorn",
      "category": "mammal",
      "nameZh": "内华达大角羊",
      "nameEn": "Sierra Nevada Bighorn Sheep",
      "scientificName": "Ovis canadensis sierrae",
      "taxonomy": {
        "kingdom": "Animalia",
        "phylum": "Chordata",
        "class": "Mammalia",
        "order": "Artiodactyla",
        "family": "Bovidae",
        "genus": "Ovis"
      },
      "photoPath": "images/species/sierra-bighorn.jpg",
      "photoCreditZh": "Eastern Sierra",
      "photoCreditEn": "Eastern Sierra, CA",
      "creditUrl": "https://www.inaturalist.org/observations?taxon_name=Ovis%20canadensis%20sierrae",
      "creditSource": "iNaturalist"
    },
    "desert-bighorn": {
      "id": "desert-bighorn",
      "category": "mammal",
      "nameZh": "沙漠大角羊",
      "nameEn": "Desert Bighorn Sheep",
      "scientificName": "Ovis canadensis nelsoni",
      "taxonomy": {
        "kingdom": "Animalia",
        "phylum": "Chordata",
        "class": "Mammalia",
        "order": "Artiodactyla",
        "family": "Bovidae",
        "genus": "Ovis"
      },
      "photoPath": "images/species/desert-bighorn.jpg",
      "photoCreditZh": "Mojave Desert",
      "photoCreditEn": "Mojave Desert, CA",
      "creditUrl": "https://www.inaturalist.org/observations?taxon_name=Ovis%20canadensis%20nelsoni",
      "creditSource": "iNaturalist"
    },
    "yellow-bellied-marmot": {
      "id": "yellow-bellied-marmot",
      "category": "mammal",
      "nameZh": "黄腹旱獭",
      "nameEn": "Yellow-bellied Marmot",
      "scientificName": "Marmota flaviventris",
      "taxonomy": {
        "kingdom": "Animalia",
        "phylum": "Chordata",
        "class": "Mammalia",
        "order": "Rodentia",
        "family": "Sciuridae",
        "genus": "Marmota"
      },
      "photoPath": "images/species/yellow-bellied-marmot.jpg",
      "photoCreditZh": "Yosemite NP",
      "photoCreditEn": "Yosemite National Park, CA",
      "creditUrl": "https://www.inaturalist.org/observations?taxon_name=Marmota%20flaviventris",
      "creditSource": "iNaturalist"
    },
    "western-gray-squirrel": {
      "id": "western-gray-squirrel",
      "category": "mammal",
      "nameZh": "西部灰松鼠",
      "nameEn": "Western Gray Squirrel",
      "scientificName": "Sciurus griseus",
      "taxonomy": {
        "kingdom": "Animalia",
        "phylum": "Chordata",
        "class": "Mammalia",
        "order": "Rodentia",
        "family": "Sciuridae",
        "genus": "Sciurus"
      },
      "photoPath": "images/species/western-gray-squirrel.jpg",
      "photoCreditZh": "Oak woodlands",
      "photoCreditEn": "Oak woodlands, CA",
      "creditUrl": "https://www.inaturalist.org/observations?taxon_name=Sciurus%20griseus",
      "creditSource": "iNaturalist"
    },
    "california-ground-squirrel": {
      "id": "california-ground-squirrel",
      "category": "mammal",
      "nameZh": "加州地松鼠",
      "nameEn": "California Ground Squirrel",
      "scientificName": "Otospermophilus beecheyi",
      "taxonomy": {
        "kingdom": "Animalia",
        "phylum": "Chordata",
        "class": "Mammalia",
        "order": "Rodentia",
        "family": "Sciuridae",
        "genus": "Otospermophilus"
      },
      "photoPath": "images/species/california-ground-squirrel.jpg",
      "photoCreditZh": "Throughout California",
      "photoCreditEn": "Throughout California",
      "creditUrl": "https://www.inaturalist.org/observations?taxon_name=Otospermophilus%20beecheyi",
      "creditSource": "iNaturalist"
    },
    "desert-kangaroo-rat": {
      "id": "desert-kangaroo-rat",
      "category": "mammal",
      "nameZh": "沙漠更格卢鼠",
      "nameEn": "Desert Kangaroo Rat",
      "scientificName": "Dipodomys deserti",
      "taxonomy": {
        "kingdom": "Animalia",
        "phylum": "Chordata",
        "class": "Mammalia",
        "order": "Rodentia",
        "family": "Heteromyidae",
        "genus": "Dipodomys"
      },
      "photoPath": "images/species/desert-kangaroo-rat.jpg",
      "photoCreditZh": "Mojave Desert",
      "photoCreditEn": "Mojave Desert, CA",
      "creditUrl": "https://www.inaturalist.org/observations?taxon_name=Dipodomys%20deserti",
      "creditSource": "iNaturalist"
    },
    "desert-tortoise": {
      "id": "desert-tortoise",
      "category": "reptile",
      "nameZh": "沙漠龟",
      "nameEn": "Desert Tortoise",
      "scientificName": "Gopherus agassizii",
      "taxonomy": {
        "kingdom": "Animalia",
        "phylum": "Chordata",
        "class": "Reptilia",
        "order": "Testudines",
        "family": "Testudinidae",
        "genus": "Gopherus"
      },
      "photoPath": "images/species/desert-tortoise.jpg",
      "photoCreditZh": "Mojave Desert",
      "photoCreditEn": "Mojave Desert, CA",
      "creditUrl": "https://www.inaturalist.org/observations?taxon_name=Gopherus%20agassizii",
      "creditSource": "iNaturalist"
    },
    "western-fence-lizard": {
      "id": "western-fence-lizard",
      "category": "reptile",
      "nameZh": "西部篱蜥",
      "nameEn": "Western Fence Lizard",
      "scientificName": "Sceloporus occidentalis",
      "taxonomy": {
        "kingdom": "Animalia",
        "phylum": "Chordata",
        "class": "Reptilia",
        "order": "Squamata",
        "family": "Phrynosomatidae",
        "genus": "Sceloporus"
      },
      "photoPath": "images/species/western-fence-lizard.jpg",
      "photoCreditZh": "Throughout California",
      "photoCreditEn": "Throughout California",
      "creditUrl": "https://www.inaturalist.org/observations?taxon_name=Sceloporus%20occidentalis",
      "creditSource": "iNaturalist"
    },
    "western-rattlesnake": {
      "id": "western-rattlesnake",
      "category": "reptile",
      "nameZh": "西部响尾蛇",
      "nameEn": "Western Rattlesnake",
      "scientificName": "Crotalus oreganus",
      "taxonomy": {
        "kingdom": "Animalia",
        "phylum": "Chordata",
        "class": "Reptilia",
        "order": "Squamata",
        "family": "Viperidae",
        "genus": "Crotalus"
      },
      "photoPath": "images/species/western-rattlesnake.jpg",
      "photoCreditZh": "Sierra foothills",
      "photoCreditEn": "Sierra foothills, CA",
      "creditUrl": "https://www.inaturalist.org/observations?taxon_name=Crotalus%20oreganus",
      "creditSource": "iNaturalist"
    },
    "chuckwalla": {
      "id": "chuckwalla",
      "category": "reptile",
      "nameZh": "变色沙蜥",
      "nameEn": "Chuckwalla",
      "scientificName": "Sauromalus ater",
      "taxonomy": {
        "kingdom": "Animalia",
        "phylum": "Chordata",
        "class": "Reptilia",
        "order": "Squamata",
        "family": "Iguanidae",
        "genus": "Sauromalus"
      },
      "photoPath": "images/species/chuckwalla.jpg",
      "photoCreditZh": "Colorado Desert",
      "photoCreditEn": "Colorado Desert, CA",
      "creditUrl": "https://www.inaturalist.org/observations?taxon_name=Sauromalus%20ater",
      "creditSource": "iNaturalist"
    },
    "leopard-lizard": {
      "id": "leopard-lizard",
      "category": "reptile",
      "nameZh": "豹斑蜥",
      "nameEn": "Blunt-nosed Leopard Lizard",
      "scientificName": "Gambelia sila",
      "taxonomy": {
        "kingdom": "Animalia",
        "phylum": "Chordata",
        "class": "Reptilia",
        "order": "Squamata",
        "family": "Crotaphytidae",
        "genus": "Gambelia"
      },
      "photoPath": "images/species/leopard-lizard.jpg",
      "photoCreditZh": "San Joaquin Valley",
      "photoCreditEn": "San Joaquin Valley, CA",
      "creditUrl": "https://www.inaturalist.org/observations?taxon_name=Gambelia%20sila",
      "creditSource": "iNaturalist"
    },
    "greater-roadrunner": {
      "id": "greater-roadrunner",
      "category": "bird",
      "nameZh": "走鹃",
      "nameEn": "Greater Roadrunner",
      "scientificName": "Geococcyx californianus",
      "taxonomy": {
        "kingdom": "Animalia",
        "phylum": "Chordata",
        "class": "Aves",
        "order": "Cuculiformes",
        "family": "Cuculidae",
        "genus": "Geococcyx"
      },
      "photoPath": "images/species/greater-roadrunner.jpg",
      "photoCreditZh": "Southern deserts",
      "photoCreditEn": "Southern California deserts",
      "creditUrl": "https://www.inaturalist.org/observations?taxon_name=Geococcyx%20californianus",
      "creditSource": "iNaturalist"
    },
    "desert-tarantula": {
      "id": "desert-tarantula",
      "category": "insect",
      "nameZh": "沙漠狼蛛",
      "nameEn": "Desert Tarantula",
      "scientificName": "Aphonopelma spp.",
      "taxonomy": {
        "kingdom": "Animalia",
        "phylum": "Arthropoda",
        "class": "Arachnida",
        "order": "Araneae",
        "family": "Theraphosidae",
        "genus": "Aphonopelma"
      },
      "photoPath": "images/species/desert-tarantula.jpg",
      "photoCreditZh": "Mojave Desert",
      "photoCreditEn": "Mojave Desert, CA",
      "creditUrl": "https://www.inaturalist.org/observations?taxon_name=Aphonopelma%20spp.",
      "creditSource": "iNaturalist"
    },
    "california-grunion": {
      "id": "california-grunion",
      "category": "fish",
      "nameZh": "加州滑银鱼",
      "nameEn": "California Grunion",
      "scientificName": "Leuresthes tenuis",
      "taxonomy": {
        "kingdom": "Animalia",
        "phylum": "Chordata",
        "class": "Actinopterygii",
        "order": "Atheriniformes",
        "family": "Atherinopsidae",
        "genus": "Leuresthes"
      },
      "photoPath": "images/species/california-grunion.jpg",
      "photoCreditZh": "Southern CA beaches",
      "photoCreditEn": "Southern California beaches",
      "creditUrl": "https://www.inaturalist.org/observations?taxon_name=Leuresthes%20tenuis",
      "creditSource": "iNaturalist"
    },
    "pacific-angel-shark": {
      "id": "pacific-angel-shark",
      "category": "fish",
      "nameZh": "太平洋扁鲨",
      "nameEn": "Pacific Angel Shark",
      "scientificName": "Squatina californica",
      "taxonomy": {
        "kingdom": "Animalia",
        "phylum": "Chordata",
        "class": "Chondrichthyes",
        "order": "Squatiniformes",
        "family": "Squatinidae",
        "genus": "Squatina"
      },
      "photoPath": "images/species/pacific-angel-shark.jpg",
      "photoCreditZh": "Channel Islands",
      "photoCreditEn": "Channel Islands, CA",
      "creditUrl": "https://www.inaturalist.org/observations?taxon_name=Squatina%20californica",
      "creditSource": "iNaturalist"
    },
    "aggregating-anemone": {
      "id": "aggregating-anemone",
      "category": "marine",
      "nameZh": "群聚海葵",
      "nameEn": "Aggregating Anemone",
      "scientificName": "Anthopleura elegantissima",
      "taxonomy": {
        "kingdom": "Animalia",
        "phylum": "Cnidaria",
        "class": "Anthozoa",
        "order": "Actiniaria",
        "family": "Actiniidae",
        "genus": "Anthopleura"
      },
      "photoPath": "images/species/aggregating-anemone.jpg",
      "photoCreditZh": "Tide pools, CA coast",
      "photoCreditEn": "California tide pools",
      "creditUrl": "https://www.inaturalist.org/observations?taxon_name=Anthopleura%20elegantissima",
      "creditSource": "iNaturalist"
    },
    "ochre-sea-star": {
      "id": "ochre-sea-star",
      "category": "marine",
      "nameZh": "赭色海星",
      "nameEn": "Ochre Sea Star",
      "scientificName": "Pisaster ochraceus",
      "taxonomy": {
        "kingdom": "Animalia",
        "phylum": "Echinodermata",
        "class": "Asteroidea",
        "order": "Forcipulatida",
        "family": "Asteriidae",
        "genus": "Pisaster"
      },
      "photoPath": "images/species/ochre-sea-star.jpg",
      "photoCreditZh": "California tide pools",
      "photoCreditEn": "California tide pools",
      "creditUrl": "https://www.inaturalist.org/observations?taxon_name=Pisaster%20ochraceus",
      "creditSource": "iNaturalist"
    },
    "california-mussel": {
      "id": "california-mussel",
      "category": "marine",
      "nameZh": "加州贻贝",
      "nameEn": "California Mussel",
      "scientificName": "Mytilus californianus",
      "taxonomy": {
        "kingdom": "Animalia",
        "phylum": "Mollusca",
        "class": "Bivalvia",
        "order": "Mytilida",
        "family": "Mytilidae",
        "genus": "Mytilus"
      },
      "photoPath": "images/species/california-mussel.jpg",
      "photoCreditZh": "Rocky intertidal",
      "photoCreditEn": "Rocky intertidal, CA",
      "creditUrl": "https://www.inaturalist.org/observations?taxon_name=Mytilus%20californianus",
      "creditSource": "iNaturalist"
    },
    "purple-sea-urchin": {
      "id": "purple-sea-urchin",
      "category": "marine",
      "nameZh": "紫海胆",
      "nameEn": "Purple Sea Urchin",
      "scientificName": "Strongylocentrotus purpuratus",
      "taxonomy": {
        "kingdom": "Animalia",
        "phylum": "Echinodermata",
        "class": "Echinoidea",
        "order": "Camarodonta",
        "family": "Strongylocentrotidae",
        "genus": "Strongylocentrotus"
      },
      "photoPath": "images/species/purple-sea-urchin.jpg",
      "photoCreditZh": "Kelp forests",
      "photoCreditEn": "Kelp forests, CA",
      "creditUrl": "https://www.inaturalist.org/observations?taxon_name=Strongylocentrotus%20purpuratus",
      "creditSource": "iNaturalist"
    },
    "giant-green-anemone": {
      "id": "giant-green-anemone",
      "category": "marine",
      "nameZh": "巨绿海葵",
      "nameEn": "Giant Green Anemone",
      "scientificName": "Anthopleura xanthogrammica",
      "taxonomy": {
        "kingdom": "Animalia",
        "phylum": "Cnidaria",
        "class": "Anthozoa",
        "order": "Actiniaria",
        "family": "Actiniidae",
        "genus": "Anthopleura"
      },
      "photoPath": "images/species/giant-green-anemone.jpg",
      "photoCreditZh": "Tide pools",
      "photoCreditEn": "Tide pools, CA",
      "creditUrl": "https://www.inaturalist.org/observations?taxon_name=Anthopleura%20xanthogrammica",
      "creditSource": "iNaturalist"
    },
    "chinook-salmon": {
      "id": "chinook-salmon",
      "category": "fish",
      "nameZh": "奇努克鲑鱼",
      "nameEn": "Chinook Salmon",
      "scientificName": "Oncorhynchus tshawytscha",
      "taxonomy": {
        "kingdom": "Animalia",
        "phylum": "Chordata",
        "class": "Actinopterygii",
        "order": "Salmoniformes",
        "family": "Salmonidae",
        "genus": "Oncorhynchus"
      },
      "photoPath": "images/species/chinook-salmon.jpg",
      "photoCreditZh": "Sacramento River",
      "photoCreditEn": "Sacramento River, CA",
      "creditUrl": "https://www.inaturalist.org/observations?taxon_name=Oncorhynchus%20tshawytscha",
      "creditSource": "iNaturalist"
    },
    "coho-salmon": {
      "id": "coho-salmon",
      "category": "fish",
      "nameZh": "银鲑",
      "nameEn": "Coho Salmon",
      "scientificName": "Oncorhynchus kisutch",
      "taxonomy": {
        "kingdom": "Animalia",
        "phylum": "Chordata",
        "class": "Actinopterygii",
        "order": "Salmoniformes",
        "family": "Salmonidae",
        "genus": "Oncorhynchus"
      },
      "photoPath": "images/species/coho-salmon.jpg",
      "photoCreditZh": "North Coast streams",
      "photoCreditEn": "North Coast streams, CA",
      "creditUrl": "https://www.inaturalist.org/observations?taxon_name=Oncorhynchus%20kisutch",
      "creditSource": "iNaturalist"
    },
    "steelhead": {
      "id": "steelhead",
      "category": "fish",
      "nameZh": "硬头鳟",
      "nameEn": "Steelhead Trout",
      "scientificName": "Oncorhynchus mykiss",
      "taxonomy": {
        "kingdom": "Animalia",
        "phylum": "Chordata",
        "class": "Actinopterygii",
        "order": "Salmoniformes",
        "family": "Salmonidae",
        "genus": "Oncorhynchus"
      },
      "photoPath": "images/species/steelhead.jpg",
      "photoCreditZh": "Russian River",
      "photoCreditEn": "Russian River, CA",
      "creditUrl": "https://www.inaturalist.org/observations?taxon_name=Oncorhynchus%20mykiss",
      "creditSource": "iNaturalist"
    },
    "coast-redwood": {
      "id": "coast-redwood",
      "category": "plant",
      "nameZh": "海岸红杉",
      "nameEn": "Coast Redwood",
      "scientificName": "Sequoia sempervirens",
      "taxonomy": {
        "kingdom": "Plantae",
        "phylum": "Tracheophyta",
        "class": "Pinopsida",
        "order": "Pinales",
        "family": "Cupressaceae",
        "genus": "Sequoia"
      },
      "photoPath": "images/species/coast-redwood.jpg",
      "photoCreditZh": "Muir Woods NM",
      "photoCreditEn": "Muir Woods National Monument, CA",
      "creditUrl": "https://www.inaturalist.org/observations?taxon_name=Sequoia%20sempervirens",
      "creditSource": "iNaturalist"
    },
    "giant-sequoia": {
      "id": "giant-sequoia",
      "category": "plant",
      "nameZh": "巨杉",
      "nameEn": "Giant Sequoia",
      "scientificName": "Sequoiadendron giganteum",
      "taxonomy": {
        "kingdom": "Plantae",
        "phylum": "Tracheophyta",
        "class": "Pinopsida",
        "order": "Pinales",
        "family": "Cupressaceae",
        "genus": "Sequoiadendron"
      },
      "photoPath": "images/species/giant-sequoia.jpg",
      "photoCreditZh": "Sequoia NP",
      "photoCreditEn": "Sequoia National Park, CA",
      "creditUrl": "https://www.inaturalist.org/observations?taxon_name=Sequoiadendron%20giganteum",
      "creditSource": "iNaturalist"
    },
    "california-black-oak": {
      "id": "california-black-oak",
      "category": "plant",
      "nameZh": "加州黑栎",
      "nameEn": "California Black Oak",
      "scientificName": "Quercus kelloggii",
      "taxonomy": {
        "kingdom": "Plantae",
        "phylum": "Tracheophyta",
        "class": "Magnoliopsida",
        "order": "Fagales",
        "family": "Fagaceae",
        "genus": "Quercus"
      },
      "photoPath": "images/species/california-black-oak.jpg",
      "photoCreditZh": "Yosemite NP",
      "photoCreditEn": "Yosemite National Park, CA",
      "creditUrl": "https://www.inaturalist.org/observations?taxon_name=Quercus%20kelloggii",
      "creditSource": "iNaturalist"
    },
    "coast-live-oak": {
      "id": "coast-live-oak",
      "category": "plant",
      "nameZh": "海岸活橡",
      "nameEn": "Coast Live Oak",
      "scientificName": "Quercus agrifolia",
      "taxonomy": {
        "kingdom": "Plantae",
        "phylum": "Tracheophyta",
        "class": "Magnoliopsida",
        "order": "Fagales",
        "family": "Fagaceae",
        "genus": "Quercus"
      },
      "photoPath": "images/species/coast-live-oak.jpg",
      "photoCreditZh": "Coastal valleys",
      "photoCreditEn": "Coastal valleys, CA",
      "creditUrl": "https://www.inaturalist.org/observations?taxon_name=Quercus%20agrifolia",
      "creditSource": "iNaturalist"
    },
    "blue-oak": {
      "id": "blue-oak",
      "category": "plant",
      "nameZh": "蓝橡树",
      "nameEn": "Blue Oak",
      "scientificName": "Quercus douglasii",
      "taxonomy": {
        "kingdom": "Plantae",
        "phylum": "Tracheophyta",
        "class": "Magnoliopsida",
        "order": "Fagales",
        "family": "Fagaceae",
        "genus": "Quercus"
      },
      "photoPath": "images/species/blue-oak.jpg",
      "photoCreditZh": "Sierra foothills",
      "photoCreditEn": "Sierra Nevada foothills, CA",
      "creditUrl": "https://www.inaturalist.org/observations?taxon_name=Quercus%20douglasii",
      "creditSource": "iNaturalist"
    },
    "quaking-aspen": {
      "id": "quaking-aspen",
      "category": "plant",
      "nameZh": "颤杨",
      "nameEn": "Quaking Aspen",
      "scientificName": "Populus tremuloides",
      "taxonomy": {
        "kingdom": "Plantae",
        "phylum": "Tracheophyta",
        "class": "Magnoliopsida",
        "order": "Malpighiales",
        "family": "Salicaceae",
        "genus": "Populus"
      },
      "photoPath": "images/species/quaking-aspen.jpg",
      "photoCreditZh": "Eastern Sierra",
      "photoCreditEn": "Eastern Sierra, CA",
      "creditUrl": "https://www.inaturalist.org/observations?taxon_name=Populus%20tremuloides",
      "creditSource": "iNaturalist"
    },
    "california-buckeye": {
      "id": "california-buckeye",
      "category": "plant",
      "nameZh": "加州七叶树",
      "nameEn": "California Buckeye",
      "scientificName": "Aesculus californica",
      "taxonomy": {
        "kingdom": "Plantae",
        "phylum": "Tracheophyta",
        "class": "Magnoliopsida",
        "order": "Sapindales",
        "family": "Sapindaceae",
        "genus": "Aesculus"
      },
      "photoPath": "images/species/california-buckeye.jpg",
      "photoCreditZh": "Coast Ranges",
      "photoCreditEn": "Coast Ranges, CA",
      "creditUrl": "https://www.inaturalist.org/observations?taxon_name=Aesculus%20californica",
      "creditSource": "iNaturalist"
    },
    "western-sycamore": {
      "id": "western-sycamore",
      "category": "plant",
      "nameZh": "加州悬铃木",
      "nameEn": "Western Sycamore",
      "scientificName": "Platanus racemosa",
      "taxonomy": {
        "kingdom": "Plantae",
        "phylum": "Tracheophyta",
        "class": "Magnoliopsida",
        "order": "Proteales",
        "family": "Platanaceae",
        "genus": "Platanus"
      },
      "photoPath": "images/species/western-sycamore.jpg",
      "photoCreditZh": "Riparian zones",
      "photoCreditEn": "Riparian zones, CA",
      "creditUrl": "https://www.inaturalist.org/observations?taxon_name=Platanus%20racemosa",
      "creditSource": "iNaturalist"
    },
    "incense-cedar": {
      "id": "incense-cedar",
      "category": "plant",
      "nameZh": "香雪松",
      "nameEn": "Incense Cedar",
      "scientificName": "Calocedrus decurrens",
      "taxonomy": {
        "kingdom": "Plantae",
        "phylum": "Tracheophyta",
        "class": "Pinopsida",
        "order": "Pinales",
        "family": "Cupressaceae",
        "genus": "Calocedrus"
      },
      "photoPath": "images/species/incense-cedar.jpg",
      "photoCreditZh": "Sierra Nevada",
      "photoCreditEn": "Sierra Nevada, CA",
      "creditUrl": "https://www.inaturalist.org/observations?taxon_name=Calocedrus%20decurrens",
      "creditSource": "iNaturalist"
    },
    "sugar-pine": {
      "id": "sugar-pine",
      "category": "plant",
      "nameZh": "糖松",
      "nameEn": "Sugar Pine",
      "scientificName": "Pinus lambertiana",
      "taxonomy": {
        "kingdom": "Plantae",
        "phylum": "Tracheophyta",
        "class": "Pinopsida",
        "order": "Pinales",
        "family": "Pinaceae",
        "genus": "Pinus"
      },
      "photoPath": "images/species/sugar-pine.jpg",
      "photoCreditZh": "Sierra Nevada",
      "photoCreditEn": "Sierra Nevada, CA",
      "creditUrl": "https://www.inaturalist.org/observations?taxon_name=Pinus%20lambertiana",
      "creditSource": "iNaturalist"
    },
    "manzanita": {
      "id": "manzanita",
      "category": "plant",
      "nameZh": "熊果树",
      "nameEn": "Manzanita",
      "scientificName": "Arctostaphylos manzanita",
      "taxonomy": {
        "kingdom": "Plantae",
        "phylum": "Tracheophyta",
        "class": "Magnoliopsida",
        "order": "Ericales",
        "family": "Ericaceae",
        "genus": "Arctostaphylos"
      },
      "photoPath": "images/species/manzanita.jpg",
      "photoCreditZh": "Chaparral",
      "photoCreditEn": "Chaparral, CA",
      "creditUrl": "https://www.inaturalist.org/observations?taxon_name=Arctostaphylos%20manzanita",
      "creditSource": "iNaturalist"
    },
    "joshua-tree": {
      "id": "joshua-tree",
      "category": "plant",
      "nameZh": "约书亚树",
      "nameEn": "Joshua Tree",
      "scientificName": "Yucca brevifolia",
      "taxonomy": {
        "kingdom": "Plantae",
        "phylum": "Tracheophyta",
        "class": "Liliopsida",
        "order": "Asparagales",
        "family": "Asparagaceae",
        "genus": "Yucca"
      },
      "photoPath": "images/species/joshua-tree.jpg",
      "photoCreditZh": "Joshua Tree NP",
      "photoCreditEn": "Joshua Tree National Park, CA",
      "creditUrl": "https://www.inaturalist.org/observations?taxon_name=Yucca%20brevifolia",
      "creditSource": "iNaturalist"
    },
    "creosote-bush": {
      "id": "creosote-bush",
      "category": "plant",
      "nameZh": "木馏油灌木",
      "nameEn": "Creosote Bush",
      "scientificName": "Larrea tridentata",
      "taxonomy": {
        "kingdom": "Plantae",
        "phylum": "Tracheophyta",
        "class": "Magnoliopsida",
        "order": "Zygophyllales",
        "family": "Zygophyllaceae",
        "genus": "Larrea"
      },
      "photoPath": "images/species/creosote-bush.jpg",
      "photoCreditZh": "Mojave Desert",
      "photoCreditEn": "Mojave Desert, CA",
      "creditUrl": "https://www.inaturalist.org/observations?taxon_name=Larrea%20tridentata",
      "creditSource": "iNaturalist"
    },
    "california-scorpion": {
      "id": "california-scorpion",
      "category": "insect",
      "nameZh": "加州蝎",
      "nameEn": "California Common Scorpion",
      "scientificName": "Paruroctonus silvestrii",
      "taxonomy": {
        "kingdom": "Animalia",
        "phylum": "Arthropoda",
        "class": "Arachnida",
        "order": "Scorpiones",
        "family": "Vaejovidae",
        "genus": "Paruroctonus"
      },
      "photoPath": "images/species/california-scorpion.jpg",
      "photoCreditZh": "Sierra foothills",
      "photoCreditEn": "Sierra Nevada foothills, CA",
      "creditUrl": "https://www.inaturalist.org/observations?taxon_name=Paruroctonus%20silvestrii",
      "creditSource": "iNaturalist"
    },
    "california-mantis": {
      "id": "california-mantis",
      "category": "insect",
      "nameZh": "加州螳螂",
      "nameEn": "California Mantis",
      "scientificName": "Stagmomantis californica",
      "taxonomy": {
        "kingdom": "Animalia",
        "phylum": "Arthropoda",
        "class": "Insecta",
        "order": "Mantodea",
        "family": "Mantidae",
        "genus": "Stagmomantis"
      },
      "photoPath": "images/species/california-mantis.jpg",
      "photoCreditZh": "Chaparral",
      "photoCreditEn": "Chaparral, CA",
      "creditUrl": "https://www.inaturalist.org/observations?taxon_name=Stagmomantis%20californica",
      "creditSource": "iNaturalist"
    },
    "dragonfly-green-darner": {
      "id": "dragonfly-green-darner",
      "category": "insect",
      "nameZh": "绿蜻蜓",
      "nameEn": "Common Green Darner",
      "scientificName": "Anax junius",
      "taxonomy": {
        "kingdom": "Animalia",
        "phylum": "Arthropoda",
        "class": "Insecta",
        "order": "Odonata",
        "family": "Aeshnidae",
        "genus": "Anax"
      },
      "photoPath": "images/species/dragonfly-green-darner.jpg",
      "photoCreditZh": "Wetlands",
      "photoCreditEn": "Wetlands, CA",
      "creditUrl": "https://www.inaturalist.org/observations?taxon_name=Anax%20junius",
      "creditSource": "iNaturalist"
    },
    "ladybug-convergent": {
      "id": "ladybug-convergent",
      "category": "insect",
      "nameZh": "聚集瓢虫",
      "nameEn": "Convergent Lady Beetle",
      "scientificName": "Hippodamia convergens",
      "taxonomy": {
        "kingdom": "Animalia",
        "phylum": "Arthropoda",
        "class": "Insecta",
        "order": "Coleoptera",
        "family": "Coccinellidae",
        "genus": "Hippodamia"
      },
      "photoPath": "images/species/ladybug-convergent.jpg",
      "photoCreditZh": "Sierra Nevada",
      "photoCreditEn": "Sierra Nevada, CA",
      "creditUrl": "https://www.inaturalist.org/observations?taxon_name=Hippodamia%20convergens",
      "creditSource": "iNaturalist"
    },
    "bumble-bee-yellow-faced": {
      "id": "bumble-bee-yellow-faced",
      "category": "insect",
      "nameZh": "黄脸熊蜂",
      "nameEn": "Yellow-faced Bumble Bee",
      "scientificName": "Bombus vosnesenskii",
      "taxonomy": {
        "kingdom": "Animalia",
        "phylum": "Arthropoda",
        "class": "Insecta",
        "order": "Hymenoptera",
        "family": "Apidae",
        "genus": "Bombus"
      },
      "photoPath": "images/species/bumble-bee-yellow-faced.jpg",
      "photoCreditZh": "Coastal meadows",
      "photoCreditEn": "Coastal meadows, CA",
      "creditUrl": "https://www.inaturalist.org/observations?taxon_name=Bombus%20vosnesenskii",
      "creditSource": "iNaturalist"
    },
    "carpenter-bee": {
      "id": "carpenter-bee",
      "category": "insect",
      "nameZh": "加州木蜂",
      "nameEn": "California Carpenter Bee",
      "scientificName": "Xylocopa californica",
      "taxonomy": {
        "kingdom": "Animalia",
        "phylum": "Arthropoda",
        "class": "Insecta",
        "order": "Hymenoptera",
        "family": "Apidae",
        "genus": "Xylocopa"
      },
      "photoPath": "images/species/carpenter-bee.jpg",
      "photoCreditZh": "Oak woodlands",
      "photoCreditEn": "Oak woodlands, CA",
      "creditUrl": "https://www.inaturalist.org/observations?taxon_name=Xylocopa%20californica",
      "creditSource": "iNaturalist"
    },
    "velvet-ant": {
      "id": "velvet-ant",
      "category": "insect",
      "nameZh": "绒蚁",
      "nameEn": "Velvet Ant",
      "scientificName": "Dasymutilla aureola",
      "taxonomy": {
        "kingdom": "Animalia",
        "phylum": "Arthropoda",
        "class": "Insecta",
        "order": "Hymenoptera",
        "family": "Mutillidae",
        "genus": "Dasymutilla"
      },
      "photoPath": "images/species/velvet-ant.jpg",
      "photoCreditZh": "Desert regions",
      "photoCreditEn": "Desert regions, CA",
      "creditUrl": "https://www.inaturalist.org/observations?taxon_name=Dasymutilla%20aureola",
      "creditSource": "iNaturalist"
    },
    "western-pond-turtle": {
      "id": "western-pond-turtle",
      "category": "reptile",
      "nameZh": "西部池龟",
      "nameEn": "Western Pond Turtle",
      "scientificName": "Actinemys marmorata",
      "taxonomy": {
        "kingdom": "Animalia",
        "phylum": "Chordata",
        "class": "Reptilia",
        "order": "Testudines",
        "family": "Emydidae",
        "genus": "Actinemys"
      },
      "photoPath": "images/species/western-pond-turtle.jpg",
      "photoCreditZh": "加州池塘与溪流",
      "photoCreditEn": "Ponds and streams, CA",
      "creditUrl": "https://www.inaturalist.org/observations?taxon_name=Actinemys%20marmorata",
      "creditSource": "iNaturalist"
    },
    "gopher-snake": {
      "id": "gopher-snake",
      "category": "reptile",
      "nameZh": "牛蛇",
      "nameEn": "Gopher Snake",
      "scientificName": "Pituophis catenifer",
      "taxonomy": {
        "kingdom": "Animalia",
        "phylum": "Chordata",
        "class": "Reptilia",
        "order": "Squamata",
        "family": "Colubridae",
        "genus": "Pituophis"
      },
      "photoPath": "images/species/gopher-snake.jpg",
      "photoCreditZh": "Throughout California",
      "photoCreditEn": "Throughout California",
      "creditUrl": "https://www.inaturalist.org/observations?taxon_name=Pituophis%20catenifer",
      "creditSource": "iNaturalist"
    },
    "california-kingsnake": {
      "id": "california-kingsnake",
      "category": "reptile",
      "nameZh": "加州王蛇",
      "nameEn": "California Kingsnake",
      "scientificName": "Lampropeltis californiae",
      "taxonomy": {
        "kingdom": "Animalia",
        "phylum": "Chordata",
        "class": "Reptilia",
        "order": "Squamata",
        "family": "Colubridae",
        "genus": "Lampropeltis"
      },
      "photoPath": "images/species/california-kingsnake.jpg",
      "photoCreditZh": "Throughout California",
      "photoCreditEn": "Throughout California",
      "creditUrl": "https://www.inaturalist.org/observations?taxon_name=Lampropeltis%20californiae",
      "creditSource": "iNaturalist"
    },
    "california-whiptail": {
      "id": "california-whiptail",
      "category": "reptile",
      "nameZh": "加州鞭尾蜥",
      "nameEn": "California Whiptail",
      "scientificName": "Aspidoscelis tigris munda",
      "taxonomy": {
        "kingdom": "Animalia",
        "phylum": "Chordata",
        "class": "Reptilia",
        "order": "Squamata",
        "family": "Teiidae",
        "genus": "Aspidoscelis"
      },
      "photoPath": "images/species/california-whiptail.jpg",
      "photoCreditZh": "Central Valley",
      "photoCreditEn": "Central Valley, CA",
      "creditUrl": "https://www.inaturalist.org/observations?taxon_name=Aspidoscelis%20tigris%20munda",
      "creditSource": "iNaturalist"
    },
    "common-nighthawk": {
      "id": "common-nighthawk",
      "category": "bird",
      "nameZh": "普通夜鹰",
      "nameEn": "Common Nighthawk",
      "scientificName": "Chordeiles minor",
      "taxonomy": {
        "kingdom": "Animalia",
        "phylum": "Chordata",
        "class": "Aves",
        "order": "Caprimulgiformes",
        "family": "Caprimulgidae",
        "genus": "Chordeiles"
      },
      "photoPath": "images/species/common-nighthawk.jpg",
      "photoCreditZh": "Desert skies",
      "photoCreditEn": "Desert skies, CA",
      "creditUrl": "https://www.inaturalist.org/observations?taxon_name=Chordeiles%20minor",
      "creditSource": "iNaturalist"
    },
    "leap-day-surprise": {
      "id": "leap-day-surprise",
      "category": "marine",
      "nameZh": "闰日彩蛋 · 时光的礼物",
      "nameEn": "Leap Day Surprise · A Gift of Time",
      "scientificName": "Dies Mirabilis (extraordinarius)",
      "taxonomy": {
        "kingdom": "—",
        "phylum": "—",
        "class": "—",
        "order": "—",
        "family": "—",
        "genus": "—"
      },
      "photoPath": "images/species/leap-day.png",
      "photoCreditZh": "© 圣地亚哥动物园 · 大熊猫",
      "photoCreditEn": "© San Diego Zoo · Giant Pandas",
      "creditUrl": "https://zoo.sandiegozoo.org/giant-pandas",
      "creditSource": "San Diego Zoo"
    }
  },
  "holidays": [
    {
      "month": 1,
      "day": 1,
      "nameZh": "元旦",
      "nameEn": "New Year's Day",
      "type": "western"
    },
    {
      "month": 2,
      "day": 16,
      "nameZh": "除夕",
      "nameEn": "Chinese New Year's Eve",
      "type": "chinese"
    },
    {
      "month": 2,
      "day": 17,
      "nameZh": "春节",
      "nameEn": "Chinese New Year",
      "type": "chinese"
    },
    {
      "month": 3,
      "day": 3,
      "nameZh": "元宵节",
      "nameEn": "Lantern Festival",
      "type": "chinese"
    },
    {
      "month": 2,
      "day": 14,
      "nameZh": "情人节",
      "nameEn": "Valentine's Day",
      "type": "western"
    },
    {
      "month": 3,
      "day": 8,
      "nameZh": "妇女节",
      "nameEn": "Women's Day",
      "type": "both"
    },
    {
      "month": 3,
      "day": 17,
      "nameZh": "圣帕特里克节",
      "nameEn": "St. Patrick's Day",
      "type": "western"
    },
    {
      "month": 3,
      "day": 20,
      "nameZh": "春分",
      "nameEn": "Spring Equinox",
      "type": "both"
    },
    {
      "month": 4,
      "day": 1,
      "nameZh": "愚人节",
      "nameEn": "April Fools' Day",
      "type": "western"
    },
    {
      "month": 4,
      "day": 5,
      "nameZh": "清明节",
      "nameEn": "Qingming Festival",
      "type": "chinese"
    },
    {
      "month": 4,
      "day": 22,
      "nameZh": "地球日",
      "nameEn": "Earth Day",
      "type": "western"
    },
    {
      "month": 5,
      "day": 1,
      "nameZh": "劳动节",
      "nameEn": "Workers' Day",
      "type": "both"
    },
    {
      "month": 5,
      "day": 11,
      "nameZh": "母亲节",
      "nameEn": "Mother's Day",
      "type": "western"
    },
    {
      "month": 6,
      "day": 1,
      "nameZh": "儿童节",
      "nameEn": "Children's Day",
      "type": "both"
    },
    {
      "month": 6,
      "day": 15,
      "nameZh": "父亲节",
      "nameEn": "Father's Day",
      "type": "western"
    },
    {
      "month": 6,
      "day": 19,
      "nameZh": "端午节",
      "nameEn": "Dragon Boat Festival",
      "type": "chinese"
    },
    {
      "month": 6,
      "day": 21,
      "nameZh": "夏至",
      "nameEn": "Summer Solstice",
      "type": "both"
    },
    {
      "month": 7,
      "day": 4,
      "nameZh": "独立日",
      "nameEn": "Independence Day",
      "type": "western"
    },
    {
      "month": 8,
      "day": 19,
      "nameZh": "七夕节",
      "nameEn": "Qixi Festival",
      "type": "chinese"
    },
    {
      "month": 9,
      "day": 1,
      "nameZh": "美国劳动节",
      "nameEn": "Labor Day (US)",
      "type": "western"
    },
    {
      "month": 9,
      "day": 25,
      "nameZh": "中秋节",
      "nameEn": "Mid-Autumn Festival",
      "type": "chinese"
    },
    {
      "month": 9,
      "day": 22,
      "nameZh": "秋分",
      "nameEn": "Autumn Equinox",
      "type": "both"
    },
    {
      "month": 10,
      "day": 1,
      "nameZh": "中国国庆节",
      "nameEn": "China National Day",
      "type": "chinese"
    },
    {
      "month": 10,
      "day": 18,
      "nameZh": "重阳节",
      "nameEn": "Double Ninth Festival",
      "type": "chinese"
    },
    {
      "month": 10,
      "day": 31,
      "nameZh": "万圣节",
      "nameEn": "Halloween",
      "type": "western"
    },
    {
      "month": 11,
      "day": 11,
      "nameZh": "光棍节",
      "nameEn": "Singles' Day",
      "type": "chinese"
    },
    {
      "month": 11,
      "day": 27,
      "nameZh": "感恩节",
      "nameEn": "Thanksgiving",
      "type": "western"
    },
    {
      "month": 12,
      "day": 21,
      "nameZh": "冬至",
      "nameEn": "Winter Solstice",
      "type": "both"
    },
    {
      "month": 12,
      "day": 24,
      "nameZh": "平安夜",
      "nameEn": "Christmas Eve",
      "type": "western"
    },
    {
      "month": 12,
      "day": 25,
      "nameZh": "圣诞节",
      "nameEn": "Christmas Day",
      "type": "western"
    },
    {
      "month": 12,
      "day": 31,
      "nameZh": "跨年夜",
      "nameEn": "New Year's Eve",
      "type": "western"
    }
  ],
  "lunarMonths": [
    ["2025-12-20", "十一月", 30],
    ["2026-01-19", "十二月", 29],
    ["2026-02-17", "正月",   30],
    ["2026-03-19", "二月",   29],
    ["2026-04-17", "三月",   30],
    ["2026-05-17", "四月",   29],
    ["2026-06-15", "五月",   29],
    ["2026-07-14", "六月",   30],
    ["2026-08-13", "七月",   29],
    ["2026-09-11", "八月",   29],
    ["2026-10-10", "九月",   30],
    ["2026-11-09", "十月",   30],
    ["2026-12-09", "十一月", 30],
    ["2027-01-08", "十二月", 29]
  ],
  "lunarDayNames": [
    "",
    "初一","初二","初三","初四","初五","初六","初七","初八","初九","初十",
    "十一","十二","十三","十四","十五","十六","十七","十八","十九","二十",
    "廿一","廿二","廿三","廿四","廿五","廿六","廿七","廿八","廿九","三十"
  ],
  "monthlyContent": [
    {
      "monthIndex": 0,
      "nameZh": "一月",
      "nameEn": "January",
      "seasonZh": "冬日海岸 · 暖阳与长风",
      "seasonEn": "Winter Coast · Golden Light & Sea Breeze",
      "backgroundPath": "images/backgrounds/01-january.jpg",
      "backgroundCreditZh": "雷斯岬国家海岸",
      "backgroundCreditEn": "Point Reyes National Seashore · Bathed in Winter Sunlight, CA",
      "species": [
        {
          "speciesId": "black-phoebe",
          "day": 1
        },
        {
          "speciesId": "gray-whale",
          "day": 2
        },
        {
          "speciesId": "humpback-whale",
          "day": 3
        },
        {
          "speciesId": "california-sea-lion",
          "day": 4
        },
        {
          "speciesId": "harbor-seal",
          "day": 5
        },
        {
          "speciesId": "great-blue-heron",
          "day": 6
        },
        {
          "speciesId": "great-egret",
          "day": 7
        },
        {
          "speciesId": "brown-pelican",
          "day": 8
        },
        {
          "speciesId": "snow-goose",
          "day": 9
        },
        {
          "speciesId": "canada-goose",
          "day": 10
        },
        {
          "speciesId": "tundra-swan",
          "day": 11
        },
        {
          "speciesId": "northern-shoveler",
          "day": 12
        },
        {
          "speciesId": "american-wigeon",
          "day": 13
        },
        {
          "speciesId": "northern-pintail",
          "day": 14
        },
        {
          "speciesId": "common-goldeneye",
          "day": 15
        },
        {
          "speciesId": "bufflehead",
          "day": 16
        },
        {
          "speciesId": "common-merganser",
          "day": 17
        },
        {
          "speciesId": "ruddy-duck",
          "day": 18
        },
        {
          "speciesId": "western-gull",
          "day": 19
        },
        {
          "speciesId": "pelagic-cormorant",
          "day": 20
        },
        {
          "speciesId": "sandhill-crane",
          "day": 21
        },
        {
          "speciesId": "bald-eagle",
          "day": 22
        },
        {
          "speciesId": "red-tailed-hawk",
          "day": 23
        },
        {
          "speciesId": "northern-harrier",
          "day": 24
        },
        {
          "speciesId": "common-loon",
          "day": 25
        },
        {
          "speciesId": "western-grebe",
          "day": 26
        },
        {
          "speciesId": "eared-grebe",
          "day": 27
        },
        {
          "speciesId": "american-coot",
          "day": 28
        },
        {
          "speciesId": "black-crowned-night-heron",
          "day": 29
        },
        {
          "speciesId": "snowy-egret",
          "day": 30
        },
        {
          "speciesId": "green-winged-teal",
          "day": 31
        }
      ],
      "backgroundCopyright": "Wikipedia"
    },
    {
      "monthIndex": 1,
      "nameZh": "二月",
      "nameEn": "February",
      "seasonZh": "冬日荒漠 · 死亡谷的日暮余晖",
      "seasonEn": "Winter Desert · Death Valley's Twilight Glow",
      "backgroundPath": "images/backgrounds/02-february.jpg",
      "backgroundCreditZh": "死亡谷国家公园",
      "backgroundCreditEn": "Death Valley National Park · Dunes at Dusk, CA",
      "species": [
        {
          "speciesId": "manzanita",
          "day": 1
        },
        {
          "speciesId": "coast-live-oak",
          "day": 2
        },
        {
          "speciesId": "california-quail",
          "day": 3
        },
        {
          "speciesId": "annas-hummingbird",
          "day": 4
        },
        {
          "speciesId": "western-scrub-jay",
          "day": 5
        },
        {
          "speciesId": "coyote",
          "day": 6
        },
        {
          "speciesId": "bobcat",
          "day": 7
        },
        {
          "speciesId": "gray-fox",
          "day": 8
        },
        {
          "speciesId": "striped-skunk",
          "day": 9
        },
        {
          "speciesId": "raccoon",
          "day": 10
        },
        {
          "speciesId": "western-gray-squirrel",
          "day": 11
        },
        {
          "speciesId": "california-ground-squirrel",
          "day": 12
        },
        {
          "speciesId": "red-shouldered-hawk",
          "day": 13
        },
        {
          "speciesId": "coopers-hawk",
          "day": 14
        },
        {
          "speciesId": "turkey-vulture",
          "day": 15
        },
        {
          "speciesId": "california-newt",
          "day": 16
        },
        {
          "speciesId": "rough-skinned-newt",
          "day": 17
        },
        {
          "speciesId": "pacific-tree-frog",
          "day": 18
        },
        {
          "speciesId": "california-tiger-salamander",
          "day": 19
        },
        {
          "speciesId": "bumble-bee-yellow-faced",
          "day": 20
        },
        {
          "speciesId": "western-bluebird",
          "day": 21
        },
        {
          "speciesId": "northern-flicker",
          "day": 22
        },
        {
          "speciesId": "acorn-woodpecker",
          "day": 23
        },
        {
          "speciesId": "american-robin",
          "day": 24
        },
        {
          "speciesId": "killdeer",
          "day": 25
        },
        {
          "speciesId": "bald-eagle",
          "day": 26
        },
        {
          "speciesId": "golden-eagle",
          "day": 27
        },
        {
          "speciesId": "blue-oak",
          "day": 28
        },
        {
          "speciesId": "leap-day-surprise",
          "day": 29
        }
      ],
      "backgroundCopyright": "ROADS"
    },
    {
      "monthIndex": 2,
      "nameZh": "三月",
      "nameEn": "March",
      "seasonZh": "春天序曲 · 野花绽放",
      "seasonEn": "Spring Prelude · Wildflowers Emerge",
      "backgroundPath": "images/backgrounds/03-march.jpg",
      "backgroundCreditZh": "卡里佐平原国家纪念地",
      "backgroundCreditEn": "Carrizo Plain National Monument, CA",
      "species": [
        {
          "speciesId": "california-poppy",
          "day": 1
        },
        {
          "speciesId": "goldfields",
          "day": 2
        },
        {
          "speciesId": "baby-blue-eyes",
          "day": 3
        },
        {
          "speciesId": "arroyo-lupine",
          "day": 4
        },
        {
          "speciesId": "tidy-tips",
          "day": 5
        },
        {
          "speciesId": "western-blue-eyed-grass",
          "day": 6
        },
        {
          "speciesId": "mariposa-lily",
          "day": 7
        },
        {
          "speciesId": "california-lilac",
          "day": 8
        },
        {
          "speciesId": "sticky-monkeyflower",
          "day": 9
        },
        {
          "speciesId": "douglas-iris",
          "day": 10
        },
        {
          "speciesId": "california-red-legged-frog",
          "day": 11
        },
        {
          "speciesId": "pacific-tree-frog",
          "day": 12
        },
        {
          "speciesId": "western-swallowtail",
          "day": 13
        },
        {
          "speciesId": "pipevine-swallowtail",
          "day": 14
        },
        {
          "speciesId": "ladybug-convergent",
          "day": 15
        },
        {
          "speciesId": "annas-hummingbird",
          "day": 16
        },
        {
          "speciesId": "rufous-hummingbird",
          "day": 17
        },
        {
          "speciesId": "hooded-oriole",
          "day": 18
        },
        {
          "speciesId": "western-meadowlark",
          "day": 19
        },
        {
          "speciesId": "yellow-billed-magpie",
          "day": 20
        },
        {
          "speciesId": "red-tailed-hawk",
          "day": 21
        },
        {
          "speciesId": "american-kestrel",
          "day": 22
        },
        {
          "speciesId": "peregrine-falcon",
          "day": 23
        },
        {
          "speciesId": "western-fence-lizard",
          "day": 24
        },
        {
          "speciesId": "california-ground-squirrel",
          "day": 25
        },
        {
          "speciesId": "black-necked-stilt",
          "day": 26
        },
        {
          "speciesId": "american-avocet",
          "day": 27
        },
        {
          "speciesId": "carpenter-bee",
          "day": 28
        },
        {
          "speciesId": "dragonfly-green-darner",
          "day": 29
        },
        {
          "speciesId": "pied-billed-grebe",
          "day": 30
        },
        {
          "speciesId": "common-murre",
          "day": 31
        }
      ],
      "backgroundCopyright": "r/CampingandHiking"
    },
    {
      "monthIndex": 3,
      "nameZh": "四月",
      "nameEn": "April",
      "seasonZh": "春日森林 · 缪尔森林的巨木之光",
      "seasonEn": "Spring Forest · Light Through the Ancient Giants",
      "backgroundPath": "images/backgrounds/04-april.jpg",
      "backgroundCreditZh": "缪尔森林国家纪念地",
      "backgroundCreditEn": "Muir Woods National Monument · Ancient Redwood Grove, CA",
      "species": [
        {
          "speciesId": "california-poppy",
          "day": 1
        },
        {
          "speciesId": "western-redbud",
          "day": 2
        },
        {
          "speciesId": "lupinus-nanus",
          "day": 3
        },
        {
          "speciesId": "arroyo-lupine",
          "day": 4
        },
        {
          "speciesId": "sand-verbena",
          "day": 5
        },
        {
          "speciesId": "desert-sunflower",
          "day": 6
        },
        {
          "speciesId": "desert-lily",
          "day": 7
        },
        {
          "speciesId": "chocolate-lily",
          "day": 8
        },
        {
          "speciesId": "matilija-poppy",
          "day": 9
        },
        {
          "speciesId": "california-fuchsia",
          "day": 10
        },
        {
          "speciesId": "monarch-butterfly",
          "day": 11
        },
        {
          "speciesId": "western-swallowtail",
          "day": 12
        },
        {
          "speciesId": "painted-lady",
          "day": 13
        },
        {
          "speciesId": "california-sister",
          "day": 14
        },
        {
          "speciesId": "anna-blue",
          "day": 15
        },
        {
          "speciesId": "california-quail",
          "day": 16
        },
        {
          "speciesId": "western-bluebird",
          "day": 17
        },
        {
          "speciesId": "lazuli-bunting",
          "day": 18
        },
        {
          "speciesId": "western-tanager",
          "day": 19
        },
        {
          "speciesId": "cedar-waxwing",
          "day": 20
        },
        {
          "speciesId": "western-scrub-jay",
          "day": 21
        },
        {
          "speciesId": "american-kestrel",
          "day": 22
        },
        {
          "speciesId": "coopers-hawk",
          "day": 23
        },
        {
          "speciesId": "western-fence-lizard",
          "day": 24
        },
        {
          "speciesId": "california-whiptail",
          "day": 25
        },
        {
          "speciesId": "gopher-snake",
          "day": 26
        },
        {
          "speciesId": "california-kingsnake",
          "day": 27
        },
        {
          "speciesId": "bumble-bee-yellow-faced",
          "day": 28
        },
        {
          "speciesId": "carpenter-bee",
          "day": 29
        },
        {
          "speciesId": "pacific-tree-frog",
          "day": 30
        }
      ],
      "backgroundCopyright": "Wikipedia"
    },
    {
      "monthIndex": 4,
      "nameZh": "五月",
      "nameEn": "May",
      "seasonZh": "海岸生机 · 大苏尔的蔚蓝",
      "seasonEn": "Coastal Abundance · Big Sur's Blue",
      "backgroundPath": "images/backgrounds/05-may.jpg",
      "backgroundCreditZh": "大苏尔海岸",
      "backgroundCreditEn": "Big Sur Coastline, CA",
      "species": [
        {
          "speciesId": "sea-otter",
          "day": 1
        },
        {
          "speciesId": "harbor-seal",
          "day": 2
        },
        {
          "speciesId": "california-sea-lion",
          "day": 3
        },
        {
          "speciesId": "brown-pelican",
          "day": 4
        },
        {
          "speciesId": "heermanns-gull",
          "day": 5
        },
        {
          "speciesId": "western-gull",
          "day": 6
        },
        {
          "speciesId": "brandts-cormorant",
          "day": 7
        },
        {
          "speciesId": "pelagic-cormorant",
          "day": 8
        },
        {
          "speciesId": "common-murre",
          "day": 9
        },
        {
          "speciesId": "tufted-puffin",
          "day": 10
        },
        {
          "speciesId": "gray-whale",
          "day": 11
        },
        {
          "speciesId": "humpback-whale",
          "day": 12
        },
        {
          "speciesId": "blue-whale",
          "day": 13
        },
        {
          "speciesId": "ochre-sea-star",
          "day": 14
        },
        {
          "speciesId": "giant-green-anemone",
          "day": 15
        },
        {
          "speciesId": "aggregating-anemone",
          "day": 16
        },
        {
          "speciesId": "california-mussel",
          "day": 17
        },
        {
          "speciesId": "purple-sea-urchin",
          "day": 18
        },
        {
          "speciesId": "douglas-iris",
          "day": 19
        },
        {
          "speciesId": "sticky-monkeyflower",
          "day": 20
        },
        {
          "speciesId": "coast-redwood",
          "day": 21
        },
        {
          "speciesId": "california-lilac",
          "day": 22
        },
        {
          "speciesId": "tule-elk",
          "day": 23
        },
        {
          "speciesId": "mule-deer",
          "day": 24
        },
        {
          "speciesId": "coyote",
          "day": 25
        },
        {
          "speciesId": "california-condor",
          "day": 26
        },
        {
          "speciesId": "peregrine-falcon",
          "day": 27
        },
        {
          "speciesId": "great-blue-heron",
          "day": 28
        },
        {
          "speciesId": "snowy-egret",
          "day": 29
        },
        {
          "speciesId": "black-crowned-night-heron",
          "day": 30
        },
        {
          "speciesId": "dragonfly-green-darner",
          "day": 31
        }
      ],
      "backgroundCopyright": "SnazzyQ"
    },
    {
      "monthIndex": 5,
      "nameZh": "六月",
      "nameEn": "June",
      "seasonZh": "山地之夏 · 巨杉森林",
      "seasonEn": "Mountain Summer · Sequoia Forests",
      "backgroundPath": "images/backgrounds/06-june.jpg",
      "backgroundCreditZh": "红杉国家公园",
      "backgroundCreditEn": "Sequoia National Park, CA",
      "species": [
        {
          "speciesId": "giant-sequoia",
          "day": 1
        },
        {
          "speciesId": "sugar-pine",
          "day": 2
        },
        {
          "speciesId": "incense-cedar",
          "day": 3
        },
        {
          "speciesId": "coast-redwood",
          "day": 4
        },
        {
          "speciesId": "california-black-oak",
          "day": 5
        },
        {
          "speciesId": "black-bear",
          "day": 6
        },
        {
          "speciesId": "mountain-lion",
          "day": 7
        },
        {
          "speciesId": "mule-deer",
          "day": 8
        },
        {
          "speciesId": "yellow-bellied-marmot",
          "day": 9
        },
        {
          "speciesId": "western-gray-squirrel",
          "day": 10
        },
        {
          "speciesId": "sierra-bighorn",
          "day": 11
        },
        {
          "speciesId": "golden-eagle",
          "day": 12
        },
        {
          "speciesId": "stellers-jay",
          "day": 13
        },
        {
          "speciesId": "western-tanager",
          "day": 14
        },
        {
          "speciesId": "lazuli-bunting",
          "day": 15
        },
        {
          "speciesId": "western-bluebird",
          "day": 16
        },
        {
          "speciesId": "acorn-woodpecker",
          "day": 17
        },
        {
          "speciesId": "northern-flicker",
          "day": 18
        },
        {
          "speciesId": "cedar-waxwing",
          "day": 19
        },
        {
          "speciesId": "annas-hummingbird",
          "day": 20
        },
        {
          "speciesId": "rufous-hummingbird",
          "day": 21
        },
        {
          "speciesId": "western-swallowtail",
          "day": 22
        },
        {
          "speciesId": "painted-lady",
          "day": 23
        },
        {
          "speciesId": "california-sister",
          "day": 24
        },
        {
          "speciesId": "carpenter-bee",
          "day": 25
        },
        {
          "speciesId": "western-fence-lizard",
          "day": 26
        },
        {
          "speciesId": "western-rattlesnake",
          "day": 27
        },
        {
          "speciesId": "california-red-legged-frog",
          "day": 28
        },
        {
          "speciesId": "american-robin",
          "day": 29
        },
        {
          "speciesId": "red-tailed-hawk",
          "day": 30
        }
      ],
      "backgroundCopyright": "Venki Allu"
    },
    {
      "monthIndex": 6,
      "nameZh": "七月",
      "nameEn": "July",
      "seasonZh": "沙漠正午 · 约书亚树之影",
      "seasonEn": "Desert Noon · Shadows of Joshua Trees",
      "backgroundPath": "images/backgrounds/07-july.jpg",
      "backgroundCreditZh": "约书亚树国家公园",
      "backgroundCreditEn": "Joshua Tree National Park, CA",
      "species": [
        {
          "speciesId": "joshua-tree",
          "day": 1
        },
        {
          "speciesId": "creosote-bush",
          "day": 2
        },
        {
          "speciesId": "desert-bighorn",
          "day": 3
        },
        {
          "speciesId": "desert-tortoise",
          "day": 4
        },
        {
          "speciesId": "chuckwalla",
          "day": 5
        },
        {
          "speciesId": "leopard-lizard",
          "day": 6
        },
        {
          "speciesId": "western-rattlesnake",
          "day": 7
        },
        {
          "speciesId": "greater-roadrunner",
          "day": 8
        },
        {
          "speciesId": "desert-kangaroo-rat",
          "day": 9
        },
        {
          "speciesId": "desert-tarantula",
          "day": 10
        },
        {
          "speciesId": "california-scorpion",
          "day": 11
        },
        {
          "speciesId": "velvet-ant",
          "day": 12
        },
        {
          "speciesId": "desert-sunflower",
          "day": 13
        },
        {
          "speciesId": "desert-lily",
          "day": 14
        },
        {
          "speciesId": "sand-verbena",
          "day": 15
        },
        {
          "speciesId": "turkey-vulture",
          "day": 16
        },
        {
          "speciesId": "golden-eagle",
          "day": 17
        },
        {
          "speciesId": "american-kestrel",
          "day": 18
        },
        {
          "speciesId": "western-fence-lizard",
          "day": 19
        },
        {
          "speciesId": "california-mantis",
          "day": 20
        },
        {
          "speciesId": "dragonfly-green-darner",
          "day": 21
        },
        {
          "speciesId": "ladybug-convergent",
          "day": 22
        },
        {
          "speciesId": "carpenter-bee",
          "day": 23
        },
        {
          "speciesId": "bumble-bee-yellow-faced",
          "day": 24
        },
        {
          "speciesId": "coyote",
          "day": 25
        },
        {
          "speciesId": "gray-fox",
          "day": 26
        },
        {
          "speciesId": "bobcat",
          "day": 27
        },
        {
          "speciesId": "coopers-hawk",
          "day": 28
        },
        {
          "speciesId": "red-tailed-hawk",
          "day": 29
        },
        {
          "speciesId": "common-nighthawk",
          "day": 30
        },
        {
          "speciesId": "desert-bighorn",
          "day": 31
        }
      ],
      "backgroundCopyright": "Kindel Media"
    },
    {
      "monthIndex": 7,
      "nameZh": "八月",
      "nameEn": "August",
      "seasonZh": "潮汐馈赠 · 拉霍亚的潮池",
      "seasonEn": "Tidal Bounty · La Jolla's Tide Pools",
      "backgroundPath": "images/backgrounds/08-august.jpg",
      "backgroundCreditZh": "拉霍亚海岸",
      "backgroundCreditEn": "La Jolla, San Diego, CA",
      "species": [
        {
          "speciesId": "california-grunion",
          "day": 1
        },
        {
          "speciesId": "pacific-angel-shark",
          "day": 2
        },
        {
          "speciesId": "aggregating-anemone",
          "day": 3
        },
        {
          "speciesId": "giant-green-anemone",
          "day": 4
        },
        {
          "speciesId": "ochre-sea-star",
          "day": 5
        },
        {
          "speciesId": "purple-sea-urchin",
          "day": 6
        },
        {
          "speciesId": "california-mussel",
          "day": 7
        },
        {
          "speciesId": "brown-pelican",
          "day": 8
        },
        {
          "speciesId": "heermanns-gull",
          "day": 9
        },
        {
          "speciesId": "western-gull",
          "day": 10
        },
        {
          "speciesId": "brandts-cormorant",
          "day": 11
        },
        {
          "speciesId": "sea-otter",
          "day": 12
        },
        {
          "speciesId": "harbor-seal",
          "day": 13
        },
        {
          "speciesId": "california-sea-lion",
          "day": 14
        },
        {
          "speciesId": "common-murre",
          "day": 15
        },
        {
          "speciesId": "blue-whale",
          "day": 16
        },
        {
          "speciesId": "humpback-whale",
          "day": 17
        },
        {
          "speciesId": "turkey-vulture",
          "day": 18
        },
        {
          "speciesId": "western-grebe",
          "day": 19
        },
        {
          "speciesId": "great-blue-heron",
          "day": 20
        },
        {
          "speciesId": "snowy-egret",
          "day": 21
        },
        {
          "speciesId": "american-avocet",
          "day": 22
        },
        {
          "speciesId": "black-necked-stilt",
          "day": 23
        },
        {
          "speciesId": "killdeer",
          "day": 24
        },
        {
          "speciesId": "western-fence-lizard",
          "day": 25
        },
        {
          "speciesId": "chuckwalla",
          "day": 26
        },
        {
          "speciesId": "california-scorpion",
          "day": 27
        },
        {
          "speciesId": "dragonfly-green-darner",
          "day": 28
        },
        {
          "speciesId": "california-mantis",
          "day": 29
        },
        {
          "speciesId": "carpenter-bee",
          "day": 30
        },
        {
          "speciesId": "ladybug-convergent",
          "day": 31
        }
      ],
      "backgroundCopyright": "Jarrod Joachim"
    },
    {
      "monthIndex": 8,
      "nameZh": "九月",
      "nameEn": "September",
      "seasonZh": "秋日序曲 · 金色山麓",
      "seasonEn": "Autumn Prelude · Golden Foothills",
      "backgroundPath": "images/backgrounds/09-september.jpg",
      "backgroundCreditZh": "内华达山脉山麓",
      "backgroundCreditEn": "Sierra Nevada Foothills, CA",
      "species": [
        {
          "speciesId": "california-black-oak",
          "day": 1
        },
        {
          "speciesId": "blue-oak",
          "day": 2
        },
        {
          "speciesId": "coast-live-oak",
          "day": 3
        },
        {
          "speciesId": "california-buckeye",
          "day": 4
        },
        {
          "speciesId": "western-sycamore",
          "day": 5
        },
        {
          "speciesId": "tule-elk",
          "day": 6
        },
        {
          "speciesId": "mule-deer",
          "day": 7
        },
        {
          "speciesId": "coyote",
          "day": 8
        },
        {
          "speciesId": "gray-fox",
          "day": 9
        },
        {
          "speciesId": "bobcat",
          "day": 10
        },
        {
          "speciesId": "california-quail",
          "day": 11
        },
        {
          "speciesId": "western-scrub-jay",
          "day": 12
        },
        {
          "speciesId": "acorn-woodpecker",
          "day": 13
        },
        {
          "speciesId": "northern-flicker",
          "day": 14
        },
        {
          "speciesId": "stellers-jay",
          "day": 15
        },
        {
          "speciesId": "turkey-vulture",
          "day": 16
        },
        {
          "speciesId": "red-tailed-hawk",
          "day": 17
        },
        {
          "speciesId": "red-shouldered-hawk",
          "day": 18
        },
        {
          "speciesId": "american-kestrel",
          "day": 19
        },
        {
          "speciesId": "desert-tarantula",
          "day": 20
        },
        {
          "speciesId": "california-mantis",
          "day": 21
        },
        {
          "speciesId": "western-rattlesnake",
          "day": 22
        },
        {
          "speciesId": "western-fence-lizard",
          "day": 23
        },
        {
          "speciesId": "gopher-snake",
          "day": 24
        },
        {
          "speciesId": "velvet-ant",
          "day": 25
        },
        {
          "speciesId": "manzanita",
          "day": 26
        },
        {
          "speciesId": "california-fuchsia",
          "day": 27
        },
        {
          "speciesId": "western-bluebird",
          "day": 28
        },
        {
          "speciesId": "cedar-waxwing",
          "day": 29
        },
        {
          "speciesId": "american-robin",
          "day": 30
        }
      ],
      "backgroundCopyright": "4K WALLPAPERS"
    },
    {
      "monthIndex": 9,
      "nameZh": "十月",
      "nameEn": "October",
      "seasonZh": "秋色如金 · 太浩湖的湛蓝与金黄",
      "seasonEn": "Autumn Gold · Lake Tahoe's Blue & Gold",
      "backgroundPath": "images/backgrounds/10-october.jpg",
      "backgroundCreditZh": "太浩湖",
      "backgroundCreditEn": "Lake Tahoe · Autumn by the Shore, CA",
      "species": [
        {
          "speciesId": "quaking-aspen",
          "day": 1
        },
        {
          "speciesId": "california-black-oak",
          "day": 2
        },
        {
          "speciesId": "incense-cedar",
          "day": 3
        },
        {
          "speciesId": "sugar-pine",
          "day": 4
        },
        {
          "speciesId": "giant-sequoia",
          "day": 5
        },
        {
          "speciesId": "mule-deer",
          "day": 6
        },
        {
          "speciesId": "black-bear",
          "day": 7
        },
        {
          "speciesId": "yellow-bellied-marmot",
          "day": 8
        },
        {
          "speciesId": "western-gray-squirrel",
          "day": 9
        },
        {
          "speciesId": "coyote",
          "day": 10
        },
        {
          "speciesId": "mountain-lion",
          "day": 11
        },
        {
          "speciesId": "bobcat",
          "day": 12
        },
        {
          "speciesId": "peregrine-falcon",
          "day": 13
        },
        {
          "speciesId": "golden-eagle",
          "day": 14
        },
        {
          "speciesId": "red-tailed-hawk",
          "day": 15
        },
        {
          "speciesId": "bald-eagle",
          "day": 16
        },
        {
          "speciesId": "turkey-vulture",
          "day": 17
        },
        {
          "speciesId": "stellers-jay",
          "day": 18
        },
        {
          "speciesId": "western-scrub-jay",
          "day": 19
        },
        {
          "speciesId": "acorn-woodpecker",
          "day": 20
        },
        {
          "speciesId": "monarch-butterfly",
          "day": 21
        },
        {
          "speciesId": "painted-lady",
          "day": 22
        },
        {
          "speciesId": "california-sister",
          "day": 23
        },
        {
          "speciesId": "desert-tarantula",
          "day": 24
        },
        {
          "speciesId": "california-red-legged-frog",
          "day": 25
        },
        {
          "speciesId": "striped-skunk",
          "day": 26
        },
        {
          "speciesId": "raccoon",
          "day": 27
        },
        {
          "speciesId": "gray-fox",
          "day": 28
        },
        {
          "speciesId": "desert-kangaroo-rat",
          "day": 29
        },
        {
          "speciesId": "western-rattlesnake",
          "day": 30
        },
        {
          "speciesId": "greater-roadrunner",
          "day": 31
        }
      ],
      "backgroundCopyright": "Trevor Bexon"
    },
    {
      "monthIndex": 10,
      "nameZh": "十一月",
      "nameEn": "November",
      "seasonZh": "深秋静穆 · 莫诺湖的凝灰岩塔",
      "seasonEn": "Autumn Stillness · Mono Lake's Tufa Towers",
      "backgroundPath": "images/backgrounds/11-november.jpg",
      "backgroundCreditZh": "莫诺湖",
      "backgroundCreditEn": "Mono Lake · Tufa Towers, CA",
      "species": [
        {
          "speciesId": "chinook-salmon",
          "day": 1
        },
        {
          "speciesId": "coho-salmon",
          "day": 2
        },
        {
          "speciesId": "steelhead",
          "day": 3
        },
        {
          "speciesId": "bald-eagle",
          "day": 4
        },
        {
          "speciesId": "golden-eagle",
          "day": 5
        },
        {
          "speciesId": "tundra-swan",
          "day": 6
        },
        {
          "speciesId": "snow-goose",
          "day": 7
        },
        {
          "speciesId": "canada-goose",
          "day": 8
        },
        {
          "speciesId": "sandhill-crane",
          "day": 9
        },
        {
          "speciesId": "american-coot",
          "day": 10
        },
        {
          "speciesId": "northern-pintail",
          "day": 11
        },
        {
          "speciesId": "american-wigeon",
          "day": 12
        },
        {
          "speciesId": "northern-shoveler",
          "day": 13
        },
        {
          "speciesId": "green-winged-teal",
          "day": 14
        },
        {
          "speciesId": "common-merganser",
          "day": 15
        },
        {
          "speciesId": "california-newt",
          "day": 16
        },
        {
          "speciesId": "rough-skinned-newt",
          "day": 17
        },
        {
          "speciesId": "gray-fox",
          "day": 18
        },
        {
          "speciesId": "raccoon",
          "day": 19
        },
        {
          "speciesId": "striped-skunk",
          "day": 20
        },
        {
          "speciesId": "coast-redwood",
          "day": 21
        },
        {
          "speciesId": "coast-live-oak",
          "day": 22
        },
        {
          "speciesId": "incense-cedar",
          "day": 23
        },
        {
          "speciesId": "manzanita",
          "day": 24
        },
        {
          "speciesId": "california-buckeye",
          "day": 25
        },
        {
          "speciesId": "western-gray-squirrel",
          "day": 26
        },
        {
          "speciesId": "red-tailed-hawk",
          "day": 27
        },
        {
          "speciesId": "peregrine-falcon",
          "day": 28
        },
        {
          "speciesId": "great-blue-heron",
          "day": 29
        },
        {
          "speciesId": "great-egret",
          "day": 30
        }
      ],
      "backgroundCopyright": "Sven Muller"
    },
    {
      "monthIndex": 11,
      "nameZh": "十二月",
      "nameEn": "December",
      "seasonZh": "冬日峡谷 · 优胜美地的雪",
      "seasonEn": "Winter Canyon · Yosemite Snow",
      "backgroundPath": "images/backgrounds/12-december.jpg",
      "backgroundCreditZh": "优胜美地国家公园",
      "backgroundCreditEn": "Yosemite National Park, CA",
      "species": [
        {
          "speciesId": "giant-sequoia",
          "day": 1
        },
        {
          "speciesId": "sugar-pine",
          "day": 2
        },
        {
          "speciesId": "incense-cedar",
          "day": 3
        },
        {
          "speciesId": "mountain-lion",
          "day": 4
        },
        {
          "speciesId": "sierra-bighorn",
          "day": 5
        },
        {
          "speciesId": "yellow-bellied-marmot",
          "day": 6
        },
        {
          "speciesId": "stellers-jay",
          "day": 7
        },
        {
          "speciesId": "northern-flicker",
          "day": 8
        },
        {
          "speciesId": "western-bluebird",
          "day": 9
        },
        {
          "speciesId": "annas-hummingbird",
          "day": 10
        },
        {
          "speciesId": "black-phoebe",
          "day": 11
        },
        {
          "speciesId": "gray-whale",
          "day": 12
        },
        {
          "speciesId": "humpback-whale",
          "day": 13
        },
        {
          "speciesId": "harbor-seal",
          "day": 14
        },
        {
          "speciesId": "sea-otter",
          "day": 15
        },
        {
          "speciesId": "snow-goose",
          "day": 16
        },
        {
          "speciesId": "tundra-swan",
          "day": 17
        },
        {
          "speciesId": "canada-goose",
          "day": 18
        },
        {
          "speciesId": "american-wigeon",
          "day": 19
        },
        {
          "speciesId": "northern-pintail",
          "day": 20
        },
        {
          "speciesId": "bufflehead",
          "day": 21
        },
        {
          "speciesId": "common-goldeneye",
          "day": 22
        },
        {
          "speciesId": "ruddy-duck",
          "day": 23
        },
        {
          "speciesId": "western-grebe",
          "day": 24
        },
        {
          "speciesId": "common-loon",
          "day": 25
        },
        {
          "speciesId": "bald-eagle",
          "day": 26
        },
        {
          "speciesId": "red-tailed-hawk",
          "day": 27
        },
        {
          "speciesId": "northern-harrier",
          "day": 28
        },
        {
          "speciesId": "coyote",
          "day": 29
        },
        {
          "speciesId": "bobcat",
          "day": 30
        },
        {
          "speciesId": "mule-deer",
          "day": 31
        }
      ],
      "backgroundCopyright": "James Donovan"
    }
  ],
  "config": {
    "defaultYear": 2026,
    "defaultLang": "zh"
  },
  "leapDayContent": {
    "nameZh": "闰日彩蛋 · 时光的礼物",
    "nameEn": "Leap Day Surprise · A Gift of Time",
    "seasonZh": "四年一遇 · 大自然多出的一天",
    "seasonEn": "Once Every Four Years · Nature's Extra Day",
    "descriptionZh": "今天是2月29日——闰年的馈赠！地球绕太阳公转一圈并非整整365天，而是约365.2422天。每四年我们便多出这一天，让日历与四季保持同步。大自然的节奏从不匆忙，偶尔也需要一个深呼吸。",
    "descriptionEn": "Today is February 29th — a gift of the leap year! Earth takes about 365.2422 days to orbit the Sun. Every four years we gain an extra day to keep our calendars aligned with the seasons. Nature's rhythm is never in a hurry — sometimes it just needs an extra breath.",
    "funFactZh": "闰年规则：四年一闰，百年不闰，四百年又闰。",
    "funFactEn": "Leap year rule: divisible by 4, but century years are skipped — unless divisible by 400."
  }
};