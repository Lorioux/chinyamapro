import { Component, OnInit } from '@angular/core';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-topbar',
  templateUrl: './topbar.component.html',
  styleUrls: ['./topbar.component.css']
})
export class TopbarComponent implements OnInit {

  closeResult: string;
  constructor(private modalService: NgbModal) { }
  open(content: any) {
    this.modalService.open(content, { centered: true, windowClass: 'ms-modal-dialog-width ms-modal-content-width' });
  }
  // Nav toggle
  navToggle = () => {
    document.getElementById('body').classList.toggle('ms-aside-left-open');
    document.getElementById('ms-side-nav').classList.toggle('ms-aside-open');
    document.getElementById('overlayleft').classList.toggle('d-block');
  }
  optionsToggle = () => {
    document.getElementById('ms-nav-options').classList.toggle('ms-slide-down');
  }

  ngOnInit(): void {
  }

}
