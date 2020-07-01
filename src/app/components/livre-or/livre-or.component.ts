import { Component, OnInit } from '@angular/core';
import { Message} from "../../models/message";
import { MessageService} from "../../services/message.service";

@Component({
  selector: 'app-livre-or',
  templateUrl: './livre-or.component.html',
  styleUrls: ['./livre-or.component.css']
})
export class LivreOrComponent implements OnInit {

  messages:Message[];

  constructor(private messageService: MessageService) { }

  ngOnInit(): void {

    this.messageService.getAllMessages().subscribe((data: Message[]) => {
      this.messages = data
    });


  }

}
