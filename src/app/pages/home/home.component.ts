import { AfterViewInit , Component } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements AfterViewInit{
  ngAfterViewInit() {
    /*Align social media with </software developer>*/
    // @ts-ignore

    $('#home-page-container').height('calc(100vh - '+$('#navbar-container').height()+'px*2)');
    $('#home-footer').width($('#home-introduction span').width()+'px');
}
}
