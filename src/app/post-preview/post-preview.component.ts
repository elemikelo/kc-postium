import { Component, Input, Output, EventEmitter } from '@angular/core';

import { Post } from './../post';
import { User } from './../user';


@Component({
  selector: 'post-preview',
  templateUrl: './post-preview.component.html',
  styleUrls: ['./post-preview.component.css']
})
export class PostPreviewComponent {

  @Input() post: Post;
  @Output() onClickPost: EventEmitter<Post>;
  @Output() onClickAuthor: EventEmitter<User>;

  constructor(){
    this.onClickAuthor = new EventEmitter<User>();
    this.onClickPost = new EventEmitter<Post>();
  }

  /*------------------------------------------------------------------------------------------------------------------|
   | ~~~ Red Path ~~~                                                                                                 |
   |------------------------------------------------------------------------------------------------------------------|
   | Expón un atributo de salida con el decorador correspondiente. El tipo de dicho atributo debe permitir la emisión |
   | de eventos; la idea es enviar al componente padre el usuario sobre el cuál se ha hecho clic. Y puesto que dicho  |
   | clic se realiza en el template de este componente, necesitas, además, un manejador para el mismo.                |
   |------------------------------------------------------------------------------------------------------------------*/


   notifyAuthorHandler(author: User): void {
     this.onClickAuthor.emit(author);
   }
  /*------------------------------------------------------------------------------------------------------------------|
   | ~~~ Green Path ~~~                                                                                               |
   |------------------------------------------------------------------------------------------------------------------|
   | Expón un atributo de salida con el decorador correspondiente. El tipo de dicho atributo debe permitir la emisión |
   | de eventos; la idea es enviar al componente padre el post sobre el cuál se ha hecho clic. Y puesto que dicho     |
   | clic se realiza en el template de este componente, necesitas, además, un manejador para el mismo.                |
   |------------------------------------------------------------------------------------------------------------------*/

  notifyPostHandler(post: Post): void {
    this.onClickPost.emit(post);
  }


  plainTextToHtml(text: string): string {
    return text ? `<p>${text.replace(/\n/gi, "</p><p>")}</p>` : '';
  }

}
