import { Component, OnInit } from '@angular/core';
import { Message} from "../../models/message";
import { MessageService} from "../../services/message.service";
import {ActivatedRoute, Router} from "@angular/router";

@Component({
  selector: 'app-message-detail',
  templateUrl: './message-detail.component.html',
  styleUrls: ['./message-detail.component.css']
})
export class MessageDetailComponent implements OnInit {

  id:number;
  messageDetail:Message;

  constructor(private messageService: MessageService, private router: Router, private route:ActivatedRoute) { }

  ngOnInit(): void {
    // this.id = parseInt(this.route.snapshot.paramMap.get('id'));

    this.messageService.getOneMessageById(+this.route.snapshot.paramMap.get('id')).subscribe((data:Message) => {this.messageDetail = data});


  }

}
