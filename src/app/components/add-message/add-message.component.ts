import { Component, OnInit } from '@angular/core';
import { Message} from "../../models/message";
import { MessageService} from "../../services/message.service";
import {Router} from "@angular/router";
import {logger} from "codelyzer/util/logger";

@Component({
  selector: 'app-add-message',
  templateUrl: './add-message.component.html',
  styleUrls: ['./add-message.component.css']
})
export class AddMessageComponent implements OnInit {

  messageToAdd: Message = new Message();

  constructor(private messageService: MessageService, private router:Router) { }

  ngOnInit(): void {
  }

  logTest(): void{
    console.log(this.messageToAdd)
  }

  onSubmit(): void{
    this.messageService.addMessage(this.messageToAdd).subscribe(then => {
      this.router.navigate(['/home']);
    });
  }


}
