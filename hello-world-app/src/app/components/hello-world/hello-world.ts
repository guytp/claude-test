import { Component, OnInit } from '@angular/core';
import { HelloWorldService } from '../../services/hello-world';

@Component({
  selector: 'app-hello-world',
  imports: [],
  templateUrl: './hello-world.html',
  styleUrl: './hello-world.scss'
})
export class HelloWorldComponent implements OnInit {
  message: string | null = null;

  constructor(private helloWorldService: HelloWorldService) {}

  ngOnInit(): void {
    this.helloWorldService.getHelloWorld().subscribe(response => {
      this.message = response;
    });
  }
}
