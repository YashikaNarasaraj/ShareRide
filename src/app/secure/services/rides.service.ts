export class RidesService{

  public serv_id : any;
  public serv_name : any;
  public serv_age : any;
  public serv_gender : any;
  public serv_source : any;
  public serv_destination : any;
  public serv_carModel : any;
  public serv_carNum : any;
  public serv_exp : any;
  public serv_price : any;
  public serv_seats : any;
  public serv_rating = 5;
  public serv_date : any;
  public serv_time : any;
  public serv_phone : any;
  public serv_email : any;
  public serv_dob : any;
  
  public mon_tor = [{id : 1, name: 'Praveen Kumar', age: 23 , gender : "male", source: "Montreal", Destination : "Toronto", CarModel : "BMW", CarNum : "SN 45 RTS", exp : 4, price: '40 $', seats: 4, img : "assets/cars/car11.jpg", rating : 5, date : "10/May/2020", Time : "5 PM", Phone : "+1 438-364-4455" },
  {id : 2, name: 'Yashika Narasaraj', age: 25 , gender : "female", source: "Montreal", Destination : "Toronto", CarModel : "Chevrolet Corvette", CarNum : "SN 65 CTV", exp : 6, price: '45 $', seats: 4, img : "assets/cars/car5.jpg", rating : 5, date : "15/May/2020", Time : "10 AM", Phone : "+1 438-364-4455" },
  {id : 3, name: 'Shashidhar Reddy', age: 23 , gender : "male", source: "Montreal", Destination : "Toronto", CarModel : "Maecedes Benz", CarNum : "MN4550", exp : 4, price: '30 $', seats: 4, img : "assets/cars/car.jpeg", rating : 5, date : "12/May/2020", Time : "2 PM", Phone : "+1 438-364-4455" },
  {id : 4, name: 'Naveena H Nagaraju', age: 25 , gender : "female", source: "Montreal", Destination : "Toronto", CarModel : "Mazda 3", CarNum : "MN6758", exp : 6, price: '35 $', seats: 4, img : "assets/cars/car8.jpg", rating : 5, date : "11/May/2020", Time : "6 PM", Phone : "+1 438-364-4455" },
  {id : 5, name: 'Anirudh', age: 22 , gender : "male", source: "Montreal", Destination : "Toronto", CarModel : "Chervolet cruze", CarNum : "MN6758", exp : 4, price: '60 $', seats: 4, img : "assets/cars/car4.jpg", rating : 5, date : "10/May/2020", Time : "11 AM", Phone : "+1 438-364-4455" },
  {id : 6, name: 'Varadutt', age: 23 , gender : "male", source: "Montreal", Destination : "Toronto", CarModel : "Volkswagen Golf", CarNum : "SY3678", exp : 3, price: '50 $', seats: 4, img : "assets/cars/car1.jpg", rating : 5, date : "13/May/2020", Time : "9 AM", Phone : "+1 438-364-4455" },
  {id : 7, name: 'Vineeth', age: 22 , gender : "male", source: "Montreal", Destination : "Toronto", CarModel : "Volkswagen Jetta", CarNum : "TR0957", exp : 2, price: '55 $', seats: 8, img : "assets/cars/car7.jpg", rating : 5, date : "12/May/2020", Time : "3 PM", Phone : "+1 438-364-4455" },
  {id : 8, name: 'Shiva Teja', age: 24 , gender : "male", source: "Montreal", Destination : "Toronto", CarModel : "Kia Forte", CarNum : "NS5647", exp : 5, price: '45 $', seats: 4, img : "assets/cars/car9.jpg", rating : 5, date : "11/May/2020", Time : "1 PM", Phone : "+1 438-364-4455" }]

  public mon_hal = [{id : 1, name: 'Rehman Zalil', age: 42 , gender : "male", source: "Montreal", Destination : "Halifax", CarModel : "Hyundai Elantra", CarNum : "MN4550", exp : 12, price: '70 $', seats: 4, img : "assets/cars/car3.jpg", rating : 5, date : "10/May/2020", Time : "5 PM", Phone : "+1 438-364-4455" },
  {id : 2, name: 'Daman Singh', age: 29 , gender : "male", source: "Montreal", Destination : "Halifax", CarModel : "BMW", CarNum : "SY4598", exp : 9, price: '60 $', seats: 4, img : "assets/cars/car10.jpg", rating : 5, date : "15/May/2020", Time : "10 AM", Phone : "+1 438-364-4455" }
  ]

  public mon_bra = [{id : 1, name: 'Manish Maruthi', age: 23 , gender : "male", source: "Montreal", Destination : "Brampton", CarModel : "BMW", CarNum : "MN4551", exp : 4, price: '40 $', seats: 4, img : "assets/cars/car2.jpg", rating : 5, date : "10/May/2020", Time : "5 PM", Phone : "+1 438-364-4455" },
  {id : 2, name: 'Kiran Kumar', age: 25 , gender : "male", source: "Montreal", Destination : "Brampton", CarModel : "HyundHyundai Elantraai", CarNum : "SY3678", exp : 7, price: '45 $', seats: 4, img : "assets/cars/car12.jpg", rating : 5, date : "15/May/2020", Time : "10 AM", Phone : "+1 438-364-4455" },
  {id : 3, name: 'Tadi Praveen', age: 23 , gender : "male", source: "Montreal", Destination : "Brampton", CarModel : "Volkswagen", CarNum : "MY3546", exp : 4, price: '30 $', seats: 4, img : "assets/cars/car8.jpg", rating : 5, date : "12/May/2020", Time : "2 PM", Phone : "+1 438-364-4455" },
  {id : 4, name: 'Susmitha Kodam', age: 25 , gender : "female", source: "Montreal", Destination : "Brampton", CarModel : "Chevrolet", CarNum : "SN7586", exp : 7, price: '35 $', seats: 7, img : "assets/cars/car7.jpg", rating : 5, date : "11/May/2020", Time : "6 PM", Phone : "+1 438-364-4455" },
  {id : 5, name: 'Divya Vangamagala', age: 22 , gender : "female", source: "Montreal", Destination : "Brampton", CarModel : "Kia", CarNum : "YR2346", exp : 4, price: '60 $', seats: 4, img : "assets/cars/car.jpeg", rating : 5, date : "10/May/2020", Time : "11 AM", Phone : "+1 438-364-4455" }]

  public routes = "mon_tor";

}