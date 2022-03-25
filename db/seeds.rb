# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the bin/rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)

m = "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRgEE59_Qs18h__ydFK6atr32YP2I-rFn_Acw&usqp=CAU"
d = "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRioWqUUePHXY-kat-psDw3LdoLY7duXon8yg&usqp=CAU"
k = "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSNMvQKrbHR0wY2cu7Pqxf5oqJXjGt8QU9F8Q&usqp=CAU"
a = "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTHV6Vw6NNr3rzlHBt307SSTlLphBCTYXIj5w&usqp=CAU"


 
matt = User.create(username: "MQ", password: "1234", profile_pic: m)
dmitry = User.create(username: "DU", password: "abcd", profile_pic: d)
kevin = User.create(username: "KG", password: "5678", profile_pic: k)
adam = User.create(username: "AL", password: "efgh", profile_pic: a)

computer = "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTOzyiDhNMtk7EIf30Qz8Q_C7tLgvpw17MCJg&usqp=CAU"
iphone = "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSYZgQkGhzzaGImYLNE-ZWbI7tkXePwnd0DqA&usqp=CAU"
hp = "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ-EPSiXoEtOjJXERho4lU4BWKo2nqVRHZOWg&usqp=CAU"
tablet = "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQJg38bqo5GuNgG11yQlyFBj7gfAWe-rWOSEw&usqp=CAU"
golf = "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRaOu4kdeOidIhkCq2ie5C8j219buzaqLaXZw&usqp=CAU"
basketball = "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSNX8sPVqCieyJt3K-_TT55ozaRWh1pTCEOWw&usqp=CAU"
hockey = "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT9bSqLkO3O2YEpeJDaDAHmglGHpmctWYyTcQ&usqp=CAU"
cb = "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQvpFMk4yk-Vxy91GrEBGqmUnzAZkeKcWNDfA&usqp=CAU"
knife = "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTlvzRE--UndVC2wHfaQVxSEin_5TCkEiWVlw&usqp=CAU"
sw = "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTP9h0vqRozleonhXqrEk_UY_OlWCUSUY5weFeN92VApwMm9RFKVLbh5XUSZGW3C4Qc-JM&usqp=CAU"


Post.create(name: "computer", description: "Device that performs processes, calculations and operations based on instructions provided by a software or hardware program.", category: "technology", image_url: computer, user_id: matt.id, price: 1000)
Post.create(name: "iPhone", description: "Smartphone made by Apple that combines a computer, iPod, digital camera and cellular phone into one device with a touchscreen interface.", category: "technology", image_url: iphone, user_id: matt.id, price: 500)
Post.create(name: "headphones", description: "Headphones are a pair of small speakers used for listening to sound from a computer, music player or other such electronic device.", category: "technology", image_url: hp, user_id: matt.id, price: 100)
Post.create(name: "tablet", description: "Wireless, portable personal computer with a touchscreen interface.", category: "technology", image_url: tablet, user_id: matt.id, price: 450)
Post.create(name: "golf clubs", description: "Used to hit a golf ball in a game of golf. Each club is composed of a shaft with a grip and a club head.", category: "sports" , image_url: golf, user_id: dmitry.id, price: 450)
Post.create(name: "basketball hoop", description: "Goals attached to the backboard and used for scoring points in a game of basketball.", category: "sports", image_url: basketball, user_id: dmitry.id, price: 1000)
Post.create(name: "hockey stick", description: "Piece of sports equipment used by the players in all the forms of hockey to move the ball or puck.", category: "sports", image_url: hockey, user_id: dmitry.id, price: 100)
Post.create(name: "cutting board", description: "A kitchen utensil used as a protective surface on which to cut or slice things.", category: "kitchen", image_url: cb, user_id: kevin.id, price: 50)
Post.create(name: "kitchen knife", description: "Used for cutting meat, dicing vegetables, disjointing some cuts, slicing herbs, and chopping nuts, but there are a number of different varieties for separate purposes, including carving, slicing and bread knives for specific ingredients.", category: "kitchen", image_url: knife, user_id: kevin.id, price: 25)
Post.create(name: "silverware", description: "Dishes, containers, or cutlery made of or coated with silver.", category: "kitchen", image_url: sw, user_id: kevin.id, price: 25)