export const products = [
  {
    category: "Hamburguer",
    icon: require("@assets/icons/hamburger.png"),
    data: [
      {
        id: "0",
        name: "Matuto",
        price: "21.99",
        photo: require("@assets/images/matuto.png"),
        description:
          "Pão Brioche Tostado, Blend Suculento 100g, Ovo Frito, Queijo Mussarela Flambado, Cebola bem picadinha e sem acidez, um leve toque de Mostarda Amarela, Alface Americana, Tomate Grelhado e molho especial do Chef.",
      },
      {
        id: "1",
        name: "Danado de bão",
        price: "24.99",
        photo: require("@assets/images/danado_de_bao.png"),
        description:
          "Pão Brioche Tostado, Blend Suculento 160g, Queijo Mussarela, Bacon, Barbecue e Molho da Casa.",
      },
      {
        id: "2",
        name: "Rochedo",
        price: "26.99",
        photo: require("@assets/images/rochedo.png"),
        description:
          "Pão Brioche Tostado, Blend Suculento 160g, Queijo Mussarela Flambado, Muita Cebola Crispy, Cream Cheese Original e Geleia de Pimenta",
      },
      {
        id: "3",
        name: "Tedoidé",
        price: "29.99",
        photo: require("@assets/images/tedoidoe.png"),
        description:
          "Muito Cheddar Cremoso, Batata Frita Temperada, Farofa de Bacon, Blend Suculento de 160g, Pão Brioche Tostado na Manteiga, acompanhada de uma deliciosa maionese exclusiva",
      },
      {
        id: "4",
        name: "Bomkisó",
        price: "19.99",
        photo: require("@assets/images/bomkiso.png"),
        description:
          "Blend Suculento de 100g, Muito Cheddar Cremoso Quentinho, toque especial de finas rodelas de cebola roxa e Pão Brioche fresquinho",
      },
    ],
  },
  {
    category: "Refrigerante",
    icon: require("@assets/icons/refrigerante.png"),
    data: [
      {
        id: "5",
        name: "Coca Cola",
        price: "6.50",
        photo: require("@assets/images/coca_cola.png"),
        description: "Lata 350ml",
      },
      {
        id: "6",
        name: "Guaraná Antarctica",
        price: "6.50",
        photo: require("@assets/images/guarana_antarctica.png"),
        description: "Lata 350ml",
      },
      {
        id: "7",
        name: "Guaraná Jesus",
        price: "6.50",
        photo: require("@assets/images/guarana_jesus.png"),
        description: "Lata 350ml",
      },
    ],
  },
  {
    category: "Batata Frita",
    icon: require("@assets/icons/batata_frita.png"),
    data: [
      {
        id: "8",
        name: "Batata Fritas porção 100g",
        price: "9.50",
        photo: require("@assets/images/batata_frita_100.png"),
        description:
          "Deliciosa Batata Crinkle Frita Sequinha e Crocante acompanhada de um ótimo ketchup",
      },
      {
        id: "9",
        name: "Batata Fritas porção 200g",
        price: "17",
        photo: require("@assets/images/batata_frita_100.png"),
        description:
          "Deliciosa Batata Crinkle Frita Sequinha e Crocante acompanhada de um ótimo ketchup",
      },
      {
        id: "10",
        name: "Batata Fritas porção com cheddar e bacon",
        price: "22.99",
        photo: require("@assets/images/batata_frita_cheddar_bacon.png"),
        description: "Batata Crinkle Frita com Creme de Cheddar e Bacon Crispy",
      },
    ],
  },
];

export const categories = products.map(({ category }) => category);
