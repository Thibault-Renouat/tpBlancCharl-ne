import { Component, OnInit } from '@angular/core';
import { Message} from "../../models/message";
import { MessageService} from "../../services/message.service";
import {ActivatedRoute, Router} from "@angular/router";

@Component({
  selector: 'app-edit-message',
  templateUrl: './edit-message.component.html',
  styleUrls: ['./edit-message.component.css']
})
export class EditMessageComponent implements OnInit {

  messageToEdit: Message = new Message();


  constructor(private messageService: MessageService, private router:Router, private route:ActivatedRoute) { }

  ngOnInit(): void {
    this.messageService.getOneMessageById(+this.route.snapshot.paramMap.get('id')).subscribe((data:Message) => {this.messageToEdit= data});

  }

  onSubmit() {
    this.messageService.edit(this.messageToEdit).subscribe(then => {
      this.router.navigate(['/home']);
    });
  }



}
