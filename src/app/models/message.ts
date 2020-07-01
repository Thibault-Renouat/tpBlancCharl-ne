export class Message {

  id:number;
  titre:string;
  description:string;
  image:string;
  dateAjout:DateConstructor;

  constructor(id: number=null, titre: string=null, description: string=null, image: string=null, dateAjout: DateConstructor=null) {
    this.id = id;
    this.titre = titre;
    this.description = description;
    this.image = image;
    this.dateAjout = dateAjout;
  }




}
