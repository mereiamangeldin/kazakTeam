import {Product} from "./models";

export class MyDB{
  static Products = [
    {ID: 1,
      Name: "Спортивный костюм Adidas",
      Description: "ткань: хлопок",
      CategoryID: 1,
      Price: 25000,
      img: "https://scontent.fala11-1.fna.fbcdn.net/v/t39.30808-6/337130617_1156692755027365_2133735210639431813_n.jpg?_nc_cat=100&ccb=1-7&_nc_sid=730e14&_nc_ohc=pahnlHFYVVAAX9FQVeB&_nc_ht=scontent.fala11-1.fna&oh=00_AfDUJ3WsVxa4Yox4ilzLZtR6jsD6ckIWPwu6t0J2kzulqw&oe=644888AE",
      liked: false
    },
    {ID: 2,
      Name:'Спортивные костюм Adidas',
      Description:'ткань: хлопок',
      CategoryID: 1, Price:25000,
      img: "https://scontent.fala11-1.fna.fbcdn.net/v/t39.30808-6/337369277_1776376049431487_6872932571088076440_n.jpg?_nc_cat=104&ccb=1-7&_nc_sid=730e14&_nc_ohc=-fr46lqR9UoAX9HDXDE&_nc_ht=scontent.fala11-1.fna&oh=00_AfDj3jsghEbklURFs_xhODV-lgM5oiJaJduoeWwy7KKqaw&oe=6448154B",
      liked: false
    },
  ];

  static GetProductByID(id: number): Product | undefined{
    let product = MyDB.Products.find(product => product.ID == id)
    return product
  }

}
